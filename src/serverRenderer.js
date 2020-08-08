import React from 'react';
import { App } from './components/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './store/store';
import { getBundles } from 'react-loadable-ssr-addon';
import Loadable from 'react-loadable';

const manifest = require('../dist/react-loadable-ssr-addon.json');

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};
    
    const modules = new Set();

    store
      .runSaga()
      .toPromise()
      .then(() => {
        const htmlString = renderToString(
          <Loadable.Capture report={moduleName => modules.add(moduleName)}>
            <App
              context={context}
              location={req.url}
              Router={StaticRouter}
              store={store}
            />
          </Loadable.Capture>
          );

        const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)]);
        const styles = bundles.css || [];
        const scripts = bundles.js || [];

        const preloadedState = store.getState();

        res.send(
        `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React Server Side Rendering</title>
            ${styles.map(style => {
              return `<link href="/${style.file}" rel="stylesheet" />`;
            }).join('\n')}
          </head>
          <body>
            <div id="root">${htmlString}</div>
            <script>
               window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            ${scripts.map(script => {
              return `<script src="/${script.file}"></script>`
            }).join('\n')}
          </body>
        </html>
    `);

    });

    // Do first render, starts initial actions.
    renderToString(
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />);



    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
