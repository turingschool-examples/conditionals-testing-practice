const chai = require('chai');
const assert = chai.assert;
const { translateEmoticon, buySafeHalloweenCandy} = require('../src/general.js');

describe('translateEmoji', function() {
  // ATTENTION: Some of the implementation code has already been written for you in general.js
  // This could be solved with a switch statement as well. 
  // Solve it first with if/else and feel free to refactor it if you want later.
  it.skip('should be a function', function() {
    assert.isFunction(translateEmoticon);
  });

  it.skip('should translate a smiling emoticon into words', function() {
    var translation = translateEmoticon(':)');
    assert.equal(translation, 'Smiling');
  });

  it.skip('should translate an angry emoticon into words', function() {
    var translation = translateEmoticon('>:(');
    assert.equal(translation, 'Angry');
  });

  it.skip('should translate a shrugging emoticon into words', function() {
    var translation = translateEmoticon("¯\_(ツ)_/¯");
    assert.equal(translation, 'Shrugging');
  });

  it.skip('should let the user know if an emoji was not supplied', function() {
    var response = translateEmoticon();
    assert.equal(response, 'There was not an emoji supplied.');
  });

  it.skip('should let the user know if the emoji was not recognized', function() {
    var response = translateEmoticon('⊂(´･◡･⊂ )∘˚˳°');
    assert.equal(response, "I didn't recognize that emoticon. Try again.");
  });
});

describe('buySafeHalloweenCandy', function() {
  it('should be a function', function() {
    assert.isFunction(buySafeHalloweenCandy);
  });

  it.skip('should buy candy that is allergy-safe', function() {
    var purchasedCandies = [];
    var result = buySafeHalloweenCandy('nerds', purchasedCandies);
    assert.deepEqual(result, ['nerds']);
  });

  it.skip('should buy multiple candies that are allergy-safe', function() {
    var purchasedCandies = [];
    var result = buySafeHalloweenCandy('nerds', purchasedCandies);
    assert.deepEqual(result, ['nerds']);
    var result2 = buySafeHalloweenCandy('skittles', purchasedCandies);
    assert.deepEqual(result2, ['nerds', 'skittles']);
  });

  it.skip('should ONLY buy candy that is allergy-safe', function() {
    var purchasedCandies = [];
    var result = buySafeHalloweenCandy('payday', purchasedCandies);
    assert.deepEqual(result, []);
  });
});