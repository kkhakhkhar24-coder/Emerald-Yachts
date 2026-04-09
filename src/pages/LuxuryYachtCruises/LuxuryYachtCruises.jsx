import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import "./LuxuryYachtCruises.css";
import ProfilePicture from "../../assets/image.jpg";
import {
    Check,
    AlertCircle,
    Anchor,
    Ship,
    Sparkles,
    Plus,
    Minus,
    Compass,
    Snowflake,
    Building2,
    Palette,
    Circle,
    Flag,
    Waves,
} from "lucide-react";

// Import yacht images from LuxuryYachtCruises folder
// Using available images - you can replace these with actual brand-specific images later
import RitzCarltonImage from "../../assets/LuxuryYachtCruises/SSC_RA_Italy_Porto_Santo_Stefano_23262.jpg";
import AmanImage from "../../assets/LuxuryYachtCruises/SSC_SM_Turkey_Kusadasi_0055.jpg";
import ScenicImage from "../../assets/LuxuryYachtCruises/SSC_RA_Spain_Palma_De_Mallorca_A059C0056.jpg";
import EmeraldImage from "../../assets/LuxuryYachtCruises/SSC_RA_Italy_Porto_Santo_Stefano_23262.jpg";
import FourSeasonsImage from "../../assets/LuxuryYachtCruises/SSC_SM_Turkey_Kusadasi_0055.jpg";
import OrientExpressImage from "../../assets/LuxuryYachtCruises/SSC_RA_Spain_Palma_De_Mallorca_A059C0056.jpg";
import FinalBGImage from "../../assets/LuxuryYachtCruises/FinalBG_Image.jpg";
import ImageGallery1 from "../../assets/LuxuryYachtCruises/ImageGallery1.jpg";
import ImageGallery2 from "../../assets/LuxuryYachtCruises/ImageGallery2.jpg";
import ImageGallery3 from "../../assets/LuxuryYachtCruises/ImageGallery3.jpg";
import ImageGallery4 from "../../assets/LuxuryYachtCruises/ImageGallery4.jpg";
import ImageGallery5 from "../../assets/LuxuryYachtCruises/ImageGallery5.jpg";
import ImageGallery6 from "../../assets/LuxuryYachtCruises/ImageGallery6.jpg";

function useFadeIn() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    el.classList.add("visible");
                    obs.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function FadeSection({ children, className = "" }) {
    const ref = useFadeIn();
    return (
        <div ref={ref} className={`fade-in-up ${className}`}>
            {children}
        </div>
    );
}

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "What is the best luxury yacht cruise line",
            a: "Ritz-Carlton offers the best overall balance, while Aman and Four Seasons represent the highest level of luxury.",
        },
        {
            q: "How much does a yacht cruise cost",
            a: "Yacht cruises range from $5,000 to over $100,000 per week depending on the brand and suite.",
        },
        {
            q: "Are yacht cruises all-inclusive",
            a: "Some are fully all-inclusive, while others follow a hotel-style pricing model.",
        },
        {
            q: "What is the difference between yacht cruises and traditional cruises",
            a: "Yacht cruises are smaller, more personalized, and more exclusive.",
        },
        {
            q: "Is a yacht cruise worth it",
            a: "For travelers seeking privacy and elevated service, it is one of the strongest luxury options available.",
        },
        {
            q: "Which yacht cruise is best for first-time travelers",
            a: "Emerald and Ritz-Carlton are the most common entry points.",
        },
        {
            q: "Which yacht cruise is most luxurious",
            a: "Aman and Four Seasons sit at the top of the market.",
        },
        {
            q: "How far in advance should I book",
            a: "12 to 24 months in advance is recommended.",
        },
        {
            q: "Is Ritz-Carlton Yacht Collection worth it",
            a: "It is widely considered one of the best value options in luxury yacht cruising.",
        },
        {
            q: "What is the difference between Scenic and Ritz-Carlton",
            a: "Scenic is more expedition-focused and fully inclusive, while Ritz-Carlton is more lifestyle-driven.",
        },
        {
            q: "Are yacht cruises better than cruises",
            a: "They offer a more intimate and elevated experience.",
        },
        {
            q: "Which yacht cruise is best for couples",
            a: "Ritz-Carlton and Scenic are strong options depending on travel style.",
        },
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

