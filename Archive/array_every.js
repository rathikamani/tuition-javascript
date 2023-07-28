const numbers = [1,2,3,4,5];

const result = numbers.every((number)=>{
    console.log(number);
    /* if(number%2===0){
        return true;
    } */

    return number%2===0
})

console.log(result);