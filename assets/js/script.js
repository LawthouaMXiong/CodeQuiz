const questions = [
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

const questionNumber = 1;
const score = 0;

const timer = getElementById('timer');
const time = getElementById('time');
const timeEnd = getElementById('timeEnd');

const startBtn = getElementById('btn0');
const firstBtn = getElementById('btn1');
const secondBtn = getElementById('btn2');
const thirdBtn = getElementById('btn3');
const fourthBtn = getElementById('btn4');
const nextBtn = getElementById('btnNext');

const header = getElementById('header');
const mid = getElementById('middleText');

function start() {
    if (questions.length != 0) {
        header.style.display= "none";
        startBtn.style.display= "none";
        firstBtn.style.display= "block";
        secondBtn.style.display= "block";
        thirdBtn.style.display= "block";
        fourthBtn.style.display= "block";
        nextBtn.style.display= "block";
        mid.innerHTML = questions.question;
    }
};

function check(){
    
}
