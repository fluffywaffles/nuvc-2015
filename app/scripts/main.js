/* jshint devel:true */
$('#video-overlay video').hover(function() {
  'use strict';
  $(this).attr('controls', 'controls');
}, function() {
  'use strict';
  $(this).removeAttr('controls');
});

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

$('.question h3').click(function() {
  'use strict';
  $(this).next().toggleClass('active');
});