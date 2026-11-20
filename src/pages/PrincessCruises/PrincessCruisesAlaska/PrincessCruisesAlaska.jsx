import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import pageData from './data.json';

import AboutImage from '@/assets/Angela_Hughes.jpg';
import HeroImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp';
import IntroImage1 from '@/assets/Princess-Cruises/PrincessCruisesAlaska/intro-whittier-sailaway.webp';
import IntroImage2 from '@/assets/Princess-Cruises/PrincessCruisesAlaska/intro-wildlife.webp';
import HainesImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-inside-passage-haines.webp';
import WhittierShipImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/route-voyage-glaciers-whittier.webp';
import TrainImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cruisetour-wilderness-train.webp';
import GlacierFlightImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/glacier-flight-landing.webp';
import DenaliLodgeImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/denali-lodge-view.webp';
import DenaliParkImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/denali-national-park.webp';
import CtaImage from '@/assets/Princess-Cruises/PrincessCruisesAlaska/cta-discovery-princess-alaska.webp';

// Shared UI System Components (Strictly 0 Diff to src/components/ui/)
import ComparisonHero from '@/components/ui/ComparisonHero';
import PremiumIntro from '@/components/ui/PremiumIntro';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import EditorialFeatureShowcase from '@/components/ui/EditorialFeatureShowcase';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import FadeIn from '@/components/ui/FadeIn';

