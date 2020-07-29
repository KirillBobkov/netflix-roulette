import React from 'react';
import { App } from './components/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './store/store';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
             window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    store.runSaga().toPromise().then(() => {
      const htmlString = renderToString(renderRoot());
      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });

    // Do first render, starts initial actions.
    renderToString(renderRoot());
    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
