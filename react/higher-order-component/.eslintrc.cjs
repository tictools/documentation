const STATUS = {
  OFF: "off",
  WARN: "warn",
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": STATUS.OFF,
    "react-refresh/only-export-components": [
      STATUS.WARN,
      { allowConstantExport: true },
    ],
    "react-hooks/exhaustive-deps": STATUS.OFF,
    "react/prop-types": STATUS.OFF,
    "no-unused-vars": STATUS.OFF,
  },
};
