import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./OppoPage.css";

const OppoPage = () => {
  const { t, i18n } = useTranslation();
  const pageRef = useRef(null);

  const benefits =
    t("oppoPage.socialDiscount.benefits", { returnObjects: true }) || [];

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
  }, [i18n.language]);

  return (
    <main className="opportunities-page" ref={pageRef}>
      <div className="opportunities-container">

        {/* HEADING */}
        <div className="opportunities-heading">
          <span className="opportunities-label">
            {t("oppoPage.heading.label")}
          </span>

          <h1>{t("oppoPage.heading.title")}</h1>

          <p>{t("oppoPage.heading.subtitle")}</p>
        </div>

        {/* CARDS */}
        <div className="opportunities-grid">

          {/* 15% */}
          <div className="opportunity-card">
            <div className="opportunity-card-header">
              <span className="discount-number">
                {t("oppoPage.socialDiscount.badge")}
              </span>
              <h2>{t("oppoPage.socialDiscount.title")}</h2>
            </div>

            <p className="opportunity-description">
              {t("oppoPage.socialDiscount.description")}
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
              <span className="discount-number">
                {t("oppoPage.officeDiscount.badge")}
              </span>
              <h2>{t("oppoPage.officeDiscount.title")}</h2>
            </div>

            <p className="opportunity-description">
              {t("oppoPage.officeDiscount.description")}
            </p>

            <div className="office-address">
              <span className="location-icon">⌖</span>

              <div>
                <span className="address-label">
                  {t("oppoPage.officeDiscount.addressLabel")}
                </span>
                <p>{t("oppoPage.officeDiscount.addressValue")}</p>
              </div>
            </div>
          </div>

        </div>

        {/* INFORMATION */}
        <div className="opportunity-info">
          <div className="info-icon">▤</div>

          <div>
            <h3>{t("oppoPage.info.title")}</h3>

            <p>{t("oppoPage.info.description")}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="opportunities-action">
          <a href="/contacts" className="consultation-button">
            {t("oppoPage.ctaButton")}
            <span>→</span>
          </a>
        </div>

      </div>
    </main>
  );
};

export default OppoPage;