function mergeSort(array) {
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  if(array.length === 1){
    return array;
  }
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
  let mergeArray = [];
  while( left.length && right.length ) {
    if ( left[0] <= right[0] ) {
      mergeArray.push(left.shift());
    }else{
      mergeArray.push(right.shift());
    }
  }
 
  return [...mergeArray, ...right, ...left];
}


module.exports = mergeSort;