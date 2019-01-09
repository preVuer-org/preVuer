module.exports = {
  presets: [
    '@vue/app',
    '@babel/preset-env',
  ],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "@"
      }
    ]
  ]
};
