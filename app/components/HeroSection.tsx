'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '905342502533';
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, oto cam hizmeti hakkında fiyat almak istiyorum.');

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const scrollToGallery = () => {
        document.querySelector('#galeri')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#080808]">
            {/* Video background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/media/2022-04-20_07-58-58_UTC.jpg"
            >
                <source src="/media/cam-degisimi-trimmed.mp4" type="video/mp4" />
                <source src="/media/2022-04-20_07-58-58_UTC.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay — multi-layer for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />

            {/* Bottom fade into page */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                    Trabzon'un Güvenilir Oto Cam Uzmanı
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
                    style={{ fontFamily: 'Syncopate, sans-serif' }}
                >
                    PROFESYONEL<br />
                    <span className="gradient-text">OTO CAM</span><br />
                    DEĞİŞİM & TAMİR
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)'
                    }}
                >
                    Trabzon'un lider oto cam servisi. Orijinal parça garantisiyle cam değişimi, profesyonel çatlak tamiri ve kusursuz cam filmi uygulamaları.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        id="whatsapp-hero-cta"
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base w-full sm:w-auto justify-center"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hemen Fiyat Al
                    </a>

                    <button
                        id="gallery-scroll-cta"
                        onClick={scrollToGallery}
                        className="btn-outline inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base w-full sm:w-auto justify-center"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Yaptığımız İşleri İncele
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[#9ca3af] text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Aşağı kaydır</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-5 h-5 border-b-2 border-r-2 border-[#9ca3af] rotate-45"
                />
            </motion.div>
        </section>
    );
}
