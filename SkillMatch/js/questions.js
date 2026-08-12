const QUESTIONS = [
    {
        id: 1,
        question: "Murakkab muammo yuzaga kelsa, odatda nima qilasiz?",
        options: [
            {
                text: "Muammoning sababini bosqichma-bosqich tahlil qilaman",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Yangi va noodatiy yechim o'ylab topaman",
                scores: { creative: 3, analytical: 1 }
            },
            {
                text: "Boshqa odamlar bilan maslahatlashaman",
                scores: { communication: 2, empathy: 2 }
            },
            {
                text: "Darhol amalda sinab ko'raman",
                scores: { practical: 3, technical: 1 }
            }
        ]
    },
    {
        id: 2,
        question: "Jamoa loyihasida roli qanday bo'lishni afzal ko'rasiz?",
        options: [
            {
                text: "Loyiha rahbari, rejalashtiruvchi",
                scores: { leadership: 3, organization: 2 }
            },
            {
                text: "Jamoada o'zingizning o'rnini bilgan ishchi",
                scores: { organization: 3, practical: 2 }
            },
            {
                text: "Jangovar g'oyalar keltiradigan kishi",
                scores: { creative: 3, communication: 1 }
            },
            {
                text: "Boshqalarning ehtiyojlarini tushunuvchi",
                scores: { empathy: 3, communication: 2 }
            }
        ]
    },
    {
        id: 3,
        question: "Yangi texnologiya o'rganishni qanday qabul qilasiz?",
        options: [
            {
                text: "Darhol amalda qo'llab, ta'rif o'qib olamiz",
                scores: { practical: 3, technical: 2 }
            },
            {
                text: "Chuqur ta'rif va qoida-qonunlarni tushunib olamiz",
                scores: { analytical: 3, technical: 2 }
            },
            {
                text: "G'oyaning ehtilofini ko'rib, o'z usulimdan foydalanamiz",
                scores: { creative: 2, technical: 2 }
            },
            {
                text: "Boshqalarni ko'rib, ulardan o'rganamiz",
                scores: { empathy: 2, communication: 2 }
            }
        ]
    },
    {
        id: 4,
        question: "Loyihaning deadline yaqin kelayotganda bilan nima qilasiz?",
        options: [
            {
                text: "Planni tekshirib, vaqtni to'g'ri taqsimlaymiz",
                scores: { organization: 3, analytical: 1 }
            },
            {
                text: "Tezda ishlash uchun eng unumli usulni topamiz",
                scores: { practical: 3, organization: 1 }
            },
            {
                text: "Jamoadagi hamma kishi uchun vazifa aniqlaymiz",
                scores: { leadership: 2, organization: 2 }
            },
            {
                text: "Stress balansi uchun hamma uchun vaqt xalisini topamiz",
                scores: { empathy: 3, communication: 1 }
            }
        ]
    },
    {
        id: 5,
        question: "Noqulay qaror aniqlash kerak bo'lsa, nima qilasiz?",
        options: [
            {
                text: "Barcha variantlarni tahlil qilib, eng yaxshi tanlaymiz",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "O'zimning o'ziga mos variantni tanlaymiz",
                scores: { practical: 2, creative: 2 }
            },
            {
                text: "Boshqa odamlarning fikrlarini tinglaymiz",
                scores: { communication: 2, empathy: 2 }
            },
            {
                text: "Jadvalga ko'ra qaror qabul qilamiz",
                scores: { organization: 3, leadership: 1 }
            }
        ]
    },
    {
        id: 6,
        question: "Kasbiy rivojlanish uchun eng muhim nima?",
        options: [
            {
                text: "Technical bilim va malaka",
                scores: { technical: 3, analytical: 1 }
            },
            {
                text: "Networking va muloqot qobiliyati",
                scores: { communication: 3, empathy: 1 }
            },
            {
                text: "Kreativ yechim va yangi g'oyalar",
                scores: { creative: 3, analytical: 1 }
            },
            {
                text: "Tartib-tuzum va samaradorlik",
                scores: { organization: 3, practical: 1 }
            }
        ]
    },
    {
        id: 7,
        question: "Boshqa odam bilan kelishmovchilikning oldini oladimi?",
        options: [
            {
                text: "Masalani sifatdan tahlil qilib, yechim chiqaramiz",
                scores: { analytical: 2, communication: 2 }
            },
            {
                text: "Ularning his-tuyg'ularini tushunish uchun suhbat qilamiz",
                scores: { empathy: 3, communication: 2 }
            },
            {
                text: "Birgalikda yangi g'oyalar ishlab chiqamiz",
                scores: { creative: 2, communication: 2 }
            },
            {
                text: "Vazifalarni aniq taqsimlab, muammo yo'q qilamiz",
                scores: { organization: 3, leadership: 1 }
            }
        ]
    },
    {
        id: 8,
        question: "Yangi loyihada qanday qadam boshlaysiz?",
        options: [
            {
                text: "Maqsad, marhala va budjeti aniqlab, rejani tuzamiz",
                scores: { organization: 3, analytical: 2 }
            },
            {
                text: "Eng tez va samarali usulni izlaymiz",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "Jamoadagi hamma odam uchun vazifa tayinlaymiz",
                scores: { leadership: 3, communication: 1 }
            },
            {
                text: "Mavjud materiallardan foydalanib ishlaymiz",
                scores: { practical: 2, creative: 2 }
            }
        ]
    },
    {
        id: 9,
        question: "Test yoki imtihonda qanday tayyorlanasiz?",
        options: [
            {
                text: "Butun materialni chuqur o'rganib, qoida-qonunlarni tushunib",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Dastlabki ma'lumotlardan boshlab, amalda sinab o'rganib",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "O'zimga mos usulni tanlab, o'sha yo'l bilan o'rganib",
                scores: { creative: 2, organization: 2 }
            },
            {
                text: "Boshqa odamlar bilan guruhlashib, birgalikda o'rganib",
                scores: { communication: 3, empathy: 1 }
            }
        ]
    },
    {
        id: 10,
        question: "Yangi til yoki dasturiy ta'minotni o'rganish uchun nima qilasiz?",
        options: [
            {
                text: "Rasmiy qo'llanmalarni o'qiyb, qoida-qonunlarni tushunib",
                scores: { analytical: 3, technical: 2 }
            },
            {
                text: "Tutorial va misol kodlarni ko'pib, amalda ishlayb",
                scores: { practical: 3, technical: 2 }
            },
            {
                text: "O'z usulimdan foydalanib, o'ziga mos yo'l topib",
                scores: { creative: 2, technical: 2 }
            },
            {
                text: "Boshqa odamlardan so'rab, ularni ko'rib o'rganib",
                scores: { communication: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 11,
        question: "Yaxshi yoki yomon natijaga qanday javob berasiz?",
        options: [
            {
                text: "Natijanis analyze qilib, sabablarni aniqlab",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Ushbu natijadan darsni olib, keyingi qadam qilish usuli o'ylab",
                scores: { practical: 3, analytical: 1 }
            },
            {
                text: "Ushbu natija haqida hamma bilan suhbat qilib",
                scores: { communication: 2, empathy: 2 }
            },
            {
                text: "Yangi usul va g'oyalarni sinab ko'rib",
                scores: { creative: 3, practical: 1 }
            }
        ]
    },
    {
        id: 12,
        question: "Hamma uchun foydalanuvchi interfeysini dizayn qilayotganda nima muhim?",
        options: [
            {
                text: "Foydalanuvchi qanday ishlashini tushunib, ma'lumot tahlil qilib",
                scores: { analytical: 2, empathy: 2 }
            },
            {
                text: "Visual taassurat va kreativ g'oyalar",
                scores: { creative: 3, empathy: 1 }
            },
            {
                text: "Qulay va samarali ishlash uchun ta'minot",
                scores: { practical: 3, organization: 1 }
            },
            {
                text: "Foydalanuvchi fikrlarini to'plashib, dizayn qilib",
                scores: { empathy: 3, communication: 2 }
            }
        ]
    },
    {
        id: 13,
        question: "Murakkab tizimni kichik bosqichlarga bo'layotganda qanday qilasiz?",
        options: [
            {
                text: "Tizimning barcha qismlarini tahlil qilib, teglari aniqlab",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Eng muhim qismlaridan boshlash uchun usul aniqlayb",
                scores: { practical: 3, organization: 1 }
            },
            {
                text: "Har bir bosqich uchun vaqt va resurlarni taqsimlab",
                scores: { organization: 3, analytical: 1 }
            },
            {
                text: "Jamoadagi hamma uchun va'zilari aniqlab",
                scores: { leadership: 2, organization: 2 }
            }
        ]
    },
    {
        id: 14,
        question: "Yangi texnologiya mahsuloti qanday ishlashini tushunish uchun nima qilasiz?",
        options: [
            {
                text: "Rasmiy hujjatlarni o'qiyb, qoida-qonunlarni tushunib",
                scores: { analytical: 3, technical: 2 }
            },
            {
                text: "Darhol ishni sinab ko'rib, tajriba olayb",
                scores: { practical: 3, technical: 2 }
            },
            {
                text: "O'zimga mos eksperiment qilib, yangisini o'ylab",
                scores: { creative: 2, technical: 2 }
            },
            {
                text: "O'qituvchi yoki ekspertdan so'rab",
                scores: { communication: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 15,
        question: "Jamoadagi tanash fikrdagi odam uchun nima qilasiz?",
        options: [
            {
                text: "Uning fikrini tahlil qilib, raziliqlarni topib",
                scores: { analytical: 2, communication: 2 }
            },
            {
                text: "Uning tuyg'ularini tushunib, mulohaza qilib",
                scores: { empathy: 3, communication: 2 }
            },
            {
                text: "Yangi yechim va g'oyalar ishlab chiqib",
                scores: { creative: 2, communication: 2 }
            },
            {
                text: "Jumada uchun yangi plan va rejtasma qilib",
                scores: { leadership: 3, organization: 1 }
            }
        ]
    },
    {
        id: 16,
        question: "Kitob o'qiyotganda yoki video ko'rayotganda fokusni qaysi tomoniga berasi?",
        options: [
            {
                text: "Asosiy g'oyalar va qoida-qonunlarni tushunishga",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Amaliy misollar va tatbiq usullarga",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "Yangi va qiziq nuqtalarga",
                scores: { creative: 2, analytical: 2 }
            },
            {
                text: "Mavzuni qanday taklif qilinganiga va bayon uslubiga",
                scores: { communication: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 17,
        question: "Xato yoki muvaffaqiyatsizlik qanday ta'sir qiladi?",
        options: [
            {
                text: "Nima noto'g'ri ketganini tahlil qilib, sabablarni topib",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Darsni olib, keyingi urinishlarda yaxshilashga harkalanib",
                scores: { practical: 3, leadership: 1 }
            },
            {
                text: "O'zimni boshqa qabul qilib, yangi usul o'ylab",
                scores: { creative: 3, practical: 1 }
            },
            {
                text: "Boshqalardan support olayb, birgalikda yechim topib",
                scores: { communication: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 18,
        question: "Loyiha davomida boshqa odamlarni motivatsiya qilish kerak bo'lsa nima qilasiz?",
        options: [
            {
                text: "Ularning ishlashining ahamiyatini va maqsadlarini ko'rsatib",
                scores: { leadership: 2, empathy: 2 }
            },
            {
                text: "Ularning kuchli tomonlarini ko'rib, ulga ishlar tayinlab",
                scores: { leadership: 3, empathy: 1 }
            },
            {
                text: "Yangi usul va yangi tanlovlarni o'rnatib",
                scores: { creative: 2, leadership: 2 }
            },
            {
                text: "Oraliq natijalari ko'rsatib, to'g'ri foydalanishlarni taqida qilib",
                scores: { communication: 3, organization: 1 }
            }
        ]
    },
    {
        id: 19,
        question: "Qanday ishlash sharoiti va muhiti afzal ko'rasiz?",
        options: [
            {
                text: "Oz va tartib-tuzum bilan, barcha narsani o'z joyida",
                scores: { organization: 3, analytical: 1 }
            },
            {
                text: "Aktiv va dinamik, oziq-ovqat va harakatlar",
                scores: { practical: 3, energy: 1 }
            },
            {
                text: "Kreativ va erkinchlik, yangi g'oyalar yuzaga chiqayotgan joy",
                scores: { creative: 3, technical: 1 }
            },
            {
                text: "Jamoaviy va hamkasablar bilan, ochiq suhbat",
                scores: { communication: 3, empathy: 1 }
            }
        ]
    },
    {
        id: 20,
        question: "Vakti belgilanmagan hayoliy loyihada qanday ishlaysiz?",
        options: [
            {
                text: "Iloji boricha tezda va samarali ishlayb",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "Barcha imkoni ishlatib, eng yaxshi natijaini chiqarayb",
                scores: { analytical: 3, organization: 2 }
            },
            {
                text: "O'zimga mos yo'l topib, o'zimni mutno sezib",
                scores: { creative: 2, practical: 2 }
            },
            {
                text: "Jamoadagi suhbatlar va fikrlarni tinglab",
                scores: { communication: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 21,
        question: "Siz loyihada eng yaxshisi bo'layotganda bilan nima qilasiz?",
        options: [
            {
                text: "O'zimning tezligini saqlayb, doimiy o'rganib",
                scores: { analytical: 2, organization: 2 }
            },
            {
                text: "Boshqa ish topib, yangi usullar sinab ko'rib",
                scores: { creative: 3, practical: 1 }
            },
            {
                text: "Boshqalarni o'rgatib, bilimi bo'lishib",
                scores: { leadership: 3, communication: 1 }
            },
            {
                text: "Jumada murosaga bo'lib, hamkasablarni to'ldib",
                scores: { empathy: 3, communication: 2 }
            }
        ]
    },
    {
        id: 22,
        question: "Yangi bugungi ishlashni qanday ko'rib olasiz?",
        options: [
            {
                text: "Nima noto'g'ri ketgani tahlil qilib, yaxshlashni boshlab",
                scores: { analytical: 3, organization: 1 }
            },
            {
                text: "Nima qilish mumkinligini aniqlayb, darhol o'zgartirish qilib",
                scores: { practical: 3, creative: 1 }
            },
            {
                text: "O'zimning fikrlarini aniqlab, qanday rivojlantirish mumkinligini tushunib",
                scores: { creative: 2, analytical: 2 }
            },
            {
                text: "Boshqa odamlar bilan suhbat qilib, ularning fikrlarini so'rab",
                scores: { communication: 3, empathy: 1 }
            }
        ]
    },
    {
        id: 23,
        question: "Ishning maqsadi va arzu haqida nima o'ylay siz?",
        options: [
            {
                text: "Maqsad aniq va o'lchashli bo'lishi kerak",
                scores: { analytical: 3, organization: 2 }
            },
            {
                text: "Barcha imkonlarni foydalanib, natijalanish kerak",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "O'zimning maqsadlariman solishtirish muhim",
                scores: { creative: 2, empathy: 2 }
            },
            {
                text: "Jamoadagi maqsadlar bilan mos kelishi kerak",
                scores: { leadership: 2, communication: 2 }
            }
        ]
    },
    {
        id: 24,
        question: "Yilik operatsiyasining boshiga siz nima qilasiz?",
        options: [
            {
                text: "Maqsad, marhala va budjeti aniqlab, rejani tuzamiz",
                scores: { organization: 3, analytical: 2 }
            },
            {
                text: "Eng muhim va samarali ish usullarini topamiz",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "O'zimga yangi va jozibali ish usullarini o'ylab",
                scores: { creative: 3, analytical: 1 }
            },
            {
                text: "Jumada uchun yangi va ilhomlantiruvchi maqsadlarni qo'yamiz",
                scores: { leadership: 3, empathy: 1 }
            }
        ]
    },
    {
        id: 25,
        question: "Yadlama yoki maqolalar ko'paygan vaqtda nima qilasiz?",
        options: [
            {
                text: "Barcha narsani organize qilib, tasnif qilib qo'yib",
                scores: { organization: 3, analytical: 1 }
            },
            {
                text: "Darhol eng muhimini tanlab, ishlayb",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "Yangi usul va sistemani o'ylab, qo'llayb",
                scores: { creative: 2, organization: 2 }
            },
            {
                text: "Boshqa konga ish taqsimlab, birgalikda ishlayb",
                scores: { leadership: 2, communication: 2 }
            }
        ]
    },
    {
        id: 26,
        question: "Karyera yo'lini qanday ko'rib olasiz?",
        options: [
            {
                text: "Aniq maqsad va bosqichlashga bo'lgan rejayi bilan",
                scores: { organization: 3, analytical: 2 }
            },
            {
                text: "Amaliy bilim va ishlash tajribani kasbilashtirib",
                scores: { practical: 3, technical: 2 }
            },
            {
                text: "O'zimning yo'lini topib, o'ziga mos ish tanlab",
                scores: { creative: 2, empathy: 2 }
            },
            {
                text: "Jamoadagi va yetakchilarning rahbarligini o'zlashtirish",
                scores: { leadership: 3, communication: 1 }
            }
        ]
    },
    {
        id: 27,
        question: "Marzali ish yoki muammoga nisbatan qanday turuvchisiz?",
        options: [
            {
                text: "Muammoni chuqur tahlil qilib, yechimni topib",
                scores: { analytical: 3, technical: 1 }
            },
            {
                text: "Tezda harakat qilib, darhol yechim topib",
                scores: { practical: 3, leadership: 1 }
            },
            {
                text: "Yangi yechim va noodatiy usullarni o'ylab",
                scores: { creative: 3, analytical: 1 }
            },
            {
                text: "Boshqa odamlar bilan hamkori ishlayb, birgalikda yechim topib",
                scores: { communication: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 28,
        question: "O'zingizning eng kuchli tomoningiz nima deb o'ylay siz?",
        options: [
            {
                text: "Muammo yechish va tahlil qobiliyat",
                scores: { analytical: 3, technical: 1 }
            },
            {
                text: "Amaliy va tezlik bilani odam",
                scores: { practical: 3, technical: 1 }
            },
            {
                text: "Yangi g'oyalar va kreativlik",
                scores: { creative: 3, analytical: 1 }
            },
            {
                text: "Odamlar bilan ishlash va rahbarlik",
                scores: { leadership: 2, empathy: 2 }
            }
        ]
    },
    {
        id: 29,
        question: "Boylik va pul haqida qanday fikr-mulohazasiz?",
        options: [
            {
                text: "Barcha xarajlarni tahlil qilib, bodoqilash kerak",
                scores: { analytical: 2, organization: 2 }
            },
            {
                text: "Zaruriy va foydali ishlarni alohida qo'yib ishlash kerak",
                scores: { practical: 2, organization: 2 }
            },
            {
                text: "O'zimning qadriyati va maqsadlarimni rivojlantirish kerak",
                scores: { creative: 2, empathy: 2 }
            },
            {
                text: "Jamadagi va o'zgochar manfaatlarini tenglashtirishni tushunish kerak",
                scores: { communication: 2, leadership: 2 }
            }
        ]
    },
    {
        id: 30,
        question: "O'zimizni tasvirlasak, eng mohim xususiyat nima bo'lardi?",
        options: [
            {
                text: "Mantiqiy va tahlilchi, muammolarni chuq o'rganadigan",
                scores: { analytical: 3, technical: 1 }
            },
            {
                text: "Amaliy va jiyalijamiyat, amalga oshiradigan",
                scores: { practical: 3, leadership: 1 }
            },
            {
                text: "Kreativ va yangi g'oyaboza, innovatsiya qiluvchi",
                scores: { creative: 3, analytical: 1 }
            },
            {
                text: "Eziydor va muloqot qabiliyatli, rahbarlik qiladi",
                scores: { leadership: 2, empathy: 2 }
            }
        ]
    }
];
