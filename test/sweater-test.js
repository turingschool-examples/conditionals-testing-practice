const chai = require('chai');
const assert = chai.assert;
const Sweater = require('../src/Sweater');

describe('Sweater', function() {
  // ATTENTION: Some of the implementation code has already been written for you!
  it('should be an instance of sweater', function() {
    var sweater = new Sweater();
    assert.instanceOf(sweater, Sweater);
  });

  it.skip('starts out clean', function() {
    var sweater = new Sweater();
    assert.equal(sweater.clean, true);
  });

  it.skip('starts out not worn', function() {
    var sweater = new Sweater();
    assert.equal(sweater.timesWorn, 0);
  })


  it.skip('can be worn', function() {
    var sweater = new Sweater();
    sweater.wear();
    assert.equal(sweater.timesWorn, 1);
    sweater.wear();
    assert.equal(sweater.timesWorn, 2);
  });

  it.skip('needs to be washed after wearing it twice', function() {
    var sweater = new Sweater();
    sweater.wear();
    sweater.wear();

    assert.equal(sweater.clean, false);
  });
});
