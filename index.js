const questions = [
    {
        question: "What is the capital of France?",
        answer: [
            {text: "Berlin", correct: 'false'},
            {text: "Madrid", correct: 'false'},
            {text: "Paris", correct: 'true'},
            {text: "Rome", correct: 'false'},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            {text: "Earth", correct: 'false'},
            {text: "Mars", correct: 'true'},
            {text: "Jupiter", correct: 'false'},
            {text: "Saturn", correct: 'false'},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: [
            {text: "Atlantic Ocean", correct: 'false'},
            {text: "Indian Ocean", correct: 'false'},
            {text: "Pacific Ocean", correct: 'true'},
            {text: "Arctic Ocean", correct: 'false'},
        ]
    }
];

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', showNextQuestion);


const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answers');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    document.querySelector('.start-container').style.display = 'none'
    document.querySelector('.quiz-container').style.display = 'block'; 
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();    
}


function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
    answerElement.innerHTML = '';

            currentQuestion.answer.forEach(answer => {
                const button = document.createElement('button');
                button.innerHTML = answer.text;
                button.classList.add("answer-btn");
                //button.addEventListener('click', () => selectAnswer(answer));
                answerElement.appendChild(button);
            });
}

function showNextQuestion(){
    currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            }
}





















