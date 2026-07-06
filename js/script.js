/**
 * Trang Phục & Ngoài Hình - Interactive Script
 * Handles animations, scroll effects, and user interactions
 */

(function() {
    'use strict';

    // ===========================
    // Initialization
    // ===========================
    
    document.addEventListener('DOMContentLoaded', function() {
        initScrollAnimations();
        initHoverEffects();
        initSmoothScroll();
    });

    // ===========================
    // Scroll Animations
    // ===========================
    
    /**
     * Initialize Intersection Observer for scroll animations
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add animation class when element enters viewport
                    entry.target.classList.add('fade-in');
                    
                    // Optionally unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll(
            'section, .system-card, .feature-card, .character-card'
        ).forEach((element) => {
            observer.observe(element);
        });
    }

    // ===========================
    // Hover Effects
    // ===========================
    
    /**
     * Initialize card hover effects
     */
    function initHoverEffects() {
        const cards = document.querySelectorAll(
            '.system-card, .feature-card, .character-card'
        );

        cards.forEach((card) => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Icon circle hover effects
        const iconCircles = document.querySelectorAll('.icon-circle');
        iconCircles.forEach((circle) => {
            circle.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });

            circle.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // ===========================
    // Smooth Scrolling
    // ===========================
    
    /**
     * Initialize smooth scroll behavior for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if href is just '#'
                if (href === '#') {
                    return;
                }

                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===========================
    // Parallax Effect (Optional)
    // ===========================
    
    /**
     * Apply subtle parallax effect to hero images
     */
    function initParallax() {
        const heroImages = document.querySelectorAll('.hero-img');
        
        if (heroImages.length === 0) return;

        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;

            heroImages.forEach((img, index) => {
                const speed = 0.5 + (index * 0.1);
                img.style.transform = `translateY(${scrollPosition * speed}px)`;
            });
        });
    }

    // Initialize parallax on load
    if (window.innerWidth > 768) {
        initParallax();
    }

    // ===========================
    // Counter Animation
    // ===========================
    
    /**
     * Animate number counters
     */
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach((counter) => {
            const target = parseInt(counter.textContent);
            const increment = target / 50;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            // Start animation when element is in view
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });

            observer.observe(counter);
        });
    }

    // Initialize counters
    animateCounters();

    // ===========================
    // Scroll to Top Button
    // ===========================
    
    /**
     * Create and manage scroll-to-top button
     */
    function initScrollToTop() {
        // Create button element
        const button = document.createElement('button');
        button.id = 'scrollToTop';
        button.innerHTML = '↑';
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border: 2px solid #D4A94A;
            background-color: #7A0F10;
            color: #F4EDE0;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        `;

        document.body.appendChild(button);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });

        // Scroll to top on click
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effects
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#A01818';
            this.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#7A0F10';
            this.style.transform = 'scale(1)';
        });
    }

    // Initialize scroll-to-top button
    initScrollToTop();

    // ===========================
    // Image Lazy Loading
    // ===========================
    
    /**
     * Lazy load images for better performance
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // Image already loaded, just ensure visibility
                        img.style.opacity = '1';
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach((img) => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                imageObserver.observe(img);
            });
        }
    }

    // Initialize lazy loading
    initLazyLoading();

    // ===========================
    // Window Resize Handler
    // ===========================
    
    /**
     * Handle window resize for responsive adjustments
     */
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        
        resizeTimeout = setTimeout(function() {
            // Re-initialize parallax if switching between mobile and desktop
            if (window.innerWidth > 768 && !window.parallaxInitialized) {
                initParallax();
                window.parallaxInitialized = true;
            }
        }, 250);
    });

    // ===========================
    // Accessibility Features
    // ===========================
    
    /**
     * Keyboard navigation and accessibility enhancements
     */
    function initAccessibility() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: #D4A94A;
            color: #0F1830;
            padding: 8px;
            z-index: 100;
            text-decoration: none;
            border-radius: 0 0 4px 0;
        `;

        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });

        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure all interactive elements are keyboard accessible
        document.querySelectorAll('a, button').forEach((element) => {
            element.setAttribute('tabindex', '0');
        });
    }

    // Initialize accessibility features
    initAccessibility();

    // ===========================
    // Performance Monitoring
    // ===========================
    
    /**
     * Log performance metrics to console
     */
    function logPerformanceMetrics() {
        if (window.performance && window.performance.timing) {
            window.addEventListener('load', function() {
                const timing = window.performance.timing;
                const navigationStart = timing.navigationStart;
                
                const metrics = {
                    'DNS Lookup': timing.domainLookupEnd - timing.domainLookupStart,
                    'TCP Connection': timing.connectEnd - timing.connectStart,
                    'Response Time': timing.responseEnd - timing.responseStart,
                    'DOM Processing': timing.domComplete - timing.domLoading,
                    'Total Load Time': timing.loadEventEnd - navigationStart
                };

                console.log('Performance Metrics:', metrics);
            });
        }
    }

    // Log performance metrics (optional)
    // logPerformanceMetrics();

})();
