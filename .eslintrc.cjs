// .eslintrc.cjs
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
        // Customize rules as you prefer:
        // "vue/multi-word-component-names": "off",
        // "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    overrides: [
        {
            files: ["**/__tests__/**/*.{j,t}s?(x)", "**/*.{test,spec}.{j,t}s?(x)"],
            env: { jest: true },
        },
    ],
};