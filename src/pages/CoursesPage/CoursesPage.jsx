import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

const courses = [
  {
    id: 1,
    number: "01",
    title: "Frontend иштеп чыгуу",
    level: "Башталгыч",
    description:
      "Курс веб-баракчаларды жасоодон баштап React менен иштөөгө чейинки заманбап веб-иштеп чыгууну үйрөтөт.",
    topics: ["HTML жана CSS", "JavaScript ES6+", "React + TypeScript", "Git жана GitHub"],
    price: "12 000",
    duration: "6 ай",
    category: "beginner",
    Icon: Atom,
  },
  {
    id: 2,
    number: "02",
    title: "Backend иштеп чыгуу",
    level: "Орто",
    description:
      "Node.js, Python, маалымат базалары жана сервердик тиркемелер менен иштөөнү үйрөнүңүз.",
    topics: ["Python / Node.js", "REST API", "PostgreSQL", "Authentication"],
    price: "13 000",
    duration: "7 ай",
    category: "middle",
    Icon: Server,
  },
  {
    id: 3,
    number: "03",
    title: "UI/UX Дизайн",
    level: "Башталгыч",
    description:
      "Figma, дизайн-ой жүгүртүү, прототиптөө жана колдонуучуга ыңгайлуу интерфейстерди түзүү.",
    topics: ["Figma", "UX-изилдөөлөр", "Прототиптөө", "UI дизайн"],
    price: "10 000",
    duration: "4 ай",
    category: "beginner",
    Icon: Brush,
  },
  {
    id: 4,
    number: "04",
    title: "Data Science",
    level: "Жогорку",
    description:
      "Машиналык үйрөнүү, маалыматтарды талдоо жана жасалма интеллекттин негиздери.",
    topics: ["Python", "NumPy / Pandas", "ML / Терең үйрөнүү", "Маалыматтарды талдоо"],
    price: "15 000",
    duration: "8 ай",
    category: "advanced",
    Icon: ChartNoAxesColumn,
  },
  {
    id: 5,
    number: "05",
    title: "Киберкоопсуздук",
    level: "Орто",
    description:
      "Системаларды коргоо, этикалык хакинг жана тармактык коопсуздуктун негиздери.",
    topics: ["Linux", "Пентестинг", "CTF", "Network Security"],
    price: "14 000",
    duration: "6 ай",
    category: "middle",
    Icon: ShieldCheck,
  },
  {
    id: 6,
    number: "06",
    title: "Мобилдик иштеп чыгуу",
    level: "Орто",
    description:
      "Android жана iOS үчүн мобилдик тиркемелерди иштеп чыгуунун негиздери.",
    topics: ["React Native", "Flutter", "iOS жана Android", "API менен иштөө"],
    price: "13 000",
    duration: "5 ай",
    category: "middle",
    Icon: Smartphone,
  },
];

const filters = [
  { label: "Баары", value: "all" },
  { label: "Башталгыч", value: "beginner" },
  { label: "Орто", value: "middle" },
  { label: "Жогорку", value: "advanced" },
];

