
const users = [{id:1,name:"a"},{id:1,name:"b"}];
const getUser = ( ) => {
    users.forEach((user) => {
        console.log(user.id,user.name);
    });
}

// const createUser = (user) => {
//     console.log(user);
//     setTimeout(()=>{
//         users.push(user);
//         console.log(users);
//     },1000);
// }

// createUser({id:3,name:"c"});
// getUser();


// callback:
// const createUser = (user,CallBack) => {
//     setTimeout(()=>{
//         users.push(user);
//         CallBack();
//     },1000);
// }


// createUser({id:3,name:"c"},getUser);


//promises

const createUser = (user) => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            users.push(user);
            if(true){
                res();
            }else {
                rej("error");
            }
           
        },1000);
    })
   
}

//Async 
async function init(){
     createUser({id:3,name:"c"});
    getUser();
}

init();

1.What does Web API return?
the Web API controller returns HttpResponseMessage object.
Extensible Markup Language (XML)
JavaScript Object Notation (JSON)

2.event loop?
The event loop is a constantly running process that monitors both the callback queue and the call stack.
The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.
https://dev.to/ejjraifihamza/javascript-event-loop-3kd4

3.Callback queue
The Callback queue is a data structure that operates on the FIFO (first-in-first-out) principle. Callback functions that need to be asynchronously executed, are pushed onto the callback queue. These are later pushed to the Call stack to be executed (when the event loop finds an empty call stack).

4.promises?
    Pending.
    Fulfilled.
    Rejected.

5.generator?
Generator function in javascript is used to generate values. It returns a generator object. These functions are written with function* syntax. The yield keyword is used within the generator is used to pause and resume the execution of code.

ex:

// generator function
function* generatorFunc() {

    console.log("1. code before the first yield");
    yield 100;
    
   console.log("2. code before the second yield");
    yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());

O/p:
1. code before the first yield
{value: 100, done: false}

6.javascript synchronous? async-await?
the JavaScript engine executes our program sequentially, one line at a time from top to bottom in the exact order of the statements.


7.try/catch?

8.then?



