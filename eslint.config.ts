/**
 * Blefnk's ESLint Configuration for Relivator 1.2.0
 * =================================================
 *
 * Remember to run `>ESLint: Restart ESLint Server`
 * command after making changes and the file saving.
 * Tip: Open `>Keyboard Shortcuts` and bind restart.
 *
 * When using ESLint VSCode extension, make sure you
 * have `Use Flat Config` option enabled in settings.
 * Bonus tip: When using Relivator, use `pnpm appts`.
 *
 * Note: antfu already includes the following plugins:
 * typescript, stylistic, perfectionist, jsonc, react,
 * unicorn, unocss, vue, yaml, toml, jsdoc, markdown.
 * Go to `export default antfu` to see actual config.
 *
 * @see https://github.com/antfu/eslint-config#antfueslint-config
 * @see https://github.com/blefnk/relivator#readme <== get config updates
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJsPlugin from "@eslint/js";
import importAliasPlugin from "@limegrass/eslint-plugin-import-alias";
import nextPlugin from "@next/eslint-plugin-next";
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import { Linter } from "eslint";
import * as airbnbBestPracticesConfig from "eslint-config-airbnb-base/rules/best-practices";
import * as airbnbErrorsConfig from "eslint-config-airbnb-base/rules/errors";
import * as airbnbES6Config from "eslint-config-airbnb-base/rules/es6";
import * as airbnbNodeConfig from "eslint-config-airbnb-base/rules/node";
import * as airbnbStyleConfig from "eslint-config-airbnb-base/rules/style";
import * as airbnbVariablesConfig from "eslint-config-airbnb-base/rules/variables";
import prettierConfigPlugin from "eslint-config-prettier";
import deprecationPlugin from "eslint-plugin-deprecation";
import drizzlePlugin from "eslint-plugin-drizzle";
import commentsPlugin from "eslint-plugin-eslint-comments";
import formatPlugin from "eslint-plugin-format";
import functionalPlugin from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import jestExtendedPlugin from "eslint-plugin-jest-extended";
import jestFormattingPlugin from "eslint-plugin-jest-formatting";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsoncPlugin from "eslint-plugin-jsonc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import nodePlugin from "eslint-plugin-n";
import noBarrelFilesPlugin from "eslint-plugin-no-barrel-files";
import noSecretsPlugin from "eslint-plugin-no-secrets";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactPluginConfigsRecommended from "eslint-plugin-react/configs/recommended";
import redundantUndefinedPlugin from "eslint-plugin-redundant-undefined";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import tsdocPlugin from "eslint-plugin-tsdoc";
import unicornPlugin from "eslint-plugin-unicorn";
import writeGoodCommentsPlugin from "eslint-plugin-write-good-comments";
import xssPlugin from "eslint-plugin-xss";
import jsoncParser from "jsonc-eslint-parser";

const compat = new FlatCompat();

export default antfu(
  {
    ignores: ["./.next", "./build", "./drizzle"],
    typescript: { tsconfigPath: "tsconfig.json" },
    stylistic: { quotes: "double", semi: true },
    settings: { react: { version: "detect" } },
    formatters: { css: true },
    react: true,
    vue: false,
    plugins: {
      "redundant-undefined": redundantUndefinedPlugin,
      "write-good-comments": writeGoodCommentsPlugin,
      "eslint-comments": commentsPlugin,
      "no-secrets": noSecretsPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "jsdoc": jsdocPlugin,
      "xss": xssPlugin,
      "react": reactPlugin,
      "@next/next": nextPlugin,
      "promise": promisePlugin,
      "unicorn": unicornPlugin,
      "functional": functionalPlugin,
      "react-hooks": reactHooksPlugin,
      "tailwindcss": tailwindcssPlugin,
      "prettier": prettierConfigPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...reactPluginConfigsRecommended.rules,
      ...promisePlugin.configs.recommended.rules,
      ...eslintJsPlugin.configs.recommended.rules,
      ...tailwindcssPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...unicornPlugin.configs.recommended.rules,
      ...jsdocPlugin.configs.recommended.rules,
      ...xssPlugin.configs.recommended.rules,
      ...airbnbBestPracticesConfig.rules,
      ...airbnbVariablesConfig.rules,
      ...airbnbErrorsConfig.rules,
      ...airbnbStyleConfig.rules,
      ...airbnbNodeConfig.rules,
      ...airbnbES6Config.rules,
      "computed-property-spacing": [
        "off",
        "never",
        { "enforceForClassMembers": true },
      ],
      "sort-imports": [
        "off",
        { "ignoreCase": true, "ignoreDeclarationSort": false },
      ],
      "space-before-function-paren": [
        "off",
        { "anonymous": "always", "named": "never", "asyncArrow": "always" },
      ],
      "unicorn/numeric-separators-style": [
        "off",
        { "onlyIfContainsSeparator": true },
      ],
      "jsdoc/require-jsdoc": [
        "off",
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            FunctionExpression: true,
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            MethodDefinition: true,
          },
          contexts: [
            "VariableDeclaration",
            "TSTypeAliasDeclaration",
            "TSPropertySignature",
          ],
          enableFixer: true,
        },
      ],
      "react/jsx-key": [
        "off",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "no-multiple-empty-lines": [
        "off",
        { "max": 1, "maxBOF": 0, "maxEOF": 1 },
      ],
      "antfu/consistent-list-newline": "off",
      "antfu/if-newline": "off",
      "antfu/top-level-function": "off",
      "array-bracket-newline": ["off", "consistent"],
      "array-bracket-spacing": ["off", "never"],
      "arrow-body-style": ["off", "always"],
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "block-scoped-var": "off",
      "block-spacing": ["off", "always"],
      "brace-style": ["off", "1tbs", { "allowSingleLine": true }],
      "camelcase": "off",
      "comma-dangle": ["off", "only-multiline"],
      "comma-spacing": ["off", { "before": false, "after": true }],
      "comma-style": ["off", "last"],
      "consistent-return": "off",
      "curly": "off",
      "default-case-last": "off",
      "default-case": "off",
      "default-param-last": ["off"],
      "dot-location": ["off", "property"],
      "eol-last": ["off", "always"],
      "eqeqeq": ["off", "always"],
      "eslint-plugin-jsx-a11y/blob": "off",
      "func-call-spacing": ["off", "never"],
      "func-names": "off",
      "func-style": ["off", "declaration"],
      "function-call-argument-newline": ["off", "consistent"],
      "function-paren-newline": ["off", "consistent"],
      "global-require": "off",
      "import/no-absolute-path": "off",
      "import/no-cycle": "off",
      "import/no-duplicates": "off",
      "import/no-dynamic-require": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-mutable-exports": "off",
      "import/no-named-as-default": "off",
      "import/order": ["off"],
      "import/prefer-default-export": "off",
      "indent": ["off", 2],
      "jsdoc/check-access": "off",
      "jsdoc/check-alignment": "off",
      "jsdoc/check-indentation": "off",
      "jsdoc/check-syntax": "off",
      "jsdoc/check-tag-names": "off",
      "jsdoc/no-blank-blocks": "off",
      "jsdoc/no-types": "off",
      "jsdoc/no-undefined-types": "off",
      "jsdoc/require-asterisk-prefix": "off",
      "jsdoc/require-description": "off",
      "jsdoc/require-hyphen-before-param-description": "off",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-param": ["off", { checkDestructuredRoots: false }],
      "jsdoc/require-returns-type": "off",
      "jsdoc/require-returns": "off",
      "jsdoc/require-throws": "off",
      "jsdoc/sort-tags": "off",
      "jsdoc/tag-lines": ["off", "never", { startLines: 1 }],
      "jsonc/sort-keys": "off",
      "jsx-a11y/anchor-has-content": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/heading-has-content": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-directive": "off",
      "lines-between-class-members": ["off", "always"],
      "new-cap": "off",
      "new-parens": "off",
      "max-len": "off",
      "dot-notation": "off",
      "implicit-arrow-linebreak": "off",
      "no-trailing-spaces": "off",
      "no-unused-expressions": "off",
      "no-use-before-define": "off",
      "nonblock-statement-body-position": "off",
      "react/no-unknown-property": "off",
      "style/no-trailing-spaces": "off",
      "style/spaced-comment": "off",
      "unused-imports/no-unused-imports": "off",
      "yaml/plain-scalar": "off",
      "no-alert": "off",
      "no-array-constructor": "off",
      "no-await-in-loop": "off",
      "no-bitwise": "off",
      "no-case-declarations": "off",
      "no-confusing-arrow": "off",
      "no-console": "off",
      "jsx-a11y/no-autofocus": "off",
      "style/eol-last": "off",
      "style/jsx-closing-tag-location": "off",
      "style/no-multiple-empty-lines": "off",
      "yaml/block-sequence": "off",
      "no-constant-condition": "off",
      "no-else-return": "off",
      "no-eval": "off",
      "no-extra-semi": "off",
      "no-lonely-if": "off",
      "no-multi-assign": "off",
      "no-multi-spaces": ["off", { "ignoreEOLComments": true }],
      "no-multi-str": "off",
      "no-nested-ternary": "off",
      "no-param-reassign": "off",
      "no-plusplus": "off",
      "no-promise-executor-return": "off",
      "no-redeclare": "off",
      "no-restricted-globals": "off",
      "no-restricted-properties": "off",
      "no-restricted-syntax": "off",
      "no-return-assign": "off",
      "no-return-await": "off",
      "no-shadow": "off",
      "no-tabs": "off",
      "no-template-curly-in-string": "off",
      "no-undef": "off",
      "no-unneeded-ternary": "off",
      "no-unused-vars": "off",
      "no-useless-return": "off",
      "no-var": "off",
      "no-void": "off",
      "no-warning-comments": "off",
      "no-whitespace-before-property": "off",
      "node/prefer-global/process": "off",
      "object-curly-newline": ["off", { "consistent": true }],
      "object-curly-spacing": ["off", "always"],
      "object-shorthand": "off",
      "one-var": "off",
      "operator-assignment": "off",
      "operator-linebreak": "off",
      "perfectionist/sort-array-includes": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-named-exports": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": "off",
      "perfectionist/sort-objects": "off",
      "perfectionist/sort-union-types": "off",
      "prefer-arrow-callback": "off",
      "prefer-const": "off",
      "prefer-destructuring": "off",
      "prefer-exponentiation-operator": "off",
      "prefer-rest-params": "off",
      "prefer-spread": "off",
      "prefer-template": "off",
      "promise/always-return": "off",
      "promise/catch-or-return": "off",
      "quote-props": "off",
      "quotes": ["off", "single", { "allowTemplateLiterals": true }],
      "radix": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      "react/button-has-type": "off",
      "react/destructuring-assignment": "off",
      "react/display-name": "off",
      "react/function-component-definition": "off",
      "react/jsx-boolean-value": "off",
      "react/jsx-curly-brace-presence": "off",
      "react/jsx-fragments": "off",
      "react/jsx-max-depth": ["off", { max: 5 }],
      "react/jsx-no-bind": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/jsx-no-leaked-render": ["off", { validStrategies: ["ternary"] }],
      "react/jsx-no-script-url": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-pascal-case": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-sort-props": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",
      "react/no-array-index-key": "off",
      "react/no-children-prop": "off",
      "react/no-danger-with-children": "off",
      "react/no-danger": "off",
      "react/no-typos": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unstable-nested-components": "off",
      "react/no-unused-prop-types": "off",
      "react/prefer-stateless-function": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/self-closing-comp": "off",
      "rest-spread-spacing": ["off", "never"],
      "rules/anchor-is-valid": "off",
      "semi-spacing": "off",
      "semi-style": ["off", "last"],
      "semi": "off",
      "sonarjs/cognitive-complexity": "off",
      "sonarjs/no-all-duplicated-branches": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-nested-template-literals": "off",
      "sonarjs/prefer-immediate-return": "off",
      "space-before-blocks": "off",
      "space-in-parens": ["off", "never"],
      "space-infix-ops": "off",
      "space-unary-ops": "off",
      "spaced-comment": "off",
      "style/arrow-parens": "off",
      "style/brace-style": "off",
      "style/indent-binary-ops": "off",
      "style/indent": "off",
      "style/jsx-curly-newline": "off",
      "style/jsx-indent": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/jsx-wrap-multilines": "off",
      "style/member-delimiter-style": "off",
      "style/multiline-ternary": "off",
      "style/operator-linebreak": "off",
      "style/quote-props": "off",
      "switch-colon-spacing": "off",
      "tailwindcss/no-custom-classname": "off",
      "template-curly-spacing": ["off", "never"],
      "unicorn/better-regex": "off",
      "unicorn/catch-error-name": ["off", { "name": "e" }],
      "unicorn/consistent-destructuring": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-empty-file": "off",
      "unicorn/no-negated-condition": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-null": ["off"],
      "unicorn/no-object-as-default-parameter": "off",
      "unicorn/no-process-exit": "off",
      "unicorn/no-typeof-undefined": "off",
      "unicorn/no-useless-switch-case": "off",
      "unicorn/prefer-array-flat-map": "off",
      "unicorn/prefer-array-some": "off",
      "unicorn/prefer-code-point": "off",
      "unicorn/prefer-date-now": "off",
      "unicorn/prefer-export-from": "off",
      "unicorn/prefer-logical-operator-over-ternary": "off",
      "unicorn/prefer-math-trunc": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-native-coercion-functions": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-number-properties": "off",
      "unicorn/prefer-optional-catch-binding": "off",
      "unicorn/prefer-set-has": "off",
      "unicorn/prefer-string-replace-all": "off",
      "unicorn/prefer-string-slice": "off",
      "unicorn/prefer-switch": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": ["off"],
      "unicorn/switch-case-braces": ["off", "avoid"],
      "unused-imports/no-unused-vars": "off",
      "write-good-comments/write-good-comments": "off",
      "xss/no-location-href-assign": "off",
      "xss/no-mixed-html": "off",
    },
  },
  ...compat.config({
    plugins: [
      "@limegrass/import-alias",
      "no-barrel-files",
      "no-secrets",
      "jsx-a11y",
      "drizzle",
      "sonarjs",
      "react-refresh",
      "@tanstack/query",
    ],
    extends: [
      "plugin:@tanstack/eslint-plugin-query/recommended",
      "plugin:deprecation/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:drizzle/recommended",
      "plugin:sonarjs/recommended",
    ],
    rules: {
      "@limegrass/import-alias/import-alias": "off",
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/no-rest-destructuring": "error",
      "@tanstack/query/stable-query-client": "error",
      "deprecation/deprecation": "off",
      "drizzle/enforce-delete-with-where": "off",
      "drizzle/enforce-update-with-where": "off",
      "no-barrel-files/no-barrel-files": "off",
      "no-secrets/no-secrets": "off",
      "react-refresh/only-export-components": "off",
    },
  }),
  {
    files: ["**/*.?(*)ts?(x)", ".test.ts(x)"],
    plugins: {
      "eslint-plugin-tsdoc": tsdocPlugin,
      "eslint-plugin-jest": jestPlugin,
    },
    rules: {
      "ts/space-before-function-paren": [
        "off",
        {
          "asyncArrow": "always",
          "anonymous": "always",
          "named": "never",
        },
      ],
      "ts/prefer-literal-enum-member": [
        "off",
        { "allowBitwiseExpressions": true },
      ],
      // ========= dup
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/heading-has-content": "off",
      "sonarjs/cognitive-complexity": "off",
      "sonarjs/no-all-duplicated-branches": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-nested-template-literals": "off",
      "sonarjs/prefer-immediate-return": "off",
      // ========= dup
      "test/consistent-test-it": "error",
      "ts/array-type": ["off", { "default": "array" }],
      "ts/ban-ts-comment": "off",
      "ts/brace-style": ["off", "1tbs", { "allowSingleLine": true }],
      "ts/comma-dangle": ["off", "only-multiline"],
      "ts/comma-spacing": ["off", { "before": false, "after": true }],
      "ts/consistent-indexed-object-style": "off",
      "ts/consistent-type-assertions": ["off"],
      "ts/consistent-type-definitions": ["off", "interface"],
      "ts/consistent-type-imports": ["off"],
      "ts/default-param-last": ["off"],
      "ts/dot-notation": "off",
      "ts/explicit-function-return-type": ["off"],
      "ts/explicit-member-accessibility": ["off"],
      "ts/explicit-module-boundary-types": ["off"],
      "ts/func-call-spacing": ["off", "never"],
      "ts/indent": ["off", 2],
      "ts/keyword-spacing": ["off"],
      "ts/lines-between-class-members": ["off"],
      "ts/member-delimiter-style": ["off"],
      "ts/method-signature-style": ["off", "method"],
      "ts/naming-convention": "off",
      "ts/no-array-constructor": ["off"],
      "ts/no-confusing-non-null-assertion": ["off"],
      "ts/no-confusing-void-expression": ["off"],
      "ts/no-dynamic-delete": ["off"],
      "ts/no-empty-function": "off",
      "ts/no-empty-interface": "off",
      "ts/no-explicit-any": ["off"],
      "ts/no-extra-semi": ["off"],
      "ts/no-floating-promises": "off",
      "ts/no-import-type-side-effects": ["off"],
      "ts/no-invalid-void-type": ["off"],
      "ts/no-meaningless-void-operator": ["off", { "checkNever": true }],
      "ts/no-misused-promises": "off",
      "ts/no-non-null-asserted-nullish-coalescing": ["off"],
      "ts/no-non-null-assertion": ["off"],
      "ts/no-redeclare": "off",
      "ts/no-redundant-type-constituents": "off",
      "ts/no-require-imports": ["off"],
      "ts/no-shadow": ["off"],
      "ts/no-type-alias": ["off"],
      "ts/no-unnecessary-condition": ["off"],
      "ts/no-unnecessary-qualifier": ["off"],
      "ts/no-unnecessary-type-arguments": ["off"],
      "ts/no-unnecessary-type-assertion": "off",
      "ts/no-unnecessary-type-constraint": ["off"],
      "ts/no-unsafe-argument": "off",
      "ts/no-unsafe-assignment": "off",
      "ts/no-unsafe-call": "off",
      "ts/no-unsafe-enum-comparison": "off",
      "ts/no-unsafe-member-access": "off",
      "ts/no-unsafe-return": "off",
      "ts/no-unused-expressions": "off",
      "ts/no-unused-vars": ["off"],
      "ts/no-use-before-define": "off",
      "ts/non-nullable-type-assertion-style": "off",
      "ts/object-curly-spacing": ["off", "always"],
      "ts/prefer-for-of": ["off"],
      "ts/prefer-includes": ["off"],
      "ts/prefer-nullish-coalescing": ["off"],
      "ts/prefer-optional-chain": ["off"],
      "ts/prefer-readonly": ["off"],
      "ts/prefer-reduce-type-parameter": ["off"],
      "ts/prefer-regexp-exec": ["off"],
      "ts/prefer-string-starts-ends-with": ["off"],
      "ts/prefer-ts-expect-error": ["off"],
      "ts/promise-function-async": ["off"],
      "ts/quotes": ["off", "single", { "allowTemplateLiterals": true }],
      "ts/require-array-sort-compare": ["off"],
      "ts/require-await": "off",
      "ts/restrict-plus-operands": "off",
      "ts/restrict-template-expressions": "off",
      "ts/return-await": "off",
      "ts/semi": ["off"],
      "ts/space-infix-ops": ["off", { "int32Hint": false }],
      "ts/switch-exhaustiveness-check": ["off"],
      "ts/type-annotation-spacing": ["off"],
      "ts/unified-signatures": ["off"],
      "tsdoc/syntax": "off",
    },
  },
);

/**
 * Resources and Inspirations
 * ==========================
 * @see https://typescript-eslint.io typescript
 * @see https://eslint.org/docs/latest/rules eslint
 * @see https://github.com/blefnk/relivator#readme relivator
 * @see https://github.com/import-js/eslint-plugin-import#rules import
 * @see https://github.com/antfu/eslint-ts-patch/#readme eslint-ts-patch
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules unicorn
 * @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh react-refresh
 * @see https://github.com/art0rz/eslint-plugin-no-barrel-files#rules no-barrel-files
 * @see https://github.com/Anparasan3/core-js/blob/master/eslint.config.js inspirations
 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules eslint-comments
 * @see https://github.com/Limegrass/eslint-plugin-import-alias#configuration import-alias
 * @see https://github.com/nirv-ai/tinkerbuntune/blob/develop/eslint.config.js inspirations
 * @see https://github.com/eslint-functional/eslint-plugin-functional#supported-rules functional
 * @see https://github.com/a-tarasyuk/eslint-plugin-redundant-undefined#usage redundant-undefined
 */
