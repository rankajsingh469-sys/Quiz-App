



// const btn = document.querySelector("#btn")


// btn.addEventListener('click',
//     function () {
//         container.classList.add('hidden')
//     }
// )

const questions = [
  {
    question: "Which keyword is used to declare a variable that can be reassigned?",
    options: ["const", "let", "static", "define"],
    answer: "let"
  },
  {
    question: "What is the output of console.log(2 + 3)?",
    options: ["23", "5", "6", "undefined"],
    answer: "5"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "==="
  },
  {
    question: "What does typeof null return in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    answer: "object"
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["func", "function", "def", "method"],
    answer: "function"
  },
  {
    question: "What is the output of console.log(10 % 3)?",
    options: ["1", "3", "0", "10"],
    answer: "1"
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["push()", "shift()", "pop()", "remove()"],
    answer: "pop()"
  },
  {
    question: "Which keyword creates a block-scoped constant?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  }
];

let score = 0;

const question = document.querySelector("#question");
const options = document.querySelectorAll(".option");
const optionsContainer = document.getElementById("options");
const scoreButton = document.querySelector("#score_btn");
const nextBtn = document.querySelector("#nextBtn");
const result = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
const greet = document.querySelector("#greet");
const progressBar = document.querySelector("#progressBar");
// options.forEach(function (option) {
//   option.addEventListener('click', function () {
//     // console.log(option.textContent);
//   })
// })

let currentQuestion = 0;

function showQuestion() {
  const current = questions[currentQuestion];
  answered = false;

  question.textContent = current.question;
  optionsContainer.innerHTML = "";

  current.options.forEach(function (option) {
    const optionElement = document.createElement("p");

    optionElement.textContent = option;

    optionElement.className =
      "border-2 border-[#e0e0e0] rounded-md px-4 py-2 bg-[#fafafa] text-start hover:border-blue-900 hover:bg-[#eef2f6] cursor-pointer";

    optionElement.addEventListener('click', function () {
      const greet = document.querySelector("#greet");





    })
    optionElement.addEventListener("click", function () {
      answered = true;
      optionsContainer.querySelectorAll("p").forEach(function (optionElement) {
        optionElement.style.pointerEvents = "none";
      });


      if (optionElement.textContent == current.answer) {
        score++;

        greet.textContent = "✅ Correct!";

        optionElement.classList.add("bg-green-200");

        optionElement.classList.remove(
          "hover:border-blue-900",
          "hover:bg-[#eef2f6]"
        );

        scoreButton.textContent = `score ${score}`;

      } else {
        greet.textContent = "❌ Incorrect!";
      }




    });

    optionsContainer.appendChild(optionElement);

  });
}


nextBtn.addEventListener('click', function () {
  greet.textContent = ""
  if (!answered) {
    greet.classList.add("text-red-500")
    greet.textContent = "Please answer the question first!";
    return;
  }

  
  if (currentQuestion < questions.length - 1) {
    currentQuestion++
    showQuestion()

  } else {
    showResult()
  }
})

restartBtn.addEventListener('click', function () {
  currentQuestion = 0;
  score = 0;
  result.classList.add("hidden");
  question.parentElement.classList.remove("hidden")
  showQuestion()


})

function showResult() {
  question.parentElement.classList.add("hidden");
  result.classList.remove("hidden");
  scoreText.textContent = `your score: ${score}/${questions.length}`
}


showQuestion();


