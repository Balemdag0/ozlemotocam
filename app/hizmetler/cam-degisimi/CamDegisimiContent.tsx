'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WHATSAPP_NUMBER = '905342502533';
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, oto cam değişimi hakkında fiyat almak istiyorum.');

const benefits = [
    { icon: '🛡️', title: 'Orijinal ve Muadil Cam Seçenekleri', desc: 'İhtiyacınıza ve bütçenize uygun TSE belgeli orijinal veya muadil kaliteli camlar.' },
    { icon: '⏱️', title: 'Aynı Gün Teslimat', desc: 'Cam değişimi genellikle 1-2 saat içinde tamamlanır. Aracınızı aynı gün teslim alırsınız.' },
    { icon: '✅', title: 'Garanti', desc: 'Tüm cam değişimlerimiz montaj ve malzeme garantisi kapsamındadır.' },
    { icon: '💰', title: 'Uygun Fiyat', desc: 'Rakiplerimize göre uygun fiyat politikası. Ücretsiz fiyat teklifi alın.' },
];

const camTypes = [
    { title: 'Ön Cam Değişimi', desc: 'Aracınızın ön camı kırıldığında veya onarılamayacak düzeyde çatladığında hızlı ve güvenilir ön cam değişimi yapıyoruz. Orijinal cam montaj teknikleri ve profesyonel yapıştırıcılar kullanarak sızdırmazlık ve ses yalıtımı sağlıyoruz.', accent: '#2563EB' },
    { title: 'Arka Cam Değişimi', desc: 'Arka cam değişiminde ısıtma tellerinin doğru çalışmasını ve cam contalarının eksiksiz montajını garanti ediyoruz. Tüm araç markalarına uygun arka cam stoğumuz mevcuttur.', accent: '#f97316' },
    { title: 'Yan Cam Değişimi', desc: 'Yan cam kırılması durumunda hızlı müdahale ile aracınızın güvenliğini sağlıyoruz. Açılır ve sabit yan camlar dahil tüm tiplerde değişim yapabiliyoruz.', accent: '#10b981' },
];

export default function CamDegisimiContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-[#080808]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/8 via-transparent to-transparent" />
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                            Hizmetlerimiz
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                        style={{ fontFamily: 'Syncopate, sans-serif' }}
                    >
                        OTO CAM<br />
                        <span className="gradient-text">DEĞİŞİMİ</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-8"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Trabzon Ortahisar&apos;da ön cam, arka cam ve yan cam değişiminde orijinal ve muadil kaliteli camlarla profesyonel montaj hizmeti sunuyoruz.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Ücretsiz Fiyat Teklifi Al
                    </motion.a>
                </div>
            </section>

            {/* Cam Tipleri */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        CAM TİPLERİ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {camTypes.map((cam, i) => (
                            <motion.div
                                key={cam.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] transition-all duration-300"
                            >
                                <div className="w-3 h-3 rounded-full mb-4" style={{ background: cam.accent }} />
                                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{cam.title}</h3>
                                <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{cam.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Avantajlar */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        NEDEN BİZ?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={b.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex gap-4 bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6"
                            >
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

            {/* Süreç */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        SÜREÇ NASIL İŞLER?
                    </h2>
                    <div className="flex flex-col gap-6">
                        {[
                            { step: '01', title: 'İletişim & Değerlendirme', desc: 'WhatsApp veya telefon ile bize ulaşın. Araç modelinize göre uygun cam ve fiyat bilgisini hemen iletelim.' },
                            { step: '02', title: 'Randevu & Hazırlık', desc: 'Size uygun randevu saatini belirleyelim. Aracınız için doğru cam hazır olacak.' },
                            { step: '03', title: 'Profesyonel Montaj', desc: 'Uzman ekibimiz eski camı güvenle çıkarır, yeni camı orijinal montaj teknikleri ile takar.' },
                            { step: '04', title: 'Kontrol & Teslimat', desc: 'Sızdırmazlık ve güvenlik kontrollerinden sonra aracınız teslim edilir.' },
                        ].map((s, i) => (
                            <motion.div
                                key={s.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex gap-5 items-start"
                            >
                                <div className="text-[#2563EB] font-black text-3xl opacity-50 shrink-0 w-12" style={{ fontFamily: 'Syncopate, sans-serif' }}>{s.step}</div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.title}</h3>
                                    <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        HEMEN FİYAT ALIN
                    </h2>
                    <p className="text-[#9ca3af] text-lg mb-8">Aracınızın markasını ve cam tipini belirtin, anında fiyat teklifi gönderelim.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            WhatsApp ile Fiyat Al
                        </a>
                        <Link
                            href="/"
                            className="btn-outline inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/hizmetler/cam-filmi" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Cam Filmi →</Link>
                        <Link href="/hizmetler/catlak-tamiri" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Çatlak Tamiri →</Link>
                        <Link href="/hizmetler/kaput-koruma" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Kaput Koruma →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
