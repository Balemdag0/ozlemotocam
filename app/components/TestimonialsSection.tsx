'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Ahmet Yılmaz',
        vehicle: 'Ford Focus',
        rating: 5,
        text: 'Ön camım kırıldı, aynı gün araç teslim edildi. Montaj çok kaliteli, hiç ses yok. Fiyat da gayet makul. Kesinlikle tavsiye ederim.',
        service: 'Ön Cam Değişimi',
    },
    {
        name: 'Fatma Kaya',
        vehicle: 'Renault Clio',
        rating: 5,
        text: 'Cam filmini burada yaptırdım, araç içi çok daha serin oldu. Hem güneş hem de mahremiyet açısından harika. Usta elleri dert görmesin!',
        service: 'Cam Filmi',
    },
    {
        name: 'Mehmet Demir',
        vehicle: 'Toyota Corolla',
        rating: 5,
        text: 'Çatlak tamiri yaptırdım, artık belli bile değil. Cam değişimi gerekecek diye düşünüyordum ama tamirle çözüldü. Harika hizmet!',
        service: 'Çatlak Tamiri',
    },
    {
        name: 'Zeynep Arslan',
        vehicle: 'Volkswagen Golf',
        rating: 5,
        text: 'Kaput koruma filmi yaptırdık. Trabzon yollarında taş fırlama sorunu çok vardı, artık kaygılanmıyoruz. Çok memnun kaldık.',
        service: 'Kaput Koruma',
    },
    {
        name: 'Mustafa Çelik',
        vehicle: 'BMW 3 Serisi',
        rating: 5,
        text: 'Profesyonel ekip, zamanında teslimat. Camın montajı çok sağlam yapılmış. Trabzon\'da arayıp durduğum ustayı sonunda buldum.',
        service: 'Ön Cam Değişimi',
    },
    {
        name: 'Ayşe Türk',
        vehicle: 'Hyundai i20',
        rating: 5,
        text: 'Yan cam değişimi yaptırdım, hem hızlı hem kaliteli. Araç içi temizliğine bile dikkat ettiler. Çok güvenilir bir işletme.',
        service: 'Yan Cam Değişimi',
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [paused]);

    return (
        <section className="section-padding bg-[#080808]">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Yorumlar
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        MÜŞTERİ<br />YORUMLARI
                    </h2>
                </motion.div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className="overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 md:p-12"
                            >
                                {/* Quote icon */}
                                <div className="text-[#f97316]/20 text-8xl leading-none font-serif mb-4">"</div>

                                <p className="text-white text-lg md:text-xl leading-relaxed mb-6 -mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {testimonials[current].text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white font-bold text-sm">
                                        {testimonials[current].name[0]}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {testimonials[current].name}
                                        </div>
                                        <div className="text-[#9ca3af] text-xs mt-0.5">
                                            {testimonials[current].vehicle} · {testimonials[current].service}
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <StarRating count={testimonials[current].rating} />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#f97316] w-6' : 'bg-[#2a2a2a]'
                                    }`}
                                aria-label={`Yorum ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
