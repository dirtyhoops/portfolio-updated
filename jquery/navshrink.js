$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.nav').addClass('shrink');
  } else {
    $('.nav').removeClass('shrink');
  }
});

$(document).ready(function() {
  $('#link-home').click(function() {
    $path = $('#header').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#link-about').click(function() {
    $path = $('#section-about').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#link-skills').click(function() {
    $path = $('#section-skills').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });

  $('#link-projects').click(function() {
    $path = $('#section-projects').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });

  // For the button in the header
  $('#link-projects-2').click(function() {
    $path = $('#section-projects').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });

  $('#link-contact').click(function() {
    $path = $('#section-contactme').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

// for navigation bar when it's mobile size
$(document).ready(function() {
  $('.nav__menu-icon').on('click', function() {
    $('.nav__menu ul').toggleClass('showing');
  });
});

$(document).ready(function() {
  $('.nav__menu ul li a').on('click', function() {
    $('.nav__menu ul').toggleClass('showing');
  });
});

// scrolling effect for nav bar
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 20) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});
