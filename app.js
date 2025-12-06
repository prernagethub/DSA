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

console.log(Math.round(10.3)); //10  .5 se niche h to lower value will be the answer
console.log(Math.round(10.6)); //11   .5 se uper h to upper value will be the answer
console.log(Math.ceil(10.1)); //11      always upper value
console.log(Math.floor(10.8)); //10      always lower value
console.log(Math.trunc(10.867)); //10     . dot k baad ki value htata hai
console.log(Math.pow(2, 3)); //8         1rs number jispr power rkhni hai 2nd number jitni power rkhni hai
console.log(Math.sqrt(16)); //4
console.log(Math.cbrt(81)); //4
console.log(Math.abs(-6)); //6        convert -ve into +ve
console.log(Math.max(4, 6)); //6
console.log(Math.min(2, 6)); //2
console.log(Math.random()); //random number between 0 to 1

//Random OTP generator...............................................................

console.log(Math.trunc(Math.random() * 9000) + 1000);

// .................................................................................

let x = 3.566765;
console.log(x.toFixed(3)); //3.567 (.)dot k baad kitne number chaiye , type will be string.

// day2..............................................................conditional statements.........

//valid voter.....................
// let ans = "harsh";

// if (isNaN(ans)) {
//   console.log("wrong input")

// } else if (ans >= 18) {
//   console.log("you can vote")

// } else {
//   console.log("you can not vote")

// };

//shop discount......................................................
let amount = 10000;
let discount = 0;

if (amount > 0 && amount <= 5000) {
  console.log("No discount");
} else if (amount > 5001 && amount <= 7000) {
  discount = 5;
  // console.log(amount - Math.floor((amount * 5) / 100));      //payable amount after discount
} else if (amount > 7001 && amount <= 9000) {
  discount = 10;
  // console.log(amount - Math.floor((amount * 10) / 100));     //payable amount after discount
} else if (amount > 9001) {
  discount = 20;
  // console.log(amount - Math.floor((amount * 20) / 100));      //payable amount after discount
}

console.log(amount - Math.floor((amount * discount) / 100)); //payable amount after discount

// bijli bill.........................................................

// let unit = 123;
// let money = 0;

// if (unit > 400) {
//   money = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   money = (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   money = (unit - 100) * 6;
//   unit = 100;
// }

// money += unit * 4;
// console.log(money);

// INR DEMONITIZATION.........................

let Rupees = 5231;

if (Rupees >= 500) {
  console.log("500 notes  = ", Math.floor(Rupees / 500));
  Rupees = Rupees % 500;
}
if (Rupees >= 200) {
  console.log("200 notes = ", Math.floor(Rupees / 200));
  Rupees = Rupees % 200;
}
if (Rupees >= 100) {
  console.log("100 notes = ", Math.floor(Rupees / 100));
  Rupees = Rupees % 100;
}
if (Rupees >= 50) {
  console.log("50 notes= ", Math.floor(Rupees / 50));
  Rupees = Rupees % 50;
}
if (Rupees >= 20) {
  console.log("20 notes = ", Math.floor(Rupees / 20));
  Rupees = Rupees % 20;
}
if (Rupees >= 10) {
  console.log("10 notes= ", Math.floor(Rupees / 10));
  Rupees = Rupees % 10;
}
if (Rupees >= 5) {
  console.log("10 notes= ", Math.floor(Rupees / 5));
  Rupees = Rupees % 5;
}
if (Rupees >= 2) {
  console.log("10 notes= ", Math.floor(Rupees / 2));
  Rupees = Rupees % 2;
}
if (Rupees === 1) {
  console.log("1 rupees = ", Rupees);
}

// ternary oprator.............................

// condition ? true : false

console.log(120 > 13 ? "bilkul" : "ji nhi");

//nested ternary oprator..............................

let num = 0;
console.log(
  num > 0 ? "ha ji positive hai" : num < 0 ? "mai negative hu" : "zero hu"
);

//switch case............................................

let day = 3;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tues");
    break;
  case 3:
    console.log("wed");
    break;

  default:
    console.log("invalid input");
}

//..............................................................

let month = 11;

switch (month) {
  case 1:
  case 6:
  case 3:
  case 4:
  case 5:
    console.log("31 days");

    break;

  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    console.log("30 days");
    break;

  default:
    console.log("28 days");
}

//............................................................

// switch (true) {
//   case 18 < 4:
//     console.log("am bigger");

