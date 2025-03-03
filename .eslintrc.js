module.exports = {
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
      "prettier/prettier": "error"
    }
  };  