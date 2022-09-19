const babelConfig = {
    presets: [[
        '@babel/preset-env',
        {
            modules: false,
            loose: false
        }
    ], [
        '@babel/preset-react',
        {
            runtime: 'automatic'
        }
    ]],
    plugins: [
        '@babel/plugin-syntax-dynamic-import'
    ]
};

module.exports = babelConfig;