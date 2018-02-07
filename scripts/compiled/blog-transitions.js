jQuery(document).ready(function($) {

  // setup the sizing of the article container
  const articles = $('article');

  $.each(articles, function(i) {
    let child = $(this).find('.banner');
    let h = child.innerHeight();
    let w = child.innerWidth();
    console.log(h);
    console.log(w);
    $(this).css({
      height: h,
      width: w,
    });
  });

  $(document).on('click','.blog-feed article .banner', function(){
    $(this).addClass('openArticle');
  });

});
