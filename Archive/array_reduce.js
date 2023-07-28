const values = [1,2,3,4,5]

let sum =0;
values.forEach((value)=>sum=sum+value)
console.log(sum);

const sum2 = values.reduce((sum,value)=>sum=sum+value,0)
console.log(sum2)

const sum3 = values.reduceRight((sum,value)=>sum=sum+value,0)

console.log(sum3);