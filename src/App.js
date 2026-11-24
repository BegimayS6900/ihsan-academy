
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePages from "./pages/HomePages/HomePages";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OppoPage from "./pages/OppoPage/OppoPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import ContactPage from "./pages/Contacts/ContactPage";

// Барак алмашканда жогору чыгуу
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<OppoPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
