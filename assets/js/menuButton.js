function init() {
  //Menu buttons
  var $hamburger = $('.hamburger');
  $hamburger.on('click', function(e) {
    $hamburger.toggleClass('is-active');
  });
}

window.onload = init();
