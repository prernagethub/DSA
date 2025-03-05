//undefind is a value whereas not-defind is a error.
//console mai value black color mai hai to it would be string and if its blue color then its number.

//let a = 12;
//let b = "13";

// console.log(a+b); = concetination.
// type will be string..

// type - corcien
// console.log("1" + 1); = 11 concate will change the last value into string
// console.log("1" - 1); = 0 js engine will convert the string into number

// . +
//  1. concetination

//  2. addition


// type casting

// one type to onother type

//swaping with 3 method............................................................................
//1.with extra variable............................................

// let a = 10;
// let b = 20;

// let c = a;
// a = b;
// b = c;
// console.log(a, b);


//2 .without extra variable......................................

// let a = 20;
// let b = 10;

// console.log(a = a + b);  //30

// console.log(b = a - b);  //20
// console.log(a = a - b);   //10

// console.log(a, b);

// 3. with destructuring............................................

// let c = 10;
// let d = 20;

// [c, d] = [d, c]
// console.log(c, d);

// / sign will always gives coffecient / bhagfal
// % precentage/mode sign will always gives you remender/sheshfal


// oprator..........................................

// relational oprators................................

// end oprator &&
// if all condition is true answer will be truee

// if pehli condition true/false ho ti aage condition check n krta answer will be true/false hi hoga..

// or oprator.......................................................

console.log(10 < 6 || 20 < 7 || 18 > 9);

// 1 bhi true hua to true hi hoga..
// pehli condition true hai to aage check krne k jrurt nh pdti all will be true.

//uniary oprator......................................................

//++   //--
//post(++x) and pre(x--)

// let i = 12;

// i = i++ + ++i  //12 + 13+1
// console.log(i);

// let a = 12;
// let b = 4;

// let c = a++ - a-- + ++a - b-- + b++ - a++  //12 - 13 + 14 - 4 + 3 - 14   =  -1 + 10 -11    = -2
// console.log(c);
// console.log(a);
// console.log(b);



// let b = true;    //true = 1  //false = 0
// c = b++;
// console.log(c);

//variable par post, pre lga skte hai.
//number par post, pre nhi lga skte hai.

// example.

// let a = 10;
// let b = ++(a++);  //++(10)

// console.log(b);   //SyntaxError: Invalid left-hand side expression in prefix operation


//math functions..................................................................................

console.log(Math.round(10.3));  //10  .5 se niche h to lower value will be the answer
console.log(Math.round(10.6));  //11   .5 se uper h to upper value will be the answer
console.log(Math.ceil(10.1));  //11      always upper value
console.log(Math.floor(10.8));  //10      always lower value
console.log(Math.trunc(10.867));  //10     . dot k baad ki value htata hai
console.log(Math.pow(2, 3));  //8         1rs number jispr power rkhni hai 2nd number jitni power rkhni hai
console.log(Math.sqrt(16));  //4      
console.log(Math.cbrt(81));  //4
console.log(Math.abs(-6));  //6        convert -ve into +ve
console.log(Math.max(4, 6));  //6    
console.log(Math.min(2, 6));  //2
console.log(Math.random());  //random number between 0 to 1

//Random OTP generator...............................................................

console.log(Math.trunc(Math.random() * 9000) + 1000);

let x = 3.566765;
console.log(x.toFixed(3));  //3.567 (.)dot k baad kitne number chaiye , type will be string.




















