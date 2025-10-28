import React from 'react';

const Header: React.FC = () => {
    const navLinks = [
        { href: "#instructor", label: "الأستاذ الخبير" },
        { href: "#content", label: "محتوى الدورة" },
        { href: "#testimonials", label: "آراء الناجحين" },
        { href: "#faq", label: "أسئلة شائعة" },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center gap-3">
                        <img src="https://lh3.googleusercontent.com/P0b31L29-pHm_qqMwAREuImuNJ4CRs4c4k8DmllT7aczi23RYAQXjgRKTJdVVUXZeDTuvRoX25XdPBaZbDofW-6AgPradJ7qBIs" alt="Nadjah Academy Logo" className="h-10 sm:h-12 w-auto" />
                    </div>
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-sm font-bold text-gray-600 hover:text-sky-700 transition-colors">{link.label}</a>
                        ))}
                    </nav>
                    <a href="#form" className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold py-2.5 px-6 rounded-lg text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/40 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                        <span>سجل الآن</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;