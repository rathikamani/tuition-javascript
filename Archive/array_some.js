const numbers = [1,2,3,5,7]

const result = numbers.some((number)=>{
    console.log(number);
    /* if(number%2===0){
        return true;
    } */

    return number%2===0
})

console.log(result);





