import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: options.threshold || 0.18 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options.threshold]);

    return ref;
}

export function useMultipleScrollReveal(selector, options = {}) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: options.threshold || 0.18 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [selector, options.threshold]);
}
