/* jshint devel:true */

$('#video-overlay video').hover(function() {
  'use strict';
  $(this).attr('controls', 'controls');
}, function() {
  'use strict';
  $(this).removeAttr('controls');
});

if (!$.cookie('nuvc-skip-video')) {
  $('#video-overlay').fadeIn()
                     .find('video')[0]
                     .play();

  $.cookie('nuvc-skip-video', 'true', { expires: 300 });
}

$('#video-overlay video').on('ended', function() {
  'use strict';
  $('#video-overlay').fadeOut();
});

$('#skip-video').click(function() {
  'use strict';
  $(this).next()[0].pause();
  $('#video-overlay').fadeOut();
});

$('#contact-form input[type="button"]').click(function() {
  'use strict';
  var formdata = {
    name: $('#contact-form .form-control')[0].value,
    email: $('#contact-form .form-control')[1].value,
    message: $('#contact-form .form-control')[2].value
  };
  $.post('http://nuvc.nuisepic.com/sendmail.php', formdata)
  .done(function() {
  });
    $('#contact-form').prepend('<h3 class="text-success">Thanks! We\'ll get back with you soon.</h3>');
    setTimeout(function() {
      $('#contact-form').children().first().fadeOut();
    }, 1500);
});

$('.question h4').click(function() {
  'use strict';
  $(this).next().toggleClass('active');
});

var w = new Waypoint({
  element: $('#top')[0],
  handler: function(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('sticky nav');
      $('nav').addClass('top-fixed');
    }
    else {
      $('nav').animate({opacity: 0 }, 'fast', function() {
        $('nav').removeClass('top-fixed').removeAttr('style');
      })
    }
  }
});

[].forEach.call(document.querySelectorAll('nav li'), function(el) {
  new Waypoint({
    element: document.getElementById($(el).find('a')[0].href.split('#')[1]),
    handler: function (direction) {
      direction === 'down'
        ? ($('nav li').removeClass('active'), $(el).addClass('active'))
        : ($('nav li').removeClass('active'), $(el).prev().addClass('active'))
    }
  });
});

new Waypoint({
  element: $('h1')[0],
  handler: function (direction) {
    direction == 'down'
      ? $('nav').css({top: 0, right: 0 }).addClass('extend')
      : $('nav').removeAttr('style').removeClass('extend');
  }
});

$('nav .hamburger').click(function(e) {
  $('nav').toggleClass('open');
  e.stopPropagation();
  $('nav li').click(function() {
    $('nav').removeClass('open');
    $('nav li').off('click');
  });
  $('body').click(function() {
    $('nav').removeClass('open');
    $('body').off('click');
  });
});
