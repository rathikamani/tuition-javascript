


function canNest(arr1,arr2){
     for(let i=0; i < arr1.length; i++){
            if(!arr1.includes(arr2[i])){
                return true;
            }
            return false;
     }
}

var checkOutput = canNest([1, 2, 3, 4], [5, 6]);
console.log(checkOutput);