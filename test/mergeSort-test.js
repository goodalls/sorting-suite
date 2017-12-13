const chai = require('chai');
const assert = chai.assert;
const mergeSort = require('../js/mergeSort.js');

describe('mergeSort testing', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(mergeSort);
  });

  it('should sort an array from smallest to largest', ()=> {
    assert.deepEqual(mergeSort([5,1]), [1,5]);
  });

  it('should be able to sort negative numbers', ()=> {
    assert.deepEqual(mergeSort([5, -1, 2, 0, -3, 3]), [-3, -1, 0, 2, 3, 5]);
  });

  it('should be same length after sort', ()=> {
    var arr = [];
    for (var i=0, t=40; i<t; i++) {
      arr.push(Math.round(Math.random() * t));
    }
    assert.equal(arr.length, 40 );
    mergeSort(arr);
    assert.equal(arr.length, 40 );
  });

  it('should sort from smallest to largest for big array', ()=> {
    let t = 40;
    let arr = [];

    //generate array
    for (var i=0; i<t; i++) {
      let random = Math.round(Math.random() * t);
      if (!arr.includes(random)) {
        arr.push(random);
      }else{
        t++;
      }
    }

    var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
    });

    var min = arr.reduce(function(a, b) {
      return Math.min(a, b);
    });

    //could give false positive if random is placed in index position
    assert.equal(arr[0] === min, false);
    assert.equal(arr[arr.length-1] === max, false);

    //sort array
    mergeSort(arr);
console.log(arr);
    assert.equal(arr[0] === min, true);
    assert.equal(arr[arr.length-1] === max, true);
    assert.equal(arr[0] <= arr[1], true);
    
  });

  it('should be able to do a lot of sorting (40,000) in two seconds', ()=> {

    let t = 40000;
    let timeOutArray = [];

    //generate array
    for (var i=0; i<t; i++) {
      let random = Math.round(Math.random() * t);
      if (!timeOutArray.includes(random)) {
        timeOutArray.push(random);
      }else{
        t++;
      }
    }

    mergeSort(timeOutArray);
  });

});