function CourseCard({ course, onDetails }) {
  const { Icon } = course;

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

        <div className="course-card__topics" aria-label="Курстун темалары">
          {course.topics.slice(0, 3).map((topic) => (
            <span className="course-topic" key={topic}>
              <Check size={11} />
              {topic}
            </span>
          ))}
          {course.topics.length > 3 && (
            <span className="course-topic__more">
              +{course.topics.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="course-card__price">
        <strong>{course.price} сом/ай</strong>
        <span className="course-card__duration">
          <Clock3 size={12} />
          {course.duration}
        </span>

        <button
          className="course-card__link"
          type="button"
          onClick={() => onDetails(course)}
        >
          Толугураак <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

function CourseModal({ course, onClose }) {
  if (!course) return null;

  const { Icon } = course;

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
            aria-label="Терезени жабуу"
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
              <span>Узактыгы</span>
            </div>
          </div>

          <div className="course-modal__program">
            <h3>
              <span>▣</span> ПРОГРАММА
            </h3>
            <ul>
              {course.topics.map((topic) => (
                <li key={topic}>
                  <Check size={15} />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="course-modal__footer">
            <div className="course-modal__price">
              <strong>{course.price} сом/ай</strong>
              <span>Бул курс үчүн</span>
            </div>

            <Link
              to="/contacts"
              className="course-modal__enroll"
              onClick={onClose}
            >
              Жазылуу <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function InternshipSection() {
  return (
    <section className="internship-section" id="internship">
      <div className="internship-header">
        <span className="internship-eyebrow">СТАЖИРОВКА · 3 АЙ</span>

        <h2>
          Ihsan IT Academy — 3 айлык практикалык
          <br className="internship-desktop-break" />
          стажировка программасы
        </h2>

        <p className="internship-lead">
          Эгер сизде буга чейин эле тажрыйба болсо жана реалдуу долбоорлор
          менен иштегиңиз келсе — бизде 3 айлык стажировка бар.
        </p>

        <p className="internship-description">
          Программанын максаты — IT тармагында билим алган, бирок практикалык
          тажрыйбасы жетишсиз адамдарга реалдуу иш чөйрөсүндө тажрыйба
          топтоого, портфолио жана резюме даярдоого, жумушка орношууга
          даярданууга жардам берүү.
        </p>
      </div>

      <div className="internship-grid">
        <article className="internship-card">
          <div className="internship-card__heading">
            <Users size={21} />
            <h3>Кимдер катыша алат?</h3>
          </div>
          <ul>
            <li><Check /> Башка IT курстарында окуп бүтүргөндөр.</li>
            <li><Check /> Университеттин IT багытындагы бүтүрүүчүлөрү.</li>
            <li><Check /> Өз алдынча программалоону үйрөнгөндөр.</li>
            <li><Check /> IT тармагында иш баштоону каалаган, базалык билими бар адамдар.</li>
          </ul>
        </article>

        <article className="internship-card">
          <div className="internship-card__heading">
            <BriefcaseBusiness size={21} />
            <h3>Стажировка учурунда катышуучулар:</h3>
          </div>
          <ul>
            <li><Check /> Реалдуу IT долбоорлор менен иштешет жана практикалык тапшырмаларды аткарышат.</li>
            <li><Check /> Команда менен иштөө тажрыйбасын алышат.</li>
            <li><Check /> Жеке портфолиосун түзүп, кесиптик резюме (CV) даярдашат.</li>
            <li><Check /> Техникалык маектешүүгө даярданышат.</li>
            <li><Check /> Менторлордон кеңеш алып, жумушка орношуу боюнча колдоо алышат.</li>
          </ul>
        </article>

        <article className="internship-card internship-card--wide">
          <div className="internship-card__heading">
            <GraduationCap size={21} />
            <h3>Өзгөчө мүмкүнчүлүктөр</h3>
          </div>
          <ul>
            <li><Check /> Ihsan IT Academy'де окуган студенттер үчүн стажировка акысыз.</li>
            <li><Check /> Мыкты катышуучуларды Казахстандагы IT компанияларына стажировкага жөнөтүү мүмкүнчүлүгү каралат.</li>
            <li><Check /> Өзүн жакшы көрсөткөн стажёрлорду академиянын өзүнө жумушка алуу мүмкүнчүлүгү бар.</li>
            <li><Check /> Жумушка даярдануу, резюме жана портфолио боюнча колдоо көрсөтүлөт.</li>
          </ul>
        </article>
      </div>

      <div className="internship-notice">
        <Info size={20} />
        <p>
          Стажировкадан өтүү жумушка орношууга кепилдик бербейт.
          Академия катышуучуларга даярдануу жана мүмкүнчүлүктөрдү табуу
          боюнча колдоо көрсөтөт.
        </p>
      </div>

      <Link to="/contacts" className="internship-button">
        Стажировкага катталуу <ArrowRight size={19} />
      </Link>
    </section>
  );
}

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = useMemo(
    () =>
      activeFilter === "all"
        ? courses
        : courses.filter((course) => course.category === activeFilter),
    [activeFilter]
  );

  return (
    <main className="courses-page">
      <div className="courses-container">
        <section className="courses-intro">
          <span className="courses-eyebrow">ОКУТУУ</span>
          <h1>
            Курстар <span>06</span>
          </h1>
          <p>
            Толук маалымат алуу үчүн курска басыңыз. Практика,
            <br className="courses-desktop-break" /> менторлук, жумуш.
          </p>
        </section>

        <div
          className="courses-filters"
          role="group"
          aria-label="Курстун деңгээли"
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

        <section className="courses-list" aria-label="Окуу курстары">
          {filteredCourses.map((course) => (
            <CourseCard
              course={course}
              key={course.id}
              onDetails={setSelectedCourse}
            />
          ))}

          {filteredCourses.length === 0 && (
            <p className="courses-empty">
              Бул деңгээлде азырынча курстар жок.
            </p>
          )}
        </section>

        <InternshipSection />

        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      </div>
    </main>
  );
}
