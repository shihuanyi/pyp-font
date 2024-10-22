const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    devServer: {
        allowedHosts: "all",
        proxy: {
            '/api': {
              target: 'http://localhost:8080',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
            }
          }
    },
});

