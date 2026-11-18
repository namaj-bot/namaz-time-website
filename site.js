
/* =================================
   NAMAZ TIME - LANGUAGE SYSTEM
   Developer: Najmul Islam Sorif
================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "namaz-time-language";

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "bn" ? "bn" : "en";
    } catch (error) {
      return "en";
    }
  }

  function setLanguage(language) {
    const lang = language === "bn" ? "bn" : "en";

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en][data-bn]")
      .forEach(function (element) {
        const translation = element.getAttribute(
          "data-" + lang
        );

        if (translation !== null) {
          element.textContent = translation;
        }
      });

    document.querySelectorAll(".lang-toggle")
      .forEach(function (button) {
        button.textContent = lang === "en"
          ? "বাংলা"
          : "English";

        button.setAttribute(
          "aria-label",
          lang === "en"
            ? "Switch to Bengali"
            : "Switch to English"
        );
      });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Language still works for this page.
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(getSavedLanguage());

    document.querySelectorAll(".lang-toggle")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          const current =
            document.documentElement.lang || "en";

          setLanguage(current === "en" ? "bn" : "en");
        });
      });
  });
})();
