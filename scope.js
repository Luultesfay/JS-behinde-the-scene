// now we are going to learn about scoping
/*
And let's start by understanding what scoping actually means, and learn about some related concepts as well.
  
-scoping : controls how our program's variables
are organized and accessed by the JavaScript engine.
So basically scoping asks the question,
where do variables live?
Or where can we access a certain variable and where not?

-lexical scoping :means that the way variables
are organized and accessed
is entirely controlled by the placement of functions
and of blocks in the programs code.
For example, a function that is written inside
another function has access to the variables
of the parent function,

-Scope is the space or environment in which a certain variable is declared, simple as that.
-Now in JavaScript, we have the GLOBAL scope,FUNCTION scope, and BLOCK scope.

- let's also define what the scope of a variable is.
 ANSWER:So the scope of a variable is basically the  region of our code, where a certain variable can be accessed.

 //1.GLOBAL SCOPE-  first, the global scope is once more for top level code.
 
 -So this is for variables that are declared outside of any function or block.
 -These variables will be accessible everywhere in our program, in all functions and all blocks. So really, everywhere.

 Eg.   conat me ='jonas';
       const job='teacher';
       const year=1989;

 //2.FUNCTION SCOPE-  each and every function creates a scope.
And the variables declared inside that function scope
are only accessible inside that function.This is also called a local scope

-So local variables live in the function so to say. And outside of the function,
the variables are then not accessible at all.

eg    function calcAge (birthYear){// the variable decleared inside this function only acessible with in the function
    const now=2037;
    const age= now -birthYear;
    return age;
}
console.log(now)// throw errior becouse now=2037 is not accesicible outside of its function

// 3. BLOCK SCOPE(ES6)

-BEFORE ES6  only functions used to create scopes in JavaScript.But starting in ES6, blocks also creates scopes now.
-And with blocks,we mean everything that is between curly braces,such as the block of an if statement or a for loop.

-So just like with functions, variables declared inside a block are only accessible inside that block and not outside of it.
Now, the big difference is that block scopes only apply to variables declared with let or const, okay?

-So again, only let and const variables are restricted to the block in which they were created.
That's why we say that let and const variables are block scoped.

-So if I declared a variable using var in this block, then that variable would actually still be accessible
outside of the block, and would be scoped to the current function
or to the global scope. And so we say that var is function scoped.
So in ES5 and before, we only had global scope and function scope.
And that's why ES5 variables declared with var, only care about functions, but not about blocks.
They simply ignore them. Finally, also starting in ES6,
all functions are now also block scoped,at least in strict mode,
which you should always be using anyway.And just like with let and const variables,
this means that functions declared inside a block are only accessible inside that block, okay?


eg of block scope

if (year>=1981 && year <=1996){// if /while/ for etc is block
    const millenial=true;
    const food="avocado"
    var name=''lulu'//if varable is declared with var then its not ristricted in this block it is aceesible outside the function
}

*/
// example of all this three types of scope in the  program below

"use strict";

const myName = "lulu"; //this is global variable in global scope and accesible in everywere in the program

function first() {
  const age = 30;
  //console.log(myName);//myName is accescible becouse its global variable
  if (age >= 30) {
    const decade = 3; ///let and const are block scoped and in this block  const decade accessible only with in the block scope
    var millenial = true; // var is not block scoped  but it is function scoped and accesible outside of  this block as well
    //console.log(millenial);// millenal is acesssible
    //console.log(myName); //myName is accescible becouse its global variable
    //console.log(age);// age is accecible
    //console.log(job); //job is not defined and can not accesed from this block
  }
  //   if block <=X=> secound funtion       can not acces each other becouse of their scope placement  except for variable  decleared  with var
  function second() {
    //second()scope cant acess the above if block becouse they are not nested they are sublings note: scope chain dosent work side ways it works
    const job = "teacher";
    //console.log(millenial);// accessible from secound becouse its  declare var    i put this console.log  only to check
    //console.log(decade);// not acessible becouse they are only acessible inside their block and not working sideways
    console.log(`${myName} is a ${age} years-old ${job}`);
  }
  second();
}
first();
//console.log(age); //refrence errior : age is not defined

/*
// dicription of the above program


Well, the secret is that every scope always has access to all the variables from all its outer scopes.
So from all its parent scopes.In our example, this means that the second scope
can access the age variable from the scope of the first function.
Of course, this also means that the first scope can access variables that are in the global scope,
because that is the parent scope. As a consequence of this,the second scope will then also be able to access
the myName variable from the global scope,because it has access to the variables from the first scope.
And by the way, all this also applies to function arguments.But in this example, we just don't have any.
And this is essentially how the scope chain works.In other words,if one scope needs to use a certain variable,
but cannot find it in the current scope,it will look up in the scope chain and see if it can find a variable
in one of the parent scopes.If it can, it will then use that variable.And if it can't, then there will be an error.
And this process is called variable lookup.Now it's important to note that these variables
are not copied from one scope to another, okay? Instead, scopes simply look up in the scope chain
until they find a variable that they need and then they use it.What's also extremely important to note
is that this does not work the other way around.A certain scope will never, ever have access
to the variables of an inner scope.In this example, the first scope, for example,
will never get access to the job variable that is stored in the second scope, okay?
So again, one scope can only look up in a scope chain, but it cannot look down basically.
So only parent scope can be used,but no child scopes.Anyway, with all this in place now,
this line of code can be executed and print to the console.Jonas is a 30 year old teacher,
even though the myName and age variables were not defined in the current scope.
All the engine did was to get them from the scope chain.and as you might be noticing,
we have actually already done this before in our own code.We just didn't really understand what was going on
and how it all worked.But now we do know how it works.Amazing, right?
Anyway, we still have one more scope left here,and that's the one created by this block here.
Remember that starting with ES6,not only functions create scopes, but also blocks.
However, these scopes only work for the ES6 variable types.So for let and const variables.
That's why the only variable that's in the scope is the decade variable.
The millennial variable isn't declared with const or let, and therefore it is not scoped to just this block.
Instead, the millennial variable is actually part of the first function scope.So again, for a variable declared with var,
block scopes don't apply at all.They are functions scoped, not block scoped.Let and const on the other hand
are in fact blocks scoped, okay? This is one of the fundamental things that you need to keep in mind about let, const and var,
and about scoping in general.So if you're taking notes and I hope you are taking  lots of notes,
then this must definitely be in there.
Now about a scope chain,
if the millennial variable is in the first function scope,
then of course the second function scope
also has access to it,
even if it doesn't really need that variable.
Also the scope chain does of course,
apply to block scopes as well.
And therefore in or if block scope,
we get access to all the variables
from all its outer scopes.
So from the first function scope,
and of course from the global scope.
That's why I said in the last slide
that variables in a global scope
are accessible from everywhere.
They are, because they are always
at the top of the scope chain.
In fact, we call variables in the global scope,
global variables, very creative, right?
But we actually use this term a lot in JavaScript.
Now it's important to understand
that our purple blocks scope
does not get access to any variables
from the yellow second function scope.
And the same, the other way around.
And why is that?
Well it's because of lexical scoping
as we learned in the last slide.
So the way that we can access variables
depends on where the scope is placed,
so where it is written in the code.
In this case, none of these two scopes is written
inside of one another.
They're both child scopes of the first function.
We could even say that they are a sibling scopes.
And so by the rules of lexical scoping,
they cannot have access to each others variables,
simply because one is not written inside the other one.
We can also say that the scope chain
only works upwards, not sideways.
Okay, so this was a lot to take in,
but I hope that everything's still keeps making sense
at this point.

*/
///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

*/
