const questions = [
    {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        choices: ["global variable", "local variable", "Both of the above", "None of the above"],
        correctAnswer: 1,
    },
    {
        question: "Which of the following function of String object returns the primitive value of the specified object?",
        choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "valueOf()"],
        correctAnswer: 3,
    },
    {
        question: "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
        choices: ["concat()", "every()", "push()", "some()"],
        correctAnswer: 1,
    },
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-button");

let currentQuestion = 0;
let score = 0;
let timer = 60;
let countdown;

function showModal() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.quiz-container').classList.add('showquiz-container');
    displayQuestion();
   if (nextButton.classList.contains('hide')) {
        startTimer();
   }
}

function closeModal() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.quiz-container').classList.remove('showquiz-container');
    stopTimer();
}

function startTimer() {
    countdown = setInterval(() => {
        timer--;
        timerElement.textContent = timer + " seconds";
        if (timer === 0) {
            stopTimer();
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = '';

    questions[currentQuestion].choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(choice) {
    stopTimer();
    if (choice === questions[currentQuestion].correctAnswer) {
        score++;
        scoreElement.textContent = score;
    }

    nextButton.classList.remove("hide");
}

function nextQuestion() {
    currentQuestion++;
    timer = 60;
    timerElement.textContent = timer + " seconds";
    if (currentQuestion < questions.length) {
        displayQuestion();
        startTimer();
        nextButton.classList.add("hide");
    }else{
        endQuiz();   
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    choicesElement.innerHTML = '';
    nextButton.classList.add("hide");
    timer = 0;
    timerElement.textContent = timer + " seconds";
}
