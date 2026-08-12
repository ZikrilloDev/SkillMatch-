const CAREERS = [
    {
        id: "frontend-developer",
        title: "Frontend Developer",
        category: "IT va texnologiya",
        icon: "💻",
        description: "Veb-saytlar va ilovalarning foydalanuvchi interfeysini yaratuvchi professional. HTML, CSS, JavaScript va boshqa texnologiyalardan foydalanib responsive va zamonaviy UI/UX tuzadi.",
        skills: ["HTML/CSS", "JavaScript", "React/Vue", "UI/UX tushunish", "Muammo yechish"],
        subjects: ["Informatika", "Matematika", "Muammo yechish"],
        roadmap: ["HTML va CSS", "JavaScript", "Veb dizayn asoslari", "React yoki Vue.js", "API bilan ishlash", "Git va GitHub", "Real loyihalar", "Portfolio yasash"],
        profile: {
            analytical: 75,
            technical: 95,
            creative: 80,
            communication: 60,
            leadership: 40,
            empathy: 45,
            organization: 70,
            practical: 90
        }
    },
    {
        id: "backend-developer",
        title: "Backend Developer",
        category: "IT va texnologiya",
        icon: "⚙️",
        description: "Veb-ilovalarning server tomonini yaratuvchi, ma'lumotlar bazasini boshqaruvchi va sistemaning mantiqiy qismini ishlab chiquvchi professional.",
        skills: ["Dasturlash tillari", "Database", "API", "Server asoslari", "Xavfsizlik"],
        subjects: ["Informatika", "Matematika", "Ingliz tili"],
        roadmap: ["Python/Node.js", "SQL Database", "API dizayn", "Server asoslari", "Xavfsizlik", "Deployment", "Git va GitHub", "Mikroservices"],
        profile: {
            analytical: 90,
            technical: 95,
            creative: 60,
            communication: 50,
            leadership: 45,
            empathy: 40,
            organization: 80,
            practical: 85
        }
    },
    {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        category: "IT va texnologiya",
        icon: "🔗",
        description: "Frontend va Backend hammasini yasaydigan, butun veb-tizimni bo'yin boshqa oladigan professional. Web-ilovalarning har bir qatlamida ishlashga qodir.",
        skills: ["Frontend texnologiyalar", "Backend texnologiyalar", "Database", "DevOps asoslari", "System dizayn"],
        subjects: ["Informatika", "Matematika", "Ingliz tili"],
        roadmap: ["HTML, CSS, JavaScript", "Frontend framework", "Backend dasturlash", "Database", "Git va GitHub", "API integratsiya", "Deployment", "Real loyihalar"],
        profile: {
            analytical: 88,
            technical: 95,
            creative: 72,
            communication: 55,
            leadership: 48,
            empathy: 42,
            organization: 78,
            practical: 90
        }
    },
    {
        id: "mobile-developer",
        title: "Mobile Developer",
        category: "IT va texnologiya",
        icon: "📱",
        description: "Smartfonlar va planşetlar uchun ilovalar yasaydigan professional. iOS, Android yoki cross-platform texnologiyalardan foydalanadi.",
        skills: ["Swift/Kotlin", "React Native", "UI/UX", "Performance optimization", "API integratsiya"],
        subjects: ["Informatika", "Matematika", "Fizika"],
        roadmap: ["Dasturlash asoslari", "Kotlin/Swift", "Mobile UI/UX", "API integratsiya", "Database", "Git", "Testing", "App store deployment"],
        profile: {
            analytical: 80,
            technical: 95,
            creative: 75,
            communication: 55,
            leadership: 40,
            empathy: 50,
            organization: 75,
            practical: 90
        }
    },
    {
        id: "ai-engineer",
        title: "AI / Machine Learning Engineer",
        category: "IT va texnologiya",
        icon: "🤖",
        description: "Artificial Intelligence va Machine Learning modellarni yasaydigan, trening qiladigan va deployment qiladigan professional.",
        skills: ["Python", "Machine Learning", "Deep Learning", "Data analysis", "Mathematical concepts"],
        subjects: ["Matematika", "Informatika", "Fizika"],
        roadmap: ["Python", "Linear algebra va calculus", "Data preprocessing", "Machine Learning algorithms", "Deep Learning", "TensorFlow/PyTorch", "Data visualization", "Real proyektlar"],
        profile: {
            analytical: 95,
            technical: 90,
            creative: 70,
            communication: 50,
            leadership: 40,
            empathy: 35,
            organization: 75,
            practical: 80
        }
    },
    {
        id: "data-scientist",
        title: "Data Scientist",
        category: "IT va texnologiya",
        icon: "📊",
        description: "Ma'lumotlarni tahlil qiladigan, naqshlarni topuvchi va kutish modellari yasaydigan professional. Bizneslarga qaror qabul qilishda yordam beradi.",
        skills: ["Python/R", "Statistical analysis", "Data visualization", "Machine Learning", "SQL"],
        subjects: ["Matematika", "Informatika", "Statistika"],
        roadmap: ["Python/R", "SQL", "Statistics", "Data visualization", "Machine Learning", "Big Data tools", "Business analytics", "Presentations"],
        profile: {
            analytical: 95,
            technical: 85,
            creative: 70,
            communication: 70,
            leadership: 45,
            empathy: 50,
            organization: 80,
            practical: 75
        }
    },
    {
        id: "data-analyst",
        title: "Data Analyst",
        category: "IT va texnologiya",
        icon: "📈",
        description: "Kompaniyalarning ma'lumotlarini tahlil qiladigan, statistik hisobot tayyorladigan va bizneslarga insayt beradigan professional.",
        skills: ["SQL", "Excel", "Power BI/Tableau", "Statistical analysis", "Business acumen"],
        subjects: ["Matematika", "Statistika", "Biznes"],
        roadmap: ["Excel asoslari", "SQL", "Data visualization tools", "Statistical analysis", "Power BI/Tableau", "Business intelligence", "Python basics", "Real case studies"],
        profile: {
            analytical: 92,
            technical: 75,
            creative: 65,
            communication: 75,
            leadership: 50,
            empathy: 55,
            organization: 85,
            practical: 70
        }
    },
    {
        id: "data-engineer",
        title: "Data Engineer",
        category: "IT va texnologiya",
        icon: "🔄",
        description: "Katta hajmdagi ma'lumotlarni boshqaruvchi, data pipelines yasaydigan va data infrastructure quradigan professional.",
        skills: ["Python/Scala", "Big Data tools", "SQL", "ETL", "Cloud platforms"],
        subjects: ["Informatika", "Matematika", "Ingliz tili"],
        roadmap: ["Python", "SQL va Database", "Hadoop/Spark", "ETL tools", "Cloud platforms", "Data warehousing", "Performance tuning", "Real systems"],
        profile: {
            analytical: 90,
            technical: 95,
            creative: 60,
            communication: 50,
            leadership: 45,
            empathy: 40,
            organization: 85,
            practical: 85
        }
    },
    {
        id: "cybersecurity-engineer",
        title: "Cybersecurity Engineer",
        category: "IT va texnologiya",
        icon: "🔐",
        description: "Kompaniyalarning tizimlarini xavflardan himoyalaydi, xavfsizlik tizimlarini kuradigan va cyberattackalarni oldini oladigan professional.",
        skills: ["Network security", "Encryption", "Penetration testing", "System hardening", "Threat analysis"],
        subjects: ["Informatika", "Matematika", "Ingliz tili"],
        roadmap: ["Networking asoslari", "System administration", "Cryptography", "Penetration testing", "Security tools", "Incident response", "Certifications", "Case studies"],
        profile: {
            analytical: 88,
            technical: 92,
            creative: 60,
            communication: 60,
            leadership: 55,
            empathy: 45,
            organization: 85,
            practical: 80
        }
    },
    {
        id: "devops-engineer",
        title: "DevOps Engineer",
        category: "IT va texnologiya",
        icon: "⚡",
        description: "Dastur rivojlantirish va operatsionlarni birlashtiradigan, deployment jarayonini avtomatlashtiradigan va sistma ishlashini nazora qiladigan professional.",
        skills: ["Linux", "Docker/Kubernetes", "CI/CD", "Cloud platforms", "Infrastructure as code"],
        subjects: ["Informatika", "Sistem asoslari", "Networking"],
        roadmap: ["Linux", "Scripting (Bash/Python)", "Docker", "Kubernetes", "CI/CD tools", "Cloud platforms", "Monitoring", "Infrastructure automation"],
        profile: {
            analytical: 85,
            technical: 92,
            creative: 65,
            communication: 65,
            leadership: 60,
            empathy: 50,
            organization: 90,
            practical: 85
        }
    },
    {
        id: "game-developer",
        title: "Game Developer",
        category: "IT va texnologiya",
        icon: "🎮",
        description: "Video o'yinlarni yasaydigan, grafika, sound, gameplay va artificial intelligence yigindisini yaratadigan creative professional.",
        skills: ["C#/C++", "Game engines", "3D graphics", "Physics", "Game design"],
        subjects: ["Informatika", "Matematika", "Fizika"],
        roadmap: ["C# va C++", "Unity/Unreal", "3D graphics", "Physics engine", "Collision detection", "AI", "Game optimization", "Publishing"],
        profile: {
            analytical: 80,
            technical: 90,
            creative: 90,
            communication: 55,
            leadership: 50,
            empathy: 50,
            organization: 75,
            practical: 85
        }
    },
    {
        id: "ui-ux-designer",
        title: "UI/UX Designer",
        category: "IT va texnologiya",
        icon: "🎨",
        description: "Veb va mobile ilovalarning foydalanuvchi interfeysini va tajribasi (UX) dizayn qiladigan, user research o'tkaydigan professional.",
        skills: ["Figma/Adobe XD", "User research", "Wireframing", "Prototyping", "Visual design"],
        subjects: ["Dizayn asoslari", "Psixologiya", "Matematika"],
        roadmap: ["Dizayn prinsiplairi", "Figma", "User research", "Wireframing", "Prototyping", "Interaction design", "Usability testing", "Design systems"],
        profile: {
            analytical: 75,
            technical: 70,
            creative: 95,
            communication: 85,
            leadership: 55,
            empathy: 90,
            organization: 75,
            practical: 80
        }
    },
    {
        id: "product-designer",
        title: "Product Designer",
        category: "IT va texnologiya",
        icon: "🎯",
        description: "Mahsul strategiyasini ishlab chiqadigan, user needs ni tahlil qiladigan va butun mahsul dizainini boshqaradigan professional.",
        skills: ["Design thinking", "User research", "Interaction design", "Prototyping", "Analytics"],
        subjects: ["Dizayn", "Psixologiya", "Biznes"],
        roadmap: ["User research metodlar", "Design thinking", "Wireframing", "Prototyping", "Usability testing", "Analytics", "Design systems", "Leadership"],
        profile: {
            analytical: 80,
            technical: 70,
            creative: 90,
            communication: 85,
            leadership: 75,
            empathy: 90,
            organization: 80,
            practical: 75
        }
    },
    {
        id: "product-manager",
        title: "Product Manager",
        category: "IT va texnologiya",
        icon: "🚀",
        description: "Mahsulning strategiyasi, istiqboli va razvojini boshqaradigan, market research qiladigan va biznesloy-technical gap-ni to'ldiraydigan professional.",
        skills: ["Product strategy", "Market research", "Analytics", "Stakeholder management", "Agile"],
        subjects: ["Biznes", "Matematika", "Psixologiya"],
        roadmap: ["Product thinking", "Market research", "Analytics", "Roadmap planning", "Stakeholder management", "Agile/Scrum", "Leadership", "Business strategy"],
        profile: {
            analytical: 85,
            technical: 75,
            creative: 80,
            communication: 90,
            leadership: 85,
            empathy: 80,
            organization: 90,
            practical: 75
        }
    },
    {
        id: "software-engineer",
        title: "Software Engineer",
        category: "IT va texnologiya",
        icon: "🛠️",
        description: "Katta miqyosda dastur tizimlarini dizayn qiladigan, arxitektura yasaydigan va texnik metodlar qo'lladigan professional.",
        skills: ["System design", "Algorithms", "Design patterns", "Software architecture", "Testing"],
        subjects: ["Informatika", "Matematika", "Ingliz tili"],
        roadmap: ["Fundamentals", "Data structures", "Algorithms", "Design patterns", "System design", "Testing strategies", "Performance", "Distributed systems"],
        profile: {
            analytical: 92,
            technical: 95,
            creative: 70,
            communication: 65,
            leadership: 65,
            empathy: 45,
            organization: 85,
            practical: 85
        }
    },
    {
        id: "qa-engineer",
        title: "QA Engineer",
        category: "IT va texnologiya",
        icon: "✅",
        description: "Dastur sifatini nazora qiladigan, testlar yozadigan, buglar topuvchi va mahsul xatosizligini ta'minlaydi.",
        skills: ["Testing", "Automation", "Bug reporting", "Test planning", "Tools"],
        subjects: ["Informatika", "Mantiq", "Tahlil"],
        roadmap: ["Testing asoslari", "Test planning", "Test cases", "Automation tools", "Selenium", "Performance testing", "Mobile testing", "Advanced skills"],
        profile: {
            analytical: 88,
            technical: 80,
            creative: 65,
            communication: 75,
            leadership: 50,
            empathy: 60,
            organization: 85,
            practical: 85
        }
    },
    {
        id: "graphic-designer",
        title: "Graphic Designer",
        category: "Creative",
        icon: "🖼️",
        description: "Logo, poster, banner, brand identity va boshqa visual kontentni yasaydigan creative professional.",
        skills: ["Adobe Suite", "Visual design", "Typography", "Color theory", "Branding"],
        subjects: ["Dizayn", "Xosnaviy san'at", "Tarix"],
        roadmap: ["Design prinsiplairi", "Adobe Photoshop", "Adobe Illustrator", "Typography", "Color theory", "Logo design", "Branding", "Portfolio"],
        profile: {
            analytical: 70,
            technical: 80,
            creative: 95,
            communication: 75,
            leadership: 50,
            empathy: 70,
            organization: 75,
            practical: 85
        }
    },
    {
        id: "motion-designer",
        title: "Motion Designer",
        category: "Creative",
        icon: "🎬",
        description: "Video, animatsiya, transition va boshqa dinamik content yaratadigan professional. Film, reklama va digital media-da ishlaydi.",
        skills: ["After Effects", "Animation principles", "Video editing", "Visual effects", "Storytelling"],
        subjects: ["Dizayn", "Sinematografiya", "Musiqa"],
        roadmap: ["Animation asoslari", "After Effects", "Premiere Pro", "Motion graphics", "3D animation", "Visual effects", "Sound design", "Portfolio"],
        profile: {
            analytical: 75,
            technical: 85,
            creative: 95,
            communication: 70,
            leadership: 50,
            empathy: 70,
            organization: 75,
            practical: 85
        }
    },
    {
        id: "video-editor",
        title: "Video Editor",
        category: "Creative",
        icon: "🎥",
        description: "Raw video materiallarni professional video-ga aylantiradigan, montaj qiladigan, sound va color correction o'tkaydigan professional.",
        skills: ["Video editing software", "Color correction", "Audio editing", "Motion graphics", "Storytelling"],
        subjects: ["Sinematografiya", "Musiqa", "Dizayn"],
        roadmap: ["Video editing asoslari", "Premiere Pro/Final Cut", "Color correction", "Audio editing", "Motion graphics", "Effects", "Workflow optimization", "Portfolio"],
        profile: {
            analytical: 75,
            technical: 85,
            creative: 90,
            communication: 70,
            leadership: 50,
            empathy: 75,
            organization: 80,
            practical: 85
        }
    },
    {
        id: "content-creator",
        title: "Content Creator",
        category: "Creative",
        icon: "📝",
        description: "Social media, blog, YouTube va boshqa platformalar uchun interesting va engaging content yasaydigan professional.",
        skills: ["Content writing", "Video production", "Social media", "SEO", "Analytics"],
        subjects: ["Til va adabiyot", "Dizayn", "Biznes"],
        roadmap: ["Writing skills", "SEO", "Social media strategy", "Video production", "Photography", "Editing", "Analytics", "Monetization"],
        profile: {
            analytical: 70,
            technical: 70,
            creative: 90,
            communication: 90,
            leadership: 60,
            empathy: 85,
            organization: 75,
            practical: 75
        }
    },
    {
        id: "photographer",
        title: "Photographer",
        category: "Creative",
        icon: "📷",
        description: "Event, product, portrait va boshqa mavzularda fotosurat qiladigan, editing qiladigan va visual content yasaydigan professional.",
        skills: ["Photography", "Lighting", "Composition", "Post-processing", "Client management"],
        subjects: ["Xosnaviy san'at", "Fizika (optika)", "Estetika"],
        roadmap: ["Camera basics", "Composition", "Lighting", "Exposure", "Editing", "Post-processing", "Portfolio", "Business skills"],
        profile: {
            analytical: 70,
            technical: 80,
            creative: 95,
            communication: 75,
            leadership: 50,
            empathy: 80,
            organization: 75,
            practical: 90
        }
    },
    {
        id: "animator",
        title: "Animator",
        category: "Creative",
        icon: "✨",
        description: "2D/3D animatsiya, character design va boshqa animatsion kontentni yasayadigan professional. Film, game, reklama sohalarida ishlaydi.",
        skills: ["3D software", "Animation principles", "Character design", "Rigging", "Rendering"],
        subjects: ["Dizayn", "Matematika", "Fizika"],
        roadmap: ["Animation prinsiplairi", "3D software (Blender/Maya)", "Character design", "Rigging", "Texturing", "Rendering", "VFX", "Portfolio"],
        profile: {
            analytical: 75,
            technical: 85,
            creative: 95,
            communication: 70,
            leadership: 50,
            empathy: 70,
            organization: 75,
            practical: 90
        }
    },
    {
        id: "copywriter",
        title: "Copywriter",
        category: "Creative",
        icon: "✍️",
        description: "Reklama matni, marketing copy, website content va boshqa persuasive writing yasayadigan professional.",
        skills: ["Copywriting", "Marketing", "SEO writing", "Brand voice", "Persuasion"],
        subjects: ["Til va adabiyat", "Biznes", "Psixologiya"],
        roadmap: ["Writing fundamentals", "Copywriting techniques", "Brand voice", "Marketing strategy", "SEO writing", "Sales copy", "Email marketing", "Portfolio"],
        profile: {
            analytical: 75,
            technical: 60,
            creative: 90,
            communication: 90,
            leadership: 60,
            empathy: 85,
            organization: 75,
            practical: 75
        }
    },
    {
        id: "business-analyst",
        title: "Business Analyst",
        category: "Business",
        icon: "📊",
        description: "Kompaniya ehtiyojlarini tahlil qiladigan, business requirements o'tkaydigan va technical solutions tayyorladigan professional.",
        skills: ["Requirements analysis", "Business process mapping", "Data analysis", "Communication", "Tools"],
        subjects: ["Biznes", "Matematika", "Informatika"],
        roadmap: ["Business analysis", "Process mapping", "Requirements gathering", "Stakeholder management", "Data analysis", "Tools (Jira, Azure)", "Domain knowledge", "Leadership"],
        profile: {
            analytical: 90,
            technical: 75,
            creative: 70,
            communication: 85,
            leadership: 70,
            empathy: 75,
            organization: 85,
            practical: 80
        }
    },
    {
        id: "project-manager",
        title: "Project Manager",
        category: "Business",
        icon: "🎯",
        description: "Loyiha planlashtiradigan, budget va timeline boshqaradigan, jamoa koordinatsiya qiladigan va maqsad yetkazadigan professional.",
        skills: ["Project planning", "Risk management", "Team management", "Communication", "Agile/Waterfall"],
        subjects: ["Biznes", "Psixologiya", "Matematika"],
        roadmap: ["Project management asoslari", "Agile/Scrum", "Risk management", "Stakeholder management", "Communication", "Tools (Jira, Asana)", "Leadership", "Certifications"],
        profile: {
            analytical: 85,
            technical: 65,
            creative: 75,
            communication: 90,
            leadership: 90,
            empathy: 80,
            organization: 95,
            practical: 80
        }
    },
    {
        id: "marketing-manager",
        title: "Marketing Manager",
        category: "Business",
        icon: "📢",
        description: "Marketing strategiya ishlab chiqadigan, brand promote qiladigan, campaigns boshqaradigan va ROI maksimalashtiradigan professional.",
        skills: ["Marketing strategy", "Digital marketing", "Analytics", "Creative thinking", "Team management"],
        subjects: ["Biznes", "Psixologiya", "Kommunikatsiya"],
        roadmap: ["Marketing fundamentals", "Digital marketing", "Social media strategy", "Analytics", "Content marketing", "SEO/SEM", "Campaign management", "Leadership"],
        profile: {
            analytical: 80,
            technical: 70,
            creative: 85,
            communication: 90,
            leadership: 85,
            empathy: 80,
            organization: 85,
            practical: 75
        }
    },
    {
        id: "sales-manager",
        title: "Sales Manager",
        category: "Business",
        icon: "💼",
        description: "Sotuvni boshqaradigan, sales team-ni rahbarlik qiladigan, target yetkazan va customer relationships bosh o'rnatadigan professional.",
        skills: ["Sales strategy", "Team leadership", "Negotiation", "CRM", "Customer relations"],
        subjects: ["Biznes", "Psixologiya", "Kommunikatsiya"],
        roadmap: ["Sales fundamentals", "CRM tools", "Negotiation skills", "Team leadership", "Sales strategy", "Forecasting", "Customer management", "Business development"],
        profile: {
            analytical: 75,
            technical: 60,
            creative: 75,
            communication: 95,
            leadership: 90,
            empathy: 85,
            organization: 85,
            practical: 80
        }
    },
    {
        id: "financial-analyst",
        title: "Financial Analyst",
        category: "Business",
        icon: "💰",
        description: "Moliyaviy ma'lumotlarni tahlil qiladigan, invest qarorlarini tayyorladigan va financial forecasting o'tkaydigan professional.",
        skills: ["Financial analysis", "Data analysis", "Excel", "Financial modeling", "Reporting"],
        subjects: ["Matematika", "Ekonomika", "Biznes"],
        roadmap: ["Finance fundamentals", "Accounting", "Excel", "Financial analysis", "Valuation", "Financial modeling", "Risk analysis", "Business intelligence"],
        profile: {
            analytical: 95,
            technical: 75,
            creative: 60,
            communication: 75,
            leadership: 60,
            empathy: 50,
            organization: 90,
            practical: 75
        }
    },
    {
        id: "accountant",
        title: "Accountant",
        category: "Business",
        icon: "📑",
        description: "Moliyaviy rekordlarni tutadigan, hisobotlarni tayyorladigan, vergi chiqarish va audit o'tkaydigan professional.",
        skills: ["Accounting", "Bookkeeping", "Tax knowledge", "Financial reporting", "Compliance"],
        subjects: ["Matematika", "Ekonomika", "Zakonchilik"],
        roadmap: ["Accounting principles", "Bookkeeping", "Tax laws", "Financial reporting", "Audit", "Compliance", "Software tools", "Advanced accounting"],
        profile: {
            analytical: 90,
            technical: 75,
            creative: 55,
            communication: 70,
            leadership: 55,
            empathy: 60,
            organization: 95,
            practical: 85
        }
    },
    {
        id: "hr-manager",
        title: "HR Manager",
        category: "Business",
        icon: "👥",
        description: "Odamlar resurslarini boshqaradigan, recruitment qiladigan, training va development program yasayadigan professional.",
        skills: ["Recruitment", "Employee relations", "Performance management", "Training", "Compliance"],
        subjects: ["Psixologiya", "Biznes", "Kommunikatsiya"],
        roadmap: ["HR fundamentals", "Recruitment", "Employee relations", "Performance management", "Training", "Organizational development", "Leadership", "Strategic HR"],
        profile: {
            analytical: 75,
            technical: 60,
            creative: 70,
            communication: 90,
            leadership: 85,
            empathy: 95,
            organization: 85,
            practical: 75
        }
    },
    {
        id: "operations-manager",
        title: "Operations Manager",
        category: "Business",
        icon: "⚙️",
        description: "Operatsion jarayonlarni boshqaradigan, efficiency maksimalashtiradigan va quality ta'minlaydi.",
        skills: ["Process management", "Resource optimization", "Analytics", "Quality control", "Team leadership"],
        subjects: ["Biznes", "Matematika", "Informatika"],
        roadmap: ["Operations basics", "Process optimization", "Supply chain", "Quality management", "Leadership", "Analytics", "Lean/Six Sigma", "Strategic planning"],
        profile: {
            analytical: 85,
            technical: 75,
            creative: 70,
            communication: 80,
            leadership: 85,
            empathy: 70,
            organization: 95,
            practical: 90
        }
    },
    {
        id: "entrepreneur",
        title: "Entrepreneur",
        category: "Business",
        icon: "🚀",
        description: "O'z biznesni boshlaydi, ishlab chiqadi va boshqaradi. Riskni oladi, yangi g'oyalarni amalga oshiradi va market yaratadi.",
        skills: ["Business strategy", "Financial management", "Innovation", "Risk taking", "Leadership"],
        subjects: ["Biznes", "Matematika", "Psixologiya"],
        roadmap: ["Business planning", "Financial management", "Marketing", "Sales", "Team building", "Fundraising", "Scaling", "Strategic management"],
        profile: {
            analytical: 80,
            technical: 70,
            creative: 90,
            communication: 85,
            leadership: 95,
            empathy: 75,
            organization: 80,
            practical: 90
        }
    },
    {
        id: "doctor",
        title: "Doctor",
        category: "Healthcare",
        icon: "⚕️",
        description: "Bemor davoladigan, tashxis qiladigan, turli kasalliklarni chuqur o'rganadigan va insoniy hayotni qutqaradigan professional.",
        skills: ["Medical knowledge", "Diagnosis", "Patient care", "Research", "Communication"],
        subjects: ["Biologiya", "Kimyo", "Matematika"],
        roadmap: ["Pre-medical studies", "Medical school", "Internship", "Residency", "Specialization", "Continuing education", "Research", "Practice"],
        profile: {
            analytical: 88,
            technical: 75,
            creative: 60,
            communication: 85,
            leadership: 70,
            empathy: 95,
            organization: 85,
            practical: 90
        }
    },
    {
        id: "nurse",
        title: "Nurse",
        category: "Healthcare",
        icon: "💊",
        description: "Bemor parvarish qiladigan, tashxisni o'tkaydigan, dori beradi va kasallik darajasini kuzatadigan professional.",
        skills: ["Patient care", "Medical procedures", "Communication", "Compassion", "Teamwork"],
        subjects: ["Biologiya", "Kimyo", "Psixologiya"],
        roadmap: ["Nursing fundamentals", "Anatomy & Physiology", "Pharmacology", "Clinical training", "Certification", "Specialization", "Leadership", "Advanced practice"],
        profile: {
            analytical: 75,
            technical: 75,
            creative: 60,
            communication: 85,
            leadership: 70,
            empathy: 95,
            organization: 85,
            practical: 90
        }
    },
    {
        id: "dentist",
        title: "Dentist",
        category: "Healthcare",
        icon: "🦷",
        description: "Tish emaligini kasalliklarini davoladigan va tish sog'ligini saqlaydi.",
        skills: ["Dental procedures", "Patient care", "Precision", "Communication", "Diagnosis"],
        subjects: ["Biologiya", "Kimyo", "Matematika"],
        roadmap: ["Pre-dental studies", "Dental school", "Clinical training", "Licensure", "Specialization", "Continuing education", "Practice management", "Advanced skills"],
        profile: {
            analytical: 82,
            technical: 85,
            creative: 60,
            communication: 80,
            leadership: 70,
            empathy: 85,
            organization: 85,
            practical: 90
        }
    },
    {
        id: "psychologist",
        title: "Psychologist",
        category: "Healthcare",
        icon: "🧠",
        description: "Odamlarning ruh holati va xulq-atvorini o'rganadi, masalalarni hal qiladi va mental salomatlik ta'minlaydi.",
        skills: ["Counseling", "Therapy", "Research", "Communication", "Empathy"],
        subjects: ["Psixologiya", "Biologiya", "Matematika"],
        roadmap: ["Psychology fundamentals", "Research methods", "Abnormal psychology", "Therapy", "Counseling skills", "Specialization", "Internship", "Practice"],
        profile: {
            analytical: 85,
            technical: 65,
            creative: 70,
            communication: 90,
            leadership: 70,
            empathy: 95,
            organization: 80,
            practical: 75
        }
    },
    {
        id: "engineer",
        title: "Mechanical Engineer",
        category: "Engineering",
        icon: "🔧",
        description: "Mashinalar va mexanik tizimlarni dizayn qiladigan, yasaydigan va boshqaradigan professional.",
        skills: ["CAD", "Mechanics", "Thermodynamics", "System design", "Problem-solving"],
        subjects: ["Matematika", "Fizika", "Informatika"],
        roadmap: ["Engineering fundamentals", "CAD software", "Thermodynamics", "Machine design", "Materials", "Manufacturing", "Simulation", "Advanced design"],
        profile: {
            analytical: 90,
            technical: 90,
            creative: 75,
            communication: 70,
            leadership: 70,
            empathy: 50,
            organization: 85,
            practical: 90
        }
    },
    {
        id: "electrical-engineer",
        title: "Electrical Engineer",
        category: "Engineering",
        icon: "⚡",
        description: "Elektr tizimlarini dizayn qiladigan, elektr mashinalarini yasaydigan va elektr energiyasini boshqaradi.",
        skills: ["Circuit design", "Power systems", "Electromagnetics", "CAD", "Simulation"],
        subjects: ["Matematika", "Fizika", "Informatika"],
        roadmap: ["Electrical fundamentals", "Circuit analysis", "Power systems", "Electronics", "Digital systems", "Control systems", "Simulation tools", "Advanced topics"],
        profile: {
            analytical: 92,
            technical: 95,
            creative: 70,
            communication: 70,
            leadership: 70,
            empathy: 50,
            organization: 85,
            practical: 85
        }
    },
    {
        id: "civil-engineer",
        title: "Civil Engineer",
        category: "Engineering",
        icon: "🏗️",
        description: "Ko'prik, binolar, yo'llar va boshqa infratuzilmalarni dizayn va yasaydigan professional.",
        skills: ["Structural design", "CAD", "Project management", "Construction", "Safety"],
        subjects: ["Matematika", "Fizika", "Geografiya"],
        roadmap: ["Engineering fundamentals", "Structural mechanics", "CAD software", "Construction materials", "Project management", "Codes & standards", "Sustainability", "Advanced design"],
        profile: {
            analytical: 88,
            technical: 85,
            creative: 70,
            communication: 75,
            leadership: 75,
            empathy: 55,
            organization: 90,
            practical: 90
        }
    },
    {
        id: "architect",
        title: "Architect",
        category: "Engineering",
        icon: "🏢",
        description: "Binolar va boshqa xususiy yoki ijtimoiy objektlarni dizayn qiladigan, estetika va funksionallikni birlashtiradigan professional.",
        skills: ["Architectural design", "CAD/BIM", "3D modeling", "Construction", "Aesthetics"],
        subjects: ["Matematika", "Dizayn", "Geografiya"],
        roadmap: ["Architecture fundamentals", "Design principles", "CAD/BIM", "3D modeling", "Building codes", "Materials", "Sustainability", "Advanced design"],
        profile: {
            analytical: 80,
            technical: 85,
            creative: 90,
            communication: 80,
            leadership: 75,
            empathy: 65,
            organization: 85,
            practical: 85
        }
    },
    {
        id: "teacher",
        title: "Teacher",
        category: "Education",
        icon: "📚",
        description: "O'quvchilarni o'rgatadigan, fan bilimlarini o'tkaydigan va ularning rivojlanishiga yordam beradigan professional.",
        skills: ["Teaching", "Communication", "Curriculum design", "Classroom management", "Empathy"],
        subjects: ["Pedagogy", "Psixologiya", "Subject matter"],
        roadmap: ["Subject expertise", "Pedagogy", "Classroom management", "Curriculum design", "Assessment", "Technology integration", "Professional development", "Leadership"],
        profile: {
            analytical: 75,
            technical: 65,
            creative: 80,
            communication: 90,
            leadership: 85,
            empathy: 95,
            organization: 85,
            practical: 80
        }
    },
    {
        id: "journalist",
        title: "Journalist",
        category: "Law va Jamoat",
        icon: "📰",
        description: "Yangi voqea-hodisalarni topadi, tahlil qiladi va jamiyatga ma'lumot etkazadigan professional.",
        skills: ["Reporting", "Writing", "Research", "Interview skills", "Critical thinking"],
        subjects: ["Til va adabiyat", "Tarix", "Jamiat fanlar"],
        roadmap: ["Writing fundamentals", "Journalism ethics", "Reporting skills", "Interview techniques", "Multimedia journalism", "Digital media", "Investigative journalism", "Editorial skills"],
        profile: {
            analytical: 85,
            technical: 70,
            creative: 85,
            communication: 90,
            leadership: 70,
            empathy: 85,
            organization: 80,
            practical: 75
        }
    },
    {
        id: "lawyer",
        title: "Lawyer",
        category: "Law va Jamoat",
        icon: "⚖️",
        description: "Qonuniy masalalarni o'rganadi, kliyentlarni vakilli qiladi, shartnomalarni tayyorlaydi va sud ishlarida qatnashadi.",
        skills: ["Legal research", "Writing", "Argumentation", "Negotiation", "Ethics"],
        subjects: ["Zakonchilik", "Tarix", "Kommunikatsiya"],
        roadmap: ["Law school", "Legal research", "Writing", "Moot court", "Internship", "Bar exam", "Specialization", "Practice"],
        profile: {
            analytical: 92,
            technical: 70,
            creative: 70,
            communication: 85,
            leadership: 80,
            empathy: 70,
            organization: 90,
            practical: 75
        }
    },
    {
        id: "pr-specialist",
        title: "PR Specialist",
        category: "Law va Jamoat",
        icon: "📣",
        description: "Branding, media relations va public communication orqali kompaniyaning image saqlash va taraqqiyasini boshqaradi.",
        skills: ["Communications", "Media relations", "Crisis management", "Branding", "Social media"],
        subjects: ["Kommunikatsiya", "Psixologiya", "Biznes"],
        roadmap: ["Communication fundamentals", "Media relations", "Social media strategy", "Crisis management", "Branding", "Event management", "Digital PR", "Strategic communication"],
        profile: {
            analytical: 75,
            technical: 70,
            creative: 85,
            communication: 95,
            leadership: 80,
            empathy: 85,
            organization: 85,
            practical: 75
        }
    }
];
