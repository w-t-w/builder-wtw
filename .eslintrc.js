const eslintConfig = {
    parser: '@babel/eslint-parser',
    extends: 'airbnb-base',
    env: {
        browser: true,
        node: true
    }
};

module.exports = eslintConfig;