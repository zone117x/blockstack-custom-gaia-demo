module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "prefer-const": "error",
    }
};
