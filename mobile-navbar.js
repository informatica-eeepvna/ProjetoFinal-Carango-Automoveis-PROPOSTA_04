const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const menuIcon = document.getElementById('menu-icon');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

menuIcon.addEventListener('click', () => {
  navList.classList.remove('active');
  mobileMenu.classList.remove('active');
});
