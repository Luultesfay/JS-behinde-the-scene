"use strict";
//over view of javaScript
/* 
-JavaScript is a high-level, object-oriented,multi-paradigm programming language.
*/

//broad javaScript defnition

/*- JavaScript is a high-level, prototype-based,
object-oriented, multi-paradigm,
interpreted or just-in-time compiled,
dynamic, single-threaded,
garbage-collected programming language
with first-class functions
and a non-blocking event loop concurrency model.
*/

//unpaking all the points above

//highlevel
/*- (Now, there are low-level languages, such as C,
where you have to manually manage these resources.
For example,
asking the computer for memory to create a new variable.

-On the other side, you have high-level languages such as JavaScript and Python,
where we do not have to manage resources at all because these languages have so-called abstractions
that take all of that work away from us.

-This makes the language easier to learn and to use,

- the downside is that programs will never be as fast
or as optimized as for example, C programs.
)*/

// GARBAGE-COLLECTION
/*
-Now, one of the powerful tools
that takes memory management away from us developers
is garbage-collection,

-which is basically an algorithm
inside the JavaScript engine,
which automatically removes old, unused objects
from the computer memory
in order not to clog it up with unnecessary stuff.
So it's a little bit like JavaScript has a cleaning guy
who cleans our memory from time to time
so that we don't have to do it manually in our code.

*/
//interpreted or just-in-time compiled

/*
computer's processor
only understands zeros and ones, that's right.
Ultimately, every single program needs to be written
in zeros and ones, which is also called machine code.
And since that's not really practical to write, is it?
We simply write human-readable JavaScript code,
which is an abstraction over machine code,
but this code eventually needs to be translated
to machine code.
And that step can be either compiling
or interpreting.
because no one writes machine code manually this happens inside the JavaScript engine..
 */

//MULTI-PARADIGM LANGUAGE
/*
-In programming, a paradigm is an approach
and an overall mindset of structuring our code,
which will ultimately direct the coding style and technique

-THREE TYPES OF PARADIGM
*PRCEDURAL PROGRAMMING :which is basically just organizing the code
in a very linear way,
and then with some functions in between

*OBJECT-ORIENTED-PROGRAMING
*FUNCTIONAL PROGRAMING


-many languages are only procedural
or only object-oriented
or only functional,
but JavaScript does all of it.
So it's really flexible and versatile.
And so we can do really whatever we want with it.
*/

//prototype-based, object-oriented approach.?

//FIRST CLASS FUNCTION
/*
which simply means that functions
are treated just as regular variables.
So, we can pass functions into other functions
and we can even return functions from functions.
And this is extremely powerful
because it allows us to use a lot of powerful techniques
Ex- like we did it before in modal project that we passed  closeModal function as variable in event hundler*/

//Dynamic

/*java script is daynamic and dynamic actually means dynamically-typed. in JavaScript, we don't assign data types to variables.
Instead, they only became known
when the JavaScript engine executes our code.
Also, the type of variables can easily be changed
as we reassign variables.

-other languages dont have this like java  they asigned types for thier variable manually  eg like  string or int asigned to the variable */

//single thread?

//non blocking event loop?
