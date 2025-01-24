const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware('/api',{
      target: 'https://localhost:44322',
      changeOrigin: true,
    }),
  );
};