//     //dono condition true hui to sbse uper bali ko priority milegi
//     break;
//   case 48 > 4:
//     console.log("am bigger");
//     break;
// }

// day3.............................................LOOPS.................................................

// for(start; end; change){

// }

// for (i = 1; i < 10; i++) {
//   console.log("Hello");
// }

// for (i = 200; i >= 1; i--) {    //js engine phle "initialization" check krega then "condition" then" log "krega then
//   console.log(i);               //"increament" hoga....
// }

// .................................

// for (i = 1; i<=10; i++){
//   console.log(i);
// }
// console.log("fail",i);

// .................................
// var i = 1;
// for (; i<=10; i++){
//   console.log(i);
// }
// console.log("faill",i);

//...................................

// let i = 1;

// for (; i<=10; i++){                          //SyntaxError: Identifier 'i' has already been declared
//   console.log(i);
// }
// console.log("faill",i);

//...................................

// for(;;){
//   console.log("hello");   //valid loop but infinite loop
// }

// for(i =1 ;;){
//   console.log("hello");   //valid loop but infinite loop
// }

// for(i =1; i<10;){
//   console.log("hello");   //valid loop but infinite loop

// }

//............................QUESTIONS.............................

//sum of n numbers..
//n means 1 se koi number tak (user will tell)

// let n = -12;

// if (isNaN(n)) {
//   console.log("wrong input");   //let n = "harsh";
// }
// else {
//   if (n > 0) {
//     sum = 0;                        //for storing the sum
//     for (i = 0; i <= n; i++) {
//       sum = sum + i;
//     }
//     console.log(sum);
//   }
//   else {
//     console.log("should be +ve and more than 0");  //let n = -12;

//   }
// }

//....................................................................

// var pr = prompt("kitna");
// var pr = 12;

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var nm = Number(pr);

//   if (isNaN(nm)) {
//     console.log("wrong input");
//   } else {
//     if (nm > 0) {
//       for (var i = 1; i <= Math.floor(nm / 2); i++) {
//         //half tk hi krta hai jese 12 ka half 6 , 6 tk krega fr direct 12 se divide krega
//         if (nm % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(nm); //khud se bhi devide krega
//     }
//   }
// }

// ......................................29-11-2025...............................................

//sum of the numbers..

// 1234%10 = 4 (modulu will give you remender)
//(1234/10) = 123.4
//math.floor(1234/10) = 123

// let n = 1234;
// sum = 0;

// while (n > 0) {
//   rem = n % 10;
//   sum = sum + rem;
//   n = Math.floor(n / 10);
// }

// console.log(sum);

// let n = 123;
// let rev = 0;
// while (n > 0) {
//   let rem = n % 10;
//   rev = rev * 10 + rem;
//   n = Math.floor(n / 10);
// }

// console.log(rev);

//STRONG NUMBERS.....

// let n = 145;
// let copy = n;
// let sum = 0;
// while (n > 0) {
//   var rem = n % 10; //145 = 5
//   fact = 1;
//   for (i = 1; i <= rem; i++) {
//     fact = fact * i;
//   }
//   sum = sum + fact;
//   n = Math.floor(n / 10);
// }

// if (copy === sum) {
//   console.log("strong number");
// } else {
//   console.log("not strong number");
// }

//............do while..................1 baar chlega loop , condition baad mai check hogi...

//repeat hello

// let n;
// do {
//   n = Number(prompt("Enter a non-zero number"));
// } while (n !== 0);

// console.log("Done! You entered:", n);

//........GUESS THE NUMBER GAME..................

// let random = Math.floor(Math.random() * 100) + 1;
// // console.log(random);

// let guess = -1;

// while (guess !== random) {
//   guess = Number(prompt("Guess the number"));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("try again");
//     continue;
//   }
//   if (guess > random) {
//     console.log("number is too high");
//   } else if (guess < random) {
//     console.log("number is too low");
//   } else {
//     console.log("congrate you got the right number:", guess);
//   }
// }

// let random = Math.floor(Math.random() * 100) + 1;
// let attempt = 0;

// function checkGuess() {
//   let guess = Number(document.getElementById("input").value);
//   attempt++;

//   if (!guess || guess < 1 || guess > 100) {
//     document.getElementById("message").innerText =
//       "❌ Enter a valid number between 1-100";
//     return;
//   }

