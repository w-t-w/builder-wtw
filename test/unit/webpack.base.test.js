const path = require('path');
const assert = require('assert');

process.chdir(path.resolve(__dirname, '../smoke/template'));

describe('Check the property value of the webpack base file\'s entry', () => {
    const baseConfig = require('../../lib/webpack.base.config');
    it('webpack base file\'s entry~', (done) => {
        assert.equal(baseConfig.entry.index.indexOf('containers/index/index.js') !== -1, true);
        assert.equal(baseConfig.entry.search.indexOf('containers/search/index.js') !== -1, true);
        done();
    });
});