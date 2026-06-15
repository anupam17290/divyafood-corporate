/* ==========================================
   STICKY HEADER
========================================== */

const header =
document.querySelector('.site-header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');
    }
});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    if (
        link.getAttribute("href")
        === currentPage
    ) {

        link.classList.add("active");
    }
});

