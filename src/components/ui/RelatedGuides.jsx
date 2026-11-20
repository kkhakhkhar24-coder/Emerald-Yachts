import React from 'react';
import { Link } from 'react-router-dom';
import { sitemapData } from '@/data/sitemapData';

// Crawlable links from a cluster hub to every guide in its cluster. Uses the HTML sitemap
// groups (src/data/sitemapData.ts) so new guides appear here once they are added there.
// `group` is a sitemapData title; `match` optionally narrows it with a RegExp on the path.
const RelatedGuides = ({ group, match, currentPath, title, intro }) => {
  const section = sitemapData.find((s) => s.title === group);
  const links = (section?.links || []).filter(
    (link) => link.path !== currentPath && (!match || match.test(link.path))
  );
  if (links.length === 0) return null;

  return (
    <section aria-label={title} className="w-full px-6 py-16 bg-slate-50">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-3 text-center">{title}</h2>
        {intro && <p className="font-sans text-slate-600 text-center max-w-2xl mx-auto mb-10">{intro}</p>}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="font-sans text-sm text-navy-800 hover:text-navy-950 underline-offset-4 hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedGuides;
