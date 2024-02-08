

function minMax(arr1){
    let max =arr1[0];
    let min = arr1[0];
    for(let i=0; i < arr1.length; i++){
      if(arr1[i] > max){
         max = arr1[i];
      } 
      if(arr1[i] < min){
        min = arr1[i];
      }   
    }
    return [min,max];
}

var checkOutput = minMax([1]);
console.log(checkOutput);