import { useState, useEffect, useRef } from "react"
import Navbar from "../../components/Navbar/Navbar"
import '../../pages/DrakePassagePage/DrakePassagePage.css'
import ProfilePicture from '../../assets/image.jpg'
import { Anchor, Ship, Compass, ChevronDown, Sparkles, Check, AlertCircle } from 'lucide-react'

const faqData = [
    { q: "What is the Drake Passage and where is it located?", a: "The Drake Passage is the body of water between the southern tip of South America and Antarctica. It connects the Atlantic and Pacific Oceans and serves as the primary route for expedition cruises traveling to the Antarctic Peninsula." },
    { q: "How rough is the Drake Passage crossing?", a: "Conditions vary depending on weather systems and time of year. Some crossings are relatively calm, while others involve more noticeable ocean movement. Modern expedition ships are designed to handle both scenarios effectively." },
    { q: "Is the Drake Passage dangerous for cruise passengers?", a: "No. The Drake Passage is not considered dangerous when traveled on modern expedition ships operated by experienced crews who monitor conditions and adjust operations as needed." },
    { q: "How long does it take to cross the Drake Passage?", a: "Most crossings take approximately two days each way, depending on itinerary and weather conditions." },
    { q: "What does Drake Lake vs Drake Shake mean?", a: "These informal terms describe calm versus more active sea conditions during the crossing." },
    { q: "Do all Antarctica cruises cross the Drake Passage?", a: "Most do, though some fly-cruise itineraries bypass the crossing by flying directly to Antarctica." },
    { q: "Can you avoid seasickness in the Drake Passage?", a: "Preparation, ship selection, and motion management strategies help reduce the likelihood, though sensitivity varies by individual." },
    { q: "Is Scenic Eclipse stable in the Drake Passage?", a: "Yes. Scenic Eclipse is designed for polar conditions and includes advanced stabilization systems to enhance comfort." },
    { q: "What should I pack for the Drake Passage crossing?", a: "Layered clothing and motion management options are recommended to ensure comfort during varying conditions." },
    { q: "Is the Drake Passage worth experiencing?", a: "For many travelers, it is an integral part of the Antarctica journey and contributes to the overall expedition experience." },
    { q: "What is the best ship for the Drake Passage crossing?", a: "Ships specifically designed for polar expedition travel with modern stabilization systems are best suited for the crossing." },
    { q: "Should I be worried about the Drake Passage?", a: "With proper planning and the right ship, the Drake Passage is a manageable and expected part of traveling to Antarctica." },
];

