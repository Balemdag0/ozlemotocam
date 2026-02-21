'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import allMedia from '../../data/media.json';

interface MediaItem {
    id: string;
    thumbnail: string;
    video: string | null;
    caption: string;
    category: string;
    date: string;
}

const FILTERS = [
    { key: 'all', label: 'Tümü' },
    { key: 'cam-degisimi', label: 'Cam Değişimi' },
    { key: 'cam-filmi', label: 'Cam Filmi' },
    { key: 'tamir', label: 'Tamir' },
    { key: 'kaput-koruma', label: 'Kaput Koruma' },
    { key: 'diger', label: 'Diğer' },
];

// Show newest 80 items max for performance
const baseItems = (allMedia as MediaItem[]).slice(0, 80);

export default function GallerySection() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
    const [stackItems, setStackItems] = useState<MediaItem[]>([]);

    // Get the top 5 items for the selected category
    useEffect(() => {
        let selected: MediaItem[] = [];
        if (activeFilter === 'all') {
            // Pick 1 from each category until we have up to 5
            const categories = FILTERS.slice(1).map(f => f.key);
            for (const cat of categories) {
                const item = baseItems.find(i => i.category === cat);
                if (item && selected.length < 5) selected.push(item);
            }
            // Fill rest with newest if we don't have 5
            const remaining = baseItems.filter(i => !selected.includes(i));
            selected = [...selected, ...remaining].slice(0, 5);
        } else {
            selected = baseItems.filter((item) => item.category === activeFilter).slice(0, 5);
        }
        setStackItems(selected);
    }, [activeFilter]);

    const handleNext = () => {
        setStackItems((prev) => {
            const newArr = [...prev];
            const first = newArr.shift();
            if (first) newArr.push(first);
            return newArr;
        });
    };

    const handlePrev = () => {
        setStackItems((prev) => {
            const newArr = [...prev];
            const last = newArr.pop();
            if (last) newArr.unshift(last);
            return newArr;
        });
    };

    return (
        <section id="galeri" className="section-padding bg-[#080808]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Galeri
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        YAPTIĞIMIZ İŞLER
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Yıllarca süren deneyim ve yüzlerce mutlu müşteri. İşte gerçek sonuçlar.
                    </p>
                </motion.div>

                {/* Filter pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2.5 mb-10"
                >
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            id={`filter-${f.key}`}
                            onClick={() => setActiveFilter(f.key)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === f.key
                                ? 'bg-[#f97316] text-white shadow-lg shadow-orange-500/30'
                                : 'bg-[#181818] text-[#9ca3af] hover:bg-[#242424] hover:text-white border border-[#2a2a2a]'
                                }`}
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* Card Stack Playground */}
                <div className="relative w-full max-w-2xl mx-auto h-[450px] md:h-[600px] flex items-center justify-center perspective-1000">
                    <AnimatePresence mode="popLayout">
                        {stackItems.map((item, index) => {
                            // Calculate absolute position based on index (0 is front)
                            const isFront = index === 0;
                            const scale = 1 - index * 0.05;
                            const yOffset = index * 20;
                            const zIndex = stackItems.length - index;
                            const opacity = index < 4 ? 1 - index * 0.2 : 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    animate={{ opacity, y: yOffset, scale, zIndex }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="absolute top-0 w-full h-full max-w-md md:max-w-xl left-1/2 -translate-x-1/2"
                                    style={{ transformOrigin: 'top center' }}
                                >
                                    <div
                                        className={`relative w-full h-64 md:h-[400px] overflow-hidden rounded-2xl bg-[#181818] shadow-2xl transition-all duration-300 ${isFront ? 'cursor-pointer hover:shadow-orange-500/20 group' : 'pointer-events-none'}`}
                                        onClick={() => isFront && setLightboxItem(item)}
                                    >
                                        <div className="absolute inset-0">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.caption || 'Oto cam işi'}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className={`object-cover transition-transform duration-700 ${isFront ? 'group-hover:scale-105' : ''}`}
                                            />
                                        </div>

                                        {/* Overlays for front card */}
                                        {isFront && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                                    {item.caption && (
                                                        <p className="text-white text-sm font-medium leading-relaxed line-clamp-3 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                            {item.caption}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                                                        <span className="text-[#f97316] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                            {FILTERS.find((f) => f.key === item.category)?.label ?? item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                                            </>
                                        )}

                                        {/* Dimmer for back cards */}
                                        {!isFront && (
                                            <div className="absolute inset-0 bg-black/40" />
                                        )}

                                        {/* Video badge */}
                                        {item.video && isFront && (
                                            <div className="absolute top-3 right-3 bg-black/70 text-white rounded-full p-2 backdrop-blur-sm">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* Shuffle Controls */}
                    {stackItems.length > 1 && (
                        <div className="absolute -bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full bg-[#181818] border border-[#333] flex items-center justify-center text-white hover:bg-[#f97316] hover:border-[#f97316] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f97316]/50"
                                aria-label="Önceki fotoğraf"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <span className="text-[#666] text-xs font-medium tracking-widest uppercase">Kaydır</span>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full bg-[#181818] border border-[#333] flex items-center justify-center text-white hover:bg-[#f97316] hover:border-[#f97316] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f97316]/50"
                                aria-label="Sonraki fotoğraf"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxItem && (
                    <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

function Lightbox({ item, onClose }: { item: MediaItem; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-medium z-10"
                >
                    ✕ Kapat
                </button>

                {item.video ? (
                    <video
                        src={item.video}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full max-h-[80vh] object-contain rounded-xl"
                    />
                ) : (
                    <div className="relative w-full h-[80vh]">
                        <Image
                            src={item.thumbnail}
                            alt={item.caption || 'Oto cam işi'}
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                )}

                {item.caption && (
                    <div className="mt-3 text-[#9ca3af] text-sm text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.caption}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
