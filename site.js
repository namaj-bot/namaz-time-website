

(function () {

  "use strict";

  function setLanguage(lang) {

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en][data-bn]").forEach(function (el) {

      el.textContent = el.getAttribute("data-" + lang);

    });

    document.querySelectorAll(".lang-toggle").forEach(function (btn) {

      btn.textContent = lang === "en" ? "বাংলা" : "English";

    });

    try {

      localStorage.setItem("namaz-time-language", lang);

    } catch (e) {}

  }

  function initLanguage() {

    var saved = "en";

    try {

      saved = localStorage.getItem("namaz-time-language") || "en";

    } catch (e) {}

    setLanguage(saved);

    document.addEventListener("click", function (event) {

      var btn = event.target.closest(".lang-toggle");

      if (btn) {

        var current = document.documentElement.lang || "en";

        setLanguage(current === "en" ? "bn" : "en");

      }

    });

  }

  if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initLanguage);

  } else {

    initLanguage();

  }

})();
