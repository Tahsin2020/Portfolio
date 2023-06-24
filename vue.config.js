const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: "/Portfolio/",
  // transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
});
// vue.config.js file to be placed in the root of your repository
