


const numberGenerator = (n) => {
  let numberArray = [];
  for (var i=0; i<n; i++) {
    let random = Math.round(Math.random() * n);
    if (!numberArray.includes(random)) {
      numberArray.push(random);
    }else{
      n++;
    }
  } 
  return numberArray;
};


module.exports = {numberGenerator};
