import React, { useEffect } from "react";
import "./HomePages.css";

const courses = [
  {
    number: "01",
    icon: "⚛",
    title: "Frontend иштеп чыгуу",
    description: "HTML, CSS, JavaScript, React — нөлдөн баштап жумушка чейин.",
    duration: "6 ай",
    level: "Башталгыч",
    price: "12 000 сом/ай",
  },
  {
    number: "02",
    icon: "▦",
    title: "Backend иштеп чыгуу",
    description: "Node.js, Python, маалымат базалары жана сервер архитектурасы.",
    duration: "7 ай",
    level: "Орто",
    price: "13 000 сом/ай",
  },
  {
    number: "03",
    icon: "✎",
    title: "UI/UX Дизайн",
    description: "Figma, дизайн-ой жүгүртүү, прототиптөө жана колдонуучу тажрыйбасы.",
    duration: "4 ай",
    level: "Башталгыч",
    price: "10 000 сом/ай",
  },
  {
    number: "04",
    icon: "▥",
    title: "Data Science",
    description: "Машиналык үйрөнүү, маалыматтарды талдоо жана нейрон тармактары.",
    duration: "8 ай",
    level: "Жогорку",
    price: "15 000 сом/ай",
  },
  {
    number: "05",
    icon: "⬡",
    title: "Киберкоопсуздук",
    description: "Системаларды коргоо, этикалык хакинг жана тармак коопсуздугу.",
    duration: "6 ай",
    level: "Орто",
    price: "14 000 сом/ай",
  },
  {
    number: "06",
    icon: "▯",
    title: "Мобилдик иштеп чыгуу",
    description: "Мобилдик тиркемелерди жасоо үчүн React Native жана Flutter.",
    duration: "5 ай",
    level: "Орто",
    price: "13 000 сом/ай",
  },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python",
  "Figma", "PostgreSQL", "Docker", "Git",
  "Next.js", "MongoDB", "Vue.js", "Django",
];

