function init() {
  var $backbutton = $('#back');
  $backbutton.on('click', function(e) {
    window.history.back();
  });
}

window.onload = init();
