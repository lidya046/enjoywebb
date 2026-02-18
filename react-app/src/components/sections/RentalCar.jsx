import { useRef, useEffect, useState } from 'react';
import { cars } from '../../data/cars';
import { BadgeIcon, ChevronLeftIcon, ChevronRightIcon } from '../ui/Icons';

export default function RentalCar() {
    const trackRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updatePages = () => {
            const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 300;
            const gap = parseFloat(getComputedStyle(track).gap) || 24;
            const trackWidth = track.clientWidth;
            const visibleCards = Math.max(1, Math.floor((trackWidth + gap) / (cardWidth + gap)));
            setTotalPages(Math.ceil(cars.length / visibleCards));
        };

        const handleScroll = () => {
            const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 300;
            const gap = parseFloat(getComputedStyle(track).gap) || 24;
            const trackWidth = track.clientWidth;
            const visibleCards = Math.max(1, Math.floor((trackWidth + gap) / (cardWidth + gap)));
            const scrollPerPage = visibleCards * (cardWidth + gap);
            setCurrentPage(Math.round(track.scrollLeft / scrollPerPage));
        };

        updatePages();
        track.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updatePages);
        return () => {
            track.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updatePages);
        };
    }, []);

    const scrollToPage = (pageIndex) => {
        const track = trackRef.current;
        if (!track) return;
        const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 300;
        const gap = parseFloat(getComputedStyle(track).gap) || 24;
        const trackWidth = track.clientWidth;
        const visibleCards = Math.max(1, Math.floor((trackWidth + gap) / (cardWidth + gap)));
        track.scrollTo({ left: pageIndex * visibleCards * (cardWidth + gap), behavior: 'smooth' });
    };

    const goNext = () => scrollToPage(currentPage < totalPages - 1 ? currentPage + 1 : 0);
    const goPrev = () => scrollToPage(currentPage > 0 ? currentPage - 1 : totalPages - 1);

    return (
        <section id="carSection" className="py-6 md:py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Rental Car</h2>
                    <div className="flex items-center gap-2">
                        <button onClick={goPrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95" aria-label="Previous">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={goNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-900 border border-gray-900 flex items-center justify-center shadow-md hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all hover:cursor-pointer active:scale-95" aria-label="Next">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div ref={trackRef} className="flex gap-5 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar">
                    {cars.map((car) => (
                        <article key={car.id} className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                            <div className="h-36 md:h-40 bg-white flex items-center justify-center p-4">
                                <img src={car.image} alt={car.name} className="max-h-full w-full object-cover" />
                            </div>
                            <div className="p-4 md:p-5">
                                <h3 className="font-bold text-gray-900 text-xl mb-1">{car.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">| {car.seats} Seat</p>

                                <p className="text-gray-400 text-xs mb-2">Price:</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-lg">{car.prices.idr}</span>
                                    <span className="bg-gray-100 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-lg">{car.prices.rm}</span>
                                    <span className="bg-gray-100 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-lg">{car.prices.sgd}</span>
                                </div>

                                <a
                                    href={`https://api.whatsapp.com/send?phone=6281371782381&text=${encodeURIComponent(car.whatsappMsg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-cyan-600 text-white font-bold text-center text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all"
                                >
                                    Booking Now
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center items-center gap-1.5 mt-4">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            className={`h-2 rounded-full transition-all ${i === currentPage ? 'w-6 bg-cyan-600' : 'w-2 bg-cyan-600/50 hover:bg-cyan-600/70'}`}
                            onClick={() => scrollToPage(i)}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