//   if (guess > random) {
//     document.getElementById("message").innerText = "📈 Too High!";
//   } else if (guess < random) {
//     document.getElementById("message").innerText = "📉 Too Low!";
//   } else {
//     document.getElementById(
//       "message"
//     ).innerText = `🎉 Correct! Number was ${random}`;
//   }

//   document.getElementById("attempts").innerText = `Attempts: ${attempt}`;
// }

//array.... array is a linear DS, which store values in a continous manner.

// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("enter the number"));
// }

// console.log(arr);

//sum of n elements......

// let arry = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (i = 0; i < arry.length; i++) {
//   sum += arry[i];
// }

// console.log(sum);

//////////////////////////////////////////////////////////////////////////

// max in the array........

// let arry = [1, 124, 3, 12, 5, 6];
// let max = arry[0];
// for (i = 0; i < arry.length; i++) {
//   if (arry[i] > max) {
//     max = arry[i];
//   }
// }

// console.log(max);

//////////////////////////////////////////////////////////////////////////

// 2nd max in the array........

// let arry = [1, 124, 124, 122, 532, 6];
// let max = arry[0];
// let secondMax = arry[1];

// for (i = 0; i < arry.length; i++) {
//   if (arry[i] > max) {
//     secondMax = max;
//     max = arry[i];
//   } else if (arry[i] > secondMax && arry[i] != max) {
//     secondMax = arry[i];
//   }
// }

// console.log("max---->", max);
// console.log("2nd max---->", secondMax);

//reverse with extra space........

// let arry = [1, 2, 3, 4, 5, 6];
// let tempArray = new Array(arry.length);

// let j = 0;
// for (i = arry.length - 1; i >= 0; i--) {
//   tempArray[j] = arry[i];
//   j++;
// }

// console.log(tempArray);

//reverse without extra space........

// let arry = [1, 2, 3, 4, 5, 6];

// let p1 = 0;
// let p2 = arry.length - 1;

// while (p1 < p2) {
//   let temp = arry[p1];
//   arry[p1] = arry[p2];
//   arry[p2] = temp;

//   p1++;
//   p2--;
// }

// console.log(arry);

//zeros and ones..................

// let arr = [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1];;

// let j = 0; // pointer for placing 1s

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
//     j++;
//   }
// }

// console.log(arr);

//neagative on the left positove on the right...........

// let arr = [1, -1, 2, -3, 4, -5, -6, 1];

// let j = 0; // pointer for placing 1s

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
//     j++;
//   }
// }

// console.log(arr);

//left roatation by 1 element........................

// let arry = [1, 2, 3, 4, 5, 6];

// let copy = arry[0];
// for (i = 0; i < arry.length - 1; i++) {
//   arry[i] = arry[i + 1];
// }
// arry[arry.length - 1] = copy;
// console.log(arry);

//right roatation by 1 element........................

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let copy = arr[arr.length - 1];
// // console.log(copy);

// for (i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = copy;

// console.log(arr);

// nested looping..................increament baad mai hota h phele log chl jyega fir increment hoga

for (i = 1; i <= 4; i++) {
  console.log(i, "excution");
  for (j = 1; j <= 3; j++) {
    console.log("hello");
  }
}

//left rotation by k..................................brute force

// let arr = [1, 2, 3, 4, 5, 6];
// let k = Number([prompt("Enter the value")]);
// k = k % arr.length; //edge case - jab k ki value 7 ho to 2 baar hi chlega un-neccary nhi chlega

// for (j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

////left rotation by k.................

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// // let k = Number([prompt("Enter the value")]);
// k = k % arr.length;

// for (i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

// console.log(temp);


// dry run

// | i | (i + k) % 5     | arr[(i + k) % 5] | temp[i] update | temp array after update |
// | - | --------------- | ---------------- | -------------- | ----------------------- |
// | 0 | (0 + 2) % 5 = 2 | arr[2] = 3       | temp[0] = 3    | [3, ?, ?, ?, ?]         |
// | 1 | (1 + 2) % 5 = 3 | arr[3] = 4       | temp[1] = 4    | [3, 4, ?, ?, ?]         |
// | 2 | (2 + 2) % 5 = 4 | arr[4] = 5       | temp[2] = 5    | [3, 4, 5, ?, ?]         |
// | 3 | (3 + 2) % 5 = 0 | arr[0] = 1       | temp[3] = 1    | [3, 4, 5, 1, ?]         |
// | 4 | (4 + 2) % 5 = 1 | arr[1] = 2       | temp[4] = 2    | [3, 4, 5, 1, 2]         |
