(function (global) {
  'use strict';

  var STORAGE_KEY = 'hoe-lang';

  function resolveLang(options) {
    var stored = options && options.stored;
    if (stored === 'en' || stored === 'ja') return stored;
    var browserLanguage = (options && options.browserLanguage) || '';
    return browserLanguage.toLowerCase().indexOf('ja') === 0 ? 'ja' : 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang-active', lang);
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    var toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'en' ? '日本語' : 'English';
  }

  function init() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
    var lang = resolveLang({ stored: stored, browserLanguage: navigator.language });
    applyLang(lang);
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-lang-active');
        applyLang(current === 'en' ? 'ja' : 'en');
      });
    }
  }

  global.HoeLanguage = { resolveLang: resolveLang, applyLang: applyLang, STORAGE_KEY: STORAGE_KEY };

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', init);
  }
})(typeof window !== 'undefined' ? window : globalThis);
