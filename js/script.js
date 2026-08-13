/**
 * Trang Phục & Ngoại Hình Trong Tuồng
 * Gentle motion and navigation enhancements for the long-form page.
 */

(() => {
    'use strict';

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', () => {
        createScrollProgress();
        updateHeaderState();
        initialiseRevealAnimations();
        initialiseChapterNavigation();
        initialiseScrollToTop();

        window.addEventListener('scroll', updateHeaderState, { passive: true });
    });

    function createScrollProgress() {
        const progress = document.createElement('div');
        const indicator = document.createElement('span');

        progress.className = 'scroll-progress';
        progress.setAttribute('aria-hidden', 'true');
        progress.append(indicator);
        document.body.prepend(progress);

        const updateProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progressValue = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
            indicator.style.setProperty('--scroll-progress', `${Math.min(progressValue, 100)}%`);
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress, { passive: true });
    }

    function updateHeaderState() {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('is-scrolled', window.scrollY > 12);
        }
    }

    function initialiseRevealAnimations() {
        const elements = document.querySelectorAll(
            '.intro-content, .table-wrap, .topic-card, .lead-copy, .subsection-title, .feature-card, .detail-card, .prose-block, .quote-text'
        );

        elements.forEach((element, index) => {
            element.classList.add('reveal-item');
            element.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
        });

        if (reducedMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -32px'
        });

        elements.forEach((element) => observer.observe(element));
    }

    function initialiseChapterNavigation() {
        const links = [...document.querySelectorAll('.chapter-nav a')];
        const targets = links
            .map((link) => document.querySelector(link.getAttribute('href')))
            .filter(Boolean);

        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                const target = document.querySelector(link.getAttribute('href'));
                if (!target) return;

                event.preventDefault();
                target.scrollIntoView({
                    behavior: reducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            });
        });

        if (!('IntersectionObserver' in window)) return;

        const activeObserver = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

            if (!visible) return;

            links.forEach((link) => {
                const isActive = link.getAttribute('href') === `#${visible.target.id}`;
                link.classList.toggle('is-active', isActive);
                isActive ? link.setAttribute('aria-current', 'true') : link.removeAttribute('aria-current');
            });
        }, {
            rootMargin: '-28% 0px -62% 0px',
            threshold: [0.01, 0.2, 0.5]
        });

        targets.forEach((target) => activeObserver.observe(target));
    }

    function initialiseScrollToTop() {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'scroll-to-top';
        button.setAttribute('aria-label', 'Trở về đầu trang');
        button.innerHTML = '↑';
        document.body.append(button);

        const updateButton = () => {
            button.classList.toggle('is-visible', window.scrollY > 560);
        };

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        });

        updateButton();
        window.addEventListener('scroll', updateButton, { passive: true });
    }
})();
