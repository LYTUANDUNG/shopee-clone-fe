// import js from '@eslint/js';
// import globals from 'globals';
// import pluginVue from 'eslint-plugin-vue';
// import tseslint from 'typescript-eslint';
// import prettierConfig from 'eslint-config-prettier';
//
// export default tseslint.config(
//     {
//         ignores: ['dist', 'node_modules', 'coverage', '.vscode'],
//     },
//     js.configs.recommended,
//     ...tseslint.configs.recommended,
//     ...pluginVue.configs['flat/recommended'],
//     prettierConfig,
//     {
//         files: ['**/*.{ts,vue}'],
//         languageOptions: {
//             ecmaVersion: 2020,
//             globals: globals.browser,
//         },
//         rules: {
//             'vue/multi-word-component-names': 'off',
//         },
//     },
// );
import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**', '**/.vscode/**'],
    },

    ...pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,
    {
        name: 'app/custom-rules',
        files: ['**/*.{ts,mts,tsx,vue}'],
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
    skipFormatting,
);
