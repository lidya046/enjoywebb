export default function Footer() {
    return (
        <footer className="bg-black">
            {/* Main Footer Content */}
            <div className="bg-sky-50">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Customer Services */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our representative staff is ready to answer your questions via WhatsApp or call
                                with questions about our services or our company.
                            </p>
                        </div>

                        {/* Find Us */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Jl. Kampung Tengah No. 55,<br />
                                Kelurahan Batu Besar,<br />
                                Kecamatan Nongsa,<br />
                                Kota Batam, 29466.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                            <div className="flex items-center gap-4 mb-4">
                                {/* Social Icons */}
                                <a href="https://www.tiktok.com/@enjoytravel.tourism" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.13 1.81 2.89 2.89 0 015.13-1.81V12a6.33 6.33 0 003.77 1.25V9.83a4.81 4.81 0 01-1.55-.25v2.56a6.33 6.33 0 01-3.77-1.25v6.47a6.34 6.34 0 01-10.67 4.58 6.34 6.34 0 0010.67-4.58V6.44h3.45V2z" /></svg>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100090475609768" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/enjoytravel.tourism/" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
                                </a>
                                <a href="https://wa.me/6287749946114" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98.99-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 7c-.01 5.45-4.44 9.88-9.88 9.88m8.41-18.29A11.82 11.82 0 0 0 12.05 0C5.49 0 .16 5.33.16 11.89a11.87 11.87 0 0 0 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01C18.61 23.8 24 18.47 24 11.91c0-3.18-1.23-6.17-3.48-8.42z" /></svg>
                                </a>
                            </div>
                            <div className="space-y-2">
                                <a href="tel:+6287749946114" className="block text-gray-600 hover:text-cyan-600 text-sm transition-colors">
                                    +62 877-4994-6114 (Admin)
                                </a>
                                <a href="tel:+6281371782381" className="block text-gray-600 hover:text-cyan-600 text-sm transition-colors">
                                    +62 813-7178-2381 (Owner)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-4 px-4 text-center">
                <p className="text-gray-500 text-sm">
                    © 2025 <span className="font-enjoy text-white">Enjoy</span> Travel. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
