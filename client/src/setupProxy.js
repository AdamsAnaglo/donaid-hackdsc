const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/*",
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === "production"
          ? "https://domain.com"
          : "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    })
  );
};
