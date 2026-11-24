import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./HomePages.css";

const technologies = [
  "React", "TypeScript", "Node.js", "Python",
  "Figma", "PostgreSQL", "Docker", "Git",
  "Next.js", "MongoDB", "Vue.js", "Django",
];

const HomePages = () => {
  const { t, i18n } = useTranslation();

  const courses =
    t("homePage.coursesSection.list", { returnObjects: true }) || [];
  const internshipFeatures =
    t("homePage.internship.features", { returnObjects: true }) || [];
  const advantages =
    t("homePage.advantages.items", { returnObjects: true }) || [];
  const teachers =
    t("homePage.teachers.list", { returnObjects: true }) || [];

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
  }, [i18n.language]);

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-label">{t("homePage.hero.label")}</span>

            <h1>
              {t("homePage.hero.titleLine1")}
              <br />
              {t("homePage.hero.titleLine2")}
              <br />
              <span>{t("homePage.hero.titleHighlight")}</span>
            </h1>

            <p className="hero-description">
              {t("homePage.hero.description")}
            </p>

            <div className="hero-buttons">
              <a href="/contacts" className="hero-btn primary-btn">
                {t("homePage.hero.primaryBtn")} <span>→</span>
              </a>

              <a href="/contacts" className="hero-btn secondary-btn">
                {t("homePage.hero.secondaryBtn")}
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
            <h2>{t("homePage.hero.stats.yearsValue")}</h2>
            <p>{t("homePage.hero.stats.yearsLabel")}</p>
          </div>

          <div className="stat-card">
            <h2>{t("homePage.hero.stats.practiceValue")}</h2>
            <p>{t("homePage.hero.stats.practiceLabel")}</p>
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
              <span className="section-label">
                {t("homePage.coursesSection.label")}
              </span>
              <h2>{t("homePage.coursesSection.title")}</h2>
            </div>

            <a href="/courses" className="all-courses-link">
              {t("homePage.coursesSection.allLink")} <span>→</span>
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
                    <span>{t("homePage.coursesSection.metaDuration")}</span>
                    <strong>{course.duration}</strong>
                  </div>

                  <div className="meta-item">
                    <span>{t("homePage.coursesSection.metaLevel")}</span>
                    <strong className="course-level">
                      {course.level}
                    </strong>
                  </div>

                  <div className="meta-item">
                    <span>{t("homePage.coursesSection.metaPrice")}</span>
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
              {t("homePage.internship.label")}
            </span>

            <h2>{t("homePage.internship.title")}</h2>

            <p>{t("homePage.internship.description")}</p>

            <div className="internship-features">
              {internshipFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>

          <div className="internship-buttons">
            <a href="/contacts" className="internship-primary">
              {t("homePage.internship.primaryBtn")} <span>→</span>
            </a>

            <a href="/courses" className="internship-secondary">
              {t("homePage.internship.secondaryBtn")} <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* SPECIAL OFFER SECTION */}
      <section className="offer-section">
        <div className="offer-card">

          <div className="offer-content">
            <span className="offer-label">
              {t("homePage.offer.label")}
            </span>

            <h2>{t("homePage.offer.title")}</h2>

            <p>{t("homePage.offer.description")}</p>
          </div>

          <a href="/features" className="offer-button">
            {t("homePage.offer.button")} <span>→</span>
          </a>

        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="advantages-section">
        <div className="advantages-container">

          <div className="advantages-header">
            <span>{t("homePage.advantages.label")}</span>
            <h2>{t("homePage.advantages.title")}</h2>
          </div>

          <div className="advantages-grid">
            {advantages.map((item) => (
              <div className="advantage-card" key={item.number}>
                <h3>{item.number}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS SECTION */}
      <section className="teachers-section" id="teachers">
        <div className="teachers-container">

          <div className="teachers-header">
            <div>
              <span className="teachers-label">
                {t("homePage.teachers.label")}
              </span>
              <h2>{t("homePage.teachers.title")}</h2>
            </div>

            <a href="/teachers" className="teachers-all-link">
              {t("homePage.teachers.allLink")} <span>→</span>
            </a>
          </div>

          <div className="teachers-grid">
            {teachers.map((teacher) => (
              <div className="teacher-card" key={teacher.name}>
                <div className="teacher-experience">
                  {teacher.experience}
                </div>

                <div className="teacher-profile">
                  <div className="teacher-avatar">♙</div>
                  <div>
                    <h3>{teacher.name}</h3>
                    <span>{teacher.role}</span>
                  </div>
                </div>

                <p className="teacher-description">
                  {teacher.description}
                </p>

                <div className="teacher-skills-title">
                  {t("homePage.teachers.skillsTitle")}
                </div>

                <div className="teacher-skills">
                  {(teacher.skills || []).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <a href="/contacts" className="teacher-button">
                  {t("homePage.teachers.enrollBtn")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section className="consultation-section" id="consultation">
        <div className="consultation-card">

          <div className="consultation-label">
            <span></span>
            {t("homePage.consultation.label")}
          </div>

          <h2>{t("homePage.consultation.title")}</h2>

          <p>
            {t("homePage.consultation.descriptionLine1")}
            <br />
            {t("homePage.consultation.descriptionLine2")}
          </p>

          <a href="/contacts" className="consultation-button">
            {t("homePage.consultation.button")} <span>→</span>
          </a>

        </div>
      </section>

    </div>
  );
};

export default HomePages;