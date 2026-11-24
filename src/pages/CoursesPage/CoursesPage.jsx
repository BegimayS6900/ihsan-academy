import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Atom,
  Server,
  Brush,
  ChartNoAxesColumn,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Clock3,
  Check,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  Info,
} from "lucide-react";
import "./CoursesPage.css";

const courseIconsById = {
  1: Atom,
  2: Server,
  3: Brush,
  4: ChartNoAxesColumn,
  5: ShieldCheck,
  6: Smartphone,
};

function CourseCard({ course, onDetails, t }) {
  const Icon = courseIconsById[course.id] || Atom;

  return (
    <article className="course-card">
      <div className="course-card__number">{course.number}</div>

      <div className="course-card__main">
        <div className="course-card__identity">
          <div className="course-card__icon">
            <Icon size={22} strokeWidth={1.8} />
          </div>

          <div className="course-card__heading">
            <h2>{course.title}</h2>
            <span>{course.level}</span>
          </div>
        </div>

        <p className="course-card__description">{course.description}</p>

        <div
          className="course-card__topics"
          aria-label={t("coursesPage.card.topicsAriaLabel")}
        >
          {(course.topics || []).slice(0, 3).map((topic) => (
            <span className="course-topic" key={topic}>
              <Check size={11} />
              {topic}
            </span>
          ))}
          {(course.topics || []).length > 3 && (
            <span className="course-topic__more">
              +{course.topics.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="course-card__price">
        <strong>
          {course.price} {t("coursesPage.card.priceSuffix")}
        </strong>
        <span className="course-card__duration">
          <Clock3 size={12} />
          {course.duration}
        </span>

        <button
          className="course-card__link"
          type="button"
          onClick={() => onDetails(course.id)}
        >
          {t("coursesPage.card.detailsButton")} <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

function CourseModal({ course, onClose, t }) {
  if (!course) return null;

  const Icon = courseIconsById[course.id] || Atom;

  return (
    <div className="course-modal-overlay" onClick={onClose}>
      <div
        className="course-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="course-modal__header">
          <div className="course-modal__identity">
            <div className="course-modal__icon">
              <Icon size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h2 id="course-modal-title">{course.title}</h2>
              <span>{course.level}</span>
            </div>
          </div>

          <button
            type="button"
            className="course-modal__close"
            onClick={onClose}
            aria-label={t("coursesPage.modal.closeAriaLabel")}
          >
            ×
          </button>
        </div>

        <div className="course-modal__body">
          <p className="course-modal__description">{course.description}</p>

          <div className="course-modal__duration">
            <Clock3 size={17} />
            <div>
              <strong>{course.duration}</strong>
              <span>{t("coursesPage.modal.durationLabel")}</span>
            </div>
          </div>

          <div className="course-modal__program">
            <h3>
              <span>▣</span> {t("coursesPage.modal.programTitle")}
            </h3>
            <ul>
              {(course.topics || []).map((topic) => (
                <li key={topic}>
                  <Check size={15} />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="course-modal__footer">
            <div className="course-modal__price">
              <strong>
                {course.price} {t("coursesPage.card.priceSuffix")}
              </strong>
              <span>{t("coursesPage.modal.priceLabel")}</span>
            </div>

            <Link
              to="/contacts"
              className="course-modal__enroll"
              onClick={onClose}
            >
              {t("coursesPage.modal.enrollButton")} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function InternshipSection({ t }) {
  const whoCanJoinItems =
    t("coursesPage.internship.whoCanJoinItems", { returnObjects: true }) || [];
  const activitiesItems =
    t("coursesPage.internship.activitiesItems", { returnObjects: true }) || [];
  const perksItems =
    t("coursesPage.internship.perksItems", { returnObjects: true }) || [];

  return (
    <section className="internship-section" id="internship">
      <div className="internship-header">
        <span className="internship-eyebrow">
          {t("coursesPage.internship.eyebrow")}
        </span>

        <h2>
          {t("coursesPage.internship.titleLine1")}
          <br className="internship-desktop-break" />
          {t("coursesPage.internship.titleLine2")}
        </h2>

        <p className="internship-lead">{t("coursesPage.internship.lead")}</p>

        <p className="internship-description">
          {t("coursesPage.internship.description")}
        </p>
      </div>

      <div className="internship-grid">
        <article className="internship-card">
          <div className="internship-card__heading">
            <Users size={21} />
            <h3>{t("coursesPage.internship.whoCanJoinTitle")}</h3>
          </div>
          <ul>
            {whoCanJoinItems.map((item) => (
              <li key={item}>
                <Check /> {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="internship-card">
          <div className="internship-card__heading">
            <BriefcaseBusiness size={21} />
            <h3>{t("coursesPage.internship.activitiesTitle")}</h3>
          </div>
          <ul>
            {activitiesItems.map((item) => (
              <li key={item}>
                <Check /> {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="internship-card internship-card--wide">
          <div className="internship-card__heading">
            <GraduationCap size={21} />
            <h3>{t("coursesPage.internship.perksTitle")}</h3>
          </div>
          <ul>
            {perksItems.map((item) => (
              <li key={item}>
                <Check /> {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="internship-notice">
        <Info size={20} />
        <p>{t("coursesPage.internship.notice")}</p>
      </div>

      <Link to="/contacts" className="internship-button">
        {t("coursesPage.internship.ctaButton")} <ArrowRight size={19} />
      </Link>
    </section>
  );
}

export default function CoursesPage() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const courses = useMemo(() => {
    const translated = t("coursesPage.courses", { returnObjects: true });
    return Array.isArray(translated) ? translated : [];
  }, [t]);

  const filters = useMemo(() => {
    const translated = t("coursesPage.filters", { returnObjects: true });
    return Array.isArray(translated) ? translated : [];
  }, [t]);

  const filteredCourses = useMemo(
    () =>
      activeFilter === "all"
        ? courses
        : courses.filter((course) => course.category === activeFilter),
    [courses, activeFilter]
  );

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === selectedCourseId) || null,
    [courses, selectedCourseId]
  );

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".courses-intro, .courses-filters, .course-card, .internship-section, .internship-card, .internship-notice, .internship-button"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeFilter, i18n.language]);

  return (
    <main className="courses-page">
      <div className="courses-container">
        <section className="courses-intro">
          <span className="courses-eyebrow">
            {t("coursesPage.intro.eyebrow")}
          </span>
          <h1>
            {t("coursesPage.intro.title")}{" "}
            <span>{t("coursesPage.intro.count")}</span>
          </h1>
          <p>
            {t("coursesPage.intro.descriptionLine1")}
            <br className="courses-desktop-break" />
            {t("coursesPage.intro.descriptionLine2")}
          </p>
        </section>

        <div
          className="courses-filters"
          role="group"
          aria-label={t("coursesPage.filtersAriaLabel")}
        >
          {filters.map((filter) => (
            <button
              className={`courses-filter ${
                activeFilter === filter.value ? "is-active" : ""
              }`}
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <section
          className="courses-list"
          aria-label={t("coursesPage.coursesListAriaLabel")}
        >
          {filteredCourses.map((course) => (
            <CourseCard
              course={course}
              key={course.id}
              onDetails={setSelectedCourseId}
              t={t}
            />
          ))}

          {filteredCourses.length === 0 && (
            <p className="courses-empty">{t("coursesPage.emptyMessage")}</p>
          )}
        </section>

        <InternshipSection t={t} />

        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourseId(null)}
          t={t}
        />
      </div>
    </main>
  );
}