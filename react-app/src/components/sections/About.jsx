import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { LocationIcon, PhoneIcon, UserIcon } from '../ui/Icons';

export default function About() {
    const imageRef = useScrollReveal();
    const contentRef = useScrollReveal();
    const circleRef = useRef(null);

    // Parallax effect on circle
    useEffect(() => {
        const circle = circleRef.current;
        if (!circle) return;

        let raf = null;
        const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

        const handleMouseMove = (ev) => {
            const rect = circle.getBoundingClientRect();
            const x = (ev.clientX - rect.left) / rect.width;
            const y = (ev.clientY - rect.top) / rect.height;
            const rx = clamp((0.5 - y) * 10, -8, 8);
            const ry = clamp((x - 0.5) * 10, -8, 8);

            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                circle.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
            });
        };

        const handleMouseLeave = () => {
            if (raf) cancelAnimationFrame(raf);
            circle.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
        };

        circle.addEventListener('mousemove', handleMouseMove);
        circle.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            circle.removeEventListener('mousemove', handleMouseMove);
            circle.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-cyan-50/50 to-cyan-100/50 overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute -right-40 -top-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-52 -bottom-52 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Image Circle */}
                    <div ref={imageRef} className="reveal flex justify-center lg:order-1 order-1">
                        <div className="relative">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 -m-8 border-2 border-dashed border-cyan-400/20 rounded-full animate-rotate-slow" />
                            <div className="absolute inset-0 -m-4 border border-cyan-400/10 rounded-full" />

                            {/* Main circle */}
                            <div
                                ref={circleRef}
                                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden
                                        shadow-2xl transition-transform duration-500 bg-gradient-to-br from-cyan-100 to-teal-100"
                            >
                                <div
                                    className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center transition-transform duration-500 hover:-translate-x-2 hover:scale-105"
                                    style={{ backgroundImage: "url('/Images/Penyengat.jpg')" }}
                                />
                                <div
                                    className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center transition-transform duration-500 hover:translate-x-2 hover:scale-105"
                                    style={{ backgroundImage: "url('/Images/Patung_1000.webp')" }}
                                />
                                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-white/90 to-white/60 -translate-x-1/2 z-10 shadow-lg" />
                                <div className="absolute inset-0 rounded-full border-8 border-white/90 pointer-events-none z-20" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div ref={contentRef} className="reveal lg:order-2 order-2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold text-cyan-700 uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.15)]" />
                            Company Profile
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            About <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Us</span>
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            Enjoy Travel Batam is a trusted travel agency offering quality tour services across the Riau Islands,
                            specializing in Batam exploration with a strong focus on customer needs and memorable experiences.
                        </p>

                        {/* Info Cards - Responsive Grid */}
                        <div className="flex flex-col gap-4">
                            {/* Address Card - Full width on all screens */}
                            <div className="flex items-start gap-4 p-5 bg-white border border-cyan-400/15 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <LocationIcon className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-cyan-700 text-sm mb-1">Office Address</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Jl. Kampung Tengah No. 55, Kelurahan Batu Besar, Kec. Nongsa, Kota Batam, 29466.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Cards - Side by side */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Admin */}
                                <a
                                    href="https://wa.me/6287749946114"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white border border-cyan-400/15 rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-lg hover:border-cyan-400/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform">
                                        <PhoneIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-cyan-700 text-xs">Admin</h4>
                                        <p className="text-gray-600 text-sm">+62 877-4994-6114</p>
                                    </div>
                                </a>

                                {/* Owner */}
                                <a
                                    href="https://wa.me/6281371782381"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-white border border-cyan-400/15 rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-lg hover:border-cyan-400/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform">
                                        <UserIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-cyan-700 text-xs">Owner</h4>
                                        <p className="text-gray-600 text-sm">+62 813-7178-2381</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
