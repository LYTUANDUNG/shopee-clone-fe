import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-ignore',
        ignores: [
            '**/dist/**',
            '**/node_modules/**',
            '**/coverage/**',
            '**/.vscode/**',
            '.tmp/**',
        ],
    },

    // Vue recommended rules (flat config)
    ...pluginVue.configs['flat/recommended'],

    // TypeScript recommended rules
    vueTsConfigs.recommended,

    // Custom rules
    {
        name: 'app/custom-rules',
        files: ['**/*.{ts,mts,tsx,vue}'],
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },

    // Disable formatting rules (for Prettier)
    skipFormatting,
)
