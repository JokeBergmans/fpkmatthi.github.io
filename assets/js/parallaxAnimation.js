function imageReplacer() {
  if (screen.width < 1170) {
    $('#p1').parallax({ imageSrc: '/assets/images/mountain.jpg' });
  } else {
    $('#p1').parallax({ imageSrc: '/assets/images/shortmountain.jpg' });
  }
}

function init() {
  window.addEventListener('resize', imageReplacer());
}
window.onload = init();
