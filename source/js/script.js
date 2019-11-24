'use strict';

var mainNav = document.querySelector('.main-nav');
var mainButton = document.querySelector('.main-nav__toggle');


  var swap = function () {
    if (mainNav.classList.contains('.act')) {
    } else {

      mainNav.className = 'main-nav ' + 'main-nav--closed act';
    }
    mainButton.removeEventListener('click', swap);
    mainButton.addEventListener('click', swap2);
  };

  var swap2 = function () {
    if (mainNav.classList.contains('.act')) {
    } else {

      mainNav.className = 'main-nav ' + 'main-nav--opend act';
    }
    mainButton.addEventListener('click', swap);
    mainButton.removeEventListener('click', swap2);
  };

mainButton.addEventListener('click', swap);
