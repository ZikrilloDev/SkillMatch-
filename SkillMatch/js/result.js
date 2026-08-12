let userScores = {};
let topCareers = [];

const SKILL_NAMES = {
    analytical: "Analitik fikrlash",
    technical: "Texnik qobiliyat",
    creative: "Kreativlik",
    communication: "Muloqot",
    leadership: "Liderlik",
    empathy: "Empatiya",
    organization: "Tashkilotchilik",
    practical: "Amaliy qobiliyat"
};

document.addEventListener('DOMContentLoaded', function() {
    checkAndLoadResults();
    setupMenuToggle();
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

function checkAndLoadResults() {
    // Get scores from localStorage
    const scoresJSON = localStorage.getItem('skillmatch_scores');
    
    if (!scoresJSON) {
        // No test completed, show empty state
        document.getElementById('emptyState').style.display = 'block';
        document.getElementById('resultsContent').style.display = 'none';
        return;
    }
    
    userScores = JSON.parse(scoresJSON);
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('resultsContent').style.display = 'block';
    
    // Calculate matching with all careers
    calculateCareerMatching();
    
    // Display results
    displayResults();
}

function calculateCareerMatching() {
    const results = CAREERS.map(career => {
        let similarity = 0;
        let totalDifference = 0;
        
        // Calculate weighted similarity
        for (const skill in userScores) {
            const userScore = userScores[skill];
            const careerScore = career.profile[skill] || 0;
            const difference = Math.abs(userScore - careerScore);
            totalDifference += difference;
        }
        
        // Convert to percentage (0-100)
        const maxPossibleDifference = 100 * 8; // 8 skills, each can differ by max 100
        similarity = Math.round(100 - (totalDifference / maxPossibleDifference) * 100);
        
        // Ensure similarity is between 0-100
        similarity = Math.max(0, Math.min(100, similarity));
        
        return {
            ...career,
            similarity: similarity
        };
    });
    
    // Sort by similarity (descending)
    topCareers = results.sort((a, b) => b.similarity - a.similarity);
}

function displayResults() {
    // Display top-1 result
    displayTopResult();
    
    // Display top-5 results
    displayTopFiveResults();
    
    // Display skills chart
    displaySkillsChart();
    
    // Display strengths
    displayStrengths();
    
    // Display areas for development
    displayDevelopmentAreas();
}

function displayTopResult() {
    const topCareer = topCareers[0];
    
    document.getElementById('topIcon').textContent = topCareer.icon;
    document.getElementById('topTitle').textContent = topCareer.title;
    document.getElementById('topPercentage').textContent = topCareer.similarity + '%';
    
    // Generate description based on user's top skills
    const topThreeSkills = getTopThreeSkills();
    const description = generateTopDescription(topCareer, topThreeSkills);
    document.getElementById('topDescription').textContent = description;
    
    // Update percentage circle
    updatePercentageCircle('percentageCircle', topCareer.similarity);
}

function generateTopDescription(career, topSkills) {
    const skillNames = topSkills.map(skill => SKILL_NAMES[skill]).join(", ");
    return `Sizning kuchli ${skillNames} qobiliyatlaringiz "${career.title}" kasbi bilan yuqori darajada mos keladi. Ushbu kasbda muvaffaq bo'lish uchun talab qilinadigan asosiy talablarni to'liq qo'llashingiz mumkin.`;
}

function displayTopFiveResults() {
    const careersGrid = document.getElementById('careersGrid');
    careersGrid.innerHTML = '';
    
    for (let i = 1; i < 5 && i < topCareers.length; i++) {
        const career = topCareers[i];
        const position = i + 1;
        
        const badge = position === 2 ? '🥈' : position === 3 ? '🥉' : position;
        
        const card = document.createElement('div');
        card.className = 'career-card';
        card.onclick = () => openCareerModal(i);
        
        card.innerHTML = `
            <div class="career-badge">${badge}</div>
            <h3>${career.title}</h3>
            <div class="career-match">
                <span class="match-number">${career.similarity}%</span>
                <div class="match-bar">
                    <div class="match-fill" style="width: ${career.similarity}%"></div>
                </div>
            </div>
        `;
        
        careersGrid.appendChild(card);
    }
}

function displaySkillsChart() {
    const skillsChart = document.getElementById('skillsChart');
    skillsChart.innerHTML = '';
    
    for (const skill in userScores) {
        const score = userScores[skill];
        const skillName = SKILL_NAMES[skill];
        
        const row = document.createElement('div');
        row.className = 'skill-bar-row';
        row.innerHTML = `
            <div class="skill-name">${skillName}</div>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: 0%"></div>
            </div>
            <div class="skill-percentage">0%</div>
        `;
        
        skillsChart.appendChild(row);
        
        // Animate after a short delay
        setTimeout(() => {
            const fill = row.querySelector('.skill-bar-fill');
            const percentage = row.querySelector('.skill-percentage');
            fill.style.width = score + '%';
            
            // Animate percentage text
            animatePercentage(percentage, score);
        }, 100);
    }
}

function animatePercentage(element, target) {
    let current = 0;
    const increment = target / 20;
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '%';
            clearInterval(interval);
        } else {
            element.textContent = Math.round(current) + '%';
        }
    }, 20);
}

