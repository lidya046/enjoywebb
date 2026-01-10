import { useRef, useState } from 'react';
import { galleryImages } from '../../data/galleryImages';
import { ChevronLeftIcon, ChevronRightIcon } from '../ui/Icons';

export default function Gallery() {
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToIndex = (index) => {
        const track = trackRef.current;
        if (!track) return;
        const cards = track.querySelectorAll('article');
        if (cards[index]) {
            cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            setCurrentIndex(index);
        }
    };

    const goNext = () => scrollToIndex(currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0);
    const goPrev = () => scrollToIndex(currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1);

    const handleScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const cards = track.querySelectorAll('article');
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(center - cardCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setCurrentIndex(closestIndex);
    };

    return (
        <section id="gallery" className="py-12 md:py-16 lg:py-20 bg-amber-50/40">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="px-4 md:px-8 text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 md:gap-3 flex-wrap justify-center">
                        <span className="font-enjoy text-2xl md:text-3xl lg:text-4xl text-gray-900">Enjoy</span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Our Gallery</h2>
                    </div>
                    <p className="mt-3 text-sm md:text-base text-gray-500 max-w-md mx-auto">
                        Explore best moments & destinations — swipe to see more
                    </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between px-4 md:px-8 mb-6">
                    <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
                        <span className="h-2 w-2 rounded-full bg-gray-400" />
                        <span>Enjoy Travel Gallery</span>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <button onClick={goPrev} className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95 hover:cursor-pointer" aria-label="Previous">
                            <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        <button onClick={goNext} className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-900 text-white border border-gray-900 flex items-center justify-center shadow-md hover:bg-white hover:text-gray-900 transition-all active:scale-95 hover:cursor-pointer" aria-label="Next">
                            <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                </div>

                {/* Gallery Track */}
                <div
                    ref={trackRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-8 pb-6 no-scrollbar"
                >
                    {galleryImages.map((image) => (
                        <article
                            key={image.id}
                            className="snap-center shrink-0 w-56 sm:w-64 md:w-72"
                        >
                            <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300">
                                <img
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    src={image.src}
                                    alt={`Gallery ${image.id}`}
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4 flex items-center gap-2">
                                    <span className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-white/90 text-gray-900 font-bold text-xs flex items-center justify-center shadow">
                                        {String(image.id).padStart(2, '0')}
                                    </span>
                                    <div className="text-white">
                                        <p className="text-xs md:text-sm font-semibold leading-tight">{image.title}</p>
                                        <p className="text-[10px] md:text-xs text-white/80">{image.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center items-center gap-1.5 mt-4 px-4">
                    {galleryImages.map((_, i) => (
                        <button
                            key={i}
                            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-gray-800' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                            onClick={() => scrollToIndex(i)}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
