const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === "production"
          ? "https://domain.com"
          : "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    })
  );

  app.use(
    "/auth",
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
