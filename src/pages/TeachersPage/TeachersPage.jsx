import React, { useEffect, useRef } from "react";
import "./TeachersPage.css";

const teachers = [
  {
    id: 1,
    experience: "9 ЖЫЛДЫК ТАЖРЫЙБА",
    name: "Алена Нурбекова",
    position: "Frontend боюнча ментор",
    description:
      "Студенттерге React жана TypeScript менен заманбап интерфейстерди жасоого жардам берет. Архитектураны, тестирлөөнү жана production-мамилелерди үйрөтөт.",
    skills: ["React", "TypeScript", "Next.js", "Web Animation"],
  },
  {
    id: 2,
    experience: "11 ЖЫЛДЫК ТАЖРЫЙБА",
    name: "Бектур Султанов",
    position: "Backend боюнча ментор",
    description:
      "Сервер технологиялары жана архитектура боюнча насаатчы. Студенттерге чыныгы долбоорлор үчүн тез жана ишенимдүү API курууга жардам берет.",
    skills: ["Node.js", "Python", "PostgreSQL", "REST API"],
  },
  {
    id: 3,
    experience: "8 ЖЫЛДЫК ТАЖРЫЙБА",
    name: "Мария Жумабаева",
    position: "UI/UX боюнча ментор",
    description:
      "Бүтүрүүчүлөрдүн долбоорлору кесипкөй көрүнүшү үчүн колдонуучу тажрыйбасын, прототиптөөнү жана визуалдык дизайнды үйрөтөт.",
    skills: ["Figma", "UX Research", "Prototyping", "Design Systems"],
  },
];

const TeachersPage = () => {
  const pageRef = useRef(null);

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
  }, []);

  return (
    <main className="teachers-page" ref={pageRef}>
      <div className="teachers-container">
        {/* Heading */}
        <section className="teachers-heading">
          <span className="teachers-label">КОМАНДА</span>

          <h1>Биздин окутуучулар</h1>

          <p>
            Тармакта чыныгы тажрыйбасы бар менторлор.
            Алар жөн гана үйрөтпөстөн,
            карьера курууга да жардам беришет.
          </p>
        </section>

        {/* Teachers Cards */}
        <section className="teachers-grid">
          {teachers.map((teacher, index) => (
            <article
              className="teacher-card"
              key={teacher.id}
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
                <h3>Адистешүү</h3>

                <div className="teacher-tags">
                  {teacher.skills.map((skill) => (
                    <span className="teacher-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="teacher-card-footer">
                <a href="/contacts" className="teacher-enroll">
                  Жазылуу
                </a>

                <a href="/contacts" className="teacher-more">
                  Толугураак <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="teachers-cta">
          <span className="cta-label">
            БАШТООГО ДАЯРСЫҢБЫ?
          </span>

          <h2>Мыкты адамдардан үйрөн</h2>

          <p>
            Консультацияга жазылыңыз — максаттарыңызга
            ылайык окутуучу жана курс тандайбыз.
          </p>

          <a href="/contacts" className="teachers-cta-button">
            Акысыз консультация
            <span>→</span>
          </a>
        </section>
      </div>
    </main>
  );
};

export default TeachersPage;