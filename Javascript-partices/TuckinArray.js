
tuckIn([1,2,4,10], [2, 3, 4, 5, 6, 7, 8, 9]);

function tuckIn(firstArray,SecondArray){
    let firstArraylength = firstArray.length/2;
    console.log(firstArraylength);
    let breakFirst = firstArray.splice(0,firstArraylength);
    let breakSecond = firstArray.splice(2,3)
    console.log(breakFirst);
    console.log(breakSecond);
}

