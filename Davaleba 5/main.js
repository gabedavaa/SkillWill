"use strict";
/////////////////////////////////////

// 1) Task
const btnFirst = document.getElementById("btn-1");
const containerFirst = document.querySelector("#container-1");

btnFirst.addEventListener("click", () => {
  containerFirst.style.display = "none";
});

///////////////////////////////////
///////////////////////////////////

// 2) Task
const htmlString = `
  <div id="card">
    <h2>Gandalf</h2>
    <a href="#">Go to profile</a>
  </div>
`;

containerFirst.insertAdjacentHTML("afterend", htmlString);

////////////////////////////////////////
////////////////////////////////////////

// 3) Task

let totalScore = 0;
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Madrid", "Paris"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Si", "Ag", "Fe", "Au"],
    correctAnswer: "Au",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
];

const quizContainer = document.getElementById("quiz-container");
const totalScoreEl = document.getElementById("score-el");
const checkButton = document.getElementById("check-answer");
const nextButton = document.getElementById("next-question");

let currentQuestionIndex = -1;

function displayQuestion(index) {
  console.log(index);
  const randomQuestion = quizQuestions[index];

  const questionElement = document.createElement("p");
  questionElement.textContent = randomQuestion.question;

  const answerList = document.createElement("ul");
  randomQuestion.answers.forEach((answer, answerIndex) => {
    const answerItem = document.createElement("li");
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.value = answer;
    radioInput.id = `answer-${answerIndex}`;
    answerItem.appendChild(radioInput);
    answerItem.appendChild(document.createTextNode(answer));
    answerList.appendChild(answerItem);
  });
  quizContainer.innerHTML = "";
  quizContainer.innerHTML = `
    <div>
      <h3>Quiz Questions</h3>
    </div>`;
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(answerList);
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  console.log(selectedAnswer);
  if (selectedAnswer) {
    const answer = selectedAnswer.value;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
      totalScore += 1;
      selectedAnswer.parentNode.style.color = "green";
      totalScoreEl.innerHTML = `
      <div>
        <h4>score - ${totalScore}</h4>
      </div>`;
      checkButton.disabled = true; // Disable the selected answer
    } else {
      selectedAnswer.parentNode.style.color = "red";

      // alert("Incorrect. The correct answer is: " + correctAnswer);
    }
  } else {
    alert("Please select an answer before checking.");
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  checkButton.disabled = false;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    alert(`End of the quiz. score - ${totalScore}`);
    currentQuestionIndex = -1;
    quizContainer.innerHTML = "";
    totalScoreEl.innerHTML = `
    <div>
      <h4>score - ${totalScore}</h4>
    </div>`;
  }
});

checkButton.addEventListener("click", checkAnswer);

// Start the quiz with the first question
nextButton.click();
