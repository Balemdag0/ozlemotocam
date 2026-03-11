'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'Trabzon\'da oto cam değişimi ne kadar sürer?',
        answer: 'Oto cam değişimi genellikle 1-2 saat içinde tamamlanır. Cam montajı sonrası yapıştırıcının kuruma süresi dahil aynı gün aracınızı teslim alabilirsiniz.',
    },
    {
        question: 'Cam filmi uygulaması fiyatları ne kadar?',
        answer: 'Cam filmi fiyatları araç modeline ve film kalitesine göre değişmektedir. 3M ve Klormatik marka filmler kullanıyoruz. Güncel fiyat bilgisi için WhatsApp üzerinden bize ulaşabilirsiniz.',
    },
    {
        question: 'Çatlak tamiri mi yoksa cam değişimi mi gerekli?',
        answer: 'Küçük taş izleri ve 2-3 cm\'ye kadar olan çatlaklar özel reçine ile tamir edilebilir. Daha büyük çatlaklar veya sürücü görüş alanındaki hasarlar için cam değişimi önerilir. Ücretsiz değerlendirme için bizi arayın.',
    },
    {
        question: 'Kaput koruma filmi (PPF) ne işe yarar?',
        answer: 'PPF (Paint Protection Film) aracınızın boyasını taş izi, çizik, böcek asidi ve UV hasarından korur. Özellikle Trabzon\'un dağlık yollarında taş fırlama riski yüksek olduğu için kaput koruma filmi çok faydalıdır.',
    },
    {
        question: 'Özlem Oto Cam nerede bulunuyor?',
        answer: 'Sanayi Mahallesi, Şehit Ömer Yıldız Sokak No:43, Ortahisar / Trabzon adresinde bulunuyoruz. Pazartesi-Cumartesi 08:00-18:00 arası hizmet veriyoruz.',
    },
    {
        question: 'Hangi marka camlar kullanılıyor?',
        answer: 'Müşterilerimizin tercihine göre hem orijinal (OEM) hem de TSE belgeli muadil kaliteli camlar kullanıyoruz. Tüm camlarımız garantilidir.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="sss" className="section-padding bg-[#080808]">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span
                        className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-3 block"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Sık Sorulan Sorular
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: 'Syncopate, sans-serif' }}
                    >
                        MERAK EDİLENLER
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-lg mx-auto">
                        Oto cam hizmetlerimiz hakkında en sık sorulan sorular ve cevapları.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className={`bg-[#111111] border rounded-2xl overflow-hidden transition-all duration-300 ${
                                    isOpen ? 'border-[#f97316]/40' : 'border-[#2a2a2a]'
                                }`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <h3
                                        className="text-white font-semibold text-base md:text-lg leading-snug"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            isOpen
                                                ? 'bg-[#f97316] text-white rotate-45'
                                                : 'bg-[#1a1a1a] text-[#9ca3af]'
                                        }`}
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? 'max-h-96 pb-5 md:pb-6' : 'max-h-0'
                                    }`}
                                >
                                    <p
                                        className="text-[#9ca3af] text-sm md:text-base leading-relaxed px-5 md:px-6"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
