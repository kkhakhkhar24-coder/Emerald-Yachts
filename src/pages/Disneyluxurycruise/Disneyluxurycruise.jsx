import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'

// ── HERO IMAGES (replace with your actual imports) ───────────────────────────
import hero1 from '../../assets/DisneyLuxuryCruise/disney-cruise-norwegian-fjord-scenic-cruise-geirangerfjord-norway.jpeg'
import hero2 from '../../assets/DisneyLuxuryCruise/disney-wish-grand-hall-atrium-balcony-view-live-entertainment.jpg'
import hero3 from '../../assets/DisneyLuxuryCruise/disney-cruise-ship-docked-at-castaway-cay-bahamas-private-island.jpeg'

// ── SECTION IMAGES (replace with your actual imports) ────────────────────────
import adultDiningImg from '../../assets/DisneyLuxuryCruise/family-with-woody-toy-story-land-disney-hollywood-studios.jpg'
import alaskaImg from '../../assets/DisneyLuxuryCruise/20250727_001_Alaska_LecontGlacier_OscarFarrera.jpg'
import mediterImg from '../../assets/DisneyLuxuryCruise/Boutique Mediterranean cruise experience.webp'
import northernEuropeImg from '../../assets/DisneyLuxuryCruise/Northern_Europe.jpg'
import caribbeanImg from '../../assets/DisneyLuxuryCruise/Caribbean.jpg'
import Profile_AH from '../../assets/DisneyLuxuryCruise/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/Media (1).jpg'
import disneyAlaska from '../../assets/DisneyLuxuryCruise/disney-cruise-alaska-glacier-view-inside-passage.jpg'
import disneyChristmas from '../../assets/DisneyLuxuryCruise/disney-cruise-christmas-atrium-tree.jpg'
import disneyCharacters from '../../assets/DisneyLuxuryCruise/disney-cruise-line-live-theater-stage-show-characters.png'
import disneyPalo from '../../assets/DisneyLuxuryCruise/disney-wish-palo-steakhouse-adults-only-fine-dining-table.jpg'
import disneylive from '../../assets/DisneyLuxuryCruise/pride-lands-live-show-disney-destiny.jpg'
import disneymoments from '../../assets/DisneyLuxuryCruise/child-posing-with-te-fiti-journey-of-water-inspired-by-moana-epcot.jpg'
import disneymoments2 from '../../assets/DisneyLuxuryCruise/disney-cruise-ship-grand-atrium-family-vacation-onboard-entertainment-experience.jpg'
import family_water_park from '../../assets/DisneyLuxuryCruise/family-floating-lazy-river-disney-water-park-orlando-florida-summer-vacation.jpg'
import family_in_rome from '../../assets/DisneyLuxuryCruise/family-visiting-colosseum-rome-italy-vacation.jpg'


import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils, ChevronDown,
    Sun, Award, Baby, Moon, Music, Mic, FileText,
    GraduationCap, Globe, Theater, Smile
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
//  SCHEMA
// ─────────────────────────────────────────────────────────────────────────────

    const disneyluxury = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Luxury Travelers Get Wrong About Disney Cruise Line",
        "description": "Many luxury travelers overlook Disney Cruise Line because of its family-focused reputation. Discover what affluent travelers often misunderstand about Disney's service, accommodations, dining, destinations, and premium experiences.",
        "author": {
          "@type": "Person",
          "name": "Angela Hughes",
          "jobTitle": "CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Trips & Ships Luxury Travel"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Trips & Ships Luxury Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.tripsandships.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/what-luxury-travelers-get-wrong-about-disney-cruise-line"
        },
        "datePublished": "2026-06-17",
        "dateModified": "2026-06-17"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Disney Cruise Line considered luxury?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disney is generally categorized as a premium cruise line rather than an ultra-luxury cruise line, but many aspects of the experience meet or exceed luxury traveler expectations."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Disney Cruise Line more expensive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disney commands premium pricing due to exceptional service, entertainment, family programming, guest satisfaction, and strong demand."
            }
          },
          {
            "@type": "Question",
            "name": "Is Disney worth it for affluent families?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For many affluent families, Disney provides exceptional value because it successfully serves multiple generations simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "Are there adult-only areas on Disney ships?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Disney offers adult-only restaurants, lounges, pools, and spa facilities."
            }
          },
          {
            "@type": "Question",
            "name": "Is Disney suitable for grandparents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Disney is widely regarded as one of the best cruise options for grandparents traveling with grandchildren."
            }
          },
          {
            "@type": "Question",
            "name": "How does Disney compare to luxury cruise lines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disney excels in family experiences and entertainment, while traditional luxury lines often focus more heavily on destination immersion and adults-only environments."
            }
          },
          {
            "@type": "Question",
            "name": "What is Concierge Level?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disney Concierge is the cruise line's premium experience, offering enhanced service, exclusive spaces, and priority access."
            }
          },
          {
            "@type": "Question",
            "name": "Which Disney itinerary appeals most to luxury travelers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Alaska, Mediterranean, and Northern Europe itineraries are often especially attractive to affluent travelers seeking educational and cultural experiences."
            }
          },
          {
            "@type": "Question",
            "name": "Can adults enjoy Disney without children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, though Disney is fundamentally family-focused. Adults who appreciate Disney storytelling and entertainment often enjoy the experience."
            }
          },
          {
            "@type": "Question",
            "name": "Is Disney only for Disney fans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Many travelers choose Disney primarily for service, family travel convenience, and overall experience rather than brand loyalty."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Disney Cruise Line",
            "item": "https://www.tripsandships.com/disney-cruise-line"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Luxury Travelers Get Wrong About Disney Cruise Line",
            "item": "https://www.tripsandships.com/what-luxury-travelers-get-wrong-about-disney-cruise-line"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "What Luxury Travelers Get Wrong About Disney Cruise Line",
        "url": "https://www.tripsandships.com/what-luxury-travelers-get-wrong-about-disney-cruise-line",
        "description": "Many luxury travelers overlook Disney Cruise Line because of its family-focused reputation. Learn why Disney offers premium service, concierge accommodations, exceptional entertainment, and multigenerational travel experiences."
      },
      {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "logo": "https://www.tripsandships.com/logo.png",
        "sameAs": [
          "https://www.instagram.com/tripsandships"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Angela Hughes",
        "jobTitle": "CEO",
        "worksFor": {
          "@type": "Organization",
          "name": "Trips & Ships Luxury Travel"
        },
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "sameAs": [
          "https://www.instagram.com/tripsandships"
        ]
      }
    ];

// ─────────────────────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────────────────────
const disneyMistakes = [
    {
        num: '01',
        title: 'Assuming Disney Isn\'t a Premium Cruise Product',
        desc: 'Many luxury travelers equate Disney with theme parks and children\'s entertainment. What they often fail to realize is that Disney Cruise Line consistently commands some of the highest fares in mainstream cruising.',
        bullets: ['Exceptional service', 'Outstanding guest satisfaction', 'Premium accommodations', 'Industry-leading entertainment', 'Family-focused luxury'],
        note: 'Disney isn\'t competing with budget cruise brands. It\'s competing for travelers who are willing to pay more for a better experience.'
    },
    {
        num: '02',
        title: 'Believing Disney Is Only for Children',
        desc: 'Yes, Disney caters to families. But that doesn\'t mean adults are ignored. In fact, Disney has invested heavily in creating experiences specifically for adults.',
        bullets: ['Adult-Only Restaurants — Sophisticated dining venues featuring elevated cuisine and refined atmospheres', 'Exclusive Lounges — Quiet spaces designed for relaxation and conversation', 'Adult-Only Pools — Peaceful retreats away from family activity areas', 'Premium Spa Experiences — World-class wellness facilities and treatments', 'Fine Dining Experiences — Upscale culinary options comparable to many luxury cruise brands'],
        note: 'Disney understands that happy parents and grandparents create happier family vacations.'
    },
    {
        num: '03',
        title: 'Underestimating Disney\'s Service Standards',
        desc: 'Service is one area where Disney consistently excels. Many experienced cruisers compare Disney\'s onboard service favorably to premium and luxury cruise lines.',
        bullets: ['Anticipate guest needs', 'Personalize interactions', 'Create memorable moments', 'Deliver consistent hospitality'],
        note: 'Families frequently return because of the service experience as much as the entertainment. For luxury travelers accustomed to exceptional hospitality, Disney often exceeds expectations.'
    },
    {
        num: '04',
        title: 'Thinking Luxury Means Adults-Only',
        desc: 'Many affluent travelers automatically associate luxury with adults-only environments. Cruise lines like Viking Ocean Cruises, Seabourn, Regent Seven Seas, and Silversea have built successful brands around that concept. Disney takes a different approach.',
        bullets: ['Sophisticated experiences for adults', 'Exceptional experiences for children', 'Meaningful experiences for families together'],
        note: 'Luxury isn\'t always about escaping children. Sometimes it\'s about creating extraordinary experiences with the people you love most.'
    },
    {
        num: '05',
        title: 'Overlooking Concierge-Level Accommodations',
        desc: 'Many luxury travelers never explore Disney\'s highest-end offerings. For affluent families, Concierge-level Disney experiences can rival luxury cruise products in both service and comfort.',
        bullets: ['Dedicated Concierge Team — Personalized assistance before and during the voyage', 'Priority Access — Expedited embarkation and onboard services', 'Private Concierge Lounges — Exclusive spaces unavailable to most guests', 'Premium Staterooms and Suites — Some of the largest accommodations at sea', 'Enhanced Planning Services — Helping families maximize every aspect of their vacation'],
        note: null
    },
    {
        num: '06',
        title: 'Ignoring Disney\'s Multigenerational Strength',
        desc: 'Many luxury travelers focus exclusively on couples\' travel. However, one of the fastest-growing segments of luxury travel is multigenerational travel. Families increasingly want shared experiences, meaningful time together, celebrations, legacy travel, and family memories.',
        bullets: null,
        note: 'Disney Cruise Line excels in this category. Grandparents, parents, and grandchildren can all enjoy the same vacation without compromising their individual interests. Very few travel products accomplish this as successfully as Disney.'
    },
    {
        num: '07',
        title: 'Comparing Disney to the Wrong Cruise Lines',
        desc: 'Disney is often compared to Carnival Cruise Line, Royal Caribbean, and Norwegian Cruise Line. While those comparisons have value, they can also be misleading.',
        bullets: ['Luxury family resorts', 'High-end family tours', 'Multigenerational villa vacations', 'Premium family travel experiences'],
        note: 'For many travelers, Disney is actually competing with these categories. Viewed through that lens, Disney\'s pricing and value proposition make much more sense.'
    },
    {
        num: '08',
        title: 'Focusing Only on the Ship',
        desc: 'Luxury travelers often evaluate cruises based solely on onboard amenities. Disney\'s appeal extends far beyond the ship itself.',
        bullets: ['Alaska — Featuring glaciers, wildlife, and educational experiences', 'Mediterranean Cruises — Combining culture, history, and family exploration', 'Northern Europe — Offering rich cultural and educational opportunities', 'Caribbean and Bahamas — Ideal for family relaxation and recreation'],
        note: 'The destinations matter just as much as the onboard experience.'
    },
    {
        num: '09',
        title: 'Assuming Entertainment Doesn\'t Matter',
        desc: 'Luxury travelers sometimes dismiss entertainment as unimportant. Yet Disney\'s entertainment is consistently regarded as among the best at sea.',
        bullets: ['Broadway-Quality Productions — Professional performances rivaling major theater productions', 'Live Music — Throughout the ship', 'Family Experiences — Designed to bring generations together', 'Immersive Storytelling — A hallmark of the Disney brand'],
        note: 'Even travelers who aren\'t devoted Disney fans are often impressed by the quality of the entertainment.'
    },
    {
        num: '10',
        title: 'Forgetting That Luxury Is Personal',
        desc: 'The biggest misunderstanding may be assuming luxury means the same thing for everyone.',
        bullets: null,
        note: 'Disney Cruise Line excels at delivering the second type of luxury. And for many families, that\'s the luxury that matters most.'
    }
]

const disneyFaqs = [
    { question: 'Is Disney Cruise Line considered luxury?', answer: 'Disney is generally categorized as a premium cruise line rather than an ultra-luxury cruise line, but many aspects of the experience meet or exceed luxury traveler expectations.' },
    { question: 'Why is Disney Cruise Line more expensive?', answer: 'Disney commands premium pricing due to exceptional service, entertainment, family programming, guest satisfaction, and strong demand.' },
    { question: 'Is Disney worth it for affluent families?', answer: 'For many affluent families, Disney provides exceptional value because it successfully serves multiple generations simultaneously.' },
    { question: 'Are there adult-only areas on Disney ships?', answer: 'Yes. Disney offers adult-only restaurants, lounges, pools, and spa facilities.' },
    { question: 'Is Disney suitable for grandparents?', answer: 'Absolutely. Disney is widely regarded as one of the best cruise options for grandparents traveling with grandchildren.' },
    { question: 'How does Disney compare to luxury cruise lines?', answer: 'Disney excels in family experiences and entertainment, while traditional luxury lines often focus more heavily on destination immersion and adults-only environments.' },
    { question: 'What is Concierge Level?', answer: 'Disney Concierge is the cruise line\'s premium experience, offering enhanced service, exclusive spaces, and priority access.' },
    { question: 'Which Disney itinerary appeals most to luxury travelers?', answer: 'Alaska, Mediterranean, and Northern Europe itineraries are often especially attractive to affluent travelers seeking educational and cultural experiences.' },
    { question: 'Can adults enjoy Disney without children?', answer: 'Yes, though Disney is fundamentally family-focused. Adults who appreciate Disney storytelling and entertainment often enjoy the experience.' },
    { question: 'Is Disney only for Disney fans?', answer: 'No. Many travelers choose Disney primarily for service, family travel convenience, and overall experience rather than brand loyalty.' }
]

const disneyItineraries = [
    {
        title: 'Alaska',
        desc: 'Featuring glaciers, wildlife, and educational experiences.',
        bestFor: ['Families seeking wildlife experiences', 'Educational travelers', 'Grandparents with grandchildren', 'Nature & adventure lovers'],
        highlights: ['Glaciers', 'Wildlife sightings', 'Scenic fjords', 'Sitka', 'Ketchikan'],
        image: alaskaImg
    },
    {
        title: 'Mediterranean Cruises',
        desc: 'Combining culture, history, and family exploration.',
        bestFor: ['Cultural explorers', 'History enthusiasts', 'Affluent families', 'Multigenerational groups'],
        highlights: ['Barcelona', 'Rome', 'Santorini', 'Athens', 'Florence'],
        image: mediterImg
    },
    {
        title: 'Northern Europe',
        desc: 'Offering rich cultural and educational opportunities.',
        bestFor: ['Educational families', 'Cultural travelers', 'Grandparents with grandchildren', 'History enthusiasts'],
        highlights: ['Scandinavia', 'Iceland', 'British Isles', 'Amsterdam', 'Baltic ports'],
        image: northernEuropeImg
    },
    {
        title: 'Caribbean & Bahamas',
        desc: 'Ideal for family relaxation and recreation.',
        bestFor: ['Family relaxation seekers', 'Beach lovers', 'First-time cruisers', 'Multigenerational groups'],
        highlights: ['Castaway Cay', 'Nassau', 'St. Thomas', 'St. Maarten', 'Grand Cayman'],
        image: caribbeanImg
    }
]

