const questions = [
    {
        question: "Which of the following is the first cryptocurrency ever created?",
        answers: ["Ethereum", "Litecoin", "Bitcoin", "Trump"],
        correct: "Bitcoin"
    },
    {
        question: "What is Ethereum's native cryptocurrency called?",
        answers: ["OGC", "Ether", "Ripple", "Doge"],
        correct: "Ether"
    },
    {
        question: "What is the maximum supply of bitcoin?",
        answers: ["21 million", "10 million", "5 billion", "100 billion"],
        correct: "21 million"
    },
    {
        question: "What does HODL means in cryptocurrency?",
        answers: ["Hackers Only Do LTC", "Hardware Operational Digital Ledger", "High On Demand Levels", "Holding onto cryptocurrency rather than selling"],
        correct: "Holding onto cryptocurrency rather than selling"
    },
    {
        question: "Which of the following cryptocurrencies is focused on privacy and anonymity?",
        answers: ["Bitcoin", "Monero", "Ton", "Core"],
        correct: "Monero"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const progressElement = document.getElementById("progress");

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => checkAnswer(answer, currentQuestion.correct));
        answersElement.appendChild(button);
    });

    progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function resetState() {
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.innerText = `Quiz Completed! You scored ${score} out of ${questions.length}.`;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
}

loadQuestion();