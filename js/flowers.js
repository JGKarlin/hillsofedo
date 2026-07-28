(function (global) {
  'use strict';

  var MONTH_FILES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  function fileForMonth(monthNumber1to12) {
    var index = monthNumber1to12 - 1;
    if (index < 0 || index > 11) return null;
    return MONTH_FILES[index];
  }

  function applyMonth(monthNumber1to12) {
    var file = fileForMonth(monthNumber1to12);
    if (!file) return;

    var band = document.getElementById('flower-band');
    if (band) {
      band.style.backgroundImage = "url('assets/flowers/" + file + ".jpg')";
    }

    var blocks = document.querySelectorAll('.flower-text');
    for (var i = 0; i < blocks.length; i++) {
      var isCurrent = blocks[i].getAttribute('data-month') === String(monthNumber1to12);
      blocks[i].classList.toggle('flower-visible', isCurrent);
    }
  }

  function init() {
    applyMonth(new Date().getMonth() + 1);
  }

  global.HoeFlowers = { fileForMonth: fileForMonth, applyMonth: applyMonth };

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', init);
  }
})(typeof window !== 'undefined' ? window : globalThis);
