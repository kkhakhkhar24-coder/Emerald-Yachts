import React, { useState, useEffect } from 'react';
import "./RiversidevsAmaWaterways.css"
import Navbar from "../../components/Navbar/Navbar";
import {
    Calendar,
    MapPin,
    ChevronDown,
    ChevronUp,
    Award,
    Users,
    Star,
    Clock,
    Compass,
    CheckCircle,
    Plus,
    Minus,
    Globe,
    Ship,
    Sparkles,
    Zap,
    ShieldCheck
} from "lucide-react";

const RiversidevsAmaWaterways = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showQuickTake, setShowQuickTake] = useState(false);

    const heroImages = [
        'luxury_river_cruise_1.png',
        'luxury_river_cruise_2.png',
        'luxury_river_cruise_3.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="vsa_page_wrapper">
            <Navbar />

            {/* HERO SECTION */}
            <section className="vsa_hero_viewport">
                <div className="vsa_hero_overlay">
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={`vsa_hero_slide ${currentSlide === index ? 'vsa_active' : ''}`}
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/${img})` }}
                        ></div>
                    ))}
                </div>

                <div className="vsa_hero_content">
                    <div className="vsa_container_90">
                        <div className="vsa_hero_text_box">
                            <h1 className="vsa_hero_h1">Riverside vs AmaWaterways: Which River Cruise Is Actually Right for You</h1>
                            <p className="vsa_hero_sub">A clear luxury river cruise comparison for travelers deciding between boutique refinement and a more active, inclusion-rich experience</p>

                            <div className="vsa_hero_read_more_outer">
                                <button
                                    className="vsa_hero_read_more_btn"
                                    onClick={() => setShowQuickTake(!showQuickTake)}
                                >
                                    {showQuickTake ? 'Show Less' : 'Read Quick Answer'}
                                    {showQuickTake ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>

                                {showQuickTake && (
                                    <div className="vsa_hero_quick_take_dropdown">
                                        <p>The biggest mistake travelers make when comparing Riverside and AmaWaterways is assuming they are selling the same kind of river cruise. They are not. Riverside is a smaller, more boutique luxury river cruise brand built around spacious all-suite ships in Europe, while AmaWaterways offers a broader, more established river cruise product with a larger fleet, more destinations, and a strong emphasis on included shore experiences and active touring.</p>
                                    </div>
                                )}
                            </div>

                            <div className="vsa_hero_btns">
                                <button className="vsa_btn_filled" onClick={() => scrollToSection('vsa_comparison')}>Compare River Cruise Lines</button>
                                <button className="vsa_btn_outline" onClick={() => scrollToSection('vsa_cta')}>Plan My River Cruise</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STICKY JUMP NAV */}
            <div className="vsa_sticky_nav_bar">
                <div className="vsa_container_90">
                    <div className="vsa_jump_links">
                        <span onClick={() => scrollToSection('vsa_overview')}>Overview</span>
                        <span onClick={() => scrollToSection('vsa_differences')}>Differences</span>
                        <span onClick={() => scrollToSection('vsa_features')}>Features</span>
                        <span onClick={() => scrollToSection('vsa_expert')}>Expert Insight</span>
                        <span onClick={() => scrollToSection('vsa_faq')}>FAQs</span>
                    </div>
                </div>
            </div>

            {/* INTRO SECTION */}
            <section className="vsa_intro_section" id="vsa_overview">
                <div className="vsa_container_90">
                    <div className="vsa_intro_card">
                        <div className="vsa_accent_line"></div>
                        <p className="vsa_intro_p">This is one of the most important river cruise comparisons for travelers who already know they want a premium or luxury experience. One brand leans more boutique, spacious, and quietly refined. The other leans more active, more included, and more established across a wider range of destinations. That difference matters because it affects the entire feel of the trip.</p>
                        <div className="vsa_trust_callout">
                            <div className="vsa_trust_badge">ELITE ADVICE</div>
                            <h3>Why Trust This Comparison</h3>
                            <p>This comparison is built for actual decision-making, not brochure language. It reflects how the two brands are positioned in the market today: Riverside with three all-suite ships in Europe and a more intimate luxury feel, and AmaWaterways with a much broader global footprint that includes Europe, Asia, Africa, and South America, along with extensive included shore experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE 1: AT A GLANCE */}
            <section className="vsa_table_section" id="vsa_differences">
                <div className="vsa_container_90">
                    <h2 className="vsa_section_h2">Key Differences at a Glance</h2>
                    <div className="vsa_table_box">
                        <div className="vsa_table_header_strip">Brand Comparison</div>
                        <div className="vsa_table_responsive">
                            <table className="vsa_comparison_table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Riverside</th>
                                        <th>AmaWaterways</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="vsa_row_riverside">
                                        <td><strong>Positioning</strong></td>
                                        <td>Boutique luxury</td>
                                        <td>Premium to premium-plus</td>
                                    </tr>
                                    <tr className="vsa_row_ama">
                                        <td><strong>Fleet Style</strong></td>
                                        <td>Three all-suite European ships</td>
                                        <td>Larger global fleet</td>
                                    </tr>
                                    <tr className="vsa_row_alt">
                                        <td><strong>Best For</strong></td>
                                        <td>Space & Quiet Refinement</td>
                                        <td>Included Activity & Variety</td>
                                    </tr>
                                    <tr className="vsa_row_riverside">
                                        <td><strong>Atmosphere</strong></td>
                                        <td>Calm, intimate, less structured</td>
                                        <td>Social, active, program driven</td>
                                    </tr>
                                    <tr className="vsa_row_ama">
                                        <td><strong>Destinations</strong></td>
                                        <td>Europe only</td>
                                        <td>Global (Global Footprint)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="vsa_table_footer_text">These differences are not small. They shape who each brand is actually best for. Riverside currently operates three all-suite ships in Europe, while AmaWaterways markets more than 100 itineraries across 32 countries.</p>
                </div>
            </section>

            {/* COMPARISON TABLE 2: FEATURES */}
            <section className="vsa_table_section vsa_bg_light" id="vsa_features">
                <div className="vsa_container_90">
                    <h2 className="vsa_section_h2">Riverside vs AmaWaterways: Key Features Compared</h2>
                    <div className="vsa_table_box">
                        <div className="vsa_table_header_strip">Experience Breakdown</div>
                        <div className="vsa_table_responsive">
                            <table className="vsa_comparison_table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Riverside</th>
                                        <th>AmaWaterways</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="vsa_row_riverside">
                                        <td><strong>Cabin Feel</strong></td>
                                        <td>More suite-forward and spacious</td>
                                        <td>Well-appointed, less suite-centric</td>
                                    </tr>
                                    <tr className="vsa_row_ama">
                                        <td><strong>Excursions</strong></td>
                                        <td>Pre-selected in each port</td>
                                        <td>Multiple activity levels (Hike/Bike)</td>
                                    </tr>
                                    <tr className="vsa_row_alt">
                                        <td><strong>Dining</strong></td>
                                        <td>Stronger boutique hotel feel</td>
                                        <td>Regionally inspired cruise rhythm</td>
                                    </tr>
                                    <tr className="vsa_row_riverside">
                                        <td><strong>Included Drinks</strong></td>
                                        <td>Varies by package/ship</td>
                                        <td>Complimentary at meals + Sip & Sail</td>
                                    </tr>
                                    <tr className="vsa_row_ama">
                                        <td><strong>Geographic Reach</strong></td>
                                        <td>Rhine, Danube, Rhône, Saône</td>
                                        <td>Mekong, Nile, Africa, Colombia</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="vsa_table_footer_text">Riverside emphasizes space and Wi-Fi inclusions, while AmaWaterways highlights beverage programs and active shore excursions.</p>
                </div>
            </section>

            {/* DEEP DIVE SECTION */}
            <section className="vsa_deep_dive_section">
                <div className="vsa_container_90">
                    <div className="vsa_split_layout">
                        <div className="vsa_dive_card">
                            <Ship className="vsa_dive_icon" />
                            <h3>Riverside: Boutique Luxury Hotel</h3>
                            <p>Riverside is for the traveler who notices space immediately and values it. The brand’s three-ship fleet is built around all-suite river ships, offering personalized service, serene spaces, and a sophisticated environment. It is the right lane for those who want river cruising to feel quieter, more residential, and less programmed.</p>
                        </div>
                        <div className="vsa_dive_card vsa_highlight_border">
                            <Zap className="vsa_dive_icon" />
                            <h3>AmaWaterways: Active & Established</h3>
                            <p>AmaWaterways is one of the most recognizable names because it gives travelers structure and choice. With 100+ itineraries in 32 countries and experiences ranging from city walks to hikes and bike rides, it appeals to travelers who want an active style and broad destination choices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING INSIGHT BOX */}
            <section className="vsa_logic_section vsa_bg_light">
                <div className="vsa_container_90">
                    <div className="vsa_pricing_pill_box">
                        <div className="vsa_pill_header">PRICING COMPARISON</div>
                        <p>Riverside generally belongs in the conversation when a client is comfortable paying for more space, a more intimate onboard feel, and a more boutique luxury positioning. AmaWaterways often appeals to travelers who still want a premium experience but place more value on included touring, active excursions, and a larger choice set of itineraries and destinations.</p>
                        <div className="vsa_positioning_summary">
                            I would position <strong>Riverside</strong> as the more boutique luxury choice and <strong>AmaWaterways</strong> as the stronger inclusion-and-activity value play.
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST FOR PILLS */}
            <section className="vsa_best_for_section">
                <div className="vsa_container_90">
                    <h2 className="vsa_section_h2">Which River Cruise Is Best for You?</h2>
                    <div className="vsa_best_pills_container">
                        <div className="vsa_best_pill"><span>Quieter Atmosphere:</span> Riverside</div>
                        <div className="vsa_best_pill"><span>Active Travelers:</span> AmaWaterways</div>
                        <div className="vsa_best_pill"><span>Destination Variety:</span> AmaWaterways</div>
                        <div className="vsa_best_pill"><span>Suite-Style Space:</span> Riverside</div>
                        <div className="vsa_best_pill"><span>First-Time Premium:</span> AmaWaterways</div>
                        <div className="vsa_best_pill"><span>Boutique European:</span> Riverside</div>
                    </div>
                    <p className="vsa_section_footer_text">Riverside concentrates on a smaller all-suite luxury product in Europe, while AmaWaterways emphasizes broad itinerary choice and varied included shore experiences.</p>
                </div>
            </section>

            {/* BIGGEST MISTAKE BANNER */}
            <section className="vsa_mistake_section">
                <div className="vsa_container_90">
                    <div className="vsa_alert_box">
                        <div className="vsa_alert_icon_side"><ShieldCheck size={40} /></div>
                        <div className="vsa_alert_content">
                            <h3>The Biggest Mistake Travelers Make</h3>
                            <p>Most travelers think this is simply a choice between two river cruise lines in the same category. It is not. In reality, they are often choosing between two different priorities: more space and a boutique onboard feel, or more activity, shore touring, and destination variety. fit matters more than the brand name alone.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHOICE GRID */}
            <section className="vsa_choice_section">
                <div className="vsa_container_90">
                    <div className="vsa_choice_grid">
                        <div className="vsa_choice_col">
                            <div className="vsa_choice_tag vsa_tag_blue">CHOOSE RIVERSIDE</div>
                            <ul className="vsa_choice_ul">
                                <li><CheckCircle size={18} /> Boutique luxury river cruise atmosphere</li>
                                <li><CheckCircle size={18} /> Suite space and quieter onboard environment</li>
                                <li><CheckCircle size={18} /> Focus on Europe and intimate feel</li>
                                <li><CheckCircle size={18} /> Product that feels like a luxury hotel on water</li>
                            </ul>
                        </div>
                        <div className="vsa_choice_col">
                            <div className="vsa_choice_tag vsa_tag_navy">CHOOSE AMAWATERWAYS</div>
                            <ul className="vsa_choice_ul">
                                <li><CheckCircle size={18} /> Destination choice beyond Europe</li>
                                <li><CheckCircle size={18} /> Included touring and active excursion options</li>
                                <li><CheckCircle size={18} /> Established, recognizable global brand</li>
                                <li><CheckCircle size={18} /> Social, active, program-rich pace</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERT INSIGHT BLOCKS */}
            <section className="vsa_expert_quote_section" id="vsa_expert">
                <div className="vsa_container_90">
                    <div className="vsa_expert_grid">
                        <div className="vsa_expert_box">
                            <Star className="vsa_quote_icon" />
                            <div className="vsa_expert_label">EXPERT INSIGHT</div>
                            <p>"Most clients comparing Riverside and AmaWaterways are not comparing equals. They are usually choosing between a more spacious boutique European experience and a more activity-rich river cruise with broader destination reach."</p>
                        </div>
                        <div className="vsa_expert_box vsa_navy_box">
                            <Award className="vsa_quote_icon" />
                            <div className="vsa_expert_label">EXPERT INSIGHT</div>
                            <p>"AmaWaterways is especially strong for travelers who want the cruise line to do more of the organizing ashore, while Riverside is compelling for travelers who care more about onboard space, quieter luxury, and a less crowded feel."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW TO CHOOSE */}
            <section className="vsa_final_advice">
                <div className="vsa_container_90">
                    <h2 className="vsa_section_h2">How to Choose the Right River Cruise</h2>
                    <div className="vsa_advice_text_box">
                        <p>Choosing between Riverside and AmaWaterways is not about finding the universally better brand. It is about matching the right style of river cruise to the right traveler. If the client wants Europe, space, and a more boutique luxury atmosphere, lean Riverside. If the client wants more included activity, more geographic choice, and a deeper bench of itineraries, lean AmaWaterways.</p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="vsa_cta_section_main" id="vsa_cta">
                <div className="vsa_container_90">
                    <div className="vsa_cta_premium_card">
                        <h2 className="vsa_cta_h2">Plan Your River Cruise the Right Way</h2>
                        <p className="vsa_cta_p">Work with an expert to match the right cruise line to your travel style, priorities, and budget.</p>
                        <div className="vsa_cta_button_group">
                            <button className="vsa_cta_btn_filled">Plan My River Cruise</button>
                            <button className="vsa_cta_btn_outline">Work With Angela Hughes</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTHORITY BLOCK */}
            <section className="vsa_authority_bio_section">
                <div className="vsa_container_90">
                    <div className="vsa_auth_balanced_grid">
                        <div className="vsa_auth_img_side">
                            <div className="vsa_profile_frame">
                                <img src="/angela-hughes-portrait.png" alt="Angela Hughes" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('vsa_fallback_ava'); }} />
                                <div className="vsa_profile_sig">Angela Hughes</div>
                            </div>
                            <div className="vsa_auth_stats">
                                <div className="vsa_stat_pill"><Award size={14} /> 40+ Years</div>
                                <div className="vsa_stat_pill"><Users size={14} /> 140+ Advisors</div>
                                <div className="vsa_stat_pill"><Globe size={14} /> Global Expert</div>
                            </div>
                        </div>
                        <div className="vsa_auth_content_side">
                            <h2 className="vsa_auth_h2_name">About Angela Hughes and Trips & Ships Luxury Travel</h2>
                            <p className="vsa_auth_intro_text">When you are comparing river cruise lines like Riverside Luxury Cruises and AmaWaterways, you are choosing the experience that will define your entire trip.</p>
                            <div className="vsa_auth_scroll_box">
                                <p>Angela Hughes brings more than 40 years of experience in the travel industry and is widely recognized as a leading voice in luxury travel, river cruising, and global itinerary design. As CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University, she leads a network of over 140 travel advisors.</p>
                                <p>Her work has been featured in Travel Weekly, TravelAge West, and more. Angela and her team are independent advisors—they work across brands like Riverside and AmaWaterways, ensuring recommendations are based on experience and client fit, not supplier bias.</p>
                            </div>
                            <div className="vsa_auth_firm_box">
                                <strong>Trips & Ships Luxury Travel helps clients:</strong>
                                <ul className="vsa_auth_ul">
                                    <li>compare cruise lines with clarity</li>
                                    <li>identify the right experience for their style</li>
                                    <li>avoid costly planning mistakes</li>
                                    <li>maximize both value and overall experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="vsa_faq_section" id="vsa_faq">
                <div className="vsa_container_90">
                    <h2 className="vsa_faq_h2">Frequently Asked Questions</h2>
                    <div className="vsa_faq_accordion">
                        {[
                            { q: "What is the difference between Riverside and AmaWaterways", a: "Riverside is a boutique luxury river cruise line with three all-suite European ships, while AmaWaterways is an established river cruise brand with 100+ itineraries across 32 countries and a strong emphasis on included activity." },
                            { q: "Which is better Riverside or AmaWaterways", a: "Neither is better for everyone. Riverside is better for travelers seeking more space and a quieter atmosphere; AmaWaterways is best for those wanting activity and destination range." },
                            { q: "Is Riverside more luxurious than AmaWaterways", a: "Riverside is positioned in the boutique luxury lane due to all-suite ships; AmaWaterways is premium to premium-plus with a focus on guided tours." },
                            { q: "What is included on Riverside compared with AmaWaterways", a: "Riverside includes Wi-Fi, pre-selected excursions, and port charges. AmaWaterways highlights guided tours and beverages during meals plus cocktail hours." },
                            { q: "Which river cruise line has more destinations", a: "AmaWaterways, which operates in Europe, Asia, Africa, and South America." },
                            { q: "Which is better for active travelers", a: "AmaWaterways, because of its wide range of included city walks, hikes, and bike rides." },
                            { q: "Which is better for couples seeking a quieter experience", a: "Riverside, for its spacious, less crowded, and more boutique onboard environment." },
                            { q: "Is AmaWaterways good for first-time river cruisers", a: "Yes, it is excellent for first-timers due to its broad itinerary selection and all-included guided experiences." },
                            { q: "Which has larger cabins, Riverside or AmaWaterways", a: "Riverside has the edge for size as its entire fleet is explicitly all-suite." },
                            { q: "Is Riverside all-inclusive", a: "It includes many core elements, but package details vary depending on the ship and specific package selected." },
                            { q: "What is the best luxury river cruise line for Europe", a: "It depends on style: Riverside for boutique/space, AmaWaterways for activity/choice." },
                            { q: "Is Riverside or AmaWaterways better for first-time luxury travelers", a: "AmaWaterways is often easier for those who want a structured program; Riverside is better for those who prefer an intentional luxury hotel feel." }
                        ].map((faq, idx) => (
                            <div key={idx} className="vsa_faq_item">
                                <button className={`vsa_faq_btn ${expandedFaq === idx ? 'expanded' : ''}`} onClick={() => toggleFaq(idx)}>
                                    <span className="vsa_faq_q">{faq.q}?</span>
                                    {expandedFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </button>
                                {expandedFaq === idx && (
                                    <div className="vsa_faq_ans">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RiversidevsAmaWaterways;