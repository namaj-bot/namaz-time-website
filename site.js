

(function () {
  const KEY = "namaz-time-language";

  function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en][data-bn]").forEach(function (el) {
      el.textContent = lang === "bn"
        ? el.getAttribute("data-bn")
        : el.getAttribute("data-en");
    });

    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.textContent = lang === "bn" ? "English" : "বাংলা";
      btn.setAttribute(
        "aria-label",
        lang === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"
      );
    });

    localStorage.setItem(KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem(KEY) || "en";

    setLanguage(saved);

    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const current = document.documentElement.lang || "en";
        setLanguage(current === "bn" ? "en" : "bn");
      });
    });
  });
})();
