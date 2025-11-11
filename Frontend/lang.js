// lang.js

function getLang() {
  return localStorage.getItem("lang") || "en";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  loadTranslations(lang);
}

function loadTranslations(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(dict => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  document.getElementById("lang-select").value = lang;
  loadTranslations(lang);

  document.getElementById("lang-select").addEventListener("change", (e) => {
    setLang(e.target.value);
  });
});
