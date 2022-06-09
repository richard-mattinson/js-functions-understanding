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
function myFunction10(num10a, num10b, num10c) {
    console.log("Q10", num10c);
}

const num10a = 10
const num10b = 1
const num10c = 20

myFunction10(num10c, num10a, 100)

/* MY EXPECTATION - Accidentally logged this before writing my expectation */
/*RESULT - myFunction10 on line 129 sends 3 values to line 121, the names of these parameters are unimportant, for order means num10c on 121 becomes 100, and then is logged*/

////////////////////////////
// Q11 - What will be the value of result when this code runs? Why?
function myFunction11(num11a, num11b, num10c) {
    return num11a + num11b + num10c
}

const num11a = 10
const num11b = 1
const num11c = 20

const result11 = myFunction11(1, 1, 1)

console.log("Q11", result11);

/* MY EXPECTATION - Result will be 3, as the nums have all been passed on 144 as 1 (1+1+1), the names of the parameters doesn't matter */
/*RESULT - I was right!*/

////////////////////////////////
// Q12 - What will be the value of result when this code runs? Why?
function getSomeValue() {
    return 2
}

function myFunction12(num12a) {
    const num12b = getSomeValue()
    return num12a * num12b
}

const result12 = myFunction12(5)

console.log("Q12", result12);

/* MY EXPECTATION - num12b = 2 from line 153, called in line 158. num12a = 5 from line 162, called in line 157. log will be 10 */
/*RESULT - I was right!*/

///////////////////////////////
//Q13 - What will be the value of result when this code runs? Why?
function getSomeValue13() {
    return 2
}

function myFunction13(num13a) {
    const num13b = getSomeValue13()
    return num13a * getSomeValue13()
}

const result13 = myFunction13(5)

console.log("Q13", result13);

/* MY EXPECTATION - num13b = 2, num12a = 5. log will be 10.  */
/*RESULT - I was right!*/

///////////////////////////////
//Q14 - What will be the value of result when this code runs? Why?
function getSomeValue14() {
    return 2
}

function myFunction14() {
    return getSomeValue14() * getSomeValue14()
}

const result14 = myFunction14(5)

console.log("Q14", result14);

/* MY EXPECTATION - Log 4. myFunction does not call any parameters on line 194, so 5 will not be passed from line 197.*/
/*RESULT - I was right!*/

////////////////////////////////
//Q15 - What will be the value of result when this code runs? Why?
function myFunction15(num15) {
    if (true) {
        return -10
    }

    return num15 * 10
}

const result15 = myFunction15(5)
console.log("Q15", result15);

/* MY EXPECTATION - Log -10. Any number but 0 is true, so -10 will be returned. */
/*RESULT - I was right? This seems too simple!*/

////////////////////////////////
//Q16 - What will be the value of result when this code runs? Why?
function myFunction16(num16) {
    if (false) {
        return -100
    }

    return num16 * 10
}

const result16 = myFunction16(5) 
console.log("Q16", result16)

/* MY EXPECTATION - Log 50. Any number but 0 is true, so -100 will NOT be returned. Num16 is then passed, so it's 5 x 10 on line 227*/
/*RESULT - I was right!*/

///////////////////////////////
// Q17 - What will be the value of result when this code runs? Why
function myFunction17(num17) {
    return -100

    return num17 * 10
}

const result17 = myFunction17(5)
console.log("Q17", result17)

/* MY EXPECTATION - Log -100. 5 is passed in to the function, but not called? So it will simply return -100. The first return means the second is never reached*/
/*RESULT - I was right!*/

///////////////////////////////
//Q18 - What will be the value of result when this code runs? Why?
function myFunction18(num18) {
    return num18 * 10

    return -100
}

const result18 = myFunction18(5)
console.log("Q18", result18)

/* MY EXPECTATION - Log 50. 5 is passed in to the function, then multiplied by the 10. Again the second return is never reached */
/*RESULT - I was right!*/

///////////////////////////////
//Q19 - What will be the value of result when this code runs? Why
function myFunction19(num19a, num19b, num19c) {
    return num19b
}

const result19 = myFunction19(5, 10, 15)
console.log("Q19", result19)

/* MY EXPECTATION - Log 10. Although three numbers are passed in, only num19b (10) is ever called. */
/*RESULT - I was right!*/

///////////////////////////////
//Q20 - What will be the value of result when this code runs? Why
function myFunction20(num20a, num20b, num20c) {
    return num20a + num20c
}

const num20a = 20
const num20b = 200
const num20c = 1000

const result20 = myFunction20(5, 10, num20c, 15)
console.log("Q20", result20)

/* MY EXPECTATION - Log 1005. Line 286 passes Num20a passes 5 for num20a, then 1000 for num20c as it calls the const.*/
/*RESULT - I was right!*/

///////////////////////////////
//Q21 - What will be the value of result when this code runs? Why
function myFunction21(num21a, num21b) {
    const result21 = num21a + num21b
    return result21
}

const result21 = myFunction21(10, 21)
myFunction21(100, 21)
console.log("Q21", result21)

/* MY EXPECTATION - Log 121. Line 300 replaces the values in the line above, so the result will be 100 + 21.*/
/*RESULT - WRONG Log 31, result21 is already passed the values before line 300 alters them.*/

///////////////////////////////
//Q22 - What will be the value of result when this code runs? Why
function myFunction22(num22a, num22b) {
    let result22 = num22a + num22b
    return result22
}

let result22 = 0
myFunction22(100, 2)
console.log("Q22", result22);

/* MY EXPECTATION - Log 0. For the same reason as the last question, .*/
/*RESULT - Right, though after playing about with order that doesn't seem to matter*/

////////////////////////////////
//Q23 - What will be the value of result when this code runs? Why
function myFunction23(num23a, num23b) {
    result23 = num23a + num23b
}

let result23 = 0
myFunction23(100, 2)
console.log("Q23", result23);

/* MY EXPECTATION - Log still 102?.*/
/*RESULT - Right!*/

////////////////////////////////
//Q24 - What will be the value of result when this code runs? Why
function myFunction24(num24a, num24b) {
    const result24 = num24a + num24b
    return 100
}

const result24 = myFunction24(5, 2)
console.log("Q24", result24);

/* MY EXPECTATION - Log 100. Return 100 means you'll just get 100?.*/
/*RESULT - Right!*/

///////////////////////////////
// Q25 - What will be the printed out by the console log statements when this code runs? Why?
function myFunction25(a) {
    let b = 20

    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
}

let a = 1
let b = 2
let c = 3

myFunction25(100)

/* MY EXPECTATION - Log a = 100, Log b = 2, Log c = 3. Or b and c will be undefined.*/
/*RESULT - Half right! b is 20 because that let is inside the function, so has scope priority over the one outside*/

