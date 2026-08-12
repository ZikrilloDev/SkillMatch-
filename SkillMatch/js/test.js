let currentQuestion = 0;
let userAnswers = [];
let userScores = {
    analytical: 0,
    technical: 0,
    creative: 0,
    communication: 0,
    leadership: 0,
    empathy: 0,
    organization: 0,
    practical: 0
};

document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
    setupMenuToggle();
    updateNavigationButtons();
});

function setupMenuToggle() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
        
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
            });
        });
    }
}

function loadQuestion() {
    if (currentQuestion < QUESTIONS.length) {
        const question = QUESTIONS[currentQuestion];
        
        // Update question text
        document.getElementById('questionText').textContent = question.question;
        
        // Update progress
        document.getElementById('currentQuestion').textContent = currentQuestion + 1;
        const percentage = Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100);
        document.getElementById('progressPercentage').textContent = percentage + '%';
        document.getElementById('progressFill').style.width = percentage + '%';
        
        // Clear previous options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        // Add options
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            // Check if this option was previously selected
            if (userAnswers[currentQuestion] === index) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.textContent = option.text;
            optionDiv.addEventListener('click', function() {
                selectOption(index);
            });
            
            optionsContainer.appendChild(optionDiv);
        });
        
        // Hide validation message
        document.getElementById('validationMessage').classList.remove('show');
    }
}

function selectOption(optionIndex) {
    const question = QUESTIONS[currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    // Store the answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Add scores
    for (const skill in selectedOption.scores) {
        userScores[skill] += selectedOption.scores[skill];
    }
    
    // Update UI
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

function nextQuestion() {
    // Check if an option was selected
    if (userAnswers[currentQuestion] === undefined) {
        showValidationMessage();
        return;
    }
    
    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateNavigationButtons();
        window.scrollTo(0, 0);
    } else if (currentQuestion === QUESTIONS.length - 1) {
        // This is the last question, submit the test
        submitTest();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateNavigationButtons();
        window.scrollTo(0, 0);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Update Previous button
    if (currentQuestion === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    // Update Next button text
    if (currentQuestion === QUESTIONS.length - 1) {
        nextBtn.textContent = 'Natijani ko\'rish';
    } else {
        nextBtn.textContent = 'Keyingi →';
    }
}

function showValidationMessage() {
    const message = document.getElementById('validationMessage');
    message.classList.add('show');
    
    setTimeout(() => {
        message.classList.remove('show');
    }, 3000);
}

function submitTest() {
    // Check if last question is answered
    if (userAnswers[currentQuestion] === undefined) {
        showValidationMessage();
        return;
    }
    
    // Normalize scores to 0-100
    const normalizedScores = normalizeScores(userScores);
    
    // Save to localStorage
    const timestamp = new Date().toISOString();
    localStorage.setItem('skillmatch_answers', JSON.stringify(userAnswers));
    localStorage.setItem('skillmatch_scores', JSON.stringify(normalizedScores));
    localStorage.setItem('skillmatch_completed_at', timestamp);
    
    // Redirect to results page
    window.location.href = 'result.html';
}

function normalizeScores(scores) {
    const normalized = {};
    const maxPossibleScore = QUESTIONS.length * 3; // Each question has max 3 points per skill
    
    for (const skill in scores) {
        normalized[skill] = Math.round((scores[skill] / maxPossibleScore) * 100);
    }
    
    return normalized;
}
