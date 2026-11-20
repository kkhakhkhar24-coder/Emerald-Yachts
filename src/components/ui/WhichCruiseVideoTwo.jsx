import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ExternalLink } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const WhichCruiseVideoTwo = () => {
  return (
    <section className="py-24 bg-[#0a192f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Video Description & Editorial Takeaways */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-[#c9a15c] text-xs font-bold uppercase tracking-wider">
              <Play className="w-3.5 h-3.5 fill-[#c9a15c]" />
              <span>Royal Caribbean Ship Tour & Cabin Guide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold leading-tight">
              Inside Oasis & Quantum Class Innovations
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              Witness the scale, signature neighborhood flow, and family-friendly venues in this in-depth ship walkthrough. See how open-air Central Park, Broadway-style production venues, and multi-room suites come together.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-slate-300 text-sm font-light">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Central Park open-air sanctuary with 20,000+ living tropical plants</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300 text-sm font-light">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Royal Suite Class lounge, Coastal Kitchen & private sundecks</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300 text-sm font-light">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>AquaTheater aerial high-diving and Broadway production highlights</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-[#c9a15c] hover:text-amber-300 font-semibold text-sm transition-colors"
              >
                <span>Consult with Angela on Ship Cabins</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Embedded YouTube Video */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-black aspect-video group">
              <LiteYouTubeEmbed
                loading="lazy"
                className="w-full h-full"
                src="https://www.youtube.com/embed/sio5jqSIcq4"
                title="Royal Caribbean Ship Walkthrough & Cabin Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-slate-400 font-light">
                Visualizing onboard flow, multi-deck neighborhoods, and suite accommodations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhichCruiseVideoTwo;

