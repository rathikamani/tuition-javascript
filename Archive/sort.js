var ages = [60, 23, 34, 230, 80, 2300,2 ];
var users = [{name: 'Raji', wealth: 200000},{name: 'Senthil', wealth: 300000}, {name: 'Venky', wealth : 400000}, {name: 'Rathika', wealth: 500000}]
var names= ['banana', 'strawBerry', 'Apple' ]
function numberSort(n1, n2){
    return n1-n2;
  
}

//console.log(ages.sort(numberSort));
function sortByWealth(user1, user2){
    return user1.wealth-user2.wealth;
}
console.log(users.sort(sortByWealth));