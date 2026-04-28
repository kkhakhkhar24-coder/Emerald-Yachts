import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { 
    Anchor, 
    Star, 
    TrendingUp, 
    AlertTriangle, 
    MapPin, 
    Users, 
    ChevronDown, 
    ChevronUp, 
    Award, 
    ArrowRight, 
    Compass, 
    Plus, 
    Minus, 
    Sparkles,
    AlertCircle,
    CheckCircle2,
    Info,
    LayoutGrid,
    Wind,
    Sun,
    Maximize,
    Heart,
    DollarSign,
    Zap,
    Scale,
    XCircle,
    CheckCircle,
    ShieldAlert,
    ChevronRight,
    Volume2,
    Waves,
    Target,
    Quote,
    Gem,
    Octagon,
    EyeOff,
    Navigation,
    EarOff,
    WavesIcon,
    ArrowDownToLine,
    Activity,
    ShieldCheck,
    Ship,
    Map,
    Play
} from "lucide-react";
import "./AzamaraCabinsGuide.css";

// Hero Images
import heroImage1 from "../../assets/AzamaraCruisesGuide/Hero1.webp";
import heroImage2 from "../../assets/AzamaraCruisesGuide/Hero2.webp";
import heroImage3 from "../../assets/AzamaraCruisesGuide/Hero3.webp";

// Profile Image
import profileImg from "../../assets/image.jpg";

const cabinCategories = [
    { 
        type: "Interior", 
        bestFor: "Budget-focused travelers", 
        summary: "Lowest cost, no natural light",
        img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800" 
    },
    { 
        type: "Oceanview", 
        bestFor: "Balanced travelers", 
        summary: "Natural light without balcony cost",
        img: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=800" 
    },
    { 
        type: "Veranda", 
        bestFor: "Most couples", 
        summary: "Best mix of comfort and value",
        img: "https://images.unsplash.com/photo-1548574505-12c0a1f4f6c0?q=80&w=800" 
    },
    { 
        type: "Veranda Plus", 
        bestFor: "Step-up travelers", 
        summary: "Balcony plus added benefits",
        img: "https://images.unsplash.com/photo-1517176102644-782ed7138671?q=80&w=800" 
    },
    { 
        type: "Club Continent Suite", 
        bestFor: "Premium travelers", 
        summary: "More space and suite experience",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" 
    },
    { 
        type: "Luxury Suites", 
        bestFor: "Top-tier luxury", 
        summary: "Highest-end experience (Ocean & Owner's)",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4df85b?q=80&w=800" 
    }
];

const quickPicks = [
    { label: "Best overall", value: "Veranda Stateroom" },
    { label: "Best value", value: "Oceanview Stateroom" },
    { label: "Best upgrade", value: "Veranda Plus" },
    { label: "Best premium value", value: "Club Continent Suite" },
    { label: "Best luxury experience", value: "Ocean Suite" },
    { label: "Best top-tier", value: "Club World Owner's Suite / Panorama Suite" },
];

const faqs = [
    { question: "What is the best cabin on Azamara?", answer: "For most travelers, a Veranda Stateroom offers the best balance of comfort and value." },
    { question: "Is a balcony worth it on Azamara?", answer: "Yes, for many travelers it significantly enhances the experience." },
    { question: "What is Veranda Plus?", answer: "A step above standard balcony cabins with added benefits." },
    { question: "Are Azamara suites worth it?", answer: "They are worth it for travelers who value space, service, and a more premium experience." },
    { question: "What is a Club Continent Suite?", answer: "A premium suite category offering more space and an upgraded experience." },
    { question: "Does Azamara have interior cabins?", answer: "Yes, Interior cabins are the most affordable option." },
    { question: "Which cabin is best for motion sensitivity?", answer: "Midship cabins on lower decks are typically best." },
    { question: "Are any cabins obstructed?", answer: "Yes, some Oceanview cabins may have obstructed views." },
    { question: "Is Oceanview or Veranda better?", answer: "Veranda is generally preferred for the added space and balcony." },
    { question: "Which cabin is best for couples?", answer: "Veranda cabins are the most popular choice." },
    { question: "Which cabin is best for a special occasion?", answer: "Suites, especially Ocean Suites or higher." },
    { question: "Should I upgrade my cabin?", answer: "Only if it aligns with how you plan to use the space." },
];

