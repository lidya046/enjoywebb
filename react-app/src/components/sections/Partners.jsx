const partners = [
    { id: 1, name: 'Wonderful Indonesia', logo: '/Images/partners/wonderful-logo.png' },
    { id: 2, name: 'Visit Batam', logo: '/Images/partners/visit-batam-logo.png' },
    { id: 3, name: 'Batam 196', logo: '/Images/partners/batam-196-logo.jpg' },
];

export default function Partners() {
    return (
        <section id="partners" className="py-6 md:py-8 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-12 flex-wrap">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        Trusted by
                    </span>
                    {partners.map((partner) => (
                        <img
                            key={partner.id}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-60 hover:opacity-100 
                       grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
