const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#62b0ff',
      '@success-color': '#62b0ff',
      '@text-selection-bg': '#62b0ff',
      '@link-color': '#62b0ff',
    },
  })
);
