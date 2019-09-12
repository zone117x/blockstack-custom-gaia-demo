const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const opts = {
    devServer: {
      contentBase: [__dirname, path.join(__dirname, 'dist')],
      index: path.join(__dirname, 'index.html'),
      host: '127.0.0.1',
      port: 9000,
      open: true,
      before: app => {
        // Configure manifest.json CORS headers.
        app.get('/manifest.json', (req, res, next) => {
          res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET',
          });
          next();
        })
      }
    }
  };
  
  if (isProd) {
    opts.devtool = 'source-map';
  }

  return opts;
};