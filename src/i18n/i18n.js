import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import kg from "./locales/kg.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      KG: {
        translation: kg
      },
      RU: {
        translation: ru
      },
      EN: {
        translation: en
      }
    },

    lng: localStorage.getItem("language") || "KG",

    fallbackLng: "KG",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;