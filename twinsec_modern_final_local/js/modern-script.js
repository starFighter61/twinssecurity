document.addEventListener("DOMContentLoaded", function() {
    // Main navigation toggle
    const mainHamburger = document.querySelector(".main-nav .hamburger-menu");
    const mainNavLinks = document.querySelector(".main-nav .nav-links");
    
    if (mainHamburger && mainNavLinks) {
        mainHamburger.addEventListener("click", function() {
            mainNavLinks.classList.toggle("mobile-nav-open");
        });
    }
    
    // Secondary navigation toggle
    const secondaryHamburger = document.querySelector(".secondary-nav .hamburger-menu");
    const secondaryNavLinks = document.querySelector(".secondary-nav .nav-links");
    
    if (secondaryHamburger && secondaryNavLinks) {
        secondaryHamburger.addEventListener("click", function() {
            secondaryNavLinks.classList.toggle("mobile-nav-open");
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener("click", function(event) {
        if (mainNavLinks && mainNavLinks.classList.contains("mobile-nav-open")) {
            if (!event.target.closest(".main-nav")) {
                mainNavLinks.classList.remove("mobile-nav-open");
            }
        }
        
        if (secondaryNavLinks && secondaryNavLinks.classList.contains("mobile-nav-open")) {
            if (!event.target.closest(".secondary-nav")) {
                secondaryNavLinks.classList.remove("mobile-nav-open");
            }
        }
    });
    
    // Prevent clicks on hamburger from closing the menu
    if (mainHamburger) {
        mainHamburger.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
    
    if (secondaryHamburger) {
        secondaryHamburger.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split("/").pop();
    
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add("active");
        }
    });
});
