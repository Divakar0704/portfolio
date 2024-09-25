document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");
    // Toggle navbar visibility on mobile
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const remain = document.querySelector('.remain');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
  remain.classList.toggle('shifted');
});

  
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });