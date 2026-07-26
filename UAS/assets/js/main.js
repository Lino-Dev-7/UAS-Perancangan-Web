document.addEventListener("DOMContentLoaded", function () {

    // Preloader
    window.addEventListener("load", function () {
        var preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(function () { preloader.style.display = "none"; }, 600);
        }
    });

    // Navbar scroll effect
    var navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Fade-in on scroll
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    var targets = document.querySelectorAll(".section-title, .fact-box, .menu-item, .card, .gallery-item, .stat-number");
    targets.forEach(function (el) {
        el.classList.add("fade-in-up");
        observer.observe(el);
    });

});
