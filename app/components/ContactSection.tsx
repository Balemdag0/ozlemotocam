'use client';

import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '905342502533'; // TODO: replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent('Merhaba, oto cam hizmeti hakkında fiyat almak istiyorum.');

export default function ContactSection() {
    return (
        <section id="iletisim" className="section-padding bg-[#0d0d0d] border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-[#f97316] text-xs font-bold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        İletişim
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                        BİZE ULAŞIN
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-lg mx-auto">
                        Sorularınız için bize WhatsApp&apos;tan yazın veya haritadan bizi bulun.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left — Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Info cards */}
                        <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-5">
                            {/* Shop name */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-[#f97316]/10 text-[#f97316] shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Özlem Oto Cam</div>
                                    <div className="text-[#9ca3af] text-sm mt-1">Trabzon, Türkiye</div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#2a2a2a]" />

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-[#2563EB]/10 text-[#2563EB] shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#9ca3af] text-xs font-medium tracking-wider uppercase mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Telefon</div>
                                    <a href="tel:+905342502533" className="text-white font-semibold hover:text-[#f97316] transition-colors duration-200">
                                        +90 534 250 25 33
                                    </a>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#2a2a2a]" />

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-[#10b981]/10 text-[#10b981] shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#9ca3af] text-xs font-medium tracking-wider uppercase mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Çalışma Saatleri</div>
                                    <div className="text-white font-semibold text-sm">Pzt – Cmt: 08:00 – 18:00</div>
                                    <div className="text-[#9ca3af] text-xs mt-0.5">Pazar: Randevuyla</div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            id="whatsapp-contact-cta"
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-base py-4 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900/30"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp&apos;tan Ulaşın
                        </a>
                    </motion.div>

                    {/* Right — Google Maps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl overflow-hidden border border-[#2a2a2a] min-h-[350px]"
                    >
                        <iframe
                            title="Özlem Oto Cam Konum"
                            src="https://maps.google.com/maps?q=40.9963735,39.755236&hl=tr&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '350px', filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
