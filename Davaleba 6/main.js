"use strict";
//////////////////////////

console.log("hello");

//////////////////////////
// 1) Task
const btnOpenModal = document.getElementById("btn-1");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close-modal");

btnOpenModal.addEventListener("click", (e) => {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
});

//////////////////////////////////////////////////////////

// 2) Task

const changeBackgroundColor = document.getElementById("change-backgroundColor");
const colorInput = document.getElementById("colorInput");

changeBackgroundColor.addEventListener("click", () => {
  const validColors = ["red", "blue", "green", "black", "white"];

  const value = colorInput.value;
  if (validColors.includes(value)) {
    document.body.style.backgroundColor = value;
  } else {
    alert(
      "Invalid color! Please enter one of the following colors: red, blue, green, black, white."
    );
  }

  colorInput.value = "";
});

//////////////////////////////////////////

// 3) Task

const averageBtn = document.getElementById("average-btn");
const averageResult = document.getElementById("averageResult");
const averageValue = document.getElementById("averageValue");
const numbersInput = document.getElementById("numbers");

averageBtn.addEventListener("click", () => {
  const numbers = numbersInput.value;
  const numbersArr = numbers.split(":").map(Number);
  if (numbers.trim() === "") {
    averageValue.textContent = "Please enter numbers separated by ':'";
    averageResult.textContent = "";
    return;
  }
  if (numbersArr.some(isNaN) || numbersInput === "") {
    averageResult.textContent =
      "Invalid input. Please enter numbers separated by ':'";
  } else {
    const sum = numbersArr.reduce((acc, num) => acc + num, 0);

    averageResult.innerText = sum / numbersArr.length;
  }

  numbersInput.value = "";
});
