import React, { useState } from 'react';
import { Ship, Diamond, Navigation, Plus, Minus, Heart, Users, Star, BadgeCheck, User, Award, Shield, ArrowRight, Layers, Check, ChevronDown, ChevronUp } from 'lucide-react';
import './RiversideVikingRiverCruises.css';
import Navbar from '../../components/Navbar/Navbar';
import AboutImage from '../../assets/image.webp';
import HeroImage1 from '../../assets/Riverside-vs-Viking/Hero1.jpg';
import HeroImage2 from '../../assets/Riverside-vs-Viking/Hero2.jpg';
import HeroImage3 from '../../assets/Riverside-vs-Viking/Hero3.jpg';
import Gallary1 from '../../assets/Riverside-vs-Viking/ImageGallary1.jpg';
import Gallary2 from '../../assets/Riverside-vs-Viking/ImageGallary2.jpg';
import Gallary3 from '../../assets/Riverside-vs-Viking/ImageGallary3.jpg';
import Gallary4 from '../../assets/Riverside-vs-Viking/ImageGallary4.jpg';
import Gallary5 from '../../assets/Riverside-vs-Viking/ImageGallary5.jpg';
import Gallary6 from '../../assets/Riverside-vs-Viking/ImageGallary6.jpg';
import Gallary7 from '../../assets/Riverside-vs-Viking/ImageGallary7.jpg';
import Gallary8 from '../../assets/Riverside-vs-Viking/ImageGallary8.jpg';
import Gallary9 from '../../assets/Riverside-vs-Viking/ImageGallary9.jpg';
import { Helmet } from 'react-helmet-async';

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#organization",
            "name": "Trips & Ships Luxury Travel",
            "url": "https://www.tripsandships.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.tripsandships.com/path-to-logo.png"
            },
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
            "worksFor": {
                "@id": "https://www.tripsandships.com/#organization"
            },
            "url": "https://www.tripsandships.com",
            "image": "https://www.tripsandships.com/path-to-angela-headshot.jpg",
            "sameAs": [
                "https://www.linkedin.com/in/your-linkedin-url",
                "https://www.instagram.com/tripsandships"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://www.tripsandships.com/#website",
            "url": "https://www.tripsandships.com",
            "name": "Trips & Ships Luxury Travel",
            "publisher": {
                "@id": "https://www.tripsandships.com/#organization"
            }
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/riverside-vs-viking-river-cruises/#webpage",
            "url": "https://www.tripsandships.com/riverside-vs-viking-river-cruises",
            "name": "Riverside vs Viking River Cruises: Which River Cruise Is Actually Right for You",
            "description": "A clear, expert comparison of Riverside Luxury Cruises vs Viking River Cruises. Learn the real differences in pricing, space, service, and which river cruise experience is right for your travel style in Europe.",
            "isPartOf": {
                "@id": "https://www.tripsandships.com/#website"
            },
            "about": [
                {
                    "@type": "Thing",
                    "name": "Riverside Luxury Cruises"
                },
                {
                    "@type": "Thing",
                    "name": "Viking River Cruises"
                }
            ],
            "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://www.tripsandships.com/path-to-page-hero-image.jpg"
            },
            "inLanguage": "en-US"
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/riverside-vs-viking-river-cruises/#article",
            "headline": "Riverside vs Viking River Cruises: Which River Cruise Is Actually Right for You",
            "description": "A clear, expert comparison of Riverside Luxury Cruises vs Viking River Cruises. Learn the real differences in pricing, space, service, and which river cruise experience is right for your travel style in Europe.",
            "author": {
                "@id": "https://www.tripsandships.com/#angelahughes"
            },
            "publisher": {
                "@id": "https://www.tripsandships.com/#organization"
            },
            "mainEntityOfPage": {
                "@id": "https://www.tripsandships.com/riverside-vs-viking-river-cruises/#webpage"
            },
            "datePublished": "2026-04-10",
            "dateModified": "2026-04-10",
            "image": [
                "https://www.tripsandships.com/path-to-page-hero-image.jpg"
            ],
            "articleSection": [
                "River Cruises",
                "Luxury River Cruises",
                "River Cruise Comparisons"
            ],
            "keywords": [
                "Riverside vs Viking River Cruises",
                "Riverside Luxury Cruises vs Viking",
                "is Riverside better than Viking river cruise",
                "luxury river cruise vs Viking",
                "best river cruise line for luxury travelers Europe",
                "Viking river cruise alternatives luxury",
                "river cruise comparison Riverside vs Viking"
            ],
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/riverside-vs-viking-river-cruises/#breadcrumb",
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
                    "name": "River Cruises",
                    "item": "https://www.tripsandships.com/river-cruises"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Riverside vs Viking River Cruises",
                    "item": "https://www.tripsandships.com/riverside-vs-viking-river-cruises"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/riverside-vs-viking-river-cruises/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the difference between Riverside and Viking River Cruises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Riverside offers a boutique luxury experience with more space, while Viking provides a structured premium river cruise experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better, Riverside or Viking River Cruises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Riverside is better for luxury travelers seeking more space and refinement, while Viking is ideal for first-time cruisers who want a structured and consistent experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Riverside more luxurious than Viking?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Riverside is positioned as a boutique luxury river cruise line with larger suites, a quieter onboard atmosphere, and a more refined overall experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much do Riverside vs Viking river cruises cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Riverside typically ranges from $4,000 to $10,000 or more per person, while Viking typically ranges from $3,000 to $7,000 per person depending on itinerary, season, and cabin category."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which has bigger cabins, Riverside or Viking?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Riverside generally offers larger cabins and suites than Viking."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Viking good for first-time river cruisers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Viking is one of the strongest options for first-time river cruisers because of its structured itineraries, recognizable brand, and consistent onboard experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who should upgrade to Riverside?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Travelers who want more space, more privacy, a quieter atmosphere, and a more refined luxury experience should consider upgrading to Riverside."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are both Riverside and Viking all-inclusive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Neither Riverside nor Viking is fully all-inclusive, although both include many core elements such as accommodations and dining."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which is better for couples, Riverside or Viking?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Riverside is typically better for couples seeking a quieter, more intimate, and more refined onboard experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the onboard experience like on Riverside vs Viking?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Riverside feels boutique, spacious, and relaxed, while Viking feels more structured, social, and standardized."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best river cruise line in Europe?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best river cruise line in Europe depends on travel style. Riverside is a top choice for luxury travelers seeking a boutique experience, while Viking is a strong choice for first-time river cruisers seeking structure and value."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Viking or Riverside better for first-time travelers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Viking is generally better for first-time river cruisers because of its straightforward, structured approach and broad market appeal."
                    }
                }
            ]
        }
    ]
};

