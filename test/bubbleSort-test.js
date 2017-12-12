const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../js/bubbleSort.js');

describe('bubbleSort testing', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(bubbleSort);
  });

  it('should sort an array from smallest to largest', ()=> {
    assert.deepEqual(bubbleSort([5,1]), [1,5]);
  });

  it('should be same length after sort', ()=> {
    var arr = [];
    for (var i=0, t=40; i<t; i++) {
      arr.push(Math.round(Math.random() * t));
    }
    assert.equal(arr.length, 40 );
    bubbleSort(arr);
    assert.equal(arr.length, 40 );
  });

  it('should sort from smallest to largest for big array', ()=> {
    let t = 40;
    let arr = [];
    for (var i=0; i<t; i++) {
      let random = Math.round(Math.random() * t);
      if (!arr.includes(random)) {
        arr.push(random);
      }else{
        t++;
      }
    }
    
    bubbleSort(arr);
    //need a loop or something to test each index for lower number.
    assert.equal(arr[0] <= arr[1], true);
    
  });

});
