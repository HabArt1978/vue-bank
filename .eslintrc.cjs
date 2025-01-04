/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'off',
          normal: 'off',
          component: 'off'
        },
        svg: 'off',
        math: 'off'
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true
      }
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'auto',
        singleAttributePerLine: true
      }
    ]
  }
}