function useFadeIn() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function FadeSection({ children, className = "" }) {
    const ref = useFadeIn();
    return <div ref={ref} className={`fade-in-up ${className}`}>{children}</div>;
}

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is the Drake Passage and where is it located?", a: "The Drake Passage is the body of water between the southern tip of South America and Antarctica. It connects the Atlantic and Pacific Oceans and serves as the primary route for expedition cruises traveling to the Antarctic Peninsula." },
        { q: "How rough is the Drake Passage crossing?", a: "Conditions vary depending on weather systems and time of year. Some crossings are relatively calm, while others involve more noticeable ocean movement. Modern expedition ships are designed to handle both scenarios effectively." },
        { q: "Is the Drake Passage dangerous for cruise passengers?", a: "No. The Drake Passage is not considered dangerous when traveled on modern expedition ships operated by experienced crews who monitor conditions and adjust operations as needed." },
        { q: "How long does it take to cross the Drake Passage?", a: "Most crossings take approximately two days each way, depending on itinerary and weather conditions." },
        { q: "What does Drake Lake vs Drake Shake mean?", a: "These informal terms describe calm versus more active sea conditions during the crossing." },
        { q: "Do all Antarctica cruises cross the Drake Passage?", a: "Most do, though some fly-cruise itineraries bypass the crossing by flying directly to Antarctica." },
        { q: "Can you avoid seasickness in the Drake Passage?", a: "Preparation, ship selection, and motion management strategies help reduce the likelihood, though sensitivity varies by individual." },
        { q: "Is Scenic Eclipse stable in the Drake Passage?", a: "Yes. Scenic Eclipse is designed for polar conditions and includes advanced stabilization systems to enhance comfort." },
        { q: "What should I pack for the Drake Passage crossing?", a: "Layered clothing and motion management options are recommended to ensure comfort during varying conditions." },
        { q: "Is the Drake Passage worth experiencing?", a: "For many travelers, it is an integral part of the Antarctica journey and contributes to the overall expedition experience." },
        { q: "What is the best ship for the Drake Passage crossing?", a: "Ships specifically designed for polar expedition travel with modern stabilization systems are best suited for the crossing." },
        { q: "Should I be worried about the Drake Passage?", a: "With proper planning and the right ship, the Drake Passage is a manageable and expected part of traveling to Antarctica." },
    ];

    return (
        <div className="drake-faq-list">
            {faqData.map((item, i) => (
                <div key={i} className={`drake-faq-item${open === i ? " drake-open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
                    <div className="drake-faq-q">
                        <span>{item.q}</span>
                        <span className="drake-faq-icon">
                            <ChevronDown size={20} strokeWidth={1.5} />
                        </span>
                    </div>
                    <div className="drake-faq-a">
                        <div className="drake-faq-a-inner">{item.a}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ReadMoreText({ children, maxLength = 200 }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Convert children to string to check length
    const contentString = typeof children === 'string' ? children : String(children);

    if (contentString.length <= maxLength) {
        return <>{children}</>;
    }

    return (
        <>
            <p className="drake-section-p">
                {isExpanded ? children : `${contentString.substring(0, maxLength)}...`}
            </p>
            <button
                className="drake-read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Read Less" : "Read More"}
            </button>
        </>
    );
}

const styles = `
/* Add your component-specific styles here */
`;

export default function DrakePassagePage() {


    return (
        <>
            <style>{styles}</style>

            <Navbar />

            {/* ===== HERO SECTION — Main hero with animated background, eyebrow title, heading, description, and call-to-action buttons ===== */}
            <section className="drake-hero">
                <div className="drake-hero-content">
                    <span className="drake-hero-eyebrow">Antarctica Expedition Planning</span>
                    <h1>The Drake Passage</h1>
                    <p className="drake-hero-sub">What to expect when crossing to Antarctica</p>

                    <p className="drake-hero-lead">
                        For most travelers heading to Antarctica, the journey includes crossing the Drake Passage, the body of water between South America and the Antarctic Peninsula.
                    </p>

                    {/* This container expands when the button below is clicked */}
                    <div className="drake-hero-details">
                        <p className="drake-hero-note">
                            It is often the most talked about part of the trip, not because it defines the experience, but because it is unfamiliar.
                        </p>
                        <p className="drake-hero-note">
                            For most of our clients, the Drake Passage becomes a short transition, not the defining part of the journey.
                        </p>
                        <p className="drake-hero-note">
                            The reality is that the crossing is a standard, managed component of Antarctica expeditions, shaped by ship design, weather systems, and preparation.
                        </p>
                        <p className="drake-hero-note">
                            What lies beyond it is what defines the experience.
                        </p>
                    </div>

                    <button className="drake-hero-read-more" onClick={() => {
                        const details = document.querySelector('.drake-hero-details');
                        if (details) {
                            details.classList.toggle('expanded');
                        }
                    }}>
                        Read More
                    </button>

                    <div className="drake-hero-btns">
                        <button className="drake-btn-primary">Plan Your Antarctica Expedition</button>
                        <button className="drake-btn-secondary">View Scenic Antarctica Expeditions</button>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 1: WHAT IS THE DRAKE PASSAGE — Introduction explaining what the Drake Passage is and its location ===== */}
            <section className="drake-section drake-bg-white what-is-drake-clean">
                <div className="drake-section-inner drake-wide">
                    {/* Note: drake-text-grid remains as the wrapper class per instructions */}
                    <div className="drake-text-grid drake-layout-split">

                        {/* Left Column: Title and Numbering */}
                        <div className="drake-title-side">
                            <span className="drake-section-number">01</span>
                            <h2 className="drake-section-h2 left-bar">What Is the <br />Drake Passage</h2>
                        </div>

                        {/* Right Column: Content */}
                        <div className="drake-content-side">
                            <p className="drake-lead-text">
                                The Drake Passage is the stretch of ocean between the southern tip of South America and Antarctica, connecting the Atlantic and Pacific Oceans.
                            </p>

                            <div className="drake-details-wrapper">
                                <p className="drake-section-p-clean">
                                    It is the primary route used by expedition ships traveling to the Antarctic Peninsula.
                                    Most voyages cross the Drake Passage twice, once heading south and once returning north.
                                </p>

                                <div className="drake-editorial-note">
                                    <p>
                                        The Drake Passage crossing experience in Antarctica is not an optional add-on.
                                        It is part of the structure of the journey and is built into expedition planning from the beginning.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 2: HOW ROUGH IS THE DRAKE PASSAGE — Explains varying conditions with Drake Lake (calm) vs Drake Shake (active) comparison cards ===== */}
            <section className="drake-section drake-bg-soft drake-roughness-clean">
                <div className="drake-section-inner drake-wide">
                    <div className="drake-roughness-grid">

                        {/* Left Column: Title and Intro */}
                        <div className="drake-roughness-title-side">
                            <span className="drake-section-number">02</span>
                            <h2 className="drake-section-h2">How Rough Is the <br />Drake Passage</h2>
                            <p className="drake-roughness-lead-text">
                                Conditions in the Drake Passage vary based on weather systems, wind patterns, and time of year.
                            </p>
                            <p className="drake-roughness-term-intro">Travelers often hear two terms:</p>
                        </div>

                        {/* Right Column: The Lake vs Shake Comparison */}
                        <div className="drake-roughness-content-side">
                            <div className="drake-lake-shake-cards">

                                {/* Drake Lake */}
                                <div className="drake-term-card drake-lake">
                                    <span className="drake-term-badge">Drake Lake</span>
                                    <h3>Drake Lake</h3>
                                    <p className="drake-section-p-clean">
                                        referring to calmer crossings
                                    </p>
                                </div>

                                {/* Drake Shake */}
                                <div className="drake-term-card drake-shake">
                                    <span className="drake-term-badge drake-gold-badge">Drake Shake</span>
                                    <h3>Drake Shake</h3>
                                    <p className="drake-section-p-clean drake-white-text">
                                        referring to more active conditions
                                    </p>
                                </div>

                            </div>

                            <div className="drake-roughness-summary">
                                <p className="drake-section-p-clean">
                                    Both occur. Most crossings fall somewhere in between. Modern expedition ships are designed to manage these conditions, and the experience is influenced as much by ship design and preparation as it is by weather.
                                </p>
                                <div className="drake-editorial-note">
                                    <p>Understanding this variability is key to setting expectations correctly.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 3: HOW SHIPS HANDLE — Describes ship features including stabilization systems, hull design, and expert crew for handling Drake Passage conditions ===== */}
            <section className="drake-section drake-bg-white drake-ship-management">
                <div className="drake-section-inner drake-wide">
                    <div className="drake-ship-container">

                        <div className="drake-ship-header">
                            <span className="drake-section-number">03</span>
                            <h2 className="drake-section-h2">How Expedition Ships Handle the Drake Passage</h2>
                        </div>

                        <div className="drake-ship-intro">
                            <p className="drake-section-p drake-ship-lead">
                                Ships designed for Antarctica, including vessels operated by Scenic Luxury Cruises & Tours, are engineered for stability and performance in open water.
                            </p>
                            <p className="drake-section-p-clean">
                                While ocean movement cannot be eliminated, it can be managed.
                            </p>
                        </div>

                        {/* Key factors displayed in a clean, modern grid */}
                        <div className="drake-ship-feature-grid">
                            <div className="drake-ship-card">
                                <div className="drake-ship-icon">
                                    <Anchor size={32} strokeWidth={1.5} />
                                </div>
                                <h3>Stabilization systems</h3>
                                <div className="drake-ship-divider"></div>
                            </div>

                            <div className="drake-ship-card">
                                <div className="drake-ship-icon">
                                    <Ship size={32} strokeWidth={1.5} />
                                </div>
                                <h3>Hull design suited for polar conditions</h3>
                                <div className="drake-ship-divider"></div>
                            </div>

                            <div className="drake-ship-card">
                                <div className="drake-ship-icon">
                                    <Compass size={32} strokeWidth={1.5} />
                                </div>
                                <h3>Experienced crews monitoring real-time weather</h3>
                                <div className="drake-ship-divider"></div>
                            </div>
                        </div>

                        <div className="drake-ship-footer">
                            <div className="drake-editorial-note">
                                <p>The Drake Passage is not avoided. It is anticipated and managed as part of the expedition.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 4: IS IT DANGEROUS — Addresses safety concerns and explains that modern expedition ships make the crossing safe ===== */}
            <section className="drake-section drake-bg-cream drake-safety-section">
                <div className="drake-section-inner drake-narrow">
                    <div className="drake-safety-header">
                        <span className="drake-section-number">04</span>
                        {/* Removed 'drake-white' to ensure it uses the Navy color on the cream background */}
                        <h2 className="drake-section-h2 drake-gold-bar">Is the Drake Passage Dangerous</h2>
                    </div>

                    <div className="drake-danger-box">
                        {/* Visual indicator of safety */}
                        <div className="drake-safe-badge">
                            <span className="drake-safe-icon">
                                <Check size={18} strokeWidth={2} />
                            </span>
                            Verified Safety Standards
                        </div>

                        <div className="drake-danger-content">
                            <p className="drake-section-p drake-white drake-danger-lead">
                                The Drake Passage is widely discussed, but often misunderstood.
                            </p>

                            <p className="drake-section-p drake-white">
                                Within the context of modern expedition travel, it is not considered dangerous. Crossings are conducted by experienced crews using ships built specifically for these environments.
                            </p>

                            <p className="drake-section-p drake-white">
                                Weather systems are monitored continuously, and itineraries are adjusted when necessary.
                            </p>

                            <div className="drake-danger-conclusion">
                                <p className="drake-section-p drake-white">
                                    For travelers, the Drake Passage is a controlled and expected part of the journey rather than a risk factor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5: WHAT IT FEELS LIKE — Describes the passenger experience and how it varies by traveler and conditions ===== */}
            <section className="drake-section drake-bg-white drake-feels-like-section">
                <div className="drake-section-inner drake-wide">
                    <div className="drake-feels-grid">

                        {/* Left Side: Sticky Title */}
                        <div className="drake-feels-title-side">
                            <span className="drake-section-number">05</span>
                            <h2 className="drake-section-h2">What the Drake <br />Passage Feels Like</h2>
                        </div>

                        {/* Right Side: Narrative Content */}
                        <div className="drake-feels-content-side">
                            <p className="drake-section-p-clean drake-feels-lead">
                                The experience varies by traveler and conditions.
                            </p>

                            <div className="drake-feels-experience-box">
                                <p className="drake-section-p-clean">
                                    Some guests experience light movement similar to ocean cruising. Others may feel more pronounced motion during active crossings.
                                </p>
                            </div>

                            <div className="drake-feels-details">
                                <p className="drake-section-p-clean">
                                    Preparation, ship selection, and mindset significantly influence how the crossing is experienced.
                                </p>
                            </div>

                            <div className="drake-editorial-note">
                                <p>
                                    For most travelers, the Drake Passage becomes part of the story, not a disruption to the journey.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 6: CROSS OR FLY — Compares two options: crossing the Drake Passage vs fly-cruise itineraries that bypass it ===== */}
            <section className="drake-section drake-bg-soft drake-choice-section">
                <div className="drake-section-inner drake-wide">

                    <div className="drake-choice-header">
                        <span className="drake-section-number">06</span>
                        <h2 className="drake-section-h2">Should You Cross the <br />Drake Passage or Fly Over It</h2>
                        <p className="drake-section-p drake-choice-intro">
                            Travelers have two primary options when planning Antarctica:
                        </p>
                    </div>

                    <div className="drake-choice-grid">

                        {/* Option 1: Cross */}
                        <div className="drake-choice-card drake-cross">
                            <span className="drake-choice-badge">Expedition Standard</span>
                            <h3>Cross the Drake Passage</h3>
                            <ul className="drake-choice-list">
                                <li>Full expedition experience</li>
                                <li>Gradual transition into Antarctica</li>
                                <li>More time onboard the expedition vessel</li>
                            </ul>
                        </div>

                        {/* Option 2: Fly */}
                        <div className="drake-choice-card drake-fly">
                            <span className="drake-choice-badge">Time Optimized</span>
                            <h3>Fly-Cruise Option</h3>
                            <ul className="drake-choice-list">
                                <li>Avoids the ocean crossing</li>
                                <li>Reduces transit time</li>
                                <li>Appeals to highly motion-sensitive travelers</li>
                            </ul>
                        </div>

                    </div>

                    <div className="drake-choice-footer">
                        <div className="drake-choice-verdict">
                            <p className="drake-section-p-clean">There is no universal right choice.</p>
                        </div>

                        <p className="drake-section-p-clean">
                            Travelers seeking the full Antarctica narrative often choose to cross. Those prioritizing speed or comfort may prefer to fly.
                        </p>

                        <div className="drake-editorial-note">
                            <p>The right decision depends on comfort level and travel priorities.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== SECTION 7: WHO IS IT RIGHT FOR — Helps travelers determine if the Drake Passage is suitable based on their comfort level and travel priorities ===== */}
            <section className="drake-section drake-bg-white drake-audience-section">
                <div className="drake-section-inner drake-wide">

                    <div className="drake-audience-header">
                        <span className="drake-section-number">07</span>
                        <h2 className="drake-section-h2">Who the Drake Passage Is Right For</h2>
                    </div>

                    <div className="drake-audience-grid">

                        {/* Group 1: Best Suited For */}
                        <div className="drake-audience-card drake-suited">
                            <div className="drake-audience-icon-wrap">
                                <span className="drake-audience-icon">
                                    <Check size={20} strokeWidth={2} />
                                </span>
                            </div>
                            <h3>Best suited for travelers who:</h3>
                            <ul className="drake-audience-list">
                                <li>Are comfortable with ocean travel</li>
                                <li>Want the full Antarctica expedition experience</li>
                                <li>Value the journey as part of the destination</li>
                            </ul>
                        </div>

                        {/* Group 2: May prefer alternatives */}
                        <div className="drake-audience-card drake-alternatives">
                            <div className="drake-audience-icon-wrap">
                                <span className="drake-audience-icon">
                                    <AlertCircle size={20} strokeWidth={2} />
                                </span>
                            </div>
                            <h3>May prefer alternatives if:</h3>
                            <ul className="drake-audience-list">
                                <li>Highly sensitive to motion</li>
                                <li>Limited mobility or balance concerns</li>
                                <li>Prefer minimal transit time</li>
                            </ul>
                        </div>

                    </div>

                    <div className="drake-audience-footer">
                        <div className="drake-editorial-note">
                            <p>This distinction allows the journey to be aligned correctly from the start.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== SECTION 8: HOW TO PREPARE — Provides preparation guidance including ship selection, packing tips, and motion management options ===== */}
            <section className="drake-section drake-bg-soft drake-prepare-section">
                <div className="drake-section-inner drake-wide">

                    <div className="drake-prepare-header">
                        <span className="drake-section-number">08</span>
                        <h2 className="drake-section-h2">How to Prepare for the Drake Passage</h2>
                        <p className="drake-section-p drake-prepare-intro">
                            Preparation is straightforward when handled in advance.
                        </p>
                    </div>

                    <div className="drake-prepare-grid">

                        {/* Step 1 */}
                        <div className="drake-prepare-card">
                            <div className="drake-prepare-step-num">01</div>
                            <p className="drake-prepare-text">Selecting a ship designed for polar stability</p>
                        </div>

                        {/* Step 2 */}
                        <div className="drake-prepare-card">
                            <div className="drake-prepare-step-num">02</div>
                            <p className="drake-prepare-text">Bringing motion management options if needed</p>
                        </div>

                        {/* Step 3 */}
                        <div className="drake-prepare-card">
                            <div className="drake-prepare-step-num">03</div>
                            <p className="drake-prepare-text">Packing layered clothing for comfort</p>
                        </div>

                        {/* Step 4 */}
                        <div className="drake-prepare-card">
                            <div className="drake-prepare-step-num">04</div>
                            <p className="drake-prepare-text">Understanding that conditions vary</p>
                        </div>

                    </div>

                    <div className="drake-prepare-footer">
                        <div className="drake-editorial-note">
                            <p>When planned correctly, the Drake Passage becomes manageable rather than uncertain.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== SECTION 9: EXPERT INSIGHT — Redesigned side-by-side layout featuring Angela Hughes' photo and expert perspective ===== */}
            <section className="drake-section drake-bg-white drake-expert-redesign">
                <div className="drake-section-inner drake-wide">
                    <div className="drake-expert-flex">
            
                        {/* Left Column: Content area */}
                        <div className="drake-expert-content-wrap">
                            <div className="drake-expert-header-left">
                                <span className="drake-section-number">09</span>
                                <h2 className="drake-section-h2 left-bar">Expert Insight from <br />Angela Hughes</h2>
                            </div>
            
                            <div className="drake-expert-quote-body">
                                <div className="drake-expert-icon-navy">"</div>
            
                                <p className="drake-expert-paragraph drake-highlight">
                                    In working with Antarctica clients, the concern around the Drake Passage is almost always greater before the trip than after.
                                </p>
            
                                <p className="drake-expert-paragraph">
                                    Once travelers understand how the crossing is structured and select the right ship, it becomes a manageable and expected part of the journey.
                                </p>
            
                                <p className="drake-expert-paragraph drake-final-insight">
                                    The difference is not in avoiding the Drake Passage. It is in planning it correctly.
                                </p>
                            </div>
            
                            <div className="drake-expert-author-footer">
                                <div className="drake-expert-line-navy"></div>
                                <p className="drake-expert-name">Angela Hughes</p>
                                <p className="drake-expert-title">Antarctica Expedition Specialist</p>
                            </div>
                        </div>
            
                        {/* Right Column: Professional Photo - Sticky */}
                        <div className="drake-expert-image-wrap">
                            <div className="drake-expert-photo-container">
                                <img
                                    src={ProfilePicture}
                                    alt="Angela Hughes - Antarctica Expedition Specialist"
                                    className="drake-expert-img"
                                />
                                {/* Decorative Navy Frame Accent */}
                                <div className="drake-expert-photo-accent"></div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </section>

            {/* ===== SECTION 10: WHAT HAPPENS NEXT — Outlines the booking process: consultation, ship selection, preparation, and itinerary review ===== */}
            <section className="drake-section drake-bg-soft drake-next-section">
                <div className="drake-section-inner drake-narrow">

                    <div className="drake-next-header">
                        <span className="drake-section-number">10</span>
                        <h2 className="drake-section-h2">What Happens Next</h2>
                    </div>

                    <div className="drake-next-steps-container">

                        {/* Step 1 */}
                        <div className="drake-next-step-row">
                            <div className="drake-next-step-circle">01</div>
                            <div className="drake-next-step-body">
                                <p className="drake-section-p-clean">Consultation to define comfort level and expectations</p>
                            </div>
                        </div>

                        <div className="drake-next-connector"></div>

                        {/* Step 2 */}
                        <div className="drake-next-step-row">
                            <div className="drake-next-step-circle">02</div>
                            <div className="drake-next-step-body">
                                <p className="drake-section-p-clean">Selection of the right expedition ship and itinerary</p>
                            </div>
                        </div>

                        <div className="drake-next-connector"></div>

                        {/* Step 3 */}
                        <div className="drake-next-step-row">
                            <div className="drake-next-step-circle">03</div>
                            <div className="drake-next-step-body">
                                <p className="drake-section-p-clean">Full preparation for the Antarctica journey</p>
                            </div>
                        </div>

                    </div>

                    <div className="drake-next-footer">
                        <div className="drake-editorial-note">
                            <p>Every detail is structured before confirmation to ensure alignment.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== SECTION 11: WHY BOOK — Explains why to book with Angela Hughes, highlighting her 40+ years experience and comprehensive support ===== */}
            <section className="drake-section drake-bg-white drake-why-book-section">
                <div className="drake-section-inner drake-wide">

                    <div className="drake-why-main-content">
                        <div className="drake-why-header">
                            <span className="drake-section-number">11</span>
                            <h2 className="drake-section-h2">Why Book with Angela Hughes and <br />Trips & Ships Luxury Travel</h2>
                        </div>

                        <div className="drake-why-bio">
                            <p className="drake-section-p-clean drake-why-intro">
                                Understanding the Drake Passage is part of planning Antarctica correctly.
                            </p>
                            <p className="drake-section-p-clean">
                                Angela Hughes has over four decades of experience and has traveled to 121 countries and territories, working with clients on complex global itineraries.
                            </p>
                        </div>
                    </div>

                    <div className="drake-why-benefits-area">
                        <p className="drake-why-benefit-title">Clients benefit from:</p>

                        <div className="drake-why-benefits-grid">
                            <div className="drake-why-benefit-card">
                                <span className="drake-why-benefit-icon">
                                    <Sparkles size={18} strokeWidth={1.5} />
                                </span>
                                <p>Strategic ship selection</p>
                            </div>
                            <div className="drake-why-benefit-card">
                                <span className="drake-why-benefit-icon">
                                    <Sparkles size={18} strokeWidth={1.5} />
                                </span>
                                <p>Preparation guidance tailored to comfort level</p>
                            </div>
                            <div className="drake-why-benefit-card">
                                <span className="drake-why-benefit-icon">
                                    <Sparkles size={18} strokeWidth={1.5} />
                                </span>
                                <p>Access to preferred expedition inventory</p>
                            </div>
                            <div className="drake-why-benefit-card">
                                <span className="drake-why-benefit-icon">
                                    <Sparkles size={18} strokeWidth={1.5} />
                                </span>
                                <p>Ongoing support throughout the journey</p>
                            </div>
                        </div>
                    </div>

                    <div className="drake-why-footer">
                        <div className="drake-editorial-note">
                            <p>Every Antarctica itinerary is reviewed in advance to ensure it is structured correctly.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== FAQ SECTION — Accordion-style frequently asked questions about the Drake Passage with expandable answers ===== */}
            <section className="drake-section drake-bg-cream drake-faq-section">
                <div className="drake-section-inner drake-narrow">

                    <div className="drake-faq-header">
                        <span className="drake-section-number">12</span>
                        <h2 className="drake-section-h2">Frequently Asked Questions</h2>
                        <p className="drake-faq-sub">Everything you need to know about the Drake Passage crossing experience.</p>
                    </div>

                    <FAQ />

                </div>
            </section>

            {/* ===== FINAL CTA — Final call-to-action section encouraging users to plan their Antarctica expedition ===== */}
            <section className="drake-final-cta-section">
                {/* Dark overlay for text readability */}
                <div className="drake-cta-overlay"></div>

                <div className="drake-final-cta-inner">
                    <h2 className="drake-section-h2 drake-white drake-gold-bar">Plan Your Antarctica Expedition</h2>

                    <div className="drake-cta-content-wrap">
                        <p className="drake-cta-paragraph drake-cta-lead">
                            The Drake Passage is not something to avoid. It is something to approach correctly.
                        </p>
                        <p className="drake-cta-paragraph">
                            The difference is in how it is planned.
                        </p>
                    </div>

                    <div className="drake-cta-button-wrap">
                        <button className="drake-cta-btn">Start Your Antarctica Plan</button>
                    </div>
                </div>
            </section>
        </>
    );
}