function bubbleSort (array) {
  for (let j = 0; j < array.length; j++){
    let swaps = 0;
    for (let i= 0; i < array.length - j; i++) {
      
      if (array[i] > array[i +1]) {
        //swap values (destructuring)
        [ array[i], array[i+ 1] ] = [array[i+1], array[i]];
        swaps++;
      }
     
    }
     if (swaps === 0){
        break;
      }
  }
  return array;
}

module.exports = bubbleSort;