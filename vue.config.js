const BrotliPlugin = require("brotli-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  configureWebpack: {
    plugins: [
      new BrotliPlugin({
        asset: "[path].br[query]",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.7
      })
    ]
  },
  outputDir: "docs",
  publicPath:
    process.env.NODE_ENV === "production" ? "/antipatterns-checklist/" : "/"
};
