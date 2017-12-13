function quickSort(array) {
  //base case
  if (array.length <= 1) {
    return array;
  }
  
  //pick pivot
  let pivot = array[array.length-1];
  
  //make low and high arrays
  let low = [];
  let high = [];
  
  for (let i=0;i<array.length-1; i++) {
    if (pivot <= array[i]) {
      high.push(array[i]);
    }else{
      low.push(array[i]);
    }
  }
  

  return [...quickSort(low), pivot, ...quickSort(high)]; 
}


module.exports = quickSort;