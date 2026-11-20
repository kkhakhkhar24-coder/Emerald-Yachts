import React from 'react';
import FadeIn from './FadeIn';

const ProfileCard = ({ image, profile, tagsLabel }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-full flex flex-col">
    <div className="relative h-72">
      <img
        src={image}
        alt={profile.imageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
      <div className="absolute bottom-6 left-6">
        <span className="bg-gold-400 text-navy-950 font-display text-xs uppercase tracking-widest px-4 py-2 rounded-full font-bold">
          {profile.badge}
        </span>
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <h3 className="font-display text-2xl text-navy-950 mb-4">{profile.heading}</h3>
      <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
        {profile.text}
      </p>
      <div className="mt-auto">
        <h4 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-3">{tagsLabel}</h4>
        <div className="flex flex-wrap gap-2">
          {profile.tags.map((tag, i) => (
            <span key={i} className="bg-navy-950/5 text-navy-800 text-xs px-3 py-1.5 rounded-full font-sans font-medium">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExploraBrandProfiles = ({ silverseaImage, exploraImage, data }) => {
  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              {data.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4 leading-tight">
              {data.heading}
            </h2>
            <p className="font-sans text-slate-600 font-light max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Silversea Profile */}
          <FadeIn delay={0.1}>
            <ProfileCard image={silverseaImage} profile={data.silversea} tagsLabel={data.tagsLabel} />
          </FadeIn>

          {/* Explora Journeys Profile */}
          <FadeIn delay={0.25}>
            <ProfileCard image={exploraImage} profile={data.explora} tagsLabel={data.tagsLabel} />
          </FadeIn>

        </div>

        {data.closing && (
          <FadeIn>
            <p className="font-sans text-slate-600 font-light max-w-2xl mx-auto text-center mt-12">
              {data.closing}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ExploraBrandProfiles;