const HomePages = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".home-page > section, .home-page .stat-card, .home-page .course-card, .home-page .advantage-card, .home-page .teacher-card"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-label">IT КУРСТАР</span>

            <h1>
              БИЗ ЖӨН ЭЛЕ
              <br />
              ОКУТПАЙБЫЗ —
              <br />
              <span>АДИС ДАЯРДАЙБЫЗ!</span>
            </h1>

            <p className="hero-description">
              Ihsan IT Academy — IT тармагында кесипкөй адистерди
              даярдоого багытталган билим берүү борбору. Теориялык
              билимди практикалык тапшырмалар, реалдуу долбоорлор жана
              менторлордун колдоосу менен бекемдейбиз.
            </p>

            <div className="hero-buttons">
              <a href="/contacts" className="hero-btn primary-btn">
                Окууга катталуу <span>→</span>
              </a>

              <a href="/contacts" className="hero-btn secondary-btn">
                Акысыз консультация алуу
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-bg"></div>
            <div className="hero-decoration">
              <span></span>
            </div>

            <img
              src="/images/hero-person.png"
              alt="Ihsan IT Academy"
              className="hero-person"
            />
          </div>

        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <h2>2 жыл</h2>
            <p>Рынокто</p>
          </div>

          <div className="stat-card">
            <h2>Практика</h2>
            <p>Окуу долбоорлорунда</p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="technologies-section">
        <div className="technologies-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <div className="technology-item" key={index}>
              <span className="tech-dot"></span>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses-section" id="courses">
        <div className="courses-container">

          <div className="courses-header">
            <div>
              <span className="section-label">КУРСТАР</span>
              <h2>Багытты тандоо</h2>
            </div>

            <a href="/courses" className="all-courses-link">
              Бардык программалар <span>→</span>
            </a>
          </div>

          <div className="courses-list">
            {courses.map((course) => (
              <a
                href="/courses"
                className="course-card"
                key={course.number}
              >
                <div className="course-number">
                  {course.number}
                </div>

                <div className="course-icon">
                  {course.icon}
                </div>

                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>

                <div className="course-meta">
                  <div className="meta-item">
                    <span>УЗАКТЫГЫ</span>
                    <strong>{course.duration}</strong>
                  </div>

                  <div className="meta-item">
                    <span>ДЕҢГЭЭЛ</span>
                    <strong className="course-level">
                      {course.level}
                    </strong>
                  </div>

                  <div className="meta-item">
                    <span>БААСЫ</span>
                    <strong>{course.price}</strong>
                  </div>
                </div>

                <div className="course-arrow">→</div>
              </a>
            ))}
          </div>

        </div>
      </section>

      
      {/* INTERNSHIP SECTION */}
      <section className="internship-section">
        <div className="internship-card">

          <div className="internship-content">
            <span className="internship-label">
              СТАЖИРОВКА · 3 АЙ
            </span>

            <h2>
              Ihsan IT Academy — 3 айлык практикалык
              стажировка программасы
            </h2>

            <p>
              3 айлык практикалык стажировка: реалдуу долбоорлор,
              команда менен иштөө, портфолио жана резюме даярдоо.
              Ihsan IT Academy студенттери үчүн акысыз.
            </p>

            <div className="internship-features">
              <span>✓ Реалдуу IT долбоорлор</span>
              <span>✓ Команда менен иштөө</span>
              <span>✓ Портфолио жана резюме</span>
              <span>✓ Менторлордун колдоосу</span>
            </div>
          </div>

          <div className="internship-buttons">
            <a href="/contacts" className="internship-primary">
              Стажировкага катталуу <span>→</span>
            </a>

            <a href="/courses" className="internship-secondary">
              Көбүрөөк билүү <span>→</span>
            </a>
          </div>

        </div>
      </section>


      {/* SPECIAL OFFER SECTION */}
      <section className="offer-section">
        <div className="offer-card">

          <div className="offer-content">
            <span className="offer-label">
              АТАЙЫН СУНУШ
            </span>

            <h2>
              Офиске келип катталыңыз — 10% жеңилдик
            </h2>

            <p>
              Академиянын офисине жеке келип, маалымат алып,
              катталган адамдарга 10% жеңилдик берилет.
            </p>
          </div>

          <a href="/features" className="offer-button">
            Толук маалымат <span>→</span>
          </a>

        </div>
      </section>


      {/* ADVANTAGES SECTION */}
      <section className="advantages-section">
        <div className="advantages-container">

          <div className="advantages-header">
            <span>АРТЫКЧЫЛЫКТАР</span>
            <h2>Биздин артыкчылыктар</h2>
          </div>

          <div className="advantages-grid">

            <div className="advantage-card">
              <h3>01</h3>
              <p>Акысыз англис тили сабактары.</p>
            </div>

            <div className="advantage-card">
              <h3>02</h3>
              <p>
                Жеке өнүгүү сабактары: коммуникация,
                убакытты башкаруу, жоопкерчилик жана командада иштөө.
              </p>
            </div>

            <div className="advantage-card">
              <h3>03</h3>
              <p>
                Чет өлкөлөрдө иштеген программисттер менен
                онлайн жолугушуулар.
              </p>
            </div>

            <div className="advantage-card">
              <h3>04</h3>
              <p>
                Академиянын өз студенттери үчүн акысыз стажировка.
              </p>
            </div>

            <div className="advantage-card">
              <h3>05</h3>
              <p>
                Практикалык долбоорлор жана портфолио топтоо.
              </p>
            </div>

            <div className="advantage-card">
              <h3>06</h3>
              <p>
                Резюме түзүү, маектешүүгө даярдануу жана жумушка
                орношууга колдоо.
              </p>
            </div>

            <div className="advantage-card">
              <h3>07</h3>
              <p>
                Казахстандагы IT компанияларында стажировкадан
                өтүү мүмкүнчүлүгүнө талапкерлерди сунуштоо.
              </p>
            </div>

            <div className="advantage-card">
              <h3>08</h3>
              <p>
                AI инструменттери жана заманбап технологиялар
                боюнча кошумча билим.
              </p>
            </div>

          </div>
        </div>
      </section>


