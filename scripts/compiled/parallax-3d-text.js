jQuery(document).ready(function($) {

  /**
   * Initial page loading transitions and animations
   */
  $(window).on('load', function(){
    setTimeout(function(){
      $('body').addClass('explode');
      $('.settings-wrap input').focus();
    }, 500);
  });

  // $('.content-wrap h1').on('mouseover', function(){
  //   $('body').removeClass('explode');
  // }).on('mouseout', function(){
  //   $('body').addClass('explode');
  // });

  /**
   * Debounce things for smoother transitions and less window paints
   * @param  {callback} fn   the callback to run after the debounce time
   * @param  {number}   time the time to wait in between debounced events
   */
  const debounce = (fn, time) => {
    let timeout;

    return function() {
      const functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
  }

  /**
   * Move the background around as the mouse removeClass
   * @param  {object} event The mouse event
   */
  const handleMousemove = (event) => {
    var left = event.x;
    var top = event.y;
    $('.fx-text').each( function() {
      var randomX = Math.floor(Math.random() * (90 - 80 + 1)) + 80;
      var randomY = Math.floor(Math.random() * (50 - 40 + 1)) + 40;
      var parent = $(this).parent();
      var centerX = parent.offset().left + (parent.width() / 2);
      var centerY = parent.offset().top + (parent.height() / 2);
      var x = Math.floor( - (left - centerX) / randomX );
      var y = Math.floor( - (top - centerY) / randomY );
      $(this).css('transform', `translate3d(${x}px,${y}px, 0)`);
    });
  };
  document.addEventListener('mousemove', debounce( (e) => {
    handleMousemove(e);
  }, 4));

  /**
   * Move the background around as the window scrolls
   * @return {[type]} [description]
   */
  const parallax = () => {
    $('.red').each( function() {
      var parallax = Math.floor( - $(window).scrollTop() / 10 );
      $(this).css( 'top', `${parallax}px` );
    });
    $('.blue').each( function() {
      var parallax = Math.floor( - $(window).scrollTop() / 12 );
      $(this).css( 'top', `${parallax}px` );
    });
    $('.green').each( function() {
      var parallax = Math.floor( - $(window).scrollTop() / 13 );
      $(this).css( 'top', `${parallax}px` );
    });
    $('.yellow').each( function() {
      var parallax = Math.floor( - $(window).scrollTop() / 14 );
      $(this).css( 'top', `${parallax}px` );
    });
  }
  parallax();
  $(window).scroll(function() {
    parallax();
  });

  /**
   * Update the city name on input change
   * @param {string} string The string of text to change to
   */
  const updateCity = (string) => {
    $('h1').html(string);
    $('div.fx-text').attr('data-text',string);
  }
  $(document).on('keyup','input', function(){
    updateCity($(this).val());
  });

  const updateStyle = (el) => {
    let b = $('body');
    b.removeClass('explode');
    b.toggleClass('night');
    setTimeout(function(){
      b.addClass('explode');
    }, 500);
    if( b.hasClass('night') ) {
      el.text('Day');
    } else {
      el.text('Night');
    }
  }
  $(document).on('click','button', function(){
    updateStyle( $(this) );
  });

});
