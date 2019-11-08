module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "warn" // Проверяем зависимости эффекта
    },
    'globals': {
        "fetch": false
    },
    "plugins": [
        "react-hooks"
    ],
}
