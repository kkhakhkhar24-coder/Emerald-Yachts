import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
    Calendar,
    MapPin,
    Users,
    Award,
    Compass,
    Plus,
    Minus,
    Sparkles,
    CheckCircle2,
    DollarSign,
    Target,
    ShieldCheck
} from "lucide-react";

// AS SEEN IN LOGOS
import TravelWeeklyLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Weekly.webp";
import TravelPulseLogo from "../../assets/BestTimeGreatMigrationSafari/TravelPulse.webp";
import InsiderReportLogo from "../../assets/BestTimeGreatMigrationSafari/Insider_Travel_Report.webp";
import TravelAgeWestLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Age_West.webp";

import "./BestTimeGreatMigrationSafari.css";

export default function BestTimeGreatMigrationSafari() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/best-time-great-migration-safari/#webpage",
                "url": "https://www.tripsandships.com/best-time-great-migration-safari/",
                "name": "Best Time to See the Great Migration: Month-by-Month Safari Guide",
                "description": "Discover the best time to see the Great Migration in Kenya and Tanzania. Month-by-month safari guide covering river crossings, calving season, wildlife movement, costs, and expert planning tips.",
                "isPartOf": {
                    "@id": "https://www.tripsandships.com/#website"
                },
                "about": [
                    { "@type": "Thing", "name": "Great Migration" },
                    { "@type": "Place", "name": "Serengeti" },
                    { "@type": "Place", "name": "Maasai Mara" },
                    { "@type": "Place", "name": "Kenya" },
                    { "@type": "Place", "name": "Tanzania" },
                    { "@type": "Thing", "name": "Luxury Safari" }
                ],
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000"
                }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/best-time-great-migration-safari/#article",
                "headline": "Best Time to See the Great Migration: Month-by-Month Safari Guide",
                "description": "A luxury safari guide explaining the best time to see the Great Migration in Kenya and Tanzania, including river crossings, calving season, monthly timing, costs, and planning strategy.",
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
                        "Great Migration safaris",
                        "Kenya safaris",
                        "Tanzania safaris",
                        "Luxury safari planning",
                        "Serengeti safaris",
                        "Maasai Mara safaris"
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
                    "@id": "https://www.tripsandships.com/best-time-great-migration-safari/#webpage"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/best-time-great-migration-safari/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the best month to see the Great Migration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The best month depends on what you want to experience. July through October is best for dramatic river crossings in Kenya and northern Tanzania, while January through March is best for calving season in the southern Serengeti."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When do river crossings happen in Kenya?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Great Migration river crossings in Kenya typically happen from July through October in the Maasai Mara. Exact timing varies because herd movement is driven by rainfall, grazing, and natural conditions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the Great Migration guaranteed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. The Great Migration is a natural wildlife movement and cannot be guaranteed on a specific day. Careful planning, camp placement, and timing improve the chances of seeing key migration activity."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where is the Great Migration in January?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In January, the herds are usually in the southern Serengeti in Tanzania. This is part of calving season, when large numbers of wildebeest calves are born and predator activity can be intense."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is April a bad time for safari in Tanzania?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "April is part of the rainy season, but it is not necessarily a bad time for safari. Travelers may find fewer crowds, lush landscapes, and better value, although weather and road conditions require careful planning."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is June a good time to see the Great Migration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "June can be an excellent time to see the migration as the herds begin moving north. This period may include early river crossing activity in the western Serengeti and fewer crowds than peak season."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Kenya or Tanzania better for the Great Migration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kenya is best known for dramatic Mara River crossings from July through October. Tanzania offers a longer migration viewing window throughout the year, including calving season, Grumeti movement, and northern Serengeti crossings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should I book a Great Migration safari?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury Great Migration safaris should often be booked 9 to 18 months in advance, especially for peak river crossing season from July through October when top camps sell out early."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the most dramatic part of the Great Migration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "River crossings are often considered the most dramatic part of the Great Migration, but calving season can also be extraordinary because of the concentration of newborn calves and predator activity."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the Great Migration worth it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, the Great Migration can be one of the most extraordinary wildlife experiences in the world when planned correctly. The key is aligning the right region, season, camp location, and safari style."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I see the Great Migration without river crossings?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The Great Migration includes calving, grazing movement, predator interactions, and long-distance herd movement. River crossings are only one part of the larger annual cycle."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best Great Migration safari for photographers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Photographers often value both calving season in the southern Serengeti and river crossing season in Kenya or northern Tanzania. The best choice depends on whether the goal is predator action, newborn calves, landscapes, or dramatic crossings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the Great Migration crowded?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Peak river crossing season can be crowded, especially in popular areas of the Maasai Mara. Tanzania and carefully selected private conservancies or camp locations can provide more space depending on timing and budget."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need a private guide for the Great Migration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A private guide can significantly improve the migration experience by helping with positioning, timing, and flexibility. This is especially valuable during peak crossing season or for photographers and luxury travelers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What determines where the Great Migration goes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Great Migration is influenced by rainfall, grazing patterns, water availability, and natural herd movement. Because these factors change from year to year, expert planning matters."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/best-time-great-migration-safari/#breadcrumb",
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
                        "name": "Best Time to See the Great Migration",
                        "item": "https://www.tripsandships.com/best-time-great-migration-safari/"
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
                    "Great Migration safaris",
                    "Kenya luxury safaris",
                    "Tanzania luxury safaris",
                    "Custom safari planning"
                ],
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/images/logo.png"
                }
            }
        ]
    };

    const migrationGlance = [
        { month: "Jan–Mar", location: "Southern Serengeti", happens: "Calving season", bestFor: "Photographers, repeat travelers" },
        { month: "Apr–May", location: "Central Serengeti", happens: "Movement, green season", bestFor: "Value, fewer crowds" },
        { month: "June", location: "Western Serengeti", happens: "Grumeti crossings", bestFor: "Early migration" },
        { month: "Jul–Oct", location: "Mara + Northern Serengeti", happens: "River crossings", bestFor: "First-time safari" },
        { month: "Nov–Dec", location: "Southern Serengeti", happens: "Return migration", bestFor: "Lower crowds" }
    ];

    const monthByMonth = [
        {
            title: "JANUARY – MARCH",
            desc: "Calving season in the southern Serengeti.",
            highlight: "High predator activity. Intense wildlife interaction. This is one of the most underrated times to go."
        },
        {
            title: "APRIL – MAY",
            desc: "Movement season with rain.",
            highlight: "Fewer crowds, lush landscapes, and better pricing. Requires the right mindset and planning."
        },
        {
            title: "JUNE",
            desc: "The herds begin moving north.",
            highlight: "Grumeti River crossings start. Fewer crowds than peak season."
        },
        {
            title: "JULY – OCTOBER",
            desc: "Peak migration period.",
            highlight: "River crossings in the Maasai Mara and northern Serengeti. This is the most requested time, but also the most misunderstood. Crossings are not guaranteed. Timing and positioning matter."
        },
        {
            title: "NOVEMBER – DECEMBER",
            desc: "The herds begin returning south.",
            highlight: "Strong wildlife viewing with fewer crowds and transitional pricing."
        }
    ];

    const faqs = [
        { q: "What is the best month to see the Great Migration", a: "July through October for river crossings, January through March for calving season." },
        { q: "When do river crossings happen in Kenya", a: "Typically July through October, but timing varies based on herd movement." },
        { q: "Is the Great Migration guaranteed", a: "No. It is a natural movement driven by rainfall and grazing." },
        { q: "Where is the migration in January", a: "Southern Serengeti during calving season." },
        { q: "Is April a bad time for safari", a: "No. It offers fewer crowds and strong value." },
        { q: "Is June a good time to go", a: "Yes. Early movement and fewer crowds." },
        { q: "Kenya or Tanzania for migration", a: "Kenya for crossings, Tanzania for year-round movement." },
        { q: "How far in advance should I book", a: "9 to 18 months for peak season." },
        { q: "Most dramatic part of migration", a: "River crossings and calving season." },
        { q: "Is it worth it", a: "Yes, when planned correctly." },
        { q: "Can I see migration without crossings", a: "Yes. The migration includes multiple phases." },
        { q: "Best safari for photographers", a: "Calving or crossings depending on goals." },
        { q: "Is it crowded", a: "Peak Kenya can be. Tanzania often offers more space." },
        { q: "Do I need a private guide", a: "Strongly recommended for positioning and experience." },
        { q: "What determines migration movement", a: "Rainfall and grazing patterns." }
    ];

    const [showAnswer, setShowAnswer] = useState(false);
    const [currentHero, setCurrentHero] = useState(0);

    const heroImages = [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1523805081730-81440026218d?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2000"
    ];

    useEffect(() => {
        const heroTimer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(heroTimer);
    }, [heroImages.length]);

    return (
        <div className="btgms-root">
            <Helmet>
                <title>Best Time to See the Great Migration (Month-by-Month Safari Guide for 2026)</title>
                <meta name="description" content="Discover the best time to see the Great Migration in Kenya and Tanzania. Month-by-month safari guide covering river crossings, calving season, wildlife movement, costs, and expert planning tips." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="btgms-section btgms-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`btgms-hero-bg ${index === currentHero ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="btgms-hero-overlay"></div>

                <div className="btgms-container btgms-hero-inner">
                    <span className="btgms-eyebrow">
                        <Compass size={14} style={{ marginRight: "8px" }} />
                        Expert Great Migration Strategy
                    </span>

                    <h1 className="btgms-h1 btgms-h1-hero">
                        Best Time to See the Great Migration: Month-by-Month Safari Guide
                    </h1>

                    <div className={`btgms-hero-details ${showAnswer ? "expanded" : ""}`}>
                        <div className="btgms-snippet-card">
                            <h2 className="btgms-snippet-label">
                                <Sparkles size={16} />
                                Expert Perspective: Timing & Strategy
                            </h2>
                            <p className="btgms-hero-p">
                                The Great Migration is one of the most sought-after wildlife experiences in the world. It is also one of the most misunderstood.
                            </p>
                            <p className="btgms-hero-p btgms-mt-sm">
                                To experience it correctly, you must understand three critical truths:
                            </p>
                            <ul className="btgms-qa-pills">
                                <li className="btgms-qa-pill">No Single Best Time</li>
                                <li className="btgms-qa-pill">No Guaranteed River Crossing</li>
                                <li className="btgms-qa-pill">No Fixed Schedule</li>
                            </ul>
                            <p className="btgms-hero-p btgms-mt-sm">
                                This is a year-round movement of over a million wildebeest, zebra, and gazelle across East Africa. And if timing, location, and camp placement are not aligned, the experience falls apart.
                            </p>
                            <p className="btgms-hero-p btgms-mt-sm">
                                With over four decades in the travel industry, travel to 121+ countries, and extensive safari experience across Africa, Angela Hughes works with clients to align timing and location so the migration is experienced correctly.
                            </p>
                            <p className="btgms-hero-p btgms-mt-sm btgms-bold">
                                This is not about luck. It is about strategy.
                            </p>
                        </div>
                    </div>

                    <button className="btgms-hero-toggle" onClick={() => setShowAnswer(!showAnswer)}>
                        <span className="btgms-flex-center">
                            {showAnswer ? <Minus size={14} style={{ marginRight: "6px" }} /> : <Plus size={14} style={{ marginRight: "6px" }} />}
                            {showAnswer ? "Hide Expert Take" : "View Expert Take"}
                        </span>
                    </button>

                    <div className="btgms-hero-btns">
                        <button className="btgms-btn-primary">
                            Schedule a 15-Minute Strategy Call
                        </button>
                    </div>
                </div>
            </section>

            {/* AS SEEN IN */}
            <section className="btgms-as-seen">
                <div className="btgms-container">
                    <span className="btgms-seen-label-top">AS SEEN IN</span>
                    <div className="btgms-seen-bento">
                        <div className="btgms-seen-box">
                            <img src={TravelWeeklyLogo} alt="Travel Weekly" className="btgms-seen-logo" />
                            <span className="btgms-seen-text">Travel Weekly</span>
                        </div>
                        <div className="btgms-seen-box">
                            <img src={TravelPulseLogo} alt="TravelPulse" className="btgms-seen-logo" />
                            <span className="btgms-seen-text">TravelPulse</span>
                        </div>
                        <div className="btgms-seen-box">
                            <img src={InsiderReportLogo} alt="Insider Travel Report" className="btgms-seen-logo" />
                            <span className="btgms-seen-text">Insider Travel Report</span>
                        </div>
                        <div className="btgms-seen-box">
                            <img src={TravelAgeWestLogo} alt="Travel Age West" className="btgms-seen-logo" />
                            <span className="btgms-seen-text">Travel Age West</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRIMARY CTA */}
            <section className="btgms-cta-top">
                <div className="btgms-container">
                    <div className="btgms-cta-split">
                        <div className="btgms-cta-left">
                            <span className="btgms-cta-eyebrow">EXPERT CONSULTATION</span>
                            <h2 className="btgms-h2">Schedule a 15-Minute Great Migration Strategy Call</h2>
                        </div>
                        <div className="btgms-cta-right">
                            <p className="btgms-p">If your trip depends on timing, you need to get this right.</p>
                            <button className="btgms-btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TRUST THIS GUIDE */}
            <section className="btgms-section btgms-trust">
                <div className="btgms-container">
                    <div className="btgms-trust-grid">
                        <div className="btgms-trust-content">
                            <h2 className="btgms-h2">Why Trust This Guide</h2>
                            <p className="btgms-p">Angela Hughes brings real, on-the-ground experience to safari planning, backed by decades of leadership and industry recognition.</p>
                            <ul className="btgms-trust-list">
                                <li><CheckCircle2 size={20} /> 40+ years in the travel industry</li>
                                <li><CheckCircle2 size={20} /> Travel to 121+ countries worldwide</li>
                                <li><CheckCircle2 size={20} /> 10+ safaris across Africa in recent years</li>
                                <li><CheckCircle2 size={20} /> CEO of Trips & Ships Luxury Travel</li>
                                <li><CheckCircle2 size={20} /> Travel Leaders Network Advisory Board Member</li>
                            </ul>
                        </div>
                        <div className="btgms-trust-awards">
                            <h3 className="btgms-h3">Industry Recognition</h3>
                            <ul className="btgms-award-list">
                                <li><Award size={20} /> Named Luxury Travel Influencer of the Year by Travel Leaders Network (2024)</li>
                                <li><Award size={20} /> Recognized as one of the Most Influential Women in Travel by TravelPulse (2026)</li>
                                <li><Award size={20} /> Winner of multiple Magellan Awards from Travel Weekly</li>
                                <li><Award size={20} /> Featured across leading global travel publications</li>
                            </ul>
                            <p className="btgms-p-display">This is not theory. This is experience built over decades.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IT ACTUALLY IS */}
            <section className="btgms-section btgms-definition">
                <div className="btgms-container">
                    <div className="btgms-def-flex">
                        <div className="btgms-def-text">
                            <h2 className="btgms-h2">WHAT THE GREAT MIGRATION ACTUALLY IS</h2>
                            <p className="btgms-p">The Great Migration is not a single event. It is a circular movement driven by rainfall and grazing patterns.</p>
                            <p className="btgms-p">More than 1.5 million wildebeest move continuously between:</p>
                            <div className="btgms-location-pills">
                                <span className="btgms-pill">Serengeti</span>
                                <span className="btgms-pill">Maasai Mara</span>
                            </div>
                            <p className="btgms-p">This includes calving, predator interaction, river crossings, and long-distance movement.</p>
                            <p className="btgms-p-display">Most travelers plan for a moment. The reality is movement.</p>
                        </div>
                        <div className="btgms-def-image">
                            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000" alt="Wildlife Movement" />
                        </div>
                    </div>
                </div>
            </section>

            {/* VISUAL TABLE */}
            <section className="btgms-section btgms-glance">
                <div className="btgms-container">
                    <h2 className="btgms-h2">Great Migration at a Glance</h2>
                    <div className="btgms-table-wrap">
                        <table className="btgms-table">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Location</th>
                                    <th>What Happens</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {migrationGlance.map((row, i) => (
                                    <tr key={i}>
                                        <td className="btgms-td-month" data-label="Month">{row.month}</td>
                                        <td data-label="Location">{row.location}</td>
                                        <td data-label="What Happens">{row.happens}</td>
                                        <td data-label="Best For">{row.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* MONTH BY MONTH */}
            <section className="btgms-section btgms-months">
                <div className="btgms-container">
                    <h2 className="btgms-h2">GREAT MIGRATION MONTH-BY-MONTH</h2>
                    <div className="btgms-months-grid">
                        {monthByMonth.map((m, i) => (
                            <div className="btgms-month-card" key={i}>
                                <div className="btgms-month-header">
                                    <Calendar className="btgms-month-icon" size={24} />
                                    <h3 className="btgms-h3">{m.title}</h3>
                                </div>
                                <div className="btgms-month-body">
                                    <p className="btgms-p-strong">{m.desc}</p>
                                    <p className="btgms-p">{m.highlight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHERE TO GO */}
            <section className="btgms-section btgms-where">
                <div className="btgms-container">
                    <div className="btgms-where-grid">
                        <div className="btgms-where-content">
                            <h2 className="btgms-h2">Where to Go Based on Timing</h2>
                            <ul className="btgms-where-list">
                                <li><MapPin size={20} /> <strong>River crossings</strong> → Kenya</li>
                                <li><MapPin size={20} /> <strong>Calving season</strong> → Tanzania</li>
                                <li><MapPin size={20} /> <strong>Fewer crowds</strong> → Tanzania shoulder season</li>
                                <li><MapPin size={20} /> <strong>First safari</strong> → Kenya</li>
                            </ul>
                        </div>
                        <div className="btgms-internal-link">
                            <div className="btgms-link-card">
                                <h3 className="btgms-h3">Not sure which destination is right for you?</h3>
                                <p className="btgms-p">Kenya vs Tanzania Safari: Which Is Best for Luxury Travelers</p>
                                <button className="btgms-btn-outline">Read Comparison Guide</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE TRUTH */}
            <section className="btgms-section btgms-truth">
                <div className="btgms-container">
                    <div className="btgms-truth-header">
                        <h2 className="btgms-h2">The Truth About the Great Migration</h2>
                        <p className="btgms-p-display">This is where expectations need to be reset.</p>
                    </div>
                    <div className="btgms-truth-grid">
                        {[
                            "River crossings are not guaranteed",
                            "You may wait hours or days",
                            "Herds move based on weather",
                            "Camp location matters more than brand",
                            "Timing matters more than destination"
                        ].map((truth, i) => (
                            <div className="btgms-truth-item" key={i}>
                                <ShieldCheck size={24} className="btgms-truth-icon" />
                                <p className="btgms-p-strong">{truth}</p>
                            </div>
                        ))}
                    </div>
                    <p className="btgms-p-center">This is not a checklist experience. It is a natural one.</p>
                </div>
            </section>

            {/* HOW WE DESIGN */}
            <section className="btgms-section btgms-design">
                <div className="btgms-container">
                    <div className="btgms-design-flex">
                        <div className="btgms-design-image">
                            <img src="https://images.unsplash.com/photo-1534188753412-3ee2f7c9ee8f?auto=format&fit=crop&q=80&w=1000" alt="Safari Design" />
                        </div>
                        <div className="btgms-design-content">
                            <h2 className="btgms-h2">How We Design Migration Safaris</h2>
                            <p className="btgms-p-display">This is where most trips are won or lost.</p>
                            <p className="btgms-p">We focus on:</p>
                            <ul className="btgms-design-list">
                                <li><Target size={18} /> precise camp placement based on movement</li>
                                <li><Target size={18} /> timing aligned to herd patterns</li>
                                <li><Target size={18} /> guide quality and positioning</li>
                                <li><Target size={18} /> flexibility in routing</li>
                                <li><Target size={18} /> strong operator relationships</li>
                            </ul>
                            <p className="btgms-p-display-strong">This is not about booking a lodge. It is about building a strategy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COST BY SEASON */}
            <section className="btgms-section btgms-cost">
                <div className="btgms-container">
                    <h2 className="btgms-h2">Cost by Season</h2>
                    <div className="btgms-cost-grid">
                        <div className="btgms-cost-item">
                            <h3 className="btgms-h3">Peak Season (July–October)</h3>
                            <p className="btgms-p">Highest pricing and demand</p>
                        </div>
                        <div className="btgms-cost-item">
                            <h3 className="btgms-h3">Calving Season</h3>
                            <p className="btgms-p">High value with strong wildlife activity</p>
                        </div>
                        <div className="btgms-cost-item">
                            <h3 className="btgms-h3">Shoulder Season</h3>
                            <p className="btgms-p">Better pricing and availability</p>
                        </div>
                    </div>
                    <div className="btgms-cost-total">
                        <div className="btgms-price-box">
                            <DollarSign size={32} />
                            <div>
                                <span className="btgms-price-label">Typical luxury range:</span>
                                <span className="btgms-price-value">$25,000 to $45,000+ per person</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="btgms-section btgms-for">
                <div className="btgms-container">
                    <h2 className="btgms-h2">Who This Is For</h2>
                    <div className="btgms-for-grid">
                        {[
                            "First-time safari travelers",
                            "Experienced Africa travelers",
                            "Luxury clients planning $25K+ safaris",
                            "Travelers deciding between Kenya and Tanzania"
                        ].map((text, i) => (
                            <div className="btgms-for-card" key={i}>
                                <Users size={24} className="btgms-for-icon" />
                                <p className="btgms-p-strong">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT ANGELA */}
            <section className="btgms-section btgms-about">
                <div className="btgms-container">
                    <div className="btgms-about-flex">
                        <div className="btgms-about-image">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Angela Hughes" />
                        </div>
                        <div className="btgms-about-content">
                            <h2 className="btgms-h2">About Angela Hughes</h2>
                            <p className="btgms-p">Angela Hughes is one of the most recognized voices in luxury travel.</p>
                            <p className="btgms-p">She has spent decades designing high-end itineraries across Africa and around the world, working directly with top safari operators and camps.</p>
                            <p className="btgms-p">Her work has been recognized across the industry through multiple awards and global media features.</p>
                            <p className="btgms-p-display">Clients do not work with Angela Hughes to book travel. They work with her to get it right.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="btgms-section btgms-faq">
                <div className="btgms-container">
                    <h2 className="btgms-h2">FAQ: Best Time for the Great Migration</h2>
                    <div className="btgms-faq-list">
                        {faqs.map((faq, i) => (
                            <div className={`btgms-faq-item ${openFaq === i ? "active" : ""}`} key={i}>
                                <button className="btgms-faq-question" onClick={() => toggleFaq(i)}>
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                </button>
                                <div className="btgms-faq-answer">
                                    <p className="btgms-p">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="btgms-section btgms-final-cta">
                <div className="btgms-container">
                    <div className="btgms-final-card">
                        <h2 className="btgms-h2">Schedule a 15-Minute Great Migration Consultation</h2>
                        <p className="btgms-p-display">If your safari depends on timing, you need to get it right.</p>
                        <p className="btgms-p">Angela Hughes, recognized across the industry for her expertise and influence in luxury travel, designs migration safaris based on real movement patterns, not assumptions.</p>
                        <button className="btgms-btn-primary">Get Started Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}