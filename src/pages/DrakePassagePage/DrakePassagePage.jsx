import { useState, useEffect, useRef } from "react"
import '../../pages/DrakePassagePage/DrakePassagePage.css'

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
    return (
        <div className="faq-list">
            {faqData.map((item, i) => (
                <div key={i} className={`faq-item${open === i ? " open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
                    <div className="faq-q">
                        <span>{item.q}</span>
                        <span className="faq-icon">▾</span>
                    </div>
                    <div className="faq-a">{item.a}</div>
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
            <p className="section-p">
                {isExpanded ? children : `${contentString.substring(0, maxLength)}...`}
            </p>
            <button
                className="read-more-btn"
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
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <style>{styles}</style>

            {/* ===== NAVBAR — exact copy ===== */}
            <nav className="navbar">
                <div className="logo">TRIPS & SHIPS</div>

                <div className="nav-links">
                    <a href="#">HOME</a>
                    <a href="#">EXPERIENCES</a>
                    <a href="#">MEETINGS & INCENTIVES</a>
                    <a href="#">ALUMNI TRAVEL</a>
                    <a href="#">VIP HOTELS</a>
                    <a href="#">ABOUT & RESOURCES</a>
                    <a href="#">BLOG</a>
                </div>

                <div className="nav-right">
                    <button className="nav-btn">CONTACT</button>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>
                    <div className="close-btn" onClick={() => setMenuOpen(false)}>×</div>
                    <a href="#">HOME</a>
                    <a href="#">EXPERIENCES</a>
                    <a href="#">MEETINGS & INCENTIVES</a>
                    <a href="#">ALUMNI TRAVEL</a>
                    <a href="#">VIP HOTELS</a>
                    <a href="#">ABOUT & RESOURCES</a>
                    <a href="#">BLOG</a>
                    <button className="nav-btn">CONTACT</button>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-eyebrow">Antarctica Expedition Planning</span>
                    <h1>The Drake Passage</h1>
                    <p className="hero-sub">What to expect when crossing to Antarctica</p>
                    <p className="hero-lead">
                        For most travelers heading to Antarctica, the journey includes crossing the Drake Passage, the body of water between South America and the Antarctic Peninsula.
                    </p>

                    <div className="hero-details">
                        <p className="hero-note">
                            It is often the most talked about part of the trip, not because it defines the experience, but because it is unfamiliar.
                        </p>
                        <p className="hero-note">For most of our clients, the Drake Passage becomes a short transition, not the defining part of the journey.</p>
                        <p className="hero-note">The reality is that the crossing is a standard, managed component of Antarctica expeditions, shaped by ship design, weather systems, and preparation.</p>
                        <p className="hero-note">What lies beyond it is what defines the experience.</p>
                    </div>

                    <button className="hero-read-more" onClick={() => {
                        const details = document.querySelector('.hero-details');
                        if (details) {
                            details.classList.toggle('expanded');
                        }
                    }}>
                        Read More
                    </button>

                    <div className="hero-btns">
                        <button className="btn-primary">Plan Your Antarctica Expedition</button>
                        <button className="btn-secondary">View Scenic Antarctica Expeditions</button>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHAT IS THE DRAKE PASSAGE */}
            <section className="section section-bg-white what-is-drake-clean">
                <div className="section-inner wide">
                    <FadeSection className="drake-text-grid">

                        {/* Left Column: Title and Numbering */}
                        <div className="drake-title-side">
                            <span className="section-number">01</span>
                            <h2 className="section-h2">What Is the <br />Drake Passage</h2>
                        </div>

                        {/* Right Column: Content */}
                        <div className="drake-content-side">
                            <p className="drake-lead-text">
                                The Drake Passage is the stretch of ocean between the southern tip of South America and Antarctica, connecting the Atlantic and Pacific Oceans.
                            </p>

                            <div className="drake-details-wrapper">
                                <p className="section-p-clean">
                                    It is the primary route used by expedition ships traveling to the Antarctic Peninsula.
                                    Most voyages cross the Drake Passage twice, once heading south and once returning north.
                                </p>

                                <div className="drake-editorial-note">
                                    <p>
                                        The crossing is not an optional add-on. It is a fundamental part of the structure
                                        of the journey, built into expedition planning from the beginning.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </FadeSection>
                </div>
            </section>

            {/* SECTION 3 — HOW ROUGH IS THE DRAKE PASSAGE */}
            <section className="section section-bg-soft roughness-clean">
                <div className="section-inner wide">
                    <FadeSection className="roughness-grid">

                        {/* Left Column: Title and Intro */}
                        <div className="roughness-title-side">
                            <span className="section-number">02</span>
                            <h2 className="section-h2">How Rough Is the <br />Drake Passage</h2>
                            <p className="roughness-lead-text">
                                Conditions in the Drake Passage vary based on weather systems, wind patterns, and time of year.
                            </p>
                        </div>

                        {/* Right Column: The Lake vs Shake Comparison */}
                        <div className="roughness-content-side">
                            <div className="lake-shake-cards">

                                {/* Drake Lake */}
                                <div className="term-card lake">
                                    <span className="term-badge">Calm</span>
                                    <h3>Drake Lake</h3>
                                    <p className="section-p-clean">
                                        Calm crossings with minimal movement. A smooth transition into the Antarctic wilderness.
                                    </p>
                                </div>

                                {/* Drake Shake */}
                                <div className="term-card shake">
                                    <span className="term-badge gold">Active</span>
                                    <h3>Drake Shake</h3>
                                    <p className="section-p-clean white">
                                        More active conditions with noticeable motion. Handled expertly by modern polar-stabilized vessels.
                                    </p>
                                </div>

                            </div>

                            <div className="roughness-summary">
                                <p className="section-p-clean">
                                    Both occur. Most crossings fall somewhere in between. Modern expedition ships are designed to manage these conditions, and the experience is influenced as much by ship design and preparation as it is by weather.
                                </p>
                                <div className="drake-editorial-note">
                                    <p>Understanding this variability is key to setting expectations correctly.</p>
                                </div>
                            </div>
                        </div>

                    </FadeSection>
                </div>
            </section>

            {/* HOW SHIPS HANDLE */}
            <section className="section section-bg-white">
                <div className="section-inner">
                    <FadeSection>
                        <h2 className="section-h2">How Expedition Ships Handle the Drake Passage</h2>
                        <p className="section-p">
                            Ships designed for Antarctica, including vessels operated by Scenic Luxury Cruises & Tours, are engineered for stability and performance in open water.
                        </p>
                        <p className="section-p">
                            While ocean movement cannot be eliminated, it can be managed.
                        </p>

                        <div className="ship-features">
                            <div className="ship-feature-card">
                                <h3>Stabilization Systems</h3>
                                <p>Advanced technology reduces rolling and improves comfort</p>
                            </div>
                            <div className="ship-feature-card">
                                <h3>Hull Design</h3>
                                <p>Reinforced structures built specifically for polar conditions</p>
                            </div>
                            <div className="ship-feature-card">
                                <h3>Expert Crew</h3>
                                <p>Experienced teams monitoring real-time weather patterns</p>
                            </div>
                        </div>

                        <p className="section-p">
                            The Drake Passage is not avoided. It is anticipated and managed as part of the expedition.
                        </p>
                    </FadeSection>
                </div>
            </section>

            {/* IS IT DANGEROUS */}
            <section className="section section-bg-cream">
                <div className="section-inner narrow">
                    <FadeSection>
                        <div className="danger-box">
                            <h2 className="section-h2 white gold-bar">Is the Drake Passage Dangerous</h2>
                            <p className="section-p white">
                                The Drake Passage is widely discussed, but often misunderstood.
                            </p>
                            <p className="section-p white">
                                Within the context of modern expedition travel, it is not considered dangerous. Crossings are conducted by experienced crews using ships built specifically for these environments.
                            </p>
                            <p className="section-p white">
                                Weather systems are monitored continuously, and itineraries are adjusted when necessary.
                            </p>
                            <p className="section-p white">
                                For travelers, the Drake Passage is a controlled and expected part of the journey rather than a risk factor.
                            </p>
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* WHAT IT FEELS LIKE */}
            <section className="section section-bg-white">
                <div className="section-inner">
                    <FadeSection>
                        <h2 className="section-h2">What the Drake Passage Feels Like</h2>
                        <p className="section-p">The experience varies by traveler and conditions.</p>
                        <p className="section-p">Some guests experience light movement similar to ocean cruising. Others may feel more pronounced motion during active crossings.</p>
                        <p className="section-p">Preparation, ship selection, and mindset significantly influence how the crossing is experienced.</p>
                        <p className="section-p">For most travelers, the Drake Passage becomes part of the story, not a disruption to the journey.</p>
                    </FadeSection>
                </div>
            </section>

            {/* CROSS OR FLY */}
            <section className="section section-bg-soft">
                <div className="section-inner">
                    <FadeSection>
                        <h2 className="section-h2">Should You Cross the Drake Passage or Fly Over It</h2>
                        <p className="section-p">Travelers have two primary options when planning Antarctica:</p>
                        <p className="section-p">
                            <strong>Cross the Drake Passage</strong><br />
                            Full expedition experience<br />
                            Gradual transition into Antarctica<br />
                            More time onboard the expedition vessel
                        </p>
                        <p className="section-p">
                            <strong>Fly-Cruise Option</strong><br />
                            Avoids the ocean crossing<br />
                            Reduces transit time<br />
                            Appeals to highly motion-sensitive travelers
                        </p>
                        <p className="section-p">There is no universal right choice.</p>
                        <p className="section-p">Travelers seeking the full Antarctica narrative often choose to cross. Those prioritizing speed or comfort may prefer to fly.</p>
                        <p className="section-p">The right decision depends on comfort level and travel priorities.</p>
                    </FadeSection>
                </div>
            </section>

            {/* WHO IS IT RIGHT FOR */}
            <section className="section section-bg-white">
                <div className="section-inner">
                    <FadeSection>
                        <h2 className="section-h2">Who the Drake Passage Is Right For</h2>
                        <p className="section-p">Best suited for travelers who:</p>
                        <p className="section-p">
                            ✓ &nbsp; Are comfortable with ocean travel<br />
                            ✓ &nbsp; Want the full Antarctica expedition experience<br />
                            ✓ &nbsp; Value the journey as part of the destination
                        </p>
                        <p className="section-p">May prefer alternatives if:</p>
                        <p className="section-p">
                            ◎ &nbsp; Highly sensitive to motion<br />
                            ◎ &nbsp; Limited mobility or balance concerns<br />
                            ◎ &nbsp; Prefer minimal transit time
                        </p>
                        <p className="section-p">This distinction allows the journey to be aligned correctly from the start.</p>
                    </FadeSection>
                </div>
            </section>

            {/* HOW TO PREPARE */}
            <section className="section section-bg-soft">
                <div className="section-inner wide">
                    <FadeSection>
                        <h2 className="section-h2">How to Prepare for the Drake Passage</h2>
                        <p className="section-p">Preparation is straightforward when handled in advance.</p>
                        <ReadMoreText maxLength={150}>
                            Key considerations include: Selecting a ship designed for polar stability, Bringing motion management options if needed, Packing layered clothing for comfort, Understanding that conditions vary. When planned correctly, the Drake Passage becomes manageable rather than uncertain.
                        </ReadMoreText>
                    </FadeSection>
                </div>
            </section>

            {/* EXPERT INSIGHT */}
            <section className="section section-bg-white">
                <div className="section-inner">
                    <FadeSection>
                        <h2 className="section-h2">Expert Insight from Angela Hughes</h2>
                        <p className="section-p">In working with Antarctica clients, the concern around the Drake Passage is almost always greater before the trip than after.</p>
                        <p className="section-p">Once travelers understand how the crossing is structured and select the right ship, it becomes a manageable and expected part of the journey.</p>
                        <p className="section-p">The difference is not in avoiding the Drake Passage. It is in planning it correctly.</p>
                    </FadeSection>
                </div>
            </section>

            {/* WHAT HAPPENS NEXT */}
            <section className="section section-bg-soft">
                <div className="section-inner narrow">
                    <FadeSection>
                        <h2 className="section-h2">What Happens Next</h2>
                        <p className="section-p">Consultation to define comfort level and expectations</p>
                        <p className="section-p">Selection of the right expedition ship and itinerary</p>
                        <p className="section-p">Full preparation for the Antarctica journey</p>
                        <p className="section-p">Every detail is structured before confirmation to ensure alignment.</p>
                    </FadeSection>
                </div>
            </section>

            {/* WHY BOOK */}
            <section className="section section-bg-white">
                <div className="section-inner wide">
                    <FadeSection>
                        <h2 className="section-h2">Why Book with Angela Hughes and Trips & Ships Luxury Travel</h2>
                        <p className="section-p">Understanding the Drake Passage is part of planning Antarctica correctly.</p>
                        <ReadMoreText maxLength={250}>
                            Angela Hughes has over four decades of experience and has traveled to 121 countries and territories, working with clients on complex global itineraries. Clients benefit from: Strategic ship selection, Preparation guidance tailored to comfort level, Access to preferred expedition inventory, Ongoing support throughout the journey. Every Antarctica itinerary is reviewed in advance to ensure it is structured correctly.
                        </ReadMoreText>
                    </FadeSection>
                </div>
            </section>

            {/* AUTHOR PROOF */}
            <div className="author-bar">
                <div className="author-inner">
                    <FadeSection>
                        <div className="author-profile">
                            <div className="author-avatar">A</div>
                            <div className="author-info">
                                <h3>Angela Hughes</h3>
                                <div className="author-title">CEO, Trips & Ships Luxury Travel</div>
                                <div className="author-stats">
                                    <div className="author-stat">
                                        <div className="stat-val">40+</div>
                                        <div className="stat-lbl">Years Experience</div>
                                    </div>
                                    <div className="author-stat">
                                        <div className="stat-val">121</div>
                                        <div className="stat-lbl">Countries & Territories</div>
                                    </div>
                                </div>
                                <div className="author-awards">
                                    <span className="award-badge">Luxury Travel Influencer of the Year 2024</span>
                                    <span className="award-badge">Most Influential Women in Travel 2026 · TravelPulse</span>
                                    <span className="award-badge">Travel Leaders Network</span>
                                </div>
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </div>

            {/* FAQ */}
            <section className="section section-bg-white">
                <div className="section-inner narrow">
                    <FadeSection>
                        <h2 className="section-h2">Frequently Asked Questions</h2>
                        <FAQ />
                    </FadeSection>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="final-cta">
                <div className="final-cta-inner">
                    <h2>Plan Your Antarctica Expedition</h2>
                    <p>The Drake Passage is not something to avoid. It is something to approach correctly.</p>
                    <p>The difference is in how it is planned.</p>
                    <button className="cta-btn">Start Your Antarctica Plan</button>
                </div>
            </section>
        </>
    );
}