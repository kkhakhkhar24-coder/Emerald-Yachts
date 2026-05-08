import Navbar from '../../components/Navbar/Navbar'
import './LuxuryKenyaSafari.css'
import image from "../../assets/image.webp";
import hero1 from '../../assets/HomePage/HomePage1.webp'
import hero2 from '../../assets/SecondPage/SecondPage2.webp'
import hero3 from '../../assets/SecondPage/SecondPage6.webp'
import luxuryRefined from '../../assets/HomePage/Refined_Luxury.jpeg'
import cruiseView from '../../assets/AzamaraCabinsGuide/Cruise_balcony_view.webp'
import singaporeSkyline from '../../assets/DistinctiveVoyageSailings/singapore-marina-bay-sands-skyline-luxury-travel.png'
import kenyaNarrative from '../../assets/LuxuryKenyaSafari/kenya_narrative.png'
import kenyaLeopard from '../../assets/LuxuryKenyaSafari/kenya_leopard_dusk.png'


import {
    MapPin, Star, Clock, DollarSign, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Calendar, ShieldCheck, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Award, Heart, Camera, Binoculars, Sunrise, TreePine,
    Globe, LayoutList
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function LuxuryKenyaSafari() {
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const regions = [
        {
            name: 'MAASAI MARA',
            intro: 'The Maasai Mara remains Kenya’s most iconic safari region for a reason.',
            knownFor: ['dense wildlife populations', 'predator sightings', 'Great Migration river crossings', 'classic East Africa scenery'],
            worksWellFor: 'first time safari travelers, photographers, honeymooners, and travelers wanting the classic luxury safari experience.',
            tier: 'iconic'
        },
        {
            name: 'AMBOSELI',
            intro: 'Amboseli National Park is known for massive elephant herds and extraordinary views of Mount Kilimanjaro.',
            worksWellFor: 'photography, families, and travelers wanting iconic Kenya landscapes.',
            tier: 'iconic'
        },
        {
            name: 'SAMBURU',
            intro: 'Samburu National Reserve feels completely different from the Maasai Mara. Travelers move from sweeping grasslands into dramatic northern terrain with unique wildlife species not commonly seen in southern Kenya.',
            worksWellFor: 'travelers wanting a more layered and less predictable Kenya safari experience.',
            tier: 'specialist'
        },
        {
            name: 'LAIKIPIA',
            intro: 'Laikipia is one of Kenya’s most sophisticated luxury safari regions.',
            knownFor: ['private conservancies', 'rhino conservation', 'horseback safaris', 'helicopter experiences', 'ultra luxury safari camps'],
            conclusion: 'This is often where experienced safari travelers gravitate after their first East Africa safari.',
            tier: 'ultra'
        },
        {
            name: 'LEWA CONSERVANCY',
            intro: 'Lewa Wildlife Conservancy is one of Kenya’s most respected conservation focused safari regions.',
            knownFor: ['rhino conservation', 'low vehicle density', 'highly refined safari operations', 'exceptional guiding'],
            tier: 'ultra'
        },
    ]


    const camps = [
        {
            name: 'Angama Mara',
            desc: 'Cinematic scenery, elevated design, and direct access to the Mara Triangle. Works particularly well for honeymooners, couples, and first time luxury safari travelers.',
        },
        {
            name: 'Mara Plains Camp',
            desc: 'Exceptional guiding and wildlife positioning. Appeals strongly to experienced safari travelers, photographers, and travelers prioritizing wildlife access over flashy design.',
        },
        {
            name: "Cottar's 1920s Camp",
            desc: 'One of the strongest classic East Africa safari atmospheres in Kenya. Works particularly well for travelers wanting heritage, storytelling, and old world safari character.',
        },
        {
            name: 'Segera Retreat',
            desc: 'Ultra luxury safari combined with conservation, art, wellness, and privacy. One of Kenya\'s most sophisticated safari experiences.',
        },
        {
            name: 'ol Donyo Lodge',
            desc: 'Privacy, horseback safari experiences, and extraordinary Kilimanjaro views. Appeals strongly to honeymooners and travelers wanting a quieter, highly immersive safari.',
        },
    ]

    const pricing = [
        {
            level: 'Entry Luxury',
            experience: 'Shared safari, upscale camps, regional flights',
            investment: '$15,000 to $25,000 per couple',
            tier: 'entry'
        },
        {
            level: 'Premium Luxury',
            experience: 'Strong conservancies, luxury camps, refined routing',
            investment: '$35,000 to $70,000 per couple',
            tier: 'premium'
        },
        {
            level: 'Ultra Luxury',
            experience: 'Private guides, charter flights, elite camps, highly customized itineraries',
            investment: '$80,000 to $250,000+',
            tier: 'ultra'
        },
    ]

    const faqs = [
        { question: 'How much does a luxury Kenya safari cost?', answer: 'Most luxury Kenya safaris range from $25,000 to $100,000+ depending on season, camp level, conservancy access, and private guiding.' },
        { question: 'What is the best month for a Kenya safari?', answer: 'July through October for migration season and January through March for excellent wildlife viewing with fewer crowds.' },
        { question: 'Is Kenya good for first time safari travelers?', answer: 'Yes. Kenya is often one of the best first safari destinations due to wildlife density and relatively easy logistics.' },
        { question: 'Is Kenya safe for luxury travel?', answer: 'Yes, when designed properly with experienced safari operators and guides.' },
        { question: 'How many days do I need for a Kenya safari?', answer: 'Most luxury Kenya safaris work best between 7 and 10 days.' },
        { question: 'What is the best safari area in Kenya?', answer: 'The Maasai Mara remains Kenya\'s most iconic safari destination.' },
        { question: 'Can I combine Kenya with beach destinations?', answer: 'Yes. Seychelles and Zanzibar are popular luxury pairings.' },
        { question: 'What is the Great Migration?', answer: 'A year round movement of wildebeest and zebra through the Serengeti Maasai Mara ecosystem.' },
        { question: 'Are private guides worth it?', answer: 'Yes, especially for photographers, families, and migration safaris.' },
        { question: 'Do luxury Kenya safaris include flights?', answer: 'Internal bush flights are often included depending on itinerary structure.' },
        { question: 'What makes Kenya different from Tanzania?', answer: 'Kenya generally offers easier logistics and concentrated wildlife viewing.' },
        { question: 'Can children go on safari in Kenya?', answer: 'Yes. Many luxury safari camps accommodate families and children.' },
        { question: 'What is the green season in Kenya?', answer: 'Typically April and May when pricing is lower and landscapes are lush.' },
        { question: 'Do I need vaccinations for Kenya?', answer: 'Travel requirements vary and should always be discussed with a medical professional.' },
        { question: 'Should I use a travel advisor for safari planning?', answer: 'Safari planning is highly specialized and expert guidance can dramatically improve the experience.' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
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
                <title>Luxury Kenya Safari | Trips & Ships Luxury Travel</title>
                <meta name="description" content="Plan a luxury Kenya safari with Angela Hughes. Expert guidance on the Maasai Mara, Amboseli, Laikipia, camp placement, migration timing, and high end safari travel." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ──────────────────────────────────────────────────────────────────── */}
            <section className="kenya-hero">
                {heroImages.map((img, i) => (
                    <div
                        key={i}
                        className={`kenya-hero-bg ${i === currentHero ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="kenya-hero-overlay" />

                <div className="kenya-hero-inner">
                    <span className="kenya-eyebrow">
                        <MapPin size={14} />
                        East Africa · Luxury Safari
                    </span>

                    <h1 className="kenya-h1">
                        Luxury Kenya Safari:<br />The Ultimate Guide for<br />High End Travelers
                    </h1>

                    <p className="kenya-hero-lead">
                        There is a reason Kenya remains one of the most iconic safari destinations in the world. For many travelers, Kenya is where the dream of Africa begins. The images people carry in their minds of East Africa often come from here. Endless golden grasslands. Acacia trees stretched across the horizon. Elephants moving quietly through morning mist. Lions crossing the savanna at sunrise. Luxury tented camps glowing under lantern light at night.
                    </p>

                    <div className="kenya-cta-card">
                        <p className="kenya-cta-card-title">Schedule a 15 Minute Kenya Safari Consultation</p>
                        <p className="kenya-cta-card-sub">Luxury safari is not about booking a lodge. It is about designing the experience correctly.</p>
                        <div className="kenya-cta-features">
                            <span className="kenya-cta-feature"><CheckCircle size={15} /> Camp Placement Strategy</span>
                            <span className="kenya-cta-feature"><CheckCircle size={15} /> Migration Timing</span>
                            <span className="kenya-cta-feature"><CheckCircle size={15} /> Expert Routing</span>
                        </div>
                        <button className="kenya-btn-primary">
                            <Phone size={18} strokeWidth={2} />
                            Let's Discuss!
                        </button>
                        <p className="kenya-hero-subtext">Schedule your private consultation with Angela Hughes</p>
                    </div>
                </div>
            </section>

            {/* ── AS SEEN IN ───────────────────────────────────────────────────────────── */}
            <section className="kenya-seen-in">
                <div className="kenya-inner">
                    <p className="kenya-seen-in-label">AS SEEN IN</p>
                    <div className="kenya-seen-in-logos">
                        {['Travel Weekly', 'TravelPulse', 'Insider Travel Report', 'Travel Age West'].map((pub) => (
                            <span key={pub} className="kenya-seen-in-pub">{pub}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY TRAVELERS FALL IN LOVE ───────────────────────────────────────────── */}
            <section className="kenya-pinnacle-gallery">
                <div className="kenya-pinnacle-gallery-container">
                    <div className="kenya-pinnacle-panels">
                        <div className="kenya-pinnacle-side-label">EST. 1984</div>
                        <div className="kenya-pinnacle-panel">
                            <img src={luxuryRefined} alt="Luxury Safari Interior" loading="lazy" />
                        </div>
                        <div className="kenya-pinnacle-panel">
                            <img src={cruiseView} alt="Safari Landscape" loading="lazy" />
                        </div>
                        <div className="kenya-pinnacle-panel">
                            <img src={singaporeSkyline} alt="Safari Camp" loading="lazy" />
                        </div>
                    </div>

                    <div className="kenya-pinnacle-gallery-text">
                        <span className="kenya-pinnacle-eyebrow">Why Travelers Fall In Love With Kenya</span>
                        <h2>Kenya Changes People.</h2>
                        <p className="kenya-p">
                            There is something about the rhythm of safari life that slows the world down. Mornings begin before sunrise with coffee quietly delivered to your tent while the bush begins to wake. The sound of distant lions carries through the darkness. Vehicles leave camp while the sky slowly shifts from black to gold.
                        </p>
                        <p className="kenya-p">
                            By midday, the pace softens. Evenings return to lanterns, fire pits, stories, and silence under enormous African skies.
                        </p>
                        <p className="kenya-p">
                            Many travelers arrive expecting wildlife. What they do not expect is how Kenya makes them feel. The stillness. The scale. The emotional reset that comes from stepping completely outside normal life.
                        </p>
                        <div className="kenya-pinnacle-gallery-quote">
                            <p>"That is often what stays with people long after the safari ends."</p>
                            <span className="kenya-pinnacle-signature">Angela Hughes, CEO</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY ANGELA HUGHES ──────────────────────────────────────────────────────── */}
            <section className="kenya-section kenya-trust-premium">
                <div className="kenya-inner">
                    <div className="kenya-trust-top">
                        <div className="kenya-trust-portrait-wrap">
                            <div className="kenya-trust-portrait">
                                <img src={image} alt="Angela Hughes - Kenya Safari Expert" />
                            </div>
                            <div className="kenya-trust-experience-badge">
                                <strong>121+</strong>
                                <span>Countries Visited</span>
                            </div>
                        </div>

                        <div className="kenya-trust-intro">
                            <span className="kenya-eyebrow" style={{ color: 'var(--kenya-navy)', marginBottom: '12px' }}>
                                <Crown size={14} />
                                Expert Guidance
                            </span>
                            <h2 className="kenya-h2">About Angela Hughes</h2>
                            <div className="kenya-bar"></div>

                            <div className="kenya-trust-statement">
                                "With over four decades in the travel industry, travel to 121+ countries, and extensive safari experience across Africa, Angela Hughes works with travelers to design Kenya safaris based on timing, wildlife movement, routing, and camp placement rather than generic itineraries."
                            </div>

                            <p className="kenya-p">
                                Because in Kenya, where you stay matters just as much as where you go.
                            </p>

                            <div className="kenya-trust-highlight">
                                <Sparkles size={18} style={{ color: 'var(--kenya-navy)', flexShrink: 0 }} />
                                <p>Clients do not work with Angela Hughes to simply book travel. They work with her to get it right.</p>
                            </div>
                        </div>
                    </div>

                    <div className="kenya-trust-grid">
                        <div className="kenya-trust-card">
                            <div className="kenya-trust-icon"><Crown size={22} /></div>
                            <div className="kenya-trust-card-content">
                                <p className="kenya-trust-label">Luxury Travel Influencer of the Year</p>
                                <p className="kenya-trust-desc">Named Luxury Travel Influencer of the Year by Travel Leaders Network.</p>
                            </div>
                        </div>
                        <div className="kenya-trust-card">
                            <div className="kenya-trust-icon"><Star size={22} /></div>
                            <div className="kenya-trust-card-content">
                                <p className="kenya-trust-label">Most Influential Women in Travel</p>
                                <p className="kenya-trust-desc">Recognized as one of the Most Influential Women in Travel by TravelPulse.</p>
                            </div>
                        </div>
                        <div className="kenya-trust-card">
                            <div className="kenya-trust-icon"><Award size={22} /></div>
                            <div className="kenya-trust-card-content">
                                <p className="kenya-trust-label">Magellan Award Winner</p>
                                <p className="kenya-trust-desc">Winner of multiple Magellan Awards from Travel Weekly.</p>
                            </div>
                        </div>
                        <div className="kenya-trust-card">
                            <div className="kenya-trust-icon"><Clock size={22} /></div>
                            <div className="kenya-trust-card-content">
                                <p className="kenya-trust-label">40+ Years of Industry Leadership</p>
                                <p className="kenya-trust-desc">Decades of firsthand experience designing complex luxury itineraries across Africa.</p>
                            </div>
                        </div>
                        <div className="kenya-trust-card">
                            <div className="kenya-trust-icon"><Globe size={22} /></div>
                            <div className="kenya-trust-card-content">
                                <p className="kenya-trust-label">121+ Countries Traveled</p>
                                <p className="kenya-trust-desc">Unmatched global perspective brought to every safari design.</p>
                            </div>
                        </div>
                        <div className="kenya-trust-card">
                            <div className="kenya-trust-icon"><Gem size={22} /></div>
                            <div className="kenya-trust-card-content">
                                <p className="kenya-trust-label">Extensive Africa Safari Experience</p>
                                <p className="kenya-trust-desc">Deep personal knowledge of Kenya's camps, conservancies, and wildlife movement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NARRATIVE AUTHORITY SECTION ────────────────────────────────────────── */}
            <section className="kenya-narrative-authority">
                <div className="kenya-narrative-container">
                    <div className="kenya-narrative-visual">
                        <img src={kenyaNarrative} alt="Kenya Safari Landscape" className="kenya-narrative-img" />
                        <div className="kenya-narrative-stat">
                            <span className="kenya-stat-num">#1</span>
                            <span className="kenya-stat-label">Global Safari<br />Benchmark</span>
                        </div>
                    </div>

                    <div className="kenya-narrative-content">
                        <div className="kenya-narrative-header">
                            <span className="kenya-narrative-eyebrow">Strategic Analysis</span>
                            <h2 className="kenya-narrative-h2">WHY KENYA REMAINS ONE OF THE BEST SAFARI DESTINATIONS IN THE WORLD</h2>
                            <p className="kenya-narrative-lead">
                                Kenya remains one of the strongest safari destinations in Africa for several reasons.
                            </p>
                        </div>

                        <div className="kenya-narrative-grid">
                            <div className="kenya-narrative-pillar">
                                <div className="kenya-pillar-num">01</div>
                                <div className="kenya-pillar-body">
                                    <h3>Exceptional Wildlife Density</h3>
                                    <p>Wildlife density is exceptional, particularly in and around the Maasai Mara, delivering consistent world-class sightings.</p>
                                </div>
                            </div>

                            <div className="kenya-narrative-pillar">
                                <div className="kenya-pillar-num">02</div>
                                <div className="kenya-pillar-body">
                                    <h3>Superior Infrastructure</h3>
                                    <p>Highly developed systems including strong internal flight networks, experienced safari operators, excellent conservation areas, and Africa's most respected guides.</p>
                                </div>
                            </div>
                        </div>

                        <div className="kenya-narrative-target-section">
                            <p className="kenya-target-label">KENYA WORKS EXCEPTIONALLY WELL FOR:</p>
                            <div className="kenya-target-tags">
                                <span>First time safari travelers</span>
                                <span>Luxury honeymooners</span>
                                <span>Photographers</span>
                                <span>Families</span>
                                <span>Multi generational travelers</span>
                                <span>Repeat Africa travelers</span>
                            </div>
                        </div>

                        <div className="kenya-narrative-footer">
                            <p>The pacing can feel easier than some neighboring countries while still delivering extraordinary wildlife experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ATMOSPHERIC TRUTH SECTION ────────────────────────────────────────── */}
            <section className="kenya-truth-section">
                <div className="kenya-truth-container">
                    <div className="kenya-truth-content">
                        <span className="kenya-truth-eyebrow">Managing Expectations</span>
                        <h2 className="kenya-truth-h2">WHAT KENYA SAFARI IS NOT</h2>
                        
                        <div className="kenya-truth-negatives">
                            <div className="kenya-truth-neg-item">
                                <span className="kenya-neg-slash">/</span>
                                <p>Kenya is not a zoo.</p>
                            </div>
                            <div className="kenya-truth-neg-item">
                                <span className="kenya-neg-slash">/</span>
                                <p>It is not guaranteed wildlife theater operating on a fixed schedule.</p>
                            </div>
                            <div className="kenya-truth-neg-item">
                                <span className="kenya-neg-slash">/</span>
                                <p>It is not a checklist experience where every sighting happens on command.</p>
                            </div>
                        </div>

                        <div className="kenya-truth-philosophical">
                            <p className="kenya-philosophy-lead">
                                Safari rewards patience, positioning, timing, and excellent guiding far more than speed.
                            </p>
                            <p className="kenya-philosophy-body">
                                Some of the most extraordinary moments happen unexpectedly. A leopard appearing at dusk. Elephants moving silently through camp. A crossing that begins after hours of waiting.
                            </p>
                        </div>

                        <div className="kenya-truth-conclusion">
                            <p>This unpredictability is part of what makes safari extraordinary.</p>
                        </div>
                    </div>

                    <div className="kenya-truth-visual">
                        <img src={kenyaLeopard} alt="Leopard at Dusk" className="kenya-truth-img" />
                        <div className="kenya-truth-img-overlay"></div>
                    </div>
                </div>
            </section>

            {/* ── COMPARATIVE DUALITY SECTION ────────────────────────────────────────── */}
            <section className="kenya-duality-section">
                <div className="kenya-duality-header">
                    <span className="kenya-duality-eyebrow">The Regional Benchmark</span>
                    <h2 className="kenya-duality-h2">WHAT MAKES KENYA DIFFERENT FROM TANZANIA</h2>
                    <p className="kenya-duality-lead">
                        Kenya and Tanzania share ecosystems, wildlife movement, and migration patterns, but the experience feels very different.
                    </p>
                </div>

                <div className="kenya-duality-split">
                    <div className="kenya-duality-side kenya-side">
                        <div className="kenya-side-label">THE KENYA EXPERIENCE</div>
                        <div className="kenya-duality-list">
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Easier logistics</p>
                            </div>
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Shorter transfer times</p>
                            </div>
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Concentrated wildlife viewing</p>
                            </div>
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Strong conservancy systems</p>
                            </div>
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Shorter high impact itineraries</p>
                            </div>
                        </div>
                    </div>

                    <div className="kenya-duality-side tanzania-side">
                        <div className="kenya-side-label">THE TANZANIA EXPERIENCE</div>
                        <div className="kenya-duality-list">
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Larger landscapes</p>
                            </div>
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>More expansive routing</p>
                            </div>
                            <div className="kenya-duality-item">
                                <span className="kenya-item-dot"></span>
                                <p>Longer immersive journeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="kenya-duality-pivot">
                    <div className="kenya-pivot-inner">
                        <h3 className="kenya-pivot-h3">Neither is universally better.</h3>
                        <p className="kenya-pivot-text">
                            The right choice depends on timing, travel style, and expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── GEOGRAPHIC FOLIO SECTION (REGIONS) ────────────────────────────────────── */}
            <section className="kenya-regions-folio">
                <div className="kenya-inner">
                    <div className="kenya-folio-header">
                        <span className="kenya-folio-eyebrow">The Regional Strategy</span>
                        <h2 className="kenya-folio-h2">BEST LUXURY SAFARI REGIONS IN KENYA</h2>
                        <p className="kenya-folio-lead">
                            Kenya's regions each deliver completely different experiences. Where you stay defines what you see and how the safari feels.
                        </p>
                    </div>

                    <div className="kenya-folio-stack">
                        {regions.map((region, i) => (
                            <div key={i} className={`kenya-folio-card kenya-tier-${region.tier}`}>
                                <div className="kenya-folio-card-inner">
                                    <div className="kenya-folio-main">
                                        <div className="kenya-folio-title-wrap">
                                            <span className="kenya-folio-index">0{i + 1}</span>
                                            <h3 className="kenya-folio-name">{region.name}</h3>
                                        </div>
                                        <p className="kenya-folio-intro">{region.intro}</p>
                                        
                                        {region.knownFor && (
                                            <div className="kenya-folio-known">
                                                <span className="kenya-folio-sublabel">KNOWN FOR:</span>
                                                <ul className="kenya-folio-list">
                                                    {region.knownFor.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        {region.conclusion && (
                                            <p className="kenya-folio-conclusion">{region.conclusion}</p>
                                        )}
                                    </div>

                                    {region.worksWellFor && (
                                        <div className="kenya-folio-works">
                                            <span className="kenya-folio-sublabel">WORKS PARTICULARLY WELL FOR:</span>
                                            <p className="kenya-folio-works-text">{region.worksWellFor}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="kenya-conservancy-ledger">
                        <div className="kenya-ledger-inner">
                            <Gem size={28} className="kenya-ledger-icon" />
                            <div className="kenya-ledger-content">
                                <h3 className="kenya-ledger-h3">Why Kenya's Conservancies Matter</h3>
                                <p className="kenya-ledger-p">
                                    Private conservancies often provide lower vehicle density, more exclusive experiences, stronger wildlife positioning, greater flexibility, and stronger conservation funding. Many luxury travelers eventually realize that privacy and pacing become just as valuable as wildlife itself. The most luxurious thing in Kenya is often space.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE STRATEGIC CHOICE (LUXURY & PLACEMENT) ──────────────────────────────── */}
            <section className="kenya-editorial-spread">
                <div className="kenya-inner">
                    <div className="kenya-editorial-grid">
                        <div className="kenya-editorial-block kenya-bg-navy">
                            <span className="kenya-editorial-eyebrow">The Luxury Paradox</span>
                            <h2 className="kenya-editorial-h2-white">WHY LUXURY CHANGES THE SAFARI EXPERIENCE</h2>
                            <p className="kenya-editorial-p-white">
                                Luxury safari is not simply about beautiful rooms. It is often operational rather than cosmetic.
                            </p>
                            <div className="kenya-editorial-list-white">
                                <p className="kenya-list-label">LUXURY OFTEN CHANGES:</p>
                                <ul>
                                    <li>Wildlife access</li>
                                    <li>Guide quality</li>
                                    <li>Conservancy access</li>
                                    <li>Flexibility</li>
                                    <li>Transfer efficiency</li>
                                    <li>Crowd levels</li>
                                </ul>
                            </div>
                            <p className="kenya-editorial-footer-white">
                                Safari is one of the few trips in the world where where you sleep can completely change what you see.
                            </p>
                        </div>

                        <div className="kenya-editorial-block kenya-border-navy">
                            <span className="kenya-editorial-eyebrow">Strategic Positioning</span>
                            <h2 className="kenya-editorial-h2">WHY CAMP PLACEMENT MATTERS MORE THAN CAMP BRAND</h2>
                            <p className="kenya-editorial-p">
                                Many travelers focus almost entirely on camp photography. But in safari planning, camp location often matters far more than aesthetics.
                            </p>
                            <div className="kenya-editorial-highlight">
                                "The wrong camp in the right region can still create the wrong safari."
                            </div>
                            <div className="kenya-editorial-list">
                                <p className="kenya-list-label">POSITIONING AFFECTS:</p>
                                <ul>
                                    <li>Wildlife access</li>
                                    <li>Migration timing</li>
                                    <li>Drive times</li>
                                    <li>Crowd density</li>
                                    <li>Safari rhythm</li>
                                </ul>
                            </div>
                            <p className="kenya-editorial-footer">
                                This is one of the biggest mistakes travelers make when booking safari without experienced guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE SAFARI SOUL (DAILY LIFE & WAKING UP) ───────────────────────────────── */}
            <section className="kenya-soul-spread">
                <div className="kenya-soul-bg"></div>
                <div className="kenya-inner kenya-relative">
                    <div className="kenya-soul-layout">
                        <div className="kenya-soul-content">
                            <span className="kenya-soul-eyebrow">The Rhythm of the Bush</span>
                            <h2 className="kenya-soul-h2">WHAT DAILY LIFE ON SAFARI ACTUALLY LOOKS LIKE</h2>
                            <p className="kenya-soul-p">
                                Most days begin before sunrise with coffee quietly delivered to your tent while camp is still dark. Vehicles leave early because wildlife activity is strongest in the cooler morning hours.
                            </p>
                            <p className="kenya-soul-p">
                                Afternoons are slower. Travelers often spend time reading, watching wildlife from camp, or simply sitting quietly overlooking the plains. Evenings return to lanterns, fire pits, storytelling, and silence under enormous African skies.
                            </p>
                            <div className="kenya-soul-quote">
                                "Safari changes the way people think about silence."
                            </div>
                            <p className="kenya-soul-footer">
                                Many travelers arrive expecting constant activity. Instead, safari often becomes one of the most emotionally grounding trips they have ever taken.
                            </p>
                        </div>

                        <div className="kenya-soul-feature">
                            <div className="kenya-soul-feature-inner">
                                <h3 className="kenya-feature-h3">Waking Up in the Maasai Mara</h3>
                                <p className="kenya-feature-p">
                                    Before sunrise, camp is quiet except for distant wildlife moving through darkness. Lanterns flicker outside tents while the sky slowly changes color across the plains.
                                </p>
                                <p className="kenya-feature-p">
                                    There are mornings when elephants walk directly through camp. Evenings where lions can be heard after dinner.
                                </p>
                                <div className="kenya-feature-tag">
                                    Luxury in Kenya is not disconnected from nature. The best camps make travelers feel immersed inside it.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE LOGISTICS BLUEPRINT (USA & NAIROBI) ─────────────────────────────────── */}
            <section className="kenya-logistics-spread">
                <div className="kenya-inner">
                    <div className="kenya-logistics-grid">
                        <div className="kenya-logistics-card">
                            <h2 className="kenya-logistics-h2">PLANNING FROM THE UNITED STATES</h2>
                            <div className="kenya-logistics-flights">
                                <span className="kenya-logistics-label">PRIMARY GATEWAYS:</span>
                                <div className="kenya-gateway-tags">
                                    <span>New York</span>
                                    <span>Atlanta</span>
                                    <span>Washington DC</span>
                                    <span>Chicago</span>
                                    <span>Miami</span>
                                </div>
                            </div>
                            <p className="kenya-logistics-p">
                                Flights typically connect through Europe, the Middle East, or African gateways before arriving in Nairobi.
                            </p>
                            <div className="kenya-logistics-ideal">
                                <Clock size={20} />
                                <span>7 to 10 days is ideal for most luxury travelers.</span>
                            </div>
                        </div>

                        <div className="kenya-logistics-card kenya-bg-soft">
                            <h2 className="kenya-logistics-h2">LUXURY NAIROBI BEFORE SAFARI</h2>
                            <p className="kenya-logistics-p">
                                Nairobi is often treated as simply an arrival point, but for luxury travelers it can become an important part of the experience.
                            </p>
                            <div className="kenya-logistics-experiences">
                                <span className="kenya-logistics-label">POPULAR LUXURY EXPERIENCES:</span>
                                <ul>
                                    <li>Giraffe Manor</li>
                                    <li>Hemingways Nairobi</li>
                                    <li>Karen Blixen experiences</li>
                                    <li>Private cultural touring</li>
                                    <li>Fine dining experiences</li>
                                </ul>
                            </div>
                            <p className="kenya-logistics-footer">
                                Spending one or two nights in Nairobi before safari often creates a much smoother transition into East Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE INTELLIGENT TRAVELER (WORRIES & TIMING) ───────────────────────────── */}
            <section className="kenya-traveler-spread">
                <div className="kenya-inner">
                    <div className="kenya-traveler-header">
                        <h2 className="kenya-traveler-h2">THE INTELLIGENT TRAVELER'S PERSPECTIVE</h2>
                        <div className="kenya-bar-center"></div>
                    </div>

                    <div className="kenya-traveler-grid">
                        <div className="kenya-traveler-card">
                            <div className="kenya-traveler-icon"><ShieldCheck size={32} /></div>
                            <h3 className="kenya-traveler-h3">Common Concerns</h3>
                            <p className="kenya-traveler-p">Many first time safari travelers worry about safety, bugs, bush flights, bathrooms, malaria, food quality, medical care, and comfort levels.</p>
                            <div className="kenya-traveler-reality">
                                <span className="kenya-reality-label">THE REALITY:</span>
                                <p>Luxury safari camps today are often highly sophisticated operations with exceptional hospitality and comfort. Many travelers are surprised by how refined the experience feels.</p>
                            </div>
                        </div>

                        <div className="kenya-traveler-card kenya-bg-dark text-white">
                            <div className="kenya-traveler-icon"><Calendar size={32} style={{ color: '#93c5fd' }} /></div>
                            <h3 className="kenya-traveler-h3">The Migration Myth</h3>
                            <p className="kenya-traveler-p">The Great Migration is extraordinary, but peak river crossing season is not automatically the best safari for every traveler.</p>
                            <div className="kenya-traveler-list">
                                <span className="kenya-list-label">DURING PEAK SEASON:</span>
                                <ul>
                                    <li>Pricing is highest</li>
                                    <li>Camps sell out far in advance</li>
                                    <li>Vehicle density can increase</li>
                                    <li>Safari pacing can feel more intense</li>
                                </ul>
                            </div>
                            <p className="kenya-traveler-alternative">
                                The best safari is not always the most famous season. It is the season that best matches the traveler. Some prefer January–March or the Green Season.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── BEST TIME TO VISIT ────────────────────────────────────────────────────── */}
            <section className="kenya-section kenya-bg-dark">
                <div className="kenya-bg-pattern"></div>
                <div className="kenya-inner kenya-relative">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="kenya-eyebrow">
                            <Calendar size={14} />
                            Timing Your Safari
                        </span>
                        <h2 className="kenya-h2-white">Best Time for a Luxury Kenya Safari</h2>
                        <div className="kenya-bar-white kenya-bar-center"></div>
                    </div>

                    <div className="kenya-seasons-grid">
                        <div className="kenya-season-card kenya-season-peak">
                            <div className="kenya-season-icon"><Binoculars size={28} /></div>
                            <h3 className="kenya-season-title">July – October</h3>
                            <p className="kenya-season-desc">Peak Great Migration season in the Maasai Mara. Best for river crossings, predator activity, and first time safari travelers.</p>
                            <ul className="kenya-season-list">
                                <li><CheckCircle size={14} /> River crossings</li>
                                <li><CheckCircle size={14} /> Predator activity</li>
                                <li><CheckCircle size={14} /> First-time travelers</li>
                            </ul>
                        </div>

                        <div className="kenya-season-card kenya-season-excellent">
                            <div className="kenya-season-icon"><Star size={28} /></div>
                            <h3 className="kenya-season-title">January – March</h3>
                            <p className="kenya-season-desc">Excellent wildlife viewing with fewer crowds. Best for photographers, repeat safari travelers, and luxury value seekers.</p>
                            <ul className="kenya-season-list">
                                <li><CheckCircle size={14} /> Photographers</li>
                                <li><CheckCircle size={14} /> Fewer crowds</li>
                                <li><CheckCircle size={14} /> Repeat travelers</li>
                            </ul>
                        </div>

                        <div className="kenya-season-card kenya-season-green">
                            <div className="kenya-season-icon"><TreePine size={28} /></div>
                            <h3 className="kenya-season-title">April – May</h3>
                            <p className="kenya-season-desc">Green season with lower pricing, dramatic scenery, and fewer tourists. Requires flexibility with weather.</p>
                            <ul className="kenya-season-list">
                                <li><CheckCircle size={14} /> Lower pricing</li>
                                <li><CheckCircle size={14} /> Dramatic scenery</li>
                                <li><CheckCircle size={14} /> Fewer tourists</li>
                            </ul>
                        </div>
                    </div>

                    <div className="kenya-migration-note">
                        <p className="kenya-migration-title">The Great Migration in Kenya</p>
                        <p className="kenya-p-white">River crossings in the Maasai Mara typically occur between July and October, though movement is never guaranteed. This is where positioning matters. The difference between being properly positioned and poorly positioned can define the entire safari experience.</p>
                    </div>
                </div>
            </section>

            {/* ── PRICING TABLE ─────────────────────────────────────────────────────────── */}
            <section className="kenya-comparison-premium">
                <div className="kenya-inner">
                    <div className="kenya-comparison-header">
                        <h2 className="kenya-h2">Luxury Kenya Safari Cost</h2>
                        <div className="kenya-bar kenya-bar-center"></div>
                        <p className="kenya-p" style={{ maxWidth: '720px', margin: '0 auto' }}>
                            Luxury Kenya safari pricing varies significantly based on season, camp level, private versus shared safari, internal flights, migration timing, and conservancy access.
                        </p>
                    </div>

                    <div className="kenya-table-container">
                        <table className="kenya-premium-table">
                            <thead>
                                <tr>
                                    <th>Safari Level</th>
                                    <th>Experience</th>
                                    <th>Typical Investment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricing.map((row, i) => (
                                    <tr key={i}>
                                        <td className="kenya-level-cell">
                                            <span className={`kenya-tier-badge kenya-tier-${row.tier}`}>{row.level}</span>
                                        </td>
                                        <td>{row.experience}</td>
                                        <td className="kenya-investment-cell">{row.investment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="kenya-pricing-detail-grid">
                        <div className="kenya-pricing-detail-card">
                            <p className="kenya-pricing-detail-amount">~$25,000 Per Couple</p>
                            <p className="kenya-pricing-detail-title">Entry Luxury Level</p>
                            <ul className="kenya-pricing-detail-list">
                                <li><CheckCircle size={14} /> Upscale camps</li>
                                <li><CheckCircle size={14} /> Shared game drives</li>
                                <li><CheckCircle size={14} /> Internal flights</li>
                                <li><CheckCircle size={14} /> Shorter itineraries</li>
                            </ul>
                            <p className="kenya-pricing-detail-note">Excellent first luxury safari level.</p>
                        </div>
                        <div className="kenya-pricing-detail-card kenya-pricing-featured">
                            <p className="kenya-pricing-detail-amount">~$50,000 Per Couple</p>
                            <p className="kenya-pricing-detail-title">Premium Level</p>
                            <ul className="kenya-pricing-detail-list">
                                <li><CheckCircle size={14} /> Stronger camp positioning</li>
                                <li><CheckCircle size={14} /> Luxury conservancies</li>
                                <li><CheckCircle size={14} /> Private guiding options</li>
                                <li><CheckCircle size={14} /> More refined routing</li>
                            </ul>
                            <p className="kenya-pricing-detail-note">This is where safari becomes dramatically more personalized.</p>
                        </div>
                        <div className="kenya-pricing-detail-card">
                            <p className="kenya-pricing-detail-amount">$100,000+ Per Couple</p>
                            <p className="kenya-pricing-detail-title">Ultra Luxury Level</p>
                            <ul className="kenya-pricing-detail-list">
                                <li><CheckCircle size={14} /> Private charter aircraft</li>
                                <li><CheckCircle size={14} /> Exclusive use villas</li>
                                <li><CheckCircle size={14} /> Elite conservancies</li>
                                <li><CheckCircle size={14} /> Private photography guides</li>
                            </ul>
                            <p className="kenya-pricing-detail-note">At this level, safari becomes almost entirely tailored around the traveler.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST LUXURY CAMPS ─────────────────────────────────────────────────────── */}
            <section className="kenya-section kenya-bg-soft">
                <div className="kenya-inner">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="kenya-eyebrow" style={{ justifyContent: 'center' }}>
                            <Gem size={14} />
                            Where to Stay
                        </span>
                        <h2 className="kenya-h2">Best Luxury Safari Camps in Kenya</h2>
                        <div className="kenya-bar kenya-bar-center"></div>
                        <p className="kenya-p" style={{ maxWidth: '680px', margin: '0 auto' }}>
                            Beautiful camp photography does not always create the best safari experience. Camp location often matters far more than aesthetics.
                        </p>
                    </div>

                    <div className="kenya-camps-grid">
                        {camps.map((camp, i) => (
                            <div key={i} className="kenya-camp-card">
                                <div className="kenya-camp-number">{String(i + 1).padStart(2, '0')}</div>
                                <h3 className="kenya-camp-name">{camp.name}</h3>
                                <p className="kenya-camp-desc">{camp.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="kenya-camp-warning">
                        <div className="kenya-camp-warning-inner">
                            <ShieldCheck size={22} style={{ color: 'var(--kenya-navy)', flexShrink: 0 }} />
                            <div>
                                <p className="kenya-camp-warning-title">Why Some Camps Are Overhyped</p>
                                <p className="kenya-p">Beautiful camp photography does not always create the best safari experience. Some highly marketed camps may have weaker wildlife positioning, longer drive times, heavier vehicle density, and less experienced guiding. Meanwhile, some of the most extraordinary safari experiences happen in quieter camps with exceptional location and guiding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SAMPLE ITINERARY ──────────────────────────────────────────────────────── */}
            <section className="kenya-section kenya-bg-white">
                <div className="kenya-inner">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="kenya-eyebrow" style={{ justifyContent: 'center' }}>
                            <Calendar size={14} />
                            Sample Itinerary
                        </span>
                        <h2 className="kenya-h2">9 Day Luxury Kenya Safari</h2>
                        <div className="kenya-bar kenya-bar-center"></div>
                    </div>

                    <div className="kenya-itinerary-layout">
                        <div className="kenya-itinerary-steps">
                            {[
                                { day: 'Day 1', title: 'Arrival in Nairobi', desc: 'Arrive and settle into luxury Nairobi. Optional Giraffe Manor, Hemingways Nairobi, Karen Blixen experiences, private cultural touring, and fine dining.' },
                                { day: 'Days 2–5', title: 'Maasai Mara Conservancy', desc: 'Immersive conservancy experience focused on migration positioning and wildlife density. Predator sightings, river crossings, and classic East Africa scenery.' },
                                { day: 'Days 6–8', title: 'Lewa Conservancy', desc: 'Rhino conservation and lower density safari experiences. Exceptional guiding, low vehicle density, and highly refined safari operations.' },
                                { day: 'Day 9', title: 'Departure', desc: 'Return through Nairobi for departure, or extend with a beach stay in Seychelles or Zanzibar.' },
                            ].map((step, i) => (
                                <div key={i} className="kenya-itinerary-step">
                                    <div className="kenya-itinerary-step-day">{step.day}</div>
                                    <div className="kenya-itinerary-step-content">
                                        <p className="kenya-itinerary-step-title">{step.title}</p>
                                        <p className="kenya-itinerary-step-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="kenya-itinerary-note">
                            <Compass size={28} style={{ color: 'var(--kenya-navy)', marginBottom: '20px' }} />
                            <h3 className="kenya-h3">Why This Itinerary Works</h3>
                            <p className="kenya-p">This itinerary works particularly well because it balances iconic wildlife experiences with quieter conservation focused safari experiences. It combines the Maasai Mara's legendary wildlife density with Lewa's more exclusive, conservation driven atmosphere.</p>
                            <div className="kenya-intro-highlight">
                                Most luxury Kenya safaris work best between 7 and 10 days.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LIFESTYLE DUALITY (HONEYMOONS & FAMILIES) ──────────────────────────────── */}
            <section className="kenya-lifestyle-duo">
                <div className="kenya-inner">
                    <div className="kenya-duo-grid">
                        <div className="kenya-duo-panel kenya-honeymoon">
                            <div className="kenya-duo-content">
                                <span className="kenya-duo-eyebrow">Intimacy & Adventure</span>
                                <h2 className="kenya-duo-h2">WHY KENYA IS A TOP HONEYMOON DESTINATION</h2>
                                <p className="kenya-duo-intro">
                                    Few trips combine adventure, intimacy, and emotional connection the way safari does. Many couples describe it as one of the few trips where they truly disconnected from the outside world together.
                                </p>
                                <div className="kenya-duo-features">
                                    <span className="kenya-duo-label">HONEYMOON SAFARIS OFTEN INCLUDE:</span>
                                    <ul>
                                        <li>Private tented camps</li>
                                        <li>Candlelit dinners under the stars</li>
                                        <li>Outdoor bathtubs overlooking the plains</li>
                                        <li>Hot air balloon experiences</li>
                                        <li>Seamless beach extensions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="kenya-duo-panel kenya-family">
                            <div className="kenya-duo-content">
                                <span className="kenya-duo-eyebrow">Immersive Connection</span>
                                <h2 className="kenya-duo-h2">WHY KENYA WORKS SO WELL FOR FAMILIES</h2>
                                <p className="kenya-duo-intro">
                                    Luxury safari can become one of the most meaningful family trips travelers ever take. Children often become deeply engaged because safari feels immersive rather than passive.
                                </p>
                                <div className="kenya-duo-features">
                                    <span className="kenya-duo-label">FAMILY SAFARIS OFTEN INCLUDE:</span>
                                    <ul>
                                        <li>Private guides</li>
                                        <li>Family villas or tents</li>
                                        <li>Flexible pacing</li>
                                        <li>Educational wildlife experiences</li>
                                        <li>Cultural interaction opportunities</li>
                                    </ul>
                                </div>
                                <p className="kenya-duo-footer">
                                    Many families leave safari surprised by how disconnected everyone became from devices and how connected they became to each other instead.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WISDOM COLUMNS (UNDERESTIMATES & PACING) ─────────────────────────────── */}
            <section className="kenya-wisdom-columns">
                <div className="kenya-inner">
                    <div className="kenya-wisdom-grid">
                        <div className="kenya-wisdom-col">
                            <div className="kenya-wisdom-header">
                                <span className="kenya-wisdom-index">Expert Insight</span>
                                <h2 className="kenya-wisdom-h2">WHAT LUXURY TRAVELERS UNDERESTIMATE MOST</h2>
                            </div>
                            <p className="kenya-wisdom-p">
                                Even experienced luxury travelers often underestimate the critical nuances of a Kenya safari. Luxury here is not about excess; in the best camps, luxury disappears into the experience itself.
                            </p>
                            <div className="kenya-wisdom-list">
                                <span className="kenya-list-label">COMMONLY UNDERESTIMATED:</span>
                                <ul>
                                    <li>Travel distances</li>
                                    <li>Luggage restrictions on bush flights</li>
                                    <li>How early top camps sell out</li>
                                    <li>How much camp placement matters</li>
                                    <li>How emotionally immersive safari becomes</li>
                                </ul>
                            </div>
                        </div>

                        <div className="kenya-wisdom-col kenya-bg-soft">
                            <div className="kenya-wisdom-header">
                                <span className="kenya-wisdom-index">The Rhythm of the Savanna</span>
                                <h2 className="kenya-wisdom-h2">WHY PACING MATTERS EMOTIONALLY ON SAFARI</h2>
                            </div>
                            <p className="kenya-wisdom-p">
                                Safari is not just about wildlife. It is about rhythm. Too many flights and camp changes can create emotional fatigue rather than immersion.
                            </p>
                            <div className="kenya-wisdom-list">
                                <span className="kenya-list-label">THE BEST SAFARIS CREATE:</span>
                                <ul>
                                    <li>Stillness</li>
                                    <li>Pacing</li>
                                    <li>Flexibility</li>
                                    <li>Time to absorb the experience</li>
                                </ul>
                            </div>
                            <div className="kenya-wisdom-quote">
                                "Safari is one of the few trips where slowing down actually increases the quality of the experience."
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── HOW WE DESIGN KENYA SAFARIS ─────────────────────────────────────────── */}
            <section className="kenya-section kenya-bg-white">
                <div className="kenya-inner">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="kenya-h2">How We Design Kenya Safaris Differently</h2>
                        <div className="kenya-bar kenya-bar-center"></div>
                    </div>

                    <div className="kenya-process-steps">
                        {[
                            { num: '01', title: 'Strategic Camp Placement', desc: 'We focus on wildlife movement and camp location over brand name or aesthetics. The wrong camp in the right region can still create the wrong safari.' },
                            { num: '02', title: 'Wildlife Movement Planning', desc: 'We design itineraries around migration timing, wildlife density, and seasonal patterns rather than generic seasonal recommendations.' },
                            { num: '03', title: 'Routing Efficiency', desc: 'We minimize unnecessary transit time and balance logistics with experience. Safari pacing and rhythm matter as much as the destinations themselves.' },
                            { num: '04', title: 'Guide Quality Focus', desc: 'We prioritize camps with exceptional guiding because safari rewards patience, positioning, timing, and excellent guiding far more than speed.' },
                            { num: '05', title: 'Conservation Integration', desc: 'We build itineraries that support conservation areas where lower vehicle density and stronger wildlife positioning create better safari experiences.' },
                        ].map((step, i) => (
                            <div key={i} className="kenya-step">
                                <div className="kenya-step-num">{step.num}</div>
                                <div className="kenya-step-content">
                                    <p className="kenya-step-title">{step.title}</p>
                                    <p className="kenya-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────────────────────────── */}
            <section className="kenya-section kenya-bg-dark2">
                <div className="kenya-bg-pattern"></div>
                <div className="kenya-inner kenya-relative">
                    <div className="kenya-cta-section-inner">
                        <h2 className="kenya-h2-white">Schedule a 15 Minute Kenya Safari Consultation</h2>
                        <div className="kenya-bar-white kenya-bar-center" style={{ margin: '0 auto 20px' }}></div>
                        <p className="kenya-p-white" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 12px' }}>
                            The best safari camps in Kenya are intentionally small, often with fewer than a dozen tents. During peak migration season, the difference between planning early and planning late can completely change the quality of the experience.
                        </p>
                        <p className="kenya-p-white" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
                            Angela Hughes and Trips &amp; Ships Luxury Travel create Kenya safaris based on wildlife movement, camp placement, conservation, and experience rather than generic packages.
                        </p>
                        <div className="kenya-cta-actions">
                            <button className="kenya-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="kenya-btn-outline-white">
                                <LayoutList size={18} />
                                Request Kenya Safari Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────────────────── */}
            <section className="kenya-faq-section">
                <div className="kenya-faq-inner">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="kenya-h2">Luxury Kenya Safari FAQs</h2>
                        <div className="kenya-bar kenya-bar-center"></div>
                    </div>

                    <div className="kenya-faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="kenya-faq-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="kenya-faq-question">
                                    <span>{faq.question}</span>
                                    <span className="kenya-faq-icon">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="kenya-faq-answer">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default LuxuryKenyaSafari