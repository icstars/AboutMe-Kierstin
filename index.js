// //VARIABLES
// //let, var, const

// // const name = "kierstin";

// // name = "jamie";

// // console.log(name); //Print

// // console.log("Hello world");

// const name = "pizza";
// const topping = "pineapple";
// /* adding two strings;
// concatenation */

// console.log(name, topping);

// // TEMPLATE LITERALS// turns everything to a string
// console.log(`${name} ${topping}`);

// console.log("32" + "100" + "string");

// // integer

// // booleans

// // false, undefined, null, 0 , let x=false

// // let num = name;

// // console.log(Boolean(num));

// let firstName = prompt("what is your name?");
// let age2 = prompt("What is your age?");
// let hobbie3 = prompt("what is your hobbie?");

// alert(
//   `Hi my name is ${firstName} and my age is ${age2} and my favorite hobbie is ${hobbie3}`
// );

// CONDITIONALS////////////

// TRUTHY VALUES

// let x = 1;

// console.log(Boolean(x));

// conditional operators
//===; 1 === 1 is true--alaways
// ==; loose equal; compares could be true or false.. checks if they are the same regardless of data type
// 1 !== 2; true
// <, >, !==(NOT EQUALS), <=, >
// More than or equal to

// 'collin' === 'Collin' false

// if statement

// if (this is true) {then run this}

// =; assignment operator
// == ; loose equals
// ===; strict equals

// if ("collin" === "collin") {
//   console.log("hello world");
// }

// let x = "0";

// if (x === 0) {
//   console.log("hello world");
// }

// logical operator
// || && ??
// || OR
// && AND
// ?? NULLISH

// let x = 0;
// let y = 0;

// if (x === 0 && y === 0) {
//   console.log("hello world");
// }

// or opertor

// //if (slimesDefeated === 10) {
//   questCompleted = true;
// }

// let i = 0;

// let k = 1;

// if (i === 1 || k === 1) {
//   console.log("hello world");
// }

// if this happens or this

// ELSE; if the statement is false

// let v = 10;

// let u = 8;

// if (v === 9) {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }

// if (login === true) {
//   // redirect to page
// } else {
//   alert("user doesn't exist");
// }

// else if
/* will run if conditions before 
it are false and specifies a 
new condition
*/

// let q = 0;
// if (q === 1) {
//   console.log("goodye world");
// } else if (q === 0) {
//   console.log("hello world");
// } else {
//   console.log("something");
// }

// let user = "guest";

// if (user === "admin") {
//   // redirect to admin page
// } else if (user === "user") {
//   // redirect to user page
// } else {
//   alert("account not found");
// }

// let userName = prompt("Enter your username");
// // value is no until you enter user name
// if (userName === "kierstin123" || userName === "kami320") {
//   alert("logged in!");
// } else if (userName === "lucy321") {
//   alert("logged in!");
// } else {
//   alert("no account found");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick", "jimmy"];

// console.log(arr[randomNumber]);

// if (arr[randomNumber] === "liv") {
//   console.log("Hello world");
// } else if (arr[randomNumber] === "kamar") {
//   console.log("whats poppin");
// } else {
//   console.log("tech youre wrong");
// }

// let ar = ["shadi", "lucy", "kite"];

// if (ar[0] === "shadi") {
//   console.log("shadi");
// } else if (ar[1] === "lucy") {
//   console.log("lucy");
// }

// let randomNumber = Math.floor(Math.random() * 11);
// console.log(randomNumber);

// let randomNumber1 = prompt("Guess the number");

// if (randomNumber1 == randomNumber) {
//   alert("success");
// } else {
//   alert("failure");
// }

////////////////////////////////////////
// LLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPSSSSSS
// variables and data
// let myName = "Kierstin"; // This a string
// console.log(myName);

// // conditions
// if (myName === "Kierstin") {
//   console.log(`Hey ${myName}`);
// } else {
//   console.log(false);
// }

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// arrays and methods
let team = ["Kierstin", "Shampayne", "Lucy", "Deisy"];
console.log(team);
console.log(team.length);

// push
console.log(team.push("Leyanna"));
console.log(team);
// adding to array

// pop take out last item in array
// console.log(team.pop());
// console.log(team);

// // join separates by ""
// console.log(team.join()); // "I" will go in the middle

// //slice returns a new array
// console.log(team);
// console.log(team.slice(0, 3));

// // split
// let team1 = "john, mike, kierstin, lucy";
// console.log(team1);
// let teamSplit = team1.split(",");
// console.log(teamSplit);

// // looping thru array
// for (let i = 0; i < team.length; i++) {
//   console.log(team[i]); //`Hello ${team[i]};
// }
let rolesarray = [];
let team22 = [];

console.log(team22);
console.log(team[5]);

let team2 = prompt("Enter your team names");
console.log(team2);
let roles4 = prompt("Enter your team roles");
console.log(roles4);

let team23Split = team23.split(",");
let team24Split = roles.split(",");
console.log(teamSplit23);

for (let i = 0; i < team23array.length; i++) {
  console.log(i);
  console.log(
    `Hello my name is ${team23Spilt[i]} and I am the ${rolesarray[i]}`
  );
}
