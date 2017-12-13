const {assert, expect} = require('chai').use(require('chai-sorted'));
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

  it('should be able to sort negative numbers', ()=> {
    assert.deepEqual(bubbleSort([5, -1, 2, 0, -3, 3]), [-3, -1, 0, 2, 3, 5]);
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
    expect(arr).to.not.be.sorted();
    bubbleSort(arr);
    expect(arr).to.be.sorted();
  });

  it('should be able to do a lot of sorting (13,500) in two seconds', ()=> {

    let t = 13500;
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

    bubbleSort(timeOutArray);
  });

});
