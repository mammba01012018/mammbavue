// vue.config.js
module.exports = {
  configureWebpack: {
    externals: {
      // global app config object
      config: JSON.stringify({
        apiUrl: "http://jpcloudusa021.nshostserver.net:33926"
      })
    }
  }
};
