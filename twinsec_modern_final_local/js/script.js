document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger-menu");
    const navList = document.querySelector("#main-nav-list");

    if (hamburger && navList) {
        hamburger.addEventListener("click", function() {
            navList.classList.toggle("mobile-nav-open");
        });
    }
    
    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentIndex = 0;
        let interval;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Handle index bounds
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            // Update current index
            currentIndex = index;
            
            // Remove active class from all slides and indicators
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Add active class to current slide and indicator
            slides[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
        }
        
        // Set up event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });
        
        // Function to start automatic slideshow
        function startInterval() {
            interval = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 5000); // Change slide every 5 seconds
        }
        
        // Function to reset interval after manual navigation
        function resetInterval() {
            clearInterval(interval);
            startInterval();
        }
        
        // Start the slideshow
        startInterval();
    }
    
    // Industries Slider functionality
    const industriesSlider = document.querySelector('.industries-slider');
    if (industriesSlider) {
        const industriesRow = document.querySelector('.industries-row');
        const prevBtn = document.querySelector('.industries-slider-controls .prev-btn');
        const nextBtn = document.querySelector('.industries-slider-controls .next-btn');
        
        // Clone the items to ensure continuous scrolling
        const items = industriesRow.querySelectorAll('.industry-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            industriesRow.appendChild(clone);
        });
        
        // Pause animation on hover
        industriesRow.addEventListener('mouseenter', () => {
            industriesRow.style.animationPlayState = 'paused';
        });
        
        industriesRow.addEventListener('mouseleave', () => {
            industriesRow.style.animationPlayState = 'running';
        });
        
        // Control buttons functionality
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                // Temporarily pause the animation
                industriesRow.style.animationPlayState = 'paused';
                
                // Get current position and move backward
                const computedStyle = window.getComputedStyle(industriesRow);
                const currentTransform = new DOMMatrix(computedStyle.transform);
                const currentX = currentTransform.m41;
                
                // Move backward by 100px
                industriesRow.style.transform = `translateX(${currentX + 100}px)`;
                
                // Resume animation after a delay
                setTimeout(() => {
                    industriesRow.style.transform = '';
                    industriesRow.style.animationPlayState = 'running';
                }, 2000);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                // Temporarily pause the animation
                industriesRow.style.animationPlayState = 'paused';
                
                // Get current position and move forward
                const computedStyle = window.getComputedStyle(industriesRow);
                const currentTransform = new DOMMatrix(computedStyle.transform);
                const currentX = currentTransform.m41;
                
                // Move forward by 100px
                industriesRow.style.transform = `translateX(${currentX - 100}px)`;
                
                // Resume animation after a delay
                setTimeout(() => {
                    industriesRow.style.transform = '';
                    industriesRow.style.animationPlayState = 'running';
                }, 2000);
            });
        }
    }
});
