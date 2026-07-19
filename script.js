// get the menu button and the menu
var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

// when menu button is clicked, show or hide the menu
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show');
});

// get all the links inside the menu
var menuLinks = document.querySelectorAll('.link');

// loop through each link
for (var i = 0; i < menuLinks.length; i++) {
  // when a link is clicked, hide the menu
  menuLinks[i].addEventListener('click', function() {
    menu.classList.remove('show');
  });
}
