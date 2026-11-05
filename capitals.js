
/* QUIZZONE GEOGRAPHY QUESTION BANK */

const questionBank = {

  
easy: [
    {
        question: "What is the capital of Australia?",
        answers: ["Sydney", "Canberra", "Melbourne", "Perth"],
        correct: 1
    },
    {
        question: "What is the capital of France?",
        answers: ["Lyon", "Marseille", "Paris", "Nice"],
        correct: 2
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correct: 2
    },
    {
        question: "What is the capital of Italy?",
        answers: ["Milan", "Venice", "Naples", "Rome"],
        correct: 3
    },
    {
        question: "What is the capital of Germany?",
        answers: ["Munich", "Berlin", "Hamburg", "Frankfurt"],
        correct: 1
    },
    {
        question: "What is the capital of Canada?",
        answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: 2
    },
    {
        question: "What is the capital of the United Kingdom?",
        answers: ["Manchester", "London", "Liverpool", "Birmingham"],
        correct: 1
    },
    {
        question: "What is the capital of Spain?",
        answers: ["Barcelona", "Seville", "Valencia", "Madrid"],
        correct: 3
    },
    {
        question: "What is the capital of China?",
        answers: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou"],
        correct: 1
    },
    {
        question: "What is the capital of the United States?",
        answers: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
        correct: 2
    }
],

medium: [
    {
        question: "What is the capital of Brazil?",
        answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correct: 2
    },
    {
        question: "What is the capital of New Zealand?",
        answers: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
        correct: 1
    },
    {
        question: "What is the capital of Egypt?",
        answers: ["Alexandria", "Luxor", "Giza", "Cairo"],
        correct: 3
    },
    {
        question: "What is the capital of Thailand?",
        answers: ["Phuket", "Pattaya", "Bangkok", "Chiang Mai"],
        correct: 2
    },
    {
        question: "What is the capital of Argentina?",
        answers: ["Córdoba", "Buenos Aires", "Rosario", "Mendoza"],
        correct: 1
    },
    {
        question: "What is the capital of South Korea?",
        answers: ["Busan", "Incheon", "Daegu", "Seoul"],
        correct: 3
    },
    {
        question: "What is the capital of Turkey?",
        answers: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correct: 1
    },
    {
        question: "What is the capital of Norway?",
        answers: ["Bergen", "Trondheim", "Oslo", "Stavanger"],
        correct: 2
    },
    {
        question: "What is the capital of Vietnam?",
        answers: ["Ho Chi Minh City", "Da Nang", "Hue", "Hanoi"],
        correct: 3
    },
    {
        question: "What is the capital of Portugal?",
        answers: ["Porto", "Lisbon", "Coimbra", "Braga"],
        correct: 1
    }
],

hard: [
    {
        question: "What is the capital of Mongolia?",
        answers: ["Astana", "Bishkek", "Ulaanbaatar", "Tashkent"],
        correct: 2
    },
    {
        question: "What is the capital of Bhutan?",
        answers: ["Kathmandu", "Thimphu", "Dhaka", "Colombo"],
        correct: 1
    },
    {
        question: "What is the capital of Slovenia?",
        answers: ["Bratislava", "Zagreb", "Sarajevo", "Ljubljana"],
        correct: 3
    },
    {
        question: "What is the capital of Estonia?",
        answers: ["Riga", "Vilnius", "Tallinn", "Helsinki"],
        correct: 2
    },
    {
        question: "What is the capital of Laos?",
        answers: ["Vientiane", "Phnom Penh", "Hanoi", "Yangon"],
        correct: 0
    },
    {
        question: "What is the capital of Madagascar?",
        answers: ["Maputo", "Antananarivo", "Port Louis", "Moroni"],
        correct: 1
    },
    {
        question: "What is the capital of Kyrgyzstan?",
        answers: ["Dushanbe", "Tashkent", "Bishkek", "Ashgabat"],
        correct: 2
    },
    {
        question: "What is the capital of Montenegro?",
        answers: ["Belgrade", "Podgorica", "Skopje", "Tirana"],
        correct: 1
    },
    {
        question: "What is the capital of Suriname?",
        answers: ["Georgetown", "Cayenne", "Paramaribo", "Belmopan"],
        correct: 2
    },
    {
        question: "What is the capital of Namibia?",
        answers: ["Gaborone", "Lusaka", "Harare", "Windhoek"],
        correct: 3
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


