function columnDisplay(element) {
    var rel = element.getAttribute('id');
    var extraColumn = document.querySelectorAll('[rel="'+ rel +'"]')[0];

    var submenus = document.getElementsByClassName("submenu-extra-content");
    for (var i = submenus.length - 1; i >= 0; i--)
    {
        submenus[i].classList.remove("d-block");
        submenus[i].classList.add("d-none");
    }
    extraColumn.classList.remove("d-none");
    extraColumn.classList.add("d-block");
}

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 32) {
          document.getElementById('header').classList.add('fixed-top');
          // add padding top to show content behind navbar
          header_height = document.querySelector('header').offsetHeight - 32;
          document.body.style.paddingTop = header_height + 'px';
        } else {
          document.getElementById('header').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
});

document.getElementById("menu-toggle-button").onclick = function() {menuToggle()};

function menuToggle() {
  document.getElementById("menu-mobiel").classList.toggle('open');
  document.getElementById("body").classList.toggle('no-padding');
  document.getElementById("hoofdmenu").classList.remove('sub-open');
  document.getElementById("mobiel-submenu").classList.remove('open');

  var menuToggle = document.getElementById("menu-toggle-button");
   
  if (menuToggle.innerHTML == '<i class="fa-solid fa-bars"></i>') {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}

document.getElementById("menu-terug").onclick = function() {menuSubToggle()};

function menuSubToggle() {
  document.getElementById("hoofdmenu").classList.remove('sub-open');
  document.getElementById("mobiel-submenu").classList.remove('open');
}

function openSubmenu(element) {
  var rel = element.getAttribute('id');
  var submenu = document.querySelectorAll('[rel="'+ rel +'"]')[0];

  var submenus = document.getElementsByClassName("mobiel-submenu");
  submenu.classList.toggle("open");
  document.getElementById("hoofdmenu").classList.toggle('sub-open');
}