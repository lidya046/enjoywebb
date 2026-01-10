import { WhatsAppIcon } from '../ui/Icons';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/Images/hero-bg.png')" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 to-black/35" />

            {/* Hero Content */}
            <div className="z-20 px-4 py-20 md:py-32 max-w-4xl mx-auto">
                <img
                    src="/Images/logoenjoy.png"
                    alt="Enjoy"
                    className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-4 drop-shadow-2xl"
                />

                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
                    Your Tour and Travel
                </h1>

                <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg font-light leading-relaxed opacity-95 mb-8">
                    Temukan destinasi terbaik, rasakan pengalaman baru, dan ciptakan kenangan indah di setiap perjalanan.
                    <br className="hidden md:block" />
                    Liburanmu, cerita yang kami wujudkan.
                </p>

                <a
                    href="https://wa.me/6287749946114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 md:px-7 md:py-4 
                   bg-white text-teal-800 font-extrabold text-sm md:text-base rounded-full
                   shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 w-50 justify-center"
                >
                    <WhatsAppIcon className="w-4 h-4" />
                    Talk to Us
                </a>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    className="relative block w-[calc(142%+1.3px)] h-16 md:h-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        className="fill-white/25"
                    />
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        className="fill-white/50"
                    />
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="fill-white/50"
                    />
                </svg>
            </div>
        </section>
    );
}