export default function YachtCruisesPage() {
    return (
        <>
            <Helmet>
                <title>Luxury Yacht Cruises | Ritz-Carlton vs Four Seasons vs Aman vs Scenic vs Emerald vs Orient Express</title>
                <meta
                    name="description"
                    content="Compare the best luxury yacht cruises. Ritz-Carlton, Aman, Scenic, Emerald, Four Seasons, and Orient Express with pricing, inclusions, and expert guidance from Angela Hughes."
                />

                {/* WebPage Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": "https://www.tripsandships.com/luxury-yacht-cruises-compared/#webpage",
                        "url": "https://www.tripsandships.com/luxury-yacht-cruises-compared/",
                        "name": "Luxury Yacht Cruises | Compare Ritz-Carlton, Aman, Scenic, Emerald, Four Seasons, Orient Express",
                        "description": "Compare the best luxury yacht cruises including Ritz-Carlton, Aman, Scenic, Emerald, Four Seasons, and Orient Express with pricing, inclusions, and expert guidance from Angela Hughes.",
                        "inLanguage": "en-US",
                        "isPartOf": {
                            "@type": "WebSite",
                            "@id": "https://www.tripsandships.com/#website",
                            "url": "https://www.tripsandships.com/",
                            "name": "Trips & Ships Luxury Travel"
                        },
                        "about": [
                            { "@type": "Thing", "name": "Luxury yacht cruises" },
                            { "@type": "Brand", "name": "The Ritz-Carlton Yacht Collection" },
                            { "@type": "Brand", "name": "Aman" },
                            { "@type": "Brand", "name": "Scenic Luxury Cruises & Tours" },
                            { "@type": "Brand", "name": "Emerald Cruises" },
                            { "@type": "Brand", "name": "Four Seasons Yachts" },
                            { "@type": "Brand", "name": "Orient Express Yachts" }
                        ],
                        "author": {
                            "@type": "Person",
                            "@id": "https://www.tripsandships.com/#angelahughes",
                            "name": "Angela Hughes"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "@id": "https://www.tripsandships.com/#organization",
                            "name": "Trips & Ships Luxury Travel"
                        },
                        "datePublished": "2026-04-09",
                        "dateModified": "2026-04-09"
                    })}
                </script>

                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "@id": "https://www.tripsandships.com/luxury-yacht-cruises-compared/#faq",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is the best luxury yacht cruise line?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ritz-Carlton is often considered the best overall balance of price, inclusions, and experience, while Aman and Four Seasons represent the highest tier of privacy and space."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does a luxury yacht cruise cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Luxury yacht cruises typically range from about $5,000 to well over $100,000 per week depending on the brand, suite category, destination, and season."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are yacht cruises all-inclusive?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Some yacht cruises are fully all-inclusive, while others operate more like luxury hotels and price dining, beverages, or experiences separately."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the difference between yacht cruises and traditional luxury cruises?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yacht cruises are typically smaller, more intimate, and more personalized, with higher staff-to-guest ratios and access to smaller ports."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is a yacht cruise worth it?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For travelers seeking privacy, elevated service, and access to exclusive destinations, a yacht cruise can be one of the strongest luxury travel experiences available."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which yacht cruise is best for first-time travelers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Emerald and Ritz-Carlton are often strong starting points for first-time yacht travelers depending on budget, expectations, and desired level of luxury."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which yacht cruise is most luxurious?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Aman and Four Seasons are generally positioned at the very top of the market in terms of privacy, space, and ultra-luxury experience."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How far in advance should I book a yacht cruise?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Booking 12 to 24 months in advance is often recommended for the best suite selection, preferred sailing dates, and peak season availability."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is Ritz-Carlton Yacht Collection worth it?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ritz-Carlton Yacht Collection is widely considered one of the best values in luxury yacht cruising because it offers a strong balance of inclusions, atmosphere, and overall experience."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the difference between Scenic and Ritz-Carlton yacht cruises?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Scenic is more expedition-focused and typically more inclusive, while Ritz-Carlton is more lifestyle-driven, social, and centered on classic luxury yacht travel."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are yacht cruises better than cruises?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yacht cruises are often better for travelers who value intimacy, service, and smaller ports, while larger luxury cruises may appeal more to travelers who want more onboard amenities and entertainment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which yacht cruise is best for couples?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ritz-Carlton and Scenic are both strong options for couples depending on whether the priority is romantic relaxation, destination immersion, or all-inclusive expedition-style travel."
                                }
                            }
                        ]
                    })}
                </script>

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "@id": "https://www.tripsandships.com/luxury-yacht-cruises-compared/#breadcrumb",
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
                                "name": "Cruises",
                                "item": "https://www.tripsandships.com/cruises/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Yacht Cruises",
                                "item": "https://www.tripsandships.com/yacht-cruises/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Luxury Yacht Cruises Compared",
                                "item": "https://www.tripsandships.com/luxury-yacht-cruises-compared/"
                            }
                        ]
                    })}
                </script>

                {/* Person Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "@id": "https://www.tripsandships.com/#angelahughes",
                        "name": "Angela Hughes",
                        "url": "https://www.tripsandships.com/about-angela-hughes/",
                        "jobTitle": "CEO",
                        "worksFor": {
                            "@type": "Organization",
                            "@id": "https://www.tripsandships.com/#organization"
                        },
                        "description": "Angela Hughes is the CEO of Trips & Ships Luxury Travel, a luxury travel advisor, speaker, and industry leader with more than four decades of experience in travel.",
                        "knowsAbout": [
                            "Luxury travel",
                            "Yacht cruises",
                            "River cruises",
                            "Luxury cruises",
                            "Expedition travel",
                            "Luxury travel planning"
                        ]
                    })}
                </script>

                {/* Organization Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://www.tripsandships.com/#organization",
                        "name": "Trips & Ships Luxury Travel",
                        "url": "https://www.tripsandships.com/",
                        "description": "Trips & Ships Luxury Travel is a luxury travel agency specializing in cruises, yacht cruises, river cruises, safaris, and customized high-end travel planning.",
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "contactType": "sales",
                                "email": "sales@tripsandships.com",
                                "telephone": "+1-603-860-3274",
                                "areaServed": "US",
                                "availableLanguage": ["English"]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="yacht-hero">
                <div className="yacht-hero-content">
                    <span className="yacht-hero-eyebrow">
                        Yacht Cruise Planning
                    </span>
                    <h1>Luxury Yacht Cruises</h1>
                    <p className="yacht-hero-sub">
                        Compare the Leading Yacht Cruise Brands and Choose the Right Experience
                    </p>
                    <p className="yacht-hero-lead">
                        Choosing the right yacht is not about price alone. It is about how you travel, what you value, and what the experience actually delivers.
                    </p>

                    {/* This container expands when the button below is clicked */}
                    <div className="yacht-hero-details">
                        <p className="yacht-hero-note">
                            Small ships provide unmatched intimacy, granting access to secluded harbors and pristine coves larger ships simply cannot reach.
                        </p>
                        <p className="yacht-hero-note">
                            However, the experiences vary vastly from ultra-private sanctuaries like Aman to the vibrant, social lifestyle of Ritz-Carlton.
                        </p>
                        <p className="yacht-hero-note">
                            We navigate these nuances to ensure your voyage aligns perfectly with your refined expectations.
                        </p>
                    </div>

                    <button
                        className="yacht-hero-read-more"
                        onClick={(e) => {
                            const details = document.querySelector(".yacht-hero-details");
                            if (details) {
                                details.classList.toggle("expanded");
                                e.target.innerText = details.classList.contains("expanded") ? "Read Less" : "Read More";
                            }
                        }}
                    >
                        Read More
                    </button>

                    <div className="yacht-hero-btns">
                        <button className="yacht-btn-primary">Start Planning</button>
                        <button className="yacht-btn-secondary">Compare Yacht Options</button>
                    </div>
                </div>
            </section>

            {/* ===== SECTION: QUICK COMPARISON STRIP — Modern Intelligence Grid with icons ===== */}
            <section className="lux-section lux-bg-soft-blue">
                <div className="lux-container-wide">

                    {/* Centered Heading */}
                    <div className="lux-strip-header">
                        <h2 className="lux-h2">Yacht Collection Overview</h2>
                        <div className="lux-navy-divider-center"></div>
                    </div>

                    {/* 6-Column Grid */}
                    <div className="lux-strip-grid">

                        {/* Item 1: Ritz-Carlton */}
                        <div className="lux-strip-card">
                            <div className="lux-strip-icon-box">
                                <Anchor size={24} strokeWidth={1.5} />
                            </div>
                            <div className="lux-strip-body">
                                <h3 className="lux-strip-brand">Ritz-Carlton</h3>
                                <p className="lux-strip-desc">Best overall balance</p>
                                <div className="lux-strip-price-wrap">
                                    <span className="lux-strip-price">$7K–$15K</span>
                                    <span className="lux-strip-unit">per person</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 2: Aman */}
                        <div className="lux-strip-card">
                            <div className="lux-strip-icon-box">
                                <Compass size={24} strokeWidth={1.5} />
                            </div>
                            <div className="lux-strip-body">
                                <h3 className="lux-strip-brand">Aman</h3>
                                <p className="lux-strip-desc">Ultra-private experience</p>
                                <div className="lux-strip-price-wrap">
                                    <span className="lux-strip-price">$25K+</span>
                                    <span className="lux-strip-unit">per week</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 3: Scenic */}
                        <div className="lux-strip-card">
                            <div className="lux-strip-icon-box">
                                <Snowflake size={24} strokeWidth={1.5} />
                            </div>
                            <div className="lux-strip-body">
                                <h3 className="lux-strip-brand">Scenic</h3>
                                <p className="lux-strip-desc">All-inclusive expedition</p>
                                <div className="lux-strip-price-wrap">
                                    <span className="lux-strip-price">$10K–$25K</span>
                                    <span className="lux-strip-unit">per person</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 4: Emerald */}
                        <div className="lux-strip-card">
                            <div className="lux-strip-icon-box">
                                <Ship size={24} strokeWidth={1.5} />
                            </div>
                            <div className="lux-strip-body">
                                <h3 className="lux-strip-brand">Emerald</h3>
                                <p className="lux-strip-desc">Entry yacht experience</p>
                                <div className="lux-strip-price-wrap">
                                    <span className="lux-strip-price">$5K–$9K</span>
                                    <span className="lux-strip-unit">per person</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 5: Four Seasons */}
                        <div className="lux-strip-card">
                            <div className="lux-strip-icon-box">
                                <Building2 size={24} strokeWidth={1.5} />
                            </div>
                            <div className="lux-strip-body">
                                <h3 className="lux-strip-brand">Four Seasons</h3>
                                <p className="lux-strip-desc">Residential luxury</p>
                                <div className="lux-strip-price-wrap">
                                    <span className="lux-strip-price">$20K+</span>
                                    <span className="lux-strip-unit">per suite</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 6: Orient Express */}
                        <div className="lux-strip-card">
                            <div className="lux-strip-icon-box">
                                <Palette size={24} strokeWidth={1.5} />
                            </div>
                            <div className="lux-strip-body">
                                <h3 className="lux-strip-brand">Orient Express</h3>
                                <p className="lux-strip-desc">Design-driven experience</p>
                                <div className="lux-strip-price-wrap">
                                    <span className="lux-strip-price">$20K+</span>
                                    <span className="lux-strip-unit">base price</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION: INTRO — Two-column editorial layout with svf- prefix ===== */}
            <section className="lux-section lux-bg-white lux-intro-section">
                <div className="lux-container-wide">
                    <div className="lux-sticky-wrapper">

                        {/* Left Column: Sticky Heading & Narrative */}
                        <aside className="lux-side-sticky">
                            <div className="lux-sticky-element">

                                <h2 className="lux-h2 lux-left-bar">The New Era of <br />Yacht Cruising</h2>
                                <div className="lux-navy-divider-left"></div>
                            </div>
                        </aside>

                        {/* Right Column: Narrative Content & Negative Space Visual */}
                        <main className="lux-content-column">
                            <div className="lux-intro-text-wrap">
                                <p className="lux-p lux-lead-text">
                                    Luxury yacht cruising has redefined how high-end travelers experience the world.
                                </p>

                                <div className="lux-statement-row">
                                    <p className="lux-p">Smaller ships. Higher service. Access to destinations larger ships cannot reach.</p>
                                </div>

                                <p className="lux-p">
                                    But not all yacht cruises are the same.
                                </p>

                                <div className="lux-editorial-box">
                                    <p className="lux-p">
                                        The difference between <strong>The Ritz-Carlton Yacht Collection, Aman, Scenic Luxury Cruises & Tours, Emerald Cruises, Four Seasons Yachts,</strong> and <strong>Orient Express Yachts</strong> is not just price.
                                    </p>
                                </div>

                                <p className="lux-p lux-highlight-text">
                                    It is experience, inclusions, and positioning.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            {/* ===== PRICING SECTION ===== */}
            <section className="yacht-section yacht-bg-soft yacht-pricing-section">
                <div className="yacht-section-inner yacht-wide">
                    <div className="yacht-pricing-grid">
                        <div className="yacht-pricing-card">
                            <div className="yacht-pricing-badge">Entry</div>
                            <h3>Entry Yacht Experience</h3>
                            <p className="yacht-pricing-brand">Emerald Cruises</p>
                            <p className="yacht-pricing-amount">$5,000–$9,000</p>
                            <p className="yacht-pricing-unit">per person per week</p>
                        </div>
                        <div className="yacht-pricing-card yacht-pricing-featured">
                            <div className="yacht-pricing-badge yacht-pricing-badge-featured">Luxury</div>
                            <h3>Luxury Yacht Experience</h3>
                            <p className="yacht-pricing-brand">Ritz-Carlton and Scenic</p>
                            <p className="yacht-pricing-amount">$7,000–$15,000+</p>
                            <p className="yacht-pricing-unit">per person per week</p>
                        </div>
                        <div className="yacht-pricing-card">
                            <div className="yacht-pricing-badge">Ultra-Luxury</div>
                            <h3>Ultra-Luxury Yacht Experience</h3>
                            <p className="yacht-pricing-brand">Four Seasons, Aman, Orient Express</p>
                            <p className="yacht-pricing-amount">$20,000+</p>
                            <p className="yacht-pricing-unit">per week</p>
                        </div>
                    </div>
                    <div className="yacht-pricing-footer">
                        <p className="yacht-section-p-clean" style={{ textAlign: 'center' }}>
                            Pricing is driven by suite category, itinerary, and inclusions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== SECTION: WHERE CLIENTS GET IT WRONG — Architectural Intelligence Design ===== */}
            <section className="lux-section lux-bg-white lux-pitfalls-modern">
                <div className="lux-container-wide">
                    <div className="lux-sticky-wrapper">

                        {/* Left Column: Sticky Side-Heading */}
                        <aside className="lux-side-sticky">
                            <div className="lux-sticky-element">
                                <h2 className="lux-h2">Where Clients <br />Get It Wrong</h2>
                                <div className="lux-navy-divider-left"></div>
                                <p className="lux-p lux-sticky-summary">
                                    Misconceptions in the ultra-luxury space often lead to a mismatch between traveler expectations and the onboard reality.
                                </p>
                            </div>
                        </aside>

                        {/* Right Column: Intelligence Cards & Logic Flow */}
                        <main className="lux-content-column">
                            <div className="lux-intelligence-flow">

                                {/* The Initial Assumption */}
                                <div className="lux-assumption-block">
                                    <p className="lux-p lux-assumption-text">
                                        Many travelers assume the most expensive yacht is the best option.
                                    </p>

                                    <div className="lux-impact-statement">
                                        <div className="lux-impact-line"></div>
                                        <span className="lux-impact-word">It is not.</span>
                                        <div className="lux-impact-line"></div>
                                    </div>
                                </div>

                                {/* The Correction Cards Grid */}
                                <div className="lux-correction-grid">
                                    <div className="lux-correction-card">
                                        <span className="lux-card-num">01</span>
                                        <p className="lux-p">Four Seasons is not always a better fit than Ritz-Carlton</p>
                                    </div>
                                    <div className="lux-correction-card">
                                        <span className="lux-card-num">02</span>
                                        <p className="lux-p">Emerald is not positioned as ultra-luxury</p>
                                    </div>
                                    <div className="lux-correction-card">
                                        <span className="lux-card-num">03</span>
                                        <p className="lux-p">All-inclusive varies significantly by brand</p>
                                    </div>
                                    <div className="lux-correction-card">
                                        <span className="lux-card-num">04</span>
                                        <p className="lux-p">Brand name does not equal the right experience</p>
                                    </div>
                                </div>

                                {/* Final Logic Bar */}
                                <div className="lux-alignment-bar">
                                    <div className="lux-alignment-inner">
                                        <p className="lux-p">The right decision comes down to <strong>alignment</strong>, not perception.</p>
                                    </div>
                                </div>

                            </div>
                        </main>

                    </div>
                </div>
            </section>

            {/* ===== VIDEO SECTION: LUXURY YACHT EXPERIENCE ===== */}
            <section className="lux-section lux-bg-white lux-video-section">
                <div className="lux-container-wide">
                    <div className="lux-video-header">
                        <span className="lux-section-number">EXPERIENCE</span>
                        <h2 className="lux-h2">Experience Luxury <br />Yacht Cruising</h2>
                        <div className="lux-navy-divider-center"></div>
                        <p className="lux-video-subtitle">
                            Discover how modern luxury yachts combine sophisticated design, world-class service, and access to exclusive destinations for an unforgettable journey.
                        </p>
                    </div>

                    <div className="lux-video-wrapper">
                        <video
                            className="lux-video-player"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source
                                src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AM4U9Ywg5B3JhMCyVmy7Vm0/Scenic/Scenic%20Ocean/Videos/Experiences/SCENIC_LONG_FORM_FINAL.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=cmis4m8h&raw=1"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="lux-video-caption">
                        <span className="lux-caption-tag">Yacht Experience</span>
                        <p>Luxury yacht cruising offers an intimate, personalized travel experience with access to exclusive ports and destinations that larger ships cannot reach.</p>
                    </div>
                </div>
            </section>

            {/* ===== SECTION: IMAGE GALLERY — Modern Bento Grid Layout ===== */}
            <section className="lux-section lux-bg-white lux-gallery-section">
                <div className="lux-container-wide">
                    <div className="lux-gallery-inner">

                        {/* Header Area */}
                        <div className="lux-gallery-header">
                            <h2 className="lux-h2">Life Aboard Luxury Yachts</h2>
                            <div className="lux-navy-divider-center"></div>
                            <p className="lux-gallery-subtitle">
                                From pristine suites to stunning coastal destinations — experience what boutique luxury at sea truly looks and feels like.
                            </p>
                        </div>

                        {/* Bento Grid Layout */}
                        <div className="lux-gallery-bento-grid">

                            {/* 01: Large Featured Item */}
                            <div className="lux-gallery-item lux-gallery-feature">
                                <div className="lux-gallery-image-box">
                                    <img src={ImageGallery1} alt="Luxury yacht suite with panoramic ocean views" className="lux-gallery-img" />
                                    <div className="lux-gallery-overlay">
                                        <div className="lux-gallery-content">
                                            <span className="lux-gallery-badge">Luxury Suite</span>
                                            <h3 className="lux-gallery-h3">Panoramic Elegance</h3>
                                            <p className="lux-gallery-item-p">Spacious suites with floor-to-ceiling views of the open sea.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 02: Vertical Item */}
                            <div className="lux-gallery-item lux-gallery-tall">
                                <div className="lux-gallery-image-box">
                                    <img src={ImageGallery2} alt="Onboard lifestyle and yacht experience" className="lux-gallery-img" />
                                    <div className="lux-gallery-overlay">
                                        <div className="lux-gallery-content">
                                            <span className="lux-gallery-badge">Onboard Life</span>
                                            <h3 className="lux-gallery-h3">Social Atmosphere</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 03: Standard Item */}
                            <div className="lux-gallery-item">
                                <div className="lux-gallery-image-box">
                                    <img src={ImageGallery3} alt="Fine dining experience on luxury yacht" className="lux-gallery-img" />
                                    <div className="lux-gallery-overlay">
                                        <div className="lux-gallery-content">
                                            <span className="lux-gallery-badge">Fine Dining</span>
                                            <h3 className="lux-gallery-h3">Culinary Excellence</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 04: Standard Item */}
                            <div className="lux-gallery-item">
                                <div className="lux-gallery-image-box">
                                    <img src={ImageGallery4} alt="Exclusive coastal destinations and hidden coves" className="lux-gallery-img" />
                                    <div className="lux-gallery-overlay">
                                        <div className="lux-gallery-content">
                                            <span className="lux-gallery-badge">Destinations</span>
                                            <h3 className="lux-gallery-h3">Hidden Coastal Coves</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 05: Standard Item */}
                            <div className="lux-gallery-item">
                                <div className="lux-gallery-image-box">
                                    <img src={ImageGallery5} alt="Luxury yacht deck and relaxation area" className="lux-gallery-img" />
                                    <div className="lux-gallery-overlay">
                                        <div className="lux-gallery-content">
                                            <span className="lux-gallery-badge">Deck Experience</span>
                                            <h3 className="lux-gallery-h3">Sunset Relaxation</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 06: Standard Item */}
                            <div className="lux-gallery-item">
                                <div className="lux-gallery-image-box">
                                    <img src={ImageGallery6} alt="Personalized service on luxury yacht" className="lux-gallery-img" />
                                    <div className="lux-gallery-overlay">
                                        <div className="lux-gallery-content">
                                            <span className="lux-gallery-badge">Service</span>
                                            <h3 className="lux-gallery-h3">Bespoke Experience</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 03: BRAND COLLECTIONS — Modern 3-Column Portfolio Grid ===== */}
            <section className="lux-section lux-bg-soft-blue">
                <div className="lux-container-wide">

                    {/* Centered Section Header */}
                    <div className="lux-grid-header">
                        <h2 className="lux-h2">The Luxury Yacht Collections</h2>
                        <div className="lux-navy-divider-center"></div>
                    </div>

                    <div className="lux-brand-portfolio-grid">

                        {/* Brand 1: Ritz-Carlton */}
                        <div className="lux-portfolio-card">
                            <div className="lux-portfolio-top">
                                <h3 className="lux-portfolio-name">The Ritz-Carlton <br />Yacht Collection</h3>
                            </div>
                            <div className="lux-portfolio-body">
                                <ul className="lux-portfolio-list">
                                    <li><span className="lux-p">Best overall balance</span></li>
                                    <li><span className="lux-p">Nearly all-inclusive</span></li>
                                    <li><span className="lux-p">Social but refined</span></li>
                                    <li><span className="lux-p">Strong value relative to experience</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Brand 2: Aman */}
                        <div className="lux-portfolio-card">
                            <div className="lux-portfolio-top">
                                <h3 className="lux-portfolio-name">Aman</h3>
                            </div>
                            <div className="lux-portfolio-body">
                                <ul className="lux-portfolio-list">
                                    <li><span className="lux-p">Ultra-private and highly customized</span></li>
                                    <li><span className="lux-p">Minimalist, design-driven</span></li>
                                    <li><span className="lux-p">Built for privacy and space</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Brand 3: Scenic */}
                        <div className="lux-portfolio-card">
                            <div className="lux-portfolio-top">
                                <h3 className="lux-portfolio-name">Scenic Luxury <br />Cruises & Tours</h3>
                            </div>
                            <div className="lux-portfolio-body">
                                <ul className="lux-portfolio-list">
                                    <li><span className="lux-p">Fully all-inclusive</span></li>
                                    <li><span className="lux-p">Expedition capability</span></li>
                                    <li><span className="lux-p">Destination-focused travel</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Brand 4: Emerald */}
                        <div className="lux-portfolio-card">
                            <div className="lux-portfolio-top">
                                <h3 className="lux-portfolio-name">Emerald Cruises</h3>
                            </div>
                            <div className="lux-portfolio-body">
                                <ul className="lux-portfolio-list">
                                    <li><span className="lux-p">Accessible entry into yacht cruising</span></li>
                                    <li><span className="lux-p">Modern and relaxed</span></li>
                                    <li><span className="lux-p">Clean design and smaller scale</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Brand 5: Four Seasons */}
                        <div className="lux-portfolio-card">
                            <div className="lux-portfolio-top">
                                <h3 className="lux-portfolio-name">Four Seasons Yachts</h3>
                            </div>
                            <div className="lux-portfolio-body">
                                <ul className="lux-portfolio-list">
                                    <li><span className="lux-p">Large residential-style suites</span></li>
                                    <li><span className="lux-p">Hotel-driven experience</span></li>
                                    <li><span className="lux-p">Not fully all-inclusive</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Brand 6: Orient Express */}
                        <div className="lux-portfolio-card">
                            <div className="lux-portfolio-top">
                                <h3 className="lux-portfolio-name">Orient Express Yachts</h3>
                            </div>
                            <div className="lux-portfolio-body">
                                <ul className="lux-portfolio-list">
                                    <li><span className="lux-p">Design-forward concept</span></li>
                                    <li><span className="lux-p">Heritage-driven experience</span></li>
                                    <li><span className="lux-p">Positioned in ultra-luxury tier</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 04: CLIENT SCENARIOS — Decision-mapping grid with Sticky Header ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-container-wide">
                    <div className="lux-sticky-wrapper">

                        {/* Left Column: Sticky Side-Heading */}
                        <aside className="lux-side-sticky">
                            <div className="lux-sticky-element">
                                <h2 className="lux-h2">Real Client <br />Scenarios</h2>
                                <div className="lux-navy-divider-left"></div>
                                <p className="lux-p lux-sticky-desc">
                                    Matching specific travel milestones and preferences with the appropriate yacht collection.
                                </p>
                            </div>
                        </aside>

                        {/* Right Column: Scenario Grid */}
                        <main className="lux-content-column">
                            <div className="lux-scenario-grid">

                                {/* Scenario 1 */}
                                <div className="lux-scenario-card">
                                    <span className="lux-scenario-label">The Occasion</span>
                                    <h3 className="lux-scenario-title">Anniversary or milestone travel</h3>
                                    <div className="lux-recommendation-box">
                                        <span className="lux-rec-tag">Recommended</span>
                                        <p className="lux-p">Ritz-Carlton</p>
                                    </div>
                                </div>

                                {/* Scenario 2 */}
                                <div className="lux-scenario-card">
                                    <span className="lux-scenario-label">The Priority</span>
                                    <h3 className="lux-scenario-title">Privacy-focused traveler</h3>
                                    <div className="lux-recommendation-box">
                                        <span className="lux-rec-tag">Recommended</span>
                                        <p className="lux-p">Aman</p>
                                    </div>
                                </div>

                                {/* Scenario 3 */}
                                <div className="lux-scenario-card">
                                    <span className="lux-scenario-label">The Destination</span>
                                    <h3 className="lux-scenario-title">Antarctica or expedition travel</h3>
                                    <div className="lux-recommendation-box">
                                        <span className="lux-rec-tag">Recommended</span>
                                        <p className="lux-p">Scenic</p>
                                    </div>
                                </div>

                                {/* Scenario 4 */}
                                <div className="lux-scenario-card">
                                    <span className="lux-scenario-label">The Experience</span>
                                    <h3 className="lux-scenario-title">First-time yacht experience</h3>
                                    <div className="lux-recommendation-box">
                                        <span className="lux-rec-tag">Recommended</span>
                                        <p className="lux-p">Emerald</p>
                                    </div>
                                </div>

                                {/* Scenario 5 - Full Width */}
                                <div className="lux-scenario-card lux-scenario-full-width">
                                    <span className="lux-scenario-label">The Traveler</span>
                                    <h3 className="lux-scenario-title">Brand-loyal luxury traveler</h3>
                                    <div className="lux-recommendation-box">
                                        <span className="lux-rec-tag">Recommended</span>
                                        <p className="lux-p">Four Seasons</p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 05: YACHT VS TRADITIONAL — Architectural Comparison Architecture ===== */}
            <section className="lux-section lux-bg-soft-blue lux-vs-section">
                <div className="lux-container-wide">

                    {/* Section Header */}
                    <div className="lux-vs-header">
                        <h2 className="lux-h2">Yacht vs. Traditional Cruise</h2>
                        <div className="lux-navy-divider-center"></div>
                    </div>

                    <div className="lux-vs-container">
                        {/* Decorative "VS" background text */}
                        <div className="lux-vs-background-text">VS</div>

                        <div className="lux-vs-grid">

                            {/* Side A: Yacht Cruise */}
                            <div className="lux-vs-card">
                                <div className="lux-card-indicator">The Intimate Choice</div>
                                <h3 className="lux-card-h3">Yacht Cruise</h3>
                                <div className="lux-card-line"></div>

                                <ul className="lux-vs-list">
                                    <li>
                                        <span className="lux-vs-bullet">✦</span>
                                        <p className="lux-p">Smaller ships with higher service levels</p>
                                    </li>
                                    <li>
                                        <span className="lux-vs-bullet">✦</span>
                                        <p className="lux-p">Deeply personalized guest experiences</p>
                                    </li>
                                    <li>
                                        <span className="lux-vs-bullet">✦</span>
                                        <p className="lux-p">Access to exclusive, small-scale ports</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Side B: Traditional Luxury Cruise */}
                            <div className="lux-vs-card">
                                <div className="lux-card-indicator">The Traditional Choice</div>
                                <h3 className="lux-card-h3">Luxury Cruise</h3>
                                <div className="lux-card-line"></div>

                                <ul className="lux-vs-list">
                                    <li>
                                        <span className="lux-vs-bullet">○</span>
                                        <p className="lux-p">Larger ships with more onboard amenities</p>
                                    </li>
                                    <li>
                                        <span className="lux-vs-bullet">○</span>
                                        <p className="lux-p">Broader range of commercial entertainment</p>
                                    </li>
                                    <li>
                                        <span className="lux-vs-bullet">○</span>
                                        <p className="lux-p">A more structured, less intimate experience</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 06: AUTHORITY — Refined Design with Small Image on Right ===== */}
            <section className="lux-section lux-bg-white lux-authority-refined">
                <div className="lux-container-wide">
                    <div className="lux-authority-layout">

                        {/* Left Column: Dominant Text Content */}
                        <div className="lux-authority-text-area">
                            <div className="lux-authority-header">
                                <h2 className="lux-h2">Work with <br />Angela Hughes</h2>
                                <div className="lux-navy-divider-short"></div>
                                <p className="lux-authority-sub">CEO, Trips & Ships Luxury Travel</p>
                            </div>

                            <div className="lux-authority-bio">
                                <p className="lux-p">
                                    Angela Hughes has spent over four decades in the travel industry and leads a global luxury travel agency with more than 140 advisors.
                                </p>
                                <p className="lux-p">
                                    She works directly with the brands shaping the yacht space and spends extensive time onboard and in destination.
                                </p>

                                {/* Pull Quote Box — Soft Blue Schema */}
                                <div className="lux-expert-quote-box">
                                    <p className="lux-p lux-serif-quote">
                                        "Clients rarely book the yacht they initially request. They book the yacht that fits once they understand the differences. That is where expertise matters."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Small Architectural Image side */}
                        <div className="lux-authority-image-area">
                            <div className="lux-small-portrait-frame">
                                {/* Decorative Background Element */}
                                <div className="lux-portrait-decoration"></div>

                                <img
                                    src={ProfilePicture}
                                    alt="Angela Hughes"
                                    className="lux-small-img"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="lux-section lux-bg-soft">
                <div className="lux-container-narrow">
                    <div className="lux-faq-header">
                        <h2 className="lux-h2">Frequently Asked Questions</h2>
                        <div className="lux-navy-divider-center"></div>
                        <p className="lux-faq-intro">Everything you need to know about luxury yacht cruises.</p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ===== SECTION 07: FINAL CTA — Minimalist, high-impact concluding statement ===== */}
            <section className="lux-section lux-final-cta-section" style={{ backgroundImage: `url(${FinalBGImage})` }}>
                <div className="lux-container-wide">
                    <div className="lux-cta-content-center">

                        <p className="lux-p lux-cta-top-line">
                            Choosing the right yacht is not about availability.
                        </p>

                        <h2 className="lux-h2 lux-cta-main-title">
                            It is about alignment.
                        </h2>

                        <div className="lux-navy-divider-center"></div>

                        <p className="lux-p lux-cta-bottom-line">
                            Start with the right strategy and the experience follows.
                        </p>

                        <div className="lux-cta-action">
                            <button className="lux-btn-primary">Plan Your Yacht Experience</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}