'use client';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const MosqueIcon = () => (
    <svg className="w-16 h-16 mx-auto text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L8 6v2H6v12h12V8h-2V6l-4-4zm0 2.83L14 6.83V8h-4V6.83L12 4.83zM8 10h8v8H8v-8zm2 2v4h4v-4h-4z"/>
      <circle cx="12" cy="12" r="1"/>
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-16 h-16 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-16 h-16 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
  );

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Tempat Ibadah */}
        <div 
          className={`transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="transform group-hover:rotate-6 transition-transform duration-300">
              <MosqueIcon />
            </div>
            <h3 className="text-lg font-bold mt-4 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300">
              TEMPAT IBADAH
            </h3>
            <motion.p 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
            className="mt-2 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Menyediakan fasilitas ibadah yang nyaman dan representatif sebagai pusat kegiatan keagamaan komunitas, di mana pelaksanaan salat berjamaah lima waktu menjadi prioritas utama, serta memfasilitasi pelaksanaan ibadah sunnah seperti salat tarawih, salat Idul Fitri dan Idul Adha, salat gerhana, dan penyelenggaraan salat jenazah bagi anggota masyarakat yang berduka.
            </motion.p>
          </div>
        </div>

        {/* Pendidikan */}
        <div 
          className={`transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="transform group-hover:-rotate-6 transition-transform duration-300">
              <BookIcon />
            </div>
            <h3 className="text-lg font-bold mt-4 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300">
              PENDIDIKAN
            </h3>
            <motion.p 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
            className="mt-2 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Menyelenggarakan program pendidikan dan pengajian yang komprehensif dan berkelanjutan bagi berbagai kelompok usia, mulai dari anak-anak hingga dewasa, dengan menyediakan kelas-kelas mengaji yang terstruktur serta mengadakan ceramah-ceramah keagamaan rutin untuk meningkatkan pemahaman dan pengamalan nilai-nilai agama.
            </motion.p>
          </div>
        </div>

        {/* Kegiatan Sosial */}
        <div 
          className={`transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="transform group-hover:rotate-6 transition-transform duration-300">
              <CalendarIcon />
            </div>
            <h3 className="text-lg font-bold mt-4 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300">
              KEGIATAN SOSIAL
            </h3>
            <motion.p 
            initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
            className="mt-2 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Mengorganisir berbagai kegiatan sosial dan kemanusiaan yang bertujuan untuk meningkatkan kesejahteraan masyarakat sekitar, melalui penyaluran zakat, infak, dan sedekah yang terkelola dengan baik, serta mengadakan bakti sosial secara berkala sebagai wujud kepedulian dan tanggung jawab sosial terhadap sesama.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;