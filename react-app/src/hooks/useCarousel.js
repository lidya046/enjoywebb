import { useState, useEffect, useRef, useCallback } from 'react';

export function useCarousel(itemsCount, options = {}) {
    const { autoScrollInterval = 0, visibleItems = 1 } = options;
    const [currentPage, setCurrentPage] = useState(0);
    const trackRef = useRef(null);
    const autoScrollRef = useRef(null);
    const isPausedRef = useRef(false);

    const totalPages = Math.ceil(itemsCount / visibleItems);

    const scrollToPage = useCallback((pageIndex) => {
        const clampedPage = Math.max(0, Math.min(pageIndex, totalPages - 1));
        setCurrentPage(clampedPage);

        if (trackRef.current) {
            const cardWidth = trackRef.current.firstElementChild?.getBoundingClientRect().width || 300;
            const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 26;
            const scrollAmount = clampedPage * visibleItems * (cardWidth + gap);
            trackRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    }, [totalPages, visibleItems]);

    const goNext = useCallback(() => {
        const nextPage = currentPage < totalPages - 1 ? currentPage + 1 : 0;
        scrollToPage(nextPage);
    }, [currentPage, totalPages, scrollToPage]);

    const goPrev = useCallback(() => {
        const prevPage = currentPage > 0 ? currentPage - 1 : totalPages - 1;
        scrollToPage(prevPage);
    }, [currentPage, totalPages, scrollToPage]);

    const pause = useCallback(() => {
        isPausedRef.current = true;
    }, []);

    const resume = useCallback(() => {
        isPausedRef.current = false;
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (autoScrollInterval <= 0) return;

        autoScrollRef.current = setInterval(() => {
            if (!isPausedRef.current) {
                goNext();
            }
        }, autoScrollInterval);

        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
            }
        };
    }, [autoScrollInterval, goNext]);

    // Update current page on scroll
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleScroll = () => {
            const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 300;
            const gap = parseFloat(getComputedStyle(track).gap) || 26;
            const scrollPerPage = visibleItems * (cardWidth + gap);
            const newPage = Math.round(track.scrollLeft / scrollPerPage);
            setCurrentPage(newPage);
        };

        track.addEventListener('scroll', handleScroll);
        return () => track.removeEventListener('scroll', handleScroll);
    }, [visibleItems]);

    return {
        trackRef,
        currentPage,
        totalPages,
        goNext,
        goPrev,
        scrollToPage,
        pause,
        resume,
    };
}
