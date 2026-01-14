"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Locale = "en" | "ur" | "ar"

interface Translations {
    [key: string]: {
        [key in Locale]: string
    }
}

const translations: Translations = {
    // Common
    "nav.features": { en: "Features", ur: "خصوصیات", ar: "الميزات" },
    "nav.about": { en: "About", ur: "ہمارے بارے میں", ar: "حول" },
    "nav.scholars": { en: "Scholars", ur: "علماء", ar: "العلماء" },
    "nav.speakers": { en: "Speakers", ur: "مقررین", ar: "المتحدثون" },
    "nav.lectures": { en: "Lectures", ur: "لیکچرز", ar: "المحاضرات" },
    "nav.community": { en: "Community", ur: "کمیونٹی", ar: "المجتمع" },
    "nav.contact": { en: "Contact", ur: "رابطہ", ar: "اتصل بنا" },

    // Hero
    "hero.badge": { en: "🚀 Coming Soon — Android & iOS", ur: "🚀 جلد آ رہا ہے — اینڈرائیڈ اور آئی او ایس", ar: "🚀 قريباً — أندرويد وآي أو إس" },
    "hero.title1": { en: "Your Complete", ur: "آپ کا مکمل", ar: "رفيقك الإسلامي" },
    "hero.title2": { en: "Islamic Companion", ur: "اسلامی ساتھی", ar: "المتكامل" },
    "hero.description": { en: "Connect with millions in a community built on knowledge, faith, and spiritual growth. Access Scholars, Comparative Religion, History, and Books—all in one app.", ur: "علم، ایمان اور روحانی ترقی پر مبنی کمیونٹی میں لاکھوں لوگوں سے جڑیں۔ علماء، تقابلِ ادیان، تاریخ اور کتب—سب ایک ہی ایپ میں۔", ar: "تواصل مع الملايين في مجتمع مبني على المعرفة والإيمان والنمو الروحي. الوصول إلى العلماء، الأديان المقارنة، التاريخ، والكتب — كل ذلك في تطبيق واحد." },
    "hero.btn.waitlist": { en: "Join Waitlist", ur: "انتظار کی فہرست میں شامل ہوں", ar: "انضم إلى قائمة الانتظار" },
    "hero.btn.features": { en: "Explore Features", ur: "خصوصیات دیکھیں", ar: "استكشاف الميزات" },
    "hero.360.deen": { en: "Complete Deen", ur: "مکمل دین", ar: "دين كامل" },

    // Aspect Labels
    "aspect.worship": { en: "Worship", ur: "عبادت", ar: "العبادة" },
    "aspect.politics": { en: "Politics", ur: "سیاست", ar: "السياسة" },
    "aspect.economy": { en: "Economy", ur: "معیشت", ar: "الاقتصاد" },
    "aspect.history": { en: "History", ur: "تاریخ", ar: "التاريخ" },
    "aspect.science": { en: "Science", ur: "سائنس", ar: "العلوم" },
    "aspect.culture": { en: "Culture", ur: "ثقافت", ar: "الثقافة" },
    "aspect.society": { en: "Society", ur: "معاشرہ", ar: "المجتمع" },
    "aspect.ethics": { en: "Ethics", ur: "اخلاقیات", ar: "الأخلاق" },

    // CTA
    "cta.badge": { en: "🚀 Early Access", ur: "🚀 جلد رسائی", ar: "🚀 وصول مبكر" },
    "cta.title": { en: "Ready to Join DeenSphere?", ur: "کیا آپ دین اسفیئر میں شامل ہونے کے لیے تیار ہیں؟", ar: "جاهز للانضمام إلى DeenSphere؟" },
    "cta.description": { en: "Be among the first to access our platform. Sign up for early access and get exclusive updates about our mobile app launch.", ur: "ہمارے پلیٹ فارم تک رسائی حاصل کرنے والے پہلے لوگوں میں شامل ہوں۔ جلد رسائی کے لیے سائن اپ کریں اور ہماری موبائل ایپ کے آغاز کے بارے میں خصوصی اپ ڈیٹس حاصل کریں۔", ar: "كن من بين أوائل من يصلون إلى منصتنا. اشترك للحصول على وصول مبكر وتلقي تحديثات حصرية حول إطلاق تطبيقنا المحمول." },
    "cta.feature1": { en: "Early access to all features", ur: "تمام خصوصیات تک جلد رسائی", ar: "وصول مبكر لجميع الميزات" },
    "cta.feature2": { en: "Exclusive community membership", ur: "خصوصی کمیونٹی ممبرشپ", ar: "عضوية مجتمعية حصرية" },
    "cta.feature3": { en: "Direct connection with scholars", ur: "علماء کے ساتھ براہ راست رابطہ", ar: "تواصل مباشر مع العلماء" },
    "cta.form.title": { en: "Get Notified", ur: "اطلاع حاصل کریں", ar: "احصل على اشعار" },
    "cta.form.waitlist": { en: "Join 10,000+ waiting", ur: "10,000+ انتظار کرنے والوں میں شامل ہوں", ar: "انضم إلى أكثر من 10,000 منتظر" },
    "cta.form.name": { en: "Your Name", ur: "آپ کا نام", ar: "اسمك" },
    "cta.form.email": { en: "Email Address", ur: "ای میل ایڈریس", ar: "البريد الإلكتروني" },
    "cta.form.placeholder.name": { en: "Enter your name", ur: "اپنا نام درج کریں", ar: "أدخل اسمك" },
    "cta.form.placeholder.email": { en: "your@email.com", ur: "آپ کا ای میل", ar: "your@email.com" },
    "cta.form.btn": { en: "Get Notified", ur: "اطلاع حاصل کریں", ar: "احصل على اشعار" },
    "cta.form.btn.joining": { en: "Joining...", ur: "شامل ہو رہے ہیں...", ar: "جاري الانضمام..." },
    "cta.form.privacy": { en: "We respect your privacy. No spam, ever.", ur: "ہم آپ کی رازداری کا احترام کرتے ہیں۔ کبھی کوئی سپیم نہیں۔", ar: "نحن نحترم خصوصيتك. لا رسائل مزعجة أبداً." },
    "cta.success.title": { en: "You're on the list! 🎉", ur: "آپ فہرست میں شامل ہیں! 🎉", ar: "أنت في القائمة! 🎉" },
    "cta.success.desc": { en: "We'll notify you when DeenSphere launches.", ur: "جب دین اسفیئر لانچ ہوگا تو ہم آپ کو مطلع کریں گے۔", ar: "سنقوم بإخطارك عند إطلاق DeenSphere." },

    // Features Section (Main)
    "features.badge": { en: "Powerful Features", ur: "طاقتور خصوصیات", ar: "ميزات قوية" },
    "features.title": { en: "Everything You Need", ur: "سب کچھ جو آپ کو چاہیے", ar: "كل ما تحتاجه" },
    "features.description": { en: "A comprehensive platform designed to support your Islamic journey.", ur: "آپ کے اسلامی سفر میں تعاون کے لیے ڈیزائن کیا گیا ایک جامع پلیٹ فارم۔", ar: "منصة شاملة مصممة لدعم رحلتك الإسلامية." },
    "features.quran.title": { en: "Quranic Access", ur: "قرآنی رسائی", ar: "الوصول إلى القرآن" },
    "features.quran.desc": { en: "Study the Quran with translations, tafsir, and scholarly commentary.", ur: "ترجمہ، تفسیر اور علمی تبصرے کے ساتھ قرآن کا مطالعہ کریں۔", ar: "دراسة القرآن مع الترجمات والتفسير والتعليقات العلمية." },
    "features.community.title": { en: "Community Forum", ur: "کمیونٹی فورم", ar: "منتدى المجتمع" },
    "features.community.desc": { en: "Engage in meaningful discussions with Muslims worldwide.", ur: "دنیا بھر کے مسلمانوں کے ساتھ بامعنی بات چیت میں مصروف رہیں۔", ar: "الانخراط في مناقشات هادفة مع المسلمين في جميع أنحاء العالم." },
    "features.learning.title": { en: "Learning Paths", ur: "سیکھنے کے راستے", ar: "مسارات التعلم" },
    "features.learning.desc": { en: "Structured courses from beginner to advanced Islamic knowledge.", ur: "ابتدائی سے اعلی درجے کے اسلامی علم تک منظم کورسز۔", ar: "دورات منظمة من المعرفة الإسلامية المبتدئة إلى المتقدمة." },
    "features.safety.title": { en: "Moderated Safety", ur: "اعتدال پسند حفاظت", ar: "سلامة مراقبة" },
    "features.safety.desc": { en: "A respectful environment with active community moderation.", ur: "فعال کمیونٹی اعتدال کے ساتھ ایک معزز ماحول۔", ar: "بيئة محترمة مع إشراف مجتمعي نشط." },
    "features.search.title": { en: "Smart Search", ur: "سمارٹ سرچ", ar: "بحث ذكي" },
    "features.search.desc": { en: "Find Islamic knowledge, hadith, and scholarly articles instantly.", ur: "اسلامی علم، حدیث اور علمی مضامین فوری طور پر تلاش کریں۔", ar: "ابحث عن المعرفة الإسلامية والأحاديث والمقالات العلمية على الفور." },
    "features.reminders.title": { en: "Daily Reminders", ur: "روزانہ کی یاددہانی", ar: "تذكيرات يومية" },
    "features.reminders.desc": { en: "Personalized notifications for prayers, wisdom, and learning.", ur: "نماز، حکمت اور سیکھنے کے لیے ذاتی نوعیت کی اطلاعات۔", ar: "إشعارات شخصية للصلاة والحكمة والتعلم." },
    "features.learn_more": { en: "Learn more", ur: "مزید جانیں", ar: "تعلم المزيد" },

    // Footer
    "footer.tagline": { en: "Empowering your Islamic journey through technology and community.", ur: "ٹیکنالوجی اور کمیونٹی کے ذریعے آپ کے اسلامی سفر کو بااختیار بنانا۔", ar: "تمكين رحلتك الإسلامية من خلال التكنولوجيا والمجتمع." },
    "footer.quick_links": { en: "Quick Links", ur: "فوری لنکس", ar: "روابط سريعة" },
    "footer.resources": { en: "Resources", ur: "ذرائع", ar: "الموارد" },
    "footer.learn": { en: "Learn", ur: "سیکھیں", ar: "تعلم" },
    "footer.connect": { en: "Connect", ur: "رابطہ کریں", ar: "اتصل" },
    "footer.rights": { en: "All rights reserved.", ur: "جملہ حقوق محفوظ ہیں۔", ar: "جميع الحقوق محفوظة." },
    "footer.home": { en: "Home", ur: "ہمارے ہوم", ar: "الرئيسية" },

    // Community
    "community.badge": { en: "Our Community", ur: "ہماری کمیونٹی", ar: "مجتمعنا" },
    "community.title": { en: "A Growing Global Movement", ur: "ایک بڑھتی ہوئی عالمی تحریک", ar: "حركة عالمية متنامية" },
    "community.description": { en: "Join millions of Muslims united in faith, learning, and community building.", ur: "ایمان، سیکھنے اور کمیونٹی کی تعمیر میں متحد لاکھوں مسلمانوں میں شامل ہوں۔", ar: "انضم إلى ملايين المسلمين متحدين في الإيمان والتعلم وبناء المجتمع." },
    "community.stats.members": { en: "Global Members", ur: "عالمی ممبران", ar: "أعضاء عالميون" },
    "community.stats.discussions": { en: "Daily Discussions", ur: "روزانہ کی بحثیں", ar: "مناقشات يومية" },
    "community.stats.resources": { en: "Learning Resources", ur: "سیکھنے کے وسائل", ar: "موارد تعليمية" },
    "community.stats.scholars": { en: "Scholarship Givers", ur: "سکالرشپ دینے والے", ar: "مانحو المنح الدراسية" },
    "community.values.title": { en: "What Makes DeenSphere Special", ur: "دین اسفیئر کو کیا خاص بناتا ہے", ar: "ما الذي يجعل DeenSphere مميزاً" },
    "community.values.description": { en: "We're committed to creating a space where authentic Islamic knowledge thrives, diverse voices are respected, and everyone can grow spiritually.", ur: "ہم ایک ایسی جگہ بنانے کے لیے پرعزم ہیں جہاں مستند اسلامی علم پھلتا پھولتا ہے، متنوع آوازوں کا احترام کیا جاتا ہے، اور ہر کوئی روحانی طور پر ترقی کر سکتا ہے۔", ar: "نحن ملتزمون بخلق مساحة تزدهر فيها المعرفة الإسلامية الأصيلة، وتحترم الأصوات المتنوعة، ويمكن للجميع النمو روحياً." },
    "community.values.v1": { en: "Authentic Knowledge", ur: "مستند علم", ar: "معرفة أصيلة" },
    "community.values.v2": { en: "Safe Community", ur: "محفوظ کمیونٹی", ar: "مجتمع آمن" },
    "community.values.v3": { en: "Cultural Diversity", ur: "ثقافتی تنوع", ar: "تنوع ثقافي" },

    // Features Page
    "features_page.badge": { en: "8 Powerful Features", ur: "8 طاقتور خصوصیات", ar: "8 ميزات قوية" },
    "features_page.title": { en: "App Features", ur: "ایپ کی خصوصیات", ar: "ميزات التطبيق" },
    "features_page.description": { en: "Explore the powerful features that will be available in the Deen Sphere mobile app.", ur: "دین اسفیئر موبائل ایپ میں دستیاب طاقتور خصوصیات کو دیکھیں۔", ar: "استكشف الميزات القوية التي ستكون متاحة في تطبيق Deen Sphere المحمول." },
    "features_page.download.title": { en: "Download the Deen Sphere App", ur: "دین اسفیئر ایپ ڈاؤن لوڈ کریں", ar: "تحميل تطبيق Deen Sphere" },
    "features_page.download.description": { en: "Scan the QR code with your phone camera to download the app, or click the buttons below.", ur: "ایپ ڈاؤن لوڈ کرنے کے لیے اپنے فون کے کیمرے سے کیو آر کوڈ اسکین کریں، یا نیچے دیئے گئے بٹنوں پر کلک کریں۔", ar: "امسح رمز الاستجابة السريعة بكاميرا هاتفك لتحميل التطبيق، أو انقر على الأزرار أدناه." },

    // Individual Features (Detailed)
    "features.scholars.title": { en: "Connect with Scholars", ur: "علماء سے رابطہ کریں", ar: "تواصل مع العلماء" },
    "features.scholars.highlight": { en: "Scholars", ur: "علماء", ar: "العلماء" },
    "features.scholars.desc": { en: "Direct access to verified Islamic scholars. Get fatwas, spiritual guidance, and Islamic knowledge through private chat, video calls, and live sessions.", ur: "تصدیق شدہ اسلامی علماء تک براہ راست رسائی۔ نجی چیٹ، ویڈیو کالز اور لائیو سیشنز کے ذریعے فتوے، روحانی رہنمائی اور اسلامی علم حاصل کریں۔", ar: "وصول مباشر إلى العلماء المسلمين المعتمدين. احصل على الفتاوى والإرشاد الروحي والمعرفة الإسلامية من خلال الدردشة الخاصة والمكالمات المرئية والجلسات المباشرة." },
    "features.scholars.sub1.title": { en: "Private Chat", ur: "نجی چیٹ", ar: "دردشة خاصة" },
    "features.scholars.sub1.desc": { en: "1-on-1 messaging", ur: "ون آن ون میسجنگ", ar: "رسائل خاصة" },
    "features.scholars.sub2.title": { en: "Booking", ur: "بکنگ", ar: "حجز" },
    "features.scholars.sub2.desc": { en: "Schedule calls", ur: "کالز شیڈول کریں", ar: "جدولة المكالمات" },

    "features.religion.title": { en: "Comparative Religion", ur: "تقابلِ ادیان", ar: "مقارنة الأديان" },
    "features.religion.highlight": { en: "Religion", ur: "ادیان", ar: "الأديان" },
    "features.religion.desc": { en: "Understand different faiths and their comparison with Islam. Evidence-based theological analysis to strengthen your knowledge.", ur: "مختلف مذاہب اور ان کا اسلام کے ساتھ موازنہ سمجھیں۔ اپنے علم کو مضبوط کرنے کے لیے ثبوتوں پر مبنی مذہبی تجزیہ۔", ar: "فهم الأديان المختلفة ومقارنتها بالإسلام. تحليل لاهوتي مبني على الأدلة لتعزيز معرفتك." },
    "features.religion.sub1.title": { en: "Deep Analysis", ur: "گہرا تجزیہ", ar: "تحليل عميق" },
    "features.religion.sub1.desc": { en: "Trinity, Monotheism, and more", ur: "تثلیث، توحید، اور مزید", ar: "الثالوث، التوحيد، وأكثر" },

    "features.library.title": { en: "Islamic Library", ur: "اسلامی لائبریری", ar: "المكتبة الإسلامية" },
    "features.library.highlight": { en: "Library", ur: "لائبریری", ar: "المكتبة" },
    "features.library.desc": { en: "Your pocket library with classical and contemporary Islamic books. Read, listen, and learn on the go.", ur: "کلاسیکی اور عصری اسلامی کتب کے ساتھ آپ کی جیبی لائبریری۔ چلتے پھرتے پڑھیں، سنیں اور سیکھیں۔", ar: "مكتبتك الجيبية مع الكتب الإسلامية الكلاسيكية والمعاصرة. اقرأ واستمع وتعلم أثناء التنقل." },
    "features.library.sub1.title": { en: "E-Books", ur: "ای بکس", ar: "كتب إلكترونية" },
    "features.library.sub1.desc": { en: "Read anywhere", ur: "کہیں بھی پڑھیں", ar: "اقرأ في أي مكان" },
    "features.library.sub2.title": { en: "Offline", ur: "آف لائن", ar: "بدون إنترنت" },
    "features.library.sub2.desc": { en: "Download books", ur: "کتابیں ڈاؤن لوڈ کریں", ar: "تحميل الكتب" },

    "features.history_pol.title": { en: "History, Politics & Economy", ur: "تاریخ، سیاست اور معیشت", ar: "التاريخ والسياسة والاقتصاد" },
    "features.history_pol.highlight": { en: "Economy", ur: "معیشت", ar: "الاقتصاد" },
    "features.history_pol.desc": { en: "Explore the complete Islamic civilization. From the Golden Age to modern economic systems and governance.", ur: "مکمل اسلامی تہذیب کو دریافت کریں۔ سنہری دور سے لے کر جدید معاشی نظام اور حکمرانی تک۔", ar: "استكشف الحضارة الإسلامية الكاملة. من العصر الذهبي إلى النظم الاقتصادية الحديثة والحوكمة." },
    "features.history_pol.sub1.title": { en: "Islamic Politics", ur: "اسلامی سیاست", ar: "السياسة الإسلامية" },
    "features.history_pol.sub1.desc": { en: "Governance & Justice", ur: "حکمرانی اور انصاف", ar: "الحوكمة والعدالة" },
    "features.history_pol.sub2.title": { en: "History Timeline", ur: "تاریخ کی ٹائم لائن", ar: "الخط الزمني للتاريخ" },
    "features.history_pol.sub2.desc": { en: "Interactive events", ur: "انٹرایکٹو واقعات", ar: "أحداث تفاعلية" },

    "features.debates.title": { en: "Islamic Debates", ur: "اسلامی مباحثے", ar: "المناظرات الإسلامية" },
    "features.debates.highlight": { en: "Debates", ur: "مباحثے", ar: "المناظرات" },
    "features.debates.desc": { en: "Watch and participate in respectful Islamic debates. Learn how to defend your faith with knowledge and wisdom.", ur: "باوقار اسلامی مباحثے دیکھیں اور ان میں حصہ لیں۔ علم اور حکمت کے ساتھ اپنے ایمان کا دفاع کرنا سیکھیں۔", ar: "شاهد وشارك في المناظرات الإسلامية المحترمة. تعلم كيفية الدفاع عن إيمانك بالمعرفة والحكمة." },
    "features.debates.sub1.title": { en: "Live Debates", ur: "لائیو مباحثے", ar: "مناظرات مباشرة" },
    "features.debates.sub1.desc": { en: "Real-time discussions", ur: "فوری گفتگو", ar: "نقاشات فورية" },
    "features.debates.sub2.title": { en: "Community", ur: "کمیونٹی", ar: "المجتمع" },
    "features.debates.sub2.desc": { en: "Join discussions", ur: "بحث میں شامل ہوں", ar: "انضم للنقاش" },

    "features.inventions.title": { en: "Muslim Inventions", ur: "مسلمانوں کی ایجادات", ar: "اختراعات المسلمين" },
    "features.inventions.highlight": { en: "Inventions", ur: "ایجادات", ar: "الاختراعات" },
    "features.inventions.desc": { en: "Discover the incredible contributions Muslims made to science, medicine, mathematics, and technology.", ur: "سائنس، طب، ریاضی اور ٹیکنالوجی میں مسلمانوں کی شاندار خدمات دریافت کریں۔", ar: "اكتشف المساهمات المذهلة التي قدمها المسلمون في العلوم والطب والرياضيات والتكنولوجيا." },
    "features.inventions.sub1.title": { en: "Discoveries", ur: "دریافتیں", ar: "اکتشافات" },
    "features.inventions.sub1.desc": { en: "Scientific breakthroughs", ur: "سائنسی کامیابیاں", ar: "طفرات علمية" },
    "features.inventions.sub2.title": { en: "Timeline", ur: "ٹائم لائن", ar: "الخط الزمني" },
    "features.inventions.sub2.desc": { en: "Historical inventions", ur: "تاریخی ایجادات", ar: "اختراعات تاريخية" },

    "features.scholars_sci.title": { en: "Muslim Scientists", ur: "مسلم سائنسدان", ar: "العلماء المسلمون" },
    "features.scholars_sci.highlight": { en: "Scientists", ur: "سائنسدان", ar: "العلماء" },
    "features.scholars_sci.desc": { en: "Learn about the brilliant Muslim scholars and scientists who shaped the world. From Al-Khwarizmi to Ibn Sina.", ur: "دنیا کو تشکیل دینے والے شاندار مسلم علماء اور سائنسدانوں کے بارے میں جانیں۔ الخوارزمی سے لے کر ابن سینا تک۔", ar: "تعرف على العلماء والباحثين المسلمين العباقرة الذين شكلوا العالم. من الخوارزمي إلى ابن سينا." },
    "features.scholars_sci.sub1.title": { en: "Profiles", ur: "پروفائلز", ar: "السير الذاتية" },
    "features.scholars_sci.sub1.desc": { en: "Scholar biographies", ur: "علماء کی سوانح عمری", ar: "سير العلماء" },
    "features.scholars_sci.sub2.title": { en: "Works", ur: "کارنامے", ar: "الأعمال" },
    "features.scholars_sci.sub2.desc": { en: "Their contributions", ur: "ان کی خدمات", ar: "مساهماتهم" },

    "features.ai_assistant.title": { en: "AI Islamic Assistant", ur: "اے آئی اسلامی اسسٹنٹ", ar: "مساعد إسلامي بالذكاء الاصطناعي" },
    "features.ai_assistant.highlight": { en: "AI Assistant", ur: "اے آئی اسسٹنٹ", ar: "المساعد" },
    "features.ai_assistant.desc": { en: "Ask any question about Islam and get instant, accurate answers. Powered by verified Islamic knowledge.", ur: "اسلام کے بارے میں کوئی بھی سوال پوچھیں اور فوری، درست جوابات حاصل کریں۔ تصدیق شدہ اسلامی علم سے لیس۔", ar: "اسأل أي سؤال حول الإسلام واحصل على إجابات فورية ودقيقة. مدعوم بالمعرفة الإسلامية المعتمدة." },
    "features.ai_assistant.sub1.title": { en: "Chat AI", ur: "چیٹ اے آئی", ar: "دردشة ذكية" },
    "features.ai_assistant.sub1.desc": { en: "Instant answers", ur: "فوری جوابات", ar: "إجابات فورية" },
    "features.ai_assistant.sub2.title": { en: "Sources", ur: "ذرائع", ar: "المصادر" },
    "features.ai_assistant.sub2.desc": { en: "Quran & Hadith references", ur: "قرآن اور حدیث کے حوالہ جات", ar: "مراجع القرآن والحديث" },

    // About Page
    "about_page.title": { en: "About", ur: "کے بارے میں", ar: "حول" },
    "about_page.subtitle": { en: "A comprehensive platform bringing together all aspects of Islamic civilization", ur: "ایک جامع پلیٹ فارم جو اسلامی تہذیب کے تمام پہلوؤں کو اکٹھا کرتا ہے۔", ar: "منصة شاملة تجمع بين جميع جوانب الحضارة الإسلامية." },
    "about_page.vision.title": { en: "Our Vision", ur: "ہمارا وژن", ar: "رؤيتنا" },
    "about_page.vision.desc1": { en: "To revive the complete understanding of Islam as a comprehensive way of life, not just a set of rituals. Deen Sphere aims to gather and present the full spectrum of Islamic civilization—from spirituality to governance, from economics to history.", ur: "اسلام کی ایک جامع طرز زندگی کے طور پر مکمل سمجھ کو زندہ کرنا، نا کہ محض رسومات کا مجموعہ۔ دین اسفیئر کا مقصد اسلامی تہذیب کے مکمل پہلوؤں کو جمع کرنا اور پیش کرنا ہے—روحانیت سے لے کر حکمرانی تک، معاشیات سے لے کر تاریخ تک۔", ar: "إحياء الفهم الكامل للإسلام كمنهج شامل للحياة، وليس مجرد مجموعة من الطقوس. يهدف Deen Sphere إلى جمع وتقديم الطيف الكامل للحضارة الإسلامية — من الروحانية إلى الحوكمة، ومن الاقتصاد إلى التاريخ." },
    "about_page.vision.desc2": { en: "We believe that Islam provided a holistic framework for human existence, and understanding this completeness is essential for Muslims navigating the modern world.", ur: "ہم سمجھتے ہیں کہ اسلام نے انسانی وجود کے لیے ایک ہمہ گیر فریم ورک فراہم کیا ہے، اور اس کاملیت کو سمجھنا جدید دنیا میں بسنے والے مسلمانوں کے لیے ضروری ہے۔", ar: "نحن نؤمن بأن الإسلام وفر إطاراً شاملاً للوجود الإنساني، وفهم هذا الاكتمال ضروري للمسلمين الذين يتنقلون في العالم الحديث." },
    "about_page.mission.title": { en: "Our", ur: "ہمارا", ar: "مهمتنا" },
    "about_page.mission.highlight": { en: "Mission", ur: "نصب العین", ar: "مهمتنا" },
    "about_page.mission.p1.title": { en: "Politics & Governance", ur: "سیاست اور حکمرانی", ar: "السياسة والحوكمة" },
    "about_page.mission.p1.desc": { en: "Rediscovering the principles of justice (Adl), consultation (Shura), and ethical leadership that governed Islamic civilizations for centuries.", ur: "عدل، شوریٰ، اور اخلاقی قیادت کے اصولوں کی بازیافت جو صدیوں تک اسلامی تہذیبوں پر حکمران رہے۔", ar: "إعادة اكتشاف مبادئ العدل، والشورى، والقيادة الأخلاقية التي حكمت الحضارات الإسلامية لقرون." },
    "about_page.mission.p2.title": { en: "Economy & Finance", ur: "معیشت اور مالیات", ar: "الاقتصاد والتمويل" },
    "about_page.mission.p2.desc": { en: "Moving beyond interest (Riba) to an equitable system of wealth distribution, ethical trade, and social welfare through Zakat and Waqf.", ur: "سود (ربا) سے نکل کر دولت کی منصفانہ تقسیم، اخلاقی تجارت، اور زکوٰۃ و وقف کے ذریعے سماجی بہبود کے منصفانہ نظام کی طرف بڑھنا۔", ar: "الانتقال لما وراء الربا إلى نظام عادل لتوزيع الثروة، والتجارة الأخلاقية، والرعاية الاجتماعية من خلال الزكاة والوقف." },
    "about_page.mission.p3.title": { en: "History & Civilization", ur: "تاریخ اور تہذیب", ar: "التاريخ والحضارة" },
    "about_page.mission.p3.desc": { en: "Connecting the past to the future. Learning from the Golden Age of Islam to inspire a modern renaissance of knowledge and innovation.", ur: "ماضی کو مستقبل سے جوڑنا۔ اسلام کے سنہری دور سے سیکھ کر علم اور جدت کی جدید نشاۃ ثانیہ کی تحریک پیدا کرنا۔", ar: "ربط الماضي بالمستقبل. التعلم من العصر الذهبي للإسلام لإلهام نهضة حديثة للمعرفة والابتكار." },
    "about_page.quote": { en: "Islam is not just a religion of worship, but a complete way of life", ur: "اسلام صرف عبادت کا مذہب نہیں، بلکہ ایک مکمل ضابطہ حیات ہے", ar: "الإسلام ليس مجرد دين للعبادة، بل هو منهج حياة متكامل" },

    // Community Page
    "community_page.title": { en: "Community", ur: "کمیونٹی", ar: "المجتمع" },
    "community_page.subtitle": { en: "Connect with millions of Muslims worldwide. Share knowledge, find support, and grow together in faith.", ur: "دنیا بھر کے لاکھوں مسلمانوں سے جڑیں۔ علم بانٹیں، مدد حاصل کریں، اور ایمان میں مل کر ترقی کریں۔", ar: "تواصل مع الملايين من المسلمين في جميع أنحاء العالم. شارك المعرفة، ابحث عن الدعم، وانموا معاً في الإيمان." },
    "community_page.stats.active": { en: "Active Members", ur: "فعال ممبران", ar: "الأعضاء النشطون" },
    "community_page.stats.posts": { en: "Daily Posts", ur: "روزانہ کی پوسٹیں", ar: "المنشورات اليومية" },
    "community_page.stats.countries": { en: "Countries", ur: "ممالک", ar: "الدول" },
    "community_page.stats.scholars": { en: "Scholars", ur: "علماء", ar: "العلماء" },
    "community_page.f1.title": { en: "Global Network", ur: "عالمی نیٹ ورک", ar: "شبكة عالمية" },
    "community_page.f1.desc": { en: "Connect with Muslims from every corner of the world", ur: "دنیا کے ہر کونے سے مسلمانوں کے ساتھ جڑیں۔", ar: "تواصل مع المسلمين من كل ركن من أركان العالم." },
    "community_page.f2.title": { en: "Discussion Forums", ur: "بحث کے فورمز", ar: "منتديات النقاش" },
    "community_page.f2.desc": { en: "Engage in meaningful conversations about faith and life", ur: "ایمان اور زندگی کے بارے میں بامعنی گفتگو میں حصہ لیں۔", ar: "الانخراط في محادثات هادفة حول الإيمان والحياة." },
    "community_page.f3.title": { en: "Support Groups", ur: "سپورٹ گروپس", ar: "مجموعات الدعم" },
    "community_page.f3.desc": { en: "Find and offer support in various life situations", ur: "زندگی کے مختلف حالات میں مدد حاصل کریں اور پیش کریں۔", ar: "ابحث عن الدعم وقدمه في مختلف مواقف الحياة." },
    "community_page.f4.title": { en: "Share Knowledge", ur: "علم بانٹیں", ar: "مشاركة المعرفة" },
    "community_page.f4.desc": { en: "Learn from others and share your insights", ur: "دوسروں سے سیکھیں اور اپنی بصیرت بانٹیں۔", ar: "تعلم من الآخرين وشارك رؤاك الخاصة." },
    "community_page.testimonials.title": { en: "What Our Community Says", ur: "ہماری کمیونٹی کیا کہتی ہے", ar: "ماذا يقول مجتمعنا" },
    "community_page.testimonials.t1": { en: "DeenSphere helped me connect with scholars and strengthen my deen", ur: "دین اسفیئر نے مجھے علماء سے جڑنے اور اپنا دین مضبوط کرنے میں مدد دی۔", ar: "ساعدني DeenSphere على التواصل مع العلماء وتقوية ديني." },
    "community_page.testimonials.t2": { en: "An amazing platform that brings Muslims together from all over the world", ur: "ایک حیرت انگیز پلیٹ فارم جو دنیا بھر کے مسلمانوں کو ایک جگہ لاتا ہے۔", ar: "منصة رائعة تجمع المسلمين من جميع أنحاء العالم." },
    "community_page.testimonials.t3": { en: "The best Islamic app I've used. Very comprehensive and user-friendly", ur: "بہترین اسلامی ایپ جو میں نے استعمال کی ہے۔ بہت جامع اور استعمال میں آسان۔", ar: "أفضل تطبيق إسلامي استخدمته. شامل جداً وسهل الاستخدام." },
    "community_page.cta.title": { en: "Ready to Join?", ur: "کیا آپ شامل ہونے کے لیے تیار ہیں؟", ar: "جاهز للانضمام؟" },
    "community_page.cta.desc": { en: "Download the Deen Sphere app and become part of a thriving global community dedicated to knowledge, faith, and unity.", ur: "دین اسفیئر ایپ ڈاؤن لوڈ کریں اور علم، ایمان اور اتحاد کے لیے وقف ایک ترقی پزیر عالمی کمیونٹی کا حصہ بنیں۔", ar: "قم بتحميل تطبيق Deen Sphere وكن جزءاً من مجتمع عالمي مزدهر مكرس للمعرفة والإيمان والوحدة." },
    "community_page.cta.btn": { en: "Download App", ur: "ایپ ڈاؤن لوڈ کریں", ar: "تحميل التطبيق" },

    // Contact Page
    "contact_page.title": { en: "Get In", ur: "رابطہ", ar: "تواصل" },
    "contact_page.title_highlight": { en: "Touch", ur: "کریں", ar: "معنا" },
    "contact_page.subtitle": { en: "Have questions or want to join our community? We'd love to hear from you. Reach out to us anytime.", ur: "سوالات ہیں یا ہماری کمیونٹی میں شامل ہونا چاہتے ہیں؟ ہمیں آپ سے سن کر خوشی ہوگی۔ کسی بھی وقت ہم سے رابطہ کریں۔", ar: "لديك أسئلة أو تريد الانضمام إلى مجتمعنا؟ نود أن نسمع منك. تواصل معنا في أي وقت." },
    "contact_page.info.email": { en: "Email", ur: "ای میل", ar: "البريد الإلكتروني" },
    "contact_page.info.phone": { en: "Phone", ur: "فون", ar: "الهاتف" },
    "contact_page.info.address": { en: "Address", ur: "پتہ", ar: "العنوان" },
    "contact_page.form.title": { en: "Send us a Message", ur: "ہمیں پیغام بھیجیں", ar: "أرسل لنا رسالة" },
    "contact_page.form.name": { en: "Name", ur: "نام", ar: "الاسم" },
    "contact_page.form.email": { en: "Email", ur: "ای میل", ar: "البريد الإلكتروني" },
    "contact_page.form.subject": { en: "Subject", ur: "موضوع", ar: "الموضوع" },
    "contact_page.form.message": { en: "Message", ur: "پیغام", ar: "الرسالة" },
    "contact_page.form.placeholder.name": { en: "Your name", ur: "آپ کا نام", ar: "اسمك" },
    "contact_page.form.placeholder.email": { en: "your@email.com", ur: "آپ کا ای میل", ar: "your@email.com" },
    "contact_page.form.placeholder.subject": { en: "What is this about?", ur: "یہ کس بارے میں ہے؟", ar: "ما موضوع رسالتك؟" },
    "contact_page.form.placeholder.message": { en: "Your message...", ur: "آپ کا پیغام...", ar: "رسالتك..." },
    "contact_page.form.btn": { en: "Send Message", ur: "پیغام بھیجیں", ar: "إرسال الرسالة" },
    "contact_page.form.btn.sending": { en: "Sending...", ur: "بھیجا جا رہا ہے...", ar: "جاري الإرسال..." },
    "contact_page.form.success": { en: "✓ Message sent successfully! We'll get back to you soon.", ur: "✓ پیغام کامیابی سے بھیج دیا گیا! ہم جلد ہی آپ سے رابطہ کریں گے۔", ar: "✓ تم إرسال الرسالة بنجاح! سنرد عليك قريباً." },

    // Lectures Page
    "lectures_page.badge": { en: "Video Library", ur: "ویڈیو لائبریری", ar: "مكتبة الفيديو" },
    "lectures_page.title": { en: "Islamic", ur: "اسلامی", ar: "المحاضرات" },
    "lectures_page.title_highlight": { en: "Lectures", ur: "خطابات", ar: "الإسلامية" },
    "lectures_page.subtitle": { en: "Watch inspiring lectures from our scholars. Click to watch on YouTube.", ur: "ہمارے علماء کے متاثر کن خطابات دیکھیں۔ یوٹیوب پر دیکھنے کے لیے کلک کریں۔", ar: "شاهد محاضرات ملهمة من علمائنا. انقر للمشاهدة على يوتيوب." },
    "lectures_page.views": { en: "views", ur: "مناظر", ar: "مشاهدة" },
    "lectures_page.youtube": { en: "YouTube", ur: "یوٹیوب", ar: "يوتيوب" },
    "lectures_page.cta.title": { en: "Subscribe to Our Channel", ur: "ہمارے چینل کو سبسکرائب کریں", ar: "اشترك في قناتنا" },
    "lectures_page.cta.desc": { en: "Get notified when we upload new lectures. Join our growing community of learners.", ur: "جب ہم نئے خطابات اپ لوڈ کریں تو اطلاع حاصل کریں۔ سیکھنے والوں کی ہماری بڑھتی ہوئی کمیونٹی میں شامل ہوں۔", ar: "احصل على إشعار عند تحميل محاضرات جديدة. انضم إلى مجتمعنا المتنامي من المتعلمين." },
    "lectures_page.cta.btn": { en: "Subscribe on YouTube", ur: "یوٹیوب پر سبسکرائب کریں", ar: "اشترك على يوتيوب" },

    // Categories
    "cat.aqeedah": { en: "Aqeedah", ur: "عقیدہ", ar: "عقيدة" },
    "cat.tafsir": { en: "Tafsir", ur: "تفسیر", ar: "تفسير" },
    "cat.seerah": { en: "Seerah", ur: "سیرت", ar: "سيرة" },
    "cat.comparative": { en: "Comparative Religion", ur: "تقابلِ ادیان", ar: "مقارنة الأديان" },
    "cat.history": { en: "History", ur: "تاریخ", ar: "تاريخ" },
    "cat.spirituality": { en: "Spirituality", ur: "روحانیت", ar: "روحانیات" },
    "cat.economy": { en: "Economy", ur: "معیشت", ar: "اقتصاد" },
    "cat.family": { en: "Family", ur: "خاندان", ar: "أسرة" },

    // Specific Lectures
    "lecture.t1.title": { en: "The Beauty of Tawheed", ur: "توحید کی خوبصورتی", ar: "جمال التوحيد" },
    "lecture.t1.speaker": { en: "Sheikh Ahmad Al-Farooq", ur: "شیخ احمد الفاروق", ar: "الشيخ أحمد الفاروق" },
    "lecture.t2.title": { en: "Understanding Surah Al-Kahf", ur: "سورہ کہف کی سمجھ", ar: "فهم سورة الكهف" },
    "lecture.t2.speaker": { en: "Dr. Fatima Hassan", ur: "ڈاکٹر فاطمہ حسن", ar: "د. فاطمة حسن" },
    "lecture.t3.title": { en: "The Life of Prophet Muhammad ﷺ", ur: "سیرتِ رسول ﷺ", ar: "سيرة النبي محمد ﷺ" },
    "lecture.t3.speaker": { en: "Imam Yusuf Ibrahim", ur: "امام یوسف ابراہیم", ar: "الإمام يوسف إبراهيم" },
    "lecture.t4.title": { en: "Islam vs Christianity: Key Differences", ur: "اسلام اور عیسائیت: کلیدی اختلافات", ar: "الإسلام والمسيحية: الاختلافات الرئيسية" },
    "lecture.t4.speaker": { en: "Sheikh Muhammad Qasim", ur: "شیخ محمد قاسم", ar: "الشيخ محمد قاسم" },
    "lecture.t5.title": { en: "The Golden Age of Islam", ur: "اسلام کا سنہری دور", ar: "العصر الذهبي للإسلام" },
    "lecture.t5.speaker": { en: "Dr. Aisha Rahman", ur: "ڈاکٹر عائشہ رحمان", ar: "د. عائشة رحمن" },
    "lecture.t6.title": { en: "Purification of the Heart", ur: "تزکیہ نفس", ar: "تزكية القلب" },
    "lecture.t6.speaker": { en: "Sheikh Omar Suleiman", ur: "شیخ عمر سلیمان", ar: "الشيخ عمر سليمان" },
    "lecture.t7.title": { en: "Islamic Economics Explained", ur: "اسلامی معاشیات کی وضاحت", ar: "شرح الاقتصاد الإسلامي" },
    "lecture.t7.speaker": { en: "Dr. Muhammad Akram", ur: "ڈاکٹر محمد اکرم", ar: "د. محمد أكرم" },
    "lecture.t8.title": { en: "Raising Muslim Children", ur: "مسلم بچوں کی پرورش", ar: "تربية الأطفال المسلمين" },
    "lecture.t8.speaker": { en: "Sheikh Ahmad Al-Farooq", ur: "شیخ احمد الفاروق", ar: "الشيخ أحمد الفاروق" },

    // Speakers Page
    "speakers_page.badge": { en: "World-Class Scholars", ur: "عالمی سطح کے علماء", ar: "علماء عالميون" },
    "speakers_page.title": { en: "Our", ur: "ہمارے", ar: "متحدثونا" },
    "speakers_page.title_highlight": { en: "Speakers", ur: "مقررین", ar: "المتحدثون" },
    "speakers_page.subtitle": { en: "Learn from world-renowned Islamic scholars and speakers. Book private sessions or attend live lectures.", ur: "دنیا بھر کے معروف اسلامی علماء اور مقررین سے سیکھیں۔ نجی سیشنز بک کریں یا لائیو لیکچرز میں شرکت کریں۔", ar: "تعلم من علماء ومتحدثين إسلاميين مشهورين عالمياً. احجز جلسات خاصة أو احضر محاضرات مباشرة." },
    "speakers_page.sessions": { en: "sessions", ur: "سیشنز", ar: "جلسات" },
    "speakers_page.btn.book": { en: "Book Speaker", ur: "اسپیکر بک کریں", ar: "حجز المتحدث" },
    "speakers_page.cta.title": { en: "Become a Speaker", ur: "اسپیکر بنیں", ar: "كن متحدثاً" },
    "speakers_page.cta.desc": { en: "Are you a qualified Islamic scholar? Join our platform and share your knowledge with millions.", ur: "کیا آپ ایک مستند اسلامی عالم ہیں؟ ہمارے پلیٹ فارم میں شامل ہوں اور لاکھوں لوگوں کے ساتھ اپنا علم بانٹیں۔", ar: "هل أنت عالم إسلامي مؤهل؟ انضم إلى منصتنا وشارك معرفتك مع الملايين." },
    "speakers_page.cta.btn": { en: "Apply Now", ur: "ابھی اپلائی کریں", ar: "قدم الآن" },

    // Specialties
    "spec.fiqh": { en: "Fiqh & Islamic Jurisprudence", ur: "فقہ اور اسلامی قانون", ar: "الفقه والتشريع الإسلامي" },
    "spec.quran": { en: "Quranic Studies", ur: "قرآنی علوم", ar: "الدراسات القرآنية" },
    "spec.hadith": { en: "Hadith Sciences", ur: "علوم الحدیث", ar: "علوم الحديث" },
    "spec.comparative": { en: "Comparative Religion", ur: "تقابلِ ادیان", ar: "مقارنة الأديان" },
    "spec.history": { en: "Islamic History", ur: "اسلامی تاریخ", ar: "التاريخ الإسلامي" },
    "spec.spirituality": { en: "Spirituality & Tazkiyah", ur: "روحانیت اور تزکیہ", ar: "الروحانية والتزكية" },

    // Speaker Bios
    "speaker.bio.ahmad": { en: "A renowned scholar specializing in Hanafi fiqh with over 20 years of teaching experience.", ur: "حنفی فقہ میں مہارت رکھنے والے ایک معروف عالم جن کا 20 سال سے زیادہ کا تدریسی تجربہ ہے۔", ar: "عالم مشهور متخصص في الفقه الحنفي مع خبرة تدريسية تزيد عن 20 عاماً." },
    "speaker.bio.fatima": { en: "PhD in Quranic Sciences from Al-Azhar University. Expert in Tajweed and Tafsir.", ur: "جامعہ الازہر سے قرآنی علوم میں پی ایچ ڈی۔ تجوید اور تفسیر کی ماہر۔", ar: "دكتوراة في علوم القرآن من جامعة الأزهر. خبيرة في التجويد والتفسير." },
    "speaker.bio.yusuf": { en: "Specialist in Hadith authentication and narrator criticism. Author of several books.", ur: "حدیث کی تصدیق اور راویوں کی جرح و تعدیل کے ماہر۔ کئی کتابوں کے مصنف۔", ar: "متخصص في تحقيق الأحاديث ونقد الرواة. مؤلف لعدة كتب." },
    "speaker.bio.muhammad": { en: "Expert in interfaith dialogue and dawah. Has debated with scholars from various faiths.", ur: "بین المذاہب مکالمہ اور دعوت کے ماہر۔ مختلف مذاہب کے علماء کے ساتھ مناظرے کر چکے ہیں۔", ar: "خبير في الحوار بين الأديان والدعوة. ناظر علماء من مختلف الأديان." },
    "speaker.bio.aisha": { en: "Historian specializing in the Golden Age of Islam and Ottoman Empire.", ur: "اسلام کے سنہری دور اور سلطنت عثمانیہ میں مہارت رکھنے والی مورخ۔", ar: "مؤرخة متخصصة في العصر الذهبي للإسلام والدولة العثمانية." },
    "speaker.bio.omar": { en: "Known for his inspiring lectures on spiritual purification and personal development.", ur: "روحانی پاکیزگی اور ذاتی ترقی پر اپنے متاثر کن خطابات کے لیے جانے جاتے ہیں۔", ar: "معروف بمحاضراته الملهمة حول التزكية الروحية والتطوير الشخصي." },

    // Donations Section
    "donations.badge": { en: "Support the Cause", ur: "نیک مقصد میں تعاون کریں", ar: "ادعم القضية" },
    "donations.title": { en: "Help Us Spread", ur: "علم پھیلانے میں ہماری", ar: "ساعدنا في نشر" },
    "donations.title_highlight": { en: "Knowledge", ur: "مدد کریں", ar: "المعرفة" },
    "donations.subtitle": { en: "Your donations help us provide free Islamic education, connect people with scholars, and build a stronger global Muslim community.", ur: "آپ کے عطیات ہمیں مفت اسلامی تعلیم فراہم کرنے، لوگوں کو علماء سے جوڑنے اور ایک مضبوط عالمی مسلم کمیونٹی بنانے میں مدد دیتے ہیں۔", ar: "تبرعاتك تساعدنا في تقديم تعليم إسلامي مجاني، وربط الناس بالعلماء، وبناء مجتمع إسلامي عالمي أقوى." },
    "donations.form.title": { en: "Make a Donation", ur: "عطیہ دیں", ar: "قدم تبرعاً" },
    "donations.form.select_amount": { en: "Select Amount (USD)", ur: "رقم منتخب کریں (USD)", ar: "اختر المبلغ (USD)" },
    "donations.form.custom_amount": { en: "Or Enter Custom Amount", ur: "یا اپنی مرضی کی رقم درج کریں", ar: "أو أدخل مبلغاً مخصصاً" },
    "donations.form.one_time": { en: "One-Time", ur: "ایک بار", ar: "مرة واحدة" },
    "donations.form.monthly": { en: "Monthly", ur: "ماہانہ", ar: "شهرياً" },
    "donations.form.btn": { en: "Donate Now", ur: "ابھی عطیہ دیں", ar: "تبرع الآن" },
    "donations.form.secure": { en: "Secure Payment", ur: "محفوظ ادائیگی", ar: "دفع آمن" },
    "donations.form.transparent": { en: "100% Goes to Cause", ur: "100% مقصد کے لیے", ar: "100% تذهب للقضية" },
    "donations.qr.title": { en: "Scan to Donate", ur: "عطیہ دینے کے لیے اسکین کریں", ar: "امسح للتبرع" },
    "donations.qr.desc": { en: "Scan with any payment app", ur: "کسی بھی پیمنٹ ایپ سے اسکین کریں", ar: "امسح بأي تطبيق دفع" },
    "donations.other.title": { en: "Other Ways to Donate", ur: "عطیہ دینے کے دیگر طریقے", ar: "طرق أخرى للتبرع" },
    "donations.other.mobile": { en: "Mobile Banking", ur: "موبائل بینکنگ", ar: "الخدمات المصرفية عبر الهاتف" },
    "donations.other.bank": { en: "Bank Transfer", ur: "بینک ٹرانسفر", ar: "تحويل بنكي" },
    "donations.other.patron": { en: "Become a Patron", ur: "سرپرست بنیں", ar: "كن راعياً" },
    "donations.stats.raised": { en: "Raised", ur: "جمع شدہ", ar: "تم جمعها" },
    "donations.stats.donors": { en: "Donors", ur: "عطیہ دہندگان", ar: "المتبرعون" },
    "donations.stats.countries": { en: "Countries", ur: "ممالک", ar: "الدول" },
    "donations.stats.transparency": { en: "Transparent", ur: "شفاف", ar: "شفاف" },
}

interface LanguageContextType {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: (key: string) => string
    isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<Locale>("en")

    useEffect(() => {
        const savedLocale = localStorage.getItem("locale") as Locale
        if (savedLocale && ["en", "ur", "ar"].includes(savedLocale)) {
            setLocale(savedLocale)
        }
    }, [])

    const handleSetLocale = (newLocale: Locale) => {
        setLocale(newLocale)
        localStorage.setItem("locale", newLocale)
    }

    const t = (key: string) => {
        if (!translations[key]) {
            console.warn(`Translation key not found: ${key}`)
            return key
        }
        return translations[key][locale]
    }

    const isRTL = locale === "ur" || locale === "ar"

    return (
        <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t, isRTL }}>
            <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-urdu" : "font-sans"}>
                {children}
            </div>
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