{/* TEACHERS SECTION */}
<section className="teachers-section" id="teachers">
  <div className="teachers-container">

    <div className="teachers-header">
      <div>
        <span className="teachers-label">МУГАЛИМДЕР</span>
        <h2>Биздин окутуучулар</h2>
      </div>

      <a href="/teachers" className="teachers-all-link">
        Бардык окутуучулар <span>→</span>
      </a>
    </div>

    <div className="teachers-grid">

      {/* TEACHER 1 */}
      <div className="teacher-card">
        <div className="teacher-experience">
          9 ЖЫЛДЫК ТАЖРЫЙБА
        </div>

        <div className="teacher-profile">
          <div className="teacher-avatar">♙</div>
          <div>
            <h3>Алена Нурбекова</h3>
            <span>Frontend боюнча ментор</span>
          </div>
        </div>

        <p className="teacher-description">
          Студенттерге React жана TypeScript менен заманбап
          интерактивдүү интерфейстерди жасоого жардам берет.
          Архитектураны, тестирлөөнү жана production-мамилелерди үйрөтөт.
        </p>

        <div className="teacher-skills-title">
          Адистешүү
        </div>

        <div className="teacher-skills">
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>Web Animation</span>
        </div>

        <a href="/contacts" className="teacher-button">
          Курска жазылуу
        </a>
      </div>

      {/* TEACHER 2 */}
      <div className="teacher-card">
        <div className="teacher-experience">
          11 ЖЫЛДЫК ТАЖРЫЙБА
        </div>

        <div className="teacher-profile">
          <div className="teacher-avatar">♙</div>
          <div>
            <h3>Бектур Султанов</h3>
            <span>Backend боюнча ментор</span>
          </div>
        </div>

        <p className="teacher-description">
          Сервер технологиялары жана архитектура боюнча
          адис. Студенттерге чыныгы долбоорлор үчүн тез
          жана ишенимдүү API курууга жардам берет.
        </p>

        <div className="teacher-skills-title">
          Адистешүү
        </div>

        <div className="teacher-skills">
          <span>Node.js</span>
          <span>Python</span>
          <span>PostgreSQL</span>
          <span>REST API</span>
        </div>

        <a href="/contacts" className="teacher-button">
          Курска жазылуу
        </a>
      </div>

      {/* TEACHER 3 */}
      <div className="teacher-card">
        <div className="teacher-experience">
          8 ЖЫЛДЫК ТАЖРЫЙБА
        </div>

        <div className="teacher-profile">
          <div className="teacher-avatar">♙</div>
          <div>
            <h3>Мария Жумабаева</h3>
            <span>UI/UX боюнча ментор</span>
          </div>
        </div>

        <p className="teacher-description">
          Бүтүрүүчүлөрдүн долбоорлору кесиптик көрүнүшү
          үчүн колдонуучу тажрыйбасын, прототиптөөнү жана
          визуалдык дизайнды үйрөтөт.
        </p>

        <div className="teacher-skills-title">
          Адистешүү
        </div>

        <div className="teacher-skills">
          <span>Figma</span>
          <span>UX Research</span>
          <span>Prototyping</span>
          <span>Design Systems</span>
        </div>

        <a href="/contacts" className="teacher-button">
          Курска жазылуу
        </a>
      </div>

    </div>
  </div>
</section>


{/* CONSULTATION SECTION */}
<section className="consultation-section" id="consultation">
  <div className="consultation-card">

    <div className="consultation-label">
      <span></span>
      АКЫСЫЗ КОНСУЛЬТАЦИЯ
    </div>

    <h2>
      IT карьераңды баштоого даярсыңбы?
    </h2>

    <p>
      Катталыңыз — максаттарыңызга жана даярдык
      <br />
      деңгээлиңизге ылайык курс тандайбыз.
    </p>

    <a href="/contacts" className="consultation-button">
      Акысыз катталуу <span>→</span>
    </a>

  </div>
</section>

    </div>
  );
};

export default HomePages;
