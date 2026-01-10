import { useState, useEffect } from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#packet', label: 'Packet' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            // Change navbar style after scrolling 100px
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) closeMenu();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        closeMenu();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300
            ${isScrolled
                ? 'bg-white backdrop-blur-lg shadow-md'
                : 'bg-transparent py-3'}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <img
                    src={"/Images/logoenjoy.png"}
                    alt="Enjoy Travel"
                    className={`object-contain
                        ${isScrolled
                            ? 'h-10 md:h-12 brightness-0'
                            : 'h-10 md:h-12 brightness-0 invert'}`}
                />

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden w-10 h-10 rounded-lg backdrop-blur-md border 
                     flex items-center justify-center z-50 transition-all duration-300
                     ${isScrolled
                            ? 'bg-gray-100 border-gray-200 hover:bg-gray-200'
                            : 'bg-white/15 border-white/20 hover:bg-white/25'}
                     ${isOpen ? 'bg-white/25' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    <div className="relative w-5 h-0.5">
                        <span className={`absolute left-0 w-full h-0.5 rounded transition-all duration-300
                            ${isScrolled ? 'bg-gray-800' : 'bg-white'}
                            ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
                        <span className={`absolute left-0 w-full h-0.5 rounded transition-all duration-300
                            ${isScrolled ? 'bg-gray-800' : 'bg-white'}
                            ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute left-0 w-full h-0.5 rounded transition-all duration-300
                            ${isScrolled ? 'bg-gray-800' : 'bg-white'}
                            ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
                    </div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`font-semibold text-sm lg:text-base transition-all duration-300 hover:-translate-y-0.5 relative
                                ${isScrolled
                                    ? 'text-gray-700 hover:text-cyan-600'
                                    : 'text-white opacity-90 hover:opacity-100'}
                                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                                after:transition-all hover:after:w-full
                                ${isScrolled ? 'after:bg-cyan-600' : 'after:bg-white'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Navigation Overlay */}
                {isOpen && (
                    <div
                        className="md:hidden fixed inset-0 bg-black/40 z-30"
                        onClick={closeMenu}
                    />
                )}

                {/* Mobile Navigation Sidebar */}
                <nav className={`md:hidden fixed top-0 right-0 w-[min(320px,85vw)] h-screen
                        flex flex-col items-start justify-start pt-24 px-10 pb-10 z-40
                        bg-gradient-to-br from-[#0b5563]/98 to-[#0a7f8c]/95
                        backdrop-blur-xl shadow-[-10px_0_40px_rgba(0,0,0,0.3)]
                        transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`w-full py-4 text-xl font-semibold text-white border-b border-white/10
                                        transition-all duration-300 hover:translate-x-2
                                        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                            style={{ transitionDelay: isOpen ? `${100 + index * 50}ms` : '0ms' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
