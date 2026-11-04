
/* QUIZZONE GEOGRAPHY QUESTION BANK */


/* MOVIES AND TV QUESTIONS */

const questionBank = {

    easy: [
        {
            question: "Which movie features a character named Simba?",
            answers: ["Frozen", "The Lion King", "Shrek", "Toy Story"],
            correct: 1
        },
        {
            question: "What is the name of the cowboy in Toy Story?",
            answers: ["Buzz", "Woody", "Andy", "Rex"],
            correct: 1
        },
        {
            question: "Which superhero uses a shield with a star?",
            answers: ["Iron Man", "Thor", "Captain America", "Batman"],
            correct: 2
        },
        {
            question: "Which movie features the song Let It Go?",
            answers: ["Moana", "Frozen", "Tangled", "Encanto"],
            correct: 1
        },
        {
            question: "What colour is Shrek?",
            answers: ["Blue", "Red", "Green", "Yellow"],
            correct: 2
        },
        {
            question: "Which TV show features Homer Simpson?",
            answers: ["Family Guy", "The Simpsons", "South Park", "Futurama"],
            correct: 1
        },
        {
            question: "Who is Harry Potter's best friend?",
            answers: ["Draco Malfoy", "Ron Weasley", "Cedric Diggory", "Neville Longbottom"],
            correct: 1
        },
        {
            question: "Which movie features dinosaurs in a theme park?",
            answers: ["Jurassic Park", "Avatar", "Jumanji", "King Kong"],
            correct: 0
        },
        {
            question: "Which superhero is also known as Peter Parker?",
            answers: ["Batman", "Superman", "Spider-Man", "The Flash"],
            correct: 2
        },
        {
            question: "Which TV show is set in the fictional town of Hawkins?",
            answers: ["Friends", "Stranger Things", "The Office", "Wednesday"],
            correct: 1
        }
    ],

    medium: [
        {
            question: "Who directed the 1997 film Titanic?",
            answers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
            correct: 1
        },
        {
            question: "Which actor played Iron Man in the Marvel films?",
            answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            correct: 1
        },
        {
            question: "What is the name of the fictional continent in Game of Thrones?",
            answers: ["Narnia", "Westeros", "Middle-earth", "Pandora"],
            correct: 1
        },
        {
            question: "Which film won Best Picture at the 2020 Oscars?",
            answers: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
            correct: 2
        },
        {
            question: "Who played Jack Dawson in Titanic?",
            answers: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Tom Cruise"],
            correct: 1
        },
        {
            question: "Which TV series features Walter White?",
            answers: ["Better Call Saul", "Breaking Bad", "Ozark", "The Sopranos"],
            correct: 1
        },
        {
            question: "What is the name of the kingdom in Frozen?",
            answers: ["Arendelle", "Corona", "Agrabah", "Genovia"],
            correct: 0
        },
        {
            question: "Which actor played the Joker in The Dark Knight?",
            answers: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"],
            correct: 2
        },
        {
            question: "Which TV show features the character Michael Scott?",
            answers: ["Brooklyn Nine-Nine", "The Office", "Parks and Recreation", "Friends"],
            correct: 1
        },
        {
            question: "Which director made Inception and Interstellar?",
            answers: ["Quentin Tarantino", "Christopher Nolan", "James Cameron", "Denis Villeneuve"],
            correct: 1
        }
    ],

    hard: [
        {
            question: "Which film won the first Academy Award for Best Picture?",
            answers: ["Sunrise", "Wings", "Metropolis", "The Jazz Singer"],
            correct: 1
        },
        {
            question: "Who directed the 1972 film The Godfather?",
            answers: ["Martin Scorsese", "Francis Ford Coppola", "Stanley Kubrick", "Brian De Palma"],
            correct: 1
        },
        {
            question: "Which actor played Anton Chigurh in No Country for Old Men?",
            answers: ["Javier Bardem", "Josh Brolin", "Tommy Lee Jones", "Benicio del Toro"],
            correct: 0
        },
        {
            question: "Which film features the mysterious word Rosebud?",
            answers: ["Casablanca", "Citizen Kane", "Vertigo", "Chinatown"],
            correct: 1
        },
        {
            question: "Who composed the main theme for the original Star Wars film?",
            answers: ["Hans Zimmer", "John Williams", "Howard Shore", "Danny Elfman"],
            correct: 1
        },
        {
            question: "Which TV series features the character Omar Little?",
            answers: ["The Wire", "The Sopranos", "Breaking Bad", "Boardwalk Empire"],
            correct: 0
        },
        {
            question: "Which director made the film Seven Samurai?",
            answers: ["Hayao Miyazaki", "Akira Kurosawa", "Yasujiro Ozu", "Hirokazu Kore-eda"],
            correct: 1
        },
        {
            question: "Which actor played Travis Bickle in Taxi Driver?",
            answers: ["Al Pacino", "Robert De Niro", "Dustin Hoffman", "Jack Nicholson"],
            correct: 1
        },
        {
            question: "Which film won the Palme d'Or at Cannes in 1994?",
            answers: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Leon: The Professional"],
            correct: 0
        },
        {
            question: "What is the name of the spaceship in Alien (1979)?",
            answers: ["Discovery One", "Nostromo", "Serenity", "Sulaco"],
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