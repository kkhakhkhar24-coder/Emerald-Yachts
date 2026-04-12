import React, { useState, useEffect } from 'react';
import { Ship, Heart, Users, MapPin, Award, Layers, Check, ChevronDown, ChevronUp, Plus, Minus, ArrowRight, User, Shield } from 'lucide-react';
import './RiversidevsAmaWaterways.css';
import Navbar from '../../components/Navbar/Navbar';
import AboutImage from '../../assets/image.webp';
import HeroImage1 from '../../assets/Riverside-vs-Viking/Hero1.jpeg';
import HeroImage2 from '../../assets/Riverside-vs-Viking/Hero2.jpeg';
import HeroImage3 from '../../assets/Riverside-vs-Viking/Hero3.jpeg';
import { Helmet } from 'react-helmet-async';

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#organization",
            "name": "Trips & Ships Luxury Travel",
            "url": "https://www.tripsandships.com",
            "logo": { "@type": "ImageObject", "url": "https://www.tripsandships.com/path-to-logo.png" },
            "description": "Luxury travel agency specializing in river cruises, luxury cruises, safaris, expeditions, and custom global itineraries.",
            "sameAs": [
                "https://www.instagram.com/tripsandships",
                "https://www.linkedin.com/company/trips-and-ships-luxury-travel"
            ]
        },
        {
            "@type": "Person",
            "@id": "https://www.tripsandships.com/#angelahughes",
            "name": "Angela Hughes",
            "jobTitle": "CEO",
            "description": "Luxury travel expert with more than 40 years of experience specializing in river cruises, luxury cruises, expeditions, and complex global itineraries.",
            "worksFor": { "@id": "https://www.tripsandships.com/#organization" },
            "url": "https://www.tripsandships.com",
            "image": "https://www.tripsandships.com/path-to-angela-headshot.jpg"
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/riverside-vs-amawaterways/#webpage",
            "url": "https://www.tripsandships.com/riverside-vs-amawaterways",
            "name": "Riverside vs AmaWaterways: Which Luxury River Cruise Is Right for You",
            "description": "Compare Riverside Luxury Cruises vs AmaWaterways on space, service, dining, inclusions, and overall experience to find the right river cruise for your travel style.",
            "isPartOf": { "@id": "https://www.tripsandships.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.tripsandships.com/path-to-page-hero-image.jpg" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-vs-amawaterways/#article",
            "headline": "Riverside vs AmaWaterways: Which Luxury River Cruise Is Right for You",
            "description": "Compare Riverside Luxury Cruises vs AmaWaterways on space, service, dining, inclusions, and overall experience to find the right river cruise for your travel style.",
            "author": { "@id": "https://www.tripsandships.com/#angelahughes" },
            "publisher": { "@id": "https://www.tripsandships.com/#organization" },
            "mainEntityOfPage": { "@id": "https://www.tripsandships.com/riverside-vs-amawaterways/#webpage" },
            "datePublished": "2025-07-10",
            "dateModified": "2025-07-10"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/riverside-vs-amawaterways/#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsandships.com/river-cruises" },
                { "@type": "ListItem", "position": 3, "name": "Riverside vs AmaWaterways", "item": "https://www.tripsandships.com/riverside-vs-amawaterways" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What is the difference between Riverside and AmaWaterways?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside is a boutique luxury river cruise line focused on spacious all-suite ships in Europe, while AmaWaterways is a broader premium river cruise brand offering more destinations and a strong focus on included excursions and active touring." } },
                { "@type": "Question", "name": "Which is better Riverside or AmaWaterways?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside is better for travelers seeking a quieter, more refined boutique luxury experience, while AmaWaterways is better for travelers who want more included touring, activity options, and a wider range of destinations." } },
                { "@type": "Question", "name": "Is Riverside more luxurious than AmaWaterways?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside is generally considered more boutique luxury due to its all-suite ships and more spacious, quieter onboard atmosphere, while AmaWaterways is positioned as premium to premium-plus with strong inclusions." } },
                { "@type": "Question", "name": "How much do Riverside vs AmaWaterways river cruises cost?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside typically ranges from $4,000 to $10,000 or more per person, while AmaWaterways generally ranges from $3,500 to $8,000 depending on itinerary, season, and cabin category." } },
                { "@type": "Question", "name": "Which river cruise line has more destinations?", "acceptedAnswer": { "@type": "Answer", "text": "AmaWaterways has significantly more destinations, operating itineraries in Europe, Asia, Africa, and South America, while Riverside is focused primarily on European rivers." } },
                { "@type": "Question", "name": "Which is better for active travelers Riverside or AmaWaterways?", "acceptedAnswer": { "@type": "Answer", "text": "AmaWaterways is typically better for active travelers because it offers multiple excursion levels including biking, hiking, and more guided touring options." } },
                { "@type": "Question", "name": "Which is better for couples seeking a quieter experience?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside is generally better for couples seeking a quieter, more intimate, and more spacious onboard experience." } },
                { "@type": "Question", "name": "Are Riverside river cruises all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside includes many key elements such as accommodations, dining, and select excursions, but it is not fully all-inclusive compared to some ultra-luxury brands." } },
                { "@type": "Question", "name": "What is included on AmaWaterways compared to Riverside?", "acceptedAnswer": { "@type": "Answer", "text": "AmaWaterways includes guided excursions, wine, beer, and soft drinks with meals, and a daily Sip and Sail cocktail hour, while Riverside focuses more on space, dining experience, and boutique onboard luxury." } },
                { "@type": "Question", "name": "Which has larger cabins Riverside or AmaWaterways?", "acceptedAnswer": { "@type": "Answer", "text": "Riverside generally offers larger cabins and suite-style accommodations compared to AmaWaterways." } },
                { "@type": "Question", "name": "Is AmaWaterways good for first-time river cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, AmaWaterways is a strong option for first-time river cruisers due to its structured itineraries, included excursions, and broad range of destinations." } },
                { "@type": "Question", "name": "Is Riverside worth the upgrade from AmaWaterways?", "acceptedAnswer": { "@type": "Answer", "text": "For travelers who prioritize more space, a quieter environment, and a more refined boutique luxury experience, Riverside can be worth the upgrade from AmaWaterways." } }
            ]
        }
    ]
};

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is the difference between Riverside and AmaWaterways", a: "Riverside is a boutique luxury river cruise line with three all-suite European ships, while AmaWaterways is a broader river cruise brand with more than 100 itineraries across 32 countries and a stronger emphasis on included shore experiences." },
        { q: "Which is better Riverside or AmaWaterways", a: "Neither is better for everyone. Riverside is better for travelers who want more space and a quieter boutique luxury atmosphere, while AmaWaterways is better for travelers who want more included activity, more destination range, and a more established program-driven experience." },
        { q: "Is Riverside more luxurious than AmaWaterways", a: "Riverside is positioned more clearly in the boutique luxury lane because of its all-suite ships and more intimate feel, while AmaWaterways is often seen as premium to premium-plus with stronger emphasis on included excursions and activity choices. This is an expert interpretation based on published positioning." },
        { q: "What is included on Riverside compared with AmaWaterways", a: "Riverside packages include items such as meals in onboard venues, Wi-Fi, pre-selected excursions, and port and service charges on published package pages, while AmaWaterways highlights included guided tours, wine, beer and soft drinks with lunch and dinner, and Sip & Sail cocktail hour." },
        { q: "Which river cruise line has more destinations", a: "AmaWaterways has more destinations. It operates itineraries across Europe, Asia, Africa, and South America, while Riverside is focused on European rivers." },
        { q: "Which is better for active travelers", a: "AmaWaterways is usually better for active travelers because it promotes a wider range of included onshore experiences, including hikes and bike rides." },
        { q: "Which is better for couples seeking a quieter experience", a: "Riverside is usually the better fit for couples seeking a quieter, more spacious, and more boutique onboard environment. That is an expert recommendation based on Riverside's all-suite, small-fleet positioning." },
        { q: "Is AmaWaterways good for first-time river cruisers", a: "Yes. AmaWaterways is a strong option for first-time river cruisers because of its broad itinerary selection, established brand presence, and wide range of included guided experiences." },
        { q: "Which has larger cabins, Riverside or AmaWaterways", a: "Riverside has the edge for travelers prioritizing more suite-style space because its fleet is explicitly marketed as all-suite." },
        { q: "Is Riverside all-inclusive", a: "Riverside includes many important elements, but package details vary and some specialty dining or extras may still be additional depending on ship and package." },
        { q: "What is the best luxury river cruise line for Europe", a: "The best line depends on travel style. Riverside is compelling for travelers who want boutique luxury and more space in Europe, while AmaWaterways is compelling for travelers who want more included activity and a wider set of itinerary choices." },
        { q: "Is Riverside or AmaWaterways better for first-time luxury travelers", a: "AmaWaterways is often easier for first-time river cruisers who want a lot built in and a wider choice of itineraries, while Riverside is better for travelers who already know they prefer a quieter, more boutique luxury environment. This is an expert judgment based on published brand positioning." }
    ];

    return (
        <div className="lux-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`lux-faq-item${open === i ? " lux-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="lux-faq-q">
                        <span>{item.q}</span>
                        <span className="lux-faq-icon">
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
                        </span>
                    </div>
                    {open === i && (
                        <div className="lux-faq-a">
                            <div className="lux-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const RiversidevsAmaWaterways = () => {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const [isNavSticky, setIsNavSticky] = useState(false);

    useEffect(() => {
        const slides = document.querySelectorAll('.rva-hero-bg-slide');
        let current = 0;
        const interval = setInterval(() => {
            slides[current].classList.remove('rva-active-slide');
            current = (current + 1) % slides.length;
            slides[current].classList.add('rva-active-slide');
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsNavSticky(window.scrollY > 600);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="rva-page-wrapper">
            <Helmet>
                <title>Riverside vs AmaWaterways: Which Luxury River Cruise Is Right for You</title>
                <meta name="title" content="Riverside vs AmaWaterways: Which Luxury River Cruise Is Right for You" />
                <meta name="description" content="Compare Riverside Luxury Cruises vs AmaWaterways on space, service, dining, inclusions, and overall experience to find the right river cruise for your travel style." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* HERO */}
            <section className="rva-hero-viewport">
                <div className="rva-hero-image-slider">
                    <div className="rva-hero-bg-slide rva-active-slide" style={{ backgroundImage: `url(${HeroImage1})` }}></div>
                    <div className="rva-hero-bg-slide" style={{ backgroundImage: `url(${HeroImage2})` }}></div>
                    <div className="rva-hero-bg-slide" style={{ backgroundImage: `url(${HeroImage3})` }}></div>
                </div>
                <div className="rva-hero-overlay">
                    <div className="rva-hero-container">
                        <div className="rva-hero-text-box">
                            <span className="rva-hero-eyebrow">Luxury River Cruise Planning</span>
                            <h1 className="rva-hero-h1">Riverside vs AmaWaterways: Which River Cruise Is Actually Right for You</h1>
                            <p className="rva-hero-sub">A clear luxury river cruise comparison for travelers deciding between boutique refinement and a more active, inclusion-rich experience</p>
                            <div className="rva-hero-read-more-outer">
                                <button className="rva-hero-read-more-btn" onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>
                                    {isReadMoreOpen ? 'Read Less' : 'Read More'}
                                    {isReadMoreOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                                <div className={`rva-hero-details${isReadMoreOpen ? ' rva-expanded' : ''}`}>
                                    <div className="rva-quick-answer">
                                        <p className="rva-qa-text">The biggest mistake travelers make when comparing Riverside and AmaWaterways is assuming they are selling the same kind of river cruise. They are not. Riverside is a smaller, more boutique luxury river cruise brand built around spacious all-suite ships in Europe, while AmaWaterways offers a broader, more established river cruise product with a larger fleet, more destinations, and a strong emphasis on included shore experiences and active touring.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rva-hero-btns">
                                <button className="rva-btn-filled">Compare River Cruise Lines</button>
                                <button className="rva-btn-outline">Plan My River Cruise</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="rva-section rva-bg-soft" id="rva-overview">
                <div className="rva-container">
                    <p className="rva-intro-text">This is one of the most important river cruise comparisons for travelers who already know they want a premium or luxury experience. One brand leans more boutique, spacious, and quietly refined. The other leans more active, more included, and more established across a wider range of destinations. That difference matters because it affects the entire feel of the trip.</p>
                </div>
            </section>

            {/* WHY TRUST */}
            <section className="rva-section rva-bg-white">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Why Trust This Comparison</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <p className="rva-body-text">This comparison is built for actual decision-making, not brochure language. It reflects how the two brands are positioned in the market today: Riverside with three all-suite ships in Europe and a more intimate luxury feel, and AmaWaterways with a much broader global footprint that includes Europe, Asia, Africa, and South America, along with extensive included shore experiences.</p>
                </div>
            </section>

            {/* KEY DIFFERENCES TABLE */}
            <section className="rva-section rva-bg-soft" id="rva-comparison">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Key Differences at a Glance</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <div className="rva-table-scroll">
                        <table className="rva-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Riverside</th>
                                    <th>AmaWaterways</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Positioning</td><td>Boutique luxury</td><td>Premium to premium-plus</td></tr>
                                <tr><td>Fleet Style</td><td>Three all-suite European ships</td><td>Larger global fleet</td></tr>
                                <tr><td>Best For</td><td>Travelers wanting space and quiet refinement</td><td>Travelers wanting more included activity and destination variety</td></tr>
                                <tr><td>Atmosphere</td><td>Calm, intimate, less structured</td><td>Social, active, more program driven</td></tr>
                                <tr><td>Destinations</td><td>Europe only</td><td>Europe, Asia, Africa, South America</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="rva-table-note">These differences are not small. They shape who each brand is actually best for. Riverside currently operates three all-suite ships in Europe, while AmaWaterways markets more than 100 itineraries across 32 countries and multiple regions beyond Europe.</p>
                </div>
            </section>

            {/* KEY FEATURES TABLE */}
            <section className="rva-section rva-bg-white">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Riverside vs AmaWaterways: Key Features Compared</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <div className="rva-table-scroll">
                        <table className="rva-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Riverside</th>
                                    <th>AmaWaterways</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Cabin Feel</td><td>More suite-forward and spacious</td><td>Varies by ship, generally well-appointed but less suite-centric</td></tr>
                                <tr><td>Excursions</td><td>Pre-selected excursions in each port</td><td>Included guided tours with multiple activity levels on many itineraries</td></tr>
                                <tr><td>Dining</td><td>Multiple dining venues and stronger boutique hotel feel</td><td>Regionally inspired dining with a more established river cruise rhythm</td></tr>
                                <tr><td>Included Drinks</td><td>Water, coffee, tea and some package inclusions vary by ship/package</td><td>Unlimited complimentary wine, beer and soft drinks with lunch and dinner, plus Sip & Sail cocktail hour</td></tr>
                                <tr><td>Geographic Reach</td><td>Danube, Rhine, Main, Rhône, Saône</td><td>Europe plus Mekong, Nile, Chobe, Magdalena and more</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="rva-table-note">Riverside emphasizes all-suite ships, multiple onboard dining venues, pre-selected excursions, Wi-Fi, and port and service charges in its packages, while AmaWaterways highlights included tours, multiple activity levels, and beverage inclusions like wine, beer, soft drinks at lunch and dinner, plus Sip & Sail.</p>
                </div>
            </section>

            {/* THE REAL DIFFERENCE */}
            <section className="rva-section rva-bg-soft">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">The Real Difference</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <div className="rva-diff-grid">
                        <div className="rva-diff-card">
                            <div className="rva-diff-badge rva-badge-riverside">Riverside</div>
                            <h4 className="rva-diff-title">Riverside Feels Like a Boutique Luxury Hotel on the Water</h4>
                            <p className="rva-diff-text">Riverside is for the traveler who notices space immediately and values it. The brand's three-ship fleet is built around all-suite river ships, and the overall message is personalized service, serene spaces, and a sophisticated onboard environment. This is the right lane for travelers who want river cruising to feel quieter, more residential, and less programmed.</p>
                        </div>
                        <div className="rva-diff-card">
                            <div className="rva-diff-badge rva-badge-ama">AmaWaterways</div>
                            <h4 className="rva-diff-title">AmaWaterways Feels More Established, Active, and Inclusion Driven</h4>
                            <p className="rva-diff-text">AmaWaterways is one of the most recognizable names in river cruising because it gives travelers a lot of structure and a lot of choice. The brand offers more than 100 itineraries in 32 countries, a large fleet, and guided shore experiences that range from city walks to hikes and bike rides. That makes it especially appealing to travelers who want a more active style of river cruising and appreciate having more destination breadth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="rva-section rva-bg-white" id="rva-pricing">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Pricing Comparison</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <div className="rva-pricing-block">
                        <p className="rva-body-text">Riverside generally belongs in the conversation when a client is comfortable paying for more space, a more intimate onboard feel, and a more boutique luxury positioning. AmaWaterways often appeals to travelers who still want a premium experience but place more value on included touring, active excursions, and a larger choice set of itineraries and destinations. I would position Riverside as the more boutique luxury choice and AmaWaterways as the stronger inclusion-and-activity value play within the premium-plus space. This pricing lens is an interpretation based on the brands' published positioning and inclusions, not a fixed fare chart, since fares vary by sailing date, itinerary, and cabin category.</p>
                    </div>
                </div>
            </section>

            {/* BEST FOR */}
            <section className="rva-section rva-bg-soft" id="rva-best-for">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Which River Cruise Is Best for You</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <div className="rva-best-for-list">
                        <div className="rva-best-for-item">
                            <span className="rva-best-for-label">Best for couples seeking a quieter atmosphere:</span>
                            <span className="rva-best-for-answer rva-answer-riverside">Riverside</span>
                        </div>
                        <div className="rva-best-for-item">
                            <span className="rva-best-for-label">Best for active travelers:</span>
                            <span className="rva-best-for-answer rva-answer-ama">AmaWaterways</span>
                        </div>
                        <div className="rva-best-for-item">
                            <span className="rva-best-for-label">Best for travelers wanting broader destination options:</span>
                            <span className="rva-best-for-answer rva-answer-ama">AmaWaterways</span>
                        </div>
                        <div className="rva-best-for-item">
                            <span className="rva-best-for-label">Best for travelers prioritizing suite-style space:</span>
                            <span className="rva-best-for-answer rva-answer-riverside">Riverside</span>
                        </div>
                        <div className="rva-best-for-item">
                            <span className="rva-best-for-label">Best for first-time premium river cruisers who want lots included:</span>
                            <span className="rva-best-for-answer rva-answer-ama">AmaWaterways</span>
                        </div>
                        <div className="rva-best-for-item">
                            <span className="rva-best-for-label">Best for travelers who want a more boutique European river experience:</span>
                            <span className="rva-best-for-answer rva-answer-riverside">Riverside</span>
                        </div>
                    </div>
                    <p className="rva-best-for-note">This split follows directly from how the brands describe their fleets and experiences. Riverside concentrates on a smaller all-suite luxury product in Europe, while AmaWaterways emphasizes broad itinerary choice and varied included shore experiences.</p>
                </div>
            </section>

            {/* BIGGEST MISTAKE */}
            <section className="rva-section rva-bg-dark">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2-white">The Biggest Mistake Travelers Make</h2>
                        <div className="rva-accent-line-white"></div>
                    </div>
                    <p className="rva-mistake-text">Most travelers think this is simply a choice between two river cruise lines in the same category. It is not. In reality, they are often choosing between two different priorities: more space and a more boutique onboard feel, or more activity, more shore touring, and more destination variety. That is why fit matters more than the brand name alone.</p>
                    <p className="rva-mistake-disclaimer">This is an inference based on each brand's published fleet, destination, and experience design.</p>
                </div>
            </section>

            {/* WHO SHOULD CHOOSE */}
            <section className="rva-section rva-bg-white">
                <div className="rva-container">
                    <div className="rva-choose-grid">
                        <div className="rva-choose-card">
                            <div className="rva-choose-card-top">
                                <div className="rva-diff-badge rva-badge-riverside">Riverside</div>
                                <h3 className="rva-choose-title">Who Should Choose Riverside</h3>
                            </div>
                            <p className="rva-choose-intro">Choose Riverside if you:</p>
                            <ul className="rva-choose-list">
                                <li><Check size={16} strokeWidth={2.5} /><span>want a more boutique luxury river cruise atmosphere</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>care deeply about suite space and a quieter onboard environment</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>prefer Europe and do not need a wider global footprint</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>want a product that feels more like a luxury hotel on the water</span></li>
                            </ul>
                            <p className="rva-choose-note">That recommendation aligns with Riverside's focus on all-suite ships, European rivers, personalized service, and refined onboard design.</p>
                        </div>
                        <div className="rva-choose-card">
                            <div className="rva-choose-card-top">
                                <div className="rva-diff-badge rva-badge-ama">AmaWaterways</div>
                                <h3 className="rva-choose-title">Who Should Choose AmaWaterways</h3>
                            </div>
                            <p className="rva-choose-intro">Choose AmaWaterways if you:</p>
                            <ul className="rva-choose-list rva-choose-list-ama">
                                <li><Check size={16} strokeWidth={2.5} /><span>want more destination choice beyond Europe</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>love included touring and active excursion options</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>want an established, recognizable river cruise brand with broad itinerary coverage</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>like a more social, active, program-rich pace</span></li>
                            </ul>
                            <p className="rva-choose-note">That recommendation reflects AmaWaterways' global itinerary map and its emphasis on included shore experiences such as guided walks, wine tastings, hikes, and bike rides.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERT INSIGHT */}
            <section className="rva-section rva-bg-soft">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Expert Insight</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <p className="rva-body-text">Most clients comparing Riverside and AmaWaterways are not comparing equals. They are usually choosing between a more spacious boutique European experience and a more activity-rich river cruise with broader destination reach. That is why this page should guide the client to the right fit instead of trying to declare one winner for everyone.</p>
                    <p className="rva-disclaimer">This is my judgment based on the brands' published positioning, not a direct quote from either company.</p>
                    <div className="rva-expert-callout">
                        <div className="rva-expert-callout-header">
                            <Award size={20} strokeWidth={1.5} />
                            <span>Expert Insight</span>
                        </div>
                        <p className="rva-expert-callout-text">AmaWaterways is especially strong for travelers who want the cruise line to do more of the organizing ashore, while Riverside is compelling for travelers who care more about onboard space, quieter luxury, and a less crowded feel.</p>
                        <p className="rva-disclaimer">That is an expert comparison based on the brands' published excursion and fleet positioning.</p>
                    </div>
                </div>
            </section>

            {/* HOW TO CHOOSE */}
            <section className="rva-section rva-bg-white">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">How to Choose the Right River Cruise</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <p className="rva-body-text" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>Choosing between Riverside and AmaWaterways is not about finding the universally better brand. It is about matching the right style of river cruise to the right traveler.</p>
                    <div className="rva-howto-paths">
                        <div className="rva-howto-path">
                            <div className="rva-howto-path-badge rva-badge-riverside">Riverside</div>
                            <p>If the client wants Europe, space, and a more boutique luxury atmosphere, lean Riverside.</p>
                        </div>
                        <div className="rva-howto-path">
                            <div className="rva-howto-path-badge rva-badge-ama">AmaWaterways</div>
                            <p>If the client wants more included activity, more geographic choice, and a deeper bench of itineraries, lean AmaWaterways.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="rva-section rva-bg-dark2">
                <div className="rva-container">
                    <div className="rva-cta-wrapper">
                        <h2 className="rva-cta-heading">Plan Your River Cruise the Right Way</h2>
                        <p className="rva-cta-sub">Work with an expert to match the right cruise line to your travel style, priorities, and budget.</p>
                        <div className="rva-cta-btns">
                            <button className="rva-cta-primary"><span>Plan My River Cruise</span><ArrowRight size={18} strokeWidth={2} /></button>
                            <button className="rva-cta-secondary"><span>Work With Angela Hughes</span><User size={18} strokeWidth={2} /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="rva-section rva-bg-soft">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">About Angela Hughes and Trips &amp; Ships Luxury Travel</h2>
                        <div className="rva-accent-line"></div>
                    </div>
                    <div className="rva-about-grid">
                        <div className="rva-about-portrait">
                            <img src={AboutImage} alt="Angela Hughes - Luxury Travel Expert" className="rva-about-img" />
                        </div>
                        <div className="rva-about-text">
                            <p className="rva-about-lead">When you are comparing river cruise lines like Riverside Luxury Cruises and AmaWaterways, you are not just choosing a ship—you are choosing the experience that will define your entire trip.</p>
                            <p className="rva-about-p">Angela Hughes brings more than 40 years of experience in the travel industry and is widely recognized as a leading voice in luxury travel, river cruising, and global itinerary design.</p>
                            <div className="rva-about-credential">
                                <Shield size={20} strokeWidth={1.5} />
                                <p>As CEO of Trips &amp; Ships Luxury Travel and founder of Luxury Travel University, Angela leads a network of over 140 travel advisors and has personally sold millions in luxury travel annually. Her team works across every major river cruise brand, giving her a real-world view of how these products actually perform—not just how they are marketed.</p>
                            </div>
                            <div className="rva-about-credential">
                                <Award size={20} strokeWidth={1.5} />
                                <p>Angela has been featured in Travel Weekly, TravelAge West, Travel Market Report, Insider Travel Report, and other leading industry publications. She has also been recognized as Luxury Travel Influencer of the Year and is a frequent global speaker, advising both travel professionals and cruise brands on trends shaping the luxury travel space.</p>
                            </div>
                            <div className="rva-about-credential">
                                <Layers size={20} strokeWidth={1.5} />
                                <p>What sets this perspective apart is independence. Angela and her team are not aligned with a single cruise line. They work across brands like Riverside Luxury Cruises and AmaWaterways, ensuring recommendations are based on experience, client fit, and long-term value—not supplier bias.</p>
                            </div>
                            <p className="rva-about-p">Trips &amp; Ships Luxury Travel operates as a high-level advisory firm. Clients work with Angela and her team to:</p>
                            <ul className="rva-about-list">
                                <li><Check size={16} strokeWidth={2.5} /><span>compare cruise lines with clarity</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>identify the right experience for their travel style</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>avoid costly planning mistakes</span></li>
                                <li><Check size={16} strokeWidth={2.5} /><span>maximize both value and overall experience</span></li>
                            </ul>
                            <p className="rva-about-closing">For travelers navigating a decision like Riverside versus AmaWaterways, that level of expertise ensures the trip is not just booked—but designed correctly from the start.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="rva-section rva-bg-white" id="rva-faq">
                <div className="rva-container">
                    <div className="rva-section-header">
                        <h2 className="rva-h2">Frequently Asked Questions</h2>
                        <div className="rva-accent-line"></div>
                        <p className="rva-faq-intro">Everything you need to know about Riverside vs AmaWaterways.</p>
                    </div>
                    <FAQ />
                </div>
            </section>
        </div>
    );
};

export default RiversidevsAmaWaterways;
