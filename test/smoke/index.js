const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '10000ms'
});

process.chdir(path.resolve(__dirname, './template'));

rimraf('./build', () => {
    const prodConfig = require('../../lib/webpack.prod.config');
    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            chunks: false
        }));

        console.log('\nThe webpack has been packaged successfully, started the smoke test~\n');

        mocha.addFile(path.resolve(__dirname, './html-test.js'));
        mocha.addFile(path.resolve(__dirname, './css-js-test.js'));
        mocha.run();
    });
});