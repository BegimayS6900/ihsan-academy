
import React, { useEffect } from "react";
import "./AboutPage.css";

const teachers = [
  {
    name: "Алена Нурбекова",
    role: "Frontend боюнча ментор",
    experience: "9 жылдык тажрыйба",
  },
  {
    name: "Бектур Султанов",
    role: "Backend боюнча ментор",
    experience: "11 жылдык тажрыйба",
  },
  {
    name: "Мария Жумабаева",
    role: "UI/UX боюнча ментор",
    experience: "8 жылдык тажрыйба",
  },
];

const process = [
  {
    number: "01",
    title: "Консультация",
    description: "Акысыз жолугушуу, курс жана форматты тандоо.",
  },
  {
    number: "02",
    title: "Окуу",
    description: "Ментор менен жумасына 3 жолу практикалык сабактар.",
  },
  {
    number: "03",
    title: "Долбоорлор",
    description: "Портфолио үчүн чыныгы тапшырмалар жана кейстер.",
  },
  {
    number: "04",
    title: "Карьера",
    description: "Резюме, интервью жана жумуш издөөдө жардам.",
  },
];

function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".about-teachers-section .section-label, .about-teachers-section .section-title, .about-teachers-section .about-teacher-card"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("about-teacher-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <main>
        {/* HERO */}
        <section className="about-hero about-container">
          <div className="section-label">БИЗ ЖӨНҮНДӨ</div>

          <h1>Карьераларды өзгөрткөн академия</h1>

          <p className="hero-description">
            Ihsan IT Academy ар бирине IT чөйрөсүнө кирүү
            мүмкүнчүлүгүн берүү максаты менен түзүлгөн.
            Биз жөн гана код эмес, рынокко азыр керек болгон
            кесипкөй ой жүгүртүүнү жана көндүмдөрдү үйрөтөбүз.
          </p>

          <div className="stats">
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

        {/* MISSION */}
        <section className="about-container mission-section">
          <div className="mission-card">
            <div className="section-label">БИЗДИН МИССИЯ</div>
            <p>
              Жаштарга сапаттуу IT билим берип, алардын
              теориялык билимин практикалык тажрыйба менен
              бекемдеп, кесипкөй адис болуп калыптанышына
              көмөктөшүү.
            </p>
          </div>
        </section>

        {/* PRINCIPLE */}
        <section className="about-container principle-section">
          <div className="principle-card">
            <div className="section-label">БИЗДИН ПРИНЦИП</div>
            <h2>«Санга эмес – сапатка ишенебиз!»</h2>
          </div>
        </section>

        {/* TEACHERS */}
        <section className="about-container about-teachers-section">
          <div className="section-label">КОМАНДА</div>
          <h2 className="section-title">Биздин окутуучулар</h2>

          <div className="about-teachers-grid">
            {teachers.map((teacher) => (
              <div
                className="about-teacher-card"
                key={teacher.name}
              >
                <div className="about-teacher-avatar">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  </svg>
                </div>

                <h3>{teacher.name}</h3>

                <p className="about-teacher-role">
                  {teacher.role}
                </p>

                <p className="about-teacher-experience">
                  {teacher.experience}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="about-container process-section">
          <div className="section-label">ПРОЦЕСС</div>
          <h2 className="section-title">Окуу кандай өтөт</h2>

          <div className="process-grid">
            {process.map((item) => (
              <div className="process-card" key={item.number}>
                <div className="process-number">
                  {item.number}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="consultation-wrapper">
            <a href="/contacts" className="consultation-btn">
              Консультацияга жазылуу <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
