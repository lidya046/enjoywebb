import { useEffect } from 'react';
import { LocationIcon, DocumentIcon, PhoneIcon, ClockIcon, CoffeeIcon, HomeIcon } from '../ui/Icons';

const reasons = [
    { id: 1, icon: LocationIcon, title: 'Strategic Location', description: 'Easily accessible from Singapore and Malaysia with quick ferry connections.' },
    { id: 2, icon: DocumentIcon, title: 'Amazing Attractions', description: 'Beautiful beaches, world-class golf, relaxing spas, and vibrant shopping spots.' },
    { id: 3, icon: PhoneIcon, title: 'Easy Access', description: 'Reachable by ferry or via Hang Nadim International Airport.' },
    { id: 4, icon: ClockIcon, title: 'Exciting Activities', description: 'Golf, spa treatments, mangrove tours, watersports, and endless shopping.' },
    { id: 5, icon: CoffeeIcon, title: 'Local Culinary', description: 'Famous for fresh seafood and local dishes like mie lendir and otak-otak.' },
    { id: 6, icon: HomeIcon, title: 'Great Accommodation', description: 'Plenty of hotel options from luxury resorts to budget-friendly stays.' },
];

export default function WhyChooseUs() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18 }
        );

        const cards = document.querySelectorAll('.why-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="why" className="relative py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-teal-50/50 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">

                    {/* Left: Title Section */}
                    <div className="lg:sticky lg:top-24 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-700/10 border border-teal-700/15 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.15)]" />
                            Why Choose Us
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Why You<br className="hidden lg:block" /> Should <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Choose Us?</span>
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-sm mx-auto lg:mx-0">
                            Discover the perfect blend of accessibility, adventure, and authentic experiences that make Batam your ideal destination.
                        </p>
                    </div>

                    {/* Right: Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        {reasons.map((reason, index) => {
                            const IconComponent = reason.icon;
                            return (
                                <div
                                    key={reason.id}
                                    className="why-card reveal bg-white border border-teal-700/10 rounded-2xl p-5 md:p-6
                                                shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-cyan-600/25
                                                transition-all duration-400"
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 
                                                flex items-center justify-center transition-all
                                                group-hover:from-cyan-500 group-hover:to-teal-500">
                                            <IconComponent className="w-6 h-6 text-cyan-600" />
                                        </div>
                                        <span className="text-2xl md:text-3xl font-extrabold text-gray-200">
                                            {String(reason.id).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">{reason.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
