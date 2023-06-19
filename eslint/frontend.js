module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', './default.js'],
    plugins: ['eslint-plugin-react'],
    rules: {
        'react/display-name': 'error',
        'react/jsx-boolean-value': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-key': 'error',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-tag-spacing': [
            'off',
            {
                afterOpening: 'allow',
                closingSlash: 'allow',
            },
        ],
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
    },
    overrides: [
        {
            files: ['*.stories.tsx'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
        linkComponents: [
            {
                name: 'Link',
                linkAttribute: 'to',
            },
        ],
    },
};
