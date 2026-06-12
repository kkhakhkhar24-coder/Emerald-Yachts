import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'

// ── HERO IMAGES (replace with your actual imports) ───────────────────────────
import hero1 from '../../assets/Disneyluxurycruise/disney-cruise-norwegian-fjord-scenic-cruise-geirangerfjord-norway.jpeg'
import hero2 from '../../assets/Disneyluxurycruise/disney-wish-grand-hall-atrium-balcony-view-live-entertainment.jpg'
import hero3 from '../../assets/Disneyluxurycruise/disney-cruise-ship-docked-at-castaway-cay-bahamas-private-island.jpeg'

// ── SECTION IMAGES (replace with your actual imports) ────────────────────────
import adultDiningImg from '../../assets/DisneyLuxuryCruise/adult-dining.png'
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


import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Baby, Moon, Music, Mic, FileText,
    GraduationCap, Globe, Theater, Smile
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
//  SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
const disneySchemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "Trips & Ships Luxury Travel",
            "url": "https://www.tripsandships.com",
            "logo": "https://www.tripsandships.com/PNG%20image.png",
            "sameAs": [
                "https://www.facebook.com/tripsandships/",
                "https://www.instagram.com/tripsandshipsluxurytravel"
            ]
        },
        { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com" },
        {
            "@type": "Person", "name": "Angela Hughes",
            "jobTitle": "CEO of Trips & Ships Luxury Travel",
            "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" }
        },
        {
            "@type": "WebPage",
            "name": "What Luxury Travelers Get Wrong About Disney Cruise Line",
            "url": "https://www.tripsandships.com/what-luxury-travelers-get-wrong-about-disney-cruise-line",
            "description": "Many luxury travelers overlook Disney Cruise Line because of its family-focused reputation. Discover what affluent travelers often misunderstand about Disney."
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Insights", "item": "https://www.tripsandships.com/luxury-cruise-insights" },
                { "@type": "ListItem", "position": 3, "name": "What Luxury Travelers Get Wrong About Disney Cruise Line", "item": "https://www.tripsandships.com/what-luxury-travelers-get-wrong-about-disney-cruise-line" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Is Disney Cruise Line considered luxury?", "acceptedAnswer": { "@type": "Answer", "text": "Disney is generally categorized as a premium cruise line rather than an ultra-luxury cruise line, but many aspects of the experience meet or exceed luxury traveler expectations." } },
                { "@type": "Question", "name": "Why is Disney Cruise Line more expensive?", "acceptedAnswer": { "@type": "Answer", "text": "Disney commands premium pricing due to exceptional service, entertainment, family programming, guest satisfaction, and strong demand." } },
                { "@type": "Question", "name": "Is Disney worth it for affluent families?", "acceptedAnswer": { "@type": "Answer", "text": "For many affluent families, Disney provides exceptional value because it successfully serves multiple generations simultaneously." } }
            ]
        }
    ]
}

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
                <script type="application/ld+json">{JSON.stringify(disneySchemaData)}</script>
            </Helmet>

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
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Left editorial block */}
                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">THE BIGGEST MISCONCEPTION</span>
                            <h2 className="medi-premium-heading">
                                "Isn't That Just for Kids?"
                            </h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Mention Disney Cruise Line to many luxury travelers and you'll often hear the same response: <em>"Isn't that just for kids?"</em> It's one of the most common misconceptions in the cruise industry.
                            </p>
                            <p className="medi-premium-lead-text">
                                While Disney Cruise Line is unquestionably one of the world's premier family cruise brands, many affluent travelers dismiss it without understanding what Disney actually delivers.
                            </p>
                            <p className="medi-premium-lead-text">
                                The reality is that Disney Cruise Line offers some of the highest service standards, best-designed family accommodations, most impressive entertainment, and strongest guest satisfaction ratings in the industry.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    For the right traveler, Disney can provide a luxury experience that rivals or exceeds many traditional premium cruise lines. Disney delivers:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: Star, label: 'Exceptional service' },
                                        { icon: Award, label: 'Outstanding guest satisfaction' },
                                        { icon: Crown, label: 'Premium accommodations' },
                                        { icon: Sparkles, label: 'Industry-leading entertainment' },
                                        { icon: Heart, label: 'Family-focused luxury' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box"><Icon size={20} /></div>
                                            <span className="medi-immersion-card-title">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right signature panel — image + quote */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LUXURY TRAVEL ADVISOR</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc">
                                    With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year, Angela Hughes offers unmatched insight into premium family cruising.
                                </p>



                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        The mistake isn't assuming Disney is family-focused. The mistake is assuming family-focused means low-end.
                                    </p>
                                </div>
                            </div>
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
                        padding: 100px 24px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-adults-only-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 1.15fr 0.85fr;
                        gap: 60px;
                        align-items: flex-start;
                    }
                    @media (max-width: 991px) {
                        .medi-adults-only-container {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                    }
                    /* Left Column: Content & Image frame */
                    .medi-adults-only-content-block {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                    .medi-adults-only-eyebrow {
                        align-self: flex-start;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: var(--medi-navy-soft, rgba(39, 68, 114, 0.07));
                        border: 1px solid var(--medi-navy-border, rgba(39, 68, 114, 0.15));
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.12em;
                        color: var(--medi-navy, #274472);
                    }
                    .medi-adults-only-heading {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: 2.3rem;
                        font-weight: 600;
                        line-height: 1.25;
                        color: var(--medi-navy, #274472);
                        margin: 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-adults-only-heading {
                            font-size: 1.85rem;
                        }
                    }
                    .medi-adults-only-paragraph {
                        font-size: 1.05rem;
                        line-height: 1.75;
                        color: var(--text-body, #2d3a4a);
                        margin: 0;
                    }
                    /* Image Frame */
                    .medi-adults-only-image-frame {
                        position: relative;
                        margin-top: 12px;
                        border-radius: var(--radius-lg, 20px);
                        overflow: hidden;
                        box-shadow: var(--shadow-lg, 0 12px 40px rgba(39, 68, 114, 0.15));
                        border: 1px solid var(--medi-navy-border, rgba(39, 68, 114, 0.1));
                    }
                    .medi-adults-only-image {
                        width: 100%;
                        height: 380px;
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
                    /* Right Column: Highlights Card */
                    .medi-adults-only-highlights-card {
                        background: var(--medi-bg-soft, rgb(231, 243, 245));
                        border: 1px solid var(--medi-navy-border, rgba(39, 68, 114, 0.1));
                        border-radius: 24px;
                        padding: 36px 30px;
                        box-shadow: var(--shadow, 0 4px 24px rgba(39, 68, 114, 0.08));
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                    .medi-adults-only-highlights-title {
                        font-family: var(--font-body, sans-serif);
                        font-size: 1.05rem;
                        font-weight: 700;
                        line-height: 1.4;
                        color: var(--medi-navy, #274472);
                        margin: 0;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                    }
                    .medi-adults-only-list {
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                    }
                    .medi-adults-only-item-strip {
                        background: #ffffff;
                        border: 1px solid rgba(39, 68, 114, 0.08);
                        border-radius: 12px;
                        padding: 16px 20px;
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        transition: all var(--transition, 0.3s);
                    }
                    .medi-adults-only-item-strip:hover {
                        transform: translateX(6px);
                        border-color: var(--medi-navy-light, #274472cc);
                        box-shadow: 0 6px 18px rgba(39, 68, 114, 0.06);
                    }
                    .medi-adults-only-item-icon {
                        width: 36px;
                        height: 36px;
                        border-radius: 10px;
                        background: var(--medi-navy-soft, rgba(39, 68, 114, 0.07));
                        color: var(--medi-navy, #274472);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        transition: all 0.35s ease;
                    }
                    .medi-adults-only-item-strip:hover .medi-adults-only-item-icon {
                        background: var(--medi-navy, #274472);
                        color: #ffffff;
                    }
                    .medi-adults-only-item-text {
                        font-size: 0.95rem;
                        font-weight: 500;
                        color: var(--text-body, #2d3a4a);
                        line-height: 1.4;
                    }
                ` }} />

                <div className="medi-adults-only-container">
                    <div className="medi-adults-only-content-block">
                        <div className="medi-adults-only-eyebrow">
                            <Users size={14} style={{ marginRight: '2px' }} />
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
                                            <IconComponent size={18} />
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
                <div className="medi-excel-coord coord-tl">DISNEY CRUISE LINE // SERVICE EXCELLENCE</div>
                <div className="medi-excel-coord coord-tr">SERVICE STANDARDS</div>
                <div className="medi-excel-coord coord-bl">GUEST SATISFACTION LEADERS</div>
                <div className="medi-excel-coord coord-br">PREMIUM CRUISE EXPERIENCE</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <span style={{
                            display: 'inline-block', fontSize: '13px', fontWeight: '600',
                            letterSpacing: '0.1em', color: '#93c5fd', textTransform: 'uppercase',
                            background: 'rgba(147,197,253,0.1)', borderRadius: '4px',
                            padding: '5px 12px', marginBottom: '14px'
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
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
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
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
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
                        background: linear-gradient(180deg, var(--medi-bg-soft, #f0f4f8) 0%, #ffffff 100%);
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
            <section style={{ padding: '80px 24px', backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#274472', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            The Emotional ROI
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Rediscovering the Sense of Wonder
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7', maxWidth: '800px', margin: '25px auto 0' }}>
                            Luxury is often defined by the "unbuyable" moments. Watch as the Mowry siblings illustrate why Disney remains the leader in multigenerational travel. For affluent families, the true premium value of a Disney vacation isn't just the stateroom—it is the rare ability for adults to disconnect from the world and reconnect with their family through genuine, shared joy.
                        </p>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(39, 68, 114, 0.15)', border: '1px solid rgba(39, 68, 114, 0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GUgMMNmQ5XM"
                            title="Disney Generational Connection"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                6. MISTAKE #7 — COMPARING TO WRONG CRUISE LINES
            ══════════════════════════════════════════════════════ */}
            <section className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card" style={{ display: 'block' }}>
                        <div className="medi-editorial-content-block" style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">MISTAKE #7</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Comparing Disney to the Wrong Cruise Lines
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
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
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                6b. ANGELA HUGHES — EXPERT INSIGHT SECTION
            ══════════════════════════════════════════════════════ */}
            <section className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Expert Insight from
                                    <br className="medi-growth-title-break" />Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
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
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                7. MISTAKE #8 — DESTINATIONS SHOWCASE
                   Uses medi-itinerary-showcase-section
            ══════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">MISTAKE #8 — FOCUSING ONLY ON THE SHIP</span>
                        <h2 className="medi-itinerary-showcase-heading">Disney's Appeal Extends Far Beyond the Ship</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ color: '#475569', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.05rem' }}>
                            Luxury travelers often evaluate cruises based solely on onboard amenities. The destinations matter just as much as the onboard experience.
                        </p>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {disneyItineraries.map((it, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${selectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{it.title}</span>
                                        <span style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px', display: 'block' }}>{it.desc}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={disneyItineraries[selectedItinerary].image}
                                    alt={disneyItineraries[selectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">FEATURED ITINERARY</span>
                            </div>
                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{disneyItineraries[selectedItinerary].title}</h3>
                                <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.7' }}>
                                    {disneyItineraries[selectedItinerary].desc}
                                </p>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Best For:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {disneyItineraries[selectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {disneyItineraries[selectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
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
                8. MISTAKE #9 — ENTERTAINMENT (THEATER SPOTLIGHT CUSTOM UI)
            ══════════════════════════════════════════════════════ */}
            <section className="medi-entertainment-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-entertainment-section {
                        background: linear-gradient(135deg, var(--medi-bg-dark, #0f1c2e) 0%, var(--medi-bg-dark2, #1c2f4a) 100%);
                        position: relative;
                        padding: 100px 24px;
                        overflow: hidden;
                        color: #ffffff;
                        font-family: 'Inter', system-ui, -apple-system, sans-serif;
                    }
                    /* Background Spotlights using root navy variables */
                    .medi-ent-spotlight-one {
                        position: absolute;
                        top: -10%;
                        right: 10%;
                        width: 500px;
                        height: 500px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(39, 68, 114, 0.25) 0%, transparent 70%);
                        filter: blur(80px);
                        pointer-events: none;
                        z-index: 1;
                    }
                    .medi-ent-spotlight-two {
                        position: absolute;
                        bottom: -10%;
                        left: 5%;
                        width: 450px;
                        height: 450px;
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(39, 68, 114, 0.15) 0%, transparent 70%);
                        filter: blur(80px);
                        pointer-events: none;
                        z-index: 1;
                    }
                    .medi-entertainment-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 2;
                        display: grid;
                        grid-template-columns: 1.1fr 0.9fr;
                        gap: 60px;
                        align-items: center;
                    }
                    @media (max-width: 991px) {
                        .medi-entertainment-container {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                    }
                    .medi-entertainment-content-col {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                    .medi-entertainment-eyebrow {
                        align-self: flex-start;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.12em;
                        color: var(--medi-bg-soft, #f0f4f8);
                    }
                    .medi-entertainment-heading {
                        font-size: 2.5rem;
                        font-weight: 700;
                        line-height: 1.25;
                        color: #ffffff;
                        margin: 0;
                        letter-spacing: -0.02em;
                    }
                    @media (max-width: 768px) {
                        .medi-entertainment-heading {
                            font-size: 2rem;
                        }
                    }
                    .medi-entertainment-paragraph {
                        font-size: 1.05rem;
                        line-height: 1.75;
                        color: #cbd5e1;
                        margin: 0;
                    }
                    .medi-entertainment-quote-box {
                        position: relative;
                        margin-top: 12px;
                        padding: 24px 30px;
                        background: rgba(255, 255, 255, 0.02);
                        border-left: 3px solid var(--medi-navy-light, #274472cc);
                        border-radius: 0 16px 16px 0;
                        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.01);
                    }
                    .medi-entertainment-quote-box::before {
                        content: '"';
                        position: absolute;
                        top: -5px;
                        left: 10px;
                        font-size: 4rem;
                        color: rgba(255, 255, 255, 0.05);
                        font-family: serif;
                        line-height: 1;
                        pointer-events: none;
                    }
                    .medi-entertainment-quote-text {
                        font-size: 1.05rem;
                        line-height: 1.7;
                        font-style: italic;
                        color: #e2e8f0;
                        margin: 0;
                    }
                    .medi-entertainment-cards-col {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    .medi-entertainment-subheading {
                        font-size: 1.1rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                        color: #94a3b8;
                        margin: 0 0 8px 0;
                    }
                    .medi-entertainment-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 18px;
                    }
                    @media (max-width: 576px) {
                        .medi-entertainment-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                    .medi-entertainment-card {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.07);
                        border-radius: 16px;
                        padding: 24px;
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                        position: relative;
                        overflow: hidden;
                    }
                    .medi-entertainment-card::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
                        opacity: 0;
                        transition: opacity 0.35s ease;
                        pointer-events: none;
                    }
                    .medi-entertainment-card:hover {
                        transform: translateY(-5px);
                        border-color: var(--medi-navy-light, rgba(255, 255, 255, 0.2));
                        box-shadow: 0 12px 30px rgba(9, 14, 26, 0.4), 0 0 20px rgba(255, 255, 255, 0.03);
                    }
                    .medi-entertainment-card:hover::before {
                        opacity: 1;
                    }
                    .medi-entertainment-card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .medi-entertainment-act-tag {
                        font-size: 0.75rem;
                        font-weight: 700;
                        color: var(--medi-bg-soft, #f0f4f8);
                        letter-spacing: 0.1em;
                    }
                    .medi-entertainment-icon-box {
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.05);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--medi-bg-soft, #cbd5e1);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        transition: all 0.35s ease;
                    }
                    .medi-entertainment-card:hover .medi-entertainment-icon-box {
                        background: rgba(255, 255, 255, 0.1);
                        color: #ffffff;
                        border-color: rgba(255, 255, 255, 0.2);
                        transform: rotate(8deg);
                    }
                    .medi-entertainment-card-title {
                        font-size: 1.05rem;
                        font-weight: 600;
                        line-height: 1.4;
                        color: #f1f5f9;
                    }
                ` }} />

                {/* Visual Glow Blobs using root colors */}
                <div className="medi-ent-spotlight-one"></div>
                <div className="medi-ent-spotlight-two"></div>

                <div className="medi-entertainment-container">
                    <div className="medi-entertainment-content-col">
                        <div className="medi-entertainment-eyebrow">
                            <Theater size={14} style={{ marginRight: '2px' }} />
                            <span>Mistake #9</span>
                        </div>
                        <h2 className="medi-entertainment-heading">
                            Assuming Entertainment Doesn't Matter
                        </h2>
                        <p className="medi-entertainment-paragraph">
                            Luxury travelers sometimes dismiss entertainment as unimportant. Yet Disney's entertainment is consistently regarded as among the best at sea. Even travelers who aren't devoted Disney fans are often impressed by the quality.
                        </p>

                        <div className="medi-entertainment-quote-box">
                            <p className="medi-entertainment-quote-text">
                                Professional performances rival major theater productions. Immersive storytelling is a hallmark of the Disney brand. This is entertainment that even non-Disney fans consistently praise.
                            </p>
                        </div>
                    </div>

                    <div className="medi-entertainment-cards-col">
                        <h3 className="medi-entertainment-subheading">
                            Entertainment highlights include:
                        </h3>
                        <div className="medi-entertainment-grid">
                            {[
                                { title: 'Broadway-Quality Productions', act: 'ACT I', icon: Theater },
                                { title: 'Live Music throughout the ship', act: 'ACT II', icon: Music },
                                { title: 'Family Experiences for all generations', act: 'ACT III', icon: Users },
                                { title: 'Immersive Storytelling', act: 'ACT IV', icon: Sparkles }
                            ].map((item, i) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={i} className="medi-entertainment-card">
                                        <div className="medi-entertainment-card-header">
                                            <span className="medi-entertainment-act-tag">{item.act}</span>
                                            <div className="medi-entertainment-icon-box">
                                                <IconComponent size={18} />
                                            </div>
                                        </div>
                                        <div className="medi-entertainment-card-title">
                                            {item.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 2: THE SOPHISTICATION OF STORYTELLING ── */}
            <section style={{ padding: '100px 24px', backgroundColor: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>

                        {/* Eyebrow: Matches the luxury tracking of the reference page */}
                        <span style={{
                            color: '#274472',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.25em',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            Technical Masterpieces
                        </span>

                        {/* Heading: Matches the extra-bold, tight-spaced luxury style */}
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 45px)',
                            color: '#274472',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.1'
                        }}>
                            Immersive Production Value
                        </h2>

                        {/* Accent Bar */}
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>

                        <p style={{
                            color: '#475569',
                            fontSize: '18px',
                            marginTop: '30px',
                            lineHeight: '1.8',
                            maxWidth: '820px',
                            margin: '30px auto 0',
                            fontWeight: '400'
                        }}>
                            A common mistake luxury travelers make is dismissing Disney entertainment as "just for kids." In reality, Disney utilizes "movie-set" quality engineering and cinematic production values that rival high-end theater. Witness the level of immersive detail and storytelling sophistication that carries over into every lounge, restaurant, and stage production aboard the Disney fleet.
                        </p>
                    </div>

                    {/* Video Frame: Styled with a softer, sophisticated shadow for the light background */}
                    <div style={{
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(39, 68, 114, 0.12)',
                        border: '1px solid #e2e8f0',
                        aspectRatio: '16/9',
                        backgroundColor: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
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
                   Uses medi-mistakes-slider-section style dark bg
            ══════════════════════════════════════════════════════ */}
            <section className="medi-mistakes-slider-section">
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">MISTAKE #10</span>
                        <h2 className="medi-mistakes-slider-title">Forgetting That Luxury Is Personal</h2>
                        <div className="medi-mistakes-slider-separator"></div>
                        <p style={{ color: '#94a3b8', maxWidth: '680px', margin: '0 auto', lineHeight: '1.8', fontSize: '1rem' }}>
                            The biggest misunderstanding may be assuming luxury means the same thing for everyone.
                        </p>
                    </div>

                    {/* Two-column luxury definition — inline styled, same palette */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px',
                        maxWidth: '900px', margin: '40px auto 0'
                    }}>
                        {/* Column A */}
                        <div style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '16px', padding: '36px 32px'
                        }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '10px',
                                background: 'rgba(255,255,255,0.07)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#94a3b8', marginBottom: '18px'
                            }}><Moon size={22} /></div>
                            <h3 style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '600', marginBottom: '18px' }}>
                                For some, luxury means:
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['Quiet ships', 'Fine dining', 'Adults-only environments'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '0.95rem' }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#475569', flexShrink: 0 }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column B — highlighted */}
                        <div style={{
                            background: 'var(--medi-navy)',
                            border: '1px solid rgba(147,197,253,0.2)',
                            borderRadius: '16px', padding: '36px 32px',
                            boxShadow: '0 8px 32px rgba(39,68,114,0.5)'
                        }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '10px',
                                background: 'rgba(255,255,255,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#ffffff', marginBottom: '18px'
                            }}><Heart size={22} /></div>
                            <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', marginBottom: '18px' }}>
                                For others, luxury means:
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['Family time', 'Shared experiences', 'Exceptional service', 'Stress-free planning', 'Memorable moments'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                                        <CheckCircle size={15} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Quote */}
                    <div style={{
                        maxWidth: '700px', margin: '36px auto 0', textAlign: 'center',
                        padding: '28px 32px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(147,197,253,0.15)',
                        borderRadius: '14px'
                    }}>
                        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontStyle: 'italic' }}>
                            "Disney Cruise Line excels at delivering the second type of luxury. And for many families, that's the luxury that matters most."
                        </p>
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
            ══════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                        Who Should Consider Disney Cruise Line?
                    </h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best Choice If You Are:</h3>
                            <ul className="medi-audience-list">
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
                                        <div className="medi-audience-icon-wrapper best">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">May Prefer Other Luxury Lines If You:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Moon, text: 'Prefer adults-only environments' },
                                    { icon: Globe, text: 'Prioritize destination immersion over entertainment' },
                                    { icon: Gem, text: 'Want ultra-luxury inclusions' },
                                    { icon: Award, text: 'Seek highly formal luxury experiences' },
                                    { icon: Compass, text: 'Rarely travel with family' },
                                ].map(({ icon: Icon, text }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{
                                marginTop: '24px', padding: '18px 20px', borderRadius: '10px',
                                background: 'rgba(39,68,114,0.06)', border: '1px solid rgba(39,68,114,0.1)'
                            }}>
                                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                                    In these cases, cruise lines such as <strong>Viking, Regent Seven Seas, Silversea, Seabourn,</strong> or <strong>Explora Journeys</strong> may align better with your preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                12. COMPARISON TABLE — new inline section, same palette
            ══════════════════════════════════════════════════════ */}
            <section style={{ padding: '80px 20px', background: 'var(--medi-bg-soft)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', fontSize: '13px', fontWeight: '600',
                            letterSpacing: '0.1em', color: 'var(--medi-navy)', textTransform: 'uppercase',
                            background: 'rgba(39,68,114,0.08)', borderRadius: '4px',
                            padding: '6px 14px', marginBottom: '16px'
                        }}>SIDE-BY-SIDE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                            Disney vs Traditional Luxury Cruise Lines
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{
                        borderRadius: '16px', overflow: 'hidden',
                        boxShadow: '0 8px 40px rgba(39,68,114,0.1)',
                        border: '1px solid rgba(39,68,114,0.1)'
                    }}>
                        {/* Header Row */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
                            background: 'var(--medi-navy)', padding: '18px 28px'
                        }}>
                            <span style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Category</span>
                            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Disney Cruise Line</span>
                            <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '600', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Traditional Luxury</span>
                        </div>

                        {comparisonRows.map((row, i) => (
                            <div key={i} style={{
                                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
                                padding: '16px 28px',
                                background: i % 2 === 0 ? '#ffffff' : 'rgba(231,243,245,0.5)',
                                borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(39,68,114,0.06)' : 'none',
                                alignItems: 'center'
                            }}>
                                <span style={{ color: '#2d3748', fontWeight: '500', fontSize: '0.95rem' }}>{row.category}</span>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{
                                        display: 'inline-block', padding: '4px 14px', borderRadius: '20px',
                                        fontSize: '13px', fontWeight: '600',
                                        background: row.disneyTop ? 'rgba(16,185,129,0.1)' : 'rgba(39,68,114,0.08)',
                                        color: row.disneyTop ? 'var(--medi-green)' : 'var(--medi-navy)'
                                    }}>{row.disney}</span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{
                                        display: 'inline-block', padding: '4px 14px', borderRadius: '20px',
                                        fontSize: '13px', fontWeight: '500',
                                        background: 'rgba(100,116,139,0.08)', color: '#64748b'
                                    }}>{row.luxury}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                NEW SECTION: THE VISUAL STANDARD OF LUXURY
            ══════════════════════════════════════════════════════ */}
            <section style={{ padding: '100px 24px', backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-gallery-grid {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        grid-template-rows: repeat(2, 250px);
                        gap: 20px;
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .medi-gallery-item {
                        position: relative;
                        overflow: hidden;
                        border-radius: 16px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                        background-color: #0f1c2e;
                    }
                    .medi-gallery-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                        opacity: 0.9;
                    }
                    .medi-gallery-item:hover .medi-gallery-img {
                        transform: scale(1.08);
                        opacity: 1;
                    }
                    .medi-gallery-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(15, 28, 46, 0.9) 0%, transparent 60%);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        padding: 24px;
                        opacity: 0;
                        transition: opacity 0.4s ease;
                    }
                    .medi-gallery-item:hover .medi-gallery-overlay {
                        opacity: 1;
                    }
                    .medi-gallery-label {
                        color: #93c5fd;
                        font-size: 0.7rem;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        margin-bottom: 4px;
                    }
                    .medi-gallery-caption {
                        color: #ffffff;
                        font-size: 1rem;
                        font-weight: 600;
                    }
                    
                    /* Custom Layout Shaping */
                    .item-1 { grid-column: span 3; }
                    .item-2 { grid-column: span 3; }
                    .item-3 { grid-column: span 2; }
                    .item-4 { grid-column: span 2; }
                    .item-5 { grid-column: span 2; }

                    @media (max-width: 991px) {
                        .medi-gallery-grid {
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: auto;
                        }
                        .medi-gallery-item { grid-column: span 1 !important; height: 280px; }
                        .item-5 { grid-column: span 2 !important; }
                    }
                    @media (max-width: 600px) {
                        .medi-gallery-grid { grid-template-columns: 1fr; }
                        .medi-gallery-item { grid-column: span 1 !important; height: 320px; }
                    }
                `}} />

                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: '#274472', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                        Visual Portfolio
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 46px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                        The Refined Aesthetic of Disney
                    </h2>
                    <div style={{ width: '80px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="medi-gallery-grid">
                    {/* Image 1: Concierge Lounge Space */}
                    <div className="medi-gallery-item item-1">
                        <img src={disneyAlaska} alt="Disney Luxury Lounge" className="medi-gallery-img" />
                    </div>

                    {/* Image 2: Fine Dining Detail */}
                    <div className="medi-gallery-item item-2">
                        <img src={disneyChristmas} alt="Epicurean Dining" className="medi-gallery-img" />
                    </div>

                    {/* Image 3: Ocean View Verandah */}
                    <div className="medi-gallery-item item-3">
                        <img src={disneyCharacters} alt="Private Balcony" className="medi-gallery-img" />
                    </div>

                    {/* Image 4: Quiet Cove Pool */}
                    <div className="medi-gallery-item item-4">
                        <img src={disneyPalo} alt="Adult Retreat" className="medi-gallery-img" />
                    </div>

                    {/* Image 5: Nautical Design Details */}
                    <div className="medi-gallery-item item-5">
                        <img src={disneylive} alt="Nautical Interior" className="medi-gallery-img" />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                13. ANGELA HUGHES AUTHORITY BOX
            ══════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">EXPERT GUIDANCE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                            Meet Angela Hughes
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '80px', height: '80px', borderRadius: '50%',
                                        objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: 'Founder of Luxury Travel University', icon: GraduationCap, category: 'EDUCATION' },
                                    { text: '40+ years luxury travel expertise', icon: Clock, category: 'EXPERIENCE' },
                                    { text: 'Traveled to 121+ countries', icon: Globe, category: 'EXPLORATION' },
                                    { text: 'Global luxury travel speaker', icon: Mic, category: 'SPEAKING' },
                                    { text: 'Weekly travel columnist', icon: FileText, category: 'MEDIA' },
                                    { text: 'Travel Leaders Network Advisory Board member', icon: Users, category: 'LEADERSHIP' },
                                    { text: '2024 Luxury Travel Influencer of the Year', icon: Award, category: 'HONOR' },
                                    { text: 'Named among the Most Influential Women in Travel in 2026', icon: Crown, category: 'PRESTIGE' },
                                    { text: 'Featured in global travel publications', icon: Sparkles, category: 'RECOGNITION' },
                                    { text: 'Luxury cruise and expedition specialist', icon: Ship, category: 'SPECIALTY' },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box">
                                                <IconComp size={16} />
                                            </div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category">{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════
                14. FINAL THOUGHTS — editorial section (Asymmetrical layout)
            ══════════════════════════════════════════════════════ */}
            <section className="medi-final-thoughts-section">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .medi-final-thoughts-section {
                        background: linear-gradient(180deg, var(--medi-bg-soft, #f0f4f8) 0%, #ffffff 100%);
                        padding: 100px 24px;
                        position: relative;
                        overflow: hidden;
                        font-family: 'Inter', system-ui, sans-serif;
                    }
                    .medi-final-thoughts-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 0.95fr 1.05fr;
                        gap: 60px;
                        align-items: center;
                    }
                    @media (max-width: 991px) {
                        .medi-final-thoughts-container {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                    }
                    /* Left column: Luxury Plaque */
                    .medi-final-thoughts-quote-card {
                        background: var(--medi-navy, #274472);
                        padding: 50px 40px;
                        border-radius: 24px;
                        color: #ffffff;
                        box-shadow: 0 20px 40px rgba(39, 68, 114, 0.15);
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        border: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    .medi-final-thoughts-quote-card::before {
                        content: '';
                        position: absolute;
                        top: -50px; right: -50px;
                        width: 150px; height: 150px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.03);
                        pointer-events: none;
                    }
                    .medi-final-thoughts-quote-icon {
                        width: 60px;
                        height: 60px;
                        border-radius: 16px;
                        background: rgba(255, 255, 255, 0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #ffffff;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    .medi-final-thoughts-quote-main {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: 1.65rem;
                        line-height: 1.5;
                        font-weight: 500;
                        font-style: italic;
                        color: #ffffff;
                        margin: 0;
                    }
                    .medi-final-thoughts-quote-divider {
                        width: 50px;
                        height: 2px;
                        background: rgba(255, 255, 255, 0.2);
                    }
                    .medi-final-thoughts-quote-sub {
                        font-size: 0.95rem;
                        line-height: 1.6;
                        color: rgba(255, 255, 255, 0.85);
                        font-weight: 600;
                        margin: 0;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                    }
                    /* Right column: Content */
                    .medi-final-thoughts-content {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                    .medi-final-thoughts-eyebrow {
                        align-self: flex-start;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: var(--medi-navy-soft, rgba(39, 68, 114, 0.07));
                        border: 1px solid var(--medi-navy-border, rgba(39, 68, 114, 0.15));
                        padding: 6px 16px;
                        border-radius: 30px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.12em;
                        color: var(--medi-navy, #274472);
                    }
                    .medi-final-thoughts-heading {
                        font-family: var(--font-display, Georgia, serif);
                        font-size: 2.2rem;
                        font-weight: 600;
                        line-height: 1.3;
                        color: var(--medi-navy, #274472);
                        margin: 0;
                        letter-spacing: -0.01em;
                    }
                    @media (max-width: 768px) {
                        .medi-final-thoughts-heading {
                            font-size: 1.8rem;
                        }
                    }
                    .medi-final-thoughts-text {
                        font-size: 1.05rem;
                        line-height: 1.8;
                        color: var(--text-body, #2d3a4a);
                        margin: 0;
                    }
                ` }} />

                <div className="medi-final-thoughts-container">
                    <div className="medi-final-thoughts-quote-card">
                        <div className="medi-final-thoughts-quote-icon">
                            <Heart size={26} />
                        </div>
                        <p className="medi-final-thoughts-quote-main">
                            "A vacation where every generation genuinely enjoys the experience."
                        </p>
                        <div className="medi-final-thoughts-quote-divider"></div>
                        <p className="medi-final-thoughts-quote-sub">
                            And for many families, that's the ultimate luxury.
                        </p>
                    </div>

                    <div className="medi-final-thoughts-content">
                        <div className="medi-final-thoughts-eyebrow">
                            <Compass size={14} style={{ marginRight: '2px' }} />
                            <span>Final Thoughts</span>
                        </div>

                        <h2 className="medi-final-thoughts-heading">
                            Disney Isn't Trying to Be a Traditional Luxury Cruise Line
                        </h2>

                        <p className="medi-final-thoughts-text">
                            Disney Cruise Line isn't trying to compete directly with ultra-luxury cruise brands. Instead, it has created something different — a premium cruise experience built around family connection, exceptional service, immersive entertainment, and multigenerational travel.
                        </p>
                        <p className="medi-final-thoughts-text">
                            For travelers seeking adults-only sophistication, there are excellent alternatives. But for grandparents, parents, children, and grandchildren who want to travel together without sacrificing quality, Disney Cruise Line often delivers something many luxury products cannot:
                        </p>
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
                16. CTA SECTION
            ══════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Ready to Plan Your Disney Cruise Experience?
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury Mediterranean cruising is no longer simply about transportation between ports — it is about authentic experiences, cultural immersion, personalized service, and seamless planning.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal Disney Cruise experience for their family.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Disney Concierge Level suites',
                                    'Alaska family voyages',
                                    'Mediterranean Disney cruises',
                                    'Multigenerational vacation planning',
                                    'First-time Disney Cruise experiences'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips & Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Disney Cruise Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DisneyLuxuryCruise