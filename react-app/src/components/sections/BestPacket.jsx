import { useRef, useEffect, useState } from 'react';
import { packages } from '../../data/packages';
import { BadgeIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '../ui/Icons';

export default function BestPacket() {
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
            setTotalPages(Math.ceil(packages.length / visibleCards));
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
        <section id="packetSection" className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Best Packet to Buy</h2>
                    <div className="flex items-center gap-2">
                        <button onClick={goPrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95 hover:cursor-pointer" aria-label="Previous">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={goNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 text-white border border-gray-900 flex items-center justify-center shadow-md hover:bg-white hover:text-gray-900 transition-all active:scale-95 hover:cursor-pointer" aria-label="Next">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div ref={trackRef} className="flex gap-5 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar">
                    {packages.map((pkg) => (
                        <article key={pkg.id} className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                            <div className="h-36 md:h-44 bg-cover bg-center" style={{ backgroundImage: `url('${pkg.image}')` }} />
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold mb-2">
                                    {pkg.duration}
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-3">
                                    {pkg.subtitle}<br /><span className="text-gray-500 text-xs font-semibold">{pkg.title}</span>
                                </h3>
                                <div className="divide-y divide-gray-200 mb-4 py-2">
                                    {pkg.prices.map((price, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-sm py-2 first:pt-0 last:pb-0">
                                            <span><strong className="text-gray-900">{price.price}</strong></span>
                                            <span className="text-xs font-medium text-red-500 bg-red-100 px-2.5 py-1 rounded-full">{price.pax}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={`https://wa.me/6281371782381?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${pkg.subtitle} - ${pkg.title}. Bisa info lebih lanjut?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center font-bold text-sm hover:gap-2.5 transition-all justify-center w-full p-3 rounded-lg bg-cyan-600/70 text-white/90 hover:text-white hover:bg-cyan-600"
                                >
                                    Booking {pkg.title}
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
