'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'İletişim', href: '#iletisim' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleLink = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-[#2a2a2a]' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center select-none"
                    >
                        <img
                            src="/media/logo.png"
                            alt="Özlem Oto Cam Logo"
                            className="h-16 md:h-24 w-auto object-contain relative z-10 scale-[3.0] origin-left mix-blend-plus-lighter"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLink(link.href)}
                                className="text-[#9ca3af] hover:text-white text-sm font-medium tracking-wider transition-colors duration-200 uppercase"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleLink('#iletisim')}
                            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Hemen Fiyat Al
                        </button>
                    </div>

                    {/* Hamburger */}
                    <button
                        id="hamburger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Menü"
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLink(link.href)}
                                className="text-white text-2xl font-bold tracking-widest uppercase"
                                style={{ fontFamily: 'Syncopate, sans-serif' }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleLink('#iletisim')}
                            className="btn-primary text-white text-base font-semibold px-8 py-3 rounded-full mt-4"
                        >
                            Hemen Fiyat Al
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
