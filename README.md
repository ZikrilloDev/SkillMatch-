# SkillMatch — Kasbiy Yo'nalish Testi

**"Qobiliyatingizni aniqlang. O'zingizga mos kasbni toping."**

SkillMatch — professional va zamonaviy kasb tanlash web-platformasi. Foydalanuvchilarga 30 ta psixologik va kasbiy yo'naltiruvchi savol beradi, javoblarni tahlil qiladi va qobiliyatlariga eng mos keladigan TOP-5 kasbni aniqlaydi.

## 🎯 Xususiyatlar

- ✅ **30 ta Savol** — Kasbiy yo'naltirish uchun maxsus tuzilgan savollar
- ✅ **8 ta Qobiliyat** — Analitik fikrlash, Texnik qobiliyat, Kreativlik va boshqalar
- ✅ **60+ Kasb** — IT, Engineering, Business, Creative, Healthcare, Education va boshqa sohalar
- ✅ **Intellektual Algoritm** — Random natija emas, matematik tahlil asosida
- ✅ **TOP-5 Natijalar** — Eng mos 5 ta kasbning foiz bilan ko'rsatilishi
- ✅ **Professional Dashboard** — Qobiliyat grafigi, kuchli tomonlar, rivojlanish yo'li
- ✅ **Responsive Design** — Desktop, Tablet, Mobile-da mukammal ishlash
- ✅ **LocalStorage** — Natijalarni saqlash va qayta ko'rish imkoniyati
- ✅ **Vercel Ready** — Statik sayt, no backend required

## 🚀 Texnologiyalar

- **HTML5** — Semantik markup
- **CSS3** — Modern styling va animations
- **Vanilla JavaScript** — Hech qanday framework siz
- **localStorage** — Natijalarni saqlash

**Ishlatilmagan:** React, Vue, Bootstrap, Tailwind, APIs

## 📁 Papka Strukturasi

```
SkillMatch/
├── index.html           # Bosh sahifa
├── test.html            # Test sahifasi
├── result.html          # Natija sahifasi
├── favicon.svg          # Logo
├── README.md            # Bu fayl
├── .gitignore           # Git ignore
├── css/
│   └── style.css        # Barcha stillar
└── js/
    ├── questions.js     # 30 ta savol
    ├── careers.js       # 60+ kasb
    ├── test.js          # Test logikasi
    └── result.js        # Natija logikasi
```

## 🏃 Qanday Ishga Tushirish

### Lokal Rivojlanish

1. **Fayl yuklab oling yoki clone qiling:**
```bash
git clone https://github.com/yourusername/skillmatch.git
cd skillmatch
```

2. **VS Code Live Server bilan ochish:**
   - `index.html` faylga o'ng-click qiling
   - "Open with Live Server" ni tanlang
   - Brauzer avtomatik ochiladi

3. **Yoki oddiy browser bilan:**
   - `index.html` faylni brauzerga drag-drop qiling

## 🌐 Vercel-da Deploy Qilish

1. **GitHub-ga push qiling:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Vercel-ga ulanish:**
   - [Vercel](https://vercel.com) saytiga kiring
   - "New Project" ni bosing
   - GitHub repo-ni tanlang
   - Deploy qiling (hech qanday konfiguratsiya talab emas)

3. **Siz tayyor!** — `https://yourdomain.vercel.app` dan foydalaning

## 📊 Test Jarayoni

1. **Bosh sahifa** — Proyekt haqida ma'lumot va CTA button
2. **Test sahifasi** — 30 ta savol, 4 ta javob variantı bilan
3. **Progress tracking** — Progress bar va soalliq counter
4. **Javob tahlili** — Har bir javob 8 ta qobiliyatga score beradi
5. **Natija** — TOP-5 kasb, qobiliyat grafigi, rivojlanish yo'li

## 🎓 8 Asosiy Qobiliyatlar

1. **Analitik fikrlash** (Analytical)
2. **Texnik qobiliyat** (Technical)
3. **Kreativlik** (Creative)
4. **Muloqot** (Communication)
5. **Liderlik** (Leadership)
6. **Empatiya** (Empathy)
7. **Tashkilotchilik** (Organization)
8. **Amaliy qobiliyat** (Practical)

## 💼 Kasb Kategoriyalari

- **IT va Texnologiya** — Developer, Engineer, Designer
- **Engineering** — Mechanical, Electrical, Civil, Architect
- **Business** — Manager, Analyst, Entrepreneur
- **Creative** — Designer, Animator, Copywriter
- **Healthcare** — Doctor, Nurse, Psychologist
- **Education** — Teacher, Lecturer
- **Law va Jamoat** — Lawyer, Journalist, PR Specialist

## 📱 Responsive Breakpoints

```css
1200px+  /* Desktop */
992px    /* Laptop */
768px    /* Tablet */
576px    /* Phone */
480px    /* Small phone */
```

Barcha qurilmalarda horizontal scroll yo'q, kartalar bitta ustunga tushadi.

## 🎨 Design Sistema

### Ranglar
- Primary: `#6C63FF`
- Secondary: `#8B5CF6`
- Dark: `#0F172A`
- Text: `#334155`
- Background: `#F8FAFC`
- Success: `#22C55E`
- Warning: `#F59E0B`
- Danger: `#EF4444`

### Animatsiyalar
- Transition: `0.3s ease`
- Hover effects minimal va professional
- Loading states smooth va qiziqarli

## 📚 localStorage Schema

```javascript
// Test javoblari
localStorage.skillmatch_answers = [0, 2, 1, ...]

// Normalizatsiya qilingan qobiliyat skori (0-100)
localStorage.skillmatch_scores = {
    analytical: 85,
    technical: 92,
    creative: 78,
    ...
}

// Test yakunlangan vaqt
localStorage.skillmatch_completed_at = "2026-08-13T12:30:00Z"
```

## ✨ Kadrni Qayta Ishlash

```
Test sahifasi → Natija sahifasi → "Testni qayta ishlash" → localStorage tozalanadi → Test sahifasiga qaytadi
```

## 🔐 Xavfsizlik

- Hech qanday API key talab qilmaydi
- Hech qanday server-side requests
- Barcha ma'lumotlar clientda jamlashtiriladi
- Natijalar faqat localStorage-da saqlanadi (private)

## 📝 Matnlar

- **Til:** O'zbek tili
- **Uslub:** Professional va tabiiy
- **Suhbat toni:** Yuzga yuziga, qo'llab-quvvatlash

## 🧪 Tekshirish Ro'yxati

- [x] 30 ta savol, har biri 4 ta variantga ega
- [x] 60+ kasb bazasi
- [x] Matching algoritm ishlaydi
- [x] localStorage-ga saqlash
- [x] result.html reqs to'g'ri
- [x] Modal ochilishi-yopilishi
- [x] Responsive design
- [x] Animatsiyalar smooth
- [x] Validation messages ko'rinadi
- [x] Menu hamburger mobile-da
- [x] Share button
- [x] Console errors yo'q

## 🤝 Hissa Qo'shish

O'zgartirishlar uchun pull request yuboring!

## 📄 Litsenziya

MIT License - Erkin foydalanish va taqqoslash mumkin.

---

**Yaratildi:** 2026 yil August

**Muallif:** SkillMatch Team

**Website:** https://skillmatch.vercel.app

**Slogan:** Qobiliyatingizni aniqlang. O'zingizga mos kasbni toping.
