import js from "@eslint/js";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

// NOTE: typescript-eslint does not support the TS 7.0 native compiler yet, so we
// parse with @babel/eslint-parser (strips types) for syntactic/security lint and
// rely on `tsc --noEmit` (npm run typecheck) for full type checking.
export default [
  { ignores: ["dist", "node_modules"] },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: { jsx: true },
        babelOptions: {
          presets: [
            ["@babel/preset-react", { runtime: "automatic" }],
            "@babel/preset-typescript",
          ],
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: { react: { version: "19.2" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Secure-coding guardrails (OWASP A03 - XSS)
      "react/no-danger": "error",
      "react/jsx-no-target-blank": [
        "error",
        { allowReferrer: false, enforceDynamicLinks: "always", warnOnSpreadAttributes: true },
      ],

      // Types are enforced by `tsc --noEmit`; disable core rules that produce
      // false positives on TypeScript type syntax under the Babel parser.
      "no-unused-vars": "off",
      "no-undef": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
];
