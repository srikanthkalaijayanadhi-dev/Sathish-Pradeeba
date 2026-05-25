// Pure Vanilla JS implementation for the Lovable replica

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Lenis Smooth Scrolling (Optional premium feel)
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 2. Intersection Observer for Scroll Animations (.reveal)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // 3. Preloader / Loading sequence
    // The Lovable app has a full-screen div with 'fixed inset-0 z-[100] ... gradient-sacred transition-opacity duration-700'
    // We will fade it out and remove it after 2 seconds
    const preloader = document.querySelector('.z-\\[100\\]');
    const percentageText = preloader?.querySelector('.text-xs.tracking-\\[0\\.4em\\]');
    const progressBar = preloader?.querySelector('.bg-gold');

    if (preloader) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress > 100) progress = 100;
            
            if (percentageText) percentageText.innerHTML = `${progress}<!-- -->%`;
            if (progressBar) progressBar.style.width = `${progress}%`;

            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => preloader.remove(), 700);
                }, 500);
            }
        }, 150);
    }

    // 4. Countdown Timer
    const targetDate = new Date("June 4, 2026 00:00:00").getTime();
    const countdownElements = document.querySelectorAll('.tabular-nums');
    
    if (countdownElements.length >= 4) {
        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElements.forEach(el => el.innerText = "00");
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElements[0].innerText = days.toString().padStart(2, '0');
            countdownElements[1].innerText = hours.toString().padStart(2, '0');
            countdownElements[2].innerText = minutes.toString().padStart(2, '0');
            countdownElements[3].innerText = seconds.toString().padStart(2, '0');
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    }

});
