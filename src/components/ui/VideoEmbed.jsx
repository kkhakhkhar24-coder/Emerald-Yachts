import React from 'react';
import FadeIn from './FadeIn';
import { Play } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const VideoEmbed = ({ data, youtubeId: propYoutubeId, title: propTitle, description: propDescription, maxWidthClass = "max-w-[1050px]" }) => {
  const rawId = propYoutubeId || data?.youtubeId || data?.videoId;
  const isPlaceholder = !rawId || rawId === "placeholder" || rawId.trim() === "";
  const youtubeId = !isPlaceholder && rawId.length > 5 ? rawId : null;
  const title = propTitle || data?.title || "Amalfi Coast Scenic Video Guide";
  const description = propDescription || data?.description || data?.subtitle;

  const isEmbedded = Boolean(propYoutubeId && !data);

  const iframeContent = isPlaceholder ? (
    <div className="w-full aspect-video bg-navy-950 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-800 flex items-center justify-center group select-none">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-navy-950/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-6 max-w-xl">
        <div className="w-20 h-20 bg-ts-gold text-navy-950 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-300">
          <Play className="w-8 h-8 fill-current ml-1 text-navy-950" />
        </div>
        <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-ts-gold uppercase bg-navy-900/90 border border-ts-gold/30 px-4 py-1.5 rounded-full inline-block mb-3">
          YouTube Video Placeholder
        </span>
        <h3 className="font-display text-2xl sm:text-3xl text-white drop-shadow-md mb-2">
          {title}
        </h3>
        {description && (
          <p className="font-sans text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-md mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  ) : (
    <div className="relative w-full aspect-video bg-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 ring-1 ring-slate-900/5">
      <LiteYouTubeEmbed
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&vq=hd1080`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );

  const badge = data?.badge || data?.eyebrow;
  const caption = data?.caption;

  if (isEmbedded) {
    return <FadeIn>{iframeContent}</FadeIn>;
  }

  return (
    <section className="w-full py-16 md:py-20 bg-ice-50 border-y border-slate-200/80">
      <div className={`${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
        <FadeIn>
          {badge && (
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-ts-gold uppercase bg-navy-900 border border-ts-gold/30 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
              {badge}
            </span>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 mb-3 tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-ts-gold to-transparent mx-auto my-5"></div>
          {description && (
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          {iframeContent}
          {caption && (
            <p className="font-sans text-xs sm:text-sm text-slate-500 italic mt-3 text-center max-w-xl mx-auto">
              {caption}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default VideoEmbed;
