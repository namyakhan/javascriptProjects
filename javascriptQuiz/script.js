const jsQuiz = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<javascript>",
    c: "<scripting>",
    d: "<script>",
    correct: "d",
  },
  {
    question:
      "Which of the following type of variable is visible only within a function where it is defined?",
    a: "global variable",
    b: "local variable",
    c: "both of the above",
    d: "none of the above",
    correct: "b",
  },

  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse",
    c: "sort(order)",
    d: "none of the above",
    correct: "b",
  },

  {
    question:
      "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    a: "slice()",
    b: "split()",
    c: "replace()",
    d: "search()",
    correct: "b",
  },

  {
    question: "JavaScript is a ___ -side programming language.",
    a: "Client",
    b: "Server",
    c: "Both",
    d: "None",
    correct: "c",
  },

  {
    question:
      "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    a: "Alert()",
    b: "Prompt()",
    c: "Confirm()",
    d: "Msg()",
    correct: "b",
  },

  {
    question: "JavaScript File Has An Extension of:",
    a: ".java",
    b: ".js",
    c: ".javascript",
    d: ".xml",
    correct: "b",
  },

  {
    question: "A Function Associated With An object is Called:",
    a: "Method",
    b: "Function",
    c: "Link",
    d: "None",
    correct: "a",
  },

  {
    question: "GetMonth() returns The Month as:",
    a: "Int",
    b: "Float",
    c: "Char",
    d: "String",
    correct: "a",
  },

  {
    question: "Function is Used To Parse a String To Int:",
    a: "Integer.Parse",
    b: "Parse.Int",
    c: "Int.Parse",
    d: "None",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  unchecked();

  const option = jsQuiz[currentQuestion];

  questionEl.innerText = option.question;
  a_option.innerText = option.a;
  b_option.innerText = option.b;
  c_option.innerText = option.c;
  d_option.innerText = option.d;
}

//answer enteries
function checked() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//deselecting the answers
function unchecked() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //checking the correct answer
  const answer = checked();

  if (answer) {
    if (answer === jsQuiz[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    //printing the score
    if (currentQuestion < jsQuiz.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Your score is ${score}/${jsQuiz.length}</h2>

      <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
