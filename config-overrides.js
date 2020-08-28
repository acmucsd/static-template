const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#e981a0',
      '@success-color': '#e981a0',
      '@text-selection-bg': '#e981a0',
      '@link-color': '#e981a0',
    },
  })
);
