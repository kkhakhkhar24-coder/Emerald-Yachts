import React, { useState, useEffect } from 'react';
import "./RiversideLuxuryCruises.css"
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
  Minus 
} from "lucide-react";

const RiversideLuxuryCruises = () => {
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="riv_page_main_container">
      {/* NAVBAR */}
      <Navbar />

      {/* STICKY JUMP NAVIGATION (OPTIONAL, BUT USER REMOVED IT IN PREVIOUS TURN, I WILL KEEP IT CONSISTENT WITH NAV) */}

      {/* HERO SECTION */}
      <section className="riv_hero_viewport">
        <div className="riv_hero_image_slider">
          {heroImages.map((img, index) => (
            <div 
              key={index} 
              className={`riv_hero_bg_slide ${currentSlide === index ? 'riv_active_slide' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/${img})` }}
            ></div>
          ))}
        </div>
        
        <div className="riv_hero_overlay_content">
          <div className="riv_container_90">
            <div className="riv_hero_text_box">
              <h1 className="riv_hero_main_h1">Riverside Luxury Cruises: A Boutique Luxury River Cruise Experience in Europe</h1>
              <p className="riv_hero_sub_p">Spacious ships, elevated service, and a refined approach to European river cruising</p>
              
              <div className="riv_hero_read_more_outer">
                <button 
                  className="riv_hero_read_more_btn" 
                  onClick={() => setShowQuickTake(!showQuickTake)}
                >
                  {showQuickTake ? 'Show Less' : 'Read Quick Take'}
                  {showQuickTake ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {showQuickTake && (
                  <div className="riv_hero_quick_take_dropdown">
                    <p>Riverside Luxury Cruises is one of the best boutique luxury river cruise lines in Europe, ideal for experienced travelers who want more space, elevated service, and a quieter onboard experience than traditional river cruises.</p>
                  </div>
                )}
              </div>

              <div className="riv_hero_button_group">
                <button className="riv_hero_btn_filled">View Riverside Pricing</button>
                <button className="riv_hero_btn_transparent">Compare River Cruise Lines</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="riv_intro_premium_section" id="riv_overview_section">
        <div className="riv_container_90">
          <div className="riv_intro_content_block">
            <div className="riv_intro_decorative_line"></div>
            <h2 className="riv_intro_highlight_text">
              There are very few brands in river cruising that truly elevate the experience. <span>Riverside Luxury Cruises is one of them.</span>
            </h2>
            <div className="riv_intro_p_box">
              <p className="riv_intro_p_text">
                Built on the legacy of the former Crystal river ships, Riverside delivers a more refined, spacious, and quietly luxurious way to experience Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST & WHERE IT FITS (TRUST SECTION) */}
      <section className="riv_trust_modern_box">
        <div className="riv_container_90">
          <div className="riv_trust_layout_grid">
            <div className="riv_trust_card_panel">
              <div className="riv_trust_badge">ELITE EXPERTISE</div>
              <h2 className="riv_trust_h2_title">Why Trust This Guide</h2>
              <div className="riv_trust_points_container">
                <div className="riv_trust_point">
                  <CheckCircle size={20} className="riv_point_icon" />
                  <p>Firsthand industry experience</p>
                </div>
                <div className="riv_trust_point">
                  <CheckCircle size={20} className="riv_point_icon" />
                  <p>Client booking data across 140+ advisors</p>
                </div>
                <div className="riv_trust_point">
                  <CheckCircle size={20} className="riv_point_icon" />
                  <p>Direct relationships with river cruise lines</p>
                </div>
              </div>
            </div>
            <div className="riv_fits_card_panel">
              <h2 className="riv_fits_h2_title">Where Riverside Fits</h2>
              <p className="riv_fits_description">Riverside sits between premium and ultra-luxury river cruise lines.</p>
              <div className="riv_fits_features">
                <div className="riv_fit_tag">More Space</div>
                <div className="riv_fit_tag">Boutique Luxury</div>
                <div className="riv_fit_tag">Refined Service</div>
              </div>
              <ul className="riv_fits_list_detail">
                <li>more space than premium brands</li>
                <li>less rigid than ultra all-inclusive</li>
                <li>boutique luxury positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLES */}
      <section className="riv_comparison_table_section" id="riv_comparison_section">
        <div className="riv_container_90">
          <h2 className="riv_comp_main_h2">Compare the Best River Cruises</h2>
          
          <div className="riv_table_container_box">
            <div className="riv_table_label">River Cruise Brand Positioning</div>
            <div className="riv_responsive_table_holder">
              <table className="riv_striped_table">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Positioning</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="riv_row_riverside"><td>Riverside Luxury Cruises</td><td>Boutique luxury</td><td>Experienced travelers</td></tr>
                  <tr className="riv_row_viking"><td>Viking River Cruises</td><td>Premium</td><td>First-time cruisers</td></tr>
                  <tr className="riv_row_ama"><td>AmaWaterways</td><td>Premium+</td><td>Active travelers</td></tr>
                  <tr className="riv_row_avalon"><td>Avalon Waterways</td><td>Premium</td><td>Value travelers</td></tr>
                  <tr className="riv_row_scenic"><td>Scenic Luxury Cruises & Tours</td><td>Ultra-luxury</td><td>All-inclusive luxury</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="riv_table_container_box_2">
            <div className="riv_table_label">Riverside vs Other Lines</div>
            <div className="riv_responsive_table_holder">
              <table className="riv_striped_table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Riverside</th>
                    <th>Premium</th>
                    <th>Ultra-Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="riv_feat_row_space"><td>Space</td><td>High</td><td>Moderate</td><td>High</td></tr>
                  <tr className="riv_feat_row_vibe"><td>Atmosphere</td><td>Boutique</td><td>Structured</td><td>Formal</td></tr>
                  <tr className="riv_feat_row_inc"><td>Inclusions</td><td>Moderate</td><td>Moderate</td><td>Extensive</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="riv_pricing_card_section" id="riv_pricing_section">
        <div className="riv_container_90">
          <h2 className="riv_pricing_center_h2">Riverside Pricing</h2>
          <p className="riv_pricing_top_p">Typical pricing categories for European river cruises:</p>
          <div className="riv_pricing_three_card_grid">
            <div className="riv_price_unit_card">
              <h4 className="riv_price_type_h4">Entry</h4>
              <div className="riv_price_value_display">$4,000–$6,500</div>
              <button className="riv_price_action_btn">View Details</button>
            </div>
            <div className="riv_price_unit_card riv_price_feature_glow">
              <div className="riv_price_best_label">RECOMMENDED</div>
              <h4 className="riv_price_type_h4">Mid-Tier</h4>
              <div className="riv_price_value_display">$6,500–$10,000</div>
              <button className="riv_price_action_btn_filled">Check Availability</button>
            </div>
            <div className="riv_price_unit_card">
              <h4 className="riv_price_type_h4">Suites</h4>
              <div className="riv_price_value_display">$10,000+</div>
              <button className="riv_price_action_btn">View Luxury Suites</button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="riv_experience_insight_section" id="riv_ships_section">
        <div className="riv_container_90">
          <div className="riv_experience_split_layout">
            <div className="riv_experience_text_side">
              <h2 className="riv_experience_h2_title">Experience</h2>
              <div className="riv_experience_scroll_box">
                <p className="riv_experience_main_p">Sailing with Riverside feels calm, intentional, and refined.</p>
                <div className="riv_expert_callout_box">
                  <div className="riv_expert_top_bar">EXPERT INSIGHT</div>
                  <p>Most clients upgrade from Viking River Cruises or AmaWaterways seeking more space and better service.</p>
                </div>
              </div>
            </div>
            <div className="riv_experience_media_side">
              <div className="riv_exp_img_frame">
                <img src="/luxury_river_cruise_3.png" alt="Riverside Life" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST TIME TO SAIL (SEO SECTION) - NEW UI WITH LUCIDE */}
      <section className="riv_itinerary_premium_section">
        <div className="riv_container_90">
          <div className="riv_itinerary_grid_layout">
            <div className="riv_itinerary_card_ui">
              <div className="riv_itin_icon_circle">
                <Calendar size={32} />
              </div>
              <div className="riv_itin_content_ui">
                <h2 className="riv_itinerary_h2_title">Best Time to Take a Riverside River Cruise</h2>
                <div className="riv_itin_highlight_box">
                   <Clock size={16} />
                   <span>Peak Seasons</span>
                </div>
                <p className="riv_itinerary_p_text">Spring and fall offer the best value and weather.</p>
              </div>
            </div>
            <div className="riv_itinerary_card_ui">
              <div className="riv_itin_icon_circle">
                <Compass size={32} />
              </div>
              <div className="riv_itin_content_ui">
                <h2 className="riv_itinerary_h2_title">Best Riverside Itineraries</h2>
                <div className="riv_itin_highlight_box">
                   <MapPin size={16} />
                   <span>Top Routes</span>
                </div>
                <p className="riv_itinerary_p_text">Rhine for first-time travelers, Danube for experienced.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS & WHO IT'S FOR */}
      <section className="riv_who_why_section">
        <div className="riv_container_90">
          <div className="riv_who_why_split">
            <div className="riv_objections_panel">
              <h2 className="riv_obj_h2_title">Common Objections</h2>
              <div className="riv_obj_item_box">
                <strong>Is it worth the price?</strong>
                <p>Yes for luxury travelers</p>
              </div>
              <div className="riv_obj_item_box">
                <strong>Too quiet?</strong>
                <p>Designed to be relaxed</p>
              </div>
              <div className="riv_obj_item_box">
                <strong>All-inclusive?</strong>
                <p>Not fully, but strong inclusions</p>
              </div>
            </div>
            <div className="riv_vibe_panel">
              <h2 className="riv_vibe_h2_title">Who It's For</h2>
              <div className="riv_vibe_group">
                <div className="riv_vibe_positive">
                  <strong>Best For:</strong>
                  <ul>
                    <li>experienced travelers</li>
                    <li>luxury couples</li>
                  </ul>
                </div>
                <div className="riv_vibe_negative">
                  <strong>Not For:</strong>
                  <ul>
                    <li>budget travelers</li>
                    <li>entry-level cruisers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (ABOVE ANGELA) */}
      <section className="riv_cta_footer_section" id="riv_cta_footer_section">
        <div className="riv_container_90">
          <div className="riv_cta_footer_box">
            <h2 className="riv_cta_footer_h2">Plan Your Riverside Experience</h2>
            <p className="riv_cta_footer_p">Choosing the right itinerary and cabin matters. Work with an expert to ensure the right fit.</p>
            <button className="riv_cta_footer_action_btn">Plan My River Cruise</button>
          </div>
        </div>
      </section>

      {/* AUTHORITY BLOCK - ANGELA HUGHES (BALANCED UI) */}
      <section className="riv_authority_bio_section">
        <div className="riv_container_90">
          <div className="riv_authority_balanced_grid">
            <div className="riv_auth_media_column">
              <div className="riv_profile_frame_new">
                 <img src="/angela-hughes-portrait.png" alt="Angela Hughes" onError={(e) => {e.target.style.display='none'; e.target.parentElement.classList.add('riv_fallback_avatar');}} />
                 <div className="riv_auth_signature">Angela Hughes</div>
              </div>
              <div className="riv_auth_quick_stats">
                 <div className="riv_stat_pill"><Award size={14}/> 40+ Years</div>
                 <div className="riv_stat_pill"><Users size={14}/> 140+ Advisors</div>
                 <div className="riv_stat_pill"><Star size={14}/> Top Influencer</div>
              </div>
            </div>
            <div className="riv_auth_content_wrap">
              <h2 className="riv_auth_h2_name">About Angela Hughes and Trips & Ships Luxury Travel</h2>
              <p className="riv_auth_intro_text">
                When evaluating luxury river cruise lines, the difference between a good experience and the right experience comes down to expertise. Angela Hughes is one of the most recognized voices in the luxury travel industry.
              </p>
              <div className="riv_auth_scrollable_text">
                <p className="riv_auth_body_text">
                  With more than 40 years in travel, Angela is the CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University. She leads a network of over 140 travel advisors and has personally sold millions in luxury travel annually across cruise, expedition, and global itineraries.
                </p>
                <p className="riv_auth_body_text">
                  Angela has been featured in Travel Weekly, TravelAge West, Travel Market Report, Insider Travel Report, and more. She has been recognized as Luxury Travel Influencer of the Year by Travel Leaders Network and regularly speaks at global industry conferences.
                </p>
                <p className="riv_auth_body_text">
                  She works across all major river cruise lines, including Riverside Luxury Cruises, Viking River Cruises, and AmaWaterways, ensuring recommendations are based on real experience and client fit—not a single supplier.
                </p>
              </div>
              <div className="riv_auth_firm_desc">
                <strong>Trips & Ships Luxury Travel operates as a high-level advisory firm, helping clients:</strong>
                <ul className="riv_auth_feature_list_points">
                  <li>compare cruise lines with clarity</li>
                  <li>select the right experience</li>
                  <li>avoid costly mistakes</li>
                  <li>maximize value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL THOUGHTS */}
      <section className="riv_closing_thoughts_section">
        <div className="riv_container_90">
          <div className="riv_closing_line_box">
             <h2 className="riv_closing_h2">Final Thoughts</h2>
             <p className="riv_closing_p">Riverside is not for everyone—and that is exactly its strength. For travelers seeking a refined, spacious, and more intentional river cruise experience, it stands out as one of the best in Europe.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (MATCHING OTHER PAGES) */}
      <section className="riv_faq_standard_section" id="riv_faq_section">
        <div className="riv_container_90">
          <h2 className="riv_faq_header_h2">Frequently Asked Questions</h2>
          <div className="riv_faq_accordion_std">
            {[
              { question: "What is Riverside Luxury Cruises known for", answer: "Riverside Luxury Cruises is known for spacious ships and boutique luxury service." },
              { question: "How much does a Riverside river cruise cost", answer: "$4,000 to $10,000+ depending on suite and itinerary." },
              { question: "Is Riverside a luxury river cruise line", answer: "Yes, it is positioned as boutique luxury." },
              { question: "What rivers does Riverside sail", answer: "Danube, Rhine, and Main." },
              { question: "What ships are in the fleet", answer: "Mozart, Debussy, and Ravel." },
              { question: "Is Riverside all-inclusive", answer: "Partially, but not fully all-inclusive." },
              { question: "How does it compare to Viking", answer: "More space and boutique experience than Viking River Cruises." },
              { question: "Is it better than AmaWaterways", answer: "Depends on preference; Riverside is quieter and more refined than AmaWaterways." },
              { question: "Who should choose Riverside", answer: "Experienced luxury travelers." },
              { question: "Are excursions included", answer: "Some are included; varies by itinerary." },
              { question: "What makes it different", answer: "Space, service, boutique feel." },
              { question: "Is it worth it", answer: "Yes for travelers prioritizing experience." }
            ].map((faq, index) => (
              <div key={index} className="riv_faq_unit_item">
                <button 
                  className={`riv_faq_unit_btn ${expandedFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="riv_faq_q_text">{faq.question}?</span>
                  <span className="riv_faq_icon_status">
                    {expandedFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="riv_faq_unit_ans">
                    <p>{faq.answer}</p>
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

export default RiversideLuxuryCruises;