function displayStrengths() {
    const topThreeSkills = getTopThreeSkills();
    const strengthsGrid = document.getElementById('strengthsGrid');
    strengthsGrid.innerHTML = '';
    
    topThreeSkills.forEach(skill => {
        const score = userScores[skill];
        const skillName = SKILL_NAMES[skill];
        const description = getSkillDescription(skill);
        
        const card = document.createElement('div');
        card.className = 'strength-card';
        card.innerHTML = `
            <h3>${skillName}</h3>
            <p>${description}</p>
            <div style="margin-top: 12px; font-size: 12px; color: var(--text-light);">${score}% darajasi</div>
        `;
        
        strengthsGrid.appendChild(card);
    });
}

function displayDevelopmentAreas() {
    const lowestTwoSkills = getLowestTwoSkills();
    const developmentGrid = document.getElementById('developmentGrid');
    developmentGrid.innerHTML = '';
    
    lowestTwoSkills.forEach(skill => {
        const score = userScores[skill];
        const skillName = SKILL_NAMES[skill];
        const suggestion = getDevelopmentSuggestion(skill);
        
        const card = document.createElement('div');
        card.className = 'development-card';
        card.innerHTML = `
            <h3>${skillName}</h3>
            <p>${suggestion}</p>
            <div style="margin-top: 12px; font-size: 12px; color: var(--text-light);">${score}% darajasi</div>
        `;
        
        developmentGrid.appendChild(card);
    });
}

function getTopThreeSkills() {
    const skills = Object.entries(userScores).sort((a, b) => b[1] - a[1]);
    return skills.slice(0, 3).map(s => s[0]);
}

function getLowestTwoSkills() {
    const skills = Object.entries(userScores).sort((a, b) => a[1] - b[1]);
    return skills.slice(0, 2).map(s => s[0]);
}

function getSkillDescription(skill) {
    const descriptions = {
        analytical: "Murakkab muammolarni qismlarga ajratib, mantiqiy yechim topishda kuchlisiz.",
        technical: "Texnologiyalar, tizimlar va texnik vositalarni tushunishga moyilsiz.",
        creative: "Yangi g'oyalar o'ylab topish va noodatiy yechimlarni qidirish sizga mos.",
        communication: "Boshqalar bilan samarali suhbat va fikr almashish ko'nikmasiga egasiz.",
        leadership: "Jamoa yetakchi bo'lish va boshqalarni ilhomlantirish qobiliyatingiz yuqori.",
        empathy: "Boshqalarning hissolari va ehtiyojlarini tushunishga moyilsiz.",
        organization: "Vaqt va resurslarni samarali boshqarish, rejalashtirish sizda yuqori darajada.",
        practical: "Nazariyani amaliyotga aylantirish va real natija olish qobiliyatingiz kuchli."
    };
    return descriptions[skill] || "";
}

function getDevelopmentSuggestion(skill) {
    const suggestions = {
        analytical: "Analitik fikrlashni rivojlantirish uchun logic puzzle-larni yeching, coding challanglar qo'llab-quvvatlang.",
        technical: "Texnik bilimni yaxshilash uchun online kurslarni o'qiy, real proyektlar ustida ishlang.",
        creative: "Kreativlikni rivojlantirish uchun brainstorming sessiyalariga qatnashish, yangi sohalarni explore qilishni o'rganish.",
        communication: "Muloqot qobiliyatini takomillashtirish uchun public speaking, writing kurslarni ko'rib chiqing.",
        leadership: "Liderlik qobiliyati uchun jamoaviy loyihalarni boshqaring, mentor izlang.",
        empathy: "Empatiyani rivojlantirish uchun boshqa odamlarni tinglab, ularning muammolarini tushunishga harkalanish.",
        organization: "Tashkilotchilik qobiliyatini yaxshilash uchun project management tools-lardan foydalanish.",
        practical: "Amaliy qobiliyatni oshirish uchun haqiqiy loyihalarda ishlash va hands-on tajriba olish."
    };
    return suggestions[skill] || "";
}

