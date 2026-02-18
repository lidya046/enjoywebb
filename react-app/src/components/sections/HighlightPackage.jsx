import { CarIcon, DriverIcon, FerryIcon, TaxIcon, HotelIcon, BreakfastIcon } from '../ui/Icons';

const features = [
    { id: 1, icon: CarIcon, title: 'Car Transport', subtitle: 'Comfortable vehicle' },
    { id: 2, icon: DriverIcon, title: 'Private Driver', subtitle: 'Professional service' },
    { id: 3, icon: FerryIcon, title: 'Ferry Ticket', subtitle: 'Round trip included' },
    { id: 4, icon: TaxIcon, title: 'Seaport Tax', subtitle: 'All taxes covered' },
    { id: 5, icon: HotelIcon, title: 'Hotel ★★★', subtitle: 'Quality accommodation' },
    { id: 6, icon: BreakfastIcon, title: 'Daily Breakfast', subtitle: 'Morning meals included' },
];

export default function HighlightPackage() {
    return (
        <section
            id="packet"
            className="relative min-h-screen flex items-center justify-center py-16 md:py-24 px-4 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(11, 85, 99, 0.6), rgba(10, 127, 140, 0.6)), url('/Images/highlight-bg.png')" }}
        >
            {/* Bokeh effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`absolute w-3.5 h-3.5 rounded-full bg-amber-200/40 shadow-[0_0_40px_rgba(255,215,140,0.4)] animate-bokeh`}
                        style={{
                            left: `${10 + i * 18}%`,
                            top: `${15 + (i % 3) * 20}%`,
                            animationDuration: `${10 + i * 2}s`,
                            animationDelay: `${i * -2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto">
                {/* Glass Card */}
                <div className="relative bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl 
                       border border-white/25 rounded-3xl md:rounded-[36px] 
                       shadow-[0_30px_60px_rgba(0,0,0,0.3)] p-6 sm:p-8 md:p-12 lg:p-14 overflow-hidden">
                    {/* Decorative gradients */}
                    <div className="absolute -top-36 -right-36 w-72 h-72 bg-white/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

                    {/* Header */}
                    <div className="relative z-10 text-center mb-8 md:mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-white/95 uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,166,35,0.6)]" />
                            Tour Package
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                            Batam Tour Package<br />
                            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">with Itinerary</span>
                        </h2>

                        <p className="text-white/70 text-sm md:text-base max-w-md mx-auto">
                            Join us to explore Batam with our all-inclusive package. Everything you need for the perfect trip!
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={feature.id}
                                    className="flex items-center gap-2.5 md:gap-3 p-3 md:p-4 bg-white/10 border border-white/15 rounded-xl
                           hover:bg-white/15 hover:-translate-y-0.5 transition-all cursor-default"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 
                                flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-xs md:text-sm">{feature.title}</h3>
                                        <p className="text-white/60 text-[10px] md:text-xs">{feature.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="relative z-10 text-center">
                        <a
                            href="https://api.whatsapp.com/send?phone=6281371782381&text=Halo%20Enjoy%20Travel,%20saya%20ingin%20booking%20Tour%20Package"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3 md:px-8 md:py-4 
                       bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                       font-bold text-sm md:text-base rounded-full
                       shadow-[0_12px_40px_rgba(37,211,102,0.35)] 
                       hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(37,211,102,0.45)] 
                       transition-all duration-300"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Book Now via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
