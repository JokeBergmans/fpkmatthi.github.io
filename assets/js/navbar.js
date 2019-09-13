init = function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      //$('nav.navbar').addClass('bg-dark');
      $('.navbar').css({
        'min-height': '50px',
        '-webkit-box-shadow': '0 0 0 0 black',
        '-moz-box-shadow': '0 0 0 0 black',
        'box-shadow': '0 0 0 0 black',
        'background-color': '#fdc54b',
        '-webkit-transition':
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s',
        '-moz-transition':
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s',
        'o-transition':
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s',
        transition:
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s'
      });
      $('.navbar').removeClass('navbar-dark'); //black text
      $('.navbar').addClass('navbar-light'); //black text
      $('.navbar-brand').addClass('text-dark');
    } else {
      $('.navbar').css({
        'min-height': '80px',
        '-webkit-box-shadow': '0px 10px 37px 3px rgba(0,0,0,0.44)',
        '-moz-box-shadow': '0px 10px 37px 3px rgba(0,0,0,0.44)',
        'box-shadow': '0px 10px 75px 3px rgba(0,0,0,0.70)',
        'background-color': 'rgba(0,0,0,0.44)',
        '-webkit-transition':
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s',
        '-moz-transition':
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s',
        'o-transition':
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s',
        transition:
          'min-height 1.5s, background-color 1.3s, box-shadow 1.5s, -webkit-box-shadow 1.5s, -moz-box-shadow 1.5s'
      });
      $('.navbar-brand').removeClass('text-dark');
      $('nav.navbar').removeClass('bg-dark');
      $('nav.navbar').addClass('navbar-dark');
    }
  });
};
window.onload = init();
