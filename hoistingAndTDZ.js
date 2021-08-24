//HOISTING AND TEMPERAL DEAD ZONE (TDZ)
/*
HOISTING:makes some types of variable accessible/usable in the code before they are actually declared;

// HOISTING behind the scene 
before execution:code is scanned for variable decleration and for each variable, a new  property is created in the variable envairoment object.

//TDZ is: the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.

// why TDZ is used?

-it makes  esier to avoid and catch errors:accessing variables before decleration is bad practice it sould be avoid it
-makes const variables actually work
eg.
const myName='jonas';

if(myName==='Jonas'){
    console.log(`jonas is a ${job}`);//job is not accesible at this stage becouse its in TDZ mode  so this  will be error
    const age=2037-1989;
    console.log(age);
    const job='teacher';//now job can be accecible after intialization   only, so at this point  TDZ is lifted and can be used variable job 
    console.log(x);
}
*/

"use strict";
if (myName === "Jonas") {
  console.log(`jonas is a ${job}`); //(this line of code is reference error due to ${age} )temporal dead zone  becouse can not access the job before initalization
  const age = 2037 - 1989;
  console.log(age);
  const job = "teacher"; // the dead zone is lifted  becouse it reached the  varible intialization
  console.log(x); //refrence error x is not defined
}

// TZD AND HOISTING  PRACTICE

// so lets use the variable before they are decleared
//this example is hoisting with variables
console.log(me); //undefined
/*
Well, the first console dot log result in undefined,
and that's because variables declared
with var are actually hoisted,
but they are hoisted to the value of undefined.
And so therefore when we try to access them
undefined is exactly the result that we get.
*/
//var will result hoisted to undefined
//console.log(job); //referenceError:can not acces before intialization
//console.log(year); //same as  let variable
//temporal dead zone of a variable declared with a let or const starts from the beginning of the current scope until the point of the code where it is defined

var me = "joe";
let job = "teacher"; //here TDZ is desappear becouse the variable is intialize after this point it was TDZ
const year = 1991; //same as let variable

//HOISTING  WITH FUNCTIONS

// we will first call the functions before they are declaired
console.log(addDecl(2, 3)); //this will give us the hoisted result of  5   becouse regular function decleration can be used before declared(hoisted)
//console.log(addExpr(2, 3)); //this will give us  reference error b/c function  expression can not access before intialization
//console.log(addArrow(2, 3));//error
//console.log(addExpress(2, 3));//addExp is not a function
//console.log(addArroww(2, 3));//not a function

//this is function decleration
function addDecl(a, b) {
  return a + b;
}
//this is function expression
const addExpre = function (a, b) {
  //untill this point this function expresion is in TDZ only access after this intialization point
  //note that  function expression decleared with const or let they can't access before they are intialized
  return a + b;
};

//this is arrow function
const addArrow = (a, b) => a + b; //untill this point this function expresion is in TDZ only access after this intialization point
//note that  function expression decleared with const or let they can't access before they are intialized

//what about if we change the const of the function with var lets see

//note: functions decleare with  "var"  hoisted to undefined

var addExpress = function (a, b) {
  // we get the result typeError addExp is not a function the reason is any variable decleared with var will be hoisted and set to undefined  and then we try to call the undefined
  return a + b;
};

var addArroww = (a, b) => a + b; //hoisted to undefined the same as the above code
