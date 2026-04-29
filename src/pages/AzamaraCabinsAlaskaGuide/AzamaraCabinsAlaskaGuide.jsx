import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
    Compass, Plus, Minus, Sparkles, Info,
    LayoutGrid, Wind, Sun, Star, Ship,
    MapPin, Users, Activity, AlertTriangle,
    CheckCircle2, Anchor, Play
} from "lucide-react";
import "./AzamaraCabinsAlaskaGuide.css";

import heroImage1 from "../../assets/AzamaraCabinsAlaskaGuide/Hero1.webp";
import heroImage2 from "../../assets/AzamaraCabinsAlaskaGuide/Hero2.webp";
import heroImage3 from "../../assets/AzamaraCabinsAlaskaGuide/Hero3.webp";
import suiteImg from "../../assets/AzamaraCabinsAlaskaGuide/Suite_Categories.webp";
import profileImg from "../../assets/image.jpg";

export default function AzamaraCabinsAlaskaGuide() {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentHero, setCurrentHero] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const heroImages = [heroImage1, heroImage2, heroImage3];

    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000);
        return () => clearInterval(t);
    }, [heroImages.length]);

    const faqs = [
        { q: "Are Azamara Cruises cabins outdated compared to newer cruise lines?", a: "Azamara ships are not brand new, but they are well-maintained and thoughtfully refreshed. While the hardware is more classic, the experience, service, and overall feel onboard are elevated and often more important to the right traveler." },
        { q: "Is a veranda cabin really worth it on an Alaska cruise?", a: "Yes. In Alaska, a veranda cabin is one of the few upgrades that consistently transforms the experience, giving you private, uninterrupted access to the scenery." },
        { q: "What is the difference between oceanview and veranda cabins on Azamara?", a: "Oceanview cabins offer natural light through a window, while veranda cabins provide a private balcony, allowing you to step outside and experience the destination directly." },
        { q: "Which Azamara cabins have the best views?", a: "Veranda cabins located mid-ship or slightly aft on higher decks typically offer the best balance of views and stability." },
        { q: "Are Azamara suites worth the upgrade?", a: "Yes, especially for longer sailings or special occasions. Suites provide more space, better locations, and an overall more elevated onboard experience." },
        { q: "What is the quietest cabin location on Azamara ships?", a: "Aft cabins and mid-ship cabins away from elevators and public spaces are generally the quietest options." },
        { q: "Which cabins should I avoid on Azamara?", a: "Cabins at the very front (forward) on lower decks may experience more motion, and those near elevators or service areas can have more noise." },
        { q: "Do Azamara cabins have enough storage for longer trips?", a: "Yes. While not oversized, cabins are efficiently designed with adequate storage for most travelers, especially for cruises over 7–12 nights." },
        { q: "How early should I book to get the best Azamara cabin?", a: "Booking 9–15 months in advance is recommended to secure the best cabin location and category." },
        { q: "Are all Azamara balcony cabins the same size?", a: "Most veranda cabins are similar in size, but location and layout can vary slightly depending on the ship and deck." },
        { q: "Is it better to book a higher deck cabin on Azamara?", a: "Higher decks generally offer better views, but lower decks provide more stability. The best choice depends on your priorities." },
        { q: "Do Azamara cabins feel crowded compared to larger ships?", a: "Not typically. While slightly smaller, they are well-designed and feel more refined and intentional than many larger cruise ship cabins." },
        { q: "Is Azamara a good choice for travelers who care about cabin quality?", a: "Yes, as long as expectations are aligned. Azamara focuses on experience and destination immersion rather than oversized or ultra-modern cabins." },
        { q: "What cabin category do most experienced travelers choose on Azamara?", a: "Most experienced travelers choose veranda cabins because they offer the best balance of value, comfort, and experience." },
        { q: "What is the biggest mistake travelers make when choosing a cruise cabin?", a: "The biggest mistake is choosing based on price alone rather than how the cabin impacts the overall experience—especially in destinations like Alaska where views and access matter." },
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.a
                    }
                }))
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/azamara-cabins-guide/#article",
                "headline": "Azamara Cabins Guide: Best Staterooms for Alaska + What’s Actually Worth It",
                "description": "Expert guide to Azamara cabins for Alaska cruises. Compare balcony, oceanview, and suites, plus insider advice on the best staterooms and locations.",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tripsandships.com/azamara-cabins-guide/"
                },
                "about": [
                    "Azamara cabins",
                    "Azamara staterooms",
                    "Azamara Alaska cruises",
                    "Alaska cruise cabins",
                    "small ship cruising"
                ]
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO and Luxury Travel Advisor",
                "description": "Angela Hughes is a luxury travel expert with over 40 years of experience and travel to 121+ countries. She is CEO of Trips & Ships Luxury Travel and specializes in luxury cruises, Alaska travel, small ship cruising, expedition travel, and bespoke itineraries.",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "award": [
                    "Luxury Travel Influencer of the Year 2024 by Travel Leaders Network",
                    "Most Influential Women in Travel 2026 by TravelPulse",
                    "Travel Weekly Magellan Awards"
                ],
                "knowsAbout": [
                    "Azamara Cruises",
                    "Alaska Cruises",
                    "Luxury Travel",
                    "Small Ship Cruising",
                    "Cruise Cabin Selection",
                    "Expedition Travel"
                ],
                "url": "https://www.tripsandships.com/about-angela-hughes/"
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "founder": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "sameAs": [
                    "https://www.instagram.com/tripsandships",
                    "https://www.linkedin.com",
                    "https://www.youtube.com"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/azamara-cabins-guide/#breadcrumb",
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
                        "name": "Azamara Alaska Cruises",
                        "item": "https://www.tripsandships.com/azamara-alaska-cruises/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Azamara Cabins Guide",
                        "item": "https://www.tripsandships.com/azamara-cabins-guide/"
                    }
                ]
            }
        ]
    };

    return (
        <div className="acag-root">
            <Helmet>
                <title>Azamara Cabins Guide: Best Staterooms for Alaska + What’s Actually Worth It</title>
                <meta name="title" content="Azamara Cabins Guide: Best Staterooms for Alaska + What’s Actually Worth It" />
                <meta name="description" content="Expert guide to Azamara cabins for Alaska cruises. Compare balcony, oceanview, and suites, plus insider advice on the best staterooms and locations." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Navbar />

            {/* 1. HERO */}
            <section className="acag-section acag-hero">
                {heroImages.map((img, i) => (
                    <div key={i} className={`acag-hero-bg ${i === currentHero ? "active" : ""}`} style={{ backgroundImage: `url(${img})` }}></div>
                ))}
                <div className="acag-hero-overlay"></div>
                <div className="acag-container acag-hero-inner">
                    <span className="acag-eyebrow">
                        <Compass size={14} style={{ marginRight: "8px" }} />
                        Expert Alaska Cabin Guide
                    </span>
                    <h1 className="acag-h1 acag-h1-hero">
                        Azamara Cabins Guide <br /> Which Stateroom Is Actually Worth It?
                    </h1>
                    <div className={`acag-hero-details ${showAnswer ? "expanded" : ""}`}>
                        <div className="acag-snippet-card">
                            <h2 className="acag-snippet-label">
                                <Sparkles size={16} />
                                Most People Choose the Wrong Cabin. Here's Why.
                            </h2>
                            <p className="acag-hero-p">
                                Cabin selection is where most travelers get cruising wrong.
                            </p>
                            <p className="acag-hero-p acag-mt-sm">
                                They either overpay for something they don't use—or underbook and miss the experience entirely. And once you're onboard, there's no fixing it.
                            </p>
                            <p className="acag-hero-p acag-mt-sm">
                                On Azamara Cruises, the ships are smaller, more intentional, and more destination-focused. That means your cabin is not just where you sleep—it becomes part of how you experience the trip.
                            </p>
                            <p className="acag-hero-p acag-mt-sm">
                                <strong className="acag-bold">This matters even more in Alaska.</strong>
                            </p>
                        </div>
                    </div>
                    <button className="acag-hero-toggle" onClick={() => setShowAnswer(!showAnswer)}>
                        <span className="acag-flex-center">
                            {showAnswer ? <Minus size={14} style={{ marginRight: "6px" }} /> : <Plus size={14} style={{ marginRight: "6px" }} />}
                            {showAnswer ? "Hide" : "Read More"}
                        </span>
                    </button>
                </div>
            </section>

            {/* 2. WHY CABIN CHOICE MATTERS */}
            <section className="acag-section acag-matters">
                <div className="acag-container">
                    <div className="acag-matters-top">
                        <span className="acag-matters-eyebrow">Why It Matters</span>
                        <h2 className="acag-h2">Why Cabin Choice Matters More on Azamara</h2>
                        <div className="acag-matters-rule"></div>
                        <p className="acag-p acag-matters-lead">Azamara is not a mega-ship experience. There are no massive entertainment zones, no overbuilt distractions, and no "floating resort" mentality.</p>
                    </div>

                    <div className="acag-matters-body">
                        <div className="acag-matters-points">
                            <div className="acag-matters-point">
                                <div className="acag-matters-num">01</div>
                                <div className="acag-matters-point-content">
                                    <Activity size={22} className="acag-matters-icon" />
                                    <span className="acag-matters-point-text">You spend more time in your cabin</span>
                                </div>
                            </div>
                            <div className="acag-matters-point">
                                <div className="acag-matters-num">02</div>
                                <div className="acag-matters-point-content">
                                    <MapPin size={22} className="acag-matters-icon" />
                                    <span className="acag-matters-point-text">Your view becomes part of the journey</span>
                                </div>
                            </div>
                            <div className="acag-matters-point">
                                <div className="acag-matters-num">03</div>
                                <div className="acag-matters-point-content">
                                    <Users size={22} className="acag-matters-icon" />
                                    <span className="acag-matters-point-text">Your personal space matters more</span>
                                </div>
                            </div>
                        </div>

                        <div className="acag-matters-conclusion">
                            <div className="acag-matters-quote-mark">"</div>
                            <p className="acag-matters-conclusion-text">This is why cabin selection is not a detail.</p>
                            <p className="acag-matters-conclusion-sub">It's a decision that shapes the entire trip.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY AZAMARA CABINS FEEL DIFFERENT */}
            <section className="acag-section acag-different">
                <div className="acag-container">
                    <div className="acag-diff-top">
                        <div className="acag-diff-label">Honest Perspective</div>
                        <h2 className="acag-h2">Why Azamara Cabins Feel Different (Even if the Ships Aren't Brand New)</h2>
                        <div className="acag-diff-rule"></div>
                        <p className="acag-p acag-diff-intro">Let's address this directly—because your clients will notice it.</p>
                    </div>

                    <div className="acag-diff-body">
                        <div className="acag-diff-statement">
                            <p className="acag-p">Azamara's ships are not brand new builds. The hardware is older compared to newer luxury ships. The rooms are not oversized. The layouts are more classic.</p>
                            <p className="acag-p acag-mt-sm">If you are comparing purely on square footage or "newness," you will find bigger and newer elsewhere.</p>
                            <p className="acag-p acag-mt-sm">That is not what Azamara is trying to be.</p>
                            <div className="acag-diff-divider"></div>
                            <p className="acag-p">What Azamara does exceptionally well is elevate the experience within that footprint.</p>
                        </div>

                        <div className="acag-diff-right">
                            <p className="acag-p acag-diff-feat-heading">Here is where it shows up:</p>
                            <div className="acag-diff-features">
                                <div className="acag-diff-feat">
                                    <div className="acag-diff-feat-icon"><LayoutGrid size={22} /></div>
                                    <span>Efficient, functional cabin design</span>
                                </div>
                                <div className="acag-diff-feat">
                                    <div className="acag-diff-feat-icon"><Users size={22} /></div>
                                    <span>Consistent, highly personal service</span>
                                </div>
                                <div className="acag-diff-feat">
                                    <div className="acag-diff-feat-icon"><Ship size={22} /></div>
                                    <span>Smaller ships that create a more intimate environment</span>
                                </div>
                                <div className="acag-diff-feat">
                                    <div className="acag-diff-feat-icon"><MapPin size={22} /></div>
                                    <span>A clear focus on destination over onboard excess</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="acag-diff-footer">
                        <div className="acag-diff-footer-line">This is the difference between hardware and experience.</div>
                        <div className="acag-diff-footer-sub">
                            <p className="acag-p">You are not booking Azamara for the newest ship. You are booking it for how it feels once you are onboard.</p>
                            <p className="acag-p acag-mt-sm"><strong className="acag-bold">And for the right traveler, that matters more.</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CABIN CATEGORIES */}
            <section className="acag-section acag-categories">
                <div className="acag-container">
                    <div className="acag-cat-header">
                        <h2 className="acag-h2">Azamara Cabin Categories Explained</h2>
                        <div className="acag-accent-line acag-center"></div>
                    </div>
                    <div className="acag-cat-list">
                        {[
                            { tag: "Category 01", title: "Interior Staterooms", img: "/azamara_interior.png", bestFor: "Best for travelers focused on value and minimal time in the room.", features: ["No natural light", "Most affordable option", "Compact and functional"], expert: "This is where you save money—but not where you elevate the experience. For Alaska, this is rarely my recommendation." },
                            { tag: "Category 02", title: "Oceanview Staterooms", img: "/azamara_oceanview.png", bestFor: "Best for travelers who want natural light without moving into balcony pricing.", features: ["Window or porthole view", "Mid-range pricing", "More space than interior"], expert: "A reasonable middle ground, but still limiting for Alaska's constant scenery." },
                            { tag: "Category 03", title: "Veranda (Balcony)", img: "/azamara_veranda.png", bestFor: "Best for travelers who want the full Alaska experience.", features: ["Private balcony", "Indoor-outdoor living", "Ideal for scenic cruising"], expert: "This is the sweet spot. If you are going to Alaska, this is where I guide most clients." },
                            { tag: "Category 04", title: "Suite Categories", img: suiteImg, bestFor: "Best for travelers who want space, comfort, and elevated service.", features: ["Larger living areas", "Premium locations", "Enhanced amenities"], expert: "This is where Azamara becomes truly elevated. For longer trips, suites significantly enhance the experience." },
                        ].map((c, i) => (
                            <div className={`acag-cat-row ${i % 2 !== 0 ? 'acag-cat-row-reverse' : ''}`} key={i}>
                                <div className="acag-cat-image-col">
                                    <div className="acag-cat-img-wrapper">
                                        <img src={c.img} alt={c.title} className="acag-cat-row-img" />
                                        <div className="acag-cat-tag-badge">{c.tag}</div>
                                    </div>
                                </div>
                                <div className="acag-cat-content-col">
                                    <h3 className="acag-cat-title-large">{c.title}</h3>
                                    <p className="acag-cat-bestfor"><strong>{c.bestFor}</strong></p>

                                    <ul className="acag-cat-features">
                                        {c.features.map((feat, j) => (
                                            <li key={j}><CheckCircle2 size={18} className="acag-cat-check" /> <span>{feat}</span></li>
                                        ))}
                                    </ul>

                                    <div className="acag-cat-expert-box">
                                        <div className="acag-cat-expert-title">Expert take:</div>
                                        <p className="acag-cat-expert-text">{c.expert}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHICH CABIN */}
            <section className="acag-section acag-choice">
                <div className="acag-container">
                    <div className="acag-choice-header">
                        <h2 className="acag-h2">Which Cabin Should You Choose?</h2>
                        <div className="acag-accent-line acag-center"></div>
                    </div>
                    <div className="acag-choice-cards">
                        {[
                            { title: "Choose Interior If:", items: ["You are budget-focused", "You will spend minimal time in your room"] },
                            { title: "Choose Oceanview If:", items: ["You want natural light without a major price increase"] },
                            { title: "Choose Veranda If:", items: ["You want to experience Alaska fully", "You value privacy and views"] },
                            { title: "Choose a Suite If:", items: ["You want space and elevated service", "You are celebrating or traveling longer"] }
                        ].map((card, i) => (
                            <div className="acag-choice-card" key={i}>
                                <div className="acag-choice-card-head">{card.title}</div>
                                <ul className="acag-choice-list">
                                    {card.items.map((it, j) => (
                                        <li key={j}><CheckCircle2 size={18} /> <span>{it}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. BEST FOR ALASKA */}
            <section className="acag-section acag-alaska">
                <div className="acag-container">
                    <div className="acag-alaska-grid">
                        <div className="acag-alaska-content">
                            <span className="acag-alaska-eyebrow">Destination Focus</span>
                            <h2 className="acag-h2">Best Cabins for Alaska Specifically</h2>
                            <div className="acag-accent-line"></div>
                            <p className="acag-p acag-alaska-intro">Alaska is not a typical cruise destination. You are not just sailing—you are constantly observing.</p>

                            <div className="acag-alaska-matters">
                                <h3 className="acag-alaska-matters-title">What matters:</h3>
                                <ul className="acag-alaska-list">
                                    <li><Sun size={20} /> <span>Visibility</span></li>
                                    <li><Wind size={20} /> <span>Outdoor access</span></li>
                                    <li><Star size={20} /> <span>Comfort during long scenic days</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="acag-alaska-recommendation">
                            <div className="acag-alaska-rec-badge"><Sparkles size={16} /> Top recommendation</div>
                            <h3 className="acag-alaska-rec-title">Veranda cabins or suites.</h3>
                            <p className="acag-p acag-alaska-rec-text">When sailing through the Inside Passage or approaching glaciers, having your own space changes everything.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. LOCATION STRATEGY */}
            <section className="acag-section acag-loc-new">
                <div className="acag-container">
                    <div className="acag-loc-new-grid">
                        <div className="acag-loc-new-left">
                            <span className="acag-loc-new-eyebrow">Expert Advice</span>
                            <h2 className="acag-h2">Cabin Location Strategy <span className="acag-loc-new-h2-sub">(Most People Miss This)</span></h2>
                            <div className="acag-accent-line"></div>

                            <div className="acag-loc-new-pro-tip">
                                <div className="acag-loc-new-pro-icon-wrap">
                                    <Info size={24} />
                                </div>
                                <div className="acag-loc-new-pro-text">
                                    <strong>Expert guidance:</strong>
                                    <p>Mid-ship veranda cabins are the most balanced choice for most travelers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="acag-loc-new-right">
                            <div className="acag-loc-new-card">
                                <div className="acag-loc-new-card-header">
                                    <div className="acag-loc-new-icon"><Ship size={28} /></div>
                                    <h3>Ship Position</h3>
                                </div>
                                <div className="acag-loc-new-list">
                                    <div className="acag-loc-new-item">
                                        <div className="acag-loc-new-item-dot"></div>
                                        <strong>Mid-ship:</strong>
                                        <span>Most stable</span>
                                    </div>
                                    <div className="acag-loc-new-item">
                                        <div className="acag-loc-new-item-dot"></div>
                                        <strong>Forward:</strong>
                                        <span>More movement, stronger views</span>
                                    </div>
                                    <div className="acag-loc-new-item">
                                        <div className="acag-loc-new-item-dot"></div>
                                        <strong>Aft:</strong>
                                        <span>Quieter, great wake views</span>
                                    </div>
                                </div>
                            </div>

                            <div className="acag-loc-new-card acag-loc-new-card-alt">
                                <div className="acag-loc-new-card-header">
                                    <div className="acag-loc-new-icon"><LayoutGrid size={28} /></div>
                                    <h3>Deck Level</h3>
                                </div>
                                <div className="acag-loc-new-list">
                                    <div className="acag-loc-new-item">
                                        <div className="acag-loc-new-item-dot"></div>
                                        <strong>Higher decks:</strong>
                                        <span>Better views</span>
                                    </div>
                                    <div className="acag-loc-new-item">
                                        <div className="acag-loc-new-item-dot"></div>
                                        <strong>Lower decks:</strong>
                                        <span>More stability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. WHAT MOST PEOPLE GET WRONG */}
            <section className="acag-section acag-wrong-new">
                <div className="acag-container">
                    <div className="acag-wrong-new-header">
                        <h2 className="acag-h2">What Most People Get Wrong <br /><span className="acag-wrong-new-h2-sub">About Azamara Cabins</span></h2>
                        <div className="acag-accent-line acag-light"></div>
                    </div>

                    <div className="acag-wrong-new-grid">
                        {["Thinking all balconies are the same", "Choosing based only on price", "Ignoring cabin location", "Underestimating time spent in the room"].map((t, i) => (
                            <div className="acag-wrong-new-card" key={i}>
                                <div className="acag-wrong-new-icon-wrap">
                                    <AlertTriangle size={24} />
                                </div>
                                <span className="acag-wrong-new-text">{t}</span>
                            </div>
                        ))}
                    </div>

                    <div className="acag-wrong-new-summary">
                        <div className="acag-wrong-new-summary-inner">
                            <strong>The Reality:</strong>
                            <p>Cabin choice is not about square footage. It's about how you experience the destination.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. WHEN I DON'T RECOMMEND */}
            <section className="acag-section acag-notfor-new">
                <div className="acag-container">
                    <div className="acag-notfor-new-wrapper">
                        <div className="acag-notfor-new-main">
                            <h2 className="acag-h2">When I Don't Recommend Azamara</h2>
                            <div className="acag-accent-line acag-center"></div>
                            <p className="acag-notfor-new-subtitle">Azamara is not for everyone. I do not recommend it for:</p>

                            <div className="acag-notfor-new-list">
                                {["Travelers looking for brand-new ships", "Clients focused on room size alone", "Families wanting large-scale entertainment"].map((t, i) => (
                                    <div className="acag-notfor-new-item" key={i}>
                                        <div className="acag-notfor-new-minus"><Minus size={20} /></div>
                                        <span>{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="acag-notfor-new-conclusion">
                            <div className="acag-notfor-new-quote-mark">"</div>
                            <p>This is a boutique, experience-driven product.</p>
                            <strong>And that's exactly why it works.</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. COMPARISON TABLE */}
            <section className="acag-section acag-compare-new">
                <div className="acag-container">
                    <div className="acag-compare-new-header">
                        <h2 className="acag-h2">Azamara vs <span className="acag-compare-new-h2-sub">Other Cruise Lines</span></h2>
                        <div className="acag-accent-line acag-center"></div>
                    </div>

                    <div className="acag-compare-new-wrap">
                        <table className="acag-compare-new-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th className="acag-compare-highlight">Azamara</th>
                                    <th>Viking Cruises</th>
                                    <th>Princess Cruises</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Ship Size", "Small", "Small", "Large"],
                                    ["Cabin Feel", "Boutique", "Minimalist", "Standard"],
                                    ["Balcony Experience", "Strong", "Strong", "Varies"],
                                    ["Suite Experience", "Elevated", "Refined", "Moderate"]
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="acag-compare-feature">{row[0]}</td>
                                        <td className="acag-compare-highlight">{row[1]}</td>
                                        <td>{row[2]}</td>
                                        <td>{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 10. EXPERT TAKE */}
            <section className="acag-section acag-expert-new">
                <div className="acag-container">
                    <div className="acag-expert-new-grid">
                        <div className="acag-expert-new-image-wrap">
                            <img src={profileImg} alt="Angela Hughes" className="acag-expert-new-img" />
                            <div className="acag-expert-new-experience-badge">
                                <strong>40+</strong>
                                <span>Years Expert</span>
                            </div>
                        </div>

                        <div className="acag-expert-new-content">
                            <span className="acag-expert-new-eyebrow">The Final Word</span>
                            <h2 className="acag-h2">What I Tell My Clients <br /><span className="acag-expert-new-h2-sub">About Cabins</span></h2>

                            <div className="acag-expert-new-quote">
                                "The cabin is not where you cut corners. It's where you decide how you experience the trip. Especially in Alaska."
                            </div>

                            <div className="acag-expert-new-author">
                                <div className="acag-expert-new-line"></div>
                                <div className="acag-expert-new-info">
                                    <strong>Angela Hughes</strong>
                                    <p>After 40+ years in travel and 121+ countries, here's what I know.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. VIDEO SECTION */}
            <section className="acag-section acag-video-section">
                <div className="acag-container">
                    <div className="acag-video-split">
                        <div className="acag-video-content">
                            <span className="acag-video-eyebrow">
                                <Play size={14} fill="currentColor" />
                                Onboard Experience
                            </span>
                            <h2 className="acag-h2">Take a Closer Look <br /> at Your Next Cabin</h2>
                            <div className="acag-accent-line"></div>
                            <p className="acag-p">
                                Witness the detailed craftsmanship and thoughtful design of Azamara's staterooms and suites.
                                This visual tour highlights why choosing the right category is the foundation of a great Alaska cruise experience.
                            </p>
                        </div>
                        <div className="acag-video-player-wrap">
                            <div className="acag-video-frame">
                                <iframe
                                    className="acag-youtube-iframe"
                                    src="https://www.youtube.com/embed/LIkutVSgTGI?rel=0&modestbranding=1"
                                    title="Azamara Cabin Tour"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. FAQ */}
            <section className="acag-section acag-faq-simple">
                <div className="acag-container">
                    <div className="acag-faq-simple-header">
                        <h2 className="acag-h2">Azamara Cabin Guide <br /><span className="acag-faq-simple-h2-sub">Frequently Asked Questions</span></h2>
                        <div className="acag-accent-line acag-center"></div>
                    </div>

                    <div className="acag-faq-simple-wrapper">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div
                                    className={`acag-faq-item-simple ${isOpen ? "acag-open" : ""}`}
                                    key={i}
                                    onClick={() => setOpenFaq(isOpen ? null : i)}
                                >
                                    <div className="acag-faq-q-simple">
                                        <span>{i + 1}. {faq.q}</span>
                                        <span className="acag-faq-icon-simple">
                                            {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className="acag-faq-a-simple">
                                            <div className="acag-faq-a-inner-simple">
                                                <p>{faq.a}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}