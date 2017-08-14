/*
 * These can be rand by "npm run test"
 */
const assert = require('assert');

describe('Example Tests', function() {
  it('#shouldPass', function() {
    assert.equal(true, true);
  });
  it('#shouldFail', function() {
    assert.equal(true, false);
  });
});
