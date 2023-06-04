let questions = [
    {
        question: "What is the point of JavaScript?",
        options:
            [
                "Allows you to make web pages interactive",
                "Structure",
                "Styling",
                "Life"
            ],
        correct: "Allows you to make web pages interactive"
    },
];

const timer = document.getElementById('timer');
const time = document.getElementById('time');
const timeEnd = document.getElementById('timeEnd');

const startBtn = document.getElementById('btn0');
const firstBtn = document.getElementById('btn1');
const secondBtn = document.getElementById('btn2');
const thirdBtn = document.getElementById('btn3');
const fourthBtn = document.getElementById('btn4');
const nextBtn = document.getElementById('btnNext');
const submitBtn = document.getElementById('btnSub')

const landingPage = document.querySelector('.landing');
const quizPage = document.querySelector('.quiz');
const finalPage = document.querySelector('.final');
const highScorePage = document.querySelector('.highScoreSection');

const viewHighScores = document.getElementById('showHighScores');
const questionPrompt = document.getElementById('questionPrompt');
const nameInput = document.getElementById('inputName');
const highScoreList = document.getElementById('highScoreList');
const feedback = document.getElementById('feedback');
const finalScore = document.getElementById('score');

let score = 0;
let questionCounter = 0;
let timerCount = 5;


function start() {
    viewHighScores.classList.add('d-none');
    timer.classList.remove('d-none');
    landingPage.classList.add('d-none');
    quizPage.classList.remove('d-none');
    score = 0;
    generateQuestions();
    timerStart();
};

function timerStart() {
    const tiktok = setInterval(function () {
        timerCount--;
        time.textContent = timerCount;
        if (timerCount === 0) {
            timer.classList.add('d-none');
            timeEnd.classList.remove('d-none');
            clearInterval(tiktok);
            endGame();
        };
    }, 1000);
};

function endGame() {
    finalPage.classList.remove('d-none');
    quizPage.classList.add('d-none');
    viewHighScores.classList.remove('d-none');
    finalScore.textContent = score;
}

function generateQuestions() {
    questionPrompt.textContent = questions[questionCounter].question;
    firstBtn.textContent = questions[questionCounter].options[0];
    secondBtn.textContent = questions[questionCounter].options[1];
    thirdBtn.textContent = questions[questionCounter].options[2];
    fourthBtn.textContent = questions[questionCounter].options[3];
}

function check(answer) {
    feedback.classList.remove('d-none');

    if (questions[questionCounter].options[answer] === questions[questionCounter].correct) {
        feedback.textContent = 'YES';
        score++;
    } else {
        feedback.textContent = 'NO';
    }
};

function chooseOne() {
    check(0)
    timer.classList.add('d-none');

    let pauseTime = 1;
    const pause = setInterval(function () {
        pauseTime--;
        if (pauseTime === 0) {
            clearInterval(pause);
            timeEnd.classList.add('d-none');
            endGame();
        };
    }, 1000);
};
function chooseTwo() {
    check(1)
    timer.classList.add('d-none');
    timeEnd.classList.add('d-none');
    let pauseTime = 1;
    const pause = setInterval(function () {
        pauseTime--;
        if (pauseTime === 0) {
            clearInterval(pause);
            endGame();
        };
    }, 1000);
};
function chooseThree() {
    check(2)
    timer.classList.add('d-none');
    timeEnd.classList.add('d-none');
    let pauseTime = 1;
    const pause = setInterval(function () {
        pauseTime--;
        if (pauseTime === 0) {
            clearInterval(pause);
            endGame();
        };
    }, 1000);
};
function chooseFour() {
    check(3)
    timer.classList.add('d-none');
    timeEnd.classList.add('d-none');
    let pauseTime = 1;
    const pause = setInterval(function () {
        pauseTime--;
        if (pauseTime === 0) {
            clearInterval(pause);
            endGame();
        };
    }, 1000);
};

function showScores() {
    landingPage.classList.add('d-none');
    finalPage.classList.add('d-none');
    highScorePage.classList.remove('d-none');
    const savedScores = localStorage.getItem('score');
    const storedScores = JSON.parse(savedScores);

    for (let i = 0; i < storedScores.length; i++) {
        let newScore = document.createElement('li');
        newScore.innerHTML = storedScores[i].name + " scored " + storedScores[i].score;
        highScoreList.appendChild(newScore);
    }
}

function saveScores(event) {
    event.preventDefault();

    const savedScores = localStorage.getItem('score');
    let scoresArray;

    if (savedScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(saveScores);
    };

    let userScore = {
        name: nameInput.value,
        score: finalScore.textContent
    }

    scoresArray.push(userScore);

    const stringifyArray = JSON.stringify(scoresArray);
    window.localStorage.setItem('scoresList', stringifyArray);

    showScores();
}

startBtn.addEventListener("click", start)
firstBtn.addEventListener('click', chooseOne);
secondBtn.addEventListener('click', chooseTwo);
thirdBtn.addEventListener('click', chooseThree);
fourthBtn.addEventListener('click', chooseFour);
viewHighScores.addEventListener('click', showScores);
submitBtn.addEventListener('click', saveScores)