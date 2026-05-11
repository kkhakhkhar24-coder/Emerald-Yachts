import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
    Compass,
    DollarSign,
    Users,
    Activity,
    ShieldCheck,
    MapPin,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    Plane,
    Binoculars,
    Home,
    Heart,
    Zap,
    Sparkles,
    CheckCircle2,
    Calendar,
    Target,
    Award,
    Navigation,
    Info,
    LayoutGrid,
    Ship,
    Plus,
    Minus,
    Shield,
    Crown,
    Diamond,
    Check,
    ShieldAlert,
    XCircle,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import "./LuxuryAfricanSafariCost.css";

// Hero Images
import hero1 from "../../assets/LuxuryAfricanSafariCost/Hero_1.jpg";
import hero2 from "../../assets/LuxuryAfricanSafariCost/Hero_2.jpg";
import hero3 from "../../assets/LuxuryAfricanSafariCost/Hero_3.jpg";

// Profile Image
import profileImg from "../../assets/LuxuryAfricanSafariCost/Angela_Hughes.jpg";

// Brand Logos
import logo1 from "../../assets/LuxuryAfricanSafariCost/Travel_Weekly.webp";
import logo2 from "../../assets/LuxuryAfricanSafariCost/TravelPulse.webp";
import logo3 from "../../assets/LuxuryAfricanSafariCost/Travel_Leaders_Network.webp";
import logo4 from "../../assets/LuxuryAfricanSafariCost/The_Wall_Street_Journal.webp";
import logo5 from "../../assets/LuxuryAfricanSafariCost/The_Washington_Post.webp";
import logo6 from "../../assets/LuxuryAfricanSafariCost/Travel_Age_West.webp";
import logo7 from "../../assets/LuxuryAfricanSafariCost/Travelmarket_Report.webp";
import logo8 from "../../assets/LuxuryAfricanSafariCost/Insider_Travel_Report.webp";


