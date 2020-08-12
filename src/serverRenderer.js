import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { getBundles } from 'react-loadable-ssr-addon';
import Loadable from 'react-loadable';
import configureStore from './store/store';
import { App } from './components/App';
import manifest from '../dist/react-loadable-ssr-addon.json';
import { ServerStyleSheet } from 'styled-components';

const getTemplate = (html, state, scripts, styles, styleBundles) => (
  `
  <!doctype html>
  <html>
    <head>
      <meta charset=utf-8>
      <title>React Server Side Rendering</title>
      ${styleBundles.map((style) => `<link href="/${style.file}" rel="stylesheet" />`).join('\n')}
      ${styles}
      </head>
    <body>
      <div id="root">${html}</div>
      <script>
         window.PRELOADED_STATE = ${JSON.stringify(state).replace(/</g, '\\u003c')}
      </script>
      ${scripts.map((script) => `<script src="/${script.file}"></script>`).join('\n')}
    </body>
  </html>
`
);

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};
    const modules = new Set();
    const sheet = new ServerStyleSheet();

    store
      .runSaga()
      .toPromise()
      .then(() => {
        const template = renderToString(
          sheet.collectStyles(
            <Loadable.Capture report={(moduleName) => modules.add(moduleName)}>
              <App
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
              />
            </Loadable.Capture>,)
          
        );

        const bundles = getBundles(manifest, [...manifest.entrypoints, ...modules]);
        const scripts = bundles.js || [];
        const styleBundles = bundles.css || [];
        const preloadedState = store.getState();
        const styleTags = sheet.getStyleTags();

        res.send(
          getTemplate(
            template, 
            preloadedState, 
            scripts, 
            styleTags, 
            styleBundles
          )
        );
      });

    // Do first render, starts initial actions.
    renderToString(
      sheet.collectStyles(
        <Loadable.Capture report={(moduleName) => modules.add(moduleName)}>
          <App
            context={context}
            location={req.url}
            Router={StaticRouter}
            store={store}
          />
        </Loadable.Capture>
      )
    );

    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
