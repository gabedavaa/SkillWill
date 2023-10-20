"use strict";
///////////////////////////////////////////
console.log("hello");
//////////////////////////////////////////
// 1) Task
function toyShopMaker(delay) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.25) {
      setTimeout(() => {
        resolve("undefected");
      }, delay * 1000);
    } else {
      setTimeout(() => {
        reject("defected");
      }, delay * 1000 + 1000);
    }
  });
}

function deliverToys(delay, create) {
  return new Promise((resolve, reject) => {
    if (create === "undefected") {
      if (Math.random() > 0.15) {
        setTimeout(() => {
          resolve("delivered");
        }, delay * 1000);
      } else {
        setTimeout(() => {
          reject("undelivered");
        }, delay * 1000 + 1000);
      }
    } else {
      reject("defected");
    }
  });
}

function toySelling(delay, deliver) {
  return new Promise((resolve, reject) => {
    if (deliver === "delivered") {
      if (Math.random() > 0.25) {
        setTimeout(() => {
          resolve("The Toy was sold");
        }, delay * 1000);
      } else {
        setTimeout(() => {
          reject("The toy was not sold");
        }, delay * 1000 + 1000);
      }
    } else {
      reject("undelivered");
    }
  });
}

// toyShopMaker(3)
//   .then((create) => {
//     console.log(create);
//     return deliverToys(2, create);
//   })
//   .then((deliver) => {
//     console.log(deliver);
//     return toySelling(1, deliver);
//   })
//   .then((sell) => {
//     console.log(sell);
//   })
//   .catch((err) => console.log(err));

/////////////////////////////////////////////
//////////////////////////////////////////

// 2) Task

async function toyShopProcess() {
  try {
    const create = await toyShopMaker(3);
    console.log(create);

    const deliver = await deliverToys(2, create);
    console.log(deliver);

    const sell = await toySelling(1, deliver);
    console.log(sell);
  } catch (err) {
    console.log(err);
  }
}

toyShopProcess();
