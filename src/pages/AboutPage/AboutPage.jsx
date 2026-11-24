import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

function AboutPage() {
  const { t, i18n } = useTranslation();

  const teachers = t("aboutPage.teachers.list", { returnObjects: true }) || [];
  const process = t("aboutPage.process.steps", { returnObjects: true }) || [];

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
  }, [i18n.language]);

  return (
    <div className="about-page">
      <main>
        {/* HERO */}
        <section className="about-hero about-container">
          <div className="section-label">{t("aboutPage.hero.label")}</div>

          <h1>{t("aboutPage.hero.title")}</h1>

          <p className="hero-description">
            {t("aboutPage.hero.description")}
          </p>

          <div className="stats">
            <div className="stat-card">
              <h2>{t("aboutPage.hero.stats.yearsValue")}</h2>
              <p>{t("aboutPage.hero.stats.yearsLabel")}</p>
            </div>

            <div className="stat-card">
              <h2>{t("aboutPage.hero.stats.practiceValue")}</h2>
              <p>{t("aboutPage.hero.stats.practiceLabel")}</p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="about-container mission-section">
          <div className="mission-card">
            <div className="section-label">{t("aboutPage.mission.label")}</div>
            <p>{t("aboutPage.mission.text")}</p>
          </div>
        </section>

        {/* PRINCIPLE */}
        <section className="about-container principle-section">
          <div className="principle-card">
            <div className="section-label">{t("aboutPage.principle.label")}</div>
            <h2>{t("aboutPage.principle.quote")}</h2>
          </div>
        </section>

        {/* TEACHERS */}
        <section className="about-container about-teachers-section">
          <div className="section-label">{t("aboutPage.teachers.label")}</div>
          <h2 className="section-title">{t("aboutPage.teachers.title")}</h2>

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
          <div className="section-label">{t("aboutPage.process.label")}</div>
          <h2 className="section-title">{t("aboutPage.process.title")}</h2>

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
              {t("aboutPage.process.ctaButton")} <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;