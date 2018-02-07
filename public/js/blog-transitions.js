'use strict';

jQuery(document).ready(function ($) {

  // setup the sizing of the article container
  var articles = $('article');

  $.each(articles, function (i) {
    var child = $(this).find('.banner');
    var h = child.innerHeight();
    var w = child.innerWidth();
    console.log(h);
    console.log(w);
    $(this).css({
      height: h,
      width: w
    });
  });

  $(document).on('click', '.blog-feed article .banner', function () {
    $(this).addClass('openArticle');
  });
});