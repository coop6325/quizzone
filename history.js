
/* QUIZZONE GEOGRAPHY QUESTION BANK */


/* HISTORY QUESTIONS */

const questionBank = {

    easy: [
        {
            question: "In which country were the Great Pyramids of Giza built?",
            answers: ["Greece", "Egypt", "Italy", "China"],
            correct: 1
        },
        {
            question: "Who was the first President of the United States?",
            answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
            correct: 1
        },
        {
            question: "In which year did World War II end?",
            answers: ["1918", "1939", "1945", "1950"],
            correct: 2
        },
        {
            question: "Which ancient civilisation built the Colosseum?",
            answers: ["Romans", "Vikings", "Egyptians", "Mayans"],
            correct: 0
        },
        {
            question: "Who was the leader of Nazi Germany during World War II?",
            answers: ["Stalin", "Hitler", "Churchill", "Mussolini"],
            correct: 1
        },
        {
            question: "Which ship famously sank in 1912?",
            answers: ["Britannic", "Titanic", "Lusitania", "Mayflower"],
            correct: 1
        },
        {
            question: "Which country was Napoleon Bonaparte emperor of?",
            answers: ["Spain", "France", "Germany", "Italy"],
            correct: 1
        },
        {
            question: "In which year did the Berlin Wall fall?",
            answers: ["1961", "1975", "1989", "1999"],
            correct: 2
        },
        {
            question: "Who was the first person to walk on the Moon?",
            answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
            correct: 2
        },
        {
            question: "Which empire was ruled by Julius Caesar as dictator?",
            answers: ["Roman Republic", "British Empire", "Ottoman Empire", "Mongol Empire"],
            correct: 0
        }
    ],

    medium: [
        {
            question: "In which year did World War I begin?",
            answers: ["1912", "1914", "1916", "1918"],
            correct: 1
        },
        {
            question: "Who was the British Prime Minister for most of World War II?",
            answers: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
            correct: 1
        },
        {
            question: "Which event began the French Revolution in 1789?",
            answers: ["Battle of Waterloo", "Storming of the Bastille", "Execution of Napoleon", "Congress of Vienna"],
            correct: 1
        },
        {
            question: "Which civilisation built Machu Picchu?",
            answers: ["Aztec", "Maya", "Inca", "Roman"],
            correct: 2
        },
        {
            question: "Who was the Soviet leader during the Cuban Missile Crisis?",
            answers: ["Stalin", "Lenin", "Khrushchev", "Gorbachev"],
            correct: 2
        },
        {
            question: "In which year was the American Declaration of Independence adopted?",
            answers: ["1776", "1783", "1789", "1801"],
            correct: 0
        },
        {
            question: "Which treaty formally ended the war between Germany and the Allies after World War I?",
            answers: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Rome", "Treaty of Utrecht"],
            correct: 1
        },
        {
            question: "Who was the first emperor of a unified China?",
            answers: ["Sun Yat-sen", "Qin Shi Huang", "Kublai Khan", "Mao Zedong"],
            correct: 1
        },
        {
            question: "Which country launched the first artificial satellite, Sputnik 1?",
            answers: ["USA", "China", "Soviet Union", "Japan"],
            correct: 2
        },
        {
            question: "In which year did the Russian Revolution overthrow Tsar Nicholas II?",
            answers: ["1905", "1914", "1917", "1922"],
            correct: 2
        }
    ],

    hard: [
        {
            question: "In which year did Constantinople fall to the Ottoman Empire?",
            answers: ["1204", "1347", "1453", "1492"],
            correct: 2
        },
        {
            question: "Who was the final ruler of the Ptolemaic Kingdom of Egypt?",
            answers: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Arsinoe II"],
            correct: 1
        },
        {
            question: "Which battle in 1066 established William the Conqueror's rule in England?",
            answers: ["Battle of Agincourt", "Battle of Hastings", "Battle of Bosworth", "Battle of Bannockburn"],
            correct: 1
        },
        {
            question: "Which agreement divided newly encountered overseas lands between Spain and Portugal in 1494?",
            answers: ["Treaty of Tordesillas", "Treaty of Utrecht", "Treaty of Westphalia", "Treaty of Paris"],
            correct: 0
        },
        {
            question: "Who led the Haitian Revolution to major victories before being captured by France?",
            answers: ["Simon Bolivar", "Toussaint Louverture", "Jean-Jacques Rousseau", "Maximilien Robespierre"],
            correct: 1
        },
        {
            question: "Which Roman emperor issued the Edict of Milan with Licinius in 313 CE?",
            answers: ["Augustus", "Nero", "Constantine I", "Trajan"],
            correct: 2
        },
        {
            question: "Which dynasty ruled China when Zheng He conducted his famous voyages?",
            answers: ["Tang", "Song", "Ming", "Qing"],
            correct: 2
        },
        {
            question: "Which battle in 1815 marked Napoleon's final military defeat?",
            answers: ["Battle of Leipzig", "Battle of Austerlitz", "Battle of Trafalgar", "Battle of Waterloo"],
            correct: 3
        },
        {
            question: "Who became the first Chancellor of the unified German Empire in 1871?",
            answers: ["Otto von Bismarck", "Wilhelm II", "Paul von Hindenburg", "Frederick the Great"],
            correct: 0
        },
        {
            question: "Which conference in 1884-1885 established rules for European colonial claims in Africa?",
            answers: ["Congress of Vienna", "Berlin Conference", "Yalta Conference", "Potsdam Conference"],
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