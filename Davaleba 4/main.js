"use strict";

///////////////////////
console.log("helloo");
///////////////////////

// 1) Task
function letterReplacer(string, valueToReplace, valueToReplaceWith) {
  return string
    .split("")
    .map((letter) => (letter === valueToReplace ? valueToReplaceWith : letter))
    .join("");
}

// console.log(letterReplacer("hello", "o", "t"));
const inputStr = "Hello, world! This is a test.";
const replacement = "l";
const replacementWith = "x";
const newStr = letterReplacer(inputStr, replacement, replacementWith);
// console.log(newStr);

////////////////////////////////////////////////////////

// 2) Task
function capitalLetter(string) {
  return string
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
}

const strExample = "this is a sample sentence";
// console.log(capitalLetter(strExample));

///////////////////////////////////////////////////

// 3) Task
function returnInOrderArr(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

const arrExample = [
  { name: "kakha", age: 85 },
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "lela", age: 58 },
];

console.log(returnInOrderArr(arrExample));
