


                                                                                                                                                                                                                                                                                               
function addUP(number){
    var str =[];
    for(let i=1; i <= number; i++){
       str.push(i);
       var b = str.reduce((a, b) => a + b, 0);
    }
    return b;
}

let check = addUP(2);
console.log(check);
