"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Interactive Timeline Component
function InteractiveTimeline({ t }) {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const steps = [
    {
      id: 1,
      icon: (
        <Image
          src="/telegram-svgrepo-com.svg"
          alt="Telegram"
          width={30}
          height={30}
        />
      ),
      title: t?.step1Title || "Запустить бота",
      desc:
        t?.step1Desc ||
        "Нажми на кнопку выше и перейди в Telegram к FinFix боту",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      icon: <Image src="/person.svg" alt="Person" width={35} height={35} />,
      title: t?.step2Title || "Вписать имя",
      desc: t?.step2Desc || "Бот попросит указать твоё имя для персонализации",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      id: 3,
      icon: (
        <Image src="/currencies.svg" alt="Currencies" width={35} height={35} />
      ),
      title: t?.step3Title || "Выбрать валюту",
      desc: t?.step3Desc || "Настрой основную валюту для всех операций",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
    },
    {
      id: 4,
      icon: <Image src="/debt.svg" alt="Debt" width={35} height={35} />,
      title: t?.step4Title || "Новый кредит",
      desc: t?.step4Desc || 'Нажми "New Debt" для добавления первого долга',
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
    {
      id: 5,
      icon: (
        <Image src="/debt-type.svg" alt="Debt-type" width={35} height={35} />
      ),
      title: t?.step5Title || "Выбрать тип кредита",
      desc: t?.step5Desc || "Рассрочка, банковский кредит или другой долг",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
    },
    {
      id: 6,
      icon: <Image src="/process.svg" alt="Process" width={35} height={35} />,
      title: t?.step6Title || "Пройти шаги",
      desc: t?.step6Desc || "Отвечай на вопросы бота: сумма, дата, описание",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
    },
    {
      id: 7,
      icon: (
        <Image src="/statistics.svg" alt="Statistics" width={35} height={35} />
      ),
      title: t?.step7Title || "Перейти в Explore",
      desc: t?.step7Desc || 'В главном меню выбери секцию "Explore"',
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
    },
    {
      id: 8,
      icon: <Image src="/done.svg" alt="done" width={35} height={35} />,
      title: t?.step8Title || "Готово!",
      desc:
        t?.step8Desc || "Первая статистика готова — контролируй финансы легко",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev >= 8 ? 1 : prev + 1));
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextStep = () => {
    setActiveStep((prev) => (prev >= 8 ? 1 : prev + 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev <= 1 ? 8 : prev - 1));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const currentStep = steps.find((step) => step.id === activeStep);

  return (
    <div className="relative">
      {/* Main Step Display Card */}
      <div className="mb-12 md:mb-16">
        <div
          className={`relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-emerald-300/20 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-xl`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(0,0,0,0.3) 2px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              {/* Large Icon */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${currentStep.color} rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:rotate-12 hover:scale-110`}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  {currentStep.icon}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-50 leading-tight drop-shadow-lg">
                  {currentStep.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                  {currentStep.desc}
                </p>
              </div>

              {/* Progress Info */}
              <div className="flex flex-col items-center gap-3 md:gap-4 text-emerald-100/80 w-full max-w-md">
                <span className="text-sm md:text-base font-medium">
                  {t?.stepProgress || "Шаг"} {activeStep} {t?.stepOf || "из"} 8
                </span>
                <div className="h-3 bg-emerald-900/30 rounded-full w-full overflow-hidden shadow-inner border border-emerald-400/20">
                  <div
                    className={`h-full bg-gradient-to-r ${currentStep.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${(activeStep / 8) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm md:text-base font-semibold">
                  {Math.round((activeStep / 8) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Main Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-emerald-300/20 hover:border-emerald-400/40 text-emerald-100 hover:text-emerald-50 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
            onClick={prevStep}
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-emerald-300/20 hover:border-emerald-400/40 text-emerald-100 hover:text-emerald-50 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
            onClick={nextStep}
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mini Step Preview */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 max-w-4xl">
          {steps.map((step) => (
            <button
              key={step.id}
              className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                activeStep === step.id
                  ? "bg-white/20 backdrop-blur-sm border border-emerald-400/40 shadow-lg scale-105"
                  : activeStep > step.id
                  ? "bg-white/10 backdrop-blur-sm border border-emerald-300/20 opacity-60"
                  : "bg-white/5 backdrop-blur-sm border border-emerald-300/10 hover:border-emerald-300/30 hover:shadow-md hover:bg-white/10"
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="text-center">
                <div
                  className={`w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                    activeStep >= step.id
                      ? `bg-gradient-to-br ${step.color} text-white shadow-md`
                      : "bg-white/10 backdrop-blur-sm text-emerald-100/60 border border-emerald-300/20"
                  }`}
                >
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div
                  className={`text-xs font-medium ${
                    activeStep === step.id
                      ? "text-emerald-50"
                      : "text-emerald-100/70"
                  }`}
                >
                  {step.id}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Interactive FAQ Component
function FAQ({ t }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = t?.faqData || [
    {
      id: 1,
      question: "Это приложение?",
      answer:
        "Нет. FinFix — это Telegram-бот. Никаких установок, всё работает прямо в чате.",
    },
    {
      id: 3,
      question: "Насколько это безопасно?",
      answer:
        "Все данные сохраняются только у вас. FinFix не требует входа, паролей или банковских карт. Мы сохраняем только ваш Telegram ID и никнейм — никаких номеров телефонов, email или банковских данных.",
    },
    {
      id: 4,
      question: "Какие данные можно отслеживать?",
      answer:
        "Долги, доходы, расходы, рассрочки. Можно выгружать статистику и CSV-отчёты для анализа в Excel или Google Таблицах.",
    },
    {
      id: 5,
      question: "Это удобно с телефона?",
      answer:
        "Да, FinFix специально разработан для мобильных устройств и работает прямо в Telegram.",
    },
    {
      id: 6,
      question: "Можно ли выгрузить данные?",
      answer:
        "Да, поддерживается экспорт в CSV по категориям — удобно для Excel и Google Таблиц.",
    },
    {
      id: 7,
      question: "Куда попадают мои данные?",
      answer:
        "Вся информация хранится в надёжной базе данных PostgreSQL. У вас нет личного кабинета или профиля, доступ к данным осуществляется только через Telegram-сессию. Вы единственный, кто взаимодействует с ботом.",
    },
    {
      id: 8,
      question: "Кто может видеть мои финансы?",
      answer:
        "Администратор имеет технический доступ к базе данных, в которой хранятся ваши записи (долги, расходы и доходы). Однако мы не используем и не анализируем эти данные, они не передаются третьим лицам. Вся информация хранится в защищённой базе данных PostgreSQL и используется только для работы бота.",
    },
    {
      id: 9,
      question: "Передаются ли данные третьим лицам?",
      answer:
        "Никогда. Данные не передаются маркетологам, аналитикам, рекламодателям или сторонним сервисам. FinFix — это инструмент, а не платформа с коммерческими интересами.",
    },
    {
      id: 10,
      question: "Есть ли скрытые сборы или трекеры?",
      answer:
        "Никаких скрытых сборов, аналитических SDK или маркетинговых трекеров. Только Telegram и PostgreSQL — больше ничего.",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-sm rounded-2xl border border-emerald-300/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              onClick={() => toggleQuestion(item.id)}
            >
              <div className="flex items-center gap-4">
                <h4 className="font-display text-lg md:text-xl font-semibold text-emerald-50">
                  {item.question}
                </h4>
              </div>
              <svg
                className={`w-6 h-6 text-emerald-300 transition-transform duration-300 ${
                  openQuestion === item.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                openQuestion === item.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 pb-6">
                <p className="font-body text-emerald-100/90 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ua");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] =
    useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInDevelopment, setIsInDevelopment] = useState(true); // Состояние проекта

  // Force scroll to top on page load/reload
  useEffect(() => {
    // Remove any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLanguageDropdownOpen &&
        !event.target.closest(".language-dropdown")
      ) {
        setIsLanguageDropdownOpen(false);
      }
      if (
        isMobileLangDropdownOpen &&
        !event.target.closest(".mobile-language-dropdown")
      ) {
        setIsMobileLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageDropdownOpen, isMobileLangDropdownOpen]);

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const featuresSection = document.getElementById("features");
      const featuresSectionTop = featuresSection
        ? featuresSection.offsetTop
        : 1000;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsHeaderVisible(true);
      }
      // Hide header when scrolling down past features section
      else if (
        currentScrollY > featuresSectionTop &&
        currentScrollY > lastScrollY
      ) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close language dropdown when opening mobile menu
    if (!isMobileMenuOpen) {
      setIsMobileLangDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
    setIsMobileLangDropdownOpen(false);
  };

  const toggleMobileLangDropdown = () => {
    setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen);
  };

  // Translations object
  const translations = {
    ru: {
      // Header
      home: "Главная",
      features: "Возможности",
      demo: "Демо",
      howToStart: "Как начать",
      testimonials: "Отзывы",
      faq: "FAQ",
      launchBot: "Запустить FinFix",

      // Hero section
      heroTitle: "Контролируй финансы без приложений",
      heroSubtitle: "Финансовый трекер в Telegram",
      heroDescription:
        "Долги, расходы, доходы, статистика — всё в одном месте.",
      heroDescriptionExtra: "Никаких Excel и приложений.",
      heroButton: "Запустить FinFix",
      heroScrollText: "Узнать больше",
      heroBadge: "Telegram бот для контроля финансов",
      heroBadgeDev: "В разработке",

      // Features
      featuresTitle: "Полный контроль финансов в одном чате",
      featuresSubtitle:
        "FinFix — это простой и удобный бот в Telegram, который помогает вести учёт долгов, расходов и доходов, получать наглядную статистику и выгружать отчёты. Без приложений и таблиц — всё в одном чате.",
      debtTracking: "Учёт долгов",
      debtTrackingDesc:
        "Банковские, рассрочки, другие — все виды долгов под контролем",
      incomeExpenses: "Доходы/расходы",
      incomeExpensesDesc: "Добавляй за секунды, контролируй ежемесячно",
      smartAnalytics: "Умная аналитика",
      smartAnalyticsDesc: "Готовые месячные отчёты и графики",
      csvExport: "CSV экспорт",
      csvExportDesc: "Скачивай и анализируй в любых программах",
      fullManagement: "Полное управление",
      fullManagementDesc: "Создавай, редактируй, удаляй — полный контроль",
      security: "Безопасность",
      securityDesc:
        "Все данные хранятся в Telegram. Никаких сторонних сервисов",

      // Demo section
      demoTitle: "Посмотрите как это работает",
      demoSubtitle:
        "Реальный интерфейс FinFix — никаких заглушек, только настоящая функциональность",

      // Steps section
      stepsTitle: "Как начать за 8 простых шагов",
      stepsSubtitle:
        "От первого запуска до полной статистики — всего несколько минут",
      stepProgress: "Шаг",
      stepOf: "из",

      // Testimonials
      testimonialsTitle: "Что говорят пользователи",
      testimonialsSubtitle:
        "Реальные отзывы от людей, которые уже контролируют свои финансы с FinFix",

      // FAQ
      faqTitle: "Часто задаваемые вопросы",
      faqSubtitle:
        "Всё что нужно знать о безопасности, приватности и функциональности FinFix",

      // Final CTA
      finalCtaTitle: "Готов начать?",
      finalCtaSubtitle:
        "Присоединяйся к тысячам пользователей, которые уже контролируют свои финансы с FinFix",

      // Language
      switchLanguage: "Переключить на английский",

      // Steps
      step1Title: "Запустить бота",
      step1Desc: "Нажми на кнопку выше и перейди в Telegram к FinFix боту",
      step2Title: "Вписать имя",
      step2Desc: "Бот попросит указать твоё имя для персонализации",
      step3Title: "Выбрать валюту",
      step3Desc: "Настрой основную валюту для всех операций",
      step4Title: "Новый кредит",
      step4Desc: 'Нажми "New Debt" для добавления первого долга',
      step5Title: "Выбрать тип кредита",
      step5Desc: "Рассрочка, банковский кредит или другой долг",
      step6Title: "Пройти шаги",
      step6Desc: "Отвечай на вопросы бота: сумма, дата, описание",
      step7Title: "Перейти в Explore",
      step7Desc: 'В главном меню выбери секцию "Explore"',
      step8Title: "Готово!",
      step8Desc: "Первая статистика готова — контролируй финансы легко",

      // FAQ
      faqData: [
        {
          id: 1,
          question: "Это приложение?",
          answer:
            "Нет. FinFix — это Telegram-бот. Никаких установок, всё работает прямо в чате.",
        },

        {
          id: 3,
          question: "Насколько это безопасно?",
          answer:
            "Все данные сохраняются только у вас. FinFix не требует входа, паролей или банковских карт. Мы сохраняем только ваш Telegram ID и никнейм — никаких номеров телефонов, email или банковских данных.",
        },
        {
          id: 4,
          question: "Какие данные можно отслеживать?",
          answer:
            "Долги, доходы, расходы, рассрочки. Можно выгружать статистику и CSV-отчёты для анализа в Excel или Google Таблицах.",
        },
        {
          id: 5,
          question: "Это удобно с телефона?",
          answer:
            "Да, FinFix специально разработан для мобильных устройств и работает прямо в Telegram.",
        },
        {
          id: 6,
          question: "Можно ли выгрузить данные?",
          answer:
            "Да, поддерживается экспорт в CSV по категориям — удобно для Excel и Google Таблиц.",
        },
        {
          id: 7,
          question: "Куда попадают мои данные?",
          answer:
            "Вся информация хранится в надёжной базе данных PostgreSQL. У вас нет личного кабинета или профиля, доступ к данным осуществляется только через Telegram-сессию. Вы единственный, кто взаимодействует с ботом.",
        },
        {
          id: 8,
          question: "Кто может видеть мои финансы?",
          answer:
            "Администратор имеет технический доступ к базе данных, в которой хранятся ваши записи (долги, расходы и доходы). Однако мы не используем и не анализируем эти данные, они не передаются третьим лицам. Вся информация хранится в защищённой базе данных PostgreSQL и используется только для работы бота.",
        },
        {
          id: 9,
          question: "Передаются ли данные третьим лицам?",
          answer:
            "Никогда. Данные не передаются маркетологам, аналитикам, рекламодателям или сторонним сервисам. FinFix — это инструмент, а не платформа с коммерческими интересами.",
        },
        {
          id: 10,
          question: "Есть ли скрытые сборы или трекеры?",
          answer:
            "Никаких скрытых сборов, аналитических SDK или маркетинговых трекеров. Только Telegram и PostgreSQL — больше ничего.",
        },
      ],

      // Testimonials
      testimonial1Name: "Николай Петренко",
      testimonial1Role: "Маркетолог, Киев",
      testimonial1Text:
        "Долго искал простой способ отслеживать свои кредиты и рассрочки. FinFix оказался именно тем, что нужно — все в Telegram, никаких лишних приложений. Особенно нравится автоматический расчет ежемесячных платежей. За 3 месяца использования наконец-то взял под контроль все долги.",
      testimonial2Name: "Анна Коваленко",
      testimonial2Role: "IT-менеджер, Львов",
      testimonial2Text:
        "Как технический человек, я ценю простоту и функциональность. FinFix — это идеальное решение для учета финансов. CSV-экспорт позволяет делать детальную аналитику, а интеграция с Monobank экономит кучу времени. Рекомендую всем, кто серьезно относится к своим деньгам.",

      // Motivational section
      motivationalTitle: "Переноси все свои финансовые обязательства",
      motivationalSubtitle:
        "Держи статистику всегда в кармане. Больше контроля — меньше стресса.",
      motivationalSetup: "5 минут настройки",
      motivationalControl: "Полный контроль",
      motivationalAccess: "Всегда под рукой",

      // Security badge
      securityBadge: "🔒 Данные защищены • Никаких третьих лиц • PostgreSQL",
    },
    ua: {
      // Header
      home: "Головна",
      features: "Можливості",
      demo: "Демо",
      howToStart: "Як почати",
      testimonials: "Відгуки",
      faq: "FAQ",
      launchBot: "Запустити FinFix",

      // Hero section
      heroTitle: "Контролюй фінанси без додатків",
      heroSubtitle: "Фінансовий трекер у Telegram",
      heroDescription:
        "Борги, витрати, доходи, статистика — все в одному місці.",
      heroDescriptionExtra: "Ніяких Excel і додатків.",
      heroButton: "Запустити FinFix",
      heroScrollText: "Дізнатися більше",
      heroBadge: "Telegram бот для контролю фінансів",
      heroBadgeDev: "В розробці",

      // Features
      featuresTitle: "Повний контроль фінансів в одному чаті",
      featuresSubtitle:
        "FinFix — це простий і зручний бот у Telegram, який допомагає вести облік боргів, витрат і доходів, отримувати наочну статистику та вивантажувати звіти. Без додатків і таблиць — все в одному чаті.",
      debtTracking: "Облік боргів",
      debtTrackingDesc:
        "Банківські, розстрочки, інші — всі види боргів під контролем",
      incomeExpenses: "Доходи/витрати",
      incomeExpensesDesc: "Додавай за секунди, контролюй щомісяця",
      smartAnalytics: "Розумна аналітика",
      smartAnalyticsDesc: "Готові місячні звіти та графіки",
      csvExport: "CSV експорт",
      csvExportDesc: "Завантажуй і аналізуй у будь-яких програмах",
      fullManagement: "Повне управління",
      fullManagementDesc: "Створюй, редагуй, видаляй — повний контроль",
      security: "Безпека",
      securityDesc:
        "Всі дані зберігаються в Telegram. Ніяких сторонніх сервісів",

      // Demo section
      demoTitle: "Подивіться як це працює",
      demoSubtitle:
        "Реальний інтерфейс FinFix — ніяких заглушок, лише справжня функціональність",

      // Steps section
      stepsTitle: "Як почати за 8 простих кроків",
      stepsSubtitle:
        "Від першого запуску до повної статистики — лише кілька хвилин",
      stepProgress: "Крок",
      stepOf: "з",

      // Testimonials
      testimonialsTitle: "Що кажуть користувачі",
      testimonialsSubtitle:
        "Реальні відгуки від людей, які вже контролюють свої фінанси з FinFix",

      // FAQ
      faqTitle: "Часто задавані питання",
      faqSubtitle:
        "Все що потрібно знати про безпеку, приватність та функціональність FinFix",

      // Final CTA
      finalCtaTitle: "Готовий почати?",
      finalCtaSubtitle:
        "Приєднуйся до тисяч користувачів, які вже контролюють свої фінанси з FinFix",

      // Language
      switchLanguage: "Переключити на англійську",

      // Steps
      step1Title: "Запустити бота",
      step1Desc: "Натисни на кнопку вище і перейди в Telegram до FinFix бота",
      step2Title: "Вписати ім'я",
      step2Desc: "Бот попросить вказати твоє ім'я для персоналізації",
      step3Title: "Вибрати валюту",
      step3Desc: "Налаштуй основну валюту для всіх операцій",
      step4Title: "Новий кредит",
      step4Desc: 'Натисни "New Debt" для додавання першого боргу',
      step5Title: "Вибрати тип кредиту",
      step5Desc: "Розстрочка, банківський кредит або інший борг",
      step6Title: "Пройти кроки",
      step6Desc: "Відповідай на питання бота: сума, дата, опис",
      step7Title: "Перейти в Explore",
      step7Desc: 'У головному меню вибери секцію "Explore"',
      step8Title: "Готово!",
      step8Desc: "Перша статистика готова — контролюй фінанси легко",

      // FAQ
      faqData: [
        {
          id: 1,
          question: "Це додаток?",
          answer:
            "Ні. FinFix — це Telegram-бот. Ніяких установок, все працює прямо в чаті.",
        },

        {
          id: 3,
          question: "Наскільки це безпечно?",
          answer:
            "Всі дані зберігаються тільки у вас. FinFix не вимагає входу, паролів або банківських карт. Ми зберігаємо лише ваш Telegram ID і нікнейм — ніяких номерів телефонів, email або банківських даних.",
        },
        {
          id: 4,
          question: "Які дані можна відстежувати?",
          answer:
            "Борги, доходи, витрати, розстрочки. Можна вивантажувати статистику та CSV-звіти для аналізу в Excel або Google Таблицях.",
        },
        {
          id: 5,
          question: "Це зручно з телефона?",
          answer:
            "Так, FinFix спеціально розроблений для мобільних пристроїв і працює прямо в Telegram.",
        },
        {
          id: 6,
          question: "Чи можна вивантажити дані?",
          answer:
            "Так, підтримується експорт у CSV за категоріями — зручно для Excel і Google Таблиць.",
        },
        {
          id: 7,
          question: "Куди потрапляють мої дані?",
          answer:
            "Вся інформація зберігається в надійній базі даних PostgreSQL. У вас немає особистого кабінету чи профілю, доступ до даних здійснюється лише через Telegram-сесію. Ви єдиний, хто взаємодіє з ботом.",
        },
        {
          id: 8,
          question: "Хто може бачити мої фінанси?",
          answer:
            "Адміністратор має технічний доступ до бази даних, в якій зберігаються ваші записи (борги, витрати та доходи). Однак ми не використовуємо і не аналізуємо ці дані, вони не передаються третім особам. Вся інформація зберігається в захищеній базі даних PostgreSQL і використовується лише для роботи бота.",
        },
        {
          id: 9,
          question: "Чи передаються дані третім особам?",
          answer:
            "Ніколи. Дані не передаються маркетологам, аналітикам, рекламодавцям або стороннім сервісам. FinFix — це інструмент, а не платформа з комерційними інтересами.",
        },
        {
          id: 10,
          question: "Чи є приховані збори або трекери?",
          answer:
            "Ніяких прихованих зборів, аналітичних SDK або маркетингових трекерів. Лише Telegram і PostgreSQL — більше нічого.",
        },
      ],

      // Testimonials
      testimonial1Name: "Микола Петренко",
      testimonial1Role: "Маркетолог, Київ",
      testimonial1Text:
        "Довго шукав простий спосіб відстежувати свої кредити та розстрочки. FinFix виявився саме тим, що потрібно — все в Telegram, ніяких зайвих додатків. Особливо подобається автоматичний розрахунок щомісячних платежів. За 3 місяці використання нарешті взяв під контроль всі борги.",
      testimonial2Name: "Анна Коваленко",
      testimonial2Role: "IT-менеджер, Львів",
      testimonial2Text:
        "Як технічна людина, я ціную простоту та функціональність. FinFix — це ідеальне рішення для обліку фінансів. CSV-експорт дозволяє робити детальну аналітику, а інтеграція з Monobank економить купу часу. Рекомендую всім, хто серйозно ставиться до своїх грошей.",

      // Motivational section
      motivationalTitle: "Переноси всі свої фінансові зобов'язання",
      motivationalSubtitle:
        "Тримай статистику завжди в кишені. Більше контролю — менше стресу.",
      motivationalSetup: "5 хвилин налаштування",
      motivationalControl: "Повний контроль",
      motivationalAccess: "Завжди під рукою",

      // Security badge
      securityBadge: "🔒 Дані захищені • Ніяких третіх осіб • PostgreSQL",
    },
    en: {
      // Header
      home: "Home",
      features: "Features",
      demo: "Demo",
      howToStart: "How to Start",
      testimonials: "Reviews",
      faq: "FAQ",
      launchBot: "Launch FinFix",

      // Hero section
      heroTitle: "Control your finances without apps",
      heroSubtitle: "Financial tracker in Telegram",
      heroDescription:
        "Debts, expenses, income, statistics — all in one place.",
      heroDescriptionExtra: "No Excel or apps needed.",
      heroButton: "Launch FinFix",
      heroScrollText: "Learn more",
      heroBadge: "Telegram bot for financial control",
      heroBadgeDev: "In development",

      // Features
      featuresTitle: "Full financial control in one chat",
      featuresSubtitle:
        "FinFix is a simple and convenient Telegram bot that helps you track debts, expenses and income, get visual statistics and export reports. No apps or spreadsheets — everything in one chat.",
      debtTracking: "Debt Tracking",
      debtTrackingDesc:
        "Bank loans, installments, others — all types of debts under control",
      incomeExpenses: "Income/Expenses",
      incomeExpensesDesc: "Add in seconds, control monthly",
      smartAnalytics: "Smart Analytics",
      smartAnalyticsDesc: "Ready monthly reports and charts",
      csvExport: "CSV Export",
      csvExportDesc: "Download and analyze in any software",
      fullManagement: "Full Management",
      fullManagementDesc: "Create, edit, delete — full control",
      security: "Security",
      securityDesc: "All data stored in Telegram. No third-party services",

      // Demo section
      demoTitle: "See how it works",
      demoSubtitle:
        "Real FinFix interface — no mockups, only genuine functionality",

      // Steps section
      stepsTitle: "Get started in 8 simple steps",
      stepsSubtitle:
        "From first launch to full statistics — just a few minutes",
      stepProgress: "Step",
      stepOf: "of",

      // Testimonials
      testimonialsTitle: "What users say",
      testimonialsSubtitle:
        "Real reviews from people who already control their finances with FinFix",

      // FAQ
      faqTitle: "Frequently Asked Questions",
      faqSubtitle:
        "Everything you need to know about security, privacy and FinFix functionality",

      // Final CTA
      finalCtaTitle: "Ready to start?",
      finalCtaSubtitle:
        "Join thousands of users who already control their finances with FinFix",

      // Language
      switchLanguage: "Switch to Russian",

      // Steps
      step1Title: "Launch bot",
      step1Desc: "Click the button above and go to FinFix bot in Telegram",
      step2Title: "Enter name",
      step2Desc: "Bot will ask you to specify your name for personalization",
      step3Title: "Choose currency",
      step3Desc: "Set up the main currency for all operations",
      step4Title: "New debt",
      step4Desc: 'Press "New Debt" to add your first debt',
      step5Title: "Choose debt type",
      step5Desc: "Installment, bank loan or other debt",
      step6Title: "Complete steps",
      step6Desc: "Answer bot questions: amount, date, description",
      step7Title: "Go to Explore",
      step7Desc: 'In the main menu choose "Explore" section',
      step8Title: "Done!",
      step8Desc: "First statistics ready — control finances easily",

      // FAQ
      faqData: [
        {
          id: 1,
          question: "Is this an app?",
          answer:
            "No. FinFix is a Telegram bot. No installation needed, everything works directly in chat.",
        },

        {
          id: 3,
          question: "How secure is it?",
          answer:
            "All data is stored only with you. FinFix doesn't require login, passwords or bank cards. We only save your Telegram ID and nickname — no phone numbers, email or banking data.",
        },
        {
          id: 4,
          question: "What data can be tracked?",
          answer:
            "Debts, income, expenses, installments. You can export statistics and CSV reports for analysis in Excel or Google Sheets.",
        },
        {
          id: 5,
          question: "Is it mobile-friendly?",
          answer:
            "Yes, FinFix is specifically designed for mobile devices and works directly in Telegram.",
        },
        {
          id: 6,
          question: "Can I export data?",
          answer:
            "Yes, CSV export by categories is supported — convenient for Excel and Google Sheets.",
        },
        {
          id: 7,
          question: "Where does my data go?",
          answer:
            "All information is stored in a reliable PostgreSQL database. You don't have a personal account or profile, data access is only through Telegram session. You are the only one who interacts with the bot.",
        },
        {
          id: 8,
          question: "Who can see my finances?",
          answer:
            "Administrator has technical access to the database where your records are stored (debts, expenses and income). However, we don't use or analyze this data, it's not shared with third parties. All information is stored in a secure PostgreSQL database and used only for bot operation.",
        },
        {
          id: 9,
          question: "Is data shared with third parties?",
          answer:
            "Never. Data is not shared with marketers, analysts, advertisers or third-party services. FinFix is a tool, not a platform with commercial interests.",
        },
        {
          id: 10,
          question: "Are there hidden fees or trackers?",
          answer:
            "No hidden fees, analytics SDKs or marketing trackers. Only Telegram and PostgreSQL — nothing else.",
        },
      ],

      // Testimonials
      testimonial1Name: "Nikolay Petrenko",
      testimonial1Role: "Marketer, Kyiv",
      testimonial1Text:
        "I was looking for a simple way to track my loans and installments for a long time. FinFix turned out to be exactly what I needed — everything in Telegram, no extra apps. I especially like the automatic calculation of monthly payments. In 3 months of use, I finally took control of all debts.",
      testimonial2Name: "Anna Kovalenko",
      testimonial2Role: "IT Manager, Lviv",
      testimonial2Text:
        "As a technical person, I appreciate simplicity and functionality. FinFix is the perfect solution for financial tracking. CSV export allows for detailed analytics, and Monobank integration saves a lot of time. I recommend it to everyone who takes their money seriously.",

      // Motivational section
      motivationalTitle: "Transfer all your financial obligations",
      motivationalSubtitle:
        "Keep statistics always in your pocket. More control — less stress.",
      motivationalSetup: "5 minutes setup",
      motivationalControl: "Full control",
      motivationalAccess: "Always at hand",

      // Security badge
      securityBadge: "🔒 Data protected • No third parties • PostgreSQL",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900"></div>

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 animate-pulse"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-jade-600/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-300/40 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-teal-300/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-40 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-teal-300/50 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-jade-300/40 rounded-full animate-bounce"></div>
        </div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content with backdrop blur */}
      <div className="relative z-10 backdrop-blur-sm">
        {/* Modern Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg transition-transform duration-300 ${
            isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a
                href="#hero"
                className="flex items-center gap-3 group cursor-pointer"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">
                    <Image
                      src="money-svgrepo-com.svg"
                      alt="FinFix Logo"
                      width={40}
                      height={40}
                    />
                  </span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                    FinFix
                  </h1>
                  <p className="text-xs text-emerald-200/80 -mt-1 group-hover:text-emerald-100/90 transition-colors duration-300">
                    Financial Control
                  </p>
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#hero"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group w-16 text-center"
                >
                  {t.home}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#features"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group w-24 text-center"
                >
                  {t.features}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#demo"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group w-16 text-center"
                >
                  {t.demo}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#steps"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group w-28 text-center"
                >
                  {t.howToStart}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group w-20 text-center"
                >
                  {t.testimonials}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#faq"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group w-12 text-center"
                >
                  {t.faq}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </div>

              {/* Mobile Language Switcher & Menu Button */}
              <div className="flex items-center gap-3 md:hidden">
                {/* Mobile Language Switcher */}
                <div className="relative mobile-language-dropdown">
                  <button
                    onClick={toggleMobileLangDropdown}
                    className="flex items-center justify-center gap-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-2 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30"
                  >
                    <span className="text-xs">
                      {language === "ua"
                        ? "UA"
                        : language === "ru"
                        ? "RU"
                        : "EN"}
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isMobileLangDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Mobile Language Dropdown */}
                  {isMobileLangDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-slate-800/95 backdrop-blur-xl border border-emerald-400/30 rounded-lg shadow-2xl overflow-hidden z-50 min-w-36">
                      <button
                        onClick={() => changeLanguage("ua")}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-600/20 transition-all duration-200 ${
                          language === "ua"
                            ? "bg-emerald-600/20 text-emerald-100"
                            : "text-white/90"
                        }`}
                      >
                        <span className="text-xs font-medium">Українська</span>
                        {language === "ua" && (
                          <svg
                            className="w-3 h-3 ml-auto text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => changeLanguage("ru")}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-600/20 transition-all duration-200 ${
                          language === "ru"
                            ? "bg-emerald-600/20 text-emerald-100"
                            : "text-white/90"
                        }`}
                      >
                        <span className="text-xs font-medium">Русский</span>
                        {language === "ru" && (
                          <svg
                            className="w-3 h-3 ml-auto text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => changeLanguage("en")}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-600/20 transition-all duration-200 ${
                          language === "en"
                            ? "bg-emerald-600/20 text-emerald-100"
                            : "text-white/90"
                        }`}
                      >
                        <span className="text-xs font-medium">English</span>
                        {language === "en" && (
                          <svg
                            className="w-3 h-3 ml-auto text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    className={`w-6 h-6 text-white transition-transform duration-200 ${
                      isMobileMenuOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop Language Switcher & CTA Button */}
              <div className="hidden md:flex items-center gap-4">
                {/* Language Switcher */}
                <div className="hidden md:block relative language-dropdown">
                  <button
                    onClick={toggleLanguageDropdown}
                    className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30 min-w-16"
                  >
                    <span className="text-xs">
                      {language === "ua"
                        ? "UA"
                        : language === "ru"
                        ? "RU"
                        : "EN"}
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isLanguageDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Language Dropdown */}
                  {isLanguageDropdownOpen && (
                    <div className="absolute top-full right-0 mt-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl overflow-hidden z-50 min-w-48">
                      <button
                        onClick={() => changeLanguage("ua")}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/20 transition-all duration-200 ${
                          language === "ua"
                            ? "bg-white/10 text-emerald-100"
                            : "text-white/90"
                        }`}
                      >
                        <span className="font-medium">Українська</span>
                        {language === "ua" && (
                          <svg
                            className="w-4 h-4 ml-auto text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => changeLanguage("ru")}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/20 transition-all duration-200 ${
                          language === "ru"
                            ? "bg-white/10 text-emerald-100"
                            : "text-white/90"
                        }`}
                      >
                        <span className="font-medium">Русский</span>
                        {language === "ru" && (
                          <svg
                            className="w-4 h-4 ml-auto text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => changeLanguage("en")}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/20 transition-all duration-200 ${
                          language === "en"
                            ? "bg-white/10 text-emerald-100"
                            : "text-white/90"
                        }`}
                      >
                        <span className="font-medium">English</span>
                        {language === "en" && (
                          <svg
                            className="w-4 h-4 ml-auto text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>
                <Link
                  href="https://t.me/finfix_app_bot"
                  className="hidden sm:inline-flex items-center justify-center gap-2 bg-emerald-600/20 backdrop-blur-sm hover:bg-emerald-500/30 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-emerald-400/30 w-48"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.567-.44.708-.89.44l-2.46-1.81-1.18 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.45-4.02c.19-.17-.04-.27-.3-.1l-5.5 3.46-2.37-.74c-.52-.16-.53-.52.11-.77l9.26-3.57c.43-.16.8.1.66.77z" />
                  </svg>
                  {t.launchBot}
                </Link>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden bg-slate-900/95 backdrop-blur-xl border-t border-emerald-400/20`}
            >
              <div className="py-4 space-y-2">
                <a
                  href="#hero"
                  className="block text-white hover:text-emerald-200 font-medium transition-all duration-200 py-3 px-6 hover:bg-emerald-600/20 hover:border-l-4 hover:border-emerald-400"
                  onClick={closeMobileMenu}
                >
                  {t.home}
                </a>
                <a
                  href="#features"
                  className="block text-white hover:text-emerald-200 font-medium transition-all duration-200 py-3 px-6 hover:bg-emerald-600/20 hover:border-l-4 hover:border-emerald-400"
                  onClick={closeMobileMenu}
                >
                  {t.features}
                </a>
                <a
                  href="#demo"
                  className="block text-white hover:text-emerald-200 font-medium transition-all duration-200 py-3 px-6 hover:bg-emerald-600/20 hover:border-l-4 hover:border-emerald-400"
                  onClick={closeMobileMenu}
                >
                  {t.demo}
                </a>
                <a
                  href="#steps"
                  className="block text-white hover:text-emerald-200 font-medium transition-all duration-200 py-3 px-6 hover:bg-emerald-600/20 hover:border-l-4 hover:border-emerald-400"
                  onClick={closeMobileMenu}
                >
                  {t.howToStart}
                </a>
                <a
                  href="#testimonials"
                  className="block text-white hover:text-emerald-200 font-medium transition-all duration-200 py-3 px-6 hover:bg-emerald-600/20 hover:border-l-4 hover:border-emerald-400"
                  onClick={closeMobileMenu}
                >
                  {t.testimonials}
                </a>
                <a
                  href="#faq"
                  className="block text-white hover:text-emerald-200 font-medium transition-all duration-200 py-3 px-6 hover:bg-emerald-600/20 hover:border-l-4 hover:border-emerald-400"
                  onClick={closeMobileMenu}
                >
                  {t.faq}
                </a>
                {/* Separator */}
                <div className="border-t border-emerald-400/20 my-4"></div>

                {/* CTA Button */}
                <div className="px-6 pt-4">
                  <Link
                    href="https://t.me/finfix_app_bot"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    onClick={closeMobileMenu}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.567-.44.708-.89.44l-2.46-1.81-1.18 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.45-4.02c.19-.17-.04-.27-.3-.1l-5.5 3.46-2.37-.74c-.52-.16-.53-.52.11-.77l9.26-3.57c.43-.16.8.1.66.77z" />
                    </svg>
                    {t.launchBot}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Hero Section - Full Height */}
        <div
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center px-4 relative pt-20 pb-16"
        >
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex justify-center mb-6 px-4">
              <div className="inline-flex items-center px-3 py-2 md:px-4 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white border border-white/30 shadow-lg max-w-[95vw]">
                <span
                  className={`w-2 h-2 ${
                    isInDevelopment ? "bg-yellow-400" : "bg-green-400"
                  } rounded-full mr-2 animate-pulse flex-shrink-0`}
                ></span>
                {/* Показываем полный текст только на экранах больше 700px */}
                <span className="hidden min-[700px]:inline">{t.heroBadge}</span>
                {isInDevelopment && (
                  <span className="text-yellow-200 min-[700px]:ml-2 text-center leading-tight">
                    {t.heroBadgeDev}
                  </span>
                )}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-lg">
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="font-display text-lg md:text-xl lg:text-2xl text-emerald-50 mb-3 font-medium drop-shadow-md">
              {t.heroSubtitle}
            </p>

            <p className="font-body text-base md:text-lg text-emerald-100/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
              {t.heroDescription}
              <br className="hidden md:block" />
              {t.heroDescriptionExtra}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="https://t.me/finfix_app_bot" className="group">
                <button className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 md:py-6 md:px-12 rounded-3xl text-lg md:text-xl lg:text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/25 animate-pulse-slow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/telegram-svgrepo-com.svg"
                    alt="Telegram"
                    width={28}
                    height={28}
                    className="z-10 md:w-8 md:h-8"
                  />
                  <span className="z-10">{t.heroButton}</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator - Fixed at bottom */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="text-white/60 text-xs md:text-sm mb-1 md:mb-2">
              {t.heroScrollText}
            </div>
            <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Second Section - Unique Selling Proposition */}
        <div
          id="features"
          className="min-h-screen flex flex-col justify-center items-center px-4"
        >
          <div className="max-w-6xl mx-auto">
            {/* USP Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-emerald-50 mb-6 drop-shadow-lg">
                {t.featuresTitle}
              </h2>
              <p className="font-body text-xl text-emerald-100/90 max-w-3xl mx-auto drop-shadow-md">
                {t.featuresSubtitle}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <Image
                    src="/debt-icon.png"
                    alt="Debt"
                    width={37}
                    height={37}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-50 mb-2">
                  {t.debtTracking}
                </h3>
                <p className="font-body text-emerald-100/80 text-sm">
                  {t.debtTrackingDesc}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-600 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <Image
                    src="/expenses-icon.png"
                    alt="Income and Expense"
                    width={45}
                    height={45}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-50 mb-2">
                  {t.incomeExpenses}
                </h3>
                <p className="font-body text-emerald-100/80 text-sm">
                  {t.incomeExpensesDesc}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-cyan-800 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <Image
                    src="/analytics-icon.png"
                    alt="Income and Expense"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-50 mb-2">
                  {t.smartAnalytics}
                </h3>
                <p className="font-body text-emerald-100/80 text-sm">
                  {t.smartAnalyticsDesc}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-jade-500 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <Image
                    src="/analytics-icon.png"
                    alt="Income and Expense"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-50 mb-2">
                  {t.csvExport}
                </h3>
                <p className="font-body text-emerald-100/80 text-sm">
                  {t.csvExportDesc}
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <Image
                    src="/crud-icon.svg"
                    alt="Income and Expense"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-50 mb-2">
                  {t.fullManagement}
                </h3>
                <p className="font-body text-emerald-100/80 text-sm">
                  {t.fullManagementDesc}
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-yellow-500 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <Image
                    src="/secure-icon.png"
                    alt="Income and Expense"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-50 mb-2">
                  {t.security}
                </h3>
                <p className="font-body text-emerald-100/80 text-sm">
                  {t.securityDesc}
                </p>
              </div>
            </div>

            {/* Demo Section */}
            <div id="demo" className="mt-20">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-50 text-center mb-6 drop-shadow-lg">
                {t.demoTitle}
              </h3>
              <p className="font-body text-xl text-emerald-100/90 text-center mb-12 max-w-2xl mx-auto drop-shadow-md">
                {t.demoSubtitle}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Screen 1: Main Menu */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {/* iPhone Frame */}
                  <div className="bg-black rounded-[2.5rem] p-1">
                    {/* iPhone Screen */}
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-2 bg-black text-white text-xs">
                        <div className="flex items-center gap-1">
                          <span>9:41</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-2 bg-green-500 m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Screen Content */}
                      <div className="p-4 pb-8">
                        {/* Telegram Header */}
                        <div className="flex items-center gap-3 mb-4 p-3 bg-blue-600 rounded-t-2xl">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Image
                              src="/telegram-svgrepo-com.svg"
                              alt="Telegram"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">
                              FinFix Bot
                            </div>
                            <div className="text-blue-100 text-xs">online</div>
                          </div>
                        </div>

                        {/* Chat Content */}
                        <div className="bg-gray-800 rounded-b-2xl rounded-t-none p-4 mb-4">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              📊
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">
                                FinFix - Personal Finance Manager
                              </div>
                            </div>
                          </div>

                          <div className="text-white mb-4">
                            <div className="text-lg mb-2">
                              👋 Welcome, Alex!
                            </div>
                            <div className="text-sm text-gray-300 mb-3">
                              What you can do:
                            </div>
                            <div className="space-y-1 text-xs text-gray-300">
                              <div>
                                📊 Explore - View comprehensive financial
                                overview
                              </div>
                              <div>
                                💳 New Debt - Add installments, bank debts
                              </div>
                              <div>
                                📈 Track Expenses - Manage monthly expenses
                              </div>
                              <div>
                                🧮 Calculate Fees - Automatic calculations
                              </div>
                              <div>
                                📊 Dashboards & graphs - Monitor patterns
                              </div>
                            </div>
                            <div className="text-yellow-400 text-xs mt-3">
                              Choose an option below to get started 💡
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-600 text-white text-xs py-2 px-3 rounded-lg text-center">
                              📊 Explore
                            </div>
                            <div className="bg-orange-600 text-white text-xs py-2 px-3 rounded-lg text-center">
                              💳 New Debt
                            </div>
                          </div>
                          <div className="bg-gray-700 text-white text-xs py-2 px-3 rounded-lg text-center mt-2">
                            👤 Profile
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="flex justify-center pt-2">
                          <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen 2: Financial Dashboard */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {/* iPhone Frame */}
                  <div className="bg-black rounded-[2.5rem] p-1">
                    {/* iPhone Screen */}
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-2 bg-black text-white text-xs">
                        <div className="flex items-center gap-1">
                          <span>9:41</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-2 bg-green-500 m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Screen Content */}
                      <div className="p-4 pb-8">
                        {/* Telegram Header */}
                        <div className="flex items-center gap-3 mb-4 p-3 bg-blue-600 rounded-t-2xl">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Image
                              src="/telegram-svgrepo-com.svg"
                              alt="Telegram"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">
                              FinFix Bot
                            </div>
                            <div className="text-blue-100 text-xs">online</div>
                          </div>
                        </div>

                        {/* Chat Content */}
                        <div className="bg-gray-800 rounded-b-2xl rounded-t-none p-4 mb-4">
                          <div className="text-white mb-4">
                            <div className="flex items-center gap-2 text-lg mb-3">
                              🎯 <span>Your Financial Dashboard</span>
                            </div>

                            <div className="bg-gray-700 rounded-lg p-3 mb-4">
                              <div className="text-sm font-medium mb-2">
                                📊 Quick Overview
                              </div>
                              <div className="space-y-1 text-xs text-gray-300">
                                <div className="flex justify-between">
                                  <span>✅ Debts: 3 items</span>
                                  <span>₴207007.00</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>✅ Installments: 10 items</span>
                                  <span>₴94897.58</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>✅ Expenses: 7 items</span>
                                  <span>₴49000.00</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>✅ Incomes: 1 items</span>
                                  <span>₴110000.00</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-700 rounded-lg p-3 mb-4">
                              <div className="text-sm font-medium mb-2">
                                💰 Summary
                              </div>
                              <div className="space-y-1 text-xs text-gray-300">
                                <div>• Total Income: ₴110000.00</div>
                                <div>• Total Obligations: ₴350904.58</div>
                                <div>• Next Monthly Payment: ₴83100.46</div>
                              </div>
                            </div>

                            <div className="text-xs text-gray-400 italic">
                              Click the buttons below to explore each category
                              in detail.
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-2">
                            <div className="bg-red-600 text-white text-xs py-2 px-2 rounded text-center">
                              💳 Debts
                            </div>
                            <div className="bg-orange-600 text-white text-xs py-2 px-2 rounded text-center">
                              💰 Expenses
                            </div>
                            <div className="bg-green-600 text-white text-xs py-2 px-2 rounded text-center">
                              💵 Incomes
                            </div>
                          </div>
                          <div className="bg-gray-700 text-white text-xs py-2 px-3 rounded text-center">
                            ↩️ Main menu
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="flex justify-center pt-2">
                          <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen 3: Debt Details */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {/* iPhone Frame */}
                  <div className="bg-black rounded-[2.5rem] p-1">
                    {/* iPhone Screen */}
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-2 bg-black text-white text-xs">
                        <div className="flex items-center gap-1">
                          <span>9:41</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-2 bg-green-500 m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Screen Content */}
                      <div className="p-4 pb-8">
                        {/* Telegram Header */}
                        <div className="flex items-center gap-3 mb-4 p-3 bg-blue-600 rounded-t-2xl">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Image
                              src="/telegram-svgrepo-com.svg"
                              alt="Telegram"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">
                              FinFix Bot
                            </div>
                            <div className="text-blue-100 text-xs">online</div>
                          </div>
                        </div>

                        {/* Chat Content */}
                        <div className="bg-gray-800 rounded-b-2xl rounded-t-none p-4 mb-4">
                          <div className="flex items-center gap-2 text-white mb-4">
                            <span>🏷️</span>
                            <span className="text-sm font-medium">
                              Other Debts
                            </span>
                          </div>

                          <div className="bg-gray-700 rounded-lg p-3 mb-4">
                            <div className="text-white text-sm mb-2">
                              📂 Other Debts Summary (🇺🇦 UAH):
                            </div>
                            <div className="text-xs text-gray-300 space-y-1">
                              <div className="flex justify-between">
                                <span>💰 Total:</span>
                                <span>₴6000.00</span>
                              </div>
                              <div className="flex justify-between">
                                <span>📊 Count:</span>
                                <span>1 debt</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-700 rounded-lg p-3 mb-4">
                            <div className="text-white text-xs space-y-1">
                              <div>
                                <span className="text-gray-400">🧺 From:</span>{" "}
                                Wash machine
                              </div>
                              <div>
                                <span className="text-gray-400">
                                  💰 Amount:
                                </span>{" "}
                                ₴6000.00
                              </div>
                              <div>
                                <span className="text-gray-400">💬 Note:</span>{" "}
                                Due by 15/06/2025.000Z
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="bg-yellow-600 text-white text-xs py-1 px-2 rounded text-center">
                                ✏️ Edit
                              </div>
                              <div className="bg-red-600 text-white text-xs py-1 px-2 rounded text-center">
                                ❌ Delete
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-600 text-white text-xs py-2 px-3 rounded mb-2 text-center">
                            📊 Download Other Debts CSV
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 text-white text-xs py-1 px-2 rounded text-center">
                              💳 Bank Debts
                            </div>
                            <div className="bg-gray-700 text-white text-xs py-1 px-2 rounded text-center">
                              ⏰ Installments
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-700 text-white text-xs py-1 px-2 rounded text-center">
                              🔍 Explore
                            </div>
                            <div className="bg-gray-700 text-white text-xs py-1 px-2 rounded text-center">
                              ↩️ Main menu
                            </div>
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="flex justify-center pt-2">
                          <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Start Section */}
              <div id="steps" className="mt-32 mb-32">
                <div className="text-center mb-16">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-50 mb-6 drop-shadow-lg">
                    {t.stepsTitle}
                  </h3>
                  <p className="font-body text-xl text-emerald-100/90 max-w-2xl mx-auto drop-shadow-md">
                    {t.stepsSubtitle}
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  {/* Interactive Timeline */}
                  <InteractiveTimeline t={t} />

                  {/* Motivational section */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white mt-16 shadow-2xl">
                    <div className="max-w-3xl mx-auto">
                      <h4 className="font-display text-2xl md:text-3xl font-bold mb-4">
                        {t.motivationalTitle}
                      </h4>
                      <p className="font-body text-lg md:text-xl mb-6 text-emerald-100">
                        {t.motivationalSubtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center gap-2 text-emerald-100">
                          <span className="text-2xl">⏱️</span>
                          <span>{t.motivationalSetup}</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-100">
                          <span className="text-2xl">🎯</span>
                          <span>{t.motivationalControl}</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-100">
                          <span className="text-2xl">📱</span>
                          <span>{t.motivationalAccess}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div id="testimonials" className="mt-20 mb-20">
                <div className="text-center mb-16">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-50 mb-4 drop-shadow-lg">
                    {t.testimonialsTitle}
                  </h3>
                  <p className="font-body text-xl text-emerald-100/90 drop-shadow-md">
                    {t.testimonialsSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Testimonial 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-300/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-emerald-400/30">
                        <Image
                          src="/marketolog.jpeg"
                          alt="Николай Петренко"
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="font-display font-bold text-emerald-50 text-lg">
                          {t.testimonial1Name}
                        </div>
                        <div className="font-body text-emerald-100/80">
                          {t.testimonial1Role}
                        </div>
                        <div className="flex text-yellow-400 mt-1">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                    </div>
                    <blockquote className="font-body text-emerald-100/90 text-lg leading-relaxed italic">
                      &quot;{t.testimonial1Text}&quot;
                    </blockquote>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-300/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-emerald-400/30">
                        <Image
                          src="/anna-otziv.jpeg"
                          alt="Анна Коваленко"
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="font-display font-bold text-emerald-50 text-lg">
                          {t.testimonial2Name}
                        </div>
                        <div className="font-body text-emerald-100/80">
                          {t.testimonial2Role}
                        </div>
                        <div className="flex text-yellow-400 mt-1">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                    </div>
                    <blockquote className="font-body text-emerald-100/90 text-lg leading-relaxed italic">
                      &quot;{t.testimonial2Text}&quot;
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="mt-20 mb-20">
                <div className="text-center mb-16">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-emerald-50 mb-4 drop-shadow-lg">
                    {t.faqTitle}
                  </h3>
                  <p className="font-body text-xl text-emerald-100/90 max-w-3xl mx-auto drop-shadow-md">
                    {t.faqSubtitle}
                  </p>

                  {/* Security Badge */}
                  <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 shadow-lg">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="font-body text-sm font-medium text-emerald-100">
                      {t.securityBadge}
                    </span>
                  </div>
                </div>

                <FAQ t={t} />
              </div>

              {/* Final CTA */}
              <div className="text-center relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-teal-400/20 rounded-full blur-2xl animate-bounce"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                    {t.finalCtaTitle}
                  </h3>
                  <p className="font-body text-xl md:text-2xl text-emerald-100/90 mb-12 max-w-2xl mx-auto">
                    {t.finalCtaSubtitle}
                  </p>

                  <div className="mb-12">
                    <Link
                      href="https://t.me/finfix_app_bot"
                      className="group inline-block"
                    >
                      <button className="relative flex items-center gap-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-bold py-8 px-16 rounded-full text-2xl md:text-3xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/30 animate-pulse-slow overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                          src="/telegram-svgrepo-com.svg"
                          alt="Telegram"
                          width={36}
                          height={36}
                          className="z-10"
                        />
                        <span className="z-10">{t.launchBot}</span>

                        {/* Animated dots */}
                        <div className="absolute -top-2 -right-2 flex gap-1">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                          <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping animation-delay-200"></div>
                          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping animation-delay-400"></div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-30 blur-xl scale-110"></div>
                      </button>
                    </Link>
                  </div>

                  {/* Benefits */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
