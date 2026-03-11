'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WHATSAPP_NUMBER = '905342502533';
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, cam filmi uygulaması hakkında fiyat almak istiyorum.');

const filmTypes = [
    { title: 'Güneş Koruma Filmi', desc: 'Araç içini serin tutar, klima verimliliğini artırır. UV ışınlarının %99\'unu engeller. Uzun yolculuklarda konfor sağlar.', accent: '#f97316' },
    { title: 'Gizlilik Filmi', desc: 'Dışarıdan içerisi görünmez, içeriden dışarısı net görünür. Aracınızdaki eşyaların güvenliğini artırır.', accent: '#6366f1' },
    { title: 'Güvenlik Filmi', desc: 'Kaza anında cam kırılsa bile parçaların dağılmasını önler. Hırsızlığa karşı ek güvenlik katmanı sağlar.', accent: '#2563EB' },
];

const brands = [
    { name: '3M', desc: 'Dünya lideri film markası. Üstün UV koruma ve ısı reddi. Uzun ömürlü garanti.' },
    { name: 'Klormatik', desc: 'Yüksek kaliteli yerli üretim. Uygun fiyat-performans oranı. Geniş renk ve ton seçeneği.' },
];

export default function CamFilmiContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-[#080808]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/8 via-transparent to-transparent" />
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
                            Hizmetlerimiz
                        </span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        CAM FİLMİ<br /><span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UYGULAMASI</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        3M ve Klormatik marka cam filmleri ile aracınızı güneşten, UV ışınlarından koruyun ve mahremiyetinizi sağlayın. Profesyonel uygulama, garantili sonuç.
                    </motion.p>
                    <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Ücretsiz Fiyat Teklifi Al
                    </motion.a>
                </div>
            </section>

            {/* Film Tipleri */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>FİLM TİPLERİ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filmTypes.map((film, i) => (
                            <motion.div key={film.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] transition-all duration-300">
                                <div className="w-3 h-3 rounded-full mb-4" style={{ background: film.accent }} />
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{film.title}</h3>
                                <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{film.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Markalar */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>KULLANDIĞIMIZ MARKALAR</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {brands.map((brand, i) => (
                            <motion.div key={brand.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-7">
                                <h3 className="text-[#f97316] font-black text-2xl mb-3" style={{ fontFamily: 'Syncopate, sans-serif' }}>{brand.name}</h3>
                                <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{brand.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Avantajlar */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>CAM FİLMİNİN AVANTAJLARI</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { icon: '☀️', title: '%99 UV Koruma', desc: 'Zararlı UV ışınlarını engelleyerek cildinizi ve araç içini korur.' },
                            { icon: '❄️', title: 'Serin İç Mekan', desc: 'Araç içi sıcaklığını önemli ölçüde düşürür, klima daha verimli çalışır.' },
                            { icon: '🔒', title: 'Gizlilik ve Güvenlik', desc: 'Dışarıdan görüşü engeller, aracınızdaki eşyaları gizler.' },
                            { icon: '💎', title: 'Estetik Görünüm', desc: 'Aracınıza sportif ve şık bir görünüm kazandırır.' },
                        ].map((b, i) => (
                            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6">
                                <span className="text-3xl">{b.icon}</span>
                                <div>
                                    <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{b.title}</h3>
                                    <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'Syncopate, sans-serif' }}>HEMEN FİYAT ALIN</h2>
                    <p className="text-[#9ca3af] text-lg mb-8">Araç modelinizi ve istediğiniz film tipini belirtin, anında fiyat teklifi gönderelim.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>WhatsApp ile Fiyat Al</a>
                        <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ana Sayfaya Dön</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/hizmetler/cam-degisimi" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Cam Değişimi →</Link>
                        <Link href="/hizmetler/catlak-tamiri" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Çatlak Tamiri →</Link>
                        <Link href="/hizmetler/kaput-koruma" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Kaput Koruma →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
