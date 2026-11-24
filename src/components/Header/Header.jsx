
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const language = i18n.resolvedLanguage || i18n.language;

  // CHANGE LANGUAGE
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLangOpen(false);
  };

  // NAVIGATION
  const navLinks = [
    { id: "home", title: t("home"), path: "/" },
    { id: "courses", title: t("courses"), path: "/courses" },
    { id: "about", title: t("about"), path: "/about" },
    { id: "features", title: t("features"), path: "/features" },
    { id: "teachers", title: t("teachers"), path: "/teachers" },
    { id: "contacts", title: t("contacts"), path: "/contacts" },
  ];

  const languages = ["KG", "RU", "EN"];

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link
          to="/"
          className="header-logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-icon">
            <span>IHSAN</span>
            <small>IT</small>
          </div>

          <div className="logo-text">
            <span>Ihsan</span>
            <span>IT Academy</span>
          </div>
        </Link>

        {/* MOBILE MENU */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* NAVIGATION */}
        <nav className={`header-nav ${menuOpen ? "nav-open" : ""}`}>

          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          {/* LANGUAGE */}
          <div className="language-wrapper">
            <button
              className="language-btn"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Globe size={17} />

              <span>{language}</span>

              <ChevronDown
                size={14}
                className={langOpen ? "chevron-rotate" : ""}
              />
            </button>

            {langOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className={
                      language === lang ? "selected-lang" : ""
                    }
                    onClick={() => changeLanguage(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* REGISTER */}
          <Link
            to="/contacts"
            className="register-btn"
            onClick={() => setMenuOpen(false)}
          >
            {t("register")}
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
