module.exports = exports = {
  "root": true,

  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },

  "plugins": [
    "react"
  ],

  "extends": [
    "standard",
    "standard-react"
  ],

  "rules":{
    "no-console": 0,
  },

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "sourceType": "module",
  },

}
