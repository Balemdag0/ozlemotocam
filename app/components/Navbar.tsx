'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        label: 'Hizmetler',
        href: '#hizmetler',
        subLinks: [
            { label: 'Cam Değişimi', href: '/hizmetler/cam-degisimi' },
            { label: 'Cam Filmi', href: '/hizmetler/cam-filmi' },
            { label: 'Çatlak Tamiri', href: '/hizmetler/catlak-tamiri' },
            { label: 'Kaput Koruma', href: '/hizmetler/kaput-koruma' },
        ],
    },
    { label: 'Galeri', href: '/galeri' },
    { label: 'İletişim', href: '/iletisim' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hizmetlerOpen, setHizmetlerOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleLink = (href: string) => {
        setMenuOpen(false);
        setHizmetlerOpen(false);
        if (href.startsWith('#') && isHome) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-[#2a2a2a]' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center select-none"
                    >
                        <Image
                            src="/media/logo.png"
                            alt="Özlem Oto Cam Logo"
                            width={320}
                            height={80}
                            className="h-16 md:h-24 w-auto object-contain relative z-10 scale-[3.0] origin-left mix-blend-plus-lighter"
                            style={{ filter: 'brightness(0) invert(1)' }}
                            priority
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.subLinks ? (
                                <div key={link.href} className="relative group">
                                    <button
                                        className="text-[#9ca3af] hover:text-white text-sm font-medium tracking-wider transition-colors duration-200 uppercase flex items-center gap-1"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {link.label}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 transition-transform group-hover:rotate-180">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl py-2 min-w-[200px] shadow-2xl">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block px-5 py-2.5 text-[#9ca3af] hover:text-white hover:bg-[#1a1a1a] text-sm font-medium transition-colors"
                                                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#9ca3af] hover:text-white text-sm font-medium tracking-wider transition-colors duration-200 uppercase"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                        <Link
                            href="/iletisim"
                            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Hemen Fiyat Al
                        </Link>
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
                        className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-6 md:hidden"
                    >
                        {/* Hizmetler with accordion */}
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => setHizmetlerOpen(!hizmetlerOpen)}
                                className="text-white text-2xl font-bold tracking-widest uppercase flex items-center gap-2"
                                style={{ fontFamily: 'Syncopate, sans-serif' }}
                            >
                                Hizmetler
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${hizmetlerOpen ? 'rotate-180' : ''}`}>
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {hizmetlerOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col items-center gap-3 mt-4 overflow-hidden"
                                    >
                                        {navLinks[0].subLinks!.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                onClick={() => handleLink(sub.href)}
                                                className="text-[#9ca3af] text-lg font-medium hover:text-[#f97316] transition-colors"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/galeri"
                            onClick={() => handleLink('/galeri')}
                            className="text-white text-2xl font-bold tracking-widest uppercase"
                            style={{ fontFamily: 'Syncopate, sans-serif' }}
                        >
                            Galeri
                        </Link>
                        <Link
                            href="/iletisim"
                            onClick={() => handleLink('/iletisim')}
                            className="text-white text-2xl font-bold tracking-widest uppercase"
                            style={{ fontFamily: 'Syncopate, sans-serif' }}
                        >
                            İletişim
                        </Link>
                        <Link
                            href="/iletisim"
                            onClick={() => handleLink('/iletisim')}
                            className="btn-primary text-white text-base font-semibold px-8 py-3 rounded-full mt-4"
                        >
                            Hemen Fiyat Al
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
