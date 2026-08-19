import Navbar from '../../components/Navbar/Navbar'
import './UniworldBestItineraries.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, Landmark, GraduationCap,
    Globe, Wine, Camera, TrendingUp, Leaf, BookOpen,
    Castle, Waves, Mountain, Sparkle, ImageIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function UniworldRiverCruiseItineraries() {

    const [uniActiveFaq, setUniActiveFaq] = useState(null)
    const uniToggleFaq = i => setUniActiveFaq(uniActiveFaq === i ? null : i)

    const uniHeroSlides = [
        { Icon: Waves, label: 'Danube River' },
        { Icon: Castle, label: 'Rhine Valley' },
        { Icon: Wine, label: 'Douro Valley' }
    ]
    const [uniCurrentHero, setUniCurrentHero] = useState(0)
    useEffect(() => {
        const uniTimer = setInterval(() => {
            setUniCurrentHero(prev => (prev + 1) % uniHeroSlides.length)
        }, 4000)
        return () => clearInterval(uniTimer)
    }, [uniHeroSlides.length])

    const uniChooseFactors = [
        { Icon: MapPin, text: 'Destination preferences' },
        { Icon: Clock, text: 'Cruise duration' },
        { Icon: Sun, text: 'Time of year' },
        { Icon: Landmark, text: 'Historical and cultural interests' },
        { Icon: Camera, text: 'Scenic cruising opportunities' },
        { Icon: CheckCircle, text: 'Included excursions' },
        { Icon: Compass, text: 'Travel pace' },
        { Icon: Gem, text: 'Budget' }
    ]

    const uniRegions = [
        {
            id: 'danube',
            Icon: Landmark,
            name: 'Danube River Cruises',
            intro: "The Danube is one of Uniworld's most popular cruise regions, flowing through several of Central Europe's most historic cities.",
            highlights: ['Budapest', 'Vienna', 'Bratislava', 'Passau', 'Melk Abbey', 'Wachau Valley'],
            bestFor: ['First-time river cruisers', 'History enthusiasts', 'Classical music lovers', 'Christmas Market travelers'],
            note: 'The Danube offers a balanced mix of grand capitals, scenic landscapes, and cultural landmarks.'
        },
        {
            id: 'rhine',
            Icon: Castle,
            name: 'Rhine River Cruises',
            intro: 'The Rhine is famous for medieval castles, charming villages, and vineyard-covered hillsides.',
            highlights: ['Cologne Cathedral', 'Rhine Gorge', 'Strasbourg', 'Heidelberg', 'Rüdesheim', 'Koblenz'],
            bestFor: ['Couples', 'Photographers', 'Wine lovers', 'Scenic cruising enthusiasts'],
            note: 'This itinerary combines dramatic river scenery with centuries of European history.'
        },
        {
            id: 'seine',
            Icon: Sparkle,
            name: 'Seine River Cruises',
            intro: 'Cruises along the Seine explore northern France while combining city experiences with rural landscapes.',
            highlights: ['Paris', 'Rouen', 'Normandy', 'Honfleur', 'Giverny'],
            bestFor: [],
            note: 'Travelers interested in French culture, Impressionist art, and World War II history often choose this itinerary.'
        },
        {
            id: 'douro',
            Icon: Wine,
            name: 'Douro River Cruises',
            intro: "Portugal's Douro Valley is one of Europe's premier wine regions.",
            highlights: ['Porto', 'Peso da Régua', 'Pinhão', 'Salamanca (Spain)', 'Vineyards', 'Wine tastings'],
            bestFor: [],
            note: 'The Douro appeals to travelers seeking relaxed scenery, regional cuisine, and exceptional wines.'
        },
        {
            id: 'rhone',
            Icon: Utensils,
            name: 'Rhône and Provence Cruises',
            intro: 'Southern France combines historic cities with renowned culinary traditions.',
            highlights: ['Lyon', 'Avignon', 'Arles', 'Viviers'],
            bestFor: [],
            note: null,
            showcase: ['Roman heritage', 'Lavender fields', 'Provençal villages', 'Gastronomy', 'Wine culture']
        },
        {
            id: 'venice',
            Icon: Waves,
            name: 'Venice and Northern Italy',
            intro: "Uniworld's Venetian itineraries provide a unique perspective on Italy's famous lagoon.",
            highlights: ['Venice', 'Burano', 'Murano', 'Chioggia'],
            bestFor: [],
            note: 'Many itineraries also include visits to historic villas and artisan workshops.'
        },
        {
            id: 'nile',
            Icon: Sun,
            name: 'Egypt and the Nile',
            intro: "The Nile offers one of Uniworld's most distinctive itineraries.",
            highlights: ['Luxor', 'Aswan', 'Karnak Temple', 'Valley of the Kings', 'Temple of Philae'],
            bestFor: [],
            note: "This itinerary combines luxury cruising with some of the world's most important archaeological sites."
        },
        {
            id: 'ganges',
            Icon: Mountain,
            name: 'India and the Ganges',
            intro: 'Uniworld also operates select journeys along the Ganges River.',
            highlights: ['Kolkata', 'Kalna', 'Murshidabad', 'Varanasi'],
            bestFor: [],
            note: 'Guests experience vibrant culture, sacred temples, colonial architecture, and traditional villages.'
        }
    ]

    const uniComparisonTable = [
        { interest: 'First river cruise', rec: 'Danube' },
        { interest: 'Scenic landscapes', rec: 'Rhine' },
        { interest: 'Wine lovers', rec: 'Douro' },
        { interest: 'Food enthusiasts', rec: 'Rhône' },
        { interest: 'Art & culture', rec: 'Seine' },
        { interest: 'Ancient history', rec: 'Nile' },
        { interest: 'Italy lovers', rec: 'Venice Lagoon' },
        { interest: 'Spiritual & cultural travel', rec: 'Ganges' }
    ]

    const uniSeasonTable = [
        { dest: 'Danube', season: 'Spring & Autumn' },
        { dest: 'Rhine', season: 'Spring to Early Autumn' },
        { dest: 'Seine', season: 'Late Spring to Autumn' },
        { dest: 'Douro', season: 'Spring & Harvest Season' },
        { dest: 'Rhône', season: 'Spring & Autumn' },
        { dest: 'Venice', season: 'Spring & Early Autumn' },
        { dest: 'Nile', season: 'October to April' },
        { dest: 'Ganges', season: 'Winter' }
    ]

    const uniCruiseLengths = [
        '7-night cruises',
        '8-day journeys',
        '10-day itineraries',
        '14-day combinations',
        'Extended land and cruise packages'
    ]

    const uniFirstTimeTips = [
        'Start with the Danube or Rhine.',
        'Choose a 7- or 8-day itinerary.',
        'Consider the season and local festivals.',
        'Compare included excursions.',
        'Review embarkation and disembarkation cities.',
        'Book early for popular sailings.'
    ]

    const uniItineraryMatters = [
        { Icon: Landmark, text: 'Historical interests' },
        { Icon: Utensils, text: 'Culinary experiences' },
        { Icon: Camera, text: 'Scenic cruising' },
        { Icon: Globe, text: 'Local culture' },
        { Icon: Clock, text: 'Pace of travel' },
        { Icon: LayoutList, text: 'Excursion variety' }
    ]

    const uniFaqs = [
        { question: 'What is the best Uniworld River Cruise itinerary?', answer: 'The Danube is often recommended for first-time travelers because it combines historic cities, scenic cruising, and cultural attractions.' },
        { question: 'Which Uniworld itinerary is best for first-time cruisers?', answer: 'The Danube and Rhine itineraries are among the most popular choices for beginners.' },
        { question: 'What is the most scenic Uniworld cruise?', answer: "Many travelers consider the Rhine Gorge and Portugal's Douro Valley among the most scenic routes." },
        { question: 'Which itinerary is best for wine lovers?', answer: 'The Douro and Rhône itineraries are excellent choices thanks to their renowned wine regions.' },
        { question: 'Does Uniworld sail the Nile?', answer: "Yes. Uniworld offers luxury cruises exploring Egypt's Nile River." },
        { question: 'Which itinerary includes Paris?', answer: 'Seine River cruises typically begin or end in Paris.' },
        { question: 'Does Uniworld visit Christmas Markets?', answer: 'Yes. Seasonal itineraries along the Danube and Rhine include famous European Christmas Markets.' },
        { question: 'What is the best time to cruise the Danube?', answer: 'Spring and autumn generally offer pleasant weather and fewer crowds.' },
        { question: 'How long are most Uniworld cruises?', answer: 'Many itineraries range from 7 to 14 days, with longer cruise-and-land packages available.' },
        { question: 'Which itinerary is best for history lovers?', answer: 'The Nile, Danube, and Seine all feature significant historical landmarks.' },
        { question: 'Does Uniworld offer cruises in Italy?', answer: 'Yes. Select itineraries explore Venice and the Venetian Lagoon.' },
        { question: 'Which itinerary is best for photographers?', answer: 'The Rhine and Douro offer spectacular landscapes and picturesque villages.' },
        { question: 'Can I combine multiple itineraries?', answer: 'Yes. Some departures offer back-to-back cruises or land extensions.' },
        { question: 'Are excursions included on every itinerary?', answer: 'Most Uniworld itineraries include guided shore excursions as part of the cruise fare.' },
        { question: 'How should I choose my itinerary?', answer: 'Consider your preferred destinations, interests, travel season, cruise length, and budget before booking.' }
    ]

    const uniImageRecommendations = [
        { suggestion: 'Danube cruise ship', alt: 'Uniworld river cruise sailing along the Danube River' },
        { suggestion: 'Rhine castles', alt: 'Medieval castles viewed from a Uniworld Rhine River Cruise' },
        { suggestion: 'Douro vineyards', alt: "Vineyards along Portugal's Douro River during a Uniworld cruise" },
        { suggestion: 'Paris and the Seine', alt: 'Uniworld cruise on the Seine River near Paris' },
        { suggestion: 'Nile temple', alt: 'Ancient temple visited during a Uniworld Nile River Cruise' },
        { suggestion: 'Venice lagoon', alt: 'Uniworld ship cruising through the Venice Lagoon' }
    ]

    const uniExternalRefs = [
        'Official Uniworld Boutique River Cruises',
        'Cruise Lines International Association (CLIA)',
        'UNESCO World Heritage Centre',
        'European tourism boards',
        'Egypt Ministry of Tourism',
        'Incredible India Tourism'
    ]

    const uniSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "Best Uniworld River Cruise Itineraries",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/best-itineraries/",
                "description": "Compare the best Uniworld River Cruise itineraries across Europe, Egypt, India, and beyond.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Best Uniworld River Cruise Itineraries",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/best-itineraries/"
                },
                "datePublished": "2026-08-06",
                "dateModified": "2026-08-06"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Best Itineraries", "item": "https://www.tripsandships.com/uniworld-river-cruises/best-itineraries/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uniFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <div className="uni-page">
            <Helmet>
                <title>Best Uniworld River Cruise Itineraries</title>
                <meta name="title" content="Best Uniworld River Cruise Itineraries" />
                <meta name="description" content="Discover the best Uniworld River Cruise itineraries across Europe, Egypt, India, and Peru. Compare destinations, cruise lengths, highlights, and travel tips." />
                <meta name="keywords" content="Best Uniworld River Cruise Itineraries, Uniworld itineraries, best Uniworld cruises, European river cruises, Danube river cruise, Rhine river cruise, Douro cruise, Nile cruise, luxury river cruise itineraries" />
                                <script type="application/ld+json">{JSON.stringify(uniSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uni-hero-section">
                {uniHeroSlides.map((s, idx) => (
                    <div
                        key={idx}
                        className={`uni-hero-background uni-hero-bg-${idx} ${uniCurrentHero === idx ? 'uni-active' : ''}`}
                    >
                        <s.Icon size={340} className="uni-hero-bg-icon" strokeWidth={0.6} />
                    </div>
                ))}
                <div className="uni-hero-overlay-layer"></div>
                <div className="uni-hero-content-wrapper">
                    <div className="uni-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>River Cruise Guide · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uni-hero-main-title">Best Uniworld River Cruise Itineraries</h1>
                    <p className="uni-hero-subtitle-text">
                        Discover the best Uniworld River Cruise itineraries across Europe, Egypt, India, and beyond — compare destinations, cruise lengths, highlights, and travel tips.
                    </p>
                    <div className="uni-hero-slide-dots">
                        {uniHeroSlides.map((slide, idx) => (
                            <button
                                key={idx}
                                className={`uni-hero-dot ${uniCurrentHero === idx ? 'uni-hero-dot-active' : ''}`}
                                onClick={() => setUniCurrentHero(idx)}
                                aria-label={`Show ${slide.label}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uni-intro-section">
                <div className="uni-container">
                    <div className="uni-intro-sidebyside">
                        <div className="uni-intro-content-col">
                            <span className="uni-eyebrow">RIVER CRUISE PLANNING</span>
                            <h2 className="uni-section-heading">Choosing Your Perfect Uniworld Journey</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-intro-lead">
                                One of the biggest advantages of sailing with Uniworld Boutique River Cruises is the variety of thoughtfully designed itineraries available across Europe and beyond.
                            </p>
                            <p className="uni-intro-body">
                                Whether you're dreaming of castles along the Rhine, vineyards in Portugal, Christmas markets on the Danube, or ancient temples in Egypt, Uniworld offers journeys that combine luxury accommodations with immersive cultural experiences.
                            </p>
                            <p className="uni-intro-body">
                                This guide highlights some of the best Uniworld River Cruise itineraries, explains who each journey is best suited for, and provides practical advice to help you choose the ideal cruise.
                            </p>
                        </div>
                        <div className="uni-intro-image-col">
                            <div className="uni-intro-image-frame">
                                <div className="uni-intro-placeholder-wrap">
                                    <MapPin size={40} className="uni-intro-placeholder-icon" />
                                    <span>Uniworld Journey Planning Map</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE ── */}
            <section className="uni-choose-section">
                <div className="uni-container">
                    <div className="uni-choose-sidebyside">
                        
                        {/* LEFT COLUMN: Image + Heading below it */}
                        <div className="uni-choose-left-col">
                            <div className="uni-choose-image-frame">
                                <div className="uni-choose-placeholder-wrap">
                                    <Compass size={40} className="uni-choose-placeholder-icon" />
                                    <span>Uniworld Journey Planner Compass</span>
                                </div>
                            </div>
                            <div className="uni-choose-header-inline">
                                <span className="uni-eyebrow">GETTING STARTED</span>
                                <h2 className="uni-section-heading">How to Choose the Right Itinerary</h2>
                                <div className="uni-heading-separator-bar"></div>
                                <p className="uni-choose-lead">Before selecting an itinerary, consider these core aspects to match your ideal cruise style.</p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: 8 grid list points in 2-column layout */}
                        <div className="uni-choose-right-col">
                            <div className="uni-choose-grid-2col">
                                {uniChooseFactors.map((f) => (
                                    <div key={f.text} className="uni-choose-card">
                                        <div className="uni-choose-card-icon"><f.Icon size={20} /></div>
                                        <span>{f.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="uni-choose-footer-box">
                                <p>Some itineraries focus on iconic European cities, while others emphasize wine regions, UNESCO World Heritage Sites, or lesser-known cultural experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── REGIONS TAB INTERFACE ── */}
            <section className="uni-regions-tabs-section">
                <div className="uni-container">
                    <div className="uni-center-header">
                        <span className="uni-eyebrow">DESTINATION OVERVIEW</span>
                        <h2 className="uni-section-heading">Explore Uniworld <br /> River Cruise Regions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    
                    <div className="uni-tabs-container">
                        {/* LEFT COLUMN: Tab list */}
                        <div className="uni-tabs-list-col">
                            {uniRegions.map((region, idx) => {
                                const TabIcon = region.Icon
                                return (
                                    <button
                                        key={region.id}
                                        className={`uni-tab-button ${uniActiveFaq === region.id || (uniActiveFaq === null && idx === 0) ? 'uni-tab-active' : ''}`}
                                        onClick={() => setUniActiveFaq(region.id)}
                                    >
                                        <TabIcon size={18} className="uni-tab-icon" />
                                        <span>{region.name}</span>
                                    </button>
                                )
                            })}
                        </div>

                        {/* RIGHT COLUMN: Active content with image */}
                        <div className="uni-tabs-content-col">
                            {uniRegions.map((region, idx) => {
                                const isActive = uniActiveFaq === region.id || (uniActiveFaq === null && idx === 0)
                                if (!isActive) return null
                                return (
                                    <div key={region.id} className="uni-tab-pane">
                                        <div className="uni-tab-pane-grid">
                                            {/* Content side */}
                                            <div className="uni-tab-pane-text">
                                                <span className="uni-eyebrow">DESTINATION SPOTLIGHT</span>
                                                <h3 className="uni-tab-pane-title">{region.name}</h3>
                                                <div className="uni-heading-separator-bar"></div>
                                                <p className="uni-region-intro">{region.intro}</p>

                                                {region.highlights.length > 0 && (
                                                    <div className="uni-region-block">
                                                        <h4 className="uni-region-block-title">
                                                            {region.id === 'rhine' ? 'Popular attractions include:' :
                                                             region.id === 'douro' || region.id === 'nile' ? 'Cruise highlights include:' :
                                                             region.id === 'seine' ? 'Highlights often include:' :
                                                             region.id === 'rhone' ? 'Typical destinations include:' :
                                                             region.id === 'venice' ? 'Guests often experience:' :
                                                             region.id === 'ganges' ? 'Highlights may include:' :
                                                             'Highlights'}
                                                        </h4>
                                                        <div className="uni-region-tags">
                                                            {region.highlights.map((h, i) => (
                                                                <span key={i} className="uni-region-tag"><MapPin size={13} />{h}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {region.showcase && (
                                                    <div className="uni-region-block">
                                                        <h4 className="uni-region-block-title">These cruises showcase:</h4>
                                                        <div className="uni-region-tags">
                                                            {region.showcase.map((h, i) => (
                                                                <span key={i} className="uni-region-tag"><Sparkles size={13} />{h}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {region.bestFor.length > 0 && (
                                                    <div className="uni-region-block">
                                                        <h4 className="uni-region-block-title">Ideal Travelers</h4>
                                                        <div className="uni-region-bestfor-list">
                                                            {region.bestFor.map((b, i) => (
                                                                <div key={i} className="uni-region-bestfor-item">
                                                                    <CheckCircle size={16} />
                                                                    <span>{b}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {region.note && (
                                                    <div className="uni-region-note-box">
                                                        <p>{region.note}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Image side */}
                                            <div className="uni-tab-pane-image">
                                                <div className="uni-region-visual-frame">
                                                    <ImageIcon size={60} className="uni-region-visual-icon" style={{ opacity: 0.7 }} />
                                                    <span style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '12px', marginTop: '10px', textAlign: 'center', padding: '0 12px' }}>
                                                        {region.name} Scenic View Placeholder
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH ITINERARY IS BEST CARDS ── */}
            <section className="uni-table-section">
                <div className="uni-container">
                    <div className="uni-center-header">
                        <span className="uni-eyebrow">QUICK COMPARISON</span>
                        <h2 className="uni-section-heading">Which Itinerary Is Best?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-choose-lead" style={{ textAlign: 'center', opacity: 0.85, maxWidth: '600px', margin: '0 auto' }}>
                            Match your primary vacation focus to the river cruise itinerary designed to deliver that exact experience.
                        </p>
                    </div>

                    <div className="uni-comparison-cards-grid">
                        {uniComparisonTable.map((row, i) => (
                            <div key={i} className="uni-comparison-card">
                                <div className="uni-comparison-card-interest">
                                    <div className="uni-comparison-dot"></div>
                                    <span>{row.interest}</span>
                                </div>
                                <div className="uni-comparison-arrow">
                                    <ArrowRight size={16} />
                                </div>
                                <div className="uni-comparison-card-rec">
                                    <Anchor size={14} className="uni-comparison-rec-icon" />
                                    <span>{row.rec}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO SAIL ── */}
            <section className="uni-season-section">
                <div className="uni-container">
                    <div className="uni-center-header">
                        <span className="uni-eyebrow uni-eyebrow-light">SEASONAL PLANNING</span>
                        <h2 className="uni-section-heading uni-white-heading">Best Time to Sail Each Region</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>
                    <div className="uni-season-grid">
                        {uniSeasonTable.map((row, i) => (
                            <div key={i} className="uni-season-card">
                                <Calendar size={20} className="uni-season-card-icon" />
                                <div className="uni-season-card-info">
                                    <h3>{row.dest}</h3>
                                    <p>{row.season}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="uni-season-footer">
                        <p>Traveling during shoulder seasons often provides pleasant weather with fewer crowds.</p>
                    </div>
                </div>
            </section>

            {/* ── CRUISE PLANNING: LENGTH & TIPS COMBINED ── */}
            <section className="uni-planning-combined-section">
                <div className="uni-container">
                    <div className="uni-planning-grid">

                        {/* Cruise Length Card */}
                        <div className="uni-planning-card-wrapper">
                            <span className="uni-eyebrow">TRIP PLANNING</span>
                            <h2 className="uni-section-heading">Cruise Length Options</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-length-lead">Uniworld itineraries commonly range from:</p>
                            <ul className="uni-length-list">
                                {uniCruiseLengths.map((item, i) => (
                                    <li key={i}><Clock size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="uni-length-note">Longer itineraries provide additional opportunities for cultural immersion and destination exploration.</p>
                        </div>

                        {/* First-Time Tips Card */}
                        <div className="uni-planning-card-wrapper">
                            <span className="uni-eyebrow">FOR FIRST-TIME CRUISERS</span>
                            <h2 className="uni-section-heading">Tips for Choosing Your Itinerary</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-length-lead">If you're new to river cruising:</p>
                            <ul className="uni-length-list">
                                {uniFirstTimeTips.map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="uni-length-note">Experienced travelers may prefer more specialized routes such as the Douro, Nile, or Ganges.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHY ITINERARY MATTERS ── */}
            <section className="uni-matters-section">
                <div className="uni-container">
                    <div className="uni-matters-sidebyside">
                        
                        {/* LEFT COLUMN: Heading above, Image, and Lead below it */}
                        <div className="uni-matters-left-col">
                            <div className="uni-matters-header-inline">
                                <span className="uni-eyebrow uni-eyebrow-light">THE DECIDING FACTOR</span>
                                <h2 className="uni-section-heading uni-white-heading">Why Itinerary Matters More Than Ship Choice</h2>
                                <div className="uni-heading-separator-bar uni-separator-white"></div>
                            </div>
                            <div className="uni-matters-image-frame">
                                <div className="uni-matters-placeholder-wrap">
                                    <Sparkles size={40} className="uni-matters-placeholder-icon" />
                                    <span>Uniworld Ship &amp; Itinerary Visualizer</span>
                                </div>
                            </div>
                            <div className="uni-matters-header-inline">
                                <p className="uni-matters-lead" style={{ color: 'rgba(255,255,255,0.7)' }}>While every Uniworld ship offers luxury accommodations and personalized service, the itinerary often has the greatest influence on your overall experience.</p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: 6 content list points in 2-column layout */}
                        <div className="uni-matters-right-col">
                            <p className="uni-matters-sub-heading" style={{ color: '#ffffff' }}>Key factors to keep in mind:</p>
                            <div className="uni-matters-grid-2col">
                                {uniItineraryMatters.map((m) => (
                                    <div key={m.text} className="uni-matters-card">
                                        <div className="uni-matters-card-icon"><m.Icon size={20} /></div>
                                        <span>{m.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="uni-matters-conclusion">
                                <p>Choosing a destination that matches your interests is often more important than selecting a specific ship.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── TRUST & REFERENCES COMBINED ── */}
            <section className="uni-trust-combined-section">
                <div className="uni-container">
                    <div className="uni-trust-grid">

                        {/* Objective Guidance Card */}
                        <div className="uni-trust-card-wrapper">
                            <span className="uni-eyebrow">WHY TRUST THIS GUIDE</span>
                            <h2 className="uni-section-heading">Objective, Destination-First Guidance</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <ul className="uni-trust-list">
                                <li><CheckCircle size={16} /><span>Covers multiple destinations objectively.</span></li>
                                <li><CheckCircle size={16} /><span>Helps travelers match itineraries to interests.</span></li>
                                <li><CheckCircle size={16} /><span>Provides seasonal guidance and travel planning advice.</span></li>
                                <li><CheckCircle size={16} /><span>Explains itinerary differences rather than promoting one option.</span></li>
                            </ul>
                        </div>

                        {/* External References Card */}
                        <div className="uni-trust-card-wrapper">
                            <span className="uni-eyebrow">TRUSTED RESOURCES</span>
                            <h2 className="uni-section-heading">External Authority References</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <ul className="uni-trust-list">
                                {uniExternalRefs.map((ref, i) => (
                                    <li key={i}><Globe size={16} /><span>{ref}</span></li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── IMAGE RECOMMENDATIONS ── */}
            <section className="uni-imagery-section">
                <div className="uni-container">
                    <div className="uni-center-header">
                        <span className="uni-eyebrow uni-eyebrow-light">VISUAL PLANNING</span>
                        <h2 className="uni-section-heading uni-white-heading">Photography to Bring This Guide to Life</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>
                    <div className="uni-imagery-grid">
                        {uniImageRecommendations.map((img, i) => (
                            <div key={i} className="uni-imagery-card">
                                <div className="uni-imagery-card-image-box">
                                    <ImageIcon size={30} className="uni-imagery-card-placeholder-icon" />
                                    <span>{img.suggestion} Placeholder</span>
                                </div>
                                <div className="uni-imagery-card-text">
                                    <h3>{img.suggestion}</h3>
                                    <p>{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uni-takeaways-section">
                <div className="uni-container">
                    <div className="uni-center-header">
                        <span className="uni-eyebrow">SUMMARY</span>
                        <h2 className="uni-section-heading">Key Takeaways</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="uni-takeaways-grid-custom">
                        <div className="uni-takeaways-row-first">
                            {[
                                'The Danube and Rhine are excellent choices for first-time river cruisers.',
                                'The Douro is ideal for wine lovers and scenic landscapes.',
                                'The Seine combines French culture, history, and art.',
                                'The Nile offers unforgettable archaeological experiences.'
                            ].map((item, i) => (
                                <div key={i} className="uni-takeaway-item">
                                    <div className="uni-takeaway-number">{i + 1}</div>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="uni-takeaways-row-second">
                            {[
                                'The Ganges provides a unique cultural and spiritual journey.',
                                'Cruise length, season, and destination all influence the experience.',
                                'Selecting the right itinerary is often more important than choosing a specific ship.'
                            ].map((item, i) => (
                                <div key={i} className="uni-takeaway-item">
                                    <div className="uni-takeaway-number">{i + 5}</div>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="uni-expert-insight-section">
                <div className="uni-container">
                    <div className="uni-expert-insight-grid">
                        <div className="uni-expert-portrait-panel">
                            <div className="uni-expert-img-container">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Travel Specialist" />
                            </div>
                            <div className="uni-expert-stats-strip">
                                <div className="uni-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="uni-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>
                        <div className="uni-expert-content-panel">
                            <span className="uni-eyebrow">MEET THE CEO</span>
                            <h2 className="uni-section-heading">Insight from Angela Hughes</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-expert-quote">
                                "Selecting the right river cruise itinerary is everything. Unlike ocean cruises where the ship itself is the destination, a river cruise is about where the ship takes you—the culture, history, and people you meet at every bend."
                            </p>
                            <div className="uni-expert-priorities">
                                <h5>Itinerary Prioritization Matrix:</h5>
                                <div className="uni-expert-pills">
                                    {['Historic Sights', 'Scenic Rivers', 'Pace & Overnights', 'Exclusive Excursions', 'Wine Tastings', 'Cultural Immersive Guides'].map(pill => (
                                        <span key={pill} className="uni-expert-pill">
                                            <Anchor size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="uni-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes leverages decades of personal travel experience and industry connections to help you craft the perfect customized Uniworld itinerary.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uni-faq-section">
                <div className="uni-container">
                    <div className="uni-center-header">
                        <span className="uni-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="uni-section-heading">Frequently Asked Questions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="uni-faq-list-wrapper">
                        {uniFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uni-faq-individual-item"
                                onClick={() => uniToggleFaq(index)}
                            >
                                <div className="uni-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uni-faq-toggle-icon">{uniActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uniActiveFaq === index && (
                                    <p className="uni-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uni-cta-section">
                <div className="uni-cta-aurora-glow"></div>
                <div className="uni-cta-crystal uni-cta-crystal-1"></div>
                <div className="uni-cta-crystal uni-cta-crystal-2"></div>
                <div className="uni-cta-crystal uni-cta-crystal-3"></div>
                <div className="uni-cta-grid-lines"></div>

                <div className="uni-cta-content">
                    <div className="uni-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uni-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="uni-cta-title">Ready to Explore <br /> Uniworld's Itineraries?</h2>
                    <div className="uni-cta-bar"></div>
                    <p className="uni-cta-subtitle">
                        Explore Uniworld's award-winning itineraries, compare destinations, and find the luxury river cruise that best matches your travel interests, preferred scenery, and dream vacation.
                    </p>
                    <div className="uni-cta-actions">
                        <Link to="/contact" className="uni-primary-cta-button">
                            <Phone size={18} />
                            <span>Speak with a luxury river cruise specialist</span>
                            <ArrowRight size={16} className="uni-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UniworldRiverCruiseItineraries