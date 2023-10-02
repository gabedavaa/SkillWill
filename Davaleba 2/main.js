"use strict";

console.log("hello");
////////////////////////////////////////
// 1) Task
const arr1 = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function findYoungest(array) {
  let age = array[0].age;
  let result = "";
  // console.log(age);
  for (const item of array) {
    // console.log(item["age"]);
    if (age > item["age"]) {
      age = item["age"];
      result = item["name"];
    }
  }
  return `${result} is the youngest`;
}

console.log(findYoungest(arr1));

//////////////////////////////////////////////
const obj1 = { name: "Temo", lasName: "meskhi", age: 25 };
// 2) Task
function newObject(obj) {
  return { ...obj };
}

const newObj1 = newObject(obj1);
obj1.name = "g";
console.log(obj1);
console.log(newObj1);

///////////////////////////////////////
// 3) Task
function randomWinner() {
  let rollA = Math.floor(Math.random() * 6) + 1;
  let rollB = Math.floor(Math.random() * 6) + 1;
  let winner = null;

  while (winner === null) {
    rollA = Math.floor(Math.random() * 6) + 1;
    rollB = Math.floor(Math.random() * 6) + 1;

    if (rollA === 3) winner = "a";
    if (rollB === 3) winner = "b";
  }
  return winner;
}

console.log(randomWinner());
