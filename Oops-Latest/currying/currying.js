const _ = require("lodash")

function curry(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) return func(...args);
    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

// Define the function that calculates the distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Create a curried version of the function that only requires one of the points
const distanceFromOrigin = curry(distance, 4)(0, 0);

// Call the curried function with the other point
const d1 = distanceFromOrigin(1, 1);
const d2 = distanceFromOrigin(2, 2);

console.log(d1,d2)

function fun(a, b, c, d){
    return a + b + c + d;
}

const curriedFunc =  _.curry(fun);

const newFun = curriedFunc(1);

console.log(newFun(2,3,4));
console.log(newFun(5,8));




