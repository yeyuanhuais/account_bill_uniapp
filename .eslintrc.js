module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  globals: {
    wx: "readonly",
    // App: "readonly",
    // Page: "readonly",
    __wxConfig: "readonly",
    getCurrentPages: "readonly",
    // getApp: "readonly",
    requirePlugin: "readonly",
    uni: "readonly",
  },
  parser: "vue-eslint-parser",
  rules: {
    // 结尾必须有分号;
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    camelcase: "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-param-reassign": "off",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "vue/multi-word-component-names": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "consistent-return": "off",
    "no-plusplus": "warn",
  },
  settings: {
    "import/ignore": ["node_modules"],
    "import/resolver": {
      // 忽略webpack 别名的报错
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".less", ".json", "vue"],
      },
    },
  },
};