export default function LuxuryAfricanSafariCost() {
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const [openFaq, setOpenFaq] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentHero, setCurrentHero] = useState(0);

    const faqItems = [
        {
            q: "How much does a luxury African safari cost for two people?",
            a: "Most luxury safaris range between $25,000 and $45,000+ per couple depending on season, camps, flights, and itinerary design."
        },
        {
            q: "Why are African safaris so expensive?",
            a: "Safaris involve remote operations, conservation fees, guides, aircraft, and highly specialized logistics."
        },
        {
            q: "What is included in a luxury safari?",
            a: "Typically accommodations, guiding, game drives, many meals, park fees, and internal safari logistics."
        },
        {
            q: "Are luxury safaris worth the money?",
            a: "When designed correctly, luxury safaris can be among the most transformative travel experiences in the world."
        },
        {
            q: "How much does a Kenya safari cost?",
            a: "Luxury Kenya safaris often range from $18,000 to $45,000+ per couple."
        },
        {
            q: "Is Tanzania more expensive than Kenya?",
            a: "Tanzania can sometimes cost more due to longer routing and additional internal flights."
        },
        {
            q: "How much does a Great Migration safari cost?",
            a: "Migration safaris during peak river crossing season often range from $35,000 to $60,000+ per couple."
        },
        {
            q: "Can safari be all inclusive?",
            a: "Many luxury safari camps include meals, drinks, guiding, and activities."
        },
        {
            q: "What is the cheapest time to go on safari?",
            a: "Shoulder and green seasons often provide the best value."
        },
        {
            q: "Do luxury safaris include flights?",
            a: "International airfare is often separate, while bush flights may be included depending on itinerary structure."
        },
        {
            q: "How much does a family safari cost?",
            a: "Luxury family safaris often begin around $30,000 and increase significantly based on size and routing."
        },
        {
            q: "Are private safari guides worth it?",
            a: "Yes, particularly for photographers, families, and migration safaris."
        },
        {
            q: "How early should I book a safari?",
            a: "9–18 months in advance for peak migration season."
        },
        {
            q: "What impacts safari pricing most?",
            a: "Season, camp level, private guiding, flights, and routing."
        },
        {
            q: "Can I combine safari with beaches?",
            a: "Yes. Zanzibar, Seychelles, and the Maldives are common luxury pairings."
        },
        {
            q: "Is safari better in Kenya or Tanzania?",
            a: "Both are exceptional, but they deliver different experiences depending on timing and goals."
        },
        {
            q: "Do I need a travel advisor for safari planning?",
            a: "Safari logistics are complex and expert guidance dramatically impacts the outcome."
        }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/luxury-african-safari-cost/#webpage",
                "url": "https://www.tripsandships.com/luxury-african-safari-cost/",
                "name": "Luxury African Safari Cost: What a High-End Safari Really Costs in 2027",
                "description": "How much does a luxury African safari cost? Detailed 2027 pricing guide for Kenya, Tanzania, Great Migration safaris, private guides, luxury camps, family safaris, honeymoon pricing, and what actually impacts safari costs.",
                "isPartOf": {
                    "@id": "https://www.tripsandships.com/#website"
                },
                "about": [
                    {
                        "@type": "Thing",
                        "name": "Luxury African Safari"
                    },
                    {
                        "@type": "Place",
                        "name": "Kenya"
                    },
                    {
                        "@type": "Place",
                        "name": "Tanzania"
                    },
                    {
                        "@type": "Thing",
                        "name": "Great Migration Safari"
                    },
                    {
                        "@type": "Thing",
                        "name": "Safari Cost"
                    }
                ],
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/images/luxury-african-safari-cost.jpg"
                }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/luxury-african-safari-cost/#article",
                "headline": "Luxury African Safari Cost: What a High-End Safari Really Costs",
                "description": "A detailed luxury safari pricing guide explaining African safari costs, Kenya and Tanzania safari pricing, Great Migration safari costs, family safari budgets, honeymoon safari pricing, and what impacts safari value.",
                "author": {
                    "@type": "Person",
                    "@id": "https://www.tripsandships.com/#angela-hughes",
                    "name": "Angela Hughes",
                    "url": "https://www.tripsandships.com/about-angela-hughes",
                    "jobTitle": "CEO of Trips & Ships Luxury Travel",
                    "worksFor": {
                        "@id": "https://www.tripsandships.com/#travelagency"
                    },
                    "knowsAbout": [
                        "Luxury travel",
                        "African safaris",
                        "Luxury safari planning",
                        "Kenya safaris",
                        "Tanzania safaris",
                        "Great Migration safaris",
                        "Safari pricing",
                        "Luxury family safaris",
                        "Safari honeymoons"
                    ],
                    "award": [
                        "Luxury Travel Influencer of the Year by Travel Leaders Network",
                        "Most Influential Women in Travel by TravelPulse",
                        "Travel Weekly Magellan Awards"
                    ]
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/luxury-african-safari-cost/#webpage"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/luxury-african-safari-cost/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How much does a luxury African safari cost for two people?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most luxury African safaris range between $25,000 and $45,000 or more per couple depending on season, camp level, private guiding, internal flights, and itinerary design."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are African safaris so expensive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "African safaris are expensive because they involve remote operations, conservation fees, highly trained guides, bush aircraft, limited camp inventory, and complex logistics in protected wildlife regions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included in a luxury safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury safaris typically include accommodations, game drives, many meals, guiding, park or conservation fees, and internal safari logistics. Inclusions vary by camp, country, and itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are luxury safaris worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A luxury safari can be worth the investment when the itinerary is designed correctly. The right camp location, guide quality, routing, timing, and operator relationships can dramatically improve the experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does a Kenya luxury safari cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A luxury Kenya safari often ranges from $18,000 to $45,000 or more per couple depending on the Maasai Mara camp selected, travel season, internal flights, and whether the safari includes private guiding."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Tanzania more expensive than Kenya for safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tanzania can sometimes cost more than Kenya because itineraries may involve longer distances, multiple safari regions, additional bush flights, and extended stays across the Serengeti, Ngorongoro Crater, or other areas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does a Great Migration safari cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Great Migration safari during peak river crossing season often ranges from $35,000 to $60,000 or more per couple, especially when using top camps, private guiding, and strategic camp placement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a luxury safari be all inclusive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many luxury safari camps include meals, drinks, guiding, game drives, and activities, but international airfare, some internal flights, premium beverages, visas, gratuities, and special experiences may be additional."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the cheapest time to go on safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Shoulder seasons and green seasons often provide the best value for luxury safaris. January through March, June, and November can offer strong wildlife experiences with better pricing than peak river crossing season."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do luxury safaris include flights?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "International airfare is often separate from safari pricing. Internal bush flights or charter flights may be included depending on how the itinerary is structured and which safari operator is used."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does a luxury family safari cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury family safaris often begin around $30,000 and can increase significantly depending on family size, private vehicles, family tents or villas, routing, guide selection, and travel season."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are private safari guides worth it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private safari guides are often worth the investment, especially for families, photographers, honeymooners, and Great Migration safaris. A private guide can improve pacing, positioning, flexibility, and the overall quality of the experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How early should I book a luxury safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury safaris should often be booked 9 to 18 months in advance, especially for peak Great Migration season, holiday periods, family travel, and top luxury camps with limited inventory."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What impacts safari pricing the most?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Safari pricing is most affected by travel season, camp level, camp location, private versus shared guiding, internal flights, charter aircraft, country combination, and overall itinerary design."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I combine a safari with a beach vacation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Popular luxury safari and beach combinations include Tanzania with Zanzibar, Kenya with the Seychelles, and Southern Africa with the Indian Ocean islands."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is safari better in Kenya or Tanzania?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kenya and Tanzania are both exceptional safari destinations, but they deliver different experiences. Kenya often works well for first-time travelers and shorter trips, while Tanzania is ideal for longer, more immersive safaris."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need a travel advisor for safari planning?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A knowledgeable travel advisor is highly valuable for safari planning because camp placement, timing, routing, guide quality, and operator selection directly impact the outcome of the trip."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/luxury-african-safari-cost/#breadcrumb",
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
                        "name": "Luxury Safaris",
                        "item": "https://www.tripsandships.com/luxury-safaris/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Luxury African Safari Cost",
                        "item": "https://www.tripsandships.com/luxury-african-safari-cost/"
                    }
                ]
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "telephone": "+1-603-860-3274",
                "email": "sales@tripsandships.com",
                "areaServed": "Worldwide",
                "founder": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "knowsAbout": [
                    "Luxury travel",
                    "African safaris",
                    "Luxury safari pricing",
                    "Kenya luxury safaris",
                    "Tanzania luxury safaris",
                    "Great Migration safaris",
                    "Luxury family safaris",
                    "Safari honeymoons"
                ],
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/images/logo.png"
                }
            }
        ]
    };

    const heroImages = [hero1, hero2, hero3];

    useEffect(() => {
        const heroTimer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(heroTimer);
    }, [heroImages.length]);



    return (
        <div className="lasc-root">
            <Helmet>
                <title>Luxury African Safari Cost: What a High-End Safari Really Costs in 2027</title>
                <meta name="description" content="How much does a luxury African safari cost? Detailed 2027 pricing guide for Kenya, Tanzania, Great Migration safaris, private guides, luxury camps, family safaris, honeymoon pricing, and what actually impacts safari costs." />
                <link rel="canonical" href="https://www.tripsandships.com/luxury-african-safari-cost/" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO SECTION ── */}
            <section className="lasc-section lasc-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`lasc-hero-bg ${index === currentHero ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="lasc-hero-overlay"></div>

                <div className="lasc-container lasc-hero-inner">
                    <h1 className="lasc-h1 lasc-h1-hero">
                        Luxury African Safari Cost <br /> What a High-End Safari Really Costs
                    </h1>

                    <div className="lasc-hero-text">
                        <p>Luxury safari pricing is one of the most misunderstood parts of travel. Many travelers begin researching Africa expecting safari pricing to function like a traditional beach vacation or European hotel stay. It does not.</p>
                        <p>Luxury safaris are highly logistical experiences involving aircraft, conservation fees, remote camps, migration movement, private guides, and some of the most specialized hospitality operations in the world.</p>
                    </div>

                    <div className={`lasc-hero-details ${showAnswer ? "expanded" : ""}`}>
                        <div className="lasc-snippet-card">
                            <div className="lasc-snippet-header">
                                <h2 className="lasc-snippet-title">
                                    <Sparkles size={18} className="lasc-accent-icon" />
                                    Quick Answer: What determines the difference between a $10,000 and $40,000 safari?
                                </h2>
                                <p className="lasc-snippet-intro">
                                    The difference between a $10,000 safari and a $40,000 safari is often <strong className="lasc-bold">operational, not cosmetic</strong>.
                                </p>
                            </div>

                            <div className="lasc-snippet-grid">
                                <div className="lasc-snippet-feature">
                                    <Target size={20} className="lasc-feature-icon" />
                                    <div className="lasc-feature-text">
                                        <span className="lasc-feature-label">Movement</span>
                                        <p>Positioning directly in wildlife movement vs. hours in transit</p>
                                    </div>
                                </div>
                                <div className="lasc-snippet-feature">
                                    <Users size={20} className="lasc-feature-icon" />
                                    <div className="lasc-feature-text">
                                        <span className="lasc-feature-label">Guiding</span>
                                        <p>Private guiding vs. crowded game vehicles</p>
                                    </div>
                                </div>
                                <div className="lasc-snippet-feature">
                                    <MapPin size={20} className="lasc-feature-icon" />
                                    <div className="lasc-feature-text">
                                        <span className="lasc-feature-label">Placement</span>
                                        <p>Strategic camp placement vs. generic routing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lasc-expert-takeaway">
                                <div className="lasc-expert-badge">Expert Takeaway</div>
                                <p className="lasc-expert-quote">
                                    "In Africa, location matters more than luxury branding. With over four decades in the travel industry, travel to 121+ countries, and extensive safari experience across East Africa, Angela Hughes helps travelers understand not only what a luxury safari costs, but why. Because the cheapest safari and the right safari are almost never the same thing."
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="lasc-hero-toggle" onClick={() => setShowAnswer(!showAnswer)}>
                        <span className="lasc-flex-center">
                            {showAnswer ? <Minus size={14} style={{ marginRight: "6px" }} /> : <Plus size={14} style={{ marginRight: "6px" }} />}
                            {showAnswer ? "Hide Quick Answer" : "View Quick Answer"}
                        </span>
                    </button>

                    <div className="lasc-hero-btns">
                        <a href="#consultation" className="lasc-btn-primary">
                            Schedule a 15-Minute Luxury Safari Consultation
                        </a>
                        <p className="lasc-cta-subtext">If you are investing this much into Africa, the itinerary needs to be designed correctly.</p>
                    </div>
                </div>
            </section>

            {/* ── AS SEEN IN (Continuous Marquee) ── */}
            <section className="lasc-media-marquee">
                <div className="lasc-marquee-track">
                    <div className="lasc-marquee-content">
                        <img src={logo1} alt="Travel Weekly" />
                        <img src={logo2} alt="TravelPulse" />
                        <img src={logo3} alt="Travel Leaders Network" />
                        <img src={logo4} alt="The Wall Street Journal" />
                        <img src={logo5} alt="The Washington Post" />
                        <img src={logo6} alt="Travel Age West" />
                        <img src={logo7} alt="Travel Market Report" />
                        <img src={logo8} alt="Insider Travel Report" />

                        {/* Duplicate for seamless continuous loop */}
                        <img src={logo1} alt="Travel Weekly" />
                        <img src={logo2} alt="TravelPulse" />
                        <img src={logo3} alt="Travel Leaders Network" />
                        <img src={logo4} alt="The Wall Street Journal" />
                        <img src={logo5} alt="The Washington Post" />
                        <img src={logo6} alt="Travel Age West" />
                        <img src={logo7} alt="Travel Market Report" />
                        <img src={logo8} alt="Insider Travel Report" />
                    </div>
                </div>
            </section>

            {/* ── WHY LUXURY AFRICAN SAFARIS COST MORE ── */}
            <section className="lasc-why-more">
                <div className="lasc-why-more-inner">
                    <div className="lasc-why-grid">
                        <div className="lasc-why-intro-box">
                            <h2 className="lasc-h2">WHY LUXURY AFRICAN SAFARIS COST MORE THAN MOST TRAVEL</h2>
                            <p className="lasc-p">This is where many travelers are surprised.</p>
                            <p className="lasc-p">Unlike traditional vacations, luxury safaris involve layered operational costs that most travelers never see. These include:</p>
                        </div>

                        <div className="lasc-operational-layers">
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">01</span>
                                <Plane size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">remote bush flights</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">02</span>
                                <ShieldCheck size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">conservation and park fees</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">03</span>
                                <Binoculars size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">highly trained guides and trackers</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">04</span>
                                <Activity size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">private safari vehicles</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">05</span>
                                <Navigation size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">migration-based camp positioning</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">06</span>
                                <Users size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">staffing ratios in remote locations</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">07</span>
                                <Plane size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">charter aircraft</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">08</span>
                                <Zap size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">fuel and logistics transported into isolated areas</span>
                            </div>
                            <div className="lasc-layer-item">
                                <span className="lasc-layer-num">09</span>
                                <LayoutGrid size={24} className="lasc-layer-icon" />
                                <span className="lasc-layer-text">small camp inventory with limited occupancy</span>
                            </div>
                        </div>
                    </div>
                    <div className="lasc-conclusion-container">
                        <div className="lasc-pill-callout">
                            <div className="lasc-pill-title">
                                Luxury safari pricing is not built like mass tourism.
                            </div>
                            <div className="lasc-pill-divider"></div>
                            <div className="lasc-pill-text">
                                It is built around access, positioning, expertise, and conservation.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRICING BREAKDOWN (Architectural Columns Design) ── */}
            <section className="lasc-frames-section">
                <div className="lasc-frames-inner">
                    <div className="lasc-frames-header">
                        <h2 className="lasc-h2-pricing">WHAT DOES A LUXURY SAFARI ACTUALLY COST?</h2>
                        <p className="lasc-p-breakdown">LUXURY SAFARI PRICING BREAKDOWN</p>
                    </div>

                    <div className="lasc-frames-grid">
                        {/* Entry Luxury */}
                        <div className="lasc-frame-panel">
                            <div className="lasc-frame-head">
                                <ShieldCheck className="lasc-frame-icon" size={24} strokeWidth={1.5} />
                                <h3 className="lasc-frame-tier">Entry Luxury</h3>
                            </div>
                            <p className="lasc-frame-desc">Shared safari, regional flights, upscale camps</p>
                            <div className="lasc-frame-price-box">
                                <div className="lasc-frame-price">$12,000–18,000</div>
                                <span className="lasc-frame-unit">per couple</span>
                            </div>
                        </div>

                        {/* Premium Luxury */}
                        <div className="lasc-frame-panel lasc-frame-panel--featured">
                            <div className="lasc-frame-head">
                                <Crown className="lasc-frame-icon" size={24} strokeWidth={1.5} />
                                <h3 className="lasc-frame-tier">Premium Luxury</h3>
                            </div>
                            <p className="lasc-frame-desc">Luxury camps, excellent guides, strategic routing</p>
                            <div className="lasc-frame-price-box">
                                <div className="lasc-frame-price">$25,000–45,000</div>
                                <span className="lasc-frame-unit">per couple</span>
                            </div>
                        </div>

                        {/* Ultra Luxury */}
                        <div className="lasc-frame-panel">
                            <div className="lasc-frame-head">
                                <Diamond className="lasc-frame-icon" size={24} strokeWidth={1.5} />
                                <h3 className="lasc-frame-tier">Ultra Luxury</h3>
                            </div>
                            <p className="lasc-frame-desc">Private charters, Singita-level properties, exclusive-use experiences</p>
                            <div className="lasc-frame-price-box">
                                <div className="lasc-frame-price">$50,000–250,000+</div>
                                <span className="lasc-frame-unit">per couple</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. BUDGET EXAMPLES (Safari Itinerary Ledger Design) ── */}
            <section className="lasc-ledger-budget-section">
                <div className="lasc-ledger-budget-inner">
                    <div className="lasc-ledger-budget-header">
                        <h2 className="lasc-h2">Real Luxury Safari Budget Examples</h2>
                    </div>

                    <div className="lasc-ledger-budget-grid">
                        {/* Kenya Safari */}
                        <div className="lasc-ledger-budget-card">
                            <div className="lasc-ledger-budget-head">
                                <div className="lasc-ledger-budget-meta">7-DAY EXPERIENCE</div>
                                <h3 className="lasc-ledger-budget-title">Kenya Luxury Safari</h3>
                            </div>
                            <div className="lasc-ledger-budget-content">
                                <ul className="lasc-ledger-budget-list">
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> luxury tented camp</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> internal flights</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> shared game drives</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> premium safari guides</li>
                                </ul>
                            </div>
                            <div className="lasc-ledger-budget-price-box">
                                <span className="lasc-ledger-budget-label">ESTIMATED COST</span>
                                <div className="lasc-ledger-budget-value">$18,000–28,000</div>
                                <span className="lasc-ledger-budget-unit">per couple</span>
                            </div>
                        </div>

                        {/* Migration Safari */}
                        <div className="lasc-ledger-budget-card lasc-ledger-budget-card--featured">
                            <div className="lasc-ledger-budget-head">
                                <div className="lasc-ledger-budget-meta">10-DAY EXPERIENCE</div>
                                <h3 className="lasc-ledger-budget-title">Great Migration Safari</h3>
                            </div>
                            <div className="lasc-ledger-budget-content">
                                <ul className="lasc-ledger-budget-list">
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> two luxury camps</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> migration season timing</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> charter or bush flights</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> private safari vehicle</li>
                                </ul>
                            </div>
                            <div className="lasc-ledger-budget-price-box">
                                <span className="lasc-ledger-budget-label">ESTIMATED COST</span>
                                <div className="lasc-ledger-budget-value">$35,000–60,000+</div>
                                <span className="lasc-ledger-budget-unit">per couple</span>
                            </div>
                        </div>

                        {/* Kenya + Zanzibar */}
                        <div className="lasc-ledger-budget-card">
                            <div className="lasc-ledger-budget-head">
                                <div className="lasc-ledger-budget-meta">ITINERARY PAIRING</div>
                                <h3 className="lasc-ledger-budget-title">Kenya + Zanzibar</h3>
                            </div>
                            <div className="lasc-ledger-budget-content">
                                <ul className="lasc-ledger-budget-list">
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> luxury bush camp</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> boutique beach resort</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> all transfers included</li>
                                    <li><Check size={16} className="lasc-ledger-budget-check" /> guided island excursions</li>
                                </ul>
                            </div>
                            <div className="lasc-ledger-budget-price-box">
                                <span className="lasc-ledger-budget-label">ESTIMATED COST</span>
                                <div className="lasc-ledger-budget-value">$25,000–45,000+</div>
                                <span className="lasc-ledger-budget-unit">per couple</span>
                            </div>
                        </div>
                    </div>

                    {/* Ultra Luxury Wide Card */}
                    <div className="lasc-ledger-budget-card lasc-ledger-budget-card--wide lasc-mt-md">
                        <div className="lasc-ledger-budget-head">
                            <div className="lasc-ledger-budget-meta">ULTRA LUXURY EXPEDITION</div>
                            <h3 className="lasc-ledger-budget-title">Ultra Luxury East Africa Safari</h3>
                        </div>
                        <div className="lasc-ledger-budget-content lasc-ledger-budget-content--flex">
                            <ul className="lasc-ledger-budget-list">
                                <li><Check size={16} className="lasc-ledger-budget-check" /> private charter aircraft</li>
                                <li><Check size={16} className="lasc-ledger-budget-check" /> exclusive-use camps</li>
                                <li><Check size={16} className="lasc-ledger-budget-check" /> Singita or ultra-premium operators</li>
                                <li><Check size={16} className="lasc-ledger-budget-check" /> multiple countries</li>
                            </ul>
                            <div className="lasc-ledger-budget-price-box">
                                <span className="lasc-ledger-budget-label">ESTIMATED COST</span>
                                <div className="lasc-ledger-budget-value">$80,000–250,000+</div>
                                <span className="lasc-ledger-budget-unit">starting price</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. WHY EXPENSIVE (Modern High-End Explainer Design) ── */}
            <section className="lasc-why-section">
                <div className="lasc-why-inner">
                    <div className="lasc-why-content">
                        <h2 className="lasc-h2">Why Are African Safaris So Expensive?</h2>
                        <p className="lasc-p">This is one of the most searched safari questions online. The answer is not simple because safaris are not simple operations. A luxury safari may involve:</p>
                    </div>

                    <div className="lasc-why-pillar-grid">
                        <div className="lasc-why-pillar">
                            <Plane className="lasc-why-pillar-icon" size={32} strokeWidth={1} />
                            <p className="lasc-why-pillar-text">bush aircraft into remote regions</p>
                        </div>
                        <div className="lasc-why-pillar">
                            <Users className="lasc-why-pillar-icon" size={32} strokeWidth={1} />
                            <p className="lasc-why-pillar-text">guides with decades of wildlife expertise</p>
                        </div>
                        <div className="lasc-why-pillar">
                            <Home className="lasc-why-pillar-icon" size={32} strokeWidth={1} />
                            <p className="lasc-why-pillar-text">highly restricted camp inventory</p>
                        </div>
                        <div className="lasc-why-pillar">
                            <Heart className="lasc-why-pillar-icon" size={32} strokeWidth={1} />
                            <p className="lasc-why-pillar-text">conservation fees that directly support wildlife protection</p>
                        </div>
                        <div className="lasc-why-pillar">
                            <Activity className="lasc-why-pillar-icon" size={32} strokeWidth={1} />
                            <p className="lasc-why-pillar-text">staffing and supply chains operating far from cities</p>
                        </div>
                    </div>

                    <div className="lasc-sleek-box">
                        <p className="lasc-sleek-text">You are not simply paying for a hotel room.</p>
                        <div className="lasc-sleek-line"></div>
                        <h3 className="lasc-sleek-main">You are paying for access to some of the most remote wildlife regions left on earth.</h3>
                    </div>
                </div>
            </section>

            {/* ── 7. WHAT CHEAP SAFARIS MISS (Modular Grid Ledger Design) ── */}
            <section className="lasc-miss-section">
                <div className="lasc-miss-inner">
                    <div className="lasc-miss-header">
                        <div className="lasc-miss-eyebrow">OPERATIONAL RISKS</div>
                        <h2 className="lasc-h2">WHAT CHEAP SAFARIS OFTEN MISS</h2>
                        <p className="lasc-p">This is where many travelers make expensive mistakes trying to save money.</p>
                        <p className="lasc-p-small">Lower-cost safaris often involve:</p>
                    </div>

                    <div className="lasc-miss-ledger">
                        <div className="lasc-miss-ledger-item">
                            <div className="lasc-miss-ledger-icon">
                                <XCircle size={24} />
                            </div>
                            <span className="lasc-miss-ledger-text">long daily drives</span>
                        </div>
                        <div className="lasc-miss-ledger-item">
                            <div className="lasc-miss-ledger-icon">
                                <XCircle size={24} />
                            </div>
                            <span className="lasc-miss-ledger-text">overcrowded vehicles</span>
                        </div>
                        <div className="lasc-miss-ledger-item">
                            <div className="lasc-miss-ledger-icon">
                                <XCircle size={24} />
                            </div>
                            <span className="lasc-miss-ledger-text">weak camp positioning</span>
                        </div>
                        <div className="lasc-miss-ledger-item">
                            <div className="lasc-miss-ledger-icon">
                                <XCircle size={24} />
                            </div>
                            <span className="lasc-miss-ledger-text">inexperienced guides</span>
                        </div>
                        <div className="lasc-miss-ledger-item">
                            <div className="lasc-miss-ledger-icon">
                                <XCircle size={24} />
                            </div>
                            <span className="lasc-miss-ledger-text">poor wildlife access</span>
                        </div>
                        <div className="lasc-miss-ledger-item">
                            <div className="lasc-miss-ledger-icon">
                                <XCircle size={24} />
                            </div>
                            <span className="lasc-miss-ledger-text">excessive transit time</span>
                        </div>
                    </div>

                    <div className="lasc-split-callout">
                        <div className="lasc-split-callout-left">
                            <p className="lasc-p">A safari can look luxurious online while being <span className="lasc-accent-text">poorly designed operationally</span>.</p>
                        </div>
                        <div className="lasc-split-callout-divider"></div>
                        <div className="lasc-split-callout-right">
                            <p className="lasc-p-display">This is why experience matters.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 8. KENYA VS TANZANIA (Modernist Architectural Ledger Design) ── */}
            <section className="lasc-ledger-section">
                <div className="lasc-ledger-inner">
                    <div className="lasc-ledger-header">
                        <div className="lasc-ledger-eyebrow">REGIONAL COMPARISON</div>
                        <h2 className="lasc-h2">KENYA VS TANZANIA SAFARI COST</h2>
                        <div className="lasc-ledger-header-line"></div>
                    </div>

                    <div className="lasc-ledger-grid">
                        {/* Kenya Ledger Sheet */}
                        <div className="lasc-ledger-sheet lasc-sheet-light">
                            <div className="lasc-ledger-sheet-inner">
                                <div className="lasc-ledger-sheet-head">
                                    <div className="lasc-ledger-icon-wrap">
                                        <Navigation size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="lasc-h3">Kenya Luxury <br /> Safari Pricing</h3>
                                </div>
                                <div className="lasc-ledger-sheet-body">
                                    <p className="lasc-ledger-label">IDEAL SELECTION FOR:</p>
                                    <ul className="lasc-ledger-list">
                                        <li><ArrowRight size={16} /> shorter luxury safaris</li>
                                        <li><ArrowRight size={16} /> first-time safari travelers</li>
                                        <li><ArrowRight size={16} /> Maasai Mara focus</li>
                                    </ul>
                                    <div className="lasc-ledger-insight">
                                        <div className="lasc-ledger-insight-tag">INSIGHT</div>
                                        <p className="lasc-p">Kenya often offers slightly more efficient logistics, which can impact overall pricing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tanzania Ledger Sheet */}
                        <div className="lasc-ledger-sheet lasc-sheet-dark">
                            <div className="lasc-ledger-sheet-inner">
                                <div className="lasc-ledger-sheet-head">
                                    <div className="lasc-ledger-icon-wrap">
                                        <Binoculars size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="lasc-h3">Tanzania Luxury <br /> Safari Pricing</h3>
                                </div>
                                <div className="lasc-ledger-sheet-body">
                                    <p className="lasc-ledger-label">TYPICALLY INVOLVES:</p>
                                    <ul className="lasc-ledger-list">
                                        <li><ArrowRight size={16} /> longer distances</li>
                                        <li><ArrowRight size={16} /> multiple ecosystems</li>
                                        <li><ArrowRight size={16} /> bush flight logistics</li>
                                        <li><ArrowRight size={16} /> extended itineraries</li>
                                    </ul>
                                    <div className="lasc-ledger-insight">
                                        <div className="lasc-ledger-insight-tag">SEASONAL</div>
                                        <p className="lasc-p">Costs often increase during Great Migration season periods.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lasc-ledger-footer">
                        <div className="lasc-premium-cta">
                            <div className="lasc-premium-cta-left">
                                <div className="lasc-premium-cta-tag">DECISION GUIDE</div>
                                <h4 className="lasc-premium-cta-title">Trying to decide between the two?</h4>
                            </div>
                            <div className="lasc-premium-cta-right">
                                <a href="/kenya-vs-tanzania-safari" className="lasc-premium-cta-btn">
                                    <span>READ THE FULL COMPARISON</span>
                                    <div className="lasc-premium-cta-icon">
                                        <ArrowRight size={20} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 9. BEST VALUE TIMES (Dark Luxury Timeline) ── */}
            <section className="lasc-value-section">
                <div className="lasc-value-inner">
                    <div className="lasc-value-header">
                        <h2 className="lasc-h2">BEST VALUE TIMES FOR A LUXURY SAFARI</h2>
                        <p className="lasc-p">Luxury safari does not always mean peak season. Some of the best value periods include:</p>
                    </div>

                    <div className="lasc-timeline">
                        <div className="lasc-timeline-spine"></div>

                        {/* January–March */}
                        <div className="lasc-tl-row lasc-tl-row--left">
                            <div className="lasc-tl-card">
                                <div className="lasc-tl-month">JAN – MAR</div>
                                <h3 className="lasc-h3">Calving season in Tanzania</h3>
                                <p className="lasc-p">Strong wildlife activity with excellent photography opportunities</p>
                            </div>
                            <div className="lasc-tl-node">
                                <div className="lasc-tl-dot"></div>
                            </div>
                            <div className="lasc-tl-spacer"></div>
                        </div>

                        {/* June */}
                        <div className="lasc-tl-row lasc-tl-row--right">
                            <div className="lasc-tl-spacer"></div>
                            <div className="lasc-tl-node">
                                <div className="lasc-tl-dot"></div>
                            </div>
                            <div className="lasc-tl-card">
                                <div className="lasc-tl-month">JUNE</div>
                                <h3 className="lasc-h3">Early migration movement</h3>
                                <p className="lasc-p">Fewer crowds than peak river crossing season</p>
                            </div>
                        </div>

                        {/* November */}
                        <div className="lasc-tl-row lasc-tl-row--left">
                            <div className="lasc-tl-card">
                                <div className="lasc-tl-month">NOVEMBER</div>
                                <h3 className="lasc-h3">Lower crowds and transitional pricing</h3>
                                <p className="lasc-p">Excellent overall value for luxury travelers</p>
                            </div>
                            <div className="lasc-tl-node">
                                <div className="lasc-tl-dot"></div>
                            </div>
                            <div className="lasc-tl-spacer"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 10. MOST EXPENSIVE TIMES (Peak Alert Design) ── */}
            <section className="lasc-peak-section">
                <div className="lasc-peak-inner">
                    <div className="lasc-peak-header">
                        <h2 className="lasc-h2">MOST EXPENSIVE TIMES FOR SAFARI</h2>
                        <p className="lasc-p">Peak season pricing reflects extraordinary demand. Plan well ahead.</p>
                    </div>

                    <div className="lasc-peak-body">
                        {/* Left — period + context */}
                        <div className="lasc-peak-left">
                            <div className="lasc-peak-period">JULY – OCTOBER</div>
                            <h3 className="lasc-h3">Peak Great Migration river crossing season.</h3>
                            <p className="lasc-p">This period typically includes the highest demand across all luxury camps. This is when planning far in advance becomes critical.</p>
                        </div>

                        {/* Right — three alert pills */}
                        <div className="lasc-peak-right">
                            <div className="lasc-peak-pill">
                                <TrendingUp size={22} strokeWidth={1.5} className="lasc-peak-icon" />
                                <div className="lasc-peak-pill-text">
                                    <span className="lasc-peak-pill-label">HIGHEST CAMP PRICING</span>
                                    <span className="lasc-peak-pill-sub">Rates climb to annual peaks</span>
                                </div>
                            </div>
                            <div className="lasc-peak-pill">
                                <AlertCircle size={22} strokeWidth={1.5} className="lasc-peak-icon" />
                                <div className="lasc-peak-pill-text">
                                    <span className="lasc-peak-pill-label">LOWEST AVAILABILITY</span>
                                    <span className="lasc-peak-pill-sub">Camps book out months ahead</span>
                                </div>
                            </div>
                            <div className="lasc-peak-pill">
                                <Users size={22} strokeWidth={1.5} className="lasc-peak-icon" />
                                <div className="lasc-peak-pill-text">
                                    <span className="lasc-peak-pill-label">STRONGEST DEMAND</span>
                                    <span className="lasc-peak-pill-sub">Highest traveler competition globally</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 11. FAMILY & HONEYMOON (Luxury Canvas Design) ── */}
            <section className="lasc-canvas-section">
                <div className="lasc-canvas-container">
                    <div className="lasc-canvas-grid">
                        {/* Family Card */}
                        <div className="lasc-canvas-card lasc-canvas-card--family">
                            <div className="lasc-canvas-tag">EXPERIENCE GUIDE</div>
                            <h2 className="lasc-h2">Luxury Family Safari Cost</h2>
                            <p className="lasc-p">Luxury family safaris require different planning than couples travel. Factors include:</p>
                            
                            <ul className="lasc-canvas-list">
                                <li><Home size={18} className="lasc-canvas-icon" /> larger family tents or villas</li>
                                <li><Users size={18} className="lasc-canvas-icon" /> private vehicles</li>
                                <li><Activity size={18} className="lasc-canvas-icon" /> pacing for children</li>
                                <li><Target size={18} className="lasc-canvas-icon" /> guide selection</li>
                                <li><ShieldCheck size={18} className="lasc-canvas-icon" /> safety and age requirements</li>
                            </ul>

                            <div className="lasc-canvas-footer">
                                <span className="lasc-canvas-price-label">Typical range:</span>
                                <span className="lasc-canvas-price-value">$30,000–80,000+ depending on family size and routing.</span>
                            </div>
                        </div>

                        {/* Honeymoon Card */}
                        <div className="lasc-canvas-card lasc-canvas-card--honeymoon">
                            <div className="lasc-canvas-tag">EXPERIENCE GUIDE</div>
                            <h2 className="lasc-h2">Luxury Safari Honeymoon Cost</h2>
                            <p className="lasc-p">Luxury safari honeymoons remain one of the most extraordinary travel experiences in the world. Popular combinations include:</p>
                            
                            <ul className="lasc-canvas-list">
                                <li><Heart size={18} className="lasc-canvas-icon" /> Kenya + Seychelles</li>
                                <li><Sparkles size={18} className="lasc-canvas-icon" /> Tanzania + Zanzibar</li>
                                <li><MapPin size={18} className="lasc-canvas-icon" /> South Africa + Victoria Falls</li>
                            </ul>

                            <div className="lasc-canvas-footer">
                                <span className="lasc-canvas-price-label">Typical luxury honeymoon safari range:</span>
                                <span className="lasc-canvas-price-value">$25,000–75,000+ per couple.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 12. COMMON MISTAKES (Value Protection Grid) ── */}
            <section className="lasc-mistakes-section">
                <div className="lasc-mistakes-container">
                    <div className="lasc-mistakes-header">
                        <h2 className="lasc-h2">Most Common Safari Pricing Mistakes</h2>
                        <p className="lasc-p">This is where travelers often overspend or misunderstand value.</p>
                    </div>

                    <div className="lasc-mistakes-grid">
                        {[
                            "underestimating internal flight costs",
                            "choosing camps too far apart",
                            "focusing only on lodge design",
                            "misunderstanding migration pricing",
                            "skipping private guides",
                            "choosing based on price instead of routing"
                        ].map((mistake, i) => (
                            <div className="lasc-mistake-card" key={i}>
                                <div className="lasc-mistake-icon-wrap">
                                    <XCircle size={20} strokeWidth={1.5} />
                                </div>
                                <span className="lasc-mistake-text">{mistake}</span>
                            </div>
                        ))}
                    </div>

                    <div className="lasc-mistakes-footer">
                        <p className="lasc-p">The wrong design creates expensive disappointment.</p>
                    </div>
                </div>
            </section>

            {/* ── 13. WHO THIS GUIDE IS FOR (Archetype Grid) ── */}
            <section className="lasc-audience-section">
                <div className="lasc-audience-container">
                    <div className="lasc-audience-header">
                        <h2 className="lasc-h2">Who This Guide Is For</h2>
                        <p className="lasc-p">This guide is designed for:</p>
                    </div>

                    <div className="lasc-audience-grid">
                        {[
                            { text: "luxury travelers researching Africa", icon: <Diamond size={24} strokeWidth={1.5} /> },
                            { text: "first-time safari travelers", icon: <Compass size={24} strokeWidth={1.5} /> },
                            { text: "honeymoon clients", icon: <Heart size={24} strokeWidth={1.5} /> },
                            { text: "families planning multi-generational safaris", icon: <Users size={24} strokeWidth={1.5} /> },
                            { text: "travelers considering Kenya vs Tanzania", icon: <MapPin size={24} strokeWidth={1.5} /> },
                            { text: "travelers planning Great Migration safaris", icon: <Sparkles size={24} strokeWidth={1.5} /> }
                        ].map((item, i) => (
                            <div className="lasc-audience-card" key={i}>
                                <div className="lasc-audience-icon">{item.icon}</div>
                                <span className="lasc-audience-text">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 14. HOW WE DESIGN SAFARIS DIFFERENTLY (Strategic Spread) ── */}
            <section className="lasc-design-section">
                <div className="lasc-design-container">
                    <div className="lasc-design-header">
                        <h2 className="lasc-h2">How We Design Safaris Differently</h2>
                        <p className="lasc-p">This is where safari planning becomes strategic.</p>
                    </div>

                    <div className="lasc-design-content">
                        <div className="lasc-design-left">
                            <h3 className="lasc-design-subtitle">We focus on:</h3>
                            <ul className="lasc-design-list">
                                {[
                                    "camp placement over branding",
                                    "wildlife movement over marketing",
                                    "routing efficiency",
                                    "strong guide partnerships",
                                    "balancing experience with logistics"
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Zap size={18} className="lasc-design-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lasc-design-right">
                            <div className="lasc-vision-card">
                                <p className="lasc-vision-quote">"Luxury safari is not about booking a room."</p>
                                <p className="lasc-vision-sub">It is about engineering an experience.</p>
                                <div className="lasc-vision-accent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 15. ABOUT ANGELA HUGHES (Luxury Profiler) ── */}
            <section className="lasc-about-section">
                <div className="lasc-about-container">
                    <div className="lasc-about-grid">
                        <div className="lasc-about-image-wrap">
                            <img src={profileImg} alt="Angela Hughes" className="lasc-about-portrait" />
                            <div className="lasc-about-image-accent"></div>
                        </div>

                        <div className="lasc-about-content">
                            <div className="lasc-about-header">
                                <h2 className="lasc-h2">About Angela Hughes</h2>
                                <p className="lasc-p">Angela Hughes is one of the most recognized voices in luxury travel. She has spent decades designing complex, high-end itineraries across Africa and around the world, working directly with top safari operators, camps, and on-the-ground teams. Her work has been recognized across the industry.</p>
                            </div>

                            <div className="lasc-recognition-wrap">
                                <h3 className="lasc-recognition-title">Industry Recognition</h3>
                                <div className="lasc-recognition-grid">
                                    {[
                                        "Named Luxury Travel Influencer of the Year by Travel Leaders Network",
                                        "Recognized as one of the Most Influential Women in Travel by TravelPulse",
                                        "Winner of multiple Magellan Awards from Travel Weekly"
                                    ].map((award, i) => (
                                        <div className="lasc-award-badge" key={i}>
                                            <Award size={20} className="lasc-award-icon" />
                                            <span>{award}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lasc-about-signature">
                                <p className="lasc-signature-text">Clients do not work with Angela Hughes to simply book travel.</p>
                                <p className="lasc-signature-sub">They work with her to get it right.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 16. FAQ SECTION ── */}
            <section className="lasc-section lasc-faq">
                <div className="lasc-container">
                    <div className="lasc-faq-header-v2">
                        <h2 className="lasc-h2">FAQ: Luxury African Safari Cost</h2>
                        <div className="lasc-wrong-accent-line lasc-center"></div>
                    </div>

                    <div className="lasc-faq-simple-wrapper">
                        {faqItems.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className={`lasc-faq-item-simple ${isOpen ? "lasc-open" : ""}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="lasc-faq-q-simple">
                                        <span>{index + 1}. {faq.q}</span>
                                        <span className="lasc-faq-icon-simple">
                                            {isOpen ? (
                                                <Minus size={20} strokeWidth={1.5} />
                                            ) : (
                                                <Plus size={20} strokeWidth={1.5} />
                                            )}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className="lasc-faq-a-simple">
                                            <div className="lasc-faq-a-inner-simple">{faq.a}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 17. FINAL CTA (Soft Blue Editorial) ── */}
            <section className="lasc-final-cta-v5" id="consultation">
                <div className="lasc-container">
                    <div className="lasc-cta-blue-inner">
                        <div className="lasc-cta-blue-left">
                            <span className="lasc-cta-tag">Private Consultation</span>
                            <h2 className="lasc-h2">Schedule a 15-Minute <br /> Luxury Safari Consultation</h2>
                            <p className="lasc-p-display">Luxury safari is one of the few trips in the world where spending more can dramatically change the experience.</p>
                        </div>
                        <div className="lasc-cta-blue-right">
                            <p className="lasc-p">Angela Hughes and Trips & Ships Luxury Travel design safaris based on movement, logistics, conservation, and experience—not generic packages.</p>
                            <div className="lasc-cta-action">
                                <button className="lasc-btn-primary">
                                    Book Your Consultation
                                    <ArrowRight size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}