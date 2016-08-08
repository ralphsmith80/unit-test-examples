// In the mocha example 'require' works, but not for karma
// so we inlude chai as a dependency in `karma.config.js` so we can `assert`.
// var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});