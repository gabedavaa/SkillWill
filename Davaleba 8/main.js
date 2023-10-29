"use strict";
//////////////////
console.log("first");

/////////////////////////////

// 1) Task
function expo(number, power, callback) {
  if (power === 0) {
    return 1;
  } else if (power < 0) {
    return 1 / expo(number, -power, callback);
  } else {
    const result = number * expo(number, power - 1, callback);
    if (callback) {
      callback(number, power, result);
    }
    return result;
  }
}

function logStep(number, power, result) {
  console.log(`${number}^${power} = ${result}`);
}

const number = 5;
const power = 3;
const result = expo(number, power, logStep);
console.log(`${number}^${power} = ${result}`);

////////////////////////////////////
////////////////////////////////////

// 2) Task

const postContainer = document.querySelector(".post-container");
const postTitle = document.querySelector(".post-title");
const postContent = document.querySelector(".post-content");

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function fetchApi(api) {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    data.map((el) => {
      const postNumber = document.createElement("h1");
      postNumber.textContent = `Post: ${el.id}`;

      const postTitle = document.createElement("h2");
      postTitle.textContent = `Title: ${el.title}`;

      const postContent = document.createElement("p");
      postContent.textContent = el.body;

      postContainer.appendChild(postNumber);
      postContainer.appendChild(postTitle);
      postContainer.appendChild(postContent);
    });
  } catch (error) {
    postContent.textContent = "Error: " + error.message;
  }
}

fetchApi(apiUrl);

////////////////////////////////////
////////////////////////////////////

// 3) Task
function deepCopy(obj) {
  return new Promise((res, rej) => {
    if (typeof obj !== "object") {
      rej("Input is not an object");
    } else {
      const copyObject = deepCopyRecursive(obj);
      res(copyObject);
    }
  });
}

function deepCopyRecursive(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Base case: return non-objects as-is
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopyRecursive); // Deep copy arrays
  }

  const copy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopyRecursive(obj[key]);
    }
  }

  return copy;
}

const a = { a: 2, b: { c: 3 } };

deepCopy(a)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
