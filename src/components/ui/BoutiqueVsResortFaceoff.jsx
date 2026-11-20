import React from 'react';
import { motion } from 'framer-motion';

const BoutiqueVsResortFaceoff = ({ data, boutiqueImg, resortImg, vsInColumn = false }) => {
  if (!data) return null;

  return (
    <section className="py-24 px-8 bg-ice-50 text-navy-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl text-navy-950 mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {data?.title}
          </motion.h2>
          {(data?.description || data?.subtitle) && (
            <motion.p
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.description || data.subtitle}
            </motion.p>
          )}
        </div>

        <div className={vsInColumn ? "flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-stretch relative" : "flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch relative"}>
          {/* Boutique Side */}
          <motion.div
            className="flex-1 flex flex-col gap-8 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
              <img src={boutiqueImg} alt={data?.boutique?.title || "Boutique"} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex-1 flex flex-col justify-start">
              <h3 className="text-2xl text-navy-900 mb-2 font-display">{data?.boutique?.title}</h3>
              <h4 className="text-sm text-ts-gold uppercase tracking-wider mb-6 font-semibold">{data?.boutique?.subtitle || data?.boutique?.badge}</h4>
              <ul className="space-y-3">
                {(data?.boutique?.features || data?.boutique?.points || []).map((feature, i) => (
                  <li key={i} className="relative pl-6 text-slate-700">
                    <span className="absolute left-0 text-ts-gold font-bold">→</span>
                    {typeof feature === 'string' ? feature : `${feature.title ? feature.title + ': ' : ''}${feature.description || ''}`}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* VS Badge — the wrapper owns the centering transform; framer-motion's inline
              transform (scale) would otherwise override Tailwind's translate classes.
              Centered on the image row (h-96 => top-48) so it never covers card text. */}
          <div className={vsInColumn ? "hidden" : "hidden lg:block absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"}>
            <motion.div
              className="flex w-20 h-20 rounded-full bg-ts-gold text-white items-center justify-center font-display text-2xl font-bold shadow-xl border-4 border-ice-50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            >
              VS
            </motion.div>
          </div>
          {vsInColumn && (
            <div className="hidden lg:flex flex-col items-center self-start mt-[9.5rem]">
              <div className="flex w-20 h-20 rounded-full bg-ts-gold text-white items-center justify-center font-display text-2xl font-bold shadow-xl border-4 border-ice-50">
                VS
              </div>
            </div>
          )}
          <div className={`lg:hidden w-16 h-16 rounded-full bg-ts-gold text-white flex items-center justify-center self-center font-display text-xl font-bold shadow-xl border-4 border-ice-50 z-10 relative ${vsInColumn ? "" : "-my-10"}`}>
            VS
          </div>

          {/* Resort Side */}
          <motion.div
            className="flex-1 flex flex-col gap-8 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
              <img src={resortImg} alt={data?.resort?.title || "Resort"} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex-1 flex flex-col justify-start">
              <h3 className="text-2xl text-navy-900 mb-2 font-display">{data?.resort?.title}</h3>
              <h4 className="text-sm text-ts-gold uppercase tracking-wider mb-6 font-semibold">{data?.resort?.subtitle || data?.resort?.badge}</h4>
              <ul className="space-y-3">
                {(data?.resort?.features || data?.resort?.points || []).map((feature, i) => (
                  <li key={i} className="relative pl-6 text-slate-700">
                    <span className="absolute left-0 text-ts-gold font-bold">→</span>
                    {typeof feature === 'string' ? feature : `${feature.title ? feature.title + ': ' : ''}${feature.description || ''}`}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueVsResortFaceoff;
