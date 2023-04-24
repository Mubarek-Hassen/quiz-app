const question = document.getElementById("question")

const choices = Array.from(document.getElementsByClassName("choice-text"))
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is the Javascript file extension?",
    choice1: '.js',
    choice2: '.html',
    choice3: '.json',
    choice4: '.css',
    answer: 1,
  },
  {
    question: "what is 'typeof' used for?",
    choice1: 'to debug',
    choice2: 'to return the data type',
    choice3: 'to send files',
    choice4: 'to style',
    answer: 2,
  },
];

const CORRECT_BONUS = 10;

const MAX_QUESTIONS = 2;

startGame =()=>{
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion=()=>{
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion['choice' + number];
  });
}

startGame();