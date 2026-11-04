
/* QUIZZONE GEOGRAPHY QUESTION BANK */



/* GENERAL KNOWLEDGE QUESTIONS */

const questionBank = {

    easy: [
        {
            question: "How many days are in a leap year?",
            answers: ["364", "365", "366", "367"],
            correct: 2
        },
        {
            question: "What planet is known as the Red Planet?",
            answers: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "How many legs does a spider have?",
            answers: ["6", "8", "10", "12"],
            correct: 1
        },
        {
            question: "What is the largest land animal?",
            answers: ["Giraffe", "Hippopotamus", "African Elephant", "Rhinoceros"],
            correct: 2
        },
        {
            question: "What is H2O commonly known as?",
            answers: ["Oxygen", "Water", "Salt", "Hydrogen"],
            correct: 1
        },
        {
            question: "How many sides does a hexagon have?",
            answers: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "Which animal is famous for its black and white stripes?",
            answers: ["Tiger", "Zebra", "Panda", "Leopard"],
            correct: 1
        },
        {
            question: "Which instrument has black and white keys?",
            answers: ["Guitar", "Violin", "Piano", "Drums"],
            correct: 2
        },
        {
            question: "What is the closest star to Earth?",
            answers: ["Sirius", "The Sun", "Polaris", "Betelgeuse"],
            correct: 1
        },
        {
            question: "What is the main language spoken in Brazil?",
            answers: ["Spanish", "French", "Portuguese", "English"],
            correct: 2
        }
    ],

    medium: [
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Ag", "Au", "Fe", "Go"],
            correct: 1
        },
        {
            question: "Which organ produces insulin?",
            answers: ["Liver", "Kidney", "Pancreas", "Heart"],
            correct: 2
        },
        {
            question: "What is the smallest prime number?",
            answers: ["0", "1", "2", "3"],
            correct: 2
        },
        {
            question: "Who painted The Starry Night?",
            answers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
            correct: 1
        },
        {
            question: "Which gas makes up most of Earth's atmosphere?",
            answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "How many bones are typically in an adult human body?",
            answers: ["186", "206", "226", "246"],
            correct: 1
        },
        {
            question: "Which scientist developed the theory of general relativity?",
            answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            correct: 1
        },
        {
            question: "What is the largest internal organ in the human body?",
            answers: ["Heart", "Liver", "Lung", "Kidney"],
            correct: 1
        },
        {
            question: "Which element has the atomic number 1?",
            answers: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: 2
        },
        {
            question: "What is the square root of 144?",
            answers: ["10", "11", "12", "14"],
            correct: 2
        }
    ],

    hard: [
        {
            question: "Which element has the chemical symbol W?",
            answers: ["Tungsten", "Tin", "Titanium", "Tantalum"],
            correct: 0
        },
        {
            question: "Who wrote the novel One Hundred Years of Solitude?",
            answers: ["Jorge Luis Borges", "Gabriel Garcia Marquez", "Mario Vargas Llosa", "Pablo Neruda"],
            correct: 1
        },
        {
            question: "What is the SI unit of electrical capacitance?",
            answers: ["Ohm", "Henry", "Farad", "Tesla"],
            correct: 2
        },
        {
            question: "Which mathematician is associated with the incompleteness theorems?",
            answers: ["Alan Turing", "Kurt Godel", "John von Neumann", "David Hilbert"],
            correct: 1
        },
        {
            question: "What is the most abundant element in the universe?",
            answers: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: 2
        },
        {
            question: "Which moon is the largest in the Solar System?",
            answers: ["Titan", "Europa", "Ganymede", "Callisto"],
            correct: 2
        },
        {
            question: "What is the approximate speed of light in a vacuum?",
            answers: ["150,000 km/s", "300,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 1
        },
        {
            question: "Which scientist discovered the neutron in 1932?",
            answers: ["Ernest Rutherford", "James Chadwick", "Niels Bohr", "J.J. Thomson"],
            correct: 1
        },
        {
            question: "Which philosopher wrote Critique of Pure Reason?",
            answers: ["Plato", "Aristotle", "Immanuel Kant", "Friedrich Nietzsche"],
            correct: 2
        },
        {
            question: "Which planet has the shortest orbital period around the Sun?",
            answers: ["Venus", "Mercury", "Earth", "Mars"],
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