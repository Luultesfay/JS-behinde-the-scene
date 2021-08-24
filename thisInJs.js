// we are going to see the 'this' keyword in javaScript

/*
-this keyword/variable: is a special variable that is created for every execution context(every function)
takes the value of(points to) the "owner" of  the function in which the this keyword is used 

-"this " is not a static, it depend on how the function  is called ,and its value is only assigned when 
the function is actually called.

- the value of the this keyword is not static.So it's not always the same.It depends on how the function is actually called.

-the "this" keyword again, depends on the way in which a function is called.But what does that actually mean?Well, let's analyze four different ways
in which functions can be called.

1.the first way to call a function is as a method.
    - the "this" keyword inside that method will simply point to the object on which the method is called.
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

    luul.calcAge();//48      the method is called  and then the this keyword is point to the object luul becouse luu is calling the method

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

//lets see the this keyword inside regular function expression
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //the this keyword  is point to  undefined in strict mode but when there is no strict mode it point to the global window
};
calcAge(1991);

//lets see  what happens to this keyword  in arrow function

const calcAgeArr = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //the this keyword  is point to global window  becouse arrow function dosent have its own this keyword
  //So instead the arrow function simply uses the lexical this keyword, which means that it uses the this keyword
  // of its parent function or of its parents scope. in this case  the parent scope is   console.log(this);  in the firstline  above
};
calcAgeArr(1991);

//let's try to use the "this" keyword inside of a method.
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
The reason that the this keyword will point
to luul in this case is
because luul was the object calling the method
 */

// lets make it clear  that the this keyword is point to the object who called it

const matilda = {
  year: 2017,
};
matilda.calcAge = luul.calcAge; // copy calcAge method from luul to matilda object // method barrowing
matilda.calcAge(); //here the this keyword  points to matilda object not to luul object  becouse matilda is the one who called the method it  that proof the
console.log(matilda);

// we will see regular function vs arrow function

const jonas1 = {
  firstName: "jonas",
  year: 1991,
  calcAge1: function () {
    //calcAge method  using regular function

    console.log(this);
    console.log(2037 - this.year);
  },
  /*arrow function does not get its own this keyword,
it will simply use the this keyword from its surroundings.
So in other words, its parents this keyword,
and the parent scope of this greet method is the global scope.
*/
  greet: () => console.log(`Hey ${this.firstName}`), // outputs : hey undefined    // method greed using arrow function
};
jonas1.greet();
console.log(this.firstName); //outputs undefined    "this" keyword points to global window and  firstName is not in global window

/*the  above code  including the greet method of arrow function are in global scope
and so therefore, the arrow function here, which does not have its own this keyword,
will use the this keyword from the global scope  which is a window object So when we try to access a property that doesn't exist(in the global window object)
on a certain object, we do not get an error,but simply undefined.  


note:So from this example, the big takeaway is that as a best practice,
you should never ever use an arrow function as a method.
And in my opinion, that's even true if you're not even using
the this keyword in a particular method.

-You will always just use a normal function expression,
and like this, you will then prevent this kind of mistakes
from happen.
      
*/

////////////

/*I also want to quickly touch on the arguments keywords.
Maybe you remember me talking about that,
also in a previous lecture.
So in the video about execution context,
and the call stack,
we learned that functions also get access
to an arguments keyword.
So not just the this keyword, but also an arguments keyword.
Now, just like the this keyword, the arguments keyword
is only available in regular functions.*/

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); //accept more parameters than we actually specified.
  return a + b;
};
console.log(addExpr(2, 5));
console.log(addExpr(2, 6, 8, 12)); //argument passed

//var addArrow = (a, b) => {
//console.log(arguments);
// return a + b;
//};
//addArrow(2,5,8);

/*we get an error.
So arguments is not defined. All right.
So this was simply just to show you
that the arguments keyword exists,
but that it only exists in regular functions.
So in function expressions like this,
but also in function declarations,
but not in an arrow function.

-But anyway, the arguments keyword is not that important
in modern JavaScript anymore,
because now we have a more modern way
of dealing with multiple parameters.
But still it's important that you are aware
that this arguments keywords exists*/

//prmitive vs objects(primitive verses reference types)

/*
-in JavaScript, a variable may store two types of values: primitive and reference.

-JavaScript provides six primitive types as undefined, null, boolean, number, string, and symbol , and a reference type object.

-The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack.

-On the other hand, the size of a reference value is dynamic so JavaScript stores the reference value on the heap.

-If the value is a primitive value, when you access the variable, you manipulate the actual value stored in that variable.
 In other words, the variable that stores a primitive value is accessed by value.

-Unlike a primitive value, when you manipulate an object, you work on the reference of that object, rather than the actual object. 
It means a variable that stores an object is accessed by reference.
*/

