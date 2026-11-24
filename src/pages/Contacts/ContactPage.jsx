import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./ContactPage.css";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    format: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const faqItems = t("contactPage.faq.items", { returnObjects: true }) || [];

  useEffect(() => {
    const container = pageRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(
      ".contact-hero, .contact-form-card, .contact-info-card, .contact-social-card, .contact-faq, .faq-card"
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
      el.classList.add("contact-reveal");
      el.style.setProperty("--reveal-delay", `${(index % 4) * 100}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [i18n.language]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      course: "",
      format: "",
      message: "",
    });
  };

  return (
    <main className="contact-page" ref={pageRef}>
      <div className="contact-container">

        <section className="contact-hero">
          <span className="contact-label">{t("contactPage.hero.label")}</span>
          <h1>{t("contactPage.hero.title")}</h1>
          <p>{t("contactPage.hero.description")}</p>
        </section>

        <section className="contact-content">

          <div className="contact-form-card">
            <h2>{t("contactPage.form.title")}</h2>

            {submitted && (
              <div className="success-message">
                {t("contactPage.form.successMessage")}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{t("contactPage.form.nameLabel")}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contactPage.form.namePlaceholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>{t("contactPage.form.phoneLabel")}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("contactPage.form.phonePlaceholder")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{t("contactPage.form.courseLabel")}</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t("contactPage.form.coursePlaceholder")}</option>
                  <option value="Web Development">
                    {t("contactPage.form.courses.webDev")}
                  </option>
                  <option value="Frontend">
                    {t("contactPage.form.courses.frontend")}
                  </option>
                  <option value="Backend">
                    {t("contactPage.form.courses.backend")}
                  </option>
                  <option value="Graphic Design">
                    {t("contactPage.form.courses.graphicDesign")}
                  </option>
                  <option value="UI/UX Design">
                    {t("contactPage.form.courses.uiux")}
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>{t("contactPage.form.formatLabel")}</label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t("contactPage.form.formatPlaceholder")}</option>
                  <option value="Офлайн">
                    {t("contactPage.form.formats.offline")}
                  </option>
                  <option value="Онлайн">
                    {t("contactPage.form.formats.online")}
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>{t("contactPage.form.messageLabel")}</label>
                <textarea
                  name="message"
                  placeholder={t("contactPage.form.messagePlaceholder")}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>➤</span> {t("contactPage.form.submitButton")}
              </button>
            </form>
          </div>

          <div className="contact-sidebar">

            <div className="contact-info-card">
              <h3>{t("contactPage.info.title")}</h3>

              <div className="contact-info-item">
                <div className="contact-icon">⌖</div>
                <div>
                  <span>{t("contactPage.info.addressLabel")}</span>
                  <p>{t("contactPage.info.addressValue")}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">♧</div>
                <div>
                  <span>{t("contactPage.info.phoneLabel")}</span>
                  <a href="tel:+996555059303">
                    {t("contactPage.info.phoneValue")}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">◷</div>
                <div>
                  <span>{t("contactPage.info.scheduleLabel")}</span>
                  <p>{t("contactPage.info.scheduleValue")}</p>
                </div>
              </div>
            </div>

            <div className="contact-social-card">
              <h3>{t("contactPage.social.title")}</h3>

              <a
                href="https://t.me/ihsan_it_academy"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon">➤</div>
                <div>
                  <strong>{t("contactPage.social.telegram")}</strong>
                  <span>{t("contactPage.social.handle")}</span>
                </div>
              </a>

              <a
                href="https://instagram.com/ihsan_it_academy"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon">◎</div>
                <div>
                  <strong>{t("contactPage.social.instagram")}</strong>
                  <span>{t("contactPage.social.handle")}</span>
                </div>
              </a>

              <a
                href="https://wa.me/996555059303"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon">◉</div>
                <div>
                  <strong>{t("contactPage.social.whatsapp")}</strong>
                  <span>{t("contactPage.social.phone")}</span>
                </div>
              </a>
            </div>

          </div>
        </section>

        <section className="contact-faq">
          <span className="contact-label">{t("contactPage.faq.label")}</span>
          <h2>{t("contactPage.faq.title")}</h2>

          <div className="faq-grid">
            {faqItems.map((item) => (
              <div className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default ContactPage;