
import React from "react";
import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import {
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* FOOTER MAIN */}
        <div className="footer-main">

          {/* COLUMN 1 - ABOUT */}
          <div className="footer-about">

            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <span>IHSAN</span>
                <small>IT</small>
              </div>

              <div className="footer-logo-text">
                <span>Ihsan</span>
                <span>IT Academy</span>
              </div>
            </Link>

            <p className="footer-description">
              Бишкектеги жаңы муундун IT академиясы.
              Келечектин кесиптерин үйрөтөбүз.
            </p>

            {/* SOCIAL LINKS */}
            <div className="footer-socials">

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="social-link"
              >
                <FaTelegramPlane />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* COLUMN 2 - NAVIGATION */}
          <div className="footer-column">
            <h3>Навигация</h3>

            <ul>
              <li><Link to="/">Башкы бет</Link></li>
              <li><Link to="/courses">Курстар</Link></li>
              <li><Link to="/internship">Стажировка</Link></li>
              <li><Link to="/about">Биз жөнүндө</Link></li>
              <li><Link to="/features">Мүмкүнчүлүктөр</Link></li>
              <li><Link to="/teachers">Мугалимдер</Link></li>
              <li><Link to="/contacts">Байланыш</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - COURSES */}
          <div className="footer-column">
            <h3>Курстар</h3>

            <ul>
              <li>
                <Link to="/courses/frontend">
                  Frontend иштеп чыгуу
                </Link>
              </li>

              <li>
                <Link to="/courses/backend">
                  Backend иштеп чыгуу
                </Link>
              </li>

              <li>
                <Link to="/courses/ui-ux">
                  UI/UX Дизайн
                </Link>
              </li>

              <li>
                <Link to="/courses/data-science">
                  Data Science
                </Link>
              </li>

              <li>
                <Link to="/courses/cybersecurity">
                  Киберкоопсуздук
                </Link>
              </li>

              <li>
                <Link to="/courses/mobile">
                  Мобилдик иштеп чыгуу
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 - CONTACTS */}
          <div className="footer-column footer-contacts">
            <h3>Байланыш</h3>

            <div className="contact-item">
              <MapPin size={17} />
              <span>Бишкек ш., Токтогул көч., 230</span>
            </div>

            <a
              href="tel:+996555059303"
              className="contact-item"
            >
              <Phone size={16} />
              <span>0555 059 303</span>
            </a>

            <div className="contact-item">
              <Clock size={17} />
              <span>Дш-Иш: 10:00–20:00, Жк: эс алуу</span>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © 2026 Ihsan IT Academy. Бардык укуктар корголгон.
          </p>

          <span>Бишкек, Кыргызстан KG</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
