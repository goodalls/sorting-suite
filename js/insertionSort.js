module.exports = function insertionSort(array) {
  //find number to insert
  for (let i = 1; i < array.length; i++){
    
    //find place to insert
    for (let j = i; j > 0 && array[j] < array[j-1]; j--) {
      [array[j], array[j-1]] = [array[j-1], array[j]];
    }
  }
  return array;  
};

// function insertionSort(array) {
//   for (let i=1; i < array.length; i++) {
//     let value = array[i]
//     let place = i
//     while (place > 0 && place -1 < value) {
//       [array[place], array[place - 1]] = [array[place - 1], array[place]];
//       place--
//     }
//   }
//   return array;
// }


