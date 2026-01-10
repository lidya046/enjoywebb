export default function ContactMap() {
    return (
        <section id="contact" className="w-full bg-white">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d312.28999353851253!2d104.13114540896952!3d1.1593976489039532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d987003bf196b3%3A0x29366b6067cacb18!2sEnjoy%20Travel!5e1!3m2!1sen!2sid!4v1766371195295!5m2!1sen!2sid"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Enjoy Travel Location"
                />

                <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.+Kampung+Tengah+No.+55,+Kelurahan+Batu+Besar,+Kecamatan+Nongsa,+Kota+Batam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label="Buka lokasi Enjoy Travel di Google Maps"
                >
                    <span className="sr-only">Buka di Google Maps</span>
                </a>

                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 
                       bg-black/70 text-white text-[10px] md:text-xs px-2.5 py-1.5 md:px-3 md:py-2 
                       rounded-lg pointer-events-none">
                    Tap to open in Google Maps
                </div>
            </div>
        </section>
    );
}