const comparisonRows = [
    { category: 'Family Focus', disney: 'Excellent', luxury: 'Limited', disneyTop: false },
    { category: 'Children\'s Programs', disney: 'Industry Leading', luxury: 'Minimal', disneyTop: true },
    { category: 'Multigenerational Travel', disney: 'Exceptional', luxury: 'Moderate', disneyTop: true },
    { category: 'Adult-Only Spaces', disney: 'Good', luxury: 'Excellent', disneyTop: false },
    { category: 'Entertainment', disney: 'Outstanding', luxury: 'Moderate', disneyTop: true },
    { category: 'Cultural Enrichment', disney: 'Moderate', luxury: 'Strong', disneyTop: false },
    { category: 'Service', disney: 'Excellent', luxury: 'Excellent', disneyTop: false },
    { category: 'Family Luxury', disney: 'Exceptional', luxury: 'Varies', disneyTop: true },
    { category: 'Educational Experiences', disney: 'Moderate', luxury: 'Strong', disneyTop: false },
    { category: 'Value for Families', disney: 'Excellent', luxury: 'Moderate', disneyTop: true }
]

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function DisneyLuxuryCruise() {
    const [currentHero, setCurrentHero] = useState(0)
    const [activeFaq, setActiveFaq] = useState(null)
    const [selectedItinerary, setSelectedItinerary] = useState(0)
    const [activeMistake, setActiveMistake] = useState(0)
    const [isSliderHovered, setIsSliderHovered] = useState(false)
    const [activeOnboardTab, setActiveOnboardTab] = useState(0)
    const [showMore, setShowMore] = useState(false)

    const heroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    useEffect(() => {
        if (isSliderHovered) return
        const t = setInterval(() => setActiveMistake(p => (p + 1) % disneyMistakes.length), 5500)
        return () => clearInterval(t)
    }, [isSliderHovered])

    const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i)

    return (
        <>
            <Helmet>
                <title>What Luxury Travelers Get Wrong About Disney Cruise Line | Luxury Cruise Insights</title>
                <meta name="title" content="Why Luxury Travelers Should Reconsider Disney Cruise Line" />
                <meta name="description" content="Many luxury travelers overlook Disney Cruise Line because of its family-focused reputation. Discover what affluent travelers often misunderstand about Disney's service, accommodations, dining, destinations, and premium experiences." />
                <meta name="keywords" content="What Luxury Travelers Get Wrong About Disney Cruise Line, Disney Cruise Luxury Experience, Luxury Disney Cruise, Disney Cruise Concierge Level, Premium Family Cruises" />
                <script type="application/ld+json">{JSON.stringify(disneyluxury)}</script>
            </Helmet>

            {/* ══════════════════════════════════════════════════════
                GLOBAL RESPONSIVE STYLES
            ══════════════════════════════════════════════════════ */}
            <style>{`
                /* ── GLOBAL RESETS ── */
                *, *::before, *::after { box-sizing: border-box; }
                img { max-width: 100%; height: auto; }

                /* ── HERO SECTION ── */
                .medi-hero-section { min-height: 100vh; }
                .medi-hero-content-wrapper { padding: 0 20px; }
                .medi-hero-eyebrow-tag { font-size: 0.7rem !important; letter-spacing: 0.15em !important; padding: 6px 14px !important; }
                .medi-hero-heading { font-size: clamp(28px, 5vw, 42px) !important; }
                .medi-hero-paragraph { font-size: 0.95rem !important; }
                .medi-hero-cta-group { flex-direction: column; align-items: center; gap: 12px; }
                .medi-hero-cta-group button { width: 100%; max-width: 280px; justify-content: center; }

                /* ── MISTAKES / SLIDER SECTIONS ── */
                .medi-mistakes-slider-section { padding: 70px 20px !important; }
                .medi-mistakes-slider-title { font-size: clamp(24px, 4vw, 32px) !important; }
                .medi-mistakes-slider-card { min-width: 260px; }
                .medi-mistakes-carousel-wrapper { gap: 16px; }

                /* ── ITINERARY SHOWCASE ── */
                .medi-itinerary-dashboard { grid-template-columns: 1fr !important; gap: 20px !important; }
                .medi-itinerary-tabs { flex-direction: row; overflow-x: auto; gap: 8px; padding-bottom: 4px; }
                .medi-itinerary-tab { min-width: 160px; flex-shrink: 0; }
                .medi-itinerary-showcase-card { border-radius: 14px; }
                .medi-itinerary-showcase-image-wrapper { height: 220px !important; }
                .medi-itinerary-showcase-body { padding: 20px 22px !important; }
                .medi-itinerary-details-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

                /* ── FAQ SECTION ── */
                .medi-faq-main-section { padding: 70px 20px !important; }
                .medi-faq-list-wrapper { gap: 10px; }
                .medi-faq-individual-item { padding: 16px 20px !important; }
                .medi-faq-question-row { font-size: 0.95rem !important; }

                /* ── RELATED LINKS ── */
                .medi-related-links-section { padding: 60px 20px !important; }
                .medi-related-links-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
                .medi-related-link-card { padding: 16px 18px !important; }

                /* ── RESPONSIVE BREAKPOINTS ── */
                @media (max-width: 1200px) {
                    .medi-hero-heading { font-size: clamp(26px, 4.5vw, 38px) !important; }
                }

                @media (max-width: 991px) {
                    .medi-hero-section { min-height: 80vh; }
                    .medi-hero-content-wrapper { max-width: 100%; }
                    .medi-hero-heading { font-size: clamp(24px, 4vw, 34px) !important; line-height: 1.2 !important; }
                    .medi-hero-paragraph { font-size: 0.9rem !important; max-width: 100% !important; }
                    .medi-mistakes-slider-section { padding: 60px 20px !important; }
                    .medi-mistakes-slider-title { font-size: clamp(22px, 3.5vw, 28px) !important; }
                    .medi-itinerary-showcase-image-wrapper { height: 200px !important; }
                }

                @media (max-width: 768px) {
                    .medi-hero-section { min-height: 70vh; }
                    .medi-hero-heading { font-size: clamp(22px, 5vw, 30px) !important; }
                    .medi-hero-paragraph { font-size: 0.88rem !important; line-height: 1.6 !important; }
                    .medi-hero-cta-group { gap: 10px; }
                    .medi-hero-cta-group button { font-size: 0.88rem !important; padding: 12px 22px !important; }
                    .medi-mistakes-slider-section { padding: 50px 16px !important; }
                    .medi-mistakes-slider-title { font-size: clamp(20px, 4.5vw, 26px) !important; }
                    .medi-mistakes-slider-card { min-width: 240px; padding: 20px !important; }
                    .medi-itinerary-dashboard { gap: 16px !important; }
                    .medi-itinerary-tabs { gap: 6px; }
                    .medi-itinerary-tab { min-width: 140px; padding: 12px 14px !important; }
                    .medi-itinerary-tab-title { font-size: 0.8rem !important; }
                    .medi-itinerary-showcase-image-wrapper { height: 180px !important; }
                    .medi-itinerary-showcase-body { padding: 18px !important; }
                    .medi-itinerary-showcase-title { font-size: 1.15rem !important; }
                    .medi-faq-main-section { padding: 50px 16px !important; }
                    .medi-faq-question-row { font-size: 0.88rem !important; padding: 0 !important; }
                    .medi-faq-answer-text { font-size: 0.85rem !important; }
                    .medi-related-links-section { padding: 50px 16px !important; }
                    .medi-related-link-card { padding: 14px 16px !important; }
                    .medi-related-link-text { font-size: 0.82rem !important; }
                    .medi-related-link-arrow { display: none; }
                }

                @media (max-width: 576px) {
                    .medi-hero-section { min-height: 65vh; }
                    .medi-hero-heading { font-size: clamp(20px, 5.5vw, 26px) !important; }
                    .medi-hero-paragraph { font-size: 0.82rem !important; }
                    .medi-hero-cta-group button { font-size: 0.82rem !important; padding: 11px 18px !important; }
                    .medi-mistakes-slider-section { padding: 40px 14px !important; }
                    .medi-mistakes-slider-title { font-size: clamp(18px, 5vw, 22px) !important; }
                    .medi-mistakes-slider-card { min-width: 220px; padding: 18px !important; }
                    .medi-itinerary-tab { min-width: 120px; padding: 10px 12px !important; }
                    .medi-itinerary-tab-number { font-size: 0.65rem !important; margin-right: 8px !important; }
                    .medi-itinerary-tab-title { font-size: 0.75rem !important; }
                    .medi-itinerary-showcase-image-wrapper { height: 160px !important; }
                    .medi-itinerary-showcase-body { padding: 16px !important; }
                    .medi-itinerary-showcase-title { font-size: 1.05rem !important; }
                    .medi-faq-main-section { padding: 40px 14px !important; }
                    .medi-faq-individual-item { padding: 14px 16px !important; }
                    .medi-related-links-section { padding: 40px 14px !important; }
                }

                @media (max-width: 400px) {
                    .medi-hero-heading { font-size: 20px !important; }
                    .medi-hero-paragraph { font-size: 0.78rem !important; }
                    .medi-hero-cta-group button { font-size: 0.78rem !important; padding: 10px 16px !important; }
                    .medi-mistakes-slider-card { min-width: 200px; padding: 16px !important; }
                    .medi-itinerary-tab { min-width: 110px; padding: 8px 10px !important; }
                }

                /* ── HORIZONTAL SCROLLBAR HIDE FOR TABS ── */
                .medi-itinerary-tabs::-webkit-scrollbar { height: 4px; }
                .medi-itinerary-tabs::-webkit-scrollbar-track { background: transparent; }
                .medi-itinerary-tabs::-webkit-scrollbar-thumb { background: rgba(39,68,114,0.15); border-radius: 4px; }

                /* ── FAQ TOGGLE ANIMATION ── */
                .medi-faq-answer-text { animation: fadeIn 0.3s ease; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

                /* ── SMOOTH SCROLL ── */
                html { scroll-behavior: smooth; }
            `}</style>

            <Navbar />

            {/* ══════════════════════════════════════════════════════
                1. HERO
            ══════════════════════════════════════════════════════ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury Cruise Insights</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        What Luxury Travelers Get Wrong About Disney Cruise Line
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        One of the most common misconceptions in the cruise industry — and why affluent travelers should reconsider.
                    </p>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                2. THE BIGGEST MISCONCEPTION — two-column intro
            ══════════════════════════════════════════════════════ */}
            <section className="medi-misconception-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-misconception-section {
                        background: linear-gradient(135deg, #ffffff 0%, #eef2f8 100%);
                        padding: 80px 24px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-misconception-glow-one {
                        position: absolute;
                        width: 400px; height: 400px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(39,68,114,0.06) 0%, transparent 70%);
                        top: -100px; left: -100px;
                        pointer-events: none;
                        filter: blur(50px);
                    }
                    .medi-misconception-glow-two {
                        position: absolute;
                        width: 500px; height: 500px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(39,68,114,0.04) 0%, transparent 75%);
                        bottom: -150px; right: -100px;
                        pointer-events: none;
                        filter: blur(60px);
                    }
                    .medi-misconception-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 1.2fr 0.8fr;
                        gap: 50px;
                        position: relative;
                        z-index: 1;
                        align-items: start;
                    }
                    @media (max-width: 991px) {
                        .medi-misconception-container {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                    }
                    .medi-misconception-badge {
                        display: inline-block;
                        font-size: 0.75rem;
                        font-weight: 700;
                        color: #274472;
                        letter-spacing: 0.25em;
                        text-transform: uppercase;
                        border-left: 2px solid #274472;
                        padding-left: 10px;
                        margin-bottom: 12px;
                    }
                    .medi-misconception-heading {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: 2.3rem;
                        font-weight: 600;
                        line-height: 1.25;
                        color: var(--medi-navy, #274472);
                        margin: 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-misconception-heading {
                            font-size: 1.85rem;
                        }
                    }
                    .medi-misconception-separator {
                        width: 60px;
                        height: 3px;
                        background: linear-gradient(90deg, #274472 0%, rgba(39,68,114,0) 100%);
                        margin-bottom: 24px;
                    }
                    .medi-misconception-text {
                        font-size: 1.05rem;
                        line-height: 1.75;
                        color: #2d3a4a;
                        margin-bottom: 24px;
                    }
                    .medi-misconception-text em {
                        font-style: italic;
                    }
                    .medi-misconception-cards-wrapper {
                        margin-top: 8px;
                    }
                    .medi-misconception-cards-lead {
                        font-size: 0.95rem;
                        font-weight: 600;
                        color: #274472;
                        margin-bottom: 16px;
                    }
                    .medi-misconception-cards-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
                        gap: 12px;
                    }
                    .medi-misconception-card {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        background: #ffffff;
                        border: 1px solid rgba(39,68,114,0.08);
                        border-radius: 12px;
                        padding: 14px 16px;
                    }
                    .medi-misconception-card svg {
                        width: 20px;
                        height: 20px;
                        color: #274472;
                        flex-shrink: 0;
                    }
                    .medi-misconception-card span {
                        font-size: 0.85rem;
                        font-weight: 500;
                        color: #2d3a4a;
                    }
                    .medi-misconception-toggle {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: transparent;
                        border: 1px solid #274472;
                        color: #274472;
                        font-family: inherit;
                        font-size: 0.85rem;
                        font-weight: 600;
                        padding: 10px 22px;
                        border-radius: 30px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        margin-top: 8px;
                    }
                    .medi-misconception-toggle:hover {
                        background: #274472;
                        color: #ffffff;
                    }
                    .medi-misconception-toggle svg {
                        transition: transform 0.3s ease;
                    }
                    .medi-misconception-toggle.open svg {
                        transform: rotate(180deg);
                    }
                    .medi-misconception-hidden {
                        overflow: hidden;
                        transition: max-height 0.5s ease, opacity 0.4s ease;
                        max-height: 0;
                        opacity: 0;
                    }
                    .medi-misconception-hidden.open {
                        max-height: 800px;
                        opacity: 1;
                    }
                    .medi-misconception-panel {
                        background: #ffffff;
                        border: 1px solid rgba(39,68,114,0.1);
                        border-radius: 20px;
                        padding: 36px 30px;
                        box-shadow: 0 12px 40px rgba(39,68,114,0.06);
                    }
                    .medi-misconception-profile {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        margin-bottom: 16px;
                    }
                    .medi-misconception-avatar {
                        width: 52px;
                        height: 52px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #274472, #3b82f6);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                    }
                    .medi-misconception-role {
                        font-size: 0.7rem;
                        font-weight: 700;
                        color: #274472;
                        letter-spacing: 0.15em;
                        text-transform: uppercase;
                        display: block;
                        margin-bottom: 2px;
                    }
                    .medi-misconception-name {
                        font-family: Georgia, serif;
                        font-size: 1.15rem;
                        font-weight: 600;
                        color: #274472;
                        margin: 0;
                    }
                    .medi-misconception-bio {
                        font-size: 0.9rem;
                        line-height: 1.65;
                        color: #475569;
                        margin-bottom: 20px;
                    }
                    .medi-misconception-quote {
                        background: #eef2f8;
                        border-radius: 14px;
                        padding: 24px;
                        position: relative;
                    }
                    .medi-misconception-quote-mark {
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: #274472;
                        line-height: 1;
                        display: block;
                        margin-bottom: 4px;
                        opacity: 0.3;
                    }
                    .medi-misconception-quote-text {
                        font-size: 0.95rem;
                        line-height: 1.7;
                        color: #2d3a4a;
                        margin: 0;
                        font-style: italic;
                    }
                ` }} />
                <div className="medi-misconception-glow-one"></div>
                <div className="medi-misconception-glow-two"></div>
                <div className="medi-misconception-container">

                    {/* Left editorial block */}
                    <div>
                        <span className="medi-misconception-badge">THE BIGGEST MISCONCEPTION</span>
                        <h2 className="medi-misconception-heading">
                            &ldquo;Isn&rsquo;t That Just for Kids?&rdquo;
                        </h2>
                        <div className="medi-misconception-separator"></div>

                        <p className="medi-misconception-text">
                            Mention Disney Cruise Line to many luxury travelers and you&rsquo;ll often hear the same response: <em>&ldquo;Isn&rsquo;t that just for kids?&rdquo;</em> It&rsquo;s one of the most common misconceptions in the cruise industry.
                        </p>
                        <p className="medi-misconception-text">
                            While Disney Cruise Line is unquestionably one of the world&rsquo;s premier family cruise brands, many affluent travelers dismiss it without understanding what Disney actually delivers.
                        </p>

                        <div className={`medi-misconception-hidden ${showMore ? 'open' : ''}`}>
                            <p className="medi-misconception-text">
                                The reality is that Disney Cruise Line offers some of the highest service standards, best-designed family accommodations, most impressive entertainment, and strongest guest satisfaction ratings in the industry.
                            </p>

                            <div className="medi-misconception-cards-wrapper">
                                <p className="medi-misconception-cards-lead">
                                    For the right traveler, Disney can provide a luxury experience that rivals or exceeds many traditional premium cruise lines. Disney delivers:
                                </p>
                                <div className="medi-misconception-cards-grid">
                                    {[
                                        { icon: Star, label: 'Exceptional service' },
                                        { icon: Award, label: 'Outstanding guest satisfaction' },
                                        { icon: Crown, label: 'Premium accommodations' },
                                        { icon: Sparkles, label: 'Industry-leading entertainment' },
                                        { icon: Heart, label: 'Family-focused luxury' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <div key={i} className="medi-misconception-card">
                                            <Icon />
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            className={`medi-misconception-toggle ${showMore ? 'open' : ''}`}
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? 'Show Less' : 'Read More'}
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    {/* Right signature panel */}
                    <div className="medi-misconception-panel">
                        <div className="medi-misconception-profile">
                            <div className="medi-misconception-avatar">
                                <Star size={20} />
                            </div>
                            <div>
                                <span className="medi-misconception-role">LUXURY TRAVEL ADVISOR</span>
                                <h3 className="medi-misconception-name">Angela Hughes</h3>
                            </div>
                        </div>
                        <p className="medi-misconception-bio">
                            With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year, Angela Hughes offers unmatched insight into premium family cruising.
                        </p>
                        <div className="medi-misconception-quote">
                            <span className="medi-misconception-quote-mark">&ldquo;</span>
                            <p className="medi-misconception-quote-text">
                                The mistake isn&rsquo;t assuming Disney is family-focused. The mistake is assuming family-focused means low-end.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                3. MISTAKE #2 — ADULTS SECTION (image + content)
                   Uses medi-luxury-definition-section pattern
            ══════════════════════════════════════════════════════ */}
            <section className="medi-adults-only-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-adults-only-section {
                        background: #ffffff;
                        padding: 80px 24px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-adults-only-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 1.15fr 0.85fr;
                        gap: 40px;
                        align-items: flex-start;
                    }
                    @media (max-width: 991px) {
                        .medi-adults-only-container {
                            grid-template-columns: 1fr;
                            gap: 32px;
                        }
                    }
                    .medi-adults-only-content-block {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                    }
                    .medi-adults-only-eyebrow {
                        align-self: flex-start;
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        background: rgba(39, 68, 114, 0.07);
                        border: 1px solid rgba(39, 68, 114, 0.15);
                        padding: 5px 14px;
                        border-radius: 30px;
                        font-size: 0.78rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.12em;
                        color: #274472;
                    }
                    .medi-adults-only-heading {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: clamp(26px, 4.5vw, 40px);
                        font-weight: 600;
                        line-height: 1.2;
                        color: var(--medi-navy, #274472);
                        margin: 0 0 14px 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-adults-only-heading {
                            font-size: clamp(24px, 4vw, 32px);
                        }
                    }
                    .medi-adults-only-paragraph {
                        font-size: 1rem;
                        line-height: 1.7;
                        color: #2d3a4a;
                        margin: 0;
                    }
                    .medi-adults-only-image-frame {
                        position: relative;
                        margin-top: 4px;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 8px 30px rgba(39, 68, 114, 0.12);
                        border: 1px solid rgba(39, 68, 114, 0.1);
                    }
                    .medi-adults-only-image {
                        width: 100%;
                        height: 320px;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .medi-adults-only-image-frame:hover .medi-adults-only-image {
                        transform: scale(1.03);
                    }
                    .medi-adults-only-image-overlay {
                        position: absolute;
                        bottom: 0; left: 0; right: 0;
                        height: 50%;
                        background: linear-gradient(to top, rgba(15, 28, 46, 0.4) 0%, transparent 100%);
                        pointer-events: none;
                    }
                    .medi-adults-only-highlights-card {
                        background: rgb(231, 243, 245);
                        border: 1px solid rgba(39, 68, 114, 0.1);
                        border-radius: 20px;
                        padding: 28px 24px;
                        display: flex;
                        flex-direction: column;
                        gap: 18px;
                    }
                    .medi-adults-only-highlights-title {
                        font-family: 'Inter', system-ui, sans-serif;
                        font-size: 0.9rem;
                        font-weight: 700;
                        line-height: 1.4;
                        color: #274472;
                        margin: 0;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                    }
                    .medi-adults-only-list {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                    .medi-adults-only-item-strip {
                        background: #ffffff;
                        border: 1px solid rgba(39, 68, 114, 0.08);
                        border-radius: 10px;
                        padding: 12px 16px;
                        display: flex;
                        align-items: center;
                        gap: 14px;
                        transition: all 0.3s;
                    }
                    .medi-adults-only-item-strip:hover {
                        transform: translateX(4px);
                        border-color: rgba(39, 68, 114, 0.25);
                        box-shadow: 0 4px 14px rgba(39, 68, 114, 0.06);
                    }
                    .medi-adults-only-item-icon {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                        background: rgba(39, 68, 114, 0.07);
                        color: #274472;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        transition: all 0.35s ease;
                    }
                    .medi-adults-only-item-strip:hover .medi-adults-only-item-icon {
                        background: #274472;
                        color: #ffffff;
                    }
                    .medi-adults-only-item-text {
                        font-size: 0.9rem;
                        font-weight: 500;
                        color: #2d3a4a;
                        line-height: 1.4;
                    }
                ` }} />

                <div className="medi-adults-only-container">
                    <div className="medi-adults-only-content-block">
                        <div className="medi-adults-only-eyebrow">
                            <Users size={13} />
                            <span>Mistake #2</span>
                        </div>

                        <h2 className="medi-adults-only-heading">Believing Disney Is Only for Children</h2>

                        <p className="medi-adults-only-paragraph">
                            Yes, Disney caters to families. But that doesn't mean adults are ignored. In fact, Disney has invested heavily in creating experiences specifically for adults.
                        </p>
                        <p className="medi-adults-only-paragraph">
                            Disney understands that happy parents and grandparents create happier family vacations.
                        </p>

                        <div className="medi-adults-only-image-frame">
                            <img src={adultDiningImg} alt="Disney adult-only dining experience" className="medi-adults-only-image" />
                            <div className="medi-adults-only-image-overlay"></div>
                        </div>
                    </div>

                    <div className="medi-adults-only-highlights-card">
                        <h3 className="medi-adults-only-highlights-title">Luxury travelers are often surprised to discover:</h3>
                        <div className="medi-adults-only-list">
                            {[
                                { text: 'Adult-Only Restaurants', icon: Utensils },
                                { text: 'Exclusive Lounges', icon: Moon },
                                { text: 'Adult-Only Pools', icon: Sun },
                                { text: 'Premium Spa Experiences', icon: Heart },
                                { text: 'Fine Dining Experiences', icon: Crown }
                            ].map((item, i) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={i} className="medi-adults-only-item-strip">
                                        <div className="medi-adults-only-item-icon">
                                            <IconComponent size={16} />
                                        </div>
                                        <span className="medi-adults-only-item-text">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                4. MISTAKE #3 — SERVICE STANDARDS (excel-section)
            ══════════════════════════════════════════════════════ */}
            <section className="medi-excel-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-excel-section {
                        position: relative;
                        background: linear-gradient(135deg, #0f1c2e 0%, #1a2a3e 100%);
                        padding: 70px 20px;
                        overflow: hidden;
                        color: #ffffff;
                    }
                    .medi-excel-coord {
                        position: absolute;
                        font-size: 10px;
                        font-family: monospace, sans-serif;
                        color: #e7f3f5;
                        opacity: 0.1;
                        letter-spacing: 0.25em;
                        pointer-events: none;
                        z-index: 1;
                    }
                    .coord-tl { top: 28px; left: 28px; }
                    .coord-tr { top: 28px; right: 28px; }
                    .coord-bl { bottom: 28px; left: 28px; }
                    .coord-br { bottom: 28px; right: 28px; }
                    @media (max-width: 1024px) {
                        .medi-excel-coord { display: none; }
                    }
                    .medi-excel-glow-one {
                        position: absolute;
                        width: 500px; height: 500px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(231,243,245,0.06) 0%, transparent 70%);
                        top: -200px; right: -120px;
                        pointer-events: none;
                        filter: blur(80px);
                    }
                    .medi-excel-glow-two {
                        position: absolute;
                        width: 400px; height: 400px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(39,68,114,0.3) 0%, transparent 70%);
                        bottom: -150px; left: -120px;
                        pointer-events: none;
                        filter: blur(70px);
                    }
                    .medi-excel-container {
                        max-width: 1100px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 1;
                    }
                    .medi-excel-header-block {
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    .medi-excel-main-title {
                        font-size: 42px;
                        line-height: 1.2;
                        font-weight: 500;
                        color: #ffffff;
                        margin: 0 0 14px 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-excel-main-title { font-size: 30px; }
                    }
                    .medi-excel-separator {
                        width: 80px;
                        height: 3px;
                        background: linear-gradient(90deg, transparent 0%, #e7f3f5 50%, transparent 100%);
                        margin: 0 auto 20px;
                    }
                    .medi-excel-lead-paragraph {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #cbd5e1;
                        max-width: 700px;
                        margin: 0 auto;
                        font-weight: 300;
                    }
                    .medi-excel-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;
                        margin-bottom: 40px;
                    }
                    @media (max-width: 1024px) {
                        .medi-excel-grid {
                            grid-template-columns: 1fr;
                            gap: 24px;
                        }
                    }
                    .medi-excel-card {
                        background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
                        border: 1px solid rgba(231,243,245,0.08);
                        border-radius: 18px;
                        padding: 36px 28px;
                        height: 100%;
                        transition: all 0.4s ease;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                    }
                    .medi-excel-card:hover {
                        background: rgba(255,255,255,0.05);
                        border-color: rgba(231,243,245,0.2);
                        transform: translateY(-4px);
                    }
                    .medi-excel-card-heading {
                        font-size: 14px;
                        line-height: 1.5;
                        font-weight: 600;
                        color: #e7f3f5;
                        margin: 0 0 20px 0;
                        text-transform: uppercase;
                        letter-spacing: 0.15em;
                        border-bottom: 1px solid rgba(255,255,255,0.08);
                        padding-bottom: 16px;
                    }
                    .medi-excel-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: grid;
                        gap: 12px;
                    }
                    .medi-excel-list-item {
                        display: flex;
                        align-items: center;
                        gap: 14px;
                        padding: 12px 16px;
                        background: rgba(255,255,255,0.015);
                        border: 1px solid rgba(255,255,255,0.03);
                        border-radius: 10px;
                        transition: all 0.3s ease;
                    }
                    .medi-excel-list-item:hover {
                        background: rgba(231,243,245,0.05);
                        border-color: rgba(231,243,245,0.18);
                        padding-left: 20px;
                        transform: translateX(3px);
                    }
                    .medi-excel-icon-wrapper {
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                        background: rgba(231,243,245,0.08);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #e7f3f5;
                        flex-shrink: 0;
                        transition: all 0.3s ease;
                        border: 1px solid rgba(231,243,245,0.12);
                    }
                    .medi-excel-list-item:hover .medi-excel-icon-wrapper {
                        background: #e7f3f5;
                        color: #0f1c2e;
                        transform: scale(1.1) rotate(8deg);
                    }
                    .medi-excel-list-item span {
                        font-size: 15px;
                        font-weight: 500;
                        color: #f1f5f9;
                    }
                    .medi-excel-footer-block {
                        max-width: 700px;
                        margin: 32px auto 0;
                        background: linear-gradient(135deg, rgba(231,243,245,0.03) 0%, rgba(255,255,255,0.01) 100%);
                        border: 1px solid rgba(231,243,245,0.08);
                        padding: 30px 36px;
                        border-radius: 20px;
                        text-align: center;
                        box-shadow: 0 16px 40px rgba(0,0,0,0.2);
                    }
                    .medi-excel-footer-badge {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: rgba(231,243,245,0.06);
                        border: 1px solid rgba(231,243,245,0.12);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 16px;
                        color: #e7f3f5;
                    }
                    .medi-excel-footer-paragraph {
                        font-size: 16px;
                        line-height: 1.7;
                        color: #e2e8f0;
                        margin: 0;
                        font-style: italic;
                        font-weight: 300;
                    }
                ` }} />
                <div className="medi-excel-coord coord-tl">DISNEY CRUISE LINE // SERVICE EXCELLENCE</div>
                <div className="medi-excel-coord coord-tr">SERVICE STANDARDS</div>
                <div className="medi-excel-coord coord-bl">GUEST SATISFACTION LEADERS</div>
                <div className="medi-excel-coord coord-br">PREMIUM CRUISE EXPERIENCE</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <span style={{
                            display: 'inline-block', fontSize: '12px', fontWeight: '600',
                            letterSpacing: '0.1em', color: '#93c5fd', textTransform: 'uppercase',
                            background: 'rgba(147,197,253,0.1)', borderRadius: '4px',
                            padding: '4px 10px', marginBottom: '12px'
                        }}>MISTAKE #3</span>
                        <h2 className="medi-excel-main-title">Underestimating Disney's Service Standards</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Service is one area where Disney consistently excels. Many experienced cruisers compare Disney's onboard service favorably to premium and luxury cruise lines.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">Disney crew members are trained to:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Compass, text: 'Anticipate guest needs' },
                                        { icon: Heart, text: 'Personalize interactions' },
                                        { icon: Sparkles, text: 'Create memorable moments' },
                                        { icon: Star, text: 'Deliver consistent hospitality' },
                                    ].map(({ icon: Icon, text }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={16} /></div>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">For luxury travelers, this means:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Award, text: 'Hospitality that rivals premium cruise lines' },
                                        { icon: Users, text: 'Families return for the service as much as entertainment' },
                                        { icon: CheckCircle, text: 'Expectations consistently exceeded' },
                                        { icon: Crown, text: 'Staff who remember names, preferences, and details' },
                                    ].map(({ icon: Icon, text }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={16} /></div>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={18} /></div>
                        <p className="medi-excel-footer-paragraph">
                            Families frequently return because of the service experience as much as the entertainment. For luxury travelers accustomed to exceptional hospitality, Disney often exceeds expectations.
                        </p>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                 5. MISTAKE #4 #5 #6 — TAB PANEL SECTION
            ══════════════════════════════════════════════════════ */}
            <section className="hx-onboard-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hx-onboard-section {
                        --navy-rgb: 39, 68, 114;
                        background: linear-gradient(180deg, #e6ecf2 0%, #f2f6f9 100%);
                        background-image: radial-gradient(rgba(var(--navy-rgb), 0.08) 1px, transparent 1px);
                        background-size: 32px 32px;
                        border-top: 1px solid rgba(var(--navy-rgb), 0.12);
                        border-bottom: 1px solid rgba(var(--navy-rgb), 0.12);
                        padding: 100px 24px;
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .hx-onboard-glow-1 {
                        position: absolute;
                        top: 5%; left: 5%;
                        width: 350px; height: 350px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(var(--navy-rgb), 0.12) 0%, transparent 70%);
                        filter: blur(60px);
                        pointer-events: none;
                    }
                    .hx-onboard-glow-2 {
                        position: absolute;
                        bottom: 10%; right: 5%;
                        width: 400px; height: 400px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(var(--navy-rgb), 0.10) 0%, transparent 70%);
                        filter: blur(70px);
                        pointer-events: none;
                    }
                    .hx-onboard-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 2;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .hx-onboard-grid {
                        display: grid;
                        grid-template-columns: 1fr 1.6fr;
                        gap: 40px;
                        width: 100%;
                        box-sizing: border-box;
                        align-items: start;
                    }
                    .hx-onboard-sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        position: sticky;
                        top: 100px;
                        z-index: 5;
                    }
                    .hx-onboard-sidebar-header { text-align: left; }
                    .hx-onboard-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        padding: 6px 16px;
                        border-radius: 100px;
                        margin-bottom: 16px;
                        background: rgba(var(--navy-rgb), 0.10);
                        border: 1px solid rgba(var(--navy-rgb), 0.18);
                    }
                    .hx-onboard-badge span {
                        font-size: 11px; font-weight: 700;
                        letter-spacing: 2px; text-transform: uppercase;
                        color: var(--navy);
                    }
                    .hx-onboard-title {
                        font-weight: 600; line-height: 1.25;
                        margin: 0 0 16px 0;
                        font-size: clamp(1.6rem, 3vw, 2.2rem);
                        color: var(--navy); word-break: break-word;
                        overflow-wrap: break-word;
                    }
                    .hx-onboard-desc {
                        font-size: 0.95rem; margin: 0 0 24px 0;
                        line-height: 1.6; color: #475569;
                    }
                    .hx-onboard-tabs {
                        display: flex; flex-direction: column; gap: 12px;
                    }
                    .hx-onboard-tab-btn {
                        display: flex; align-items: center;
                        justify-content: space-between;
                        padding: 20px 24px;
                        background: transparent;
                        border: 1px solid rgba(var(--navy-rgb), 0.2);
                        border-radius: 16px; cursor: pointer;
                        text-align: left; width: 100%;
                        box-sizing: border-box;
                        transition: all 0.25s ease; outline: none;
                    }
                    .hx-onboard-tab-btn:hover {
                        border-color: rgba(var(--navy-rgb), 0.4);
                        background: rgba(var(--navy-rgb), 0.03);
                    }
                    .hx-onboard-tab-btn.active {
                        background: #0f1c2e;
                        border-color: rgba(var(--navy-rgb), 0.5);
                        transform: translateX(8px);
                        box-shadow: 0 8px 32px rgba(15,28,46,0.18);
                    }
                    .hx-onboard-tab-content-flex {
                        display: flex; align-items: center; gap: 16px;
                    }
                    .hx-onboard-tab-num {
                        font-size: 1.25rem; font-weight: 800;
                        color: #94a3b8; font-family: monospace;
                        transition: color 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-num { color: #ffffff; }
                    .hx-onboard-tab-title {
                        font-size: 0.95rem; font-weight: 700;
                        color: #475569; transition: color 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-title { color: #ffffff; }
                    .hx-onboard-tab-desc {
                        font-size: 0.75rem; color: #94a3b8;
                        margin-top: 4px; transition: color 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-desc { color: #93c5fd; }
                    .hx-onboard-tab-dot {
                        width: 8px; height: 8px; border-radius: 50%;
                        background: rgba(var(--navy-rgb), 0.3);
                        transition: all 0.25s ease;
                    }
                    .hx-onboard-tab-btn.active .hx-onboard-tab-dot {
                        background: #93c5fd;
                        box-shadow: 0 0 10px #93c5fd;
                    }
                    .hx-onboard-panel {
                        background: #0f1c2e;
                        border: 1px solid rgba(var(--navy-rgb), 0.35);
                        border-radius: 24px; padding: 48px;
                        box-shadow: 0 8px 40px rgba(15,28,46,0.22);
                        min-height: 450px;
                        display: flex; flex-direction: column;
                        justify-content: space-between;
                        position: relative; overflow: hidden;
                        box-sizing: border-box;
                    }
                    .hx-onboard-watermark {
                        position: absolute; bottom: 24px; right: 28px;
                        color: rgba(var(--navy-rgb), 0.4);
                        font-family: monospace; font-size: 11px;
                        font-weight: 700; letter-spacing: 2px;
                        pointer-events: none;
                    }
                    .hx-onboard-panel-header {
                        display: flex; align-items: center;
                        gap: 16px; margin-bottom: 28px;
                    }
                    .hx-onboard-panel-icon-box {
                        width: 48px; height: 48px; border-radius: 12px;
                        background: rgba(var(--navy-rgb), 0.4);
                        border: 1px solid rgba(var(--navy-rgb), 0.5);
                        display: flex; align-items: center; justify-content: center;
                    }
                    .hx-onboard-panel-title {
                        color: #ffffff; font-size: 1.4rem;
                        font-weight: 700; margin: 0;
                    }
                    .hx-onboard-panel-lead {
                        color: #94a3b8; font-size: 0.95rem;
                        margin-bottom: 20px; line-height: 1.6;
                    }
                    .hx-onboard-panel-list {
                        list-style: none; padding: 0;
                        margin: 0 0 20px;
                        display: flex; flex-direction: column; gap: 12px;
                    }
                    .hx-onboard-panel-list-item {
                        display: flex; align-items: center; gap: 12px;
                    }
                    .hx-onboard-panel-list-item-text {
                        color: #e2e8f0; font-size: 0.92rem;
                    }
                    .hx-onboard-note-box {
                        margin-top: 16px; padding-top: 16px;
                        border-top: 1px solid rgba(255,255,255,0.08);
                    }
                    .hx-onboard-note-text {
                        color: #93c5fd; font-style: italic;
                        font-size: 0.9rem; margin: 0;
                    }
                    @media (max-width: 991px) {
                        .hx-onboard-section { padding: 60px 16px; }
                        .hx-onboard-grid { grid-template-columns: 1fr; gap: 30px; }
                        .hx-onboard-sidebar { position: static; top: auto; }
                        .hx-onboard-sidebar-header { text-align: center; }
                        .hx-onboard-tabs {
                            flex-direction: row; overflow-x: auto;
                            padding-bottom: 12px;
                        }
                        .hx-onboard-tab-btn { width: 260px; flex-shrink: 0; }
                        .hx-onboard-tab-btn.active { transform: none; }
                        .hx-onboard-tab-desc { display: none; }
                        .hx-onboard-panel { padding: 32px; min-height: auto; }
                    }
                    @media (max-width: 600px) {
                        .hx-onboard-tabs { flex-direction: column; overflow-x: visible; }
                        .hx-onboard-tab-btn { width: 100%; padding: 16px 20px; }
                        .hx-onboard-tab-desc { display: block; }
                        .hx-onboard-panel { padding: 24px; border-radius: 20px; }
                        .hx-onboard-watermark { display: none; }
                    }
                `}} />
                <div className="hx-onboard-glow-1" />
                <div className="hx-onboard-glow-2" />

                <div className="hx-onboard-container">
                    <div className="hx-onboard-grid">

                        {/* ── LEFT: sticky nav ── */}
                        <div className="hx-onboard-sidebar">
                            <div className="hx-onboard-sidebar-header">
                                <div className="hx-onboard-badge">
                                    <Crown size={14} color="var(--navy)" />
                                    <span>MISTAKE #4 &amp; #5 &amp; #6</span>
                                </div>
                                <h2 className="hx-onboard-title">
                                    Thinking Luxury Means Adults-Only &amp; Overlooking Concierge Level
                                </h2>
                                <p className="hx-onboard-desc">
                                    Select a topic below to explore what Disney Cruise Line really delivers.
                                </p>
                            </div>

                            <div className="hx-onboard-tabs">
                                {[
                                    { number: '01', title: 'Thinking Luxury = Adults-Only', desc: 'Disney elevates the family experience' },
                                    { number: '02', title: 'Overlooking Concierge Level', desc: 'Premium Disney experiences for affluent families' },
                                    { number: '03', title: 'Ignoring Multigenerational Strength', desc: 'Disney\'s fastest-growing luxury segment' },
                                ].map((tab, idx) => {
                                    const isActive = activeOnboardTab === idx
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveOnboardTab(idx)}
                                            className={`hx-onboard-tab-btn ${isActive ? 'active' : ''}`}
                                        >
                                            <div className="hx-onboard-tab-content-flex">
                                                <span className="hx-onboard-tab-num">{tab.number}</span>
                                                <div>
                                                    <div className="hx-onboard-tab-title">{tab.title}</div>
                                                    <div className="hx-onboard-tab-desc">{tab.desc}</div>
                                                </div>
                                            </div>
                                            <div className="hx-onboard-tab-dot" />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* ── RIGHT: content panel ── */}
                        <div className="hx-onboard-panel">
                            <div className="hx-onboard-watermark">
                                DISNEY CRUISE LINE // LUXURY EXPERIENCE
                            </div>

                            <div style={{ position: 'relative', zIndex: 2 }}>

                                {/* Tab 0 — default / Thinking Luxury Means Adults-Only */}
                                {activeOnboardTab === 0 && (
                                    <div>
                                        <div className="hx-onboard-panel-header">
                                            <div className="hx-onboard-panel-icon-box">
                                                <Crown size={22} color="#93c5fd" />
                                            </div>
                                            <h3 className="hx-onboard-panel-title">Thinking Luxury Means Adults-Only</h3>
                                        </div>

                                        <p className="hx-onboard-panel-lead">
                                            Cruise lines like Viking Ocean Cruises, Seabourn, Regent Seven Seas, and Silversea have built successful brands around adults-only environments. Disney takes a different approach — instead of removing families, Disney elevates the family experience.
                                        </p>

                                        <ul className="hx-onboard-panel-list">
                                            {['Sophisticated experiences for adults', 'Exceptional experiences for children', 'Meaningful experiences for families together'].map((item, i) => (
                                                <li key={i} className="hx-onboard-panel-list-item">
                                                    <CheckCircle size={16} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                                    <span className="hx-onboard-panel-list-item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="hx-onboard-note-box">
                                            <p className="hx-onboard-note-text">
                                                Luxury isn't always about escaping children. Sometimes it's about creating extraordinary experiences with the people you love most.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Tab 1 — Concierge Level */}
                                {activeOnboardTab === 1 && (
                                    <div>
                                        <div className="hx-onboard-panel-header">
                                            <div className="hx-onboard-panel-icon-box">
                                                <Gem size={22} color="#93c5fd" />
                                            </div>
                                            <h3 className="hx-onboard-panel-title">Overlooking Concierge-Level Accommodations</h3>
                                        </div>

                                        <p className="hx-onboard-panel-lead">
                                            Disney Concierge provides:
                                        </p>

                                        <ul className="hx-onboard-panel-list" style={{ gap: '14px' }}>
                                            {[
                                                'Dedicated Concierge Team',
                                                'Priority Access & expedited services',
                                                'Private Concierge Lounges',
                                                'Premium Staterooms and Suites',
                                                'Enhanced Planning Services',
                                            ].map((item, i) => (
                                                <li key={i} className="hx-onboard-panel-list-item" style={{ gap: '14px' }}>
                                                    <span style={{
                                                        background: 'rgba(39,68,114,0.5)', color: '#93c5fd',
                                                        fontSize: '11px', fontWeight: '800',
                                                        padding: '4px 10px', borderRadius: '6px',
                                                        flexShrink: 0, fontFamily: 'monospace',
                                                    }}>0{i + 1}</span>
                                                    <span className="hx-onboard-panel-list-item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="hx-onboard-note-box">
                                            <p className="hx-onboard-note-text">
                                                For affluent families, Concierge-level Disney experiences can rival luxury cruise products in both service and comfort.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Tab 2 — Multigenerational */}
                                {activeOnboardTab === 2 && (
                                    <div>
                                        <div className="hx-onboard-panel-header">
                                            <div className="hx-onboard-panel-icon-box">
                                                <Users size={22} color="#93c5fd" />
                                            </div>
                                            <h3 className="hx-onboard-panel-title">Ignoring Multigenerational Strength</h3>
                                        </div>

                                        <p className="hx-onboard-panel-lead">
                                            One of the fastest-growing segments of luxury travel is multigenerational travel. Families increasingly want:
                                        </p>

                                        <ul className="hx-onboard-panel-list">
                                            {['Shared experiences', 'Meaningful time together', 'Celebrations', 'Legacy travel', 'Family memories'].map((item, i) => (
                                                <li key={i} className="hx-onboard-panel-list-item">
                                                    <CheckCircle size={16} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                                    <span className="hx-onboard-panel-list-item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="hx-onboard-note-box">
                                            <p className="hx-onboard-note-text">
                                                Disney Cruise Line excels here — grandparents, parents, and grandchildren can all enjoy the same vacation without compromising their individual interests.
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 1: THE EMOTIONAL LUXURY OF CONNECTION ── */}
            <section className="medi-video-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-video-section {
                        padding: 60px 24px;
                        background: #eef2f8;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-video-container {
                        max-width: 1000px;
                        margin: 0 auto;
                    }
                    .medi-video-header {
                        text-align: center;
                        margin-bottom: 32px;
                    }
                    .medi-video-eyebrow {
                        color: #274472;
                        font-weight: 700;
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 4px;
                        display: block;
                        margin-bottom: 10px;
                    }
                    .medi-video-heading {
                        font-size: clamp(26px, 4.5vw, 38px);
                        color: #274472;
                        font-weight: 800;
                        margin: 0 0 14px 0;
                        letter-spacing: -0.02em;
                        line-height: 1.2;
                    }
                    .medi-video-bar {
                        width: 50px;
                        height: 3px;
                        background: #3b82f6;
                        margin: 0 auto;
                        border-radius: 10px;
                    }
                    .medi-video-description {
                        color: #475569;
                        font-size: 16px;
                        line-height: 1.7;
                        max-width: 780px;
                        margin: 16px auto 0;
                    }
                    .medi-video-frame {
                        border-radius: 24px;
                        overflow: hidden;
                        box-shadow: 0 20px 50px rgba(39, 68, 114, 0.12);
                        border: 1px solid rgba(39, 68, 114, 0.08);
                        aspect-ratio: 16 / 9;
                        background: #000;
                    }
                    .medi-video-frame iframe {
                        width: 100%;
                        height: 100%;
                        border: 0;
                    }
                ` }} />
                <div className="medi-video-container">
                    <div className="medi-video-header">
                        <span className="medi-video-eyebrow">The Emotional ROI</span>
                        <h2 className="medi-video-heading">Rediscovering the Sense of Wonder</h2>
                        <div className="medi-video-bar"></div>
                        <p className="medi-video-description">
                            Luxury is often defined by the &ldquo;unbuyable&rdquo; moments. Watch as the Mowry siblings illustrate why Disney remains the leader in multigenerational travel. For affluent families, the true premium value of a Disney vacation isn&rsquo;t just the stateroom&mdash;it is the rare ability for adults to disconnect from the world and reconnect with their family through genuine, shared joy.
                        </p>
                    </div>

                    <div className="medi-video-frame">
                        <iframe
                            src="https://www.youtube.com/embed/GUgMMNmQ5XM"
                            title="Disney Generational Connection"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                6. MISTAKE #7 — COMPARING TO WRONG CRUISE LINES
            ══════════════════════════════════════════════════════ */}
            <section className="medi-comparing-clean-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-comparing-clean-section {
                        background: #f4f7fa;
                        padding: 70px 24px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-comparing-clean-container {
                        max-width: 900px;
                        margin: 0 auto;
                    }
                    .medi-comparing-clean-eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        background: rgba(39, 68, 114, 0.07);
                        border: 1px solid rgba(39, 68, 114, 0.15);
                        padding: 5px 14px;
                        border-radius: 30px;
                        font-size: 0.75rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.12em;
                        color: #274472;
                        margin-bottom: 12px;
                    }
                    .medi-comparing-clean-eyebrow svg {
                        width: 14px;
                        height: 14px;
                    }
                    .medi-comparing-clean-heading {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: 2.3rem;
                        font-weight: 600;
                        line-height: 1.25;
                        color: var(--medi-navy, #274472);
                        margin: 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-comparing-clean-heading {
                            font-size: 1.85rem;
                        }
                    }
                    .medi-comparing-clean-lead {
                        font-size: 1rem;
                        line-height: 1.7;
                        color: #2d3a4a;
                        margin: 16px 0 20px 0;
                    }
                    .medi-comparing-clean-section .medi-priorities-box {
                        padding: 20px 24px;
                        margin-bottom: 20px;
                    }
                    .medi-comparing-clean-section .medi-priorities-intro {
                        font-size: 14px;
                        margin-bottom: 14px;
                    }
                    .medi-comparing-clean-section .medi-priorities-grid-pills {
                        gap: 10px;
                    }
                    .medi-comparing-clean-section .medi-priority-pill-item {
                        padding: 8px 14px;
                        font-size: 13px;
                    }
                    .medi-comparing-clean-section .medi-editorial-body-para {
                        font-size: 15px;
                        margin-bottom: 20px;
                    }
                    .medi-comparing-clean-section .medi-expertise-section-box {
                        gap: 10px;
                    }
                    .medi-comparing-clean-section .medi-expertise-intro-label {
                        font-size: 11px;
                    }
                    .medi-comparing-clean-section .medi-expertise-horizontal-strip {
                        gap: 8px;
                    }
                    .medi-comparing-clean-section .medi-expertise-pills-row {
                        padding: 6px 14px;
                        font-size: 12px;
                        gap: 6px;
                    }
                    .medi-comparing-clean-section .medi-expertise-pill-icon-box svg {
                        width: 12px !important;
                        height: 12px !important;
                    }
                ` }} />
                <div className="medi-comparing-clean-container">
                    <div className="medi-comparing-clean-eyebrow">
                        <Award />
                        <span>MISTAKE #7</span>
                    </div>
                    <h2 className="medi-comparing-clean-heading">Comparing Disney to the Wrong Cruise Lines</h2>

                    <p className="medi-comparing-clean-lead">
                        Disney is often compared to Carnival Cruise Line, Royal Caribbean, and Norwegian Cruise Line. While those comparisons have value, they can also be misleading.
                    </p>

                    <div className="medi-priorities-box">
                        <p className="medi-priorities-intro">
                            For many travelers, Disney is actually competing with:
                        </p>
                        <div className="medi-priorities-grid-pills">
                            {['Luxury family resorts', 'High-end family tours', 'Multigenerational villa vacations', 'Premium family travel experiences'].map((item, idx) => (
                                <div key={idx} className="medi-priority-pill-item">
                                    <CheckCircle size={15} className="medi-priority-check" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="medi-editorial-body-para">
                        Viewed through that lens, Disney's pricing and value proposition make much more sense. Angela Hughes consistently helps clients reframe how they evaluate Disney — not against mainstream cruise lines, but against the full spectrum of premium family travel.
                    </p>

                    <div className="medi-expertise-section-box">
                        <span className="medi-expertise-intro-label">Disney excels compared to:</span>
                        <div className="medi-expertise-horizontal-strip">
                            {[
                                { title: 'Luxury family resorts', icon: Crown },
                                { title: 'Premium villa vacations', icon: MapPin },
                                { title: 'High-end family tours', icon: Globe },
                                { title: 'Multigenerational travel products', icon: Users },
                            ].map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="medi-expertise-pills-row">
                                        <div className="medi-expertise-pill-icon-box"><IconComp size={14} /></div>
                                        <span className="medi-expertise-pill-text">{item.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                6b. ANGELA HUGHES — EXPERT INSIGHT SECTION
            ══════════════════════════════════════════════════════ */}
            <section className="medi-insight-clean-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-insight-clean-section {
                        background: #eaf0f6;
                        padding: 100px 24px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-insight-clean-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: minmax(320px, 420px) minmax(0, 1fr);
                        gap: 60px;
                        align-items: start;
                    }
                    @media (max-width: 1120px) {
                        .medi-insight-clean-container {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                    }
                    .medi-insight-clean-eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: rgba(39, 68, 114, 0.07);
                        border: 1px solid rgba(39, 68, 114, 0.15);
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 0.78rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.12em;
                        color: #274472;
                        margin-bottom: 16px;
                    }
                    .medi-insight-clean-eyebrow svg {
                        width: 15px;
                        height: 15px;
                    }
                    .medi-insight-clean-heading {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: 2.3rem;
                        font-weight: 600;
                        line-height: 1.25;
                        color: var(--medi-navy, #274472);
                        margin: 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-insight-clean-heading {
                            font-size: 1.85rem;
                        }
                    }
                    .medi-insight-clean-lead {
                        font-size: 1.05rem;
                        line-height: 1.75;
                        color: #2d3a4a;
                        margin: 20px 0 24px 0;
                    }
                    .medi-insight-clean-portrait {
                        position: relative;
                    }
                    .medi-insight-clean-image-frame {
                        position: relative;
                        border-radius: 20px;
                        overflow: hidden;
                        aspect-ratio: 4 / 5;
                        border: 1px solid rgba(39, 68, 114, 0.1);
                    }
                    .medi-insight-clean-image-frame img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }
                    .medi-insight-clean-gradient {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(37, 68, 114, 0.35) 0%, transparent 100%);
                        z-index: 1;
                    }
                    .medi-insight-clean-stats {
                        position: absolute;
                        bottom: -20px;
                        left: -20px;
                        background: #274472;
                        color: #ffffff;
                        border-radius: 16px;
                        padding: 20px 24px;
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        z-index: 3;
                    }
                    @media (max-width: 600px) {
                        .medi-insight-clean-stats {
                            position: static;
                            margin-top: 20px;
                        }
                    }
                    .medi-insight-clean-stat-tile {
                        display: flex;
                        flex-direction: column;
                    }
                    .medi-insight-clean-stat-number {
                        font-size: 1.5rem;
                        font-weight: 800;
                        line-height: 1.1;
                    }
                    .medi-insight-clean-stat-label {
                        font-size: 0.75rem;
                        font-weight: 500;
                        opacity: 0.8;
                        text-transform: uppercase;
                        letter-spacing: 0.06em;
                    }
                    .medi-insight-clean-stat-divider {
                        width: 1px;
                        height: 40px;
                        background: rgba(255,255,255,0.2);
                    }
                ` }} />
                <div className="medi-insight-clean-container">
                    <div className="medi-insight-clean-portrait">
                        <div className="medi-insight-clean-image-frame">
                            <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Cruise Expert" />
                            <div className="medi-insight-clean-gradient"></div>
                        </div>
                        <div className="medi-insight-clean-stats">
                            <div className="medi-insight-clean-stat-tile">
                                <span className="medi-insight-clean-stat-number">40+</span>
                                <span className="medi-insight-clean-stat-label">Years Experience</span>
                            </div>
                            <div className="medi-insight-clean-stat-divider"></div>
                            <div className="medi-insight-clean-stat-tile">
                                <span className="medi-insight-clean-stat-number">121+</span>
                                <span className="medi-insight-clean-stat-label">Countries Visited</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="medi-insight-clean-eyebrow">
                            <Award />
                            <span>EXPERT INSIGHT</span>
                        </div>
                        <h2 className="medi-insight-clean-heading">
                            Expert Insight from
                            <br />Angela Hughes
                        </h2>

                        <p className="medi-insight-clean-lead">
                            Angela Hughes and her team specialize in helping affluent families and multigenerational travelers choose the right cruise experience — matching the right product to each family's unique priorities and expectations.
                        </p>

                        <div className="medi-priorities-box">
                            <p className="medi-priorities-intro">
                                Angela consistently helps travelers evaluate:
                            </p>
                            <div className="medi-priorities-grid-pills">
                                {['Family cruise fit', 'Concierge level value', 'Disney vs luxury lines', 'Multigenerational suitability', 'Entertainment quality', 'Service standards'].map((item, idx) => (
                                    <div key={idx} className="medi-priority-pill-item">
                                        <CheckCircle size={15} className="medi-priority-check" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="medi-editorial-body-para">
                            As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate the full spectrum of premium cruise options with real-world expertise rather than generic online recommendations.
                        </p>

                        <div className="medi-expertise-section-box">
                            <span className="medi-expertise-intro-label">Her expertise spans:</span>
                            <div className="medi-expertise-horizontal-strip">
                                {[
                                    { title: 'Family luxury cruising', icon: Heart },
                                    { title: 'Disney Cruise Line', icon: Star },
                                    { title: 'Luxury cruise lines', icon: Crown },
                                    { title: 'River cruising', icon: Anchor },
                                    { title: 'Premium global travel', icon: Sparkles },
                                ].map((item, idx) => {
                                    const IconComponent = item.icon
                                    return (
                                        <div key={idx} className="medi-expertise-pills-row">
                                            <div className="medi-expertise-pill-icon-box"><IconComponent size={14} /></div>
                                            <span className="medi-expertise-pill-text">{item.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                7. MISTAKE #8 — DESTINATIONS SHOWCASE
                   Inline styled, matching heading, tight spacing
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .itinerary-section .itinerary-dashboard {
                    display: grid; grid-template-columns: 280px 1fr;
                    gap: 28px; margin-top: 40px; align-items: start;
                }
                .itinerary-section .itinerary-tabs {
                    display: flex; flex-direction: column; gap: 10px;
                }
                .itinerary-section .itinerary-tab {
                    display: flex; align-items: center; gap: 14px;
                    padding: 14px 20px; border-radius: 12px;
                    border: 1px solid rgba(39,68,114,0.06);
                    background: rgba(39,68,114,0.03);
                    cursor: pointer; transition: all 0.3s ease;
                    text-align: left; font-family: inherit; width: 100%;
                }
                .itinerary-section .itinerary-tab:hover {
                    background: rgba(39,68,114,0.06);
                    transform: translateY(-1px);
                }
                .itinerary-section .itinerary-tab.active {
                    background: var(--medi-navy, #274472);
                    border-color: var(--medi-navy, #274472);
                }
                .itinerary-section .itinerary-tab-num {
                    font-size: 0.72rem; font-weight: 700; opacity: 0.4;
                    color: var(--medi-navy, #274472); flex-shrink: 0; width: 20px;
                }
                .itinerary-section .itinerary-tab.active .itinerary-tab-num { color: #ffffff; opacity: 0.6; }
                .itinerary-section .itinerary-tab-info { flex: 1; min-width: 0; }
                .itinerary-section .itinerary-tab-title {
                    font-size: 0.88rem; font-weight: 600; color: var(--medi-navy, #274472);
                }
                .itinerary-section .itinerary-tab.active .itinerary-tab-title { color: #ffffff; }
                .itinerary-section .itinerary-tab-desc {
                    font-size: 0.75rem; color: #94a3b8; margin-top: 2px;
                }
                .itinerary-section .itinerary-tab.active .itinerary-tab-desc { color: rgba(255,255,255,0.6); }
                .itinerary-section .itinerary-tab-arrow { color: var(--medi-navy, #274472); opacity: 0.3; flex-shrink: 0; }
                .itinerary-section .itinerary-tab.active .itinerary-tab-arrow { color: #ffffff; opacity: 0.7; }
                .itinerary-section .itinerary-card {
                    background: #ffffff; border-radius: 18px; overflow: hidden;
                    border: 1px solid rgba(39,68,114,0.08);
                    box-shadow: 0 6px 28px rgba(39,68,114,0.06);
                    transition: box-shadow 0.3s ease;
                }
                .itinerary-section .itinerary-card:hover { box-shadow: 0 10px 40px rgba(39,68,114,0.1); }
                .itinerary-section .itinerary-card-img-wrap {
                    position: relative; height: 260px; overflow: hidden;
                }
                .itinerary-section .itinerary-card-img {
                    width: 100%; height: 100%; object-fit: cover; display: block;
                    transition: transform 0.6s ease;
                }
                .itinerary-section .itinerary-card:hover .itinerary-card-img { transform: scale(1.04); }
                .itinerary-section .itinerary-card-img-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(15,28,46,0.45) 0%, transparent 50%);
                }
                .itinerary-section .itinerary-card-badge {
                    position: absolute; bottom: 12px; left: 12px;
                    background: var(--medi-navy, #274472); color: #ffffff;
                    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
                    padding: 5px 12px; border-radius: 6px; text-transform: uppercase;
                }
                .itinerary-section .itinerary-card-body { padding: 28px 28px 24px; }
                .itinerary-section .itinerary-card-title {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: 1.3rem; font-weight: 600; color: var(--medi-navy, #274472);
                    margin: 0 0 10px 0;
                }
                .itinerary-section .itinerary-card-desc {
                    color: #64748b; font-size: 0.9rem; line-height: 1.7; margin: 0 0 20px 0;
                }
                .itinerary-section .itinerary-details-grid {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
                }
                .itinerary-section .itinerary-details-label {
                    font-size: 0.72rem; font-weight: 700; color: var(--medi-navy, #274472);
                    text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px 0;
                }
                .itinerary-section .itinerary-details-list {
                    list-style: none; padding: 0; margin: 0;
                    display: flex; flex-direction: column; gap: 8px;
                }
                .itinerary-section .itinerary-details-list li {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 0.85rem; color: #475569;
                }
                .itinerary-section .itinerary-details-chips {
                    display: flex; flex-wrap: wrap; gap: 6px;
                }
                .itinerary-section .itinerary-details-chip {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: rgba(39,68,114,0.05); border-radius: 20px;
                    padding: 5px 12px; font-size: 0.78rem; font-weight: 500;
                    color: var(--medi-navy, #274472);
                }
                @media (max-width: 991px) {
                    .itinerary-section .itinerary-dashboard { grid-template-columns: 1fr; gap: 20px; }
                    .itinerary-section .itinerary-tabs { flex-direction: row; overflow-x: auto; gap: 8px; }
                    .itinerary-section .itinerary-tab { min-width: 180px; }
                }
                @media (max-width: 600px) {
                    .itinerary-section .itinerary-details-grid { grid-template-columns: 1fr; }
                    .itinerary-section .itinerary-card-img-wrap { height: 200px; }
                }
            `}</style>

            <section className="itinerary-section" style={{ padding: '80px 24px', background: '#ffffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 18px',
                            background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                            color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>Mistake #8</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: 'var(--medi-navy, #274472)',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Disney's Appeal Extends Far Beyond the Ship</h2>
                        <p style={{ color: '#64748b', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                            Luxury travelers often evaluate cruises based solely on onboard amenities. The destinations matter just as much as the onboard experience.
                        </p>
                    </div>

                    <div className="itinerary-dashboard">
                        <div className="itinerary-tabs">
                            {disneyItineraries.map((it, idx) => (
                                <button
                                    key={idx}
                                    className={`itinerary-tab ${selectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedItinerary(idx)}
                                >
                                    <span className="itinerary-tab-num">0{idx + 1}</span>
                                    <div className="itinerary-tab-info">
                                        <span className="itinerary-tab-title">{it.title}</span>
                                    </div>
                                    <ChevronRight size={15} className="itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="itinerary-card">
                            <div className="itinerary-card-img-wrap">
                                <img
                                    src={disneyItineraries[selectedItinerary].image}
                                    alt={disneyItineraries[selectedItinerary].title}
                                    className="itinerary-card-img"
                                />
                                <div className="itinerary-card-img-overlay"></div>
                                <span className="itinerary-card-badge">Featured Itinerary</span>
                            </div>
                            <div className="itinerary-card-body">
                                <h3 className="itinerary-card-title">{disneyItineraries[selectedItinerary].title}</h3>
                                <p className="itinerary-card-desc">{disneyItineraries[selectedItinerary].desc}</p>
                                <div className="itinerary-details-grid">
                                    <div>
                                        <p className="itinerary-details-label">Best For</p>
                                        <ul className="itinerary-details-list">
                                            {disneyItineraries[selectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={13} style={{ color: 'var(--medi-navy, #274472)', flexShrink: 0 }} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="itinerary-details-label">Highlights</p>
                                        <div className="itinerary-details-chips">
                                            {disneyItineraries[selectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="itinerary-details-chip">
                                                    <MapPin size={11} />
                                                    <span>{item}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                8. MISTAKE #9 — ENTERTAINMENT
                   Inline styled, matching heading, tight spacing
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .entertainment-section .entertainment-grid {
                    display: grid; grid-template-columns: 1.1fr 0.9fr;
                    gap: 48px; align-items: center;
                }
                .entertainment-section .entertainment-cards {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
                }
                .entertainment-section .ent-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px; padding: 22px;
                    display: flex; flex-direction: column; gap: 14px;
                    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
                    position: relative; overflow: hidden;
                }
                .entertainment-section .ent-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(147,197,253,0.25);
                    box-shadow: 0 10px 28px rgba(9,14,26,0.35);
                }
                .entertainment-section .ent-card-header {
                    display: flex; justify-content: space-between; align-items: center;
                }
                .entertainment-section .ent-card-act {
                    font-size: 0.7rem; font-weight: 700; color: rgba(255,255,255,0.45);
                    letter-spacing: 0.1em;
                }
                .entertainment-section .ent-card-icon {
                    width: 36px; height: 36px; border-radius: 50%;
                    background: rgba(255,255,255,0.06);
                    display: flex; align-items: center; justify-content: center;
                    color: #cbd5e1; transition: all 0.3s ease;
                }
                .entertainment-section .ent-card:hover .ent-card-icon {
                    background: rgba(147,197,253,0.15); color: #93c5fd;
                }
                .entertainment-section .ent-card-title {
                    font-size: 0.95rem; font-weight: 600; color: #f1f5f9; line-height: 1.4;
                }
                .entertainment-section .ent-quote {
                    position: relative; margin-top: 20px;
                    padding: 20px 24px; background: rgba(255,255,255,0.03);
                    border-left: 3px solid rgba(147,197,253,0.4);
                    border-radius: 0 12px 12px 0;
                }
                .entertainment-section .ent-quote p {
                    font-size: 0.95rem; line-height: 1.75; font-style: italic;
                    color: #e2e8f0; margin: 0;
                }
                @media (max-width: 991px) {
                    .entertainment-section .entertainment-grid { grid-template-columns: 1fr; gap: 36px; }
                }
                @media (max-width: 576px) {
                    .entertainment-section .entertainment-cards { grid-template-columns: 1fr; }
                }
            `}</style>

            <section className="entertainment-section" style={{
                padding: '80px 24px',
                background: 'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 100%)',
                position: 'relative', overflow: 'hidden', color: '#ffffff',
            }}>
                <div style={{
                    position: 'absolute', top: '-10%', right: '10%',
                    width: 450, height: 450, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.2) 0%, transparent 70%)',
                    filter: 'blur(80px)', pointerEvents: 'none',
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-10%', left: '5%',
                    width: 400, height: 400, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.12) 0%, transparent 70%)',
                    filter: 'blur(80px)', pointerEvents: 'none',
                }}></div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '6px 18px', background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px',
                            color: '#e2e8f0', fontSize: '0.78rem', fontWeight: 600,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>
                            <Theater size={14} /> Mistake #9
                        </span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: '#ffffff',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Assuming Entertainment Doesn't Matter</h2>
                        <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                            Luxury travelers sometimes dismiss entertainment as unimportant. Yet Disney's entertainment is consistently regarded as among the best at sea.
                        </p>
                    </div>

                    <div className="entertainment-grid">
                        <div>
                            <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.8, margin: 0 }}>
                                Even travelers who aren't devoted Disney fans are often impressed by the quality. Professional performances rival major theater productions. Immersive storytelling is a hallmark of the Disney brand.
                            </p>
                            <div className="ent-quote">
                                <p>This is entertainment that even non-Disney fans consistently praise — the kind of production value that transforms a cruise into a cultural experience.</p>
                            </div>
                        </div>

                        <div className="entertainment-cards">
                            {[
                                { title: 'Broadway-Quality Productions', act: 'ACT I', icon: Theater },
                                { title: 'Live Music throughout the ship', act: 'ACT II', icon: Music },
                                { title: 'Family Experiences for all generations', act: 'ACT III', icon: Users },
                                { title: 'Immersive Storytelling', act: 'ACT IV', icon: Sparkles }
                            ].map((item, i) => (
                                <div key={i} className="ent-card">
                                    <div className="ent-card-header">
                                        <span className="ent-card-act">{item.act}</span>
                                        <div className="ent-card-icon"><item.icon size={17} /></div>
                                    </div>
                                    <div className="ent-card-title">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION: IMMERSIVE PRODUCTION VALUE ── */}
            <section style={{ padding: '80px 24px', background: 'var(--medi-bg-soft, #e7f3f5)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 18px',
                            background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                            color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>Technical Masterpieces</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: 'var(--medi-navy, #274472)',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Immersive Production Value</h2>
                        <p style={{ color: '#64748b', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                            Disney utilizes "movie-set" quality engineering and cinematic production values that rival high-end theater.
                        </p>
                    </div>
                    <div style={{
                        borderRadius: '16px', overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(39,68,114,0.12)',
                        border: '1px solid rgba(39,68,114,0.08)',
                        aspectRatio: '16/9', backgroundColor: '#0a1120',
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/R5ZxZmd-k-o"
                            title="Disney Immersive Production"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                9. MISTAKE #10 — LUXURY IS PERSONAL
                   Inline styled, fresh layout, matching heading
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .luxury-personal-section .luxury-personal-grid {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
                    max-width: 960px; margin: 48px auto 0;
                }
                .luxury-personal-card {
                    border-radius: 18px; padding: 40px 34px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .luxury-personal-card:hover { transform: translateY(-4px); }
                .luxury-personal-card-icon {
                    width: 52px; height: 52px; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 20px; flex-shrink: 0;
                }
                .luxury-personal-card h3 {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: 1.15rem; font-weight: 600; margin: 0 0 20px 0;
                }
                .luxury-personal-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
                .luxury-personal-card li {
                    display: flex; align-items: center; gap: 12px; font-size: 0.95rem; line-height: 1.6;
                }
                .luxury-personal-quote-box {
                    max-width: 740px; margin: 44px auto 0; text-align: center;
                    padding: 32px 36px; border-radius: 16px;
                    position: relative;
                }
                .luxury-personal-quote-box::before {
                    content: '"'; position: absolute; top: -10px; left: 24px;
                    font-family: Georgia, serif; font-size: 5rem; line-height: 1;
                    color: rgba(147,197,253,0.15); pointer-events: none;
                }
                .luxury-personal-quote-box p {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: 1.12rem; line-height: 1.9; margin: 0;
                    font-style: italic; position: relative; z-index: 1;
                }
                .luxury-personal-quote-box cite {
                    display: block; margin-top: 16px; font-style: normal;
                    font-family: var(--font-body, system-ui, sans-serif);
                    font-size: 0.88rem; letter-spacing: 0.04em; text-transform: uppercase;
                }
                .luxury-personal-cta {
                    display: inline-flex; align-items: center; gap: 10px;
                    margin-top: 40px; padding: 14px 28px; border-radius: 12px;
                    font-family: var(--font-body, system-ui, sans-serif);
                    font-size: 0.95rem; font-weight: 600; text-decoration: none;
                    transition: all 0.3s ease; cursor: pointer; border: none;
                }
                .luxury-personal-cta:hover { transform: translateY(-2px); }
                @media (max-width: 768px) {
                    .luxury-personal-section .luxury-personal-grid { grid-template-columns: 1fr; gap: 20px; }
                    .luxury-personal-card { padding: 30px 24px; }
                    .luxury-personal-quote-box { padding: 24px 20px; }
                }
            `}</style>

            <section className="luxury-personal-section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #1a2a4a 0%, #0f1d35 100%)' }}>
                <div className="luxury-personal-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 18px',
                            background: 'rgba(147,197,253,0.12)', borderRadius: '8px',
                            color: '#93c5fd', fontSize: '0.78rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>Mistake #10</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: '#ffffff',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Forgetting That Luxury Is Personal</h2>
                        <p style={{
                            color: '#94a3b8', maxWidth: '640px', margin: '0 auto',
                            lineHeight: 1.8, fontSize: '1rem'
                        }}>
                            The biggest misunderstanding may be assuming luxury means the same thing for everyone.
                        </p>
                    </div>

                    {/* Two-Column Cards */}
                    <div className="luxury-personal-grid">
                        {/* Column A — Quiet Luxury */}
                        <div className="luxury-personal-card" style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}>
                            <div className="luxury-personal-card-icon" style={{
                                background: 'rgba(147,197,253,0.1)',
                                color: '#93c5fd'
                            }}><Moon size={24} /></div>
                            <h3 style={{ color: '#e2e8f0' }}>
                                For some, luxury means:
                            </h3>
                            <ul>
                                {['Quiet ships', 'Fine dining', 'Adults-only environments', 'Uninterrupted relaxation'].map((item, i) => (
                                    <li key={i} style={{ color: '#94a3b8' }}>
                                        <span style={{
                                            width: '7px', height: '7px', borderRadius: '50%',
                                            background: '#475569', flexShrink: 0
                                        }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column B — Shared Luxury */}
                        <div className="luxury-personal-card" style={{
                            background: 'linear-gradient(135deg, #274472 0%, #1a3360 100%)',
                            border: '1px solid rgba(147,197,253,0.18)',
                            boxShadow: '0 12px 40px rgba(39,68,114,0.45)',
                        }}>
                            <div className="luxury-personal-card-icon" style={{
                                background: 'rgba(255,255,255,0.15)',
                                color: '#ffffff'
                            }}><Heart size={24} /></div>
                            <h3 style={{ color: '#ffffff' }}>
                                For others, luxury means:
                            </h3>
                            <ul>
                                {['Family time', 'Shared experiences', 'Exceptional service', 'Stress-free planning', 'Memorable moments'].map((item, i) => (
                                    <li key={i} style={{ color: '#e2e8f0' }}>
                                        <CheckCircle size={16} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Quote + CTA */}
                    <div className="luxury-personal-quote-box" style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(147,197,253,0.12)',
                    }}>
                        <p style={{ color: '#e2e8f0' }}>
                            Disney Cruise Line excels at delivering the second type of luxury.
                            And for many families, that's the luxury that matters most.
                        </p>
                        <cite style={{ color: '#93c5fd' }}>
                            — Angela Hughes, Disney Cruise Line Certified Advisor
                        </cite>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button
                            className="luxury-personal-cta"
                            style={{
                                background: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
                                color: '#0f1d35',
                                boxShadow: '0 6px 20px rgba(96,165,250,0.3)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(96,165,250,0.45)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 20px rgba(96,165,250,0.3)'}
                            onClick={() => {
                                const el = document.querySelector('.medi-cta-main-section');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Heart size={18} />
                            Let's Design Your Perfect Cruise
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                10. ALL 10 MISTAKES SLIDER (quick reference)
            ══════════════════════════════════════════════════════ */}
            {/* <section
                className="medi-mistakes-slider-section"
                style={{ background: 'var(--medi-bg-dark2)' }}
                onMouseEnter={() => setIsSliderHovered(true)}
                onMouseLeave={() => setIsSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">QUICK REFERENCE</span>
                        <h2 className="medi-mistakes-slider-title">
                            All 10 Mistakes — At a Glance
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setActiveMistake(p => (p === 0 ? disneyMistakes.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {disneyMistakes.map((m, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${activeMistake === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">{m.num}</span>
                                        <h3 className="medi-mistake-card-title">{m.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{m.desc}</p>
                                        {m.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {m.bullets.map((b, bi) => (
                                                    <li key={bi} className="medi-mistake-card-bullet-item">
                                                        <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {m.note && (
                                            <p style={{ color: '#93c5fd', fontSize: '0.9rem', marginTop: '14px', fontStyle: 'italic', lineHeight: '1.6' }}>
                                                {m.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setActiveMistake(p => (p === disneyMistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {disneyMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${activeMistake === idx ? 'active' : ''}`}
                                onClick={() => setActiveMistake(idx)}
                                aria-label={`Mistake ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section> */}


            {/* ══════════════════════════════════════════════════════
                11. WHO SHOULD / SHOULDN'T — audience section
                   Inline styled, tight spacing, matching heading
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .audience-section .audience-grid {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 28px;
                    max-width: 960px; margin: 0 auto;
                }
                .audience-card {
                    border-radius: 18px; padding: 36px 32px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .audience-card:hover { transform: translateY(-4px); }
                .audience-card-header {
                    display: flex; align-items: center; gap: 12px;
                    margin-bottom: 24px;
                }
                .audience-card-badge {
                    width: 40px; height: 40px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .audience-card-title {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: 1.1rem; font-weight: 600; margin: 0;
                }
                .audience-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
                .audience-list li {
                    display: flex; align-items: center; gap: 14px; font-size: 0.95rem; line-height: 1.6;
                }
                .audience-list-icon {
                    width: 34px; height: 34px; border-radius: 9px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .audience-alt-box {
                    margin-top: 24px; padding: 18px 20px; border-radius: 12px;
                    font-size: 0.92rem; line-height: 1.7;
                }
                @media (max-width: 768px) {
                    .audience-section .audience-grid { grid-template-columns: 1fr; gap: 20px; }
                    .audience-card { padding: 28px 22px; }
                }
            `}</style>

            <section className="audience-section" style={{ padding: '80px 0', background: 'var(--medi-bg-white, #ffffff)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 18px',
                            background: 'rgba(39,68,114,0.08)', borderRadius: '8px',
                            color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>Audience Guide</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: 'var(--medi-navy, #274472)',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Who Should Consider Disney Cruise Line?</h2>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                            A clear breakdown to help you decide if Disney Cruise Line matches your travel style.
                        </p>
                    </div>

                    {/* Two-Column Cards */}
                    <div className="audience-grid">
                        {/* Best Choice */}
                        <div className="audience-card" style={{
                            background: '#ffffff',
                            border: '1px solid rgba(39,68,114,0.08)',
                            boxShadow: '0 4px 24px rgba(39,68,114,0.06)',
                        }}>
                            <div className="audience-card-header">
                                <div className="audience-card-badge" style={{
                                    background: 'linear-gradient(135deg, #274472, #1a3360)',
                                    color: '#ffffff',
                                }}><CheckCircle size={20} /></div>
                                <h3 className="audience-card-title" style={{ color: 'var(--medi-navy, #274472)' }}>
                                    Best Choice If You Are:
                                </h3>
                            </div>
                            <ul className="audience-list">
                                {[
                                    { icon: Baby, text: 'Traveling with children' },
                                    { icon: Heart, text: 'Traveling with grandchildren' },
                                    { icon: Users, text: 'Planning a multigenerational vacation' },
                                    { icon: Sparkles, text: 'Celebrating a milestone' },
                                    { icon: Crown, text: 'Seeking premium family experiences' },
                                    { icon: Star, text: 'Looking for exceptional service' },
                                    { icon: CheckCircle, text: 'Wanting stress-free family travel' },
                                ].map(({ icon: Icon, text }, i) => (
                                    <li key={i}>
                                        <div className="audience-list-icon" style={{
                                            background: 'rgba(39,68,114,0.07)',
                                            color: 'var(--medi-navy, #274472)',
                                        }}><Icon size={17} /></div>
                                        <span style={{ color: '#334155' }}>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* May Prefer Other Lines */}
                        <div className="audience-card" style={{
                            background: '#ffffff',
                            border: '1px solid rgba(39,68,114,0.08)',
                            boxShadow: '0 4px 24px rgba(39,68,114,0.06)',
                        }}>
                            <div className="audience-card-header">
                                <div className="audience-card-badge" style={{
                                    background: 'rgba(39,68,114,0.07)',
                                    color: '#64748b',
                                }}><Compass size={20} /></div>
                                <h3 className="audience-card-title" style={{ color: '#475569' }}>
                                    May Prefer Other Lines If You:
                                </h3>
                            </div>
                            <ul className="audience-list">
                                {[
                                    { icon: Moon, text: 'Prefer adults-only environments' },
                                    { icon: Globe, text: 'Prioritize destination immersion over entertainment' },
                                    { icon: Gem, text: 'Want ultra-luxury inclusions' },
                                    { icon: Award, text: 'Seek highly formal luxury experiences' },
                                    { icon: Compass, text: 'Rarely travel with family' },
                                ].map(({ icon: Icon, text }, i) => (
                                    <li key={i}>
                                        <div className="audience-list-icon" style={{
                                            background: 'rgba(100,116,139,0.08)',
                                            color: '#64748b',
                                        }}><Icon size={17} /></div>
                                        <span style={{ color: '#475569' }}>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="audience-alt-box" style={{
                                background: 'rgba(39,68,114,0.04)',
                                border: '1px solid rgba(39,68,114,0.08)',
                                color: '#475569',
                            }}>
                                In these cases, cruise lines such as <strong style={{ color: 'var(--medi-navy, #274472)' }}>Viking, Regent Seven Seas, Silversea, Seabourn,</strong> or <strong style={{ color: 'var(--medi-navy, #274472)' }}>Explora Journeys</strong> may align better with your preferences.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                LUXURY IS A COLLECTION OF MOMENTS
                   Inline styled, tight spacing, matching heading
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .moments-section .moments-grid {
                    display: grid; grid-template-columns: repeat(12, 1fr);
                    gap: 20px; max-width: 1200px; margin: 0 auto;
                }
                .moments-card {
                    position: relative; border-radius: 16px; overflow: hidden;
                    background-color: #0a1120; cursor: pointer;
                    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease;
                }
                .moments-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(10,17,32,0.35); }
                .moments-card-wide { grid-column: span 7; }
                .moments-card-narrow { grid-column: span 5; }
                .moments-card-img {
                    width: 100%; height: 100%; object-fit: cover; display: block;
                    transition: transform 1s ease;
                }
                .moments-card:hover .moments-card-img { transform: scale(1.06); }
                .moments-card-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(10,17,32,0.92) 0%, rgba(10,17,32,0.5) 30%, rgba(10,17,32,0.1) 55%, transparent 100%);
                    display: flex; flex-direction: column; justify-content: flex-end;
                    padding: 32px; z-index: 2;
                }
                .moments-card-tag {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 0.14em; color: #60a5fa; margin-bottom: 10px;
                }
                .moments-card-tag-dot {
                    width: 5px; height: 5px; border-radius: 50%; background: #3b82f6;
                }
                .moments-card-title {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: clamp(20px, 2.2vw, 28px); font-weight: 700;
                    color: #ffffff; line-height: 1.15; margin: 0;
                    letter-spacing: -0.01em; text-align: left;
                    text-shadow: 0 2px 12px rgba(0,0,0,0.6);
                }
                .moments-card-bar {
                    width: 32px; height: 2px; background: #3b82f6;
                    margin-top: 14px; transition: width 0.4s ease;
                }
                .moments-card:hover .moments-card-bar { width: 56px; }
                @media (max-width: 1024px) {
                    .moments-card-wide, .moments-card-narrow { grid-column: span 12; }
                }
            `}</style>

            <section className="moments-section" style={{ padding: '80px 24px', background: 'var(--medi-bg-soft, #e7f3f5)', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '6px 18px', background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                        color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px',
                        fontFamily: 'var(--font-body, system-ui, sans-serif)'
                    }}>
                        <Sparkles size={14} /> The Visual Narrative
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display, Georgia, serif)',
                        fontSize: 'clamp(26px, 4.5vw, 40px)',
                        fontWeight: 600, color: 'var(--medi-navy, #274472)',
                        letterSpacing: '-0.01em',
                        margin: '0 0 14px 0', lineHeight: 1.2
                    }}>Luxury is a Collection of Moments</h2>
                    <p style={{ color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                        Every detail tells a story — from the destinations we explore to the spaces we inhabit.
                    </p>
                </div>

                <div className="moments-grid">
                    <div className="moments-card moments-card-wide" style={{ height: '420px' }}>
                        <img src={family_in_rome} alt="Global Exploration" className="moments-card-img" />
                        <div className="moments-card-overlay">
                            <div className="moments-card-tag"><span className="moments-card-tag-dot"></span>Global Heritage</div>
                            <h3 className="moments-card-title">World-Class Destination<br/>Immersion</h3>
                            <div className="moments-card-bar"></div>
                        </div>
                    </div>
                    <div className="moments-card moments-card-narrow" style={{ height: '420px' }}>
                        <img src={disneymoments2} alt="Ship Architecture" className="moments-card-img" />
                        <div className="moments-card-overlay">
                            <div className="moments-card-tag"><span className="moments-card-tag-dot"></span>Nautical Elegance</div>
                            <h3 className="moments-card-title">Award-Winning Ship<br/>Architecture</h3>
                            <div className="moments-card-bar"></div>
                        </div>
                    </div>
                    <div className="moments-card moments-card-narrow" style={{ height: '420px' }}>
                        <img src={disneymoments} alt="Pre-Cruise Magic" className="moments-card-img" />
                        <div className="moments-card-overlay">
                            <div className="moments-card-tag"><span className="moments-card-tag-dot"></span>Seamless Magic</div>
                            <h3 className="moments-card-title">Integrated Land & Sea<br/>Experiences</h3>
                            <div className="moments-card-bar"></div>
                        </div>
                    </div>
                    <div className="moments-card moments-card-wide" style={{ height: '420px' }}>
                        <img src={family_water_park} alt="Family Fun" className="moments-card-img" />
                        <div className="moments-card-overlay">
                            <div className="moments-card-tag"><span className="moments-card-tag-dot"></span>Pure Joy</div>
                            <h3 className="moments-card-title">The Highest Standard of<br/>Recreation</h3>
                            <div className="moments-card-bar"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                12. COMPARISON TABLE — inline styled, matching heading
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .compare-section .compare-table {
                    border-radius: 16px; overflow: hidden;
                    box-shadow: 0 8px 40px rgba(39,68,114,0.08);
                    border: 1px solid rgba(39,68,114,0.08);
                }
                .compare-section .compare-header {
                    display: grid; grid-template-columns: 1.4fr 1fr 1fr;
                    padding: 16px 28px;
                }
                .compare-section .compare-row {
                    display: grid; grid-template-columns: 1.4fr 1fr 1fr;
                    padding: 14px 28px; align-items: center;
                    transition: background 0.2s ease;
                }
                .compare-section .compare-row:hover {
                    background: rgba(39,68,114,0.04) !important;
                }
                .compare-section .compare-badge {
                    display: inline-block; padding: 5px 16px; border-radius: 20px;
                    font-size: 0.82rem; font-weight: 600; text-align: center;
                }
                .compare-section .compare-divider {
                    width: 1px; height: 28px; background: rgba(39,68,114,0.08);
                    display: inline-block; vertical-align: middle;
                }
                .compare-section .compare-summary {
                    display: flex; align-items: center; gap: 16px; justify-content: center;
                    margin-top: 36px; padding: 20px 28px; border-radius: 12px;
                    background: rgba(39,68,114,0.04); border: 1px solid rgba(39,68,114,0.06);
                }
                @media (max-width: 768px) {
                    .compare-section .compare-header,
                    .compare-section .compare-row { grid-template-columns: 1fr; gap: 8px; padding: 14px 18px; }
                    .compare-section .compare-header span:not(:first-child),
                    .compare-section .compare-row .compare-badge { text-align: left !important; }
                }
            `}</style>

            <section className="compare-section" style={{ padding: '80px 24px', background: 'var(--medi-bg-white, #ffffff)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 18px',
                            background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                            color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>Side-by-Side</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: 'var(--medi-navy, #274472)',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Disney vs Traditional Luxury Cruise Lines</h2>
                        <p style={{ color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                            A direct comparison to help you understand where Disney truly excels.
                        </p>
                    </div>

                    <div className="compare-table">
                        <div className="compare-header" style={{ background: 'var(--medi-navy, #274472)' }}>
                            <span style={{ color: '#93c5fd', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Category</span>
                            <span style={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Disney Cruise Line</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Traditional Luxury</span>
                        </div>

                        {comparisonRows.map((row, i) => (
                            <div key={i} className="compare-row" style={{
                                background: i % 2 === 0 ? '#ffffff' : 'rgba(231,243,245,0.4)',
                                borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(39,68,114,0.05)' : 'none',
                            }}>
                                <span style={{ color: '#1e293b', fontWeight: 500, fontSize: '0.93rem' }}>{row.category}</span>
                                <div style={{ textAlign: 'center' }}>
                                    <span className="compare-badge" style={{
                                        background: row.disneyTop ? 'rgba(16,185,129,0.1)' : 'rgba(39,68,114,0.07)',
                                        color: row.disneyTop ? '#059669' : 'var(--medi-navy, #274472)',
                                    }}>{row.disney}</span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <span className="compare-badge" style={{
                                        background: 'rgba(100,116,139,0.07)', color: '#64748b',
                                    }}>{row.luxury}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="compare-summary">
                        <CheckCircle size={20} style={{ color: '#059669', flexShrink: 0 }} />
                        <span style={{ color: '#475569', fontSize: '0.93rem', lineHeight: 1.7 }}>
                            Disney leads in <strong style={{ color: 'var(--medi-navy, #274472)' }}>family-focused luxury</strong>, while traditional lines excel in <strong style={{ color: 'var(--medi-navy, #274472)' }}>adult-only and cultural enrichment</strong> categories.
                        </span>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                THE VISUAL STANDARD OF LUXURY — Gallery
                   Inline styled, matching heading, tight spacing
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .gallery-section .gallery-grid {
                    display: grid; grid-template-columns: repeat(6, 1fr);
                    gap: 16px; max-width: 1200px; margin: 0 auto;
                }
                .gallery-section .gallery-item {
                    position: relative; overflow: hidden;
                    border-radius: 14px; background-color: #0f1c2e;
                    box-shadow: 0 6px 24px rgba(0,0,0,0.07);
                    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease;
                }
                .gallery-section .gallery-item:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 36px rgba(39,68,114,0.12);
                }
                .gallery-section .gallery-img {
                    width: 100%; height: 100%; object-fit: cover; display: block;
                    transition: transform 0.8s ease, opacity 0.4s ease;
                    opacity: 0.92;
                }
                .gallery-section .gallery-item:hover .gallery-img {
                    transform: scale(1.06); opacity: 1;
                }
                .gallery-section .gallery-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 55%);
                    display: flex; flex-direction: column; justify-content: flex-end;
                    padding: 20px; opacity: 0; transition: opacity 0.4s ease;
                }
                .gallery-section .gallery-item:hover .gallery-overlay { opacity: 1; }
                .gallery-section .gallery-label {
                    color: #93c5fd; font-size: 0.65rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px;
                }
                .gallery-section .gallery-caption {
                    color: #ffffff; font-size: 0.92rem; font-weight: 600;
                }
                .gallery-section .g-1 { grid-column: span 3; }
                .gallery-section .g-2 { grid-column: span 3; }
                .gallery-section .g-3 { grid-column: span 2; }
                .gallery-section .g-4 { grid-column: span 2; }
                .gallery-section .g-5 { grid-column: span 2; }
                @media (max-width: 991px) {
                    .gallery-section .gallery-grid { grid-template-columns: repeat(2, 1fr); }
                    .gallery-section .gallery-item { grid-column: span 1 !important; height: 260px; }
                    .gallery-section .g-5 { grid-column: span 2 !important; }
                }
                @media (max-width: 600px) {
                    .gallery-section .gallery-grid { grid-template-columns: 1fr; }
                    .gallery-section .gallery-item { grid-column: span 1 !important; height: 280px; }
                }
            `}</style>

            <section className="gallery-section" style={{ padding: '80px 24px', background: '#f8fafc' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{
                        display: 'inline-block', padding: '6px 18px',
                        background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                        color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px',
                        fontFamily: 'var(--font-body, system-ui, sans-serif)'
                    }}>Visual Portfolio</span>
                    <h2 style={{
                        fontFamily: 'var(--font-display, Georgia, serif)',
                        fontSize: 'clamp(26px, 4.5vw, 40px)',
                        fontWeight: 600, color: 'var(--medi-navy, #274472)',
                        letterSpacing: '-0.01em',
                        margin: '0 0 14px 0', lineHeight: 1.2
                    }}>The Refined Aesthetic of Disney</h2>
                    <p style={{ color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                        A glimpse into the design, dining, and atmosphere that define the Disney experience.
                    </p>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item g-1" style={{ height: '320px' }}>
                        <img src={disneyAlaska} alt="Disney Luxury Lounge" className="gallery-img" />
                        <div className="gallery-overlay">
                            <span className="gallery-label">Interior</span>
                            <span className="gallery-caption">Concierge Lounge Space</span>
                        </div>
                    </div>
                    <div className="gallery-item g-2" style={{ height: '320px' }}>
                        <img src={disneyChristmas} alt="Epicurean Dining" className="gallery-img" />
                        <div className="gallery-overlay">
                            <span className="gallery-label">Dining</span>
                            <span className="gallery-caption">Epicurean Detail</span>
                        </div>
                    </div>
                    <div className="gallery-item g-3" style={{ height: '280px' }}>
                        <img src={disneyCharacters} alt="Private Balcony" className="gallery-img" />
                        <div className="gallery-overlay">
                            <span className="gallery-label">Stateroom</span>
                            <span className="gallery-caption">Ocean View Verandah</span>
                        </div>
                    </div>
                    <div className="gallery-item g-4" style={{ height: '280px' }}>
                        <img src={disneyPalo} alt="Adult Retreat" className="gallery-img" />
                        <div className="gallery-overlay">
                            <span className="gallery-label">Retreat</span>
                            <span className="gallery-caption">Quiet Cove Pool</span>
                        </div>
                    </div>
                    <div className="gallery-item g-5" style={{ height: '280px' }}>
                        <img src={disneylive} alt="Nautical Interior" className="gallery-img" />
                        <div className="gallery-overlay">
                            <span className="gallery-label">Design</span>
                            <span className="gallery-caption">Nautical Details</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                13. ANGELA HUGHES AUTHORITY BOX
                   Inline styled, matching heading, tight spacing
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .authority-section .authority-wrapper {
                    display: flex; background: #ffffff; border-radius: 20px;
                    border: 1px solid rgba(39,68,114,0.06);
                    box-shadow: 0 20px 60px rgba(39,68,114,0.06);
                    overflow: hidden; position: relative;
                }
                .authority-section .authority-wrapper::before {
                    content: ''; position: absolute; top: 0; left: 0;
                    width: 6px; height: 100%;
                    background: linear-gradient(to bottom, var(--medi-navy, #274472), #93c5fd);
                }
                .authority-section .authority-profile {
                    flex: 0 0 320px; padding: 40px 28px;
                    background: linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 100%);
                    display: flex; flex-direction: column; align-items: center;
                    justify-content: center; text-align: center; color: #ffffff;
                    position: relative;
                }
                .authority-section .authority-avatar {
                    width: 90px; height: 90px; border-radius: 50%;
                    border: 2px dashed rgba(255,255,255,0.2);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 20px; overflow: hidden;
                }
                .authority-section .authority-avatar img {
                    width: 82px; height: 82px; border-radius: 50%;
                    object-fit: cover; border: 2px solid rgba(255,255,255,0.15);
                }
                .authority-section .authority-eyebrow-inner {
                    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em;
                    color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 10px;
                }
                .authority-section .authority-name {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: 1.4rem; font-weight: 600; margin: 0 0 10px 0;
                }
                .authority-section .authority-role {
                    display: inline-block; padding: 5px 16px; border-radius: 20px;
                    background: rgba(147,197,253,0.12); border: 1px solid rgba(147,197,253,0.2);
                    color: #93c5fd; font-size: 0.78rem; font-weight: 600; margin-bottom: 16px;
                }
                .authority-section .authority-meta {
                    font-size: 0.72rem; color: rgba(255,255,255,0.4);
                    letter-spacing: 0.06em;
                }
                .authority-section .authority-credentials {
                    flex: 1; padding: 36px 32px; overflow-y: auto;
                    max-height: 520px;
                }
                .authority-section .authority-cred-list {
                    display: flex; flex-direction: column; gap: 10px;
                }
                .authority-section .authority-cred-item {
                    display: flex; align-items: center; gap: 14px;
                    padding: 12px 16px; border-radius: 10px;
                    border: 1px solid rgba(39,68,114,0.05);
                    background: rgba(39,68,114,0.02);
                    transition: all 0.25s ease;
                }
                .authority-section .authority-cred-item:hover {
                    background: rgba(39,68,114,0.05);
                    border-color: rgba(39,68,114,0.1);
                    transform: translateX(3px);
                }
                .authority-section .authority-cred-icon {
                    width: 34px; height: 34px; border-radius: 9px;
                    background: rgba(39,68,114,0.06);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--medi-navy, #274472); flex-shrink: 0;
                }
                .authority-section .authority-cred-info { flex: 1; min-width: 0; }
                .authority-section .authority-cred-cat {
                    font-size: 0.65rem; font-weight: 700; color: var(--medi-navy, #274472);
                    text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.6;
                }
                .authority-section .authority-cred-text {
                    font-size: 0.88rem; font-weight: 500; color: #1e293b; line-height: 1.4; margin: 2px 0 0;
                }
                @media (max-width: 991px) {
                    .authority-section .authority-wrapper { flex-direction: column; }
                    .authority-section .authority-profile { flex: none; padding: 36px 24px; }
                    .authority-section .authority-credentials { max-height: none; }
                }
                @media (max-width: 600px) {
                    .authority-section .authority-cred-item { padding: 10px 12px; }
                }
            `}</style>

            <section className="authority-section" style={{ padding: '80px 24px', background: 'var(--medi-bg-soft, #e7f3f5)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 18px',
                            background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                            color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)'
                        }}>Expert Guidance</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, Georgia, serif)',
                            fontSize: 'clamp(26px, 4.5vw, 40px)',
                            fontWeight: 600, color: 'var(--medi-navy, #274472)',
                            letterSpacing: '-0.01em',
                            margin: '0 0 14px 0', lineHeight: 1.2
                        }}>Meet Angela Hughes</h2>
                        <p style={{ color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.98rem' }}>
                            Four decades of luxury travel expertise, dedicated to crafting extraordinary journeys.
                        </p>
                    </div>

                    <div className="authority-wrapper">
                        <div className="authority-profile">
                            <div className="authority-avatar">
                                <img src={Profile_AH} alt="Angela Hughes" />
                            </div>
                            <span className="authority-eyebrow-inner">Elite Advisor Accreditation</span>
                            <h3 className="authority-name">Angela Hughes</h3>
                            <div className="authority-role">CEO of Trips & Ships Luxury Travel</div>
                            <span className="authority-meta">Est. 1986 | Global Authority</span>
                        </div>

                        <div className="authority-credentials">
                            <div className="authority-cred-list">
                                {[
                                    { text: 'Founder of Luxury Travel University', icon: GraduationCap, cat: 'Education' },
                                    { text: '40+ years luxury travel expertise', icon: Clock, cat: 'Experience' },
                                    { text: 'Traveled to 121+ countries', icon: Globe, cat: 'Exploration' },
                                    { text: 'Global luxury travel speaker', icon: Mic, cat: 'Speaking' },
                                    { text: 'Weekly travel columnist', icon: FileText, cat: 'Media' },
                                    { text: 'Travel Leaders Network Advisory Board', icon: Users, cat: 'Leadership' },
                                    { text: '2024 Luxury Travel Influencer of the Year', icon: Award, cat: 'Honor' },
                                    { text: 'Most Influential Women in Travel 2026', icon: Crown, cat: 'Prestige' },
                                    { text: 'Featured in global travel publications', icon: Sparkles, cat: 'Recognition' },
                                    { text: 'Luxury cruise & expedition specialist', icon: Ship, cat: 'Specialty' },
                                ].map((item, idx) => (
                                    <div key={idx} className="authority-cred-item">
                                        <div className="authority-cred-icon"><item.icon size={16} /></div>
                                        <div className="authority-cred-info">
                                            <span className="authority-cred-cat">{item.cat}</span>
                                            <p className="authority-cred-text">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                14. FINAL THOUGHTS — inline styled, matching heading
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .final-section .final-grid {
                    display: grid; grid-template-columns: 0.95fr 1.05fr;
                    gap: 48px; align-items: center;
                }
                .final-section .final-quote-card {
                    background: linear-gradient(135deg, var(--medi-navy, #274472) 0%, #1a3360 100%);
                    padding: 44px 36px; border-radius: 20px; color: #ffffff;
                    box-shadow: 0 16px 40px rgba(39,68,114,0.18);
                    position: relative; overflow: hidden;
                    display: flex; flex-direction: column; gap: 20px;
                    border: 1px solid rgba(255,255,255,0.06);
                }
                .final-section .final-quote-card::before {
                    content: ''; position: absolute; top: -40px; right: -40px;
                    width: 120px; height: 120px; border-radius: 50%;
                    background: rgba(255,255,255,0.03); pointer-events: none;
                }
                .final-section .final-quote-icon {
                    width: 52px; height: 52px; border-radius: 14px;
                    background: rgba(255,255,255,0.08);
                    display: flex; align-items: center; justify-content: center;
                    color: #ffffff; border: 1px solid rgba(255,255,255,0.08);
                }
                .final-section .final-quote-text {
                    font-family: var(--font-display, Georgia, serif);
                    font-size: 1.5rem; line-height: 1.5; font-weight: 500;
                    font-style: italic; color: #ffffff; margin: 0;
                }
                .final-section .final-quote-divider {
                    width: 40px; height: 2px; background: rgba(255,255,255,0.18);
                }
                .final-section .final-quote-sub {
                    font-size: 0.88rem; line-height: 1.6; color: rgba(255,255,255,0.8);
                    font-weight: 600; margin: 0; text-transform: uppercase; letter-spacing: 0.06em;
                }
                .final-section .final-content { display: flex; flex-direction: column; gap: 20px; }
                .final-section .final-text {
                    font-size: 1rem; line-height: 1.8; color: #475569; margin: 0;
                }
                @media (max-width: 991px) {
                    .final-section .final-grid { grid-template-columns: 1fr; gap: 36px; }
                }
            `}</style>

            <section className="final-section" style={{ padding: '80px 24px', background: 'linear-gradient(180deg, var(--medi-bg-soft, #e7f3f5) 0%, #ffffff 100%)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="final-grid">
                        <div className="final-quote-card">
                            <div className="final-quote-icon"><Heart size={24} /></div>
                            <p className="final-quote-text">"A vacation where every generation genuinely enjoys the experience."</p>
                            <div className="final-quote-divider"></div>
                            <p className="final-quote-sub">And for many families, that's the ultimate luxury.</p>
                        </div>

                        <div className="final-content">
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                padding: '6px 18px', background: 'rgba(39,68,114,0.06)',
                                borderRadius: '8px', color: 'var(--medi-navy, #274472)',
                                fontSize: '0.78rem', fontWeight: 700,
                                letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'flex-start',
                                fontFamily: 'var(--font-body, system-ui, sans-serif)'
                            }}>
                                <Compass size={14} /> Final Thoughts
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display, Georgia, serif)',
                                fontSize: 'clamp(26px, 4.5vw, 40px)',
                                fontWeight: 600, color: 'var(--medi-navy, #274472)',
                                letterSpacing: '-0.01em',
                                margin: 0, lineHeight: 1.2
                            }}>Disney Isn't Trying to Be a Traditional Luxury Cruise Line</h2>
                            <p className="final-text">
                                Disney Cruise Line isn't trying to compete directly with ultra-luxury cruise brands. Instead, it has created something different — a premium cruise experience built around family connection, exceptional service, immersive entertainment, and multigenerational travel.
                            </p>
                            <p className="final-text">
                                For travelers seeking adults-only sophistication, there are excellent alternatives. But for grandparents, parents, children, and grandchildren who want to travel together without sacrificing quality, Disney Cruise Line often delivers something many luxury products cannot:
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                15. FAQ SECTION
            ══════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {disneyFaqs.map((faq, i) => (
                            <div
                                key={i}
                                className="medi-faq-individual-item"
                                onClick={() => toggleFaq(i)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{activeFaq === i ? '−' : '+'}</span>
                                </div>
                                {activeFaq === i && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                15b. RELATED LINKS SECTION — inline styled
            ══════════════════════════════════════════════════════ */}
            <style>{`
                .related-section .related-grid {
                    display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 14px; text-align: left;
                }
                .related-section .related-card {
                    display: flex; align-items: center; gap: 14px;
                    background: #ffffff; border: 1px solid rgba(39,68,114,0.06);
                    border-radius: 14px; padding: 18px 20px;
                    text-decoration: none; color: #1e293b;
                    transition: all 0.3s ease;
                }
                .related-section .related-card:hover {
                    border-color: var(--medi-navy, #274472);
                    box-shadow: 0 6px 20px rgba(39,68,114,0.08);
                    transform: translateY(-2px);
                }
                .related-section .related-card-icon {
                    width: 40px; height: 40px; border-radius: 10px;
                    background: rgba(39,68,114,0.06);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--medi-navy, #274472); flex-shrink: 0;
                    transition: all 0.3s ease;
                }
                .related-section .related-card:hover .related-card-icon {
                    background: var(--medi-navy, #274472); color: #ffffff;
                }
                .related-section .related-card-text {
                    flex: 1; font-size: 0.92rem; font-weight: 500; line-height: 1.4;
                }
                .related-section .related-card-arrow {
                    color: var(--medi-navy, #274472); opacity: 0.3;
                    transition: all 0.3s ease; flex-shrink: 0;
                }
                .related-section .related-card:hover .related-card-arrow {
                    opacity: 1; transform: translateX(3px);
                }
                @media (max-width: 768px) {
                    .related-section .related-grid { grid-template-columns: 1fr; gap: 10px; }
                }
            `}</style>

            <section className="related-section" style={{ padding: '80px 24px', background: '#eef2f8', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <span style={{
                        display: 'inline-block', padding: '6px 18px',
                        background: 'rgba(39,68,114,0.06)', borderRadius: '8px',
                        color: 'var(--medi-navy, #274472)', fontSize: '0.78rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px',
                        fontFamily: 'var(--font-body, system-ui, sans-serif)'
                    }}>Related Resources</span>
                    <h2 style={{
                        fontFamily: 'var(--font-display, Georgia, serif)',
                        fontSize: 'clamp(26px, 4.5vw, 40px)',
                        fontWeight: 600, color: 'var(--medi-navy, #274472)',
                        letterSpacing: '-0.01em',
                        margin: '0 0 14px 0', lineHeight: 1.2
                    }}>Explore More Disney Cruise Resources</h2>
                    <p style={{ color: '#64748b', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7, fontSize: '0.98rem' }}>
                        Dive deeper into expert insights and comparisons for your Disney cruise planning.
                    </p>

                    <div className="related-grid">
                        {[
                            { to: '/is-disney-cruise-line-worth-the-money', icon: Star, text: 'Is Disney Cruise Line Worth the Money?' },
                            { to: '/is-disney-concierge-worth-it', icon: Crown, text: 'Is Disney Concierge Worth It?' },
                            { to: '/disney-cruise-for-adults-without-kids', icon: Users, text: 'Disney Cruise for Adults Without Kids' },
                            { to: '/best-disney-cruise-ship-for-adults', icon: Ship, text: 'Best Disney Cruise Ship for Adults' },
                            { to: '/disney-concierge-benefits-explained', icon: Gem, text: 'Disney Concierge Benefits Explained' },
                            { to: '/disney-cruise-dining-guide', icon: Utensils, text: 'Disney Cruise Dining Guide' },
                        ].map((item, i) => (
                            <Link key={i} to={item.to} className="related-card">
                                <div className="related-card-icon"><item.icon size={18} /></div>
                                <span className="related-card-text">{item.text}</span>
                                <ArrowRight className="related-card-arrow" size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                16. CTA SECTION — inline styled, matching heading
            ══════════════════════════════════════════════════════ */}
            <section style={{
                padding: '80px 24px',
                background: 'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 50%, #274472 100%)',
                position: 'relative', overflow: 'hidden', color: '#ffffff', textAlign: 'center',
            }}>
                <div style={{
                    position: 'absolute', top: '-20%', right: '-10%',
                    width: 500, height: 500, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147,197,253,0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)', pointerEvents: 'none',
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-20%', left: '-5%',
                    width: 400, height: 400, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147,197,253,0.05) 0%, transparent 70%)',
                    filter: 'blur(60px)', pointerEvents: 'none',
                }}></div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display, Georgia, serif)',
                        fontSize: 'clamp(26px, 4.5vw, 38px)',
                        fontWeight: 600, color: '#ffffff',
                        letterSpacing: '-0.01em',
                        margin: '0 0 14px 0', lineHeight: 1.2
                    }}>Ready to Plan Your Disney Cruise Experience?</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, margin: '0 auto 12px', maxWidth: '640px' }}>
                        With over four decades of luxury travel expertise, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal Disney Cruise experience for their family.
                    </p>

                    <div style={{
                        display: 'inline-flex', flexWrap: 'wrap', gap: 8,
                        justifyContent: 'center', margin: '24px auto',
                        padding: '20px 28px', borderRadius: '14px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        <span style={{ width: '100%', fontSize: '0.78rem', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                            Whether you are considering:
                        </span>
                        {[
                            'Disney Concierge Level suites',
                            'Alaska family voyages',
                            'Mediterranean Disney cruises',
                            'Multigenerational vacation planning',
                            'First-time Disney Cruise experiences'
                        ].map((item, idx) => (
                            <span key={idx} style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                padding: '6px 14px', borderRadius: '20px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                fontSize: '0.82rem', color: '#e2e8f0',
                            }}>
                                <CheckCircle size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                {item}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
                        <Link to='/contact' style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '14px 28px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
                            color: '#0f1c2e', fontSize: '0.95rem', fontWeight: 600,
                            border: 'none', cursor: 'pointer',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)',
                            boxShadow: '0 6px 20px rgba(96,165,250,0.3)',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(96,165,250,0.4)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(96,165,250,0.3)'; }}
                        >
                            <Phone size={18} />
                            Schedule a Consultation
                        </Link>
                        <button style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '14px 28px', borderRadius: '12px',
                            background: 'transparent',
                            color: '#ffffff', fontSize: '0.95rem', fontWeight: 600,
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body, system-ui, sans-serif)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                        >
                            <LayoutList size={18} />
                            Explore Disney Cruise Options
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DisneyLuxuryCruise