import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            import: importPlugin,
            "unused-imports": unusedImports,
            prettier: prettierPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {},
            },
        },
        rules: {
            // React and typescript
            "react/react-in-jsx-scope": "off",
            "func-style": ["error", "expression"],
            "@typescript-eslint/no-explicit-any": "error",

            // React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // Final line break
            "eol-last": ["warn", "always"],
            "no-console": "warn",

            // Unused imports
            "unused-imports/no-unused-imports": "error",
            "no-unused-vars": "off",

            semi: ["warn", "always"],
            "prettier/prettier": "warn",
        },
    },
    prettierConfig,
];
