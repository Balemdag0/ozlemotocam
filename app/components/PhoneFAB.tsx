'use client';

import { motion } from 'framer-motion';

const PHONE_NUMBER = '+904623252332';

export default function PhoneFAB() {
    return (
        <motion.a
            href={`tel:${PHONE_NUMBER}`}
            id="phone-fab"
            aria-label="Telefonla arayın"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[90] w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/40"
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-30" />
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
        </motion.a>
    );
}
