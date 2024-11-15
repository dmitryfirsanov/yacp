module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended', // Рекомендованные правила для Vue 3
        'plugin:@typescript-eslint/recommended', // Рекомендованные правила для TypeScript
        'plugin:prettier/recommended', // Включение Prettier как плагина
    ],
    rules: {
        // Пример настроек правил (кастомизация):
        '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение для неиспользуемых переменных
        'prettier/prettier': 'error', // Настройки Prettier
    },
}
