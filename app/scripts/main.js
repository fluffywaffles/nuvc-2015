/* jshint devel:true */

$('#video-overlay video').hover(function() {
  'use strict';
  $(this).attr('controls', 'controls');
}, function() {
  'use strict';
  $(this).removeAttr('controls');
});

if ($.cookie('nuvc-skip-video')) {
  $('#video-overlay').fadeOut()
                     .find('video')[0]
                     .pause();
} else {
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
  element: $('#about')[0],
  handler: function(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('sticky nav');
      $('nav').addClass('top-fixed').animate({ top: 0 });
    }
    else {
      $('nav').animate({top: -60 }, 'fast', function() {
        $('nav').removeClass('top-fixed').removeAttr('style');
      })
    }
  }
});
