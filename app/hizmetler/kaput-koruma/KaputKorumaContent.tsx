'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WHATSAPP_NUMBER = '905342502533';
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, kaput koruma filmi hakkında fiyat almak istiyorum.');

export default function KaputKorumaContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-[#080808]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/8 via-transparent to-transparent" />
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                            Hizmetlerimiz
                        </span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        KAPUT KORUMA<br /><span style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FİLMİ (PPF)</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        PPF (Paint Protection Film) ile aracınızın boyasını taş izi, çizik, böcek asidi ve UV hasarından koruyun. Araç değerinizi yıllarca muhafaza edin.
                    </motion.p>
                    <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Ücretsiz Fiyat Teklifi Al
                    </motion.a>
                </div>
            </section>

            {/* PPF Nedir */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>PPF NEDİR?</h2>
                    <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8">
                        <p className="text-[#c0c0c0] text-base leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            PPF (Paint Protection Film), aracınızın boyalı yüzeylerine uygulanan şeffaf, esnek ve dayanıklı bir koruma filmidir. Özellikle kaput, çamurluk, tampon ve ayna kapakları gibi taş darbesine en çok maruz kalan bölgelerde kullanılır.
                        </p>
                        <p className="text-[#c0c0c0] text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Trabzon&apos;un dağlık yollarında ve karadeniz sahil yollarında taş fırlama riski çok yüksektir. PPF uygulaması ile aracınızın boyasını bu tehlikelerden koruyabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Koruma Alanları */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>NELERDEN KORUR?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { icon: '🪨', title: 'Taş İzi', desc: 'Yoldan fırlayan taşların boya üzerinde bıraktığı çizik ve izleri önler.' },
                            { icon: '🔑', title: 'Çizik', desc: 'Günlük kullanımda oluşabilecek yüzeysel çiziklere karşı korur.' },
                            { icon: '🐛', title: 'Böcek Asidi', desc: 'Böcek kalıntılarının boyadaki asit etkisini engeller.' },
                            { icon: '☀️', title: 'UV Hasarı', desc: 'Güneş ışığının boyayı solmasını ve matlaşmasını önler.' },
                            { icon: '🧪', title: 'Kimyasal Etki', desc: 'Kuş pisliği, ağaç reçinesi gibi kimyasallara karşı bariyer oluşturur.' },
                            { icon: '✨', title: 'Self-Healing', desc: 'Bazı PPF türleri ısı ile kendini iyileştirme özelliğine sahiptir.' },
                        ].map((b, i) => (
                            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 text-center">
                                <span className="text-3xl block mb-3">{b.icon}</span>
                                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{b.title}</h3>
                                <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Uygulama Bölgeleri */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>UYGULAMA BÖLGELERİ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { area: 'Kaput', desc: 'En çok taş darbesine maruz kalan bölge. Tam kaput kaplama önerilir.' },
                            { area: 'Ön Çamurluklar', desc: 'Ön tekerleklerden sıçrayan taş ve kum parçacıklarına karşı koruma.' },
                            { area: 'Ön Tampon', desc: 'En düşük bölge olduğu için sürekli darbe alır. PPF ile korunması şarttır.' },
                            { area: 'Ayna Kapakları', desc: 'Dar yollarda ve parklarda çizilmeye en müsait bölge.' },
                        ].map((b, i) => (
                            <motion.div key={b.area} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6">
                                <div className="w-3 h-3 rounded-full bg-[#10b981] mt-1.5 shrink-0" />
                                <div>
                                    <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{b.area}</h3>
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
                    <p className="text-[#9ca3af] text-lg mb-8">Araç modelinizi ve koruma istediğiniz bölgeleri belirtin, size özel fiyat teklifi gönderelim.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>WhatsApp ile Fiyat Al</a>
                        <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ana Sayfaya Dön</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/hizmetler/cam-degisimi" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Cam Değişimi →</Link>
                        <Link href="/hizmetler/cam-filmi" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Cam Filmi →</Link>
                        <Link href="/hizmetler/catlak-tamiri" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Çatlak Tamiri →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
