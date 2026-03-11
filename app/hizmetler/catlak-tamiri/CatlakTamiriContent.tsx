'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WHATSAPP_NUMBER = '905342502533';
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, çatlak tamiri hakkında fiyat almak istiyorum.');

export default function CatlakTamiriContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-[#080808]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f97316]/8 via-transparent to-transparent" />
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                            Hizmetlerimiz
                        </span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        ÇATLAK<br /><span style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TAMİRİ</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Küçük taş izleri ve çatlakları cam değişimine gerek kalmadan özel reçine ile onarıyoruz. Hızlı, ekonomik ve güvenli çözüm.
                    </motion.p>
                    <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Ücretsiz Değerlendirme İste
                    </motion.a>
                </div>
            </section>

            {/* Tamir Edilebilir Durumlar */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>TAMİR Mİ, DEĞİŞİM Mİ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#111111] border border-[#10b981]/30 rounded-2xl p-7">
                            <div className="text-[#10b981] font-bold text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>✅ Tamir Edilebilir</div>
                            <ul className="text-[#9ca3af] text-sm leading-loose space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <li>• Küçük taş izleri (madeni para boyutuna kadar)</li>
                                <li>• 2-3 cm&apos;ye kadar çatlaklar</li>
                                <li>• Yıldız şekilli kırılmalar</li>
                                <li>• Camın kenarında olmayan hasarlar</li>
                                <li>• Sürücü görüş alanı dışındaki çatlaklar</li>
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#111111] border border-[#ef4444]/30 rounded-2xl p-7">
                            <div className="text-[#ef4444] font-bold text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>❌ Değişim Gerekli</div>
                            <ul className="text-[#9ca3af] text-sm leading-loose space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <li>• 3 cm&apos;den büyük çatlaklar</li>
                                <li>• Cam kenarına ulaşan çatlaklar</li>
                                <li>• Sürücü görüş alanındaki hasarlar</li>
                                <li>• Birden fazla çatlak bölgesi</li>
                                <li>• Kırık cam parçaları dökülen hasarlar</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Avantajlar */}
            <section className="py-20 bg-[#080808]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>ÇATLAK TAMİRİNİN AVANTAJLARI</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { icon: '💰', title: 'Cam Değişiminden %80 Ucuz', desc: 'Küçük hasarları erken tamir ettirirseniz cam değişimine göre çok daha ekonomik çözüm elde edersiniz.' },
                            { icon: '⏱️', title: '30 Dakikada Tamamlanır', desc: 'Çatlak tamiri yaklaşık 30 dakika sürer. Bekleme süresi minimum, hızlı teslimat.' },
                            { icon: '🔬', title: 'Görünmez Onarım', desc: 'Özel şeffaf reçine ile doldurulan çatlak neredeyse görünmez hale gelir.' },
                            { icon: '♻️', title: 'Çevre Dostu', desc: 'Cam değişimine gerek kalmadan tamir, atık cam üretimini azaltır.' },
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

            {/* Süreç */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-black text-white text-center mb-14" style={{ fontFamily: 'Syncopate, sans-serif' }}>TAMİR SÜRECİ</h2>
                    <div className="flex flex-col gap-6">
                        {[
                            { step: '01', title: 'Hasar Değerlendirmesi', desc: 'Çatlağın boyutu, konumu ve derinliği incelenir. Tamir mi yoksa değişim mi gerektiğine karar verilir.' },
                            { step: '02', title: 'Temizlik ve Hazırlık', desc: 'Çatlak bölgesi özel aletlerle temizlenir, nem ve kirden arındırılır.' },
                            { step: '03', title: 'Reçine Enjeksiyonu', desc: 'Özel şeffaf reçine basınç altında çatlağa enjekte edilir ve tüm boşluklar doldurulur.' },
                            { step: '04', title: 'UV Kürleme ve Parlatma', desc: 'Reçine UV ışığı ile sertleştirilir, ardından yüzey parlatılarak pürüzsüz hale getirilir.' },
                        ].map((s, i) => (
                            <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex gap-5 items-start">
                                <div className="text-[#f97316] font-black text-3xl opacity-50 shrink-0 w-12" style={{ fontFamily: 'Syncopate, sans-serif' }}>{s.step}</div>
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
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: 'Syncopate, sans-serif' }}>ÜCRETSİZ DEĞERLENDİRME</h2>
                    <p className="text-[#9ca3af] text-lg mb-8">Camınızdaki hasarın fotoğrafını gönderin, tamir mi yoksa değişim mi gerektiğini ücretsiz olarak değerlendirelim.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>WhatsApp ile Fotoğraf Gönderin</a>
                        <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ana Sayfaya Dön</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/hizmetler/cam-degisimi" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Cam Değişimi →</Link>
                        <Link href="/hizmetler/cam-filmi" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Cam Filmi →</Link>
                        <Link href="/hizmetler/kaput-koruma" className="text-[#9ca3af] hover:text-[#f97316] text-sm transition-colors">Kaput Koruma →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
