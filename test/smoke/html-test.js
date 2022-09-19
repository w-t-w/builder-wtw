const glob = require('glob-all');

describe('Start checking if the html files is generated~', () => {
    it('Start checking html files~', (done) => {
        const files = glob.sync([
            './build/index.html',
            './build/search.html'
        ]);

        if (files.length > 0) {
            done();
        } else {
            throw new Error('No html files generated~');
        }
    });
});