const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../js/bubbleSort.js')

describe('bubbleSort testing', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(bubbleSort);
  });

  it('should sort an array from smallest to largest', ()=> {
    assert.deepEqual(bubbleSort([5,1]), [1,5]);
  });

});
