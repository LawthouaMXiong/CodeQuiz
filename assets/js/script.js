let questions = [
    {
        question: "What is a boolean?",
        options:
            [
                "String",
                "Variable",
                "True or False",
                "Integer"
            ],
        correct: "True or False"
    },
    {
        question: "What is a variable?",
        options:
            [
                "Type of car",
                "y=mx+b",
                "Currency",
                "Something that we can store data"
            ],
        correct: "Something that we can store data"
    },
    {
        question: "What is a the difference between '==' and '==='?",
        options:
            [
                "Nothing",
                "Double is comparing values, and triple is comparing values and types",
                "Comparison operators",
                "Equal to"
            ],
        correct: "Double is comparing values, and triple is comparing values and types"
    },
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
const name = document.getElementById('inputName');
const highScores = document.getElementById('highScores');

let score = 0;
let questionCounter = 0;

function start() {
    
};

function check(){
    
};