const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",
});
// vue.config.js file to be placed in the root of your repository
