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
    $path = $('#section-about-id').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#link-skills').click(function() {
    $path = $('#section-skills-id').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });

  $('#link-projects').click(function() {
    $path = $('#section-projects-id').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });

  $('#link4').click(function() {
    $path = $('#skillsdiv').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#link5').click(function() {
    $path = $('#homediv').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
  $('#link6').click(function() {
    $path = $('#contactdiv').offset().top;
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
