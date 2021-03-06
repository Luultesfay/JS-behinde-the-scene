"use strict";
//the JAVASCRIPT ENGINE AND RUNTIME

//JAVASCRIPT ENGINE

/*
-WHAT IS JAVA SCRIPT ENGINE
 * a JavaScript engine is simply
a computer program that executes JavaScript code.

-Now every browser has its own JavaScript engine
but probably the most well known engine is Google's V-Eight.
The V eight engine powers Google Chrome,

-but also Node.js which is that JavaScript runtime
that we talked about in the beginning of the course,
so the one that we can use to build server side applications with JavaScript

-So any JavaScript engine always contains
a call stack and a heap.

-CALL STACK is where our code is actually executed
using something called execution contexts.
-the HEAP is an unstructured memory pool
which stores all the objects that our application needs.
  
 ***we have answered where our code is executed.
But now the question is
how the code is compiled to machine code
so that it actually can be executed afterwards.
Well, let's find out.

***we learned that the computer's processor
only understands zeros and ones
and that's therefore every single computer program
ultimately needs to be converted into this machine code
and this can happen using compilation or interpretation.


NONE : COMPELATION VS INTERPERTATION
 -COMPELATION:So in compilation, the entire source code
is converted into machine code at once.
And this machine code is then written
into a portable file that can be executed on any computer.
So we have two different steps here.
First, the machine code is built
and then it is executed in the CPU so in the processor.
And the execution can happen
way after the compilation of course.

INTERPERTATION:Now, on the other hand in interpretation,
there is an interpreter which runs through the source code
and executes it line by line.
So here we do not have the same two steps as before.
Instead the code is read and executed all at the same time.
Of course the source code still
needs to be converted into machine code,
but it simply happens right before it's executed and not ahead of time.


-JAVASCRIPT USED TO BE INTERPRETED LANGUAGE BUT THIS MAKES THE SPEED TO SLOW AND SLOWER THAN COMPAILED LANGUAGES
- instead of simple interpretation
modern JavaScript engine now use a mix between
compilation and interpretation
which is called just-in-time compilation.

-just-in-time compilation(JIT):This approach basically compiles the entire code
into machine code at once and then executes it right away.
So we still have the two steps
of regular ahead of time compilation
but there is no portable file to execute
-And the execution happens immediately after a compilation.
And this is perfect for JavaScript
as it's really a lot faster than just executing code
line by line.

//so lets back to javascript engine 
 
-So as a piece of JavaScript code enters the engine
the first step is to parse the code
which essentially means to read the code

-During the parsing process, the code is parsed
into a data structure called
the abstract syntax tree or AST.
This works by first splitting up each line of code
into pieces that are meaningful to the language
like the const or function keywords,
and then saving all these pieces into the tree in a structured way.

-This step also checks if there are any syntax errors
and the resulting tree will later be used
to generate the machine code.

-the next step is compilation
which takes the generated AST
and compiles it into machine code
just as we learned in the previous slide.
This machine code then gets executed right away(And remember execution happens
in the JavaScript engines call stack)
because remember modern JavaScript engine use
just-in-time compilation.

-We have our code running so we can finish here, Right?
Well, not so fast because modern JavaScript engines
actually have some pretty clever optimization strategies.
What they do is to create a very unoptimized version
of machine code in the beginning
just so that it can start executing as fast as possible.
Then in the background, this code is being optimized
and recompiled during the already running program execution.
And this can be done most of the times
and after each optimization
the unoptimized code is simply swept
for the new more optimized code
without ever stopping execution of course.
And this process is what makes modern engines
such as the V-Eight so fast
and all this parsing, compilation and optimization
happens in some special threads inside the engine
that we cannot access from our code.
So completely separate from the main thread
that is basically running into call stack
executing our own code.


JavaScript Runtime Environment (JRE)(in this case in browser)

So far we have discussed JavaScript engine, but the JavaScript engine doesn’t run in isolation.
 It runs inside an environment called JavaScript Runtime Environment along with many other components.
 JRE is responsible for making JavaScript asynchronous. It is the reason JavaScript is able to 
 add event listeners and make HTTP requests asynchronously.

 -JRE is just like a container which consists of the following components:
    1. JS Engine
    2.Web API
    3.Callback Queue or message queue
    4.Event Table
    5.Event loop


   // Web API

Web APIs are not part of the JS engine but they are part of the JavaScript Runtime Environment which is provided by the browser. 
JavaScript just provides us with a mechanism to access these API’s. As Web APIs are browser specific, they may vary from browser to browser. 
There may be cases where some Web APIs may be present in one browser but not in other.

Examples:

    1.DOM API for manipulating the DOM. document.getElementById,addEventListerner, document.querySelectorAll, etc.
    are part of the DOM API provided by the browser which we can access using JavaScript.
    2.AJAX calls or XMLHttpRequest. As Web APIs are browser specific and XMLHttpRequest is a Web API, 
    we had to implement XMLHttpRequest in a different way for IE before JQuery saved us (remember?).
   3.Timer functions like setTimeout and setInterval are also provided by the browser.

  explanation took it from jonas  

  So we can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need
in order to use JavaScript in this case, in the browser.And to heart of any JavaScript,runtime is always a JavaScript engine.
So exactly the one we've been talking about.That's why it makes sense to talk about engines and runtimes together.
Without an engine there is no runtime and there is no JavaScript at all.However the engine alone is not enough.
In order to work properly,we also need access to the web APIs,and we talked about web APIs before, remember?
So that's everything related to the DOM or timers or even the console.log that we use all the time.
So essentially web APIs are functionalities provided to the engine, but which are actually not part
of the JavaScript language itself.JavaScript simply gets access to these APIs through the global window object.
But it still makes sense that the web APIs are also part of the runtime,because again a runtime is just like a box
that contains all the JavaScript related stuff that we need.


//call back  and  EventLoop  explanation

Next a typical JavaScript runtime also includes a so called CALLBACK  QUEUE.
This is a data structure that contains all the callback functions that are ready to be executed.
For example we attach event handler functions to DOM elements like a button
to react to certain events, right? And these event handler functions
are also called callback functions okay. So as the event happens,
for example a click, the callback function will be called. And here is how that actually works behind the scenes.
So the first thing that actually happens after the event is that the callback function is put
into the callback queue. Then when the stack is empty the callback function is passed to the stack
so that it can be executed. And this happens by something called the event loop.So basically the EVENT LOOP takes callback functions
from the callback queue and puts them in the call stack so that they can be executed.



NOTE:
the focus in this course is on JavaScript in the browser
and that's why we analyzed the browser JavaScript runtime.
However, it's also important to remember
that JavaScript can exist outside of browsers,for example, in Node.js.
And so here is what the node JS JavaScript runtime looks like.
It's pretty similar, but since we don't have a browser of course, we can't have the web APIs
because it's the browser who provides these. Instead we have multiple C ++ bindings
and a so called thread pool.Now details don't matter here at all.
I just want you to know that different JavaScript runtimes do exist.

*/

//LETS NOW BACK TO EXECUTION CONTEXT

// what is reallty inside excecution context
/*
-And the first thing that's inside any execution context
is a so-called variable environment( 1.variables(let, const, var decleration) , functions and arguments objects) stored.

2.scope chain -basically consists of
references to variables that are located
outside of the current function.
And to keep track of the scope chain,
it is stored in each execution context.

3. this keyword



//creation phase 

-Now, the content of the execution context, so variable environment, scope chain
and this keyword is generated in a so-called creation phase.Which happens right before execution.

 important note: execution contexts belonging to arrow functions,do not get their own arguments keyword,
nor do they get the this keyword, okay?
Instead, they can use the arguments object,and the this keyword
from their closest regular function parent. And this is an extremely important detail to remember



- in creation phase there is one global excecution context   and there is  also another  execution context is created if there is function 
- every time the function called there is a new execution  context is created for that function
 

When a script executes for the first time, the JavaScript engine creates a Global Execution Context. During this creation phase, it performs the following tasks:


    1.Create a global object i.e., window in the web browser or global in Node.js.
    2.Create a this object binding which points to the global object above.
    3.Setup a memory heap for storing variables and function references.
    4.Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

    and also use the video for reference  excecution context and call stack


    //Execution Phase

    -But now imagine there are hundreds of execution contexts for hundreds of functions.
    How will the engine keep track of the order in which functions we're called?

    -And how will it know where it currently is
    in the execution?

    answer: Well, that's where the call stack finally comes in. And remember that the call stack,together with the memory heap,
    makes up the JavaScript engine itself.

   - But what actually is the call stack?

   answer:
        Well, it's basically a place where execution contexts
        get stacked on top of each other,in order to keep track
        of where we are in the programs execution.

-So the execution context that is on top of the stack,
is the one that is currently running.
And when it's finished running,
it will be removed from the stack,
and execution will go back
to the previous execution context.


note: the global excection context is the first to go to the stack but then the other excection context if there is created will be
 on top of it and like so on  , then  the excecution context in the top is first to remove from the stack when its done its work 
 the the prvious EC and so on . its like  LAST IN FIRST OUT (LIFO)      IN THAT STACK.



 NOTE : now we learn that  java script code is run in call stack  or we can say accurately java script code run in the excecution context

*/
