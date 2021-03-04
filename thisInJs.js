// we are going to see the 'this' keyword in javaScript

/*
-this keyword/variable: is a special variable that is created for every ececution context(every function)
takes the value of(points to) the "owner" of  the function in which the this keyword is used 

-"this " is not a static, it depend on how the function  is called ,and its value is only assigned when 
the function is actually called.

- the value of the this keyword is not static.So it's not always the same.It depends on how the function is actually called.

-this keyword again, depends on the way in which a function is called.But what does that actually mean?Well, let's analyze four different ways
in which functions can be called.

1.the first way to call a function is as a method.
    - the this keyword inside that method will simply point to the object on which the method is called.
    - or in other words,it points to the object that is calling the method.
    eg. 
     
    const luul={//luul object
        name:lulu,
        lName: nega,
        year:1989,
        calcAge:function(){//calcAge is a method
            return 2037-this.year;//now this pointe to the object luul   this.year=luul.year
        }
        
    }

    luul.calcAge();//48      the method is called

2.   another way we call functions is by simply calling them as normal functions.
     -So not as a method and so not attached to any object.In this case,the "this" keyword,will simply be undefined.
      However, that is only valid for strict mode.
     -So if you're not in strict mode, this will actually point to the global object,which in case of the browser is the window object.

     //eg. in non strict mode
function f1() {
  return this;
}
// In a browser:
console.log(f1() === window); // true

// In Node:
console.log(f1() === globalThis); // true

   

//in strict mode

function f2() {
  "use strict";
  return this;
}

console.log(f2() === undefined); // true


3.In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object

-remember, arrow functions do not get their own 'this keyword'.

-Instead, if you use 'the this variable' in an arrow function,it will simply be the this keyword
of the surrounding function.So of the parent function and in technical terms, this is called the 'lexical this keyword,'
because it simply gets picked up from the outer lexical scope of the arrow function.

Eg
var globalObject = this;  // this is the surounding variable
var foo = (() => this);//here this key word is pointed to the sarounding variable or function in this case to the global object
console.log(foo() === globalObject); // true

-And finally, if a function is called as an event listener,
then the this keyword will always point to the DOM element
that the handler function is attached to.
 */

//practice the this keyword
"use strict";
console.log(this); //this keyword  pointes to  globsl window

//lets see the this keyword inside regular function
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //the this keyword  is point to  undefined in strict mode but when there is no strict mode it point to the global window
};
calcAge(1991);

//lets see  what happens to this keyword  in arrow function

const calcAgeArr = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //the this keyword  is point to global window  becouse arrow function dosent have its owen this key word
  //So instead the arrow function simply uses the lexical this keyword, which means that it uses the this keyword
  // of its parent function or of its parents scope. in this case  the parent scope is   console.log(this);  in the firstline  above
};
calcAgeArr(1991);

//let's try to use the disc keyword inside of a method.
const luul = {
  //luul object
  year: 1991,
  calcAge: function () {
    //calcAge is a method
    console.log(this); // the this keyword points to the luul object
    console.log(2037 - this.year); // 46
  },
};

luul.calcAge(); //46     the luul object is called the calcAge method thats why the this keyword points to luul object

/* important note:  So I keep saying that the this keyword will point
to the object that is calling the method, right?
And that means that the this keyword will not simply point
at the object in which we wrote the method.
So here we wrote the calcAge method inside
of the luul object.And so we might think
that  is the reason why the this keyword points
to luul, but that is not true.
The reason that the disc keyword will point
to luul in this case is
because luul was the object calling the method
 */

// lets make it clear  that the this keyword is point to the object who called it
/*
const matilda = {
  year: 2017,
};
matilda.calcAge = luul.calcAge; // copy calcAge method from luul to matilda  // method barrowing
matilda.calcAge(); //here the this keyword  points to matilda object not to luul object  becouse matilda is the one who called the method it  that proof the
*/
