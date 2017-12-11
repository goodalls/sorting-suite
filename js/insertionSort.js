// insertion Sort

function insertionSort(array) {
  //find number to insert
  for (let i = 1; i< array.length; i++){
    
    //find place to insert
    for (let j = i; j > 0 && array[j] < array[j-1]; j--) {
        [array[j], array[j-1]] = [array[j-1], array[j]]
    }
  }
  return array;  
}
