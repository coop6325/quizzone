
/* QUIZZONE GEOGRAPHY QUESTION BANK */

/* SPORTS QUESTIONS */

const questionBank = {

    easy: [
        {
            question: "How many players are on the court for one basketball team?",
            answers: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            question: "Which sport uses a putter?",
            answers: ["Tennis", "Golf", "Cricket", "Football"],
            correct: 1
        },
        {
            question: "How many points is a free throw worth in basketball?",
            answers: ["1", "2", "3", "4"],
            correct: 0
        },
        {
            question: "Which sport is played at Wimbledon?",
            answers: ["Golf", "Cricket", "Tennis", "Rugby"],
            correct: 2
        },
        {
            question: "How many players start on the field for one soccer team?",
            answers: ["9", "10", "11", "12"],
            correct: 2
        },
        {
            question: "What sport is the NBA associated with?",
            answers: ["Baseball", "Basketball", "Football", "Hockey"],
            correct: 1
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            answers: ["Japan", "Brazil", "China", "France"],
            correct: 1
        },
        {
            question: "What is a score of one under par called in golf?",
            answers: ["Bogey", "Birdie", "Eagle", "Par"],
            correct: 1
        },
        {
            question: "Which sport uses a shuttlecock?",
            answers: ["Squash", "Tennis", "Badminton", "Volleyball"],
            correct: 2
        },
        {
            question: "How many rings are on the Olympic flag?",
            answers: ["4", "5", "6", "7"],
            correct: 1
        }
    ],

    medium: [
        {
            question: "Which NBA team did Michael Jordan win six championships with?",
            answers: ["Lakers", "Bulls", "Celtics", "Heat"],
            correct: 1
        },
        {
            question: "How many holes are played in a standard full round of golf?",
            answers: ["9", "12", "18", "20"],
            correct: 2
        },
        {
            question: "Which country won the 2022 FIFA World Cup?",
            answers: ["France", "Brazil", "Argentina", "Germany"],
            correct: 2
        },
        {
            question: "What is the maximum standard break in snooker?",
            answers: ["147", "155", "120", "180"],
            correct: 0
        },
        {
            question: "Which tennis player has won 24 men's Grand Slam singles titles?",
            answers: ["Federer", "Nadal", "Djokovic", "Murray"],
            correct: 2
        },
        {
            question: "Which country won the 2019 Cricket World Cup?",
            answers: ["Australia", "India", "England", "New Zealand"],
            correct: 2
        },
        {
            question: "Which golf tournament awards a green jacket?",
            answers: ["The Open", "Masters", "US Open", "PGA Championship"],
            correct: 1
        },
        {
            question: "How long is an Olympic swimming pool?",
            answers: ["25 metres", "50 metres", "75 metres", "100 metres"],
            correct: 1
        },
        {
            question: "Which country hosted the 2010 FIFA World Cup?",
            answers: ["Germany", "Brazil", "South Africa", "Russia"],
            correct: 2
        },
        {
            question: "Which NBA player is nicknamed King James?",
            answers: ["Curry", "Durant", "LeBron James", "Kobe Bryant"],
            correct: 2
        }
    ],

    hard: [
        {
            question: "Who won the first FIFA World Cup in 1930?",
            answers: ["Brazil", "Argentina", "Uruguay", "Italy"],
            correct: 2
        },
        {
            question: "Who won the 1997 Masters by 12 strokes?",
            answers: ["Nick Faldo", "Tiger Woods", "Jack Nicklaus", "Ernie Els"],
            correct: 1
        },
        {
            question: "Which NBA team drafted Kobe Bryant in 1996?",
            answers: ["Lakers", "Hornets", "Bulls", "76ers"],
            correct: 1
        },
        {
            question: "Which country won the first Rugby World Cup in 1987?",
            answers: ["Australia", "England", "New Zealand", "South Africa"],
            correct: 2
        },
        {
            question: "Who won the 2008 Formula One World Championship?",
            answers: ["Alonso", "Hamilton", "Vettel", "Raikkonen"],
            correct: 1
        },
        {
            question: "Which golfer won the 2016 Open Championship?",
            answers: ["Stenson", "Mickelson", "McIlroy", "Day"],
            correct: 0
        },
        {
            question: "Which city hosted the 1976 Summer Olympics?",
            answers: ["Moscow", "Munich", "Montreal", "Tokyo"],
            correct: 2
        },
        {
            question: "Who scored 100 points in a single NBA game?",
            answers: ["Jordan", "Bryant", "Chamberlain", "Abdul-Jabbar"],
            correct: 2
        },
        {
            question: "Which country won UEFA Euro 2004?",
            answers: ["Portugal", "Greece", "Spain", "Italy"],
            correct: 1
        },
        {
            question: "Who won the 2005 Australian Open men's singles title?",
            answers: ["Federer", "Safin", "Hewitt", "Agassi"],
            correct: 1
        }
    ]

};



