//Q2 - What is the value of result after calling this function? Why?
function myFunction2(num1, num2) {
    /*return*/ num1 + num2
}

const result = myFunction2(5, 5)
console.log("Q2", result);

/* MY EXPECTATION - */
/*RESULT - The result is undefined, as the value has not been returned to myFunction*/

////////////////////////////////
//Q3 - What is the value of num at the end of the program? Why?
function myFunction3(num3) {
    return num3-1    
}

let num3 = 10
num3 = myFunction3(num3)
num3 = myFunction3(num3)
console.log("Q3", num3)

/* MY EXPECTATION - Each time the function is called, one is subtracted from num. Num is declared as 10, the function is called twice, so num will equal 8.*/
/*RESULT - I was right!*/

////////////////////////////////
// Q4 - What is the value of add and num at the end of the program? Why?
function myFunction4(num4) {
    return num4-1
}

let num4 = 10
let add4 = 3
add4 = myFunction4(add4)
add4 = myFunction4(add4)
console.log("Q4", add4, num4)

/* MY EXPECTATION - Num and and Add both remain the same, as myFunction processes num not add, so the called function on lines 34 and 35 have no effect.*/
/*RESULT - I was wrong. Add has been reduced by 1 for each pass through myFunction4. The parameters don't matter, if the function is called, it will process the data regardless on parameter name*/

////////////////////////////////
//Q5 - What value will be logged inside the function call? Why?
function myFunction5(num5a, num5b) {
    console.log("Q5", num5b)
}

let num5a = 10
let num5b = 2

myFunction5(num5a)

/* MY EXPECTATION - myFunction will return 2 is that is the value of num5b,  .*/
/*RESULT - Nothing is returned, as myFunction asks to log num5b, but is only passed the value for num5a*/

////////////////////////////////
//Q6 - What value will be logged inside the function call? Why?
function myFunction6(num6a, num6b) {
    console.log("Q6", num6b)
}

let num6a = 10
let num6b = 2

myFunction6(num6b, num6a)

/* MY EXPECTATION - myFunction will return 2 is that is the value of num6b, num6a is ignored*/
/*RESULT - Correct!*/

///////////////////////////////
// Q7 - What will the value of counter be at the end of this program? Why?
let counter = 1

function myFunction7() {
    counter++
    return counter
}

myFunction7() 
const num7 = myFunction7()

console.log("Q7 Num7", num7);
console.log("Q7 Counter", counter);

/* MY EXPECTATION - counter begins as 1, line 78 sends counter in, adds 1, then returns it. num7 is then defined as myFunction, so the log will be 2... or 3 if line 79 calls the function again. */
/*RESULT - It was 3! So presumably the caliing of myFunction7 on 78 AND 79 both added 1*/

////////////////////////////////////////////////////////////////
//Q8 - What will the value of result be at the end of this program? Why?
function myFunction8(num8a, num8b){
    return num8a - num8b;
}

const num8a = 10
const num8b = 1
const num8c = 4

const result8 = myFunction8(num8c, num8a)

console.log("Q8", result8);

/* MY EXPECTATION - myFunction8 is only sent a value for num8a, while the return adds requires num8b as well. The log will be 10 as that is only value passed to myFunction8 ---OR--- because they are consts, the value will exists without being directly passed, and the log will be 11*/
/*RESULT - Both of my theories WRONG! Of course, the parameters in myFunction8 are empty vessels, passing them num8c (4) and num8a (10) results in (4 - 10 = -6). NB - I switched the + to - to make sure I understood what was happening.*/

///////////////////////////////
//Q9 - What will be logged out on the console when this code runs? Why?
function myFunction9(num9a, num9b) {
    console.log("Q9", num9c)
}

const num9a = 10
const num9b = 1
const num9c = 20

myFunction9(num9c, num9a)

/* MY EXPECTATION - 20, as num9a is passed but not called in the log  */
/*RESULT - It was 3! So presumably the caliing of myFunction7 on 78 AND 79 both added 1*/

///////////////////////////////
// Q10 - What will be logged out on the console when this code runs? Why?
function 