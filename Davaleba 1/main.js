console.log("hello");

// 1) First function
function calcEqual(a, b) {
  if (typeof a === "number" && typeof b === "number" && a === b) {
    return "ტოლია";
  }

  return "არ არის ტოლი";
}

console.log(calcEqual(5, "5"));
console.log(calcEqual(5, 5));
console.log(calcEqual(5, 7));

// 2) Second function
function farToCel(far) {
  if (typeof far !== "number") return false;

  return (5 / 9) * (far - 32);
}

console.log(farToCel(undefined));
console.log(farToCel(125));
console.log(farToCel("125"));

// 3) Third function
function calcFun(a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }

  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    if (b === 0) {
      return false;
    }
    return a / b;
  } else {
    return false;
  }
}

const a = 10;
const b = 8;
const operation = "*";
const result = calcFun(a, b, operation);
console.log(result);
