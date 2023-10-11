//async 
//promise is used to resolve the async operation which take time to execute
//IMP NOTE: async function always return the promise if you return just any Datatype value it will rap into the promise and then it will return it.
//1
// async function getData(){
//    return "Hello JS";
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));

//2
// const p = new Promise(function(resolve,reject){
//     resolve("Hi this is JS");
// });

// async function getP(){
//    return p; //Now what will happen if we pass promise in async it will once more rap 'return p' by promise --> Big NO. it will not rap again promise to promise
// }

// const dataP = getP();
// dataP.then((res)=>console.log(res));

//IMP async along with await

//Note: async and await are use to handle the promises

//before async and await was invented code

// const pp = new Promise(function(resolve,reject){
//    resolve("Hi this is JS old");
// });

// function getPP(){
//    pp.then((res)=>console.log(res));
// }
// getPP();

//after async and await was invented code

// const promise = new Promise(function(resolve,reject){
//    resolve("Hi this is JS async & await");
// });

// async function getInfoP(){
//    const val = await promise; //IMP await is used only inside the async function and write only infront of an promise
//    console.log(val);
// }
// getInfoP();

//Difference between both 

//IMP -> How normal Promise .then and Promise async and await works

//Normal
// const promise2 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//       resolve(".then working");
//    }, 5000);
// });

// function getInfoP2(){
//    //JS Engine will not wait for promise to be resolved it will print next line fast because call stack of JS not wait for any thing it executes things fast in it call stack.
//    promise2.then((res)=>console.log(res));
//    console.log("Siddhesh"); //it will print first this then promise will be printed. 
// }
// getInfoP2();

// //async and await

// const promise3 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//       resolve("async and await working");
//    }, 10000);
// });

// async function getInfoP3(){
//    //note: In case of this async and await all will be printed after 10 sec siddhesh will not print first and then val2 , both will be printed at the same time.
//    //JS Engine suspand this task till time is running
//    //it will only print if promise is resolved

//    console.log("Hello World"); //it will print quick because promise handling is below there is no connection between below code with its above code after the promise is handled the below code of it will wait 10 sec and after it run at the same time when promise is resolved.

//    const val2 = await promise3;
//    console.log("Siddhesh async and await"); 
//    console.log(val2);
// }
// getInfoP3();

//example
// const pr1 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//      resolve("Success one promise");
//    },40000);
//  });
 
//  const pr2 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//      resolve("Success two promise");
//    },50000);
//  });
 
//  async function getPromises() {
//    console.log("Hello Async & await");
   
//    const data1 = await pr1;
//    console.log("Data 1: "+data1);
   
//    const data2 = await pr2;
//    console.log("Data 2: "+data2);
//  }
//  getPromises();

 //real life example
//The fetch() method returns a promise that can either be resolved or not.
 const API_GITHUB = "https://api.github.com/users/siddhesh-coder";

 async function getfetch(){
   //fetch() sends-> Response.json() in [dataGit] -> jsonValue
   //Response.json() -> it is also type of promise

   //there are two type of error handling
   // 1) try catch and 2) .catch

     //1)
    try {
      const dataGit = await fetch(API_GITHUB);
     const jsonValue = await dataGit.json();
     console.log(jsonValue);
    } catch (error) {
     console.log(error);
     }
     
 }
 getfetch(); //2) getfetch().catch((err)=> conosle.log(err));

 //difference between async await and promise .then/.catch

//only the syntax is the difference the JS performs it old traditional promise .then/.catch in backend of js
