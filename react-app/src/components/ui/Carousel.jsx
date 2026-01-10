import { useCarousel } from '../../hooks/useCarousel';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function Carousel({
    items,
    renderItem,
    autoScrollInterval = 5000,
    showDots = true,
    className = '',
    trackId,
    dotsId,
}) {
    const { trackRef, currentPage, totalPages, goNext, goPrev, scrollToPage, pause, resume } = useCarousel(
        items.length,
        { autoScrollInterval, visibleItems: 1 }
    );

    return (
        <div className={`carousel ${className}`}>
            <div
                ref={trackRef}
                id={trackId}
                className="track"
                onMouseEnter={pause}
                onMouseLeave={resume}
            >
                {items.map((item, index) => renderItem(item, index))}
            </div>

            {showDots && totalPages > 1 && (
                <div
                    id={dotsId}
                    className="flex justify-center items-center gap-2 mt-6"
                    aria-label="Navigation dots"
                >
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${i === currentPage ? 'w-6 bg-black/70' : 'w-2 bg-black/25'
                                }`}
                            onClick={() => scrollToPage(i)}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export function CarouselControls({ onPrev, onNext, prevId, nextId }) {
    return (
        <div className="flex items-center gap-3">
            <button
                id={prevId}
                onClick={onPrev}
                className="carousel-btn prev-btn group inline-flex h-12 w-12 items-center justify-center rounded-full 
                   bg-white/90 backdrop-blur-md border border-black/10 
                   shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                   hover:bg-black hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                   transition-all duration-300 active:scale-90"
                aria-label="Previous"
            >
                <ChevronLeftIcon className="w-5 h-5 text-black/70 group-hover:text-white transition-colors duration-300" />
            </button>
            <button
                id={nextId}
                onClick={onNext}
                className="carousel-btn next-btn group inline-flex h-12 w-12 items-center justify-center rounded-full 
                   bg-black/90 backdrop-blur-md border border-black 
                   shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                   hover:bg-white hover:border-black/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                   transition-all duration-300 active:scale-90"
                aria-label="Next"
            >
                <ChevronRightIcon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
            </button>
        </div>
    );
}
