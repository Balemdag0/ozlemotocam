'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 7, suffix: '+', label: 'Yıl Deneyim' },
    { value: 5000, suffix: '+', label: 'Mutlu Müşteri' },
    { value: 10000, suffix: '+', label: 'Tamamlanan İş' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (!inView) return;
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count.toLocaleString('tr-TR')}{suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="py-20 bg-[#0d0d0d] border-y border-[#1a1a1a]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div
                                className="text-5xl md:text-6xl font-black text-white"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                <Counter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[#9ca3af] text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                {stat.label}
                            </div>
                            <div className="w-8 h-px bg-[#f97316] mt-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