/* QUIZ VARIABLES */

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

/* HTML ELEMENTS */

const difficultyScreen =
    document.getElementById("difficulty-screen");

const quizBox =
    document.getElementById("quiz-box");

const results =
    document.getElementById("results");

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answer-buttons");

const nextButton =
    document.getElementById("next-button");

const feedback =
    document.getElementById("feedback");

const questionCounter =
    document.getElementById("question-counter");

const finalScore =
    document.getElementById("final-score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");

const progressBar =
    document.getElementById("progress-bar");

/* START QUIZ */

function startQuiz(difficulty) {

    
questions = questionBank[difficulty].slice();

questions.sort(function() {
    return Math.random() - 0.5;
});


    currentQuestionIndex = 0;
    score = 0;

    difficultyScreen.style.display = "none";
    results.style.display = "none";
    quizBox.style.display = "block";

    showQuestion();
}

/* DISPLAY QUESTION */

function showQuestion() {

    answered = false;

    answerButtons.innerHTML = "";
    feedback.textContent = "";
    nextButton.style.display = "none";

    const currentQuestion =
        questions[currentQuestionIndex];

    questionElement.textContent =
        currentQuestion.question;

    questionCounter.textContent =
        "Question " + (currentQuestionIndex + 1) +
        " of " + questions.length;

    const progress =
        (currentQuestionIndex / questions.length) * 100;

    progressBar.style.width = progress + "%";

    currentQuestion.answers.forEach(function(answer, index) {

        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-button";

        button.addEventListener("click", function() {
            selectAnswer(index, button);
        });

        answerButtons.appendChild(button);

    });

}

/* CHECK ANSWER */

function selectAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const currentQuestion =
        questions[currentQuestionIndex];

    const buttons =
        answerButtons.querySelectorAll("button");

    buttons.forEach(function(button, index) {

        button.disabled = true;

        if (index === currentQuestion.correct) {
            button.classList.add("correct");
        }

    });

    if (selectedIndex === currentQuestion.correct) {

        score++;
        feedback.textContent = "Correct!";

    } else {

        selectedButton.classList.add("incorrect");

        feedback.textContent =
            "Incorrect! The correct answer was " +
            currentQuestion.answers[currentQuestion.correct] + ".";

    }

    nextButton.style.display = "inline-block";
}

/* NEXT QUESTION */

function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showResults();

    }

}

/* SHOW RESULTS */

function showResults() {

    quizBox.style.display = "none";
    results.style.display = "block";

    progressBar.style.width = "100%";

    const percentage =
        Math.round((score / questions.length) * 100);

    finalScore.textContent =
        "You scored " + score + " out of " +
        questions.length + " (" + percentage + "%)!";

    if (percentage === 100) {
        resultMessage.textContent = "Perfect score! Amazing work!";
    } else if (percentage >= 70) {
        resultMessage.textContent = "Great job! You know your geography!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Good effort! Keep practising!";
    } else {
        resultMessage.textContent = "Keep learning and try again!";
    }

}

/* RESTART QUIZ */

function restartQuiz() {

    results.style.display = "none";
    difficultyScreen.style.display = "block";

}

/* CONNECT ALL BUTTONS */

const easyButton =
    document.getElementById("easy-button");

const mediumButton =
    document.getElementById("medium-button");

const hardButton =
    document.getElementById("hard-button");

if (easyButton && mediumButton && hardButton) {

    easyButton.addEventListener("click", function() {
        startQuiz("easy");
    });

    mediumButton.addEventListener("click", function() {
        startQuiz("medium");
    });

    hardButton.addEventListener("click", function() {
        startQuiz("hard");
    });

    nextButton.addEventListener("click", nextQuestion);

    restartButton.addEventListener("click", restartQuiz);

}
// JavaScript Document