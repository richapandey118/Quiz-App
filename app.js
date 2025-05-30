// Mock questions data
const questions = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correctAnswer: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correctAnswer: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correctAnswer: 1
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Ag", "Fe", "Au", "Cu"],
                correctAnswer: 2
            }
        ],
        medium: [
            {
                question: "Who painted the Mona Lisa?",
                options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
                correctAnswer: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correctAnswer: 3
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Korea", "Japan", "Thailand"],
                correctAnswer: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correctAnswer: 2
            },
            {
                question: "Who discovered penicillin?",
                options: ["Marie Curie", "Alexander Fleming", "Albert Einstein", "Isaac Newton"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                question: "What is the square root of 144?",
                options: ["10", "12", "14", "16"],
                correctAnswer: 1
            },
            {
                question: "Which element has the chemical symbol 'Fe'?",
                options: ["Gold", "Silver", "Iron", "Copper"],
                correctAnswer: 2
            },
            {
                question: "What is the capital of Bhutan?",
                options: ["Kathmandu", "Thimphu", "Dhaka", "Colombo"],
                correctAnswer: 1
            },
            {
                question: "Who wrote 'The Divine Comedy'?",
                options: ["Dante Alighieri", "Geoffrey Chaucer", "William Shakespeare", "John Milton"],
                correctAnswer: 0
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Sahara", "Antarctic", "Gobi", "Arabian"],
                correctAnswer: 1
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the closest planet to the Sun?",
                options: ["Venus", "Mercury", "Mars", "Earth"],
                correctAnswer: 1
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "H2"],
                correctAnswer: 0
            },
            {
                question: "What is the main component of the Sun?",
                options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                correctAnswer: 1
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correctAnswer: 2
            },
            {
                question: "What is the process by which plants make their food?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                question: "What is the atomic number of carbon?",
                options: ["6", "12", "14", "16"],
                correctAnswer: 0
            },
            {
                question: "What is the speed of light in meters per second?",
                options: ["299,792,458", "299,792,459", "299,792,460", "299,792,461"],
                correctAnswer: 0
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                correctAnswer: 2
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correctAnswer: 3
            },
            {
                question: "What is the study of fossils called?",
                options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle about?",
                options: ["Position and momentum", "Energy and time", "Both A and B", "None of the above"],
                correctAnswer: 2
            },
            {
                question: "What is the name of the force that holds atomic nuclei together?",
                options: ["Electromagnetic force", "Strong nuclear force", "Weak nuclear force", "Gravitational force"],
                correctAnswer: 1
            },
            {
                question: "What is the process of splitting an atomic nucleus called?",
                options: ["Fusion", "Fission", "Decay", "Synthesis"],
                correctAnswer: 1
            },
            {
                question: "What is the name of the particle that gives mass to other particles?",
                options: ["Photon", "Higgs boson", "Neutrino", "Gluon"],
                correctAnswer: 1
            },
            {
                question: "What is the name of the theory that describes the behavior of matter at the atomic and subatomic level?",
                options: ["Relativity", "Quantum mechanics", "String theory", "Chaos theory"],
                correctAnswer: 1
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                correctAnswer: 1
            },
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
                correctAnswer: 1
            },
            {
                question: "What was the name of the ship that sank in 1912?",
                options: ["Lusitania", "Titanic", "Britannic", "Olympic"],
                correctAnswer: 1
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Dorothy Hodgkin"],
                correctAnswer: 0
            }
        ],
        medium: [
            {
                question: "What was the name of the first human to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Alan Shepard"],
                correctAnswer: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correctAnswer: 2
            },
            {
                question: "Who was the first Emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                correctAnswer: 1
            },
            {
                question: "What was the name of the first successful airplane?",
                options: ["Spirit of St. Louis", "Wright Flyer", "Bell X-1", "Concorde"],
                correctAnswer: 1
            },
            {
                question: "Who was the first woman to win a Nobel Prize in Physics?",
                options: ["Marie Curie", "Maria Goeppert-Mayer", "Donna Strickland", "Andrea Ghez"],
                correctAnswer: 0
            }
        ],
        hard: [
            {
                question: "What was the name of the first computer programmer?",
                options: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "Grace Hopper"],
                correctAnswer: 1
            },
            {
                question: "In which year did the first successful heart transplant occur?",
                options: ["1965", "1967", "1969", "1971"],
                correctAnswer: 1
            },
            {
                question: "Who was the first person to circumnavigate the globe?",
                options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Marco Polo"],
                correctAnswer: 1
            },
            {
                question: "What was the name of the first successful human heart transplant surgeon?",
                options: ["Christiaan Barnard", "Michael DeBakey", "Norman Shumway", "Adrian Kantrowitz"],
                correctAnswer: 0
            },
            {
                question: "In which year did the first successful powered flight occur?",
                options: ["1901", "1903", "1905", "1907"],
                correctAnswer: 1
            }
        ]
    },
    technology: {
        easy: [
            {
                question: "Who is the founder of Microsoft?",
                options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
                correctAnswer: 1
            },
            {
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Computer Processing Unit", "Central Process Unit", "Computer Process Unit"],
                correctAnswer: 0
            },
            {
                question: "What is the main programming language used for web development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctAnswer: 2
            },
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Hyper Text Modern Language"],
                correctAnswer: 0
            },
            {
                question: "What is the name of Google's mobile operating system?",
                options: ["iOS", "Android", "Windows", "Linux"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                question: "What is the name of the first computer virus?",
                options: ["ILOVEYOU", "Brain", "Melissa", "Creeper"],
                correctAnswer: 3
            },
            {
                question: "What does RAM stand for?",
                options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
                correctAnswer: 0
            },
            {
                question: "What is the name of the first successful personal computer?",
                options: ["IBM PC", "Apple I", "Altair 8800", "Commodore 64"],
                correctAnswer: 2
            },
            {
                question: "What is the name of the first web browser?",
                options: ["Internet Explorer", "Netscape", "WorldWideWeb", "Mosaic"],
                correctAnswer: 2
            },
            {
                question: "What is the name of the first successful smartphone?",
                options: ["iPhone", "BlackBerry", "Palm Pilot", "IBM Simon"],
                correctAnswer: 3
            }
        ],
        hard: [
            {
                question: "What is the name of the first computer programming language?",
                options: ["FORTRAN", "COBOL", "BASIC", "Assembly"],
                correctAnswer: 0
            },
            {
                question: "What is the name of the first successful computer network?",
                options: ["ARPANET", "Internet", "Ethernet", "Token Ring"],
                correctAnswer: 0
            },
            {
                question: "What is the name of the first successful computer game?",
                options: ["Pong", "Spacewar!", "Tennis for Two", "OXO"],
                correctAnswer: 2
            },
            {
                question: "What is the name of the first successful computer mouse?",
                options: ["Xerox Alto", "Apple Lisa", "Microsoft Mouse", "Logitech Mouse"],
                correctAnswer: 0
            },
            {
                question: "What is the name of the first successful computer operating system?",
                options: ["UNIX", "Windows", "DOS", "Mac OS"],
                correctAnswer: 0
            }
        ]
    },
    sports: {
        easy: [
            {
                question: "In which sport would you perform a slam dunk?",
                options: ["Football", "Basketball", "Tennis", "Golf"],
                correctAnswer: 1
            },
            {
                question: "How many players are there in a standard soccer team?",
                options: ["9", "10", "11", "12"],
                correctAnswer: 2
            },
            {
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["Brazil", "Germany", "France", "Argentina"],
                correctAnswer: 2
            },
            {
                question: "In which sport would you use a shuttlecock?",
                options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
                correctAnswer: 1
            },
            {
                question: "How many Olympic rings are there?",
                options: ["4", "5", "6", "7"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                question: "Who holds the record for most Grand Slam titles in men's tennis?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                correctAnswer: 2
            },
            {
                question: "In which year did Usain Bolt set the 100m world record?",
                options: ["2007", "2008", "2009", "2010"],
                correctAnswer: 1
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Italy", "Argentina", "Brazil"],
                correctAnswer: 3
            },
            {
                question: "Who is the all-time leading scorer in NBA history?",
                options: ["Michael Jordan", "Kareem Abdul-Jabbar", "LeBron James", "Kobe Bryant"],
                correctAnswer: 1
            },
            {
                question: "Which country won the most medals in the 2020 Tokyo Olympics?",
                options: ["China", "United States", "Japan", "Great Britain"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                question: "What is the name of the only boxer to win the heavyweight title three times?",
                options: ["Muhammad Ali", "Mike Tyson", "Evander Holyfield", "Lennox Lewis"],
                correctAnswer: 0
            },
            {
                question: "Who is the only player to score in three different World Cup finals?",
                options: ["Pelé", "Maradona", "Ronaldo", "Messi"],
                correctAnswer: 0
            },
            {
                question: "What is the name of the only player to win the Ballon d'Or five times?",
                options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff", "Michel Platini"],
                correctAnswer: 1
            },
            {
                question: "Which country has won the most Olympic gold medals in history?",
                options: ["China", "Russia", "United States", "Great Britain"],
                correctAnswer: 2
            },
            {
                question: "Who is the only player to score in three different Champions League finals?",
                options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Karim Benzema"],
                correctAnswer: 0
            }
        ]
    }
};

// Mock leaderboard data
const leaderboard = [
    { name: "John Doe", score: 95, completedQuizzes: 10 },
    { name: "Jane Smith", score: 92, completedQuizzes: 8 },
    { name: "Mike Johnson", score: 88, completedQuizzes: 12 },
    { name: "Sarah Williams", score: 85, completedQuizzes: 7 },
    { name: "David Brown", score: 82, completedQuizzes: 9 }
];

// State management
let currentState = {
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    timeRemaining: 30,
    timer: null,
    selectedCategory: "",
    selectedDifficulty: "",
    questions: [],
    userName: ""
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    // leaderboard: document.getElementById('leaderboard-screen') // Removed leaderboard screen
};

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggleBtn.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Welcome screen
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const startQuizBtn = document.getElementById('start-quiz');
// const viewLeaderboardBtn = document.getElementById('view-leaderboard'); // Removed leaderboard button

function updateStartButton() {
    startQuizBtn.disabled = !(categorySelect.value && difficultySelect.value);
}

categorySelect.addEventListener('change', updateStartButton);
difficultySelect.addEventListener('change', updateStartButton);

startQuizBtn.addEventListener('click', () => {
    currentState.selectedCategory = categorySelect.value;
    currentState.selectedDifficulty = difficultySelect.value;
    currentState.questions = questions[currentState.selectedCategory][currentState.selectedDifficulty];
    
    // Shuffle questions
    currentState.questions = shuffleArray(currentState.questions);
    
    showScreen('quiz');
    startQuiz();
});

// Removed leaderboard button event listener
// viewLeaderboardBtn.addEventListener('click', () => {
//     showScreen('leaderboard');
//     updateLeaderboard();
// });

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Quiz screen
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.querySelector('.progress-bar');
const timerDisplay = document.getElementById('timer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function startQuiz() {
    currentState.currentQuestionIndex = 0;
    currentState.score = 0;
    currentState.answers = [];
    updateQuestion();
    startTimer();
}

function updateQuestion() {
    const question = currentState.questions[currentState.currentQuestionIndex];
    questionNumber.textContent = `Question ${currentState.currentQuestionIndex + 1} of ${currentState.questions.length}`;
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);

        // If this question was previously answered, highlight the selected option
        if (currentState.answers[currentState.currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
    });

    updateProgress();
    updateNavigationButtons();

    // Enable the next button if an answer was previously selected for this question
    nextBtn.disabled = currentState.answers[currentState.currentQuestionIndex] === undefined;
}

