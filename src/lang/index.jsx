import i18n from "i18next";
import ar from "./ar.js";
import { initReactI18next } from "react-i18next";
import cookie from "js-cookie";

if (!cookie.get("locale")) {
  cookie.set("locale", "ar");
}
if (!cookie.get("direction")) {
  cookie.set("direction", "rtl");
} else {
  document.querySelector("html").setAttribute("dir", cookie.get("direction"));
}

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: {
        ...ar,
      },
    },
  },
  lng: cookie.get("locale") || "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