function updatePercentageCircle(elementId, percentage) {
    const element = document.getElementById(elementId);
    
    // Create SVG circle
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 140 140');
    svg.setAttribute('width', '140');
    svg.setAttribute('height', '140');
    svg.style.transform = 'rotate(-90deg)';
    
    // Background circle
    const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle.setAttribute('cx', '70');
    bgCircle.setAttribute('cy', '70');
    bgCircle.setAttribute('r', '65');
    bgCircle.setAttribute('fill', 'none');
    bgCircle.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
    bgCircle.setAttribute('stroke-width', '6');
    
    // Progress circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '70');
    circle.setAttribute('cy', '70');
    circle.setAttribute('r', '65');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '6');
    circle.setAttribute('stroke-dasharray', `${2 * Math.PI * 65}`);
    circle.setAttribute('stroke-dashoffset', `${2 * Math.PI * 65}`);
    circle.style.transition = 'stroke-dashoffset 1s ease';
    
    svg.appendChild(bgCircle);
    svg.appendChild(circle);
    
    element.innerHTML = '';
    element.appendChild(svg);
    
    // Animate circle
    setTimeout(() => {
        const circumference = 2 * Math.PI * 65;
        const offset = circumference - (percentage / 100) * circumference;
        circle.setAttribute('stroke-dashoffset', offset);
    }, 100);
    
    // Add text
    const text = document.createElement('div');
    text.style.fontSize = '28px';
    text.style.fontWeight = '800';
    text.style.color = 'white';
    text.style.marginTop = '12px';
    text.textContent = percentage + '%';
    element.appendChild(text);
}

function openCareerModal(index) {
    const career = topCareers[index];
    const modal = document.getElementById('careerModal');
    const modalBody = document.getElementById('modalBody');
    
    let roadmapHTML = '';
    career.roadmap.forEach((step, i) => {
        roadmapHTML += `<div class="modal-roadmap-item">${i + 1}. ${step}</div>`;
    });
    
    modalBody.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
            <div style="font-size: 48px;">${career.icon}</div>
            <div>
                <h2>${career.title}</h2>
                <div class="career-category">${career.category}</div>
            </div>
        </div>
        
        <div class="match-info">
            <div class="match-percentage">${career.similarity}%</div>
            <div>
                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--text-light);">Moslik darajasi</div>
                <div class="match-bar" style="width: 200px; height: 8px; margin-top: 4px;">
                    <div class="match-fill" style="width: ${career.similarity}%"></div>
                </div>
            </div>
        </div>
        
        <p><strong>Tavsif:</strong><br>${career.description}</p>
        
        <h3>Kerakli Skilllar:</h3>
        <ul>
            ${career.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        
        <h3>Tavsiya Etilgan Fanlar:</h3>
        <ul>
            ${career.subjects.map(subject => `<li>${subject}</li>`).join('')}
        </ul>
        
        <h3>Rivojlanish Yo'li (Roadmap):</h3>
        <div class="modal-roadmap">${roadmapHTML}</div>
        
        <h3>Nega Siz Uchun Mos?</h3>
        <p>${getCareerMatchExplanation(career)}</p>
    `;
    
    modal.classList.add('active');
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCareerModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCareerModal();
        }
    });
}

function closeCareerModal() {
    document.getElementById('careerModal').classList.remove('active');
}

function getCareerMatchExplanation(career) {
    const topThreeSkills = getTopThreeSkills();
    const topScores = topThreeSkills.map(skill => ({
        skill: SKILL_NAMES[skill],
        score: userScores[skill]
    }));
    
    const skillsText = topScores.map(s => `${s.skill} (${s.score}%)`).join(", ");
    
    return `Sizning ${skillsText} qobiliyatlaringiz "${career.title}" kasbiga juda mos keladi. Ushbu kasbning talablari va sizning qabiliyatlar profilingiz o'rtasida yuqori darajada mos keluvchilik mavjud.`;
}

function retakeTest() {
    // Clear localStorage
    localStorage.removeItem('skillmatch_answers');
    localStorage.removeItem('skillmatch_scores');
    localStorage.removeItem('skillmatch_completed_at');
    
    // Redirect to test page
    window.location.href = 'test.html';
}

function shareResults() {
    const topCareer = topCareers[0];
    const shareText = `SkillMatch natijam:\n\n🥇 ${topCareer.title} — ${topCareer.similarity}%\n\n${topCareers.slice(1, 4).map((c, i) => `${i + 2}. ${c.title} — ${c.similarity}%`).join('\n')}\n\nSizning kasbiy yo'nalishingizni topish uchun SkillMatch-ni o'ynab ko'ring!\n\nhttps://skillmatch.vercel.app`;
    
    // Try to use Web Share API
    if (navigator.share) {
        navigator.share({
            title: 'SkillMatch Natijalari',
            text: shareText
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Natija clipboardga nusxalandi!');
        }).catch(err => {
            console.log('Copy failed:', err);
        });
    }
}
