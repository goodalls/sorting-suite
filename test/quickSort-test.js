const {assert, expect} = require('chai').use(require('chai-sorted'));
const quickSort = require('../js/quickSort.js');
const numberGenerator = require ('../js/testHelp.js').numberGenerator;

describe('quickSort testing', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(quickSort);
  });

  it('should sort an array from smallest to largest', ()=> {
    assert.deepEqual(quickSort([5,1]), [1,5]);
  });

  it('should be same length after sort', ()=> {
    let arr = numberGenerator(40);

    assert.equal(arr.length, 40 );
    quickSort(arr);
    assert.equal(arr.length, 40 );
  });

  it('should be able to sort negative numbers', ()=> {
    assert.deepEqual(quickSort([5, -1, 2, 0, -3, 3]), [-3, -1, 0, 2, 3, 5]);
  });

  it('should be able to sort letters', () => {
    var array = ['d','g','h','w','g','w','g','p','q','l','a','g','x','z','d']; 
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  });

  it('should sort from smallest to largest for big array', ()=> {
    let arr = numberGenerator(40);
    expect(arr).to.not.be.sorted();
    
    expect(quickSort(arr)).to.be.sorted();
  });

  it('should be able to do a lot of sorting (46,000) in two seconds', ()=> {
    let timeOutArray = numberGenerator(46000);
    
    expect(timeOutArray).to.not.be.sorted();
    expect(quickSort(timeOutArray)).to.be.sorted();
  });

});
