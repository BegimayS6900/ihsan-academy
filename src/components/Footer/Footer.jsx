
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* ABOUT */}
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
              {t("footer.description")}
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

          {/* NAVIGATION */}
          <div className="footer-column">
            <h3>{t("footer.navigation")}</h3>

            <ul>
              <li><Link to="/">{t("home")}</Link></li>
              <li><Link to="/courses">{t("courses")}</Link></li>
              <li><Link to="/about">{t("about")}</Link></li>
              <li><Link to="/features">{t("features")}</Link></li>
              <li><Link to="/teachers">{t("teachers")}</Link></li>
              <li><Link to="/contacts">{t("contacts")}</Link></li>
            </ul>
          </div>

          {/* COURSES */}
          <div className="footer-column">
            <h3>{t("footer.courses")}</h3>

            <ul>
              <li><Link to="/courses">{t("footer.frontend")}</Link></li>
              <li><Link to="/courses">{t("footer.backend")}</Link></li>
              <li><Link to="/courses">{t("footer.uiux")}</Link></li>
              <li><Link to="/courses">{t("footer.dataScience")}</Link></li>
              <li><Link to="/courses">{t("footer.cybersecurity")}</Link></li>
              <li><Link to="/courses">{t("footer.mobile")}</Link></li>
            </ul>
          </div>

          {/* CONTACTS */}
          <div className="footer-column footer-contacts">
            <h3>{t("contacts")}</h3>

            <div className="contact-item">
              <MapPin size={17} />
              <span>{t("footer.address")}</span>
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
              <span>{t("footer.schedule")}</span>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            {t("footer.copyright")}
          </p>

          <span>{t("footer.location")}</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