//practice  primitive type and reference type

//primtive type
let lastName = "negasi";
let oldLastName = lastName;
lastName = "hagos";

console.log(lastName, oldLastName); /*as we would expect in an intuitive way.
Now, remember, that it works this way
because each primitive value will simply be saved
into its own piece of memory in the stack, okay?
*/

// reference type objects

const jessica = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
};

const merriedJessica = jessica; //we are coping jessica object to merriedJessica object
/* we're copying the entire object here.
At least that's what it looks like but behind the scenes
we are actually just copying the reference,
which will then point to the same object, */
merriedJessica.lastName = "Davis"; //we change the last name in merridJessica  to Davis
//So, the last name Davis is now also in the original Jessica object
//and not just in the one that we copied. the reason is becouse both
console.log("before merrage :", jessica);
console.log("after merrage :", merriedJessica);

/* we get before the marriage and after the marriage,
both the last name of Davis */

/*we get before the marriage and after the marriage, both the last name of Davis, all right?
So, the last name Davis is now also in the original Jessica object
and not just in the one that we copied. And now at this point, we already know why this happened.
So, just to remember that, it happened because when we attempted to copy the original Jessica object,
it did in fact not create a new object in the heap. So, this one again, is not a new object in the heap.
It's simply just another variable in the stack,which holds the reference to the original object.
So, both of these two variables simply point to exactly the same memory address in the heap.
And that's because in the stack, they both hold the same memory address reference.
And so of course, it makes sense that if we change a property on marriedJessica,
it will also change on Jessica itself. So, again, because they are essentially
just two different names for the same thing.Now, this is also the reason why we can change properties
in the marriedJessica object, which was declared using a const here.
And const is supposed to be for constants.So, for things that we cannot change.
However, what actually needs to be constant is the value in the stack.
And in this deck, the value only holds the reference,which we are not actually changing.
The only thing that we are changing is the underlying object that is stored in the heap.And that is okay to change,
that has nothing to do with const or let, all right? That's only about the value in the stack,
but if we change something in the heap that has nothing to do with const or let. Now, what we can't do
is to assign a completely different object now to marriedJessica. */

//what if we actually really wanted to copy the object
//so that we could then change one of them
//without changing the other?

const jessica2 = {
  firstName: jessica,
  lastName: "williams",
  age: 27,
};
/*And so now, if we really wanted to copy this object,
we could use a function called object.assign.
And what this function does
is to essentially merge two objects
and then return a new one.
So, we could do this,
object.assign.
And then again, we can use this function
to merge two objects.
And so, what we can do
is to simply merge an empty new object
with Jessica2.
And this will then create a completely new object
where all the properties are really copied.
All right?*/
const jessicaCopy = Object.assign({}, jessica2); //this is a shallow copy not a deep clone
// a shallow copy will only copy the properties in the first level while a deep clone would copy everything.
jessicaCopy.lastName = "Davis";
console.log("before merrage :", jessica2); //here before merrage the last name is preserved not changed
console.log("after merrage :", jessicaCopy); //now here after merrage the lastName is changed

//lets see the drowback when we use shallow copy  using Object.assingn

//create object  sam
const sam = {
  firstName: "sam",
  lastName: "morris",
  age: 20,
  family: ["merry", "kate"], //array inside the object  remember that array is objects too so we can say this array is nested object
};
//then sam want to change her last name to mike when she merried and update her family

// then make  shallow copy  to marriedSam

const merriedSam = Object.assign({}, sam); //here we copy sam object to the empty marredSam object
merriedSam.family.push("Adam");
merriedSam.family.push("diana");
merriedSam.lastName = "Mike"; //now marredsum changed her last name  but the orginal sams lastname is not changed
console.log("before merrage :", sam); //here before merrage the last name is preserved not changed but the fanily is changed to four which is not required to update and its a problem
console.log("after merrage :", merriedSam); //now here after merrage the lastName is changed and the familly is updated to four

//here the problem with this above code is  family is updated in both before merrage and after marrage when we update the merriedsam
//becouse we do shallow copy not deep clone

//explanation from jonas

/*using this technique of object.assign
only works on the first level.
Or in other words, if we have an object inside the object like the array object inside the sam object ,
then this inner object will actually still be the same.
So, it will still point to the same place in memory.
And that's why we say that this object.assign only creates a shallow copy
and not a deep clone which is what we would like to have. So, again, a shallow copy will only copy the properties
in the first level while a deep clone would copy everything.

*/