// FAQ Component
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "What is the difference between Riverside and Viking River Cruises",
            a: "Riverside offers a boutique luxury experience with more space, while Viking provides a structured premium river cruise experience.",
        },
        {
            q: "Which is better Riverside or Viking River Cruises",
            a: "Riverside is better for luxury travelers, while Viking is ideal for first-time cruisers.",
        },
        {
            q: "Is Riverside more luxurious than Viking",
            a: "Yes, Riverside offers a more refined and spacious experience.",
        },
        {
            q: "How much do Riverside vs Viking cost",
            a: "Riverside ranges from $4,000–$10,000+, Viking from $3,000–$7,000.",
        },
        {
            q: "Which has bigger cabins",
            a: "Riverside offers larger cabins and suites.",
        },
        {
            q: "Is Viking good for first-time cruisers",
            a: "Yes, it is one of the best entry-level river cruise options.",
        },
        {
            q: "Who should upgrade to Riverside",
            a: "Travelers seeking more space and refinement.",
        },
        {
            q: "Are both all-inclusive",
            a: "Neither is fully all-inclusive.",
        },
        {
            q: "Which is better for couples",
            a: "Riverside is better for couples seeking a quieter experience.",
        },
        {
            q: "What is the onboard experience like",
            a: "Riverside is boutique and relaxed, Viking is structured and social.",
        },
        {
            q: "What is the best river cruise line in Europe",
            a: "The best river cruise line depends on travel style, but Riverside is a top choice for luxury travelers while Viking is popular for first-time cruisers.",
        },
        {
            q: "Is Viking or Riverside better for first-time travelers",
            a: "Viking is generally better for first-time river cruisers due to its structured approach.",
        },
    ];

    return (
        <div className="vik-lux-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`vik-lux-faq-item${open === i ? " vik-lux-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="vik-lux-faq-q">
                        <span>{item.q}</span>
                        <span className="vik-lux-faq-icon">
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
                        </span>
                    </div>
                    {open === i && (
                        <div className="vik-lux-faq-a">
                            <div className="vik-lux-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const RiversideVsViking = () => {
    // Hero image slider
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

    const toggleReadMore = () => {
        setIsReadMoreOpen(!isReadMoreOpen);
    };

    return (
        <div className="vik-page-wrapper">
            {/* SEO & Schema */}
            <Helmet>
                <title>Riverside vs Viking River Cruises: Which River Cruise Is Actually Right for You</title>
                <meta
                    name="title"
                    content="Riverside vs Viking River Cruises: Expert Comparison for European River Cruises"
                />
                <meta
                    name="description"
                    content="A clear, expert comparison of Riverside Luxury Cruises vs Viking River Cruises. Learn the real differences in pricing, space, service, and which river cruise experience is right for your travel style in Europe."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            {/* Navbar */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="vik-riv_hero_viewport">
                <div className="vik-riv_hero_content">
                    <span className="vik-river-hero-eyebrow">River Cruise Planning</span>
                    <h1 className="vik-riv_hero_main_h1">Riverside vs Viking River Cruises: Which River Cruise Is Actually Right for You</h1>
                    <p className="vik-riv_hero_sub_p">A clear, expert comparison to help you choose the right river cruise experience in Europe</p>

                    {/* QUICK ANSWER BOX */}
                    <div className="vik-riv_hero_read_more_outer">
                        <button
                            className="vik-riv_hero_read_more_btn"
                            onClick={toggleReadMore}
                        >
                            {isReadMoreOpen ? 'Read Less' : 'Read More'}
                            {isReadMoreOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        <div className={`vik-river-hero-details ${isReadMoreOpen ? 'vik-expanded' : ''}`}>
                            <div className="vik-river-quick-answer">
                                <p className="vik-river-qa-main">
                                    The biggest mistake travelers make when comparing these two brands is assuming they are choosing between equals.
                                </p>
                                <p className="vik-river-qa-emphasis">They are not.</p>
                                <p className="vik-river-qa-detail">
                                    Riverside Luxury Cruises is a boutique luxury river cruise experience with more space, refinement, and a quieter onboard atmosphere. Viking River Cruises is a premium river cruise line designed for first-time travelers who want structure, consistency, and ease.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="vik-riv_hero_button_group">
                        <button className="vik-riv_hero_btn_filled">Compare River Cruise Lines</button>
                        <button className="vik-riv_hero_btn_transparent">Plan My River Cruise</button>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="vik-content-section vik-intro-section">
                <div className="vik-container">
                    <div className="vik-intro-wrapper">
                        <div className="intro-content">
                            <h2 className="vik-intro-heading">INTRO</h2>
                            <div className="vik-intro-accent-line"></div>
                            <p className="vik-intro-main-text">
                                This is one of the most important decisions you will make when planning a river cruise.
                            </p>
                            <p className="vik-intro-sub-text">Clients are usually deciding between:</p>
                            <div className="vik-intro-options">
                                <div className="vik-intro-option">
                                    <div className="vik-intro-option-bullet"></div>
                                    <p>starting with a trusted, structured experience</p>
                                </div>
                                <div className="vik-intro-option">
                                    <div className="vik-intro-option-bullet"></div>
                                    <p>or upgrading to something more refined</p>
                                </div>
                            </div>
                            <p className="vik-intro-closing">
                                Those are very different travelers—and they should not be booking the same product.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TRUST THIS COMPARISON */}
            <section className="vik-content-section vik-trust-section">
                <div className="vik-container">
                    <div className="vik-trust-wrapper">
                        <div className="vik-trust-header">
                            <h2 className="vik-trust-heading">WHY TRUST THIS COMPARISON</h2>
                            <div className="vik-trust-accent-line"></div>
                        </div>
                        <p className="vik-trust-intro">This guide is based on:</p>
                        <div className="vik-trust-points">
                            <div className="vik-trust-point">
                                <div className="vik-trust-point-number">01</div>
                                <div className="vik-trust-point-content">
                                    <p>over 40 years of luxury travel expertise</p>
                                </div>
                            </div>
                            <div className="vik-trust-point">
                                <div className="vik-trust-point-number">02</div>
                                <div className="vik-trust-point-content">
                                    <p>booking data across 140+ travel advisors</p>
                                </div>
                            </div>
                            <div className="vik-trust-point">
                                <div className="vik-trust-point-number">03</div>
                                <div className="vik-trust-point-content">
                                    <p>firsthand experience across major river cruise brands</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY DIFFERENCES AT A GLANCE */}
            <section className="vik-content-section vik-table-section">
                <div className="vik-container">
                    <div className="vik-comparison-wrapper">
                        <div className="vik-comparison-header">
                            <h2 className="vik-comparison-heading">KEY DIFFERENCES AT A GLANCE</h2>
                            <div className="vik-comparison-accent-line"></div>
                        </div>

                        <div className="vik-comparison-table-modern">
                            <div className="vik-comparison-table-header">
                                <div className="vik-comparison-col-feature">Feature</div>
                                <div className="vik-comparison-col-brand vik-riverside-col">Riverside</div>
                                <div className="vik-comparison-col-brand vik-viking-col">Viking</div>
                            </div>

                            <div className="vik-comparison-table-body">
                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Positioning</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Boutique luxury</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Premium</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Traveler Type</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Experienced</div>
                                    <div className="vik-comparison-cell vik-viking-cell">First-time</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Space</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Larger suites</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Standard cabins</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Atmosphere</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Quiet, refined</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Structured</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Experience</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Curated</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Systemized</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES COMPARED */}
            <section className="vik-content-section vik-table-section">
                <div className="vik-container">
                    <div className="vik-comparison-wrapper">
                        <div className="vik-comparison-header">
                            <h2 className="vik-comparison-heading">RIVERSIDE VS VIKING: KEY FEATURES COMPARED</h2>
                            <div className="vik-comparison-accent-line"></div>
                        </div>

                        <div className="vik-comparison-table-modern">
                            <div className="vik-comparison-table-header">
                                <div className="vik-comparison-col-feature">Feature</div>
                                <div className="vik-comparison-col-brand vik-riverside-col">Riverside</div>
                                <div className="vik-comparison-col-brand vik-viking-col">Viking</div>
                            </div>

                            <div className="vik-comparison-table-body">
                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Average Cabin Size</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Larger suites</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Standard cabins</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Guest Capacity</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Lower density</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Higher capacity</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Crew Ratio</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Higher</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Standard</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Dining Style</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Curated</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Structured</div>
                                </div>

                                <div className="vik-comparison-row">
                                    <div className="vik-comparison-cell-feature">Excursion Style</div>
                                    <div className="vik-comparison-cell vik-riverside-cell">Flexible</div>
                                    <div className="vik-comparison-cell vik-viking-cell">Guided</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE REAL DIFFERENCE */}
            <section className="vik-content-section vik-real-difference-section">
                <div className="vik-container">
                    <div className="vik-real-diff-wrapper">
                        <div className="vik-real-diff-header">
                            <h2 className="vik-real-diff-heading">THE REAL DIFFERENCE</h2>
                            <div className="vik-real-diff-accent-line"></div>
                        </div>

                        <div className="vik-real-diff-grid">
                            {/* Riverside Card */}
                            <div className="vik-real-diff-card riverside-card">
                                <div className="vik-real-diff-card-header">
                                    <div className="vik-real-diff-badge vik-riverside-badge">Riverside</div>
                                    <h4 className="vik-real-diff-card-title">Riverside Feels Like a Boutique Hotel on the Water</h4>
                                </div>
                                <div className="vik-real-diff-card-content">
                                    <p className="vik-real-diff-text">
                                        When you step onboard Riverside Luxury Cruises, the first thing you notice is space.
                                    </p>
                                    <p className="vik-real-diff-subtext">The second thing you notice is what's missing:</p>
                                    <div className="vik-real-diff-list">
                                        <div className="vik-real-diff-list-item">
                                            <div className="vik-real-diff-bullet"></div>
                                            <p>no crowds</p>
                                        </div>
                                        <div className="vik-real-diff-list-item">
                                            <div className="vik-real-diff-bullet"></div>
                                            <p>no rush</p>
                                        </div>
                                        <div className="vik-real-diff-list-item">
                                            <div className="vik-real-diff-bullet"></div>
                                            <p>no over-scheduling</p>
                                        </div>
                                    </div>
                                    <p className="vik-real-diff-conclusion">
                                        It is designed for travelers who want a more intentional experience.
                                    </p>
                                </div>
                            </div>

                            {/* Viking Card */}
                            <div className="vik-real-diff-card viking-card">
                                <div className="vik-real-diff-card-header">
                                    <div className="vik-real-diff-badge vik-viking-badge">Viking</div>
                                    <h4 className="vik-real-diff-card-title">Viking Feels Structured—and That's the Point</h4>
                                </div>
                                <div className="vik-real-diff-card-content">
                                    <p className="vik-real-diff-text">
                                        Viking River Cruises is built for consistency.
                                    </p>
                                    <p className="vik-real-diff-subtext">It is:</p>
                                    <div className="vik-real-diff-list">
                                        <div className="vik-real-diff-list-item">
                                            <div className="vik-real-diff-bullet"></div>
                                            <p>organized</p>
                                        </div>
                                        <div className="vik-real-diff-list-item">
                                            <div className="vik-real-diff-bullet"></div>
                                            <p>predictable</p>
                                        </div>
                                        <div className="vik-real-diff-list-item">
                                            <div className="vik-real-diff-bullet"></div>
                                            <p>easy to follow</p>
                                        </div>
                                    </div>
                                    <p className="vik-real-diff-conclusion">
                                        For many travelers, especially first-timers, that is exactly what they want.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VIDEO SECTION: RIVER CRUISE EXPERIENCE ===== */}
            <section className="lux-section lux-bg-white vik-lux-video-section">
                <div className="lux-container-wide">
                    <div className="vik-lux-video-header">
                        <h2 className="vik-lux-h2">Riverside Cruises</h2>
                        <div className="vik-lux-navy-divider-center"></div>
                        <p className="vik-lux-video-subtitle">
                            See the real difference between boutique luxury and premium river cruising. Discover which experience matches your travel style and expectations for exploring Europe's most beautiful waterways.
                        </p>
                    </div>

                    <div className="vik-lux-video-wrapper">
                        <video
                            className="vik-lux-video-player"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source
                                src="https://www.dropbox.com/scl/fo/50i1fncme11gdwvndkgz9/AEAoUcNeZ79lxKW5OIRPxjo/Emerald%20Cruises/River%20Cruising/Videos/Overview/Emerald%20-%20River%20-%2015%20sec%20-%20CBS.mp4?rlkey=hh4iogyoyp7gt2ar13rl22oir&st=gew8je6r&raw=1"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            {/* PRICING COMPARISON */}
            <section className="vik-content-section vik-pricing-section">
                <div className="vik-container">
                    <div className="vik-pricing-wrapper">
                        <div className="vik-pricing-header">
                            <h2 className="vik-pricing-heading">PRICING COMPARISON</h2>
                            <div className="vik-pricing-accent-line"></div>
                        </div>

                        <div className="vik-pricing-cards-grid">
                            {/* Riverside Pricing Card */}
                            <div className="vik-pricing-card riverside-pricing-card">
                                <div className="vik-pricing-card-header">
                                    <div className="vik-pricing-badge vik-riverside-pricing-badge">Riverside</div>
                                </div>
                                <div className="vik-pricing-card-body">
                                    <div className="vik-pricing-amount">$4,000–$10,000+</div>
                                    <div className="vik-pricing-unit">per person</div>
                                </div>
                            </div>

                            {/* Viking Pricing Card */}
                            <div className="vik-pricing-card viking-pricing-card">
                                <div className="vik-pricing-card-header">
                                    <div className="vik-pricing-badge vik-viking-pricing-badge">Viking</div>
                                </div>
                                <div className="vik-pricing-card-body">
                                    <div className="vik-pricing-amount">$3,000–$7,000</div>
                                    <div className="vik-pricing-unit">per person</div>
                                </div>
                            </div>
                        </div>

                        <p className="vik-pricing-conclusion">
                            This is not just a price difference—it reflects a difference in experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHICH IS BEST FOR YOU */}
            <section className="vik-content-section vik-best-for-section">
                <div className="vik-container">
                    <div className="vik-best-for-wrapper">
                        <div className="vik-best-for-header">
                            <h2 className="vik-best-for-heading">WHICH RIVER CRUISE IS BEST FOR YOU</h2>
                            <div className="vik-best-for-accent-line"></div>
                        </div>

                        <div className="vik-best-for-grid">
                            <div className="vik-best-for-card vik-riverside-best-card">
                                <div className="vik-best-for-icon">
                                    <Heart size={32} strokeWidth={1.5} />
                                </div>
                                <div className="vik-best-for-content">
                                    <h4 className="vik-best-for-category">Best for couples</h4>
                                    <div className="vik-best-for-answer">Riverside</div>
                                </div>
                            </div>

                            <div className="vik-best-for-card vik-viking-best-card">
                                <div className="vik-best-for-icon">
                                    <Users size={32} strokeWidth={1.5} />
                                </div>
                                <div className="vik-best-for-content">
                                    <h4 className="vik-best-for-category">Best for first-time cruisers</h4>
                                    <div className="vik-best-for-answer">Viking</div>
                                </div>
                            </div>

                            <div className="vik-best-for-card vik-riverside-best-card">
                                <div className="vik-best-for-icon">
                                    <Star size={32} strokeWidth={1.5} />
                                </div>
                                <div className="vik-best-for-content">
                                    <h4 className="vik-best-for-category">Best for luxury travelers</h4>
                                    <div className="vik-best-for-answer">Riverside</div>
                                </div>
                            </div>

                            <div className="vik-best-for-card vik-viking-best-card">
                                <div className="vik-best-for-icon">
                                    <BadgeCheck size={32} strokeWidth={1.5} />
                                </div>
                                <div className="vik-best-for-content">
                                    <h4 className="vik-best-for-category">Best value</h4>
                                    <div className="vik-best-for-answer">Viking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BIGGEST MISTAKE */}
            <section className="vik-content-section vik-mistake-section">
                <div className="vik-container">
                    <div className="vik-mistake-wrapper">
                        <div className="vik-mistake-header">
                            <h2 className="vik-mistake-heading">THE BIGGEST MISTAKE TRAVELERS MAKE</h2>
                            <div className="vik-mistake-accent-line"></div>
                        </div>

                        <div className="vik-mistake-content">
                            <p className="vik-mistake-main-text">
                                Most travelers assume they are choosing between two similar products.
                            </p>

                            <p className="vik-mistake-emphasis">They are not.</p>

                            <p className="vik-mistake-subtext">They are choosing between:</p>

                            <div className="vik-mistake-options">
                                <div className="vik-mistake-option">
                                    <div className="vik-mistake-option-icon">
                                        <span className="vik-mistake-option-number">01</span>
                                    </div>
                                    <p className="vik-mistake-option-text">a structured first experience</p>
                                </div>

                                <div className="vik-mistake-option">
                                    <div className="vik-mistake-option-icon">
                                        <span className="vik-mistake-option-number">02</span>
                                    </div>
                                    <p className="vik-mistake-option-text">a refined upgrade experience</p>
                                </div>
                            </div>

                            <p className="vik-mistake-conclusion">
                                Understanding that difference changes the decision entirely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO SHOULD CHOOSE */}
            <section className="vik-content-section vik-who-should-choose-section">
                <div className="vik-container">
                    <div className="vik-choose-wrapper">
                        <div className="vik-choose-header">
                            <h2 className="vik-choose-heading">WHO SHOULD CHOOSE</h2>
                            <div className="vik-choose-accent-line"></div>
                        </div>

                        <div className="vik-choose-grid">
                            {/* Riverside Card */}
                            <div className="vik-choose-card vik-riverside-choose-card">
                                <div className="vik-choose-card-header">
                                    <div className="vik-choose-badge vik-riverside-choose-badge">Riverside</div>
                                    <h4 className="vik-choose-card-title">WHO SHOULD CHOOSE RIVERSIDE</h4>
                                </div>
                                <div className="vik-choose-card-body">
                                    <p className="vik-choose-intro">Choose Riverside Luxury Cruises if you:</p>
                                    <div className="vik-choose-list">
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">have already taken a river cruise</p>
                                        </div>
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">want more space and privacy</p>
                                        </div>
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">prefer a quieter, more refined experience</p>
                                        </div>
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">are comfortable paying more for quality</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Viking Card */}
                            <div className="vik-choose-card vik-viking-choose-card">
                                <div className="vik-choose-card-header">
                                    <div className="vik-choose-badge vik-viking-choose-badge">Viking</div>
                                    <h4 className="vik-choose-card-title">WHO SHOULD CHOOSE VIKING</h4>
                                </div>
                                <div className="vik-choose-card-body">
                                    <p className="vik-choose-intro">Choose Viking River Cruises if you:</p>
                                    <div className="vik-choose-list">
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">are taking your first river cruise</p>
                                        </div>
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">want a structured, guided experience</p>
                                        </div>
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">prefer a well-known and consistent brand</p>
                                        </div>
                                        <div className="vik-choose-list-item">
                                            <div className="vik-choose-list-icon">
                                                <Check size={16} strokeWidth={2.5} />
                                            </div>
                                            <p className="vik-choose-list-text">are more price conscious</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERT INSIGHT */}
            <section className="vik-content-section vik-expert-insight-section">
                <div className="vik-container">
                    <div className="vik-expert-wrapper">
                        <div className="vik-expert-header">
                            <h2 className="vik-expert-heading">EXPERT INSIGHT</h2>
                            <div className="vik-expert-accent-line"></div>
                        </div>

                        <div className="vik-expert-content">
                            <p className="vik-expert-intro">
                                Most travelers comparing these brands fall into two categories:
                            </p>

                            <div className="vik-expert-categories">
                                <div className="vik-expert-category">
                                    <div className="vik-expert-category-icon">
                                        <span className="vik-expert-category-number">01</span>
                                    </div>
                                    <p className="vik-expert-category-text">first-time cruisers deciding where to start</p>
                                </div>

                                <div className="vik-expert-category">
                                    <div className="vik-expert-category-icon">
                                        <span className="vik-expert-category-number">02</span>
                                    </div>
                                    <p className="vik-expert-category-text">experienced travelers looking to upgrade</p>
                                </div>
                            </div>

                            <div className="vik-expert-insight-box">
                                <div className="vik-expert-insight-badge">
                                    <Layers size={24} strokeWidth={2} />
                                    <span>Expert Insight:</span>
                                </div>
                                <p className="vik-expert-insight-text">
                                    Viking dominates the entry-level river cruise market, but Riverside is quickly becoming one of the most compelling upgrade options for travelers seeking more space and a more refined onboard experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW TO CHOOSE */}
            <section className="vik-content-section vik-how-to-choose-section">
                <div className="vik-container">
                    <div className="vik-choose-right-wrapper">
                        <div className="vik-choose-right-header">
                            <h2 className="vik-choose-right-heading">HOW TO CHOOSE THE RIGHT RIVER CRUISE</h2>
                            <div className="vik-choose-right-accent-line"></div>
                        </div>

                        <div className="vik-choose-right-content">
                            <p className="vik-choose-right-main-text">
                                Choosing between Riverside Luxury Cruises and Viking River Cruises is not about picking the better brand—it is about matching the right experience to the right traveler.
                            </p>

                            <p className="vik-choose-right-subtext">Working with an experienced advisor ensures:</p>

                            <div className="vik-choose-right-checklist">
                                <div className="vik-choose-right-item">
                                    <div className="vik-choose-right-icon">
                                        <Check size={20} strokeWidth={2.5} />
                                    </div>
                                    <p className="vik-choose-right-item-text">the right itinerary</p>
                                </div>

                                <div className="vik-choose-right-item">
                                    <div className="vik-choose-right-icon">
                                        <Check size={20} strokeWidth={2.5} />
                                    </div>
                                    <p className="vik-choose-right-item-text">the right cabin</p>
                                </div>

                                <div className="vik-choose-right-item">
                                    <div className="vik-choose-right-icon">
                                        <Check size={20} strokeWidth={2.5} />
                                    </div>
                                    <p className="vik-choose-right-item-text">the right overall experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE GALLERY SECTION */}
            <section className="vik-content-section vik-gallery-section">
                <div className="vik-container">
                    <div className="vik-gallery-header">
                        <h2 className="vik-gallery-heading">Visualizing the Experience</h2>
                        <div className="vik-gallery-accent-line"></div>
                        <p className="vik-gallery-intro">Discover the elegance and detail that define these exceptional river cruise journeys.</p>
                    </div>

                    <div className="vik-premium-gallery-grid">
                        <div className="vik-gallery-item vik-item-large">
                            <img src={Gallary1} alt="Luxury Suite Details" />
                            <div className="vik-gallery-overlay">
                                <span>Luxury Suite Details</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary2} alt="Boutique Onboard Spaces" />
                            <div className="vik-gallery-overlay">
                                <span>Boutique Onboard Spaces</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary3} alt="Dining Excellence" />
                            <div className="vik-gallery-overlay">
                                <span>Dining Excellence</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary4} alt="Scenic European Views" />
                            <div className="vik-gallery-overlay">
                                <span>Scenic European Views</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item vik-item-tall">
                            <img src={Gallary5} alt="Elegant Architecture" />
                            <div className="vik-gallery-overlay">
                                <span>Elegant Architecture</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary6} alt="Riverside Luxury" />
                            <div className="vik-gallery-overlay">
                                <span>Riverside Luxury</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary7} alt="Viking Heritage" />
                            <div className="vik-gallery-overlay">
                                <span>Viking Heritage</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary8} alt="Boutique Atmosphere" />
                            <div className="vik-gallery-overlay">
                                <span>Boutique Atmosphere</span>
                            </div>
                        </div>
                        <div className="vik-gallery-item">
                            <img src={Gallary9} alt="Modern Refinement" />
                            <div className="vik-gallery-overlay">
                                <span>Modern Refinement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="vik-cta-section">
                <div className="vik-container">
                    <div className="vik-cta-wrapper">
                        <div className="vik-cta-content">
                            <h2 className="vik-cta-heading">Plan Your River Cruise the Right Way</h2>
                            <p className="vik-cta-subtext">Work with an expert to match the right cruise to your travel style.</p>
                        </div>

                        <div className="vik-cta-buttons">
                            <button className="vik-cta-primary">
                                <span>Plan My River Cruise</span>
                                <ArrowRight size={20} strokeWidth={2.5} />
                            </button>
                            <button className="vik-cta-secondary">
                                <span>Work With Angela Hughes</span>
                                <User size={20} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT ANGELA HUGHES */}
            <section className="vik-content-section vik-about-section">
                <div className="vik-container">
                    <div className="vik-about-wrapper">
                        <div className="vik-about-header">
                            <h2 className="vik-about-heading">ABOUT ANGELA HUGHES AND TRIPS & SHIPS LUXURY TRAVEL</h2>
                            <div className="vik-about-accent-line"></div>
                        </div>

                        <div className="vik-about-content">
                            <div className="vik-about-portrait-section">
                                <div className="vik-about-portrait">
                                    <img
                                        src={AboutImage}
                                        alt="Angela Hughes - Luxury Travel Expert"
                                        className="vik-about-portrait-img"
                                    />
                                </div>
                            </div>

                            <div className="vik-about-text-content">
                                <p className="vik-about-intro">
                                    When clients are comparing river cruise lines, they are not just choosing a ship—they are choosing the experience.
                                </p>

                                <p className="vik-about-text">
                                    Angela Hughes brings over 40 years of experience in luxury travel and is one of the most recognized voices in the industry.
                                </p>

                                <div className="vik-about-credentials">
                                    <div className="vik-about-credential-item">
                                        <div className="vik-about-credential-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        <p className="vik-about-credential-text">As CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University, she leads a network of over 140 travel advisors and has personally sold millions in luxury travel annually across cruise, expedition, and global itineraries.</p>
                                    </div>

                                    <div className="vik-about-credential-item">
                                        <div className="vik-about-credential-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                        </div>
                                        <p className="vik-about-credential-text">Angela has been featured in Travel Weekly, TravelAge West, Travel Market Report, Insider Travel Report, and more, and has been recognized as Luxury Travel Influencer of the Year. She is also a global speaker and industry leader.</p>
                                    </div>
                                </div>

                                <div className="vik-about-brand-statement">
                                    <div className="vik-about-brand-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <p className="vik-about-brand-text">
                                        She works across all major cruise brands, including Riverside Luxury Cruises and Viking River Cruises, ensuring recommendations are based on experience and client fit—not a single supplier relationship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="vik-content-section vik-faq-section">
                <div className="vik-container">
                    <div className="vik-lux-faq-header">
                        <h2 className="vik-lux-h2">Frequently Asked Questions</h2>
                        <div className="vik-lux-navy-divider-center"></div>
                        <p className="vik-lux-faq-intro">Everything you need to know about Riverside vs Viking River Cruises.</p>
                    </div>
                    <FAQ />
                </div>
            </section>
        </div>
    );
};

export default RiversideVsViking;