const PrincessCruisesAlaska = () => {
  // Section 2: Narrative Intro mapping for PremiumIntro
  const introSections = [
    {
      heading: pageData.introSection.heading,
      paragraphs: [
        pageData.introSection.p1,
        pageData.introSection.p2,
        pageData.introSection.p3
      ]
    }
  ];

  // Section 4: LuxuryZigZagShowcase for the 3 main routes
  const routeItems = [
    {
      title: pageData.routesShowcase.routes[0].title,
      badge: pageData.routesShowcase.routes[0].badge,
      subtitle: "Scenic coastal channels, historic gold-rush ports, and calm inland passages.",
      description: pageData.routesShowcase.routes[0].description,
      highlights: [
        { label: "Key Ports", desc: pageData.routesShowcase.routes[0].ports },
        { label: "Best Suited For", desc: pageData.routesShowcase.routes[0].whoFor }
      ],
      bullets: [
        "Round-trip departures from Seattle, Vancouver, San Francisco, and Los Angeles",
        "Visits Juneau, Ketchikan, Skagway, Sitka, and Icy Strait Point",
        "Calm inland waters sheltered by Vancouver Island and coastal archipelagos",
        "Ideal for first-time cruisers wanting simple domestic round-trip flights"
      ],
      image: HainesImage,
      alt: "Princess Cruises Inside Passage Sailing near Haines, Alaska"
    },
    {
      title: pageData.routesShowcase.routes[1].title,
      badge: pageData.routesShowcase.routes[1].badge,
      subtitle: "Two premier glacier viewing days connecting Vancouver with Whittier / Anchorage.",
      description: pageData.routesShowcase.routes[1].description,
      highlights: [
        { label: "Key Ports", desc: pageData.routesShowcase.routes[1].ports },
        { label: "Best Suited For", desc: pageData.routesShowcase.routes[1].whoFor }
      ],
      bullets: [
        "7-day one-way voyage between Vancouver and Whittier (near Anchorage)",
        "Includes Glacier Bay National Park plus College Fjord or Hubbard Glacier",
        "Calls on Juneau, Skagway, and Ketchikan",
        "Natural starting point for seamless land extensions into Denali National Park"
      ],
      image: WhittierShipImage,
      alt: "Princess Cruises Voyage of the Glaciers in Whittier, Alaska"
    },
    {
      title: pageData.routesShowcase.routes[2].title,
      badge: pageData.routesShowcase.routes[2].badge,
      subtitle: "A seamless combination of a 7-day glacier cruise, luxury dome train, and wilderness lodges.",
      description: pageData.routesShowcase.routes[2].description,
      highlights: [
        { label: "Interior Destinations", desc: pageData.routesShowcase.routes[2].ports },
        { label: "Best Suited For", desc: pageData.routesShowcase.routes[2].whoFor }
      ],
      bullets: [
        "Pairs a 7-day Voyage of the Glaciers cruise with 3 to 10 nights on land",
        "Stay at custom Princess wilderness lodges in Denali, Kenai, and McKinley",
        "Exclusive Direct-to-the-Wilderness glass-domed railcars right to lodge doorsteps",
        "In-depth wildlife tours, tundra safaris, and views of Mount Denali"
      ],
      image: TrainImage,
      alt: "Princess Cruises Direct-to-the-Wilderness Train in Alaska"
    }
  ];

  // Section 6: Departure Ports for ThreeColumnGrid
  const departurePortItems = pageData.departurePorts.ports.map((port) => ({
    title: port.title,
    description: port.description,
    category: port.category,
    stats: port.stats,
    image: undefined,
    placeholderLabel: port.title
  }));

  // JSON-LD Schema (Strictly without trailing slashes)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageData.seo.canonicalUrl}#webpage`,
        "url": pageData.seo.canonicalUrl,
        "name": pageData.seo.metaTitle,
        "headline": pageData.seo.title,
        "description": pageData.seo.metaDescription,
        "inLanguage": "en-US",
        // "primaryImageOfPage": {
        //   "@type": "ImageObject",
        //   "url": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp"
        // },
        // "image": "https://www.tripsandships.com/assets/Princess-Cruises/PrincessCruisesAlaska/hero-star-princess-alaska.webp",
        "author": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "founder": {
          "@id": "https://www.tripsandships.com/about-angela-hughes/#person"
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning.",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/about-angela-hughes/#person",
        "name": "Angela Hughes",
        "jobTitle": "CEO of Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/assets/Angela_Hughes.jpg",
          "caption": "Angela Hughes - Luxury Cruise Specialist"
        },
        "description": "Angela Hughes is a luxury travel expert with more than 40 years of travel industry experience and has visited over 121 countries. She is the CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University.",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "knowsAbout": [
          "Luxury Travel",
          "Princess Cruises",
          "Alaska Cruises",
          "Alaska Cruisetours",
          "Glacier Bay National Park",
          "Luxury Cruise Planning",
          "Expedition and Nature Travel"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageData.seo.canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Princess Cruises",
            "item": "https://www.tripsandships.com/princess-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Princess Alaska Cruises",
            "item": pageData.seo.canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageData.seo.canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Helmet>
        <title>{pageData.seo.title}</title>
        <meta name="title" content={pageData.seo.metaTitle} />
        <meta name="description" content={pageData.seo.metaDescription} />
        <meta name="keywords" content={pageData.seo.keywords} />
        <link rel="canonical" href={pageData.seo.canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.seo.ogTitle} />
        <meta property="og:description" content={pageData.seo.ogDescription} />
        <meta property="og:url" content={pageData.seo.canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seo.ogTitle} />
        <meta name="twitter:description" content={pageData.seo.ogDescription} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* ─── SECTION 1: COMPARISON HERO ─── */}
      <ComparisonHero
        byline={true}
        badge={pageData.hero.badge}
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        primaryCtaText={pageData.hero.ctaLabel}
        primaryCtaLink={pageData.hero.ctaUrl}
        secondaryCtaText={pageData.hero.secondaryCtaLabel}
        secondaryCtaLink={pageData.hero.secondaryCtaUrl}
        heroImage={HeroImage}
      />

      {/* ─── SECTION 2: NARRATIVE INTRO ─── */}
      <PremiumIntro
        sections={introSections}
        watermarkText="ALASKA"
        image1={IntroImage1}
        image2={IntroImage2}
      />

      {/* ─── SECTION 3: WHY CHOOSE PRINCESS FOR ALASKA ─── */}
      <EditorialFeatureShowcase
        title={pageData.whyChoosePrincess.title}
        subtitle={pageData.whyChoosePrincess.subtitle}
        image={GlacierFlightImage}
        features={pageData.whyChoosePrincess.features}
        bgClass="bg-slate-50"
      />

      {/* ─── SECTION 4: PRINCESS ALASKA ROUTES EXPLAINED (ZIG-ZAG) ─── */}
      <LuxuryZigZagShowcase
        title={pageData.routesShowcase.title}
        subtitle={pageData.routesShowcase.subtitle}
        items={routeItems}
        images={[HainesImage, WhittierShipImage, TrainImage]}
      />

      {/* ─── SECTION 5: PUBLISHED FLEET DEPLOYMENT TABLE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.shipsDeployment.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
              {pageData.shipsDeployment.subtitle}
            </p>
            <p className="font-sans text-sm text-slate-500 max-w-3xl mx-auto mt-4 leading-relaxed">
              {pageData.shipsDeployment.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <ComparisonTable data={pageData.shipsDeployment.table} />

      {/* Newer vs. Smaller Ships Card */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <FadeIn direction="right">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-ts-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
                  SPHERE & ROYAL CLASS
                </span>
                <h3 className="font-display text-2xl text-navy-950 mb-3">
                  {pageData.shipsDeployment.newerVsSmaller.newer.title}
                </h3>
                <p className="font-sans text-sm text-slate-700 leading-relaxed">
                  {pageData.shipsDeployment.newerVsSmaller.newer.description}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-ts-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
                  CORAL & GRAND CLASS
                </span>
                <h3 className="font-display text-2xl text-navy-950 mb-3">
                  {pageData.shipsDeployment.newerVsSmaller.smaller.title}
                </h3>
                <p className="font-sans text-sm text-slate-700 leading-relaxed">
                  {pageData.shipsDeployment.newerVsSmaller.smaller.description}
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="font-sans text-xs text-slate-500 italic">
              {pageData.shipsDeployment.selectionTip}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 6: FOUR MAJOR GLACIER-VIEWING EXPERIENCES ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.glacierExperiences.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
              {pageData.glacierExperiences.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pageData.glacierExperiences.glaciers.map((glacier, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-navy-950 text-white flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl text-navy-950">
                      {glacier.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed flex-grow">
                    {glacier.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="bg-white rounded-2xl p-6 border border-slate-200 text-center max-w-3xl mx-auto">
            <p className="font-sans text-xs text-slate-600 italic">
              {pageData.glacierExperiences.planningTip}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 7: DEPARTURE PORTS (THREE COLUMN GRID) ─── */}
      <ThreeColumnGrid
        title={pageData.departurePorts.title}
        subtitle={pageData.departurePorts.subtitle}
        items={departurePortItems}
      />

      {/* ─── SECTION 8: POPULAR PORTS TABLE ─── */}
      <ComparisonTable data={pageData.portsTable} />

      {/* ─── SECTION 9: BEST TIME TO SAIL (SEASONAL GUIDE) ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.bestTimeToSail.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
              {pageData.bestTimeToSail.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {pageData.bestTimeToSail.seasons.map((season, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full">
                  <h3 className="font-display text-2xl text-navy-950 mb-3 text-ts-gold">
                    {season.name}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {season.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="font-sans text-sm text-slate-600 italic">
              {pageData.bestTimeToSail.takeaway}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 10: STATEROOM ADVICE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4">
              {pageData.stateroomAdvice.title}
            </h2>
            <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto">
              {pageData.stateroomAdvice.subtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {pageData.stateroomAdvice.categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full flex flex-col">
                  <h3 className="font-display text-lg text-navy-950 mb-3 font-semibold">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed flex-grow">
                    {cat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="bg-ice-50 rounded-2xl p-6 border border-ice-200 text-center max-w-3xl mx-auto">
            <p className="font-sans text-xs text-navy-900 font-medium">
              {pageData.stateroomAdvice.observationTip}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 11: CRUISE VS. CRUISETOUR COMPARISON TABLE ─── */}
      <ComparisonTable data={pageData.cruiseVsCruisetour.table} />

      {/* ─── SECTION 12: WHAT TO PACK (STEP BY STEP GUIDE) ─── */}
      <StepByStepGuide
        title={pageData.packingGuide.title}
        subtitle={pageData.packingGuide.subtitle}
        steps={pageData.packingGuide.steps}
        layout="grid"
        columns={4}
      />

      {/* ─── SECTION 13: MID-PAGE CTA ─── */}
      <CenterCTA
        title="Need Advice on the Best Princess Alaska Sailing?"
        description="Connect with certified Alaska specialist Angela Hughes to compare glacier permits, flight options, and exclusive cruisetour lodges."
        buttonText="Plan Your Alaska Cruise"
        buttonLink="/contact"
      />

      {/* ─── SECTION 14: HOW TO CHOOSE THE BEST CRUISE (8 STEPS) ─── */}
      <StepByStepGuide
        title={pageData.howToChooseGuide.title}
        subtitle={pageData.howToChooseGuide.subtitle}
        steps={pageData.howToChooseGuide.steps}
        layout="grid"
        columns={4}
      />

      {/* ─── SECTION 15: EXPERT CREDENTIALS ─── */}
      <ExpertCredentials
        name={pageData.angelaBio.name}
        title={pageData.angelaBio.title}
        bio={pageData.angelaBio.bio}
        image={AboutImage}
        quote={pageData.angelaBio.quote}
        quoteSubtitle={pageData.angelaBio.quoteSubtitle}
        ctaText={pageData.angelaBio.ctaText}
        ctaLink={pageData.angelaBio.ctaLink}
      />

      {/* ─── SECTION 16: FREQUENTLY ASKED QUESTIONS ─── */}
      <FAQAccordion
        data={{
          title: "Frequently Asked Questions: Princess Alaska Cruises",
          subtitle: "Clear answers to essential questions regarding cruise lengths, glacier permits, Denali cruisetours, and packing.",
          faqs: pageData.faqs
        }}
      />

      {/* ─── SECTION 17: FINAL CENTER CTA ─── */}
      <CenterCTA
        title={pageData.finalCta.title}
        description={pageData.finalCta.description}
        buttonText={pageData.finalCta.buttonText}
        buttonLink={pageData.finalCta.buttonLink}
        bgImage={CtaImage}
      />
    </div>
  );
};

export default PrincessCruisesAlaska;

