const quiz = [
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which language runs in the browser?",
    choices: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(choice) {
  if(choice === quiz[currentQuestion].answer) score++;
  currentQuestion++;
  if(currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  choicesEl.innerHTML = "";
  resultEl.textContent = `Your Score: ${score} / ${quiz.length}`;
}

nextBtn.onclick = showQuestion;

showQuestion();
