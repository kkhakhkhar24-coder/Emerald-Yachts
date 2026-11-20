import React from 'react';
import { Link } from 'react-router-dom';
import MasterImage from './MasterImage';

const PositanoPillarGrid = ({ title, subtitle, items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 bg-white shadow-sm group hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col h-full"
            >
              {/* Top Image Section - clean, NO hover blackout, NO hover pill button */}
              <div className="relative overflow-hidden w-full h-64 sm:h-72 bg-slate-900 flex-shrink-0">
                {item.mainUrl ? (
                  <Link to={item.mainUrl} className="block w-full h-full">
                    <MasterImage
                      src={item.image}
                      alt={item.title || "Destination photo"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      placeholderLabel={item.placeholderLabel || item.title || "DESTINATION IMAGE"}
                    />
                  </Link>
                ) : (
                  <MasterImage
                    src={item.image}
                    alt={item.title || "Destination photo"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholderLabel={item.placeholderLabel || item.title || "DESTINATION IMAGE"}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {item.category && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1.5 block">
                    {item.category}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.mainUrl ? (
                    <Link to={item.mainUrl} className="hover:text-blue-600 transition-colors">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-light flex-grow">
                  {item.description}
                </p>

                {item.mainUrl && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={item.mainUrl}
                      className="text-xs font-semibold tracking-wider uppercase text-navy-900 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Full Guide</span>
                      <span className="text-base leading-none">→</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositanoPillarGrid;
