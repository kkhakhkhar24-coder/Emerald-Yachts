import React from 'react';
import FadeIn from './FadeIn';
import angelaImage from '../../../src/assets/Media (2).jpg';

const AuthorityBox = ({ 
  title,
  heading,
  eyebrow,
  content, 
  quote,
  paragraphs,
  author = "Angela Hughes",
  authorRole = "Luxury Travel Expert",
  authorName,
  className = "" 
}) => {
  const displayTitle = heading || title || eyebrow || "INSIDER TIP";
  const displayAuthor = authorName || author;
  
  // Extract a crisp 1-2 line quote text
  let quoteText = quote || (typeof content === 'string' && content.trim().length > 0 ? content : null);
  if (!quoteText && Array.isArray(paragraphs) && paragraphs.length > 0) {
    quoteText = paragraphs[0];
  } else if (!quoteText && typeof paragraphs === 'string' && paragraphs.trim().length > 0) {
    quoteText = paragraphs;
  }
  
  if (!quoteText) {
    quoteText = "In luxury travel, the resort name matters far less than your specific villa orientation, layout, and personalized itinerary pacing.";
  }

  return (
    <FadeIn>
      <div className={`my-8 py-6 px-4 sm:px-6 border-y border-ts-gold/30 bg-gradient-to-r from-transparent via-ts-gold/5 to-transparent relative ${className}`}>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
          <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border border-ts-gold/40 shadow-sm mt-1">
            <img src={angelaImage} alt={displayAuthor} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-ts-gold mb-2">
              {displayTitle}
            </h4>
            <div className="font-display text-base sm:text-lg text-slate-800 italic leading-relaxed">
              "{quoteText}"
            </div>
            <p className="mt-2 font-sans text-xs uppercase tracking-wider text-slate-500 font-medium">
              — {displayAuthor}{authorRole ? `, ${authorRole}` : ''}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default AuthorityBox;