const scenarios = [
    { title: "The Active Traveler", rec: "Oceanview or Veranda", note: "They are rarely in the room.", icon: <Activity size={24} /> },
    { title: "The Couple Looking for Balance", rec: "Veranda", note: "This is the most common and most successful choice.", icon: <Heart size={24} /> },
    { title: "The Premium Traveler", rec: "Club Continent Suite", note: "More space without going full luxury pricing.", icon: <Award size={24} /> },
    { title: "The Celebration Trip", rec: "Ocean Suite or higher", note: "This is where the experience feels elevated.", icon: <Sparkles size={24} /> },
];

export default function AzamaraCabins() {
    const [openFaq, setOpenFaq] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentHero, setCurrentHero] = useState(0);

    const heroImages = [heroImage1, heroImage2, heroImage3];

    useEffect(() => {
        const heroTimer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(heroTimer);
    }, [heroImages.length]);

    return (
        <div className="acg-root">
            <Navbar />

            {/* ── 1. HERO SECTION ── */}
            <section className="acg-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`acg-hero-bg ${index === currentHero ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="acg-hero-overlay"></div>

                <div className="acg-container acg-hero-inner">
                    <span className="acg-eyebrow">
                        <Compass size={14} style={{ marginRight: "8px" }} />
                        Expert Cabin Selection Guide
                    </span>

                    <h1 className="acg-h1 acg-h1-hero">
                        Azamara Cabins Guide: Best Rooms, Suites, and Which Cabin to Book
                    </h1>

                    <div className={`acg-hero-details ${showAnswer ? "expanded" : ""}`}>
                        <div className="acg-snippet-card">
                            <h2 className="acg-snippet-label">
                                <Sparkles size={16} />
                                Quick Answer: What Is the Best Cabin on Azamara?
                            </h2>
                            <p className="acg-hero-p">
                                For most travelers, the best Azamara cabin is a <strong className="acg-bold">Club Veranda Stateroom</strong>.
                            </p>
                            <p className="acg-hero-p acg-mt-sm">
                                It offers the ideal balance of:
                            </p>
                            <ul className="acg-qa-pills">
                                <li className="acg-qa-pill">comfort</li>
                                <li className="acg-qa-pill">space</li>
                                <li className="acg-qa-pill">private balcony</li>
                                <li className="acg-qa-pill">overall experience</li>
                            </ul>
                            <p className="acg-hero-p acg-mt-sm">
                                If you want more elevated service and space, move into Club Continent Suites.
                            </p>
                            <p className="acg-hero-p">
                                If you want the highest-end experience, look at Ocean Suites or Owner's Suites.
                            </p>
                        </div>
                    </div>

                    <button className="acg-hero-toggle" onClick={() => setShowAnswer(!showAnswer)}>
                        <span className="acg-flex-center">
                            {showAnswer ? <Minus size={14} style={{ marginRight: "6px" }} /> : <Plus size={14} style={{ marginRight: "6px" }} />}
                            {showAnswer ? "Hide Quick Answer" : "View Quick Answer"}
                        </span>
                    </button>

                    <div className="acg-hero-btns">
                        <button className="acg-btn-primary">
                            Help Me Choose My Cabin
                        </button>
                    </div>
                </div>
            </section>

            {/* ── 2. QUICK PICKS ── */}
            <section className="acg-section acg-picks">
                <div className="acg-container">
                    <div className="acg-picks-header">
                        <h2 className="acg-h2">Best Azamara Cabins Ranked (Quick Picks)</h2>
                        <p className="acg-p acg-mt-sm">If you just want the answer:</p>
                    </div>

                    <div className="acg-picks-grid">
                        {quickPicks.map((p, i) => (
                            <div className="acg-pick-card" key={i}>
                                <span className="acg-pick-label">{p.label}</span>
                                <span className="acg-pick-value">{p.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="acg-picks-footer">
                        <p className="acg-p-display">This is where most clients land after we walk them through options.</p>
                    </div>
                </div>
            </section>

            {/* ── 3. WHAT MOST PEOPLE GET WRONG ── */}
            <section className="acg-section acg-wrong">
                <div className="acg-container">
                    <div className="acg-wrong-editorial">
                        <div className="acg-wrong-left">
                            <h2 className="acg-h2">What Most People Get Wrong When Choosing an Azamara Cabin</h2>
                            <div className="acg-wrong-accent-line"></div>
                        </div>
                        <div className="acg-wrong-right">
                            <p className="acg-p">Most travelers focus only on size and price.</p>
                            <p className="acg-p">That is not how you choose the right cabin.</p>
                            <p className="acg-p acg-mt-sm">Azamara is a destination-driven cruise line. You are not choosing between flashy onboard experiences. You are choosing how you want to live between ports.</p>
                            <p className="acg-p">Some clients are rarely in their room and do not need more than an Oceanview. Others want a balcony, privacy, and a more elevated feel.</p>

                            <div className="acg-wrong-statement">
                                <CheckCircle2 className="acg-wrong-icon" size={24} />
                                <div>
                                    <p className="acg-p-display acg-bold">The best cabin is not the most expensive one.</p>
                                    <p className="acg-p-display">It is the one that matches how you travel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. CABIN CATEGORIES (MODERN IMAGE LIST) ── */}
            <section className="acg-section acg-categories">
                <div className="acg-container">
                    <div className="acg-cat-header">
                        <h2 className="acg-h2">Azamara Cabin Categories Explained</h2>
                    </div>

                    <div className="acg-cat-grid-v2">
                        {cabinCategories.map((c, i) => (
                            <div className="acg-cat-card-v2" key={i}>
                                <div className="acg-cat-card-img-wrap">
                                    <img src={c.img} alt={c.type} className="acg-cat-card-img" />
                                    <div className="acg-cat-card-overlay"></div>
                                    <div className="acg-cat-card-type">{c.type}</div>
                                </div>
                                <div className="acg-cat-card-content">
                                    <div className="acg-cat-card-best-for">
                                        <Users size={16} />
                                        <span>Best for: {c.bestFor}</span>
                                    </div>
                                    <p className="acg-p">{c.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. WHY VERANDA SECTION (EDITORIAL SPLIT) ── */}
            <section className="acg-section acg-veranda">
                <div className="acg-container">
                    <div className="acg-v-editorial-v2">
                        <div className="acg-v-v2-left">
                            <div className="acg-v-header">
                                <h2 className="acg-h2">Why Veranda Is the Sweet Spot</h2>
                                <p className="acg-p acg-mt-sm">For most clients, Veranda is where the experience starts to feel right.</p>
                            </div>

                            <div className="acg-v-spread-v2">
                                {[
                                    { icon: <Wind />, text: "fresh air" },
                                    { icon: <Sun />, text: "private outdoor space" },
                                    { icon: <Compass />, text: "a more relaxed rhythm" },
                                    { icon: <Sparkles />, text: "a higher perceived value of the trip" }
                                ].map((item, i) => (
                                    <div className="acg-v-pillar-v2" key={i}>
                                        <div className="acg-v-icon-box-v2">{item.icon}</div>
                                        <span className="acg-p acg-bold">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="acg-v-conclusion">
                                <p className="acg-p">On a destination-heavy cruise like Azamara, this makes a noticeable difference.</p>
                            </div>
                        </div>

                        <div className="acg-v-v2-right">
                            <div className="acg-v-img-frame">
                                <img src="https://images.unsplash.com/photo-1548574505-12c0a1f4f6c0?q=80&w=1200" alt="Cruise balcony view" className="acg-v-img" />
                                <div className="acg-v-img-accent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. COST SECTION ── */}
            <section className="acg-section acg-cost">
                <div className="acg-container">
                    <div className="acg-cost-header">
                        <h2 className="acg-h2">How Much More Do Azamara Cabins Cost?</h2>
                        <p className="acg-p acg-mt-sm">While pricing varies by sailing, here is a realistic range:</p>
                    </div>

                    <div className="acg-cost-matrix">
                        {[
                            { type: "Interior", value: "baseline", icon: <LayoutGrid /> },
                            { type: "Oceanview", value: "+10–20%", icon: <Compass /> },
                            { type: "Veranda", value: "+30–50%", icon: <Star /> },
                            { type: "Suites", value: "2x to 4x Veranda", icon: <Award /> },
                        ].map((item, i) => (
                            <div className="acg-cost-node" key={i}>
                                <div className="acg-node-top">
                                    <div className="acg-node-icon">{item.icon}</div>
                                    <h3 className="acg-h3">{item.type}</h3>
                                </div>
                                <div className="acg-node-bottom">
                                    <span className="acg-node-val">{item.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="acg-cost-editorial">
                        <div className="acg-editorial-card">
                            <div className="acg-editorial-top">
                                <Zap className="acg-editorial-zap" />
                                <h3 className="acg-h3">Key Insight</h3>
                            </div>
                            <div className="acg-editorial-content">
                                <div className="acg-editorial-item">
                                    <div className="acg-editorial-dot"></div>
                                    <p className="acg-p">The biggest jump in experience usually happens when moving from <strong className="acg-bold">Oceanview to Veranda</strong>.</p>
                                </div>
                                <div className="acg-editorial-item">
                                    <div className="acg-editorial-dot"></div>
                                    <p className="acg-p">The biggest jump in price happens when moving into <strong className="acg-bold">suites</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 7. UPGRADE SECTION ── */}
            <section className="acg-section acg-upgrade">
                <div className="acg-container">
                    <div className="acg-up-matrix-container">
                        <div className="acg-up-matrix-header">
                            <h2 className="acg-h2">Is It Worth Upgrading Your Azamara Cabin?</h2>
                            <p className="acg-p acg-mt-sm">A strategic look at value vs. necessity.</p>
                        </div>

                        <div className="acg-up-matrix-grid">
                            <div className="acg-up-matrix-card">
                                <div className="acg-up-card-zone-left">
                                    <div className="acg-up-zone-header">
                                        <Gem className="acg-up-icon" />
                                        <h3 className="acg-h3">The Case for Upgrading</h3>
                                    </div>
                                    <div className="acg-up-zone-items">
                                        {[
                                            "You value private space",
                                            "You enjoy relaxing in your room",
                                            "You want a more premium experience",
                                            "This is a special trip"
                                        ].map((text, i) => (
                                            <div className="acg-up-matrix-item" key={i}>
                                                <div className="acg-up-matrix-dot"></div>
                                                <p className="acg-p">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="acg-up-card-zone-right">
                                    <div className="acg-up-zone-header">
                                        <Anchor className="acg-up-icon" />
                                        <h3 className="acg-h3">Stick to Basics if:</h3>
                                    </div>
                                    <div className="acg-up-zone-items">
                                        {[
                                            "You are in port most of the day",
                                            "You rarely use your room",
                                            "Budget is a priority"
                                        ].map((text, i) => (
                                            <div className="acg-up-matrix-item" key={i}>
                                                <div className="acg-up-matrix-dot hollow"></div>
                                                <p className="acg-p">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="acg-up-matrix-result">
                            <div className="acg-result-inner">
                                <Info className="acg-result-info" />
                                <p className="acg-p-display acg-bold">Final Verdict: The goal is not to upgrade—it is to upgrade wisely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 8. CABINS TO AVOID ── */}
            <section className="acg-section acg-avoid">
                <div className="acg-container">
                    <div className="acg-avoid-editorial-v3">
                        <div className="acg-v3-sidebar">
                            <div className="acg-v3-title-wrap">
                                <h2 className="acg-h2">Azamara Cabins to Avoid</h2>
                                <div className="acg-v3-accent"></div>
                            </div>
                            <p className="acg-p">This is one of the most important sections of our guide. Strategic booking starts with knowing what to skip.</p>
                            
                            <div className="acg-v3-sidebar-img-wrap acg-mt-sm">
                                <img src="https://images.unsplash.com/photo-1548574505-12c0a1f4f6c0?q=80&w=600" alt="Ship view" className="acg-v3-sidebar-img" />
                            </div>
                        </div>

                        <div className="acg-v3-content">
                            <div className="acg-v3-list">
                                {[
                                    { title: "Obstructed Views", text: "Obstructed Oceanview cabins", tag: "Visual Impact" },
                                    { title: "Noise Issues", text: "Cabins located under restaurants or public spaces", tag: "Sleep Quality" },
                                    { title: "Motion Sensitivity", text: "Forward cabins if you are sensitive to motion", tag: "Stability" }
                                ].map((item, i) => (
                                    <div className="acg-v3-item" key={i}>
                                        <div className="acg-v3-item-left">
                                            <div className="acg-v3-num">0{i + 1}</div>
                                        </div>
                                        <div className="acg-v3-item-right">
                                            <span className="acg-v3-tag">{item.tag}</span>
                                            <h3 className="acg-h3">{item.title}</h3>
                                            <p className="acg-p">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="acg-v3-takeaway">
                                <div className="acg-v3-takeaway-head">
                                    <ShieldAlert className="acg-v3-shield" />
                                    <span className="acg-bold">Professional Advisor Take</span>
                                </div>
                                <p className="acg-p-display">These are not <strong className="acg-bold">“bad”</strong> cabins—but they are often not the best fit for many travelers who value a seamless luxury experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 9. LOCATION MATTERS ── */}
            <section className="acg-section acg-location">
                <div className="acg-container">
                    <div className="acg-loc-v8-header">
                        <h2 className="acg-h2">Where Cabin Location Matters</h2>
                        <p className="acg-p acg-mt-sm">Category is only half the decision. Location matters.</p>
                    </div>

                    <div className="acg-loc-v8-list">
                        {[
                            "Midship is best for stability",
                            "Lower decks can feel quieter",
                            "Avoid cabins under high-traffic areas",
                            "Forward and aft cabins can feel more motion"
                        ].map((text, i) => (
                            <div className="acg-loc-v8-item" key={i}>
                                <div className="acg-loc-v8-num-box">
                                    <span className="acg-loc-v8-num">0{i + 1}</span>
                                </div>
                                <div className="acg-loc-v8-content">
                                    <p className="acg-p acg-bold">{text}</p>
                                </div>
                                <div className="acg-loc-v8-accent-dot"></div>
                            </div>
                        ))}
                    </div>

                    <div className="acg-loc-v8-footer">
                        <div className="acg-loc-v8-warning">
                            <AlertCircle className="acg-v8-warn-icon" size={24} />
                            <p className="acg-p-display">This is where many travelers make mistakes when booking on their own.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 10. SHIP DIFFERENCES ── */}
            <section className="acg-section acg-ships">
                <div className="acg-container">
                    <div className="acg-ships-v3-technical">
                        <div className="acg-v3-top-editorial">
                            <h2 className="acg-h2">Ship Differences That Matter</h2>
                            <p className="acg-p acg-mt-sm">Not all Azamara ships feel identical.</p>
                        </div>

                        <div className="acg-v3-grid">
                            {[
                                {
                                    label: "Suite Inventory",
                                    text: "Azamara Quest has newer suite inventory like Panorama Suites",
                                    icon: <Gem size={24} />
                                },
                                {
                                    label: "Vessel Layout",
                                    text: "Some ships have slightly different layouts and cabin distributions",
                                    icon: <LayoutGrid size={24} />
                                }
                            ].map((card, i) => (
                                <div className="acg-v3-tech-card" key={i}>
                                    <div className="acg-v3-card-head">
                                        <div className="acg-v3-card-icon">{card.icon}</div>
                                        <span className="acg-v3-card-label">{card.label}</span>
                                    </div>
                                    <p className="acg-p acg-bold">{card.text}</p>
                                    <div className="acg-v3-card-corner"></div>
                                </div>
                            ))}
                        </div>

                        <div className="acg-v3-influence-wrap">
                            <div className="acg-v3-influence-pill">
                                <Target className="acg-v3-influence-icon" size={20} />
                                <p className="acg-p-display">This can influence which sailing and cabin category we recommend.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 11. CLIENT SCENARIOS ── */}
            <section className="acg-section acg-scenarios">
                <div className="acg-container">
                    <div className="acg-scen-v8-top">
                        <h2 className="acg-h2">Real Client Scenarios: What We Recommend</h2>
                        <div className="acg-scen-v8-underline"></div>
                    </div>

                    <div className="acg-scen-v8-grid">
                        {scenarios.map((s, i) => (
                            <div className="acg-scen-v8-card" key={i}>
                                <div className="acg-v8-card-persona">
                                    <div className="acg-v8-persona-icon">{s.icon}</div>
                                    <span className="acg-v8-persona-name">{s.title}</span>
                                </div>
                                <div className="acg-v8-card-selection">
                                    <span className="acg-v8-selection-label">We Recommend</span>
                                    <p className="acg-p acg-bold">{s.rec}</p>
                                </div>
                                <div className="acg-v8-card-insight">
                                    <p className="acg-p">{s.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 12. HONEST TAKE ── */}
            <section className="acg-section acg-honest">
                <div className="acg-container">
                    <div className="acg-honest-v2-editorial">
                        <div className="acg-v2-honest-left">
                            <div className="acg-v2-honest-badge">Expert Perspective</div>
                            <h2 className="acg-h2">Our Honest Take on Azamara Cabins</h2>
                            <p className="acg-p acg-mt-sm">After decades in the industry, we do not push clients into the highest category.</p>
                            <p className="acg-p">We guide them to the right one.</p>
                        </div>

                        <div className="acg-v2-honest-right">
                            <div className="acg-v2-honest-list">
                                {[
                                    { icon: <CheckCircle2 size={24} />, text: "Most clients are happiest in Veranda" },
                                    { icon: <TrendingUp size={24} />, text: "Some benefit from moving up" },
                                    { icon: <Award size={24} />, text: "Very few need the top suite" }
                                ].map((item, i) => (
                                    <div className="acg-v2-honest-item" key={i}>
                                        <div className="acg-v2-honest-icon">{item.icon}</div>
                                        <p className="acg-p acg-bold">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="acg-v2-honest-conclusion">
                        <div className="acg-conclusion-inner">
                            <Sparkles className="acg-conclusion-spark" />
                            <p className="acg-p-display">The key is <strong className="acg-bold">alignment</strong> between the traveler and the cabin—not the price.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 13. BIGGEST MISTAKE (V3 TECHNICAL DIAGNOSTIC SPREAD) ── */}
            <section className="acg-section acg-mistake">
                <div className="acg-container">
                    <div className="acg-mistake-v3-editorial">
                        <div className="acg-v3-mistake-left">
                            <h2 className="acg-h2">The Biggest Mistake You Can Make</h2>
                            <div className="acg-v3-warn-accent"></div>
                            <p className="acg-p-display acg-mt-sm">The biggest mistake is assuming all cabins are interchangeable.</p>
                            <div className="acg-v3-negation-wrap">
                                <span className="acg-v3-negation-text">They are not.</span>
                            </div>
                        </div>

                        <div className="acg-v3-mistake-right">
                            <div className="acg-v3-variable-deck">
                                <div className="acg-v3-deck-label">Strategic Variables:</div>
                                <div className="acg-v3-deck-grid">
                                    {[
                                        { label: "category", icon: <LayoutGrid size={28} /> },
                                        { label: "location", icon: <MapPin size={28} /> },
                                        { label: "ship", icon: <Ship size={28} /> },
                                        { label: "layout", icon: <Compass size={28} /> }
                                    ].map((v, i) => (
                                        <div className="acg-v3-var-node" key={i}>
                                            <div className="acg-v3-node-icon">{v.icon}</div>
                                            <span className="acg-v3-node-label">{v.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="acg-v3-deck-conclusion">
                                    <p className="acg-p acg-bold">Small differences here can completely change your experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO FEATURE SECTION ── */}
            <section className="acg-video-feature">
                <div className="acg-video-feature-overlay"></div>
                <div className="acg-container acg-relative">
                    <div className="acg-video-split">
                        <div className="acg-video-copy">
                            <span className="acg-video-eyebrow">
                                <Play size={14} fill="currentColor" />
                                Onboard Experience
                            </span>
                            <h2 className="acg-h2">Take a Closer Look <br /> at Your Next Cabin</h2>
                            <div className="acg-video-bar"></div>
                            <p className="acg-p">
                                Witness the detailed craftsmanship and thoughtful design of Azamara's staterooms and suites. 
                                This visual tour highlights why choosing the right category is the foundation of a great cruise.
                            </p>
                        </div>

                        <div className="acg-video-player-wrap">
                            <div className="acg-video-glow"></div>
                            <div className="acg-video-frame">
                                <iframe
                                    className="acg-youtube-iframe"
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

            {/* ── 14. WHY WE HELP (V3 ADVISORY MISSION) ── */}
            <section className="acg-section acg-why">
                <div className="acg-container">
                    <div className="acg-why-v3-advisory">
                        <div className="acg-v3-advisory-sidebar">
                            <div className="acg-v3-profile-box">
                                <div className="acg-v3-profile-img-wrap">
                                    <img src={profileImg} alt="Angela Hughes" className="acg-v3-profile-img" />
                                    <div className="acg-v3-img-accent"></div>
                                </div>
                                <div className="acg-v3-profile-details">
                                    <h3 className="acg-h3">Angela Hughes</h3>
                                    <span className="acg-v3-expert-title">CEO, Trips & Ships Luxury Travel</span>
                                    <div className="acg-v3-expert-award">
                                        <span>Luxury Travel Influencer of the Year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="acg-v3-advisory-main">
                            <h2 className="acg-h2">Why We Help Clients Choose the Right Cabin</h2>
                            <div className="acg-v3-manifesto">
                                <Quote className="acg-v3-quote-icon" size={40} />
                                <p className="acg-p-display acg-bold">We do not just book cabins.</p>
                                <p className="acg-p">We help clients navigate the complexity of choice to find the perfect fit.</p>
                            </div>
                            
                            <div className="acg-v3-value-grid">
                                {[
                                    { label: "Selection", text: "choose the right category" },
                                    { label: "Economics", text: "avoid overpaying" },
                                    { label: "Assessment", text: "understand real value" },
                                    { label: "Alignment", text: "match the cabin to how they travel" }
                                ].map((v, i) => (
                                    <div className="acg-v3-value-node" key={i}>
                                        <span className="acg-v3-node-tag">{v.label}</span>
                                        <p className="acg-p acg-bold">{v.text}</p>
                                        <div className="acg-v3-node-line"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 15. CTA SECTION (V4 EXPERT BOARD) ── */}
            <section className="acg-section acg-cta">
                <div className="acg-container">
                    <div className="acg-cta-v4-spread">
                        <div className="acg-v4-cta-left">
                            <div className="acg-v4-invitation">
                                <h2 className="acg-h2">Not Sure Which Cabin Is Right for You?</h2>
                                <div className="acg-v4-accent-line"></div>
                                <p className="acg-p-display">Reach out and we will walk you through it.</p>
                                <button className="acg-btn-primary acg-mt-sm">Help Me Choose My Cabin</button>
                            </div>
                        </div>

                        <div className="acg-v4-cta-right">
                            <div className="acg-v4-board">
                                <div className="acg-v4-board-label">We help you:</div>
                                <div className="acg-v4-board-stack">
                                    {[
                                        { text: "compare cabins side by side", icon: <LayoutGrid size={24} /> },
                                        { text: "identify the best value", icon: <DollarSign size={24} /> },
                                        { text: "decide whether to upgrade", icon: <TrendingUp size={24} /> },
                                        { text: "avoid costly mistakes", icon: <ShieldAlert size={24} /> }
                                    ].map((item, i) => (
                                        <div className="acg-v4-board-item" key={i}>
                                            <div className="acg-v4-item-icon">{item.icon}</div>
                                            <div className="acg-v4-item-content">
                                                <p className="acg-p acg-bold">{item.text}</p>
                                            </div>
                                            <ChevronRight className="acg-v4-item-arrow" size={16} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 16. FAQ SECTION ── */}
            <section className="acg-section acg-faq">
                <div className="acg-container">
                    <div className="acg-faq-header-v2">
                        <h2 className="acg-h2">Azamara Cabins Guide FAQs</h2>
                        <div className="acg-faq-bar"></div>
                    </div>

                    <div className="acg-faq-simple-wrapper">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className={`acg-faq-item-simple ${isOpen ? "acg-open" : ""}`}
                                    onClick={() => setOpenFaq(isOpen ? null : index)}
                                >
                                    <div className="acg-faq-q-simple">
                                        <span>{index + 1}. {faq.question}</span>
                                        <span className="acg-faq-icon-simple">
                                            {isOpen ? (
                                                <Minus size={20} strokeWidth={1.5} />
                                            ) : (
                                                <Plus size={20} strokeWidth={1.5} />
                                            )}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className="acg-faq-a-simple">
                                            <div className="acg-faq-a-inner-simple">{faq.answer}</div>
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