'use strict';

jQuery(document).ready(function ($) {

  var parallax = function parallax() {
    $('.red').each(function () {
      var parallax = Math.floor(-$(window).scrollTop() / 10);
      var blur = Math.floor($(window).scrollTop() / 80);
      $(this).css('transform', 'translate3d(0,' + parallax + 'px, 0 )');
    });
    $('.blue').each(function () {
      var parallax = Math.floor(-$(window).scrollTop() / 20);
      var blur = Math.floor($(window).scrollTop() / 80);
      $(this).css('transform', 'translate3d(0,' + parallax + 'px, 0 )');
    });
    $('.green').each(function () {
      var parallax = Math.floor(-$(window).scrollTop() / 50);
      var blur = Math.floor($(window).scrollTop() / 80);
      console.log(blur);
      $(this).css('transform', 'translate3d(0,' + parallax + 'px, 0 )');
    });
  };

  parallax();

  $(window).scroll(function () {
    parallax();
  });
});