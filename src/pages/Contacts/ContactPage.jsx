
import React, { useState, useEffect, useRef } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    format: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
  }, []);

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
          <span className="contact-label">БАЙЛАНЫШ</span>
          <h1>Биз менен байланышыңыз</h1>
          <p>
            Өтүнүч калтырыңыз, бир саат ичинде чалып,
            курстар жөнүндө айтып, бардык суроолорго жооп беребиз.
          </p>
        </section>

        <section className="contact-content">

          <div className="contact-form-card">
            <h2>Өтүнүч калтыруу</h2>

            {submitted && (
              <div className="success-message">
                Өтүнүчүңүз кабыл алынды! Биз сиз менен байланышабыз.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Атыңыз *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Айдана"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+996 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Кызыккан курс *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Курс тандаңыз</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>

              <div className="form-group">
                <label>Окуу форматы боюнча каалооңуз *</label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  required
                >
                  <option value="">Окуу форматын тандаңыз</option>
                  <option value="Офлайн">Офлайн</option>
                  <option value="Онлайн">Онлайн</option>
                </select>
              </div>

              <div className="form-group">
                <label>Кошумча маалымат (милдеттүү эмес)</label>
                <textarea
                  name="message"
                  placeholder="Кошумча каалоолоруңуз же суроолоруңуз..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>➤</span> Өтүнүч жөнөтүү
              </button>
            </form>
          </div>

          <div className="contact-sidebar">

            <div className="contact-info-card">
              <h3>Байланыш маалыматы</h3>

              <div className="contact-info-item">
                <div className="contact-icon">⌖</div>
                <div>
                  <span>Дарек</span>
                  <p>Бишкек ш., Токтогул көч., 230</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">♧</div>
                <div>
                  <span>Телефон</span>
                  <a href="tel:+996555059303">0555 059 303</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">◷</div>
                <div>
                  <span>Убакыт</span>
                  <p>
                    Дүйшөмбү–Ишемби: 10:00–20:00,
                    Жекшемби: эс алуу күнү
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-social-card">
              <h3>Социалдык тармактар</h3>

              <a
                href="https://t.me/ihsan_it_academy"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon">➤</div>
                <div>
                  <strong>Telegram</strong>
                  <span>@ihsan_it_academy</span>
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
                  <strong>Instagram</strong>
                  <span>@ihsan_it_academy</span>
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
                  <strong>WhatsApp</strong>
                  <span>0555 059 303</span>
                </div>
              </a>
            </div>

          </div>
        </section>

        <section className="contact-faq">
          <span className="contact-label">FAQ</span>
          <h2>Көп берилүүчү суроолор</h2>

          <div className="faq-grid">

            <div className="faq-card">
              <h3>Алдын ала тажрыйба керекпи?</h3>
              <p>
                Жок, курстардын көбү жаңы баштагандарга ылайыктуу.
              </p>
            </div>

            <div className="faq-card">
              <h3>Окуу кандай өтөт?</h3>
              <p>
                Сабактар жумасына үч жолу офлайн өтөт.
                Онлайн окуу да бар.
              </p>
            </div>

            <div className="faq-card">
              <h3>Бөлүп төлөөгө болобу?</h3>
              <p>
                Ооба, алты айга чейин бөлүп төлөнсө болот.
              </p>
            </div>

            <div className="faq-card">
              <h3>Жумуш табууга жардам бересиңерби?</h3>
              <p>
                Ооба. Карьера борбору резюме, портфолио даярдоого
                жана жумуш издөөгө жардам берет.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};

export default ContactPage;
