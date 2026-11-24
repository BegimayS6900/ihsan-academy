
import React, { useEffect, useRef } from "react";
import "./OppoPage.css";

const benefits = [
  "Көп балалуу үй-бүлөлөрдүн ата-энелери.",
  "Ден соолугунун мүмкүнчүлүгү чектелген адамдар.",
  "Тоолуу райондордо жашаган жарандар.",
  "Мамлекеттик мекемелерде иштеген кызматкерлер.",
];

const OppoPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const container = pageRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(
      ".opportunities-heading, .opportunity-card, .opportunity-info, .opportunities-action"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
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

    elements.forEach((el, index) => {
      el.style.setProperty(
        "--reveal-delay",
        `${index * 120}ms`
      );

      el.classList.add("reveal-item");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="opportunities-page" ref={pageRef}>
      <div className="opportunities-container">

        {/* HEADING */}
        <div className="opportunities-heading">
          <span className="opportunities-label">
            МҮМКҮНЧҮЛҮКТӨР
          </span>

          <h1>Биздин мүмкүнчүлүктөр</h1>

          <p>
            Атайын жеңилдиктер жана социалдык мүмкүнчүлүктөр.
          </p>
        </div>

        {/* CARDS */}
        <div className="opportunities-grid">

          {/* 15% */}
          <div className="opportunity-card">
            <div className="opportunity-card-header">
              <span className="discount-number">15%</span>
              <h2>Социалдык жеңилдик</h2>
            </div>

            <p className="opportunity-description">
              Төмөнкү категориядагы жарандар үчүн 15% жеңилдик каралган:
            </p>

            <ul className="benefits-list">
              {benefits.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 10% */}
          <div className="opportunity-card office-card">
            <div className="opportunity-card-header">
              <span className="discount-number">10%</span>
              <h2>Офиске келип катталгандар үчүн</h2>
            </div>

            <p className="opportunity-description">
              Академиянын офисине жеке келип, маалымат алып,
              катталган адамдарга 10% жеңилдик берилет.
            </p>

            <div className="office-address">
              <span className="location-icon">⌖</span>

              <div>
                <span className="address-label">Дарек</span>
                <p>Бишкек ш., Токтогул көч., 230</p>
              </div>
            </div>
          </div>

        </div>

        {/* INFORMATION */}
        <div className="opportunity-info">
          <div className="info-icon">▤</div>

          <div>
            <h3>Жеңилдикти кантип алса болот</h3>

            <p>
              Жеңилдик алуу үчүн тиешелүү категорияга таандык экенин
              тастыктаган документ көрсөтүлүшү керек. Документтер
              администрация тарабынан текшерилгенден кийин жеңилдик
              колдонулат.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="opportunities-action">
          <a href="/contacts" className="consultation-button">
            Акысыз консультация алуу
            <span>→</span>
          </a>
        </div>

      </div>
    </main>
  );
};

export default OppoPage;
