module.exports = {
    "env": {
      "shared-node-browser": true,
      "commonjs": true,
      "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "react/jsx-indent": ["error", 2]
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "plugins": [
        "standard",
        "react"
    ]
};
