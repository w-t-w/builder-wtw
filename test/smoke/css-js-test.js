const glob = require('glob-all');

describe('Start checking if the js/css files is generated~', () => {
    it('Start checking js/css files~', (done) => {
        const files = glob.sync([
            './build/js/index.*.js',
            './build/js/search.*.js',
            './build/js/vendors.*.js',
            './build/js/commons.*.js',
            './build/css/index.*.css',
            './build/css/search.*.css'
        ]);

        if(files.length > 0) {
            done();
        } else {
            throw new Error('No js/css files generated~');
        }
    });
});