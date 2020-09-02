"use strict";

(function () {
  // Side bar Show and Hide
  var sideBtn = document.querySelector('.sidebar__btn'),
      sidebar = document.querySelector('.sidebar'),
      burgerItem = document.querySelector('.burger__item');
  sideBtn.addEventListener('click', function (e) {
    setTimeout(function () {
      sidebar.classList.toggle('sidebar__open');
      burgerItemToggle();
    }, 300);
  });

  function burgerItemToggle() {
    !burgerItem.classList.contains('burger__item_active') ? burgerItem.classList.add('burger__item_active') : setTimeout(function () {
      burgerItem.classList.remove('burger__item_active');
    }, 500);
  }

  document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target)) {
      setTimeout(function () {
        sidebar.classList.remove('sidebar__open');
        !sidebar.closest('.sidebar_open') ? burgerItem.classList.remove('burger__item_active') : null;
      }, 300);
    }
  }); // Nav Links Active State

  var navLink = document.querySelectorAll('.nav__link');
  navLink.forEach(function (item) {
    item.addEventListener('click', function (e) {
      navLink.forEach(function (item) {
        item.classList.remove('nav__link_active');
      });
      e.target.closest('.nav__link').classList.add('nav__link_active');
    });
  }); // Window Scroll State 

  window.addEventListener('scroll', function () {
    var windowScroll = window.pageYOffset,
        headerIn = document.querySelector('.header__inner').offsetTop,
        header = document.querySelector('.header');
    windowScroll > headerIn ? header.classList.add('header_fixed') : header.classList.remove('header_fixed');
  });
})();