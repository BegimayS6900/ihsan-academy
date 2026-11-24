import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./TeachersPage.css";

const TeachersPage = () => {
  const { t, i18n } = useTranslation();
  const pageRef = useRef(null);

  const teachers =
    t("teachersPage.list", { returnObjects: true }) || [];

  useEffect(() => {
    const container = pageRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll(
      ".teachers-heading, .teacher-card, .teachers-cta"
    );

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    targets.forEach((el) => {
      el.classList.add("reveal-item");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [i18n.language]);

  return (
    <main className="teachers-page" ref={pageRef}>
      <div className="teachers-container">
        {/* Heading */}
        <section className="teachers-heading">
          <span className="teachers-label">
            {t("teachersPage.heading.label")}
          </span>

          <h1>{t("teachersPage.heading.title")}</h1>

          <p>{t("teachersPage.heading.description")}</p>
        </section>

        {/* Teachers Cards */}
        <section className="teachers-grid">
          {teachers.map((teacher, index) => (
            <article
              className="teacher-card"
              key={teacher.id || teacher.name}
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <div className="teacher-experience">
                {teacher.experience}
              </div>

              {/* Teacher information */}
              <div className="teacher-profile">
                <div className="teacher-avatar">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    width="24"
                    height="24"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  </svg>
                </div>

                <div className="teacher-details">
                  <h2>{teacher.name}</h2>
                  <span>{teacher.position}</span>
                </div>
              </div>

              {/* Description */}
              <p className="teacher-description">
                {teacher.description}
              </p>

              {/* Skills */}
              <div className="teacher-skills">
                <h3>{t("teachersPage.skillsTitle")}</h3>

                <div className="teacher-tags">
                  {(teacher.skills || []).map((skill) => (
                    <span className="teacher-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="teacher-card-footer">
                <a href="/contacts" className="teacher-enroll">
                  {t("teachersPage.enrollButton")}
                </a>

                <a href="/contacts" className="teacher-more">
                  {t("teachersPage.moreButton")} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="teachers-cta">
          <span className="cta-label">
            {t("teachersPage.cta.label")}
          </span>

          <h2>{t("teachersPage.cta.title")}</h2>

          <p>{t("teachersPage.cta.description")}</p>

          <a href="/contacts" className="teachers-cta-button">
            {t("teachersPage.cta.button")}
            <span>→</span>
          </a>
        </section>
      </div>
    </main>
  );
};

export default TeachersPage;