function selectAnswer(index) {
    const options = optionsContainer.children;
    for (let option of options) {
        option.classList.remove('selected');
        // Remove previous feedback classes
        option.classList.remove('correct');
        option.classList.remove('incorrect');
    }
    options[index].classList.add('selected');
    nextBtn.disabled = false;
    // Store the selected answer temporarily, final answer is saved in handleNextQuestion
    currentState.answers[currentState.currentQuestionIndex] = index;
}

function updateProgress() {
    const progress = ((currentState.currentQuestionIndex + 1) / currentState.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function startTimer() {
    clearInterval(currentState.timer);
    currentState.timeRemaining = 30;
    updateTimerDisplay();
    
    currentState.timer = setInterval(() => {
        currentState.timeRemaining--;
        updateTimerDisplay();
        
        if (currentState.timeRemaining <= 0) {
            clearInterval(currentState.timer);
            handleNextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `${currentState.timeRemaining}s`;
    if (currentState.timeRemaining <= 10) {
        timerDisplay.style.color = 'var(--error-color)';
    } else {
        timerDisplay.style.color = 'var(--text-color)';
    }
}

function handleNextQuestion() {
    clearInterval(currentState.timer); // Stop timer when moving to next question
    const selectedOption = optionsContainer.querySelector('.selected');
    let selectedIndex = undefined;

    if (selectedOption) {
        selectedIndex = Array.from(optionsContainer.children).indexOf(selectedOption);
        // Store the final selected answer for the current question
        currentState.answers[currentState.currentQuestionIndex] = selectedIndex;

        // Calculate score for the current question when moving next/finishing
        const question = currentState.questions[currentState.currentQuestionIndex];
        if (selectedIndex === question.correctAnswer) {
            // Check if this is the first time this question is answered correctly
            // This prevents score increasing if user revisits and selects the correct answer again
            // We need a way to track if a question was *initially* answered correctly.
            // A simpler approach for now is to calculate score only at the very end in showResults
            // Let's revert score calculation to showResults for simplicity and to match the requirement
            // of showing feedback only at the end.
        }
    } else {
         // If no option is selected, store undefined for this question
        currentState.answers[currentState.currentQuestionIndex] = undefined;
    }

    // Move to the next question or show results immediately
    if (currentState.currentQuestionIndex < currentState.questions.length - 1) {
        currentState.currentQuestionIndex++;
        updateQuestion();
        startTimer();
    } else {
        showResults(); // Show results and calculate final score here
    }
}

function handlePreviousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        // Before moving back, ensure the current answer selection is saved
         const selectedOption = optionsContainer.querySelector('.selected');
        if (selectedOption) {
             const selectedIndex = Array.from(optionsContainer.children).indexOf(selectedOption);
             currentState.answers[currentState.currentQuestionIndex] = selectedIndex;
         } else if (currentState.answers[currentState.currentQuestionIndex] !== undefined) {
             // If no option is currently selected in UI but an answer was previously saved,
             // it means the user deselected it. Mark as undefined.
              currentState.answers[currentState.currentQuestionIndex] = undefined;
         }

        currentState.currentQuestionIndex--;
        updateQuestion();
        startTimer();
    }
}

prevBtn.addEventListener('click', handlePreviousQuestion);
nextBtn.addEventListener('click', handleNextQuestion);

function updateNavigationButtons() {
    prevBtn.disabled = currentState.currentQuestionIndex === 0;
    nextBtn.disabled = true;
}

// Results screen
const scorePercentage = document.getElementById('score-percentage');
const scoreText = document.getElementById('score-text');
const resultMessage = document.getElementById('result-message');
const homeBtn = document.getElementById('home-btn');

function showResults() {
    clearInterval(currentState.timer);
    showScreen('results');
    
    // Calculate final score here based on stored answers
    let finalScore = 0;
    currentState.questions.forEach((question, index) => {
        if (currentState.answers[index] === question.correctAnswer) {
            finalScore++;
        }
    });
    currentState.score = finalScore; // Update the global score state

    const percentage = (currentState.score / currentState.questions.length) * 100;
    scorePercentage.textContent = `${Math.round(percentage)}%`;
    scoreText.textContent = `Score: ${currentState.score}/${currentState.questions.length}`;
    
    // Update the conic gradient for the score circle
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.background = `conic-gradient(
        var(--primary-color) ${percentage}%, 
        var(--border-color) ${percentage}% 100%
    )`;
    
    let message = '';
    if (percentage >= 90) {
        message = 'Outstanding! You\'re a quiz master! 🏆';
    } else if (percentage >= 70) {
        message = 'Great job! You passed the quiz! 🎉';
    } else if (percentage >= 50) {
        message = 'Good effort! Keep practicing! 💪';
    } else {
        message = 'Keep studying! You can do better next time! 📚';
    }
    
    resultMessage.textContent = message;
    resultMessage.style.color = percentage >= 70 ? 'var(--success-color)' : 'var(--error-color)';
    
    // Create detailed scorecard
    const scorecardContainer = document.createElement('div');
    scorecardContainer.className = 'scorecard-container';
    
    const scorecardTitle = document.createElement('h3');
    scorecardTitle.textContent = 'Detailed Scorecard';
    scorecardContainer.appendChild(scorecardTitle);
    
    // Create table for answers
    const table = document.createElement('table');
    table.className = 'scorecard-table';
    
    // Add table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Status</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Add table body with answers
    const tbody = document.createElement('tbody');
    currentState.questions.forEach((question, index) => {
        const userAnswer = currentState.answers[index];
        const correctAnswer = question.correctAnswer;
        const isCorrect = userAnswer === correctAnswer;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${question.question}</td>
            <td>${userAnswer !== undefined && question.options[userAnswer] !== undefined ? question.options[userAnswer] : 'Not answered'}</td>
            <td>${question.options[correctAnswer]}</td>
            <td class="${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓' : '✗'}
            </td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    scorecardContainer.appendChild(table);
    
    // Add summary statistics
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'scorecard-summary';
    summaryDiv.innerHTML = `
        <div class="summary-item">
            <span>Total Questions:</span>
            <span>${currentState.questions.length}</span>
        </div>
        <div class="summary-item">
            <span>Correct Answers:</span>
            <span>${currentState.score}</span>
        </div>
        <div class="summary-item">
            <span>Wrong Answers:</span>
            <span>${currentState.questions.length - currentState.score}</span>
        </div>
        <div class="summary-item">
            <span>Accuracy:</span>
            <span>${Math.round(percentage)}%</span>
        </div>
    `;
    scorecardContainer.appendChild(summaryDiv);
    
    // Insert scorecard before the buttons
    const resultButtons = document.querySelector('.result-buttons');
    resultButtons.parentNode.insertBefore(scorecardContainer, resultButtons);
    
    // Save score to leaderboard
    saveScore(percentage);
}

function saveScore(percentage) {
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    // You might still want to save scores even without a visible leaderboard
    // If you want to completely remove score saving, you can remove this function and its call in showResults
    // For now, I'll keep score saving in case you want to add leaderboard back later or use scores for other purposes.
    scores.push({
        name: 'Player ' + (scores.length + 1),
        score: Math.round(percentage),
        completedQuizzes: 1
    });
    localStorage.setItem('scores', JSON.stringify(scores));
}

homeBtn.addEventListener('click', () => showScreen('welcome'));

// Removed Leaderboard screen section
// const leaderboardBody = document.getElementById('leaderboard-body');
// const backHomeBtn = document.getElementById('back-home');
//
// function updateLeaderboard() {
//     leaderboardBody.innerHTML = '';
//     const scores = JSON.parse(localStorage.getItem('scores') || '[]');
//     const sortedScores = [...scores, ...leaderboard].sort((a, b) => b.score - a.score);
//    
//     sortedScores.slice(0, 10).forEach((player, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${player.name}</td>
//             <td>${player.score}%</td>
//             <td>${player.completedQuizzes}</td>
//         `;
//         leaderboardBody.appendChild(row);
//     });
// }
//
// backHomeBtn.addEventListener('click', () => showScreen('welcome'));

// Utility functions
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    // Check if the screen exists before adding active class
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }
    
    // Clear scorecard when navigating away from results screen
    if (screenName !== 'results') {
        const existingScorecard = document.querySelector('.scorecard-container');
        if (existingScorecard) {
            existingScorecard.remove();
        }
    }
} 