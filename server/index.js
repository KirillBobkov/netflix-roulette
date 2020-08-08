const Loadable = require('react-loadable');
const app = require('./app');
const port = process.env.PORT || 4000;

Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.info(`Express listening on port ${port}`); // eslint-disable-line
  });
}).catch(err => {
  console.log(err);
});