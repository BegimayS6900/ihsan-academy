
import React from "react";
import "./OppoPage.css";

const OppoPage = () => {
  const benefits = [
    "Көп балалуу үй-бүлөлөрдүн ата-энелери.",
    "Ден соолугунун мүмкүнчүлүгү чектелген адамдар.",
    "Тоолуу райондордо жашаган жарандар.",
    "Мамлекеттик мекемелерде иштеген кызматкерлер.",
  ];

  return (
    <main className="opportunities-page">
      <div className="opportunities-container">

        {/* Page heading */}
        <div className="opportunities-heading">
          <span className="opportunities-label">
            МҮМКҮНЧҮЛҮКТӨР
          </span>

          <h1>Биздин мүмкүнчүлүктөр</h1>

          <p>
            Атайын жеңилдиктер жана социалдык мүмкүнчүлүктөр.
          </p>
        </div>

        {/* Cards */}
        <div className="opportunities-grid">

          {/* 15% Discount */}
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

          {/* 10% Discount */}
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

        {/* Information */}
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
          <a href="/contact" className="consultation-button">
            Акысыз консультация алуу
            <span>→</span>
          </a>
        </div>

      </div>
    </main>
  );
};

export default OppoPage;
