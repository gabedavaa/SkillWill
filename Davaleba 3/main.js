"use strict";
console.log("hello");
/////////////////////////////

// 1) Task
function arrFun(a = 1, b = 1, ...restNum) {
  const firstEl = a + b;
  let secondEl = 1;

  for (let num of restNum) {
    secondEl *= num;
  }

  return [firstEl, secondEl];
}

console.log(arrFun(2, 5, 3, 8, 8));
/////////////////////////////

// 2) Task
const user = {
  banks: [
    {},
    {},
    {
      address: {},
    },
  ],
};

function cityFounder(userObj = {}) {
  const { banks: [, , { address: { city } = {} } = {}] = [] } = userObj;

  return city;
}

console.log(cityFounder(user));

////////////////////////////////////////
// 3) Task
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return [...obj].map((item) => {
      // console.log(item);
      return deepCopy(item);
    });
  }

  const newObj = { ...obj };
  for (const key in newObj) {
    console.log(key);
    if (newObj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(newObj[key]);
    }
  }
  return newObj;
}

const originalObject = {
  a: 1,
  b: [2, 3, { c: 4 }],
};

const copiedObject = deepCopy(originalObject);
copiedObject.b[2].c = 999;
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);
