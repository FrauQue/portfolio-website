function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$( document ).ready(function() {
  $('.go-to-contact-link').click(function (event) {
    $('#myNavtoggle').removeClass('responsive');
  });
});
 
