import Navbar from '../../components/Navbar/Navbar'
import './AzamaraMediterraneanCruises.css'
import azamaraShip from "../../assets/image.webp"
import greeceCruise from '../../assets/AzamaraCabinsGuide/Cruise_balcony_view.webp'
import italyCruise from '../../assets/HomePage/Refined_Luxury.jpeg'
import croatiaCoast from '../../assets/DistinctiveVoyageSailings/singapore-marina-bay-sands-skyline-luxury-travel.png'
import luxurySuite from '../../assets/SecondPage/Suite.webp'
import destinationDining from '../../assets/AzamaraCabinsGuide/Casual_Dining.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/HomePage/HomePage1.webp'
import hero2 from '../../assets/SecondPage/SecondPage2.webp'
import hero3 from '../../assets/SecondPage/SecondPage6.webp'

function MediterraneanCruises() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const mediItineraries = [
        {
            title: 'Greece & Greek Isles Cruises',
            bestFor: ['First-time Mediterranean cruisers', 'Couples', 'Scenic island experiences', 'Cultural travelers'],
            highlights: ['Santorini', 'Mykonos', 'Rhodes', 'Crete', 'Athens']
        },
        {
            title: 'Italy Intensive Cruises',
            bestFor: ['Food and wine lovers', 'History enthusiasts', 'Luxury cultural travel'],
            highlights: ['Rome', 'Florence', 'Sicily', 'Amalfi Coast', 'Venice']
        },
        {
            title: 'Croatia & Adriatic Voyages',
            bestFor: ['Boutique luxury seekers', 'Yacht-style atmosphere lovers', 'Scenic coastal exploration'],
            highlights: ['Dubrovnik', 'Split', 'Kotor', 'Montenegro', 'Slovenia']
        },
        {
            title: 'Spain & Western Mediterranean Cruises',
            bestFor: ['Culinary travelers', 'Art and architecture enthusiasts', 'Sophisticated European cruising'],
            highlights: ['Barcelona', 'Valencia', 'Nice', 'Marseille', 'Palma de Mallorca']
        }
    ]

    const mediFaqs = [
        { question: 'Are Azamara Mediterranean cruises worth it?', answer: 'Yes. Azamara offers immersive Mediterranean experiences with smaller ships, longer port stays, and boutique luxury service.' },
        { question: 'What makes Azamara different in the Mediterranean?', answer: 'Azamara focuses heavily on destination immersion, overnight stays, and smaller boutique ports.' },
        { question: 'Which Azamara Mediterranean itinerary is best?', answer: 'Greek Isles and Italy-intensive itineraries are especially popular among luxury travelers.' },
        { question: 'Is Azamara considered luxury?', answer: 'Azamara is considered an upper-premium boutique cruise line with many luxury-level features.' },
        { question: 'Are Azamara Mediterranean cruises all inclusive?', answer: 'Azamara includes gratuities, select beverages, cultural events, and various onboard amenities.' },
        { question: 'Which Mediterranean destinations does Azamara do best?', answer: 'Greece, Italy, Croatia, Spain, and immersive Adriatic itineraries are standout strengths.' },
        { question: 'Is Azamara good for couples?', answer: 'Yes. The intimate atmosphere and destination-focused experience appeal strongly to couples.' },
        { question: 'When should travelers book Mediterranean cruises?', answer: 'Luxury Mediterranean cruises should ideally be booked 9–18 months in advance.' },
        { question: 'Does Azamara attract younger travelers?', answer: 'While Azamara primarily attracts experienced travelers, younger affluent travelers increasingly appreciate immersive cruising.' },
        { question: 'Which Azamara ship is best for Mediterranean cruises?', answer: 'Azamara Journey and Azamara Onward are especially popular for Mediterranean itineraries.' },
        { question: 'Is Azamara better than Oceania in the Mediterranean?', answer: 'Azamara emphasizes destination immersion while Oceania is particularly known for culinary experiences.' },
        { question: 'What is the dress code on Azamara Mediterranean cruises?', answer: 'Azamara maintains a relaxed luxury atmosphere with resort-casual elegance.' },
        { question: 'Are Azamara shore excursions worth it?', answer: 'Many travelers value Azamara\'s curated cultural excursions and immersive local experiences.' },
        { question: 'Why use a luxury cruise advisor for Mediterranean cruises?', answer: 'Luxury advisors help travelers maximize value, secure preferred accommodations, and select the best itineraries.' }
    ]

    const mediDifferentiators = [
        { icon: Clock, title: 'Extended Port Stays', desc: 'Late-night departures and overnight stays in iconic destinations like Venice, Barcelona, and Santorini' },
        { icon: Ship, title: 'Smaller Ship Access', desc: 'Boutique ships with ~700 guests access ports larger cruise ships cannot reach' },
        { icon: Compass, title: 'Destination Immersion', desc: 'Emphasis on local culture, culinary exploration, and authentic regional experiences' },
        { icon: Heart, title: 'Intimate Experience', desc: 'Relaxed luxury atmosphere with personalized service and sophisticated ambiance' }
    ]

    const mediMistakes = [
        { title: 'Choosing the Wrong Season', desc: 'Mediterranean cruising varies dramatically by season. Summer offers energy and nightlife, while spring and fall offer fewer crowds and milder weather.' },
        { title: 'Underestimating Port Intensity', desc: 'Many Mediterranean itineraries involve extensive walking, stairs, and active touring.' },
        { title: 'Waiting Too Long to Book Suites', desc: 'Premium Mediterranean sailings and suites often sell out 9–18 months in advance.' },
        { title: 'Choosing Large Ships for Boutique Destinations', desc: 'Large ships often cannot access smaller Mediterranean ports that make Azamara itineraries unique.' }
    ]

    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ]
            },
            {
                "@type": "TravelAgency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in cruises, expeditions, safaris, and premium travel experiences."
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Trips & Ships Luxury Travel"
                }
            },
            {
                "@type": "WebPage",
                "name": "Azamara Mediterranean Cruises",
                "url": "https://www.tripsandships.com/azamara-mediterranean-cruises",
                "description": "Expert Azamara Mediterranean cruise guide for luxury travelers."
            },
            {
                "@type": "BreadcrumbList",
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
                        "name": "Mediterranean Cruises",
                        "item": "https://www.tripsandships.com/mediterranean-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Azamara Mediterranean Cruises",
                        "item": "https://www.tripsandships.com/azamara-mediterranean-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": mediFaqs.slice(0, 5).map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Azamara Mediterranean Cruises Guide 2026 | Expert Luxury Cruise Insights</title>
                <meta name="description" content="Explore Azamara Mediterranean Cruises with expert luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Discover immersive Mediterranean itineraries, boutique luxury ships, extended port stays, and personalized cruise planning for 2026." />
                <meta name="keywords" content="Azamara Mediterranean Cruises, Luxury Mediterranean cruises, Azamara Europe cruises, Small ship Mediterranean cruises" />
                <script type="application/ld+json">
                    {JSON.stringify(mediSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Boutique Luxury Mediterranean Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Azamara Mediterranean Cruises: Boutique Luxury Across Europe's Most Iconic Destinations
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Discover immersive European experiences without the crowds of mega ships through Azamara's destination-focused approach
                    </p>
                    <div className="medi-hero-cta-container">
                        <div className="medi-cta-title-text">Start Planning Your Mediterranean Journey</div>
                        <div className="medi-cta-subtitle-text">
                            Work with recognized luxury cruise experts to design your perfect Mediterranean experience
                        </div>
                        <div className="medi-cta-features-row">
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={18} />
                                <span>Extended Port Stays</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={18} />
                                <span>Boutique Ship Experience</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={18} />
                                <span>Cultural Immersion</span>
                            </div>
                        </div>
                        <button className="medi-primary-cta-button">
                            <Phone size={18} />
                            Schedule Consultation
                        </button>
                        <div className="medi-hero-disclaimer-text">Expert guidance • 40+ years experience • 121+ countries visited</div>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="medi-intro-section">
                <div className="medi-intro-container">
                    <div className="medi-intro-grid-layout">
                        <div className="medi-intro-heading-column">
                            <h2 className="medi-section-heading">Discover Why Luxury Travelers Choose Azamara for Mediterranean Cruising</h2>
                            <div className="medi-heading-separator-bar"></div>
                        </div>
                        <div className="medi-intro-content-column">
                            <p className="medi-body-paragraph">
                                For sophisticated travelers seeking immersive European experiences without the crowds of mega ships, Azamara Mediterranean Cruises have become one of the most respected names in boutique luxury cruising.
                            </p>
                            <p className="medi-body-paragraph">
                                Unlike traditional cruise lines that rush from port to port, Azamara focuses on meaningful destination immersion through longer stays, overnight port experiences, smaller ship intimacy, curated cultural programming, access to boutique Mediterranean ports, and personalized luxury service.
                            </p>
                            <p className="medi-body-paragraph">
                                At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers select the ideal Mediterranean cruise experience based on decades of firsthand luxury travel expertise.
                            </p>
                            <div className="medi-intro-highlight-box">
                                With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes offers unmatched insight into luxury Mediterranean cruising.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY AZAMARA EXCELS */}
            <section className="medi-excellence-section">
                <div className="medi-excellence-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="medi-section-heading">Why Azamara Excels in the Mediterranean</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="medi-body-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            The Mediterranean is one of the world's most competitive luxury cruise markets. However, Azamara has carved out a unique niche by focusing on authentic European exploration.
                        </p>
                    </div>

                    <div className="medi-differentiators-grid">
                        {mediDifferentiators.map((item, idx) => (
                            <div key={idx} className="medi-differentiator-card">
                                <div className="medi-card-icon-wrapper">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="medi-card-title">{item.title}</h3>
                                <p className="medi-card-description">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ITINERARIES WITH IMAGE */}
            <section className="medi-itineraries-premium-section">
                <div className="medi-itineraries-layout-container">
                    <div className="medi-itineraries-image-panels">
                        <div className="medi-image-panel medi-panel-one">
                            <img src={greeceCruise} alt="Greece cruise" />
                        </div>
                        <div className="medi-image-panel medi-panel-two">
                            <img src={italyCruise} alt="Italy cruise" />
                        </div>
                        <div className="medi-image-panel medi-panel-three">
                            <img src={croatiaCoast} alt="Croatia coast" />
                        </div>
                        <div className="medi-side-vertical-label">DESTINATIONS</div>
                    </div>

                    <div className="medi-itineraries-text-content">
                        <h2 className="medi-itineraries-main-heading">Best Azamara Mediterranean Itineraries</h2>
                        <div className="medi-heading-separator-bar"></div>

                        {mediItineraries.map((itinerary, idx) => (
                            <div key={idx} className="medi-itinerary-block">
                                <h3 className="medi-itinerary-title">{itinerary.title}</h3>
                                <div className="medi-itinerary-best-for">
                                    <strong>Best For:</strong>
                                    <ul className="medi-itinerary-list">
                                        {itinerary.bestFor.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="medi-itinerary-highlights">
                                    <strong>Highlights:</strong> {itinerary.highlights.join(', ')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERT INSIGHT */}
            <section className="medi-expert-section">
                <div className="medi-expert-container">
                    <div className="medi-expert-layout-grid">
                        <div className="medi-expert-portrait-area">
                            <div className="medi-portrait-frame">
                                <img src={azamaraShip} alt="Angela Hughes" />
                            </div>
                            <div className="medi-expert-watermark-icon">
                                <Award size={400} />
                            </div>
                        </div>

                        <div className="medi-expert-text-area">
                            <div className="medi-expert-badge-label">Expert Insight</div>
                            <h2 className="medi-expert-main-heading">Angela Hughes on Mediterranean Small-Ship Cruising</h2>
                            <div className="medi-heading-separator-bar"></div>

                            <p className="medi-expert-paragraph">
                                According to Angela Hughes, sophisticated travelers increasingly prefer boutique Mediterranean cruise experiences over mega-ship tourism.
                            </p>
                            <p className="medi-expert-paragraph">
                                After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees travelers prioritizing authenticity, flexibility, destination immersion, personalized service, fewer crowds, and cultural connection.
                            </p>

                            <div className="medi-credentials-list">
                                <div className="medi-credential-item">
                                    <Star className="medi-credential-icon" size={20} />
                                    <span>CEO of Trips & Ships Luxury Travel</span>
                                </div>
                                <div className="medi-credential-item">
                                    <Star className="medi-credential-icon" size={20} />
                                    <span>Founder of Luxury Travel University</span>
                                </div>
                                <div className="medi-credential-item">
                                    <Star className="medi-credential-icon" size={20} />
                                    <span>2024 Luxury Travel Influencer of the Year</span>
                                </div>
                                <div className="medi-credential-item">
                                    <Star className="medi-credential-icon" size={20} />
                                    <span>Travel Leaders Network Advisory Board</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IS AZAMARA LUXURY */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">DEFINING LUXURY</span>
                        <h2 className="medi-luxury-heading">Is Azamara Truly Luxury?</h2>

                        <p className="medi-luxury-paragraph">
                            Azamara is best described as "Boutique upper-premium luxury with strong destination immersion."
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Luxury travelers appreciate Azamara for:</h3>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Personalized service</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Gourmet dining</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Intimate ship atmosphere</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Elevated itineraries</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Longer stays in port</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Relaxed sophistication</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                However, travelers expecting ultra-luxury experiences comparable to Seabourn, Silversea Cruises, or Regent Seven Seas Cruises should understand Azamara delivers a more approachable and destination-centric luxury style.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For many experienced travelers, that balance is exactly the appeal.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={luxurySuite} alt="Azamara luxury suite" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* COMMON MISTAKES */}
            <section className="medi-mistakes-section">
                <div className="medi-mistakes-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="medi-section-heading">Common Mistakes Travelers Make When Booking Mediterranean Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-mistakes-grid">
                        {mediMistakes.map((mistake, idx) => (
                            <div key={idx} className="medi-mistake-card">
                                <div className="medi-mistake-number">{String(idx + 1).padStart(2, '0')}</div>
                                <h3 className="medi-mistake-title">{mistake.title}</h3>
                                <p className="medi-mistake-description">{mistake.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO SHOULD CHOOSE */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Who Should Choose Azamara Mediterranean Cruises?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                <li>Experienced travelers</li>
                                <li>Couples</li>
                                <li>Empty nesters</li>
                                <li>Destination-focused cruisers</li>
                                <li>Luxury travelers seeking intimacy</li>
                                <li>Cultural explorers</li>
                                <li>Travelers avoiding mega ships</li>
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Not Ideal For</h3>
                            <ul className="medi-audience-list">
                                <li>Families wanting extensive kids programs</li>
                                <li>Travelers seeking nonstop nightlife</li>
                                <li>Guests prioritizing large-scale entertainment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY WORK WITH US */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">
                    <div className="medi-work-with-us-content">
                        <h2 className="medi-section-heading">Why Travelers Work with Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <p className="medi-body-paragraph">
                            Luxury Mediterranean cruise planning has become increasingly complex. Working with experienced luxury advisors helps travelers:
                        </p>

                        <div className="medi-benefits-grid">
                            <div className="medi-benefit-item">
                                <CheckCircle size={24} className="medi-benefit-icon" />
                                <span>Avoid costly itinerary mistakes</span>
                            </div>
                            <div className="medi-benefit-item">
                                <CheckCircle size={24} className="medi-benefit-icon" />
                                <span>Select the best sailing season</span>
                            </div>
                            <div className="medi-benefit-item">
                                <CheckCircle size={24} className="medi-benefit-icon" />
                                <span>Choose ideal suite categories</span>
                            </div>
                            <div className="medi-benefit-item">
                                <CheckCircle size={24} className="medi-benefit-icon" />
                                <span>Access exclusive amenities</span>
                            </div>
                            <div className="medi-benefit-item">
                                <CheckCircle size={24} className="medi-benefit-icon" />
                                <span>Navigate luxury promotions strategically</span>
                            </div>
                            <div className="medi-benefit-item">
                                <CheckCircle size={24} className="medi-benefit-icon" />
                                <span>Match destinations to travel goals</span>
                            </div>
                        </div>

                        <div className="medi-recognition-box">
                            <p className="medi-body-paragraph">
                                Angela Hughes is globally recognized for luxury travel expertise through travel industry speaking engagements, weekly travel columns, advisory board leadership, international media recognition, and Luxury Travel University training programs.
                            </p>
                        </div>
                    </div>

                    <div className="medi-work-with-us-visual">
                        <img src={destinationDining} alt="Luxury travel planning" className="medi-visual-image" />
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Experience the Mediterranean with Azamara?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            Luxury Mediterranean cruising is no longer simply about transportation between ports — it is about authentic experiences, cultural immersion, personalized service, and seamless planning.
                        </p>
                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => mediToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {mediActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MediterraneanCruises