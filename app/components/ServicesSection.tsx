'use client';

import { motion, Variants } from 'framer-motion';

const services = [
    {
        id: 'cam-degisimi',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="12" width="36" height="24" rx="3" />
                <path d="M6 18h36M6 30h36" />
                <path d="M18 12v24M30 12v24" strokeDasharray="3 3" />
            </svg>
        ),
        title: 'Oto Cam Değişimi',
        description:
            'Ön cam, arka cam ve yan cam değişiminde orijinal veya muadil kaliteli camlarla güvenilir montaj yapıyoruz.',
        accent: '#2563EB',
    },
    {
        id: 'catlak-tamiri',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="12" width="36" height="24" rx="3" />
                <path d="M20 18l4 6-3 4 5 8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="18" r="2" fill="currentColor" strokeWidth="0" />
            </svg>
        ),
        title: 'Çatlak Tamiri',
        description:
            'Küçük taş izi ve çatlakları özel reçine ile doldurarak camınızı yeniliyoruz. Cam değişimine gerek kalmadan güvenli çözüm.',
        accent: '#f97316',
    },
    {
        id: 'cam-filmi',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="12" width="36" height="24" rx="3" />
                <path d="M6 12l36 24" />
                <path d="M6 20c4-4 8-4 12 0s8 4 12 0 8-4 12 0" />
            </svg>
        ),
        title: 'Cam Filmi Uygulaması',
        description:
            '3M ve Klormatik güneş koruma & gizlilik filmleri ile araçlarınızı UV ışınlarından koruyarak konfor sağlıyoruz.',
        accent: '#6366f1',
    },
    {
        id: 'kaput-koruma',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 28c0-10 6-18 16-18s16 8 16 18" />
                <path d="M8 28h32" />
                <path d="M12 32c0 4 5 8 12 8s12-4 12-8" />
                <path d="M14 20c0-6 4-10 10-10" strokeDasharray="2 2" />
            </svg>
        ),
        title: 'Kaput Koruma Filmi',
        description:
            'PPF ve kaput koruma filmleriyle aracınızın boyasını taş izi, çizik ve hava koşullarının zararlarından koruyoruz.',
        accent: '#10b981',
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function ServicesSection() {
    return (
        <section id="hizmetler" className="section-padding bg-[#080808]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        NE YAPIYORUZ?
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
                        Araç camı konusunda ihtiyacınız olan her hizmet tek çatı altında.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {services.map((svc) => (
                        <motion.div
                            key={svc.id}
                            variants={itemVariants}
                            className="group relative bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#3a3a3a] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ '--accent': svc.accent } as React.CSSProperties}
                        >
                            {/* Accent line top */}
                            <div
                                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)` }}
                            />

                            {/* Icon */}
                            <div
                                className="p-3 rounded-xl w-fit transition-all duration-300"
                                style={{ color: svc.accent, background: `${svc.accent}18` }}
                            >
                                {svc.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {svc.title}
                                </h3>
                                <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {svc.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
