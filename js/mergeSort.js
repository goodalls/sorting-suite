function mergeSort(array) {
  var middle = Math.floor(array.length/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);
  if(array.length === 1){
    return array;
  }
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
  let mergeArray = [];
  while( left.length && right.length ) {
    if ( left[0] < right[0] ) {
      mergeArray.push(left.shift());
    }else{
      mergeArray.push(right.shift());
    }
  }
  while( right.length ) {
    mergeArray.push(right.shift());
  }
  while( left.length ) {
    mergeArray.push(left.shift());
  }
 
  return mergeArray;
}


module.exports = mergeSort;