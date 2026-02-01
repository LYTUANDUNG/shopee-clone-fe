import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,

    ...pluginVue.configs['flat/essential'],

    {
        files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },

    {
        ignores: ['dist/**', 'node_modules/**', '.tmp/**', 'public/**'],
    }
)