const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#F95738",
              "@border-radius-base": "5px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
