import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './LuxuryTravel.css'
import { ChevronDown, Star, Sparkles } from 'lucide-react'
import ProfilePicture from '../../assets/image.jpg'

// --- FAQ Component Logic ---
function FAQComponent() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqData = [
        { q: "What makes Scenic Eclipse different from other luxury cruises?", a: "Scenic Eclipse is a discovery yacht, not a traditional cruise ship. The experience is designed around exploration, enrichment, and destination depth rather than onboard entertainment or volume sightseeing. It combines expedition capability with refined luxury in a smaller-ship environment." },
        { q: "Is Scenic Eclipse considered expedition travel?", a: "Yes. Scenic Eclipse operates in the expedition and discovery travel space. While the onboard experience is highly comfortable, itineraries often involve remote regions, expert-led excursions, and flexible daily planning shaped by weather and local conditions." },
        { q: "Do I need to be physically fit to travel on Scenic Eclipse?", a: "Scenic Eclipse offers a range of activity levels. Some excursions involve light walking, while others may be more active. Choosing the right itinerary and activity profile is an important part of planning, and guidance helps ensure expectations are aligned with comfort and mobility." },
        { q: "Are prices higher when booking Scenic Eclipse through a travel agency?", a: "No. Scenic Eclipse pricing is the same whether you book directly with the cruise line or through a qualified travel agency. Working with an agency adds planning expertise and support without increasing the cruise cost." },
        { q: "Is it better to book Scenic Eclipse direct or through a travel advisor?", a: "Booking direct secures the sailing. Working with a travel advisor helps design and support the entire journey, including itinerary alignment, seasonality guidance, cabin selection, travel coordination, and ongoing support before and after the trip." },
        { q: "Will I receive the same onboard experience if I book through Trips & Ships Luxury Travel?", a: "Yes. Booking through Trips & Ships does not change the onboard experience in any way. It enhances the journey by providing expert planning and concierge-level support outside of the ship." },
        { q: "What destinations does Scenic Eclipse travel to?", a: "Scenic Eclipse sails to polar regions, remote destinations, and select warm-water regions depending on the season. Itineraries may include Antarctica, the Arctic, South America, the South Pacific, and other destinations not accessible to traditional cruise ships." },
        { q: "How important is seasonality when choosing a Scenic Eclipse itinerary?", a: "Seasonality is critical. Weather, wildlife activity, daylight hours, and sea conditions all influence the overall experience. Thoughtful planning ensures the timing of the journey aligns with what travelers hope to see and experience." },
        { q: "How do I choose the right cabin on Scenic Eclipse?", a: "Cabin selection involves more than choosing a category. Location on the ship, deck placement, proximity to amenities, and overall ship flow all matter. Strategic guidance helps select a cabin that best fits comfort preferences and travel style." },
        { q: "Is travel insurance recommended for Scenic Eclipse trips?", a: "Yes. Because Scenic Eclipse itineraries often involve remote or expedition-style travel, comprehensive travel insurance is strongly recommended. Coverage should be appropriate for the destination and nature of the journey." },
        { q: "What happens if itineraries or daily plans change?", a: "Discovery yacht travel allows for flexibility. Weather and local conditions may influence daily plans. With experienced planning and support, adjustments are handled smoothly and communicated clearly so the experience remains positive and well-paced." },
        { q: "Who will I work with when booking Scenic Eclipse through Trips & Ships Luxury Travel?", a: "You will work directly with Angela Hughes, CEO and Founder of Trips & Ships Luxury Travel. Angela personally guides the planning process for Scenic Eclipse journeys, ensuring itinerary selection, seasonality, cabin strategy, and travel details are thoughtfully aligned from the start." }
    ];

    return (
        <div className="lux-faq-list">
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`lux-faq-item ${openIndex === index ? 'lux-open' : ''}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    <div className="lux-faq-question">
                        <span className="lux-q-text">{item.q}</span>
                        <ChevronDown className="lux-faq-icon" size={20} />
                    </div>
                    <div className="lux-faq-answer">
                        <div className="lux-a-inner">
                            <p className="lux-section-p">{item.a}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function LuxuryTravel() {
    return (
        <div>
            <Navbar />

            {/* ===== HERO SECTION: SCENIC ECLIPSE — High-impact introduction to Discovery Yachts and Trips & Ships expert planning ===== */}
            <section className="lux-hero">
                <div className="lux-hero-content">
                    <span className="lux-hero-eyebrow">Expert Planning by Trips & Ships Luxury Travel</span>

                    <h1 className="lux-h1">Scenic Eclipse Discovery Yachts</h1>

                    <p className="lux-hero-lead">
                        Scenic Eclipse Discovery Yachts represent a distinct category of ultra-luxury travel designed for exploration, immersion, and destination depth. These are not traditional cruise ships. They are purpose-built discovery yachts created for travelers who want to experience the world with intention, comfort, and expert guidance.
                    </p>

                    <div className="lux-hero-details">
                        <p className="lux-hero-note">
                            Trips & Ships Luxury Travel plans Scenic Eclipse journeys using a refined planning framework guided by Angela Hughes’ decades of experience in luxury and expedition travel. Every itinerary, season, cabin choice, and travel detail is thoughtfully considered before the journey begins, ensuring the experience feels aligned from the very first decision.
                        </p>
                    </div>

                    {/* Visibility: Pure white text with gold bottom border */}
                    <button className="lux-hero-read-more" onClick={() => {
                        const details = document.querySelector('.lux-hero-details');
                        if (details) {
                            details.classList.toggle('lux-expanded');
                        }
                    }}>
                        Explore Planning Expertise
                    </button>

                    <div className="lux-hero-btns">
                        <button className="lux-btn-primary">Schedule a Scenic Eclipse Planning Consultation</button>
                        <div className="lux-btn-secondary-wrap">
                            <span className="lux-secondary-label">Prefer email?</span>
                            <a href="mailto:sales@tripsandships.com" className="lux-btn-text-link">sales@tripsandships.com</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 2: EXPERTISE — Explaining the distinct level of planning required for Discovery Yachts ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-inner">
                    <div className="lux-split-grid">

                        {/* Left Column: Title and Numbering */}
                        <div className="lux-title-side">
                            <span className="lux-section-number">01</span>
                            <h2 className="lux-h2">Expert Planning for <br />Scenic Eclipse Discovery Yachts</h2>
                        </div>

                        {/* Right Column: Content Area */}
                        <div className="lux-content-side">
                            <p className="lux-lead-text">
                                Planning a Scenic Eclipse journey requires a different level of expertise than traditional luxury cruising. Discovery yachts operate in remote regions, follow expedition-style pacing, and are shaped by seasonality, weather, and regional conditions.
                            </p>

                            <div className="lux-editorial-accent">
                                <p className="lux-section-p">
                                    Our role is not simply to book the sailing. It is to help travelers determine whether Scenic Eclipse is the right experience and, if so, to design the journey thoughtfully and intelligently from the start.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 3: EXPERT INSIGHT — Featuring Angela Hughes' leadership and strategic Scenic partnership ===== */}
            <section className="lux-section lux-bg-cream">
                <div className="lux-inner">

                    {/* Centered Header Wrapper */}
                    <div className="lux-expert-header">
                        <span className="lux-section-number">02</span>
                        <h2 className="lux-h2">Expert Insight from Angela Hughes</h2>
                    </div>

                    <div className="lux-expert-grid">

                        {/* Sidebar: Headshot and Credentials */}
                        <div className="lux-expert-sidebar">
                            <div className="lux-expert-image-wrap">
                                <div className="lux-expert-avatar">
                                    <img src={ProfilePicture} alt="" />
                                </div>
                            </div>
                            <div className="lux-credentials-box">
                                <h4 className="lux-sidebar-title">Recognition</h4>
                                <ul className="lux-credentials-list">
                                    <li>Travelpulse Most Influential Women in Travel 2026</li>
                                    <li>Luxury Travel Advisor Trainer</li>
                                    <li>International Strategy Speaker</li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lux-expert-main-content">
                            <h3 className="lux-h3">Angela Hughes — CEO & Founder, Trips & Ships Luxury Travel</h3>

                            <p className="lux-section-p">
                                Angela Hughes is the CEO and Founder of Trips & Ships Luxury Travel and a recognized authority in luxury cruising, expedition travel, and discovery yacht experiences. With more than four decades in the travel industry, Angela trains luxury travel advisors, consults with cruise leadership teams, and speaks internationally on premium travel strategy. Angela was named to Travelpulse’s Most Influential Women in Travel list 2026.
                            </p>

                            <div className="lux-expert-highlight-box">
                                <p className="lux-section-p">
                                    Her expertise with Scenic Eclipse Discovery Yachts comes from real-world experience — understanding how expedition travel unfolds day by day, how seasonality affects itineraries, and how small planning decisions can significantly shape the guest experience. Every Scenic Eclipse journey planned through Trips & Ships reflects this perspective.
                                </p>
                            </div>

                            <p className="lux-section-p">
                                Through decades of work in the luxury cruise and expedition space, Angela Hughes and the Trips & Ships Luxury Travel leadership team maintain direct access to the president and vice president of the Scenic Group. This relationship provides informed perspective and senior-level insight when planning Scenic Eclipse journeys, ensuring alignment and clarity while preserving the integrity of the onboard experience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 5: SUITABILITY — Helping travelers determine if Scenic Eclipse aligns with their priorities ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-inner">

                    {/* Centered Header Wrapper */}
                    <div className="lux-selection-header">
                        <span className="lux-section-number">03</span>
                        <h2 className="lux-h2">Is Scenic Eclipse Right for You?</h2>
                    </div>

                    <div className="lux-selection-grid">

                        {/* Column 1: Ideal Fit */}
                        <div className="lux-selection-card lux-ideal">
                            <h3 className="lux-h3">Scenic Eclipse Is Ideal If You:</h3>
                            <ul className="lux-selection-list">
                                <li>Want immersive discovery rather than mass-market cruising</li>
                                <li>Value learning, enrichment, and destination depth</li>
                                <li>Prefer smaller ships with elevated service</li>
                                <li>Are comfortable with expedition-style pacing</li>
                                <li>Want professional planning for complex itineraries</li>
                            </ul>
                        </div>

                        {/* Column 2: Not Ideal Fit */}
                        <div className="lux-selection-card lux-not-ideal">
                            <h3 className="lux-h3">Scenic Eclipse May Not Be Ideal If You:</h3>
                            <ul className="lux-selection-list">
                                <li>Prefer large-ship entertainment and nightlife</li>
                                <li>Are shopping strictly on price</li>
                                <li>Want rigid sightseeing schedules</li>
                                <li>Expect a traditional cruise-ship atmosphere</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6: ABOUT THE YACHTS — Defining Discovery Yachts and the Scenic Eclipse philosophy ===== */}
            <section className="lux-section lux-bg-cream">
                <div className="lux-inner lux-narrow">

                    {/* Centered Header Wrapper */}
                    <div className="lux-about-header">
                        <span className="lux-section-number">04</span>
                        <h2 className="lux-h2">About Scenic Eclipse Discovery Yachts</h2>
                    </div>

                    <div className="lux-about-content">
                        <p className="lux-about-lead">
                            Scenic Eclipse I and II are classified as Discovery Yachts — vessels that blend ultra-luxury comfort with expedition-grade capability. They are designed to reach destinations traditional cruise ships cannot, offering curated experiences supported by expert teams and thoughtful onboard programming.
                        </p>

                        <div className="lux-editorial-divider"></div>

                        <p className="lux-section-p">
                            The experience prioritizes exploration, immersion, and pacing over volume sightseeing. Scenic Eclipse appeals to travelers who care deeply about how a journey feels, not just where it goes.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 7: PLANNING FACTORS — Outlining the specific criteria used in expert itinerary selection ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-inner">

                    {/* Centered Header Wrapper */}
                    <div className="lux-planning-header">
                        <span className="lux-section-number">05</span>
                        <h2 className="lux-h2">How an Expert Chooses the <br />Right Scenic Eclipse Sailing</h2>
                    </div>

                    <div className="lux-planning-intro">
                        <p className="lux-section-p">
                            Selecting the right Scenic Eclipse itinerary involves far more than choosing a destination. Expert planning considers how multiple factors interact to shape the overall experience.
                        </p>
                    </div>

                    <div className="lux-planning-grid">

                        {/* Factor 1 */}
                        <div className="lux-planning-card">
                            <Sparkles className="lux-planning-icon" size={20} />
                            <p className="lux-planning-text">Experience alignment between discovery travel and comfort expectations</p>
                        </div>

                        {/* Factor 2 */}
                        <div className="lux-planning-card">
                            <Sparkles className="lux-planning-icon" size={20} />
                            <p className="lux-planning-text">Seasonality, including weather, wildlife, daylight, and sea conditions</p>
                        </div>

                        {/* Factor 3 */}
                        <div className="lux-planning-card">
                            <Sparkles className="lux-planning-icon" size={20} />
                            <p className="lux-planning-text">Itinerary pacing and expedition intensity</p>
                        </div>

                        {/* Factor 4 */}
                        <div className="lux-planning-card">
                            <Sparkles className="lux-planning-icon" size={20} />
                            <p className="lux-planning-text">Cabin placement and ship flow</p>
                        </div>

                        {/* Factor 5 */}
                        <div className="lux-planning-card lux-span-full">
                            <Sparkles className="lux-planning-icon" size={20} />
                            <p className="lux-planning-text">Flights, transfers, documentation, and pre- and post-cruise planning</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 8: PLANNING METHOD — Integrating your custom Scenic Eclipse imagery ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-inner">

                    {/* Visual Title Block with Image 1 */}
                    <div className="lux-method-hero" style={{ backgroundImage: `url('https://uc23929ccb13c0ce43eb9f019c77.previews.dropboxusercontent.com/p/thumb/AC9lXAEHkExMz2U1E4wGYh47-mLDI2nD-na54qBmKcNp4WIZSazFY5Oxj4TiK1BDno0wspYwvIArApLiEnHlkKHA8SjIEG5E5svaoKMC2hBCsYvD_s2TW3oDbKq5Zu_YNEl7L5bmiNzvdDdRz0lVlAOU0rEHaqusME6tJs5c-P1u-rNA7nw2QvugEKTucHErj3GDofWfzTyYNlLOV-CD-xyD07kytnD8OJP9vJOQlUHRjRbQoMMrWch3iqfqjYZphXcEBLaQ9XzklNMfz_hwlZTur-y4d6WuMIsxaHZgqnLzKEUgoVHPHkuWW-E5iVhXdUulmQ4tEUcIHDUUECCL1Rr2OPJYAPQ2ySIkyUF9WB6xpjmUS6oOUhU5Fn0x-xRp-1kpDZWWhdyCfOE_9XfgQCH50K6ocq0rncVBpLG-re4VaEifqv8ZdpozX-xuv0dJbo-fgzJGXGsDOk1MX0ClZ_rB9QqvT7BYMDea6jBEZzrsKw/p.jpeg')` }}>
                        <div className="lux-method-hero-overlay"></div>
                        <div className="lux-method-hero-content">
                            <span className="lux-method-eyebrow">Strategic Methodology</span>
                            <h2 className="lux-h2-white">The Trips & Ships Scenic Eclipse <br />Planning Approach</h2>
                            <p className="lux-method-hero-intro">
                                Every Scenic Eclipse journey planned through Trips & Ships follows a clear, experience-driven approach refined over decades in luxury and expedition travel.
                            </p>
                        </div>
                    </div>

                    <div className="lux-method-layout">

                        {/* Left Column: The 5 Planning Pillars */}
                        <div className="lux-method-steps">
                            <div className="lux-method-step">
                                <div className="lux-step-num">01</div>
                                <div className="lux-step-content">
                                    <h3 className="lux-h3-sm">Experience & Traveler Fit</h3>
                                    <p className="lux-section-p">Ensuring Scenic Eclipse is the right style of journey based on curiosity, comfort, and expectations.</p>
                                </div>
                            </div>

                            <div className="lux-method-step">
                                <div className="lux-step-num">02</div>
                                <div className="lux-step-content">
                                    <h3 className="lux-h3-sm">Destination & Seasonality</h3>
                                    <p className="lux-section-p">Matching itinerary timing to regional conditions, wildlife activity, and overall experience quality.</p>
                                </div>
                            </div>

                            <div className="lux-method-step">
                                <div className="lux-step-num">03</div>
                                <div className="lux-step-content">
                                    <h3 className="lux-h3-sm">Itinerary & Pacing</h3>
                                    <p className="lux-section-p">Evaluating how the journey unfolds day by day, balancing exploration with time to recharge.</p>
                                </div>
                            </div>

                            <div className="lux-method-step">
                                <div className="lux-step-num">04</div>
                                <div className="lux-step-content">
                                    <h3 className="lux-h3-sm">Cabin & Ship Considerations</h3>
                                    <p className="lux-section-p">Selecting the right cabin location based on ship movement, access, noise, and onboard flow.</p>
                                </div>
                            </div>

                            <div className="lux-method-step">
                                <div className="lux-step-num">05</div>
                                <div className="lux-step-content">
                                    <h3 className="lux-h3-sm">Travel Coordination & Ongoing Support</h3>
                                    <p className="lux-section-p">Thoughtfully coordinating flights, hotels, transfers, documentation, travel insurance, and concierge-level support.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Featured Image 2 */}
                        <div className="lux-method-image-side">
                            <div className="lux-image-frame">
                                <img
                                    src="https://uc2bd972a38218ff4f0293512594.previews.dropboxusercontent.com/p/thumb/AC-Dw_exETVSKrAfV1m6CvlW0XP_lXvII9vsAQFTEyizZ_gGdzZM_YC78FjhP91CREZjDni67cOSwnyOep2545I4ZeMzIbfsHcIFB-diZRT4OMzI0pHlI884QuyUiGy_jX3lSi8GMUIzP9a9EzLDe7ckChagfX2XSHOESgQijKkpg4ky6I1I-bd-oNgos29y9FeJWVpSdo10SUVMc4yN6WolfzCCBY1VC_m3YQA8V_RNCdobx0kYMI9JTh5b44Ducs4Po_OUrwCQJ7sH21cS476nBrTXqvZ-8_vXyybDrlit4nK2bLhH_r1csOqUp3bkKvd-avd5JmnHzgOVAsgNvsAW5XhhiXztMNyfkbkJUQrCIw/p.jpeg7Fj0Gk4JQSAfuZeIHNp72IvbFphhkYNh7rqrvx2-PlBoXw50zXHmw/p.jpeglanning Method"
                                    className="lux-featured-img"
                                />
                                <div className="lux-image-caption">Discovery  Destination</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== SECTION 9: DECISION MATRIX — High-contrast text colors for Yes/No/Limited values ===== */}
            <section className="lux-section lux-bg-cream">
                <div className="lux-inner">

                    <div className="lux-matrix-header">
                        <span className="lux-section-number">07</span>
                        <h2 className="lux-h2">Which Yacht Should You Choose?</h2>
                        <p className="lux-matrix-intro">
                            Scenic Eclipse and Emerald Yachts serve very different traveler profiles. Choosing the right yacht depends on how you want your journey to feel.
                        </p>
                    </div>

                    <div className="lux-matrix-container">
                        <h3 className="lux-h3-matrix">Scenic Eclipse vs Emerald Yachts — Decision Matrix</h3>

                        <div className="lux-table-wrapper">
                            <table className="lux-comparison-table">
                                <thead>
                                    <tr>
                                        <th className="lux-th-aspect">If You Value…</th>
                                        <th className="lux-th-scenic">Choose Scenic Eclipse</th>
                                        <th className="lux-th-emerald">Choose Emerald Yachts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="lux-td-label">Exploration & Discovery</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Scenic">Yes</td>
                                        <td className="lux-td-res lux-val-no" data-label="Emerald">No</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Remote or Polar Destinations</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Scenic">Yes</td>
                                        <td className="lux-td-res lux-val-no" data-label="Emerald">No</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Expert-Led Enrichment</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Scenic">Yes</td>
                                        <td className="lux-td-res lux-val-lim" data-label="Emerald">Limited</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Relaxed Coastal Cruising</td>
                                        <td className="lux-td-res lux-val-no" data-label="Scenic">No</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Emerald">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Social Yacht Atmosphere</td>
                                        <td className="lux-td-res lux-val-no" data-label="Scenic">No</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Emerald">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Warm-Weather Lifestyle Focus</td>
                                        <td className="lux-td-res lux-val-no" data-label="Scenic">No</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Emerald">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Expedition-Style Pacing</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Scenic">Yes</td>
                                        <td className="lux-td-res lux-val-no" data-label="Emerald">No</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Leisure-Forward Pacing</td>
                                        <td className="lux-td-res lux-val-no" data-label="Scenic">No</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Emerald">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="lux-td-label">Destination Depth</td>
                                        <td className="lux-td-res lux-val-yes" data-label="Scenic">Yes</td>
                                        <td className="lux-td-res lux-val-lim" data-label="Emerald">Moderate</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== SECTION 10: HIGH-LEVEL COMPARISON — Quick-reference summary of brand differences ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-inner">

                    {/* Centered Header Wrapper */}
                    <div className="lux-summary-header">
                        <span className="lux-section-number">08</span>
                        <h2 className="lux-h2">Scenic Eclipse vs Emerald Yachts <br />(High-Level Comparison)</h2>
                    </div>

                    <div className="lux-summary-container">
                        <div className="lux-summary-table-wrapper">
                            <table className="lux-summary-table">
                                <thead>
                                    <tr>
                                        <th className="lux-th-summary">Brand</th>
                                        <th className="lux-th-summary">Yacht Style</th>
                                        <th className="lux-th-summary">Passenger Count</th>
                                        <th className="lux-th-summary">Destinations</th>
                                        <th className="lux-th-summary">Best For</th>
                                        <th className="lux-th-summary">Experience Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Scenic Eclipse Row */}
                                    <tr className="lux-row-scenic">
                                        <td className="lux-td-brand" data-label="Brand">Scenic Eclipse</td>
                                        <td data-label="Yacht Style">Discovery Yacht</td>
                                        <td data-label="Passenger Count">Approx. 200</td>
                                        <td data-label="Destinations">Polar and remote regions</td>
                                        <td data-label="Best For">Experience-driven explorers</td>
                                        <td data-label="Experience Type">Expedition-focused</td>
                                    </tr>
                                    {/* Emerald Yachts Row */}
                                    <tr className="lux-row-emerald">
                                        <td className="lux-td-brand" data-label="Brand">Emerald Yachts</td>
                                        <td data-label="Yacht Style">Boutique Yacht</td>
                                        <td data-label="Passenger Count">Approx. 100</td>
                                        <td data-label="Destinations">Mediterranean, Caribbean</td>
                                        <td data-label="Best For">Relaxed luxury travelers</td>
                                        <td data-label="Experience Type">Lifestyle-driven</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 11: ADVISOR ADVANTAGE — Comparing direct booking vs. expert planning with Trips & Ships ===== */}
            <section className="lux-section lux-bg-cream">
                <div className="lux-inner">

                    {/* Centered Header Wrapper */}
                    <div className="lux-adv-header">
                        <span className="lux-section-number">09</span>
                        <h2 className="lux-h2">Why Work With Trips & Ships Luxury Travel <br />Instead of Booking Scenic Eclipse Direct?</h2>
                        <p className="lux-adv-intro">
                            Scenic does an excellent job designing and operating the Scenic Eclipse experience. Where most travelers benefit from working with a travel advisor is not in purchasing the cruise, but in designing and supporting the journey around it.
                        </p>
                    </div>

                    <div className="lux-comp-grid">

                        {/* Panel 1: Direct Booking */}
                        <div className="lux-comp-panel lux-direct-booking">
                            <h3 className="lux-comp-title">Booking Scenic Eclipse Direct</h3>
                            <ul className="lux-comp-list">
                                <li>Secures the sailing</li>
                                <li>Support focuses on the cruise itself</li>
                                <li>Planning is primarily transactional</li>
                            </ul>
                        </div>

                        {/* Panel 2: Trips & Ships Advantage (The Elevated Choice) */}
                        <div className="lux-comp-panel lux-advisor-booking">
                            <div className="lux-adv-badge">The Expert Approach</div>
                            <h3 className="lux-comp-title">Booking with Trips & Ships Luxury Travel</h3>
                            <ul className="lux-comp-list">
                                <li>The entire journey is thoughtfully curated</li>
                                <li>Expert guidance on itinerary fit and seasonality</li>
                                <li>Intentional cabin selection</li>
                                <li>Flights, hotels, and transfers coordinated</li>
                                <li>Travel insurance reviewed for expedition-level travel</li>
                                <li>Dedicated advisor support before, during, and after travel</li>
                            </ul>
                        </div>

                    </div>

                    {/* Closing Callout */}
                    <div className="lux-adv-footer">
                        <p className="lux-adv-callout">
                            Booking Scenic Eclipse direct secures the sailing. Working with Trips & Ships Luxury Travel curates and supports the journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 12: EXPERT FAQs — Detailed answers to common Scenic Eclipse planning questions ===== */}
            <section className="lux-section lux-bg-white">
                <div className="lux-inner lux-narrow-faq">

                    {/* Centered Header Wrapper */}
                    <div className="lux-faq-header">
                        <span className="lux-section-number">10</span>
                        <h2 className="lux-h2">Scenic Eclipse FAQs — Expert Answers</h2>
                    </div>

                    <FAQComponent />
                </div>
            </section>

            {/* ===== SECTION 13: FINAL CTA — The definitive call-to-action to schedule a Scenic Eclipse consultation ===== */}
            <section className="lux-final-cta-section">
                {/* Dark Wash Overlay for Typography Clarity */}
                <div className="lux-cta-overlay"></div>

                <div className="lux-final-cta-inner">
                    {/* Centered Heading */}
                    <h2 className="lux-h2-white">Schedule a Scenic Eclipse <br />Planning Consultation</h2>

                    <div className="lux-cta-content-box">
                        <p className="lux-cta-paragraph">
                            A Scenic Eclipse journey deserves thoughtful planning. This consultation is designed to determine fit, align expectations, and ensure the experience is designed properly from the start.
                        </p>
                    </div>

                    {/* Primary Action Button */}
                    <div className="lux-cta-button-wrap">
                        <button className="lux-cta-btn-primary">
                            Schedule Your Scenic Eclipse Planning Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 14: ATTRIBUTION — Professional credentials and content metadata ===== */}
            <section className="lux-attribution-section lux-bg-cream">
                <div className="lux-inner lux-narrow">

                    <div className="lux-attr-container">
                        {/* Attribution Heading */}
                        <h2 className="lux-attr-h2">Content Attribution</h2>

                        <div className="lux-attr-content">
                            <p className="lux-attr-item">
                                <span className="lux-attr-label">Written by</span>
                                <span className="lux-attr-value">Angela Hughes</span>
                            </p>

                            <p className="lux-attr-item">
                                <span className="lux-attr-label">Reviewed by</span>
                                <span className="lux-attr-value">The Trips & Ships Luxury Travel Yacht Planning Team</span>
                            </p>
                        </div>

                        {/* Date Metadata */}
                        <div className="lux-attr-footer">
                            <p className="lux-attr-date">Last updated April 2026</p>
                        </div>
                    </div>

                </div>
            </section>
        </div >
    )
}

export default LuxuryTravel