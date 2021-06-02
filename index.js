//alert("Hello World");

// one line commnet

/* 
    Multiline Comment

    External JS
    We need a JS file.
    Wen need to link JS file to our html 
*/

//alert("We are now using external JS")

/*
    Variables
    
    As of ES6 we have 2 ways of creating vars.  And one way 
    of creating a constant.

    -Original way for creating variables ie to use var.
        syntax:
    var variableName;

    -Declaring variables with let. Introduced in ES6, 2015.
    syntatx:
    let variableName;

    -Declaring constants
    const nameOfConst;

*/

var num;   //declares a variable
let num2;  //declares a variable

//Assignment statement
num = 9;
num2 = 10;

//Variable initialization statemnt
let total = num + num2

//Initilization of Constant
const PI = 3.14; 

//String can use " or '
let name1 = '"I like programming." Jon\'n said.'
console.log(name1)

/* 
Escape Characters
\' single quote
\" double qoute
\\ backward slash
\n new line
*/

//analogous to sysout. used for debugging...
//console.log(num);

/* 

Data Types in a Java Script
Primitive Types
1. String e.g. "This is a String".
A string is a sequance of characters that are enclosed in single
or double quotes

2. Number ex; 12, Infinity, 3.14. In JS, all numbers are floats.


3. Boolean -> true or false
4. null
5. undefined

Objects ex:  {key:value}, array[1,2,4], function

null vs undefined
undefined means a variable has been declared but not assaigned a
value yet. Also if a function does not explicitly return a value
then it ends up returning undefined.

null this is an assignment value. This is used to represent the
absence of a value. In JS null means nothing 
*/

let sum 
console.log(sum); //prints undefined.

/* 
Type coercion:
The process of converting one data type to another. This can be
done implicitly. Can be done implicitly or explicitly

JS is a weakly-typed language

2 + 2 = 4

2 + "2" = "22"
"2" + 2 = "22"
"2" + "2" = "22"

'2' - 0 = 2  // this is because no string operation uses -

Note string and num operations with + leads to a String
*/

/* Functions 

A function is a block of code that is designed to perform a 
particular task. 
A function has a name, 
And a function is excuted whem something invokes it.

Because of ES6, we have 3 diff ways of declaring functions in JS

1. function keyword declaration
2. function expression saved in a variable
3. ES6 Arrow functions 

The function keyword declaration
w/  this, a functions is defined with the function keyword, 
followed by the function name, followed by parentheses()
Function name can contain letters, digits, underscores, dollar sign
A function name cannot start w/ a number

function functionName(param1, param2, param 3... paramX){
    function body. This is the code to be executed when
    the function is called
}

In Java, this is analgous to a method.
In JS method overloading is not possible.
*/


function test(){
    alert("Hello Word");
}

function getSum(num1, num2){
    return num1 + num2;
}

//To call a function. You just use the function name.

/* 

Hoisting

Hoisting is JS's default behavior of moving declarition to the
top

When using function functionName(parameters){...} to declare a funct.
this funct. will hoist to the top of the script

*/

//test();
getSum(90,20);

//in JS this is valid code; See Hoisting.
x = 10;
console.log(x);
var x;  

/* In JS, a variable can be declared after it has been used. 
This means a variable can used b4 it has been declared.

Function expression (function expression saved in a variable)

-A function can also defined using an expression.

A function expression can be stored into a variable. 
After a function has been stored into a varaible, the variable 
can be used as a fuction

let variableName = function(parameters) {code to be exucted};

variableName(arguments);

*/

// just as a heads up this will not be hoisted.
let getTotal = function(a, b, c) {return a + b + c};

let y = getTotal(1, 3, 12)
console.log(y);

/*

Arrow functions
Arrow functions is another new way of creating fuctions. This was added in ES6
Arrow functions allow for shorter function syntax. 

Syntax for arrow functions
arrowFunctionName = (parameters) => {
    code to be executed goes here
}

Given the following function expression 

let hello = function() {
    alert("Hello World");
}

convert it into an arrow function


*/

let hello = () => {
    let carName = "Toyota"; //This is a local variable.
    alert("hello world" + carName);
}

/* Global variables
Variables declared outside of any function have global scope.


*/
//calling our hellow arrow function
//console.log("Outside" + carName);
//hello();

/* 

Scope
Local scope and global scope

Local JS Variables 
Varariables declared within a function, are local to the function
Local variables have a function scope. Local variabales can only be
acessed within the function in which they're declared. 

local variables are "safer to use" than global.

Arrays 

Arrays are used to hold a collection of data in JS arrays can hold data
of different types.

let arrayName = []; // This is an empty array.
let arrayName1 = [value1, value2, value3, ...]
*/

let cunySchools = ["LC","CCNY", "BCC", "Hostos", 1]

/* To acess values from an array, you need the array name and an index 
arrayName[index]

to change a value in an array
array[index] = newValue
*/

console.log(cunySchools[0]);
console.log(cunySchools.length);

//you can hold an array within an array aswell.

cunySchools[0] = "Lehman College"
console.log(cunySchools[0]);

//printing the last item in an array
console.log(cunySchools[cunySchools.length - 1]);

/*
Objects
This is a way of organizing data using key/value pairs.
Objects can contain many values
*/

//creates a car object
const car = {
    make: "Toyota",  
    model: "Supra"
};

/* 
Acessing data from objects.
bracket noation

objectName["key"]

dot notation

objectName.keyName
*/

// bracket notation
console.log(car["model"]);

// dot notation 
console.log(car.model);

/*

Functions 

Higher-order functions
A higher order function is a function that operates on any other function,
either a arguments(actual parameters) or return them. 

function outerFunc(cb){
    return cb();
}

From the example above which is the higher order function?
outerFunc - this is because it takes in cb & returs the call of the cb
inside it.

Callback function
A callback function is any function that is passed into another function as an 
argument, which is then called inside the outer function to complete some action.

Callback functions can be declared as functions, function expressions or even 
or anonymous functions. 


function outerFunc(cb){
    return cb();
}

what is the callback function in this example?
cb() is the callback function and outerFunc is the higher order function. 

*/


function firstFunction(){
    displayAlert("Hello one")
}

function secondFunction(){
    displayAlert("Hello two")
}

function displayAlert(text){
    alert(text);
}

function calculate(num1, num2, callbackFunction){
    var t = num1 + num2;
    callbackFunction(t);
}
secondFunction();
firstFunction();

calculate(1, 10, displayAlert);
calculate(100, 10, displayAlert);