'use client';

import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '905342502533';
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, oto cam hizmeti hakkında fiyat almak istiyorum.');

interface ShowcaseCard {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    videoSrc: string;
    posterSrc: string;
    accent: string;
    badge: string;
}

const CARDS: ShowcaseCard[] = [
    {
        id: 'kaput-koruma',
        title: 'Kaput Koruma',
        subtitle: 'Filmi',
        description:
            'PPF şeffaf koruma filmi ile boyanızı taş izi, çizik ve UV hasarından koruyun. Araç değerinizi yıllarca koruyun.',
        videoSrc: '/media/kaput-koruma-trimmed.mp4',
        posterSrc: '/media/2022-02-07_10-50-57_UTC.jpg',
        accent: '#10b981',
        badge: 'PPF / Kaput Koruma',
    },
    {
        id: 'cam-degisimi',
        title: 'Cam Değişimi',
        subtitle: 've Montajı',
        description:
            'Ön cam, arka cam ve yan cam değişiminde orijinal kaliteli camlarla hızlı ve güvenilir montaj sağlıyoruz.',
        videoSrc: '/media/2021-12-18_08-57-32_UTC.mp4',
        posterSrc: '/media/2021-12-18_08-57-32_UTC.jpg',
        accent: '#2563EB',
        badge: 'Cam Değişimi',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function VideoShowcaseSection() {
    return (
        <section id="video-showcase" className="bg-[#080808] py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-8"
                >
                    <span
                        className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-3 block"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Hizmetlerimizden
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{ fontFamily: 'Syncopate, sans-serif' }}
                    >
                        GERÇEK SONUÇLAR
                    </h2>
                </motion.div>

                {/* Two-column video cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {CARDS.map((card, i) => (
                        <motion.div
                            key={card.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative overflow-hidden rounded-2xl"
                            style={{ minHeight: '480px' }}
                        >
                            {/* Background video */}
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={card.posterSrc}
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src={card.videoSrc} type="video/mp4" />
                            </video>

                            {/* Gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: `radial-gradient(ellipse at bottom left, ${card.accent}55 0%, transparent 60%)`,
                                }}
                            />

                            {/* Accent top line */}
                            <div
                                className="absolute top-0 inset-x-0 h-[3px]"
                                style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-end h-full p-7 md:p-8" style={{ minHeight: '480px' }}>
                                {/* Badge */}
                                <div
                                    className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border"
                                    style={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: card.accent,
                                        borderColor: `${card.accent}55`,
                                        background: `${card.accent}18`,
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                                        style={{ background: card.accent }}
                                    />
                                    {card.badge}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-4xl md:text-5xl font-black text-white leading-tight mb-1"
                                    style={{ fontFamily: 'Syncopate, sans-serif' }}
                                >
                                    {card.title}
                                </h3>
                                <h3
                                    className="text-2xl md:text-3xl font-black leading-tight mb-4"
                                    style={{ fontFamily: 'Syncopate, sans-serif', color: card.accent }}
                                >
                                    {card.subtitle}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-[#c0c0c0] text-sm md:text-base leading-relaxed mb-6 max-w-sm"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {card.description}
                                </p>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        background: card.accent,
                                        boxShadow: `0 4px 20px ${card.accent}55`,
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Fiyat Al
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
