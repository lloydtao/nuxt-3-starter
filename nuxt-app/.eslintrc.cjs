module.exports = {
  root: true,
  env: {
    browser: true,
    "jest/globals": true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: ["jest"],
  // add your custom rules here
  rules: {},
};
