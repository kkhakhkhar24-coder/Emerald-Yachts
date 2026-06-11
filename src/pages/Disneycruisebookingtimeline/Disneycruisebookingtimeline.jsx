import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import {
    Calendar, CheckCircle, Clock, Star, Crown, Phone,
    ChevronRight, Globe, LayoutList, Sparkles, Compass,
    MapPin, Gem, Award, Ship, Heart, Users, ArrowRight,
    Anchor, FileText, AlertCircle, Plane, Hotel, CreditCard
} from 'lucide-react'

// ── Hero images ──────────────────────────────────────────────────────────────
// import hero1 from '../../assets/DisneyCruiseBookingTimeline/hero1.jpg'
// import hero2 from '../../assets/DisneyCruiseBookingTimeline/hero2.jpg'
// import hero3 from '../../assets/DisneyCruiseBookingTimeline/hero3.jpg'

// ── Section images ───────────────────────────────────────────────────────────
// import bookingEarly      from '../../assets/DisneyCruiseBookingTimeline/booking-early.jpg'
// import conciergeGuests   from '../../assets/DisneyCruiseBookingTimeline/concierge-guests.jpg'
// import castawayClub      from '../../assets/DisneyCruiseBookingTimeline/castaway-club.jpg'
// import excursionBooking  from '../../assets/DisneyCruiseBookingTimeline/excursion-booking.jpg'
// import onlineCheckIn     from '../../assets/DisneyCruiseBookingTimeline/online-checkin.jpg'
// import packingImg        from '../../assets/DisneyCruiseBookingTimeline/packing.jpg'
// import embarkationDay    from '../../assets/DisneyCruiseBookingTimeline/embarkation-day.jpg'
// import transportImg      from '../../assets/DisneyCruiseBookingTimeline/transport.jpg'
// import Profile_AH        from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function DisneyCruiseBookingTimeline() {

    // ── Hero rotation ─────────────────────────────────────────────────────────
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = []
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    // ── FAQ accordion ─────────────────────────────────────────────────────────
    const [activeFaq, setActiveFaq] = useState(null)
    const toggleFaq = i => setActiveFaq(activeFaq === i ? null : i)

    // ── Mistakes slider ───────────────────────────────────────────────────────
    const [activeSlide, setActiveSlide] = useState(0)
    const [sliderHovered, setSliderHovered] = useState(false)
    useEffect(() => {
        if (sliderHovered) return
        const t = setInterval(() => setActiveSlide(p => (p + 1) % mistakes.length), 5000)
        return () => clearInterval(t)
    }, [sliderHovered])

    // ── Data ──────────────────────────────────────────────────────────────────
    const mistakes = [
        {
            title: 'Waiting Too Long to Book',
            desc: 'Disney prices typically increase over time.',
            bullets: [
                'Best cabin selection disappears quickly',
                'Popular itineraries sell out well in advance'
            ]
        },
        {
            title: 'Missing Reservation Windows',
            desc: 'Popular activities can sell out quickly.',
            bullets: [
                'Palo and Enchanté fill up fast',
                'Port Adventures often sell out before sailing'
            ]
        },
        {
            title: 'Delaying Online Check-In',
            desc: 'Late check-in may limit arrival time choices.',
        },
        {
            title: 'Forgetting Travel Documents',
            desc: 'Passport issues can disrupt embarkation.',
        },
        {
            title: 'Not Purchasing Travel Insurance',
            desc: 'Unexpected travel disruptions can occur.',
        }
    ]

    const faqs = [
        { q: 'How far in advance should I book a Disney Cruise?', a: 'Booking 12–24 months in advance often provides the best pricing and cabin selection.' },
        { q: 'Does Disney Cruise pricing go up over time?', a: 'In many cases, yes. Disney Cruise Line often uses demand-based pricing.' },
        { q: 'When can I book excursions?', a: 'Booking windows typically open between 75 and 123 days before sailing depending on your Castaway Club status.' },
        { q: 'When can first-time cruisers make reservations?', a: 'Most first-time guests can book activities approximately 75 days before sailing.' },
        { q: "What is Castaway Club?", a: "Disney Cruise Line's loyalty program that offers early booking privileges and other benefits." },
        { q: 'When should I complete online check-in?', a: 'As soon as your check-in window opens, usually around 30–40 days before departure.' },
        { q: 'Can I reserve Palo before sailing?', a: 'Yes. Palo reservations become available during your booking window.' },
        { q: 'What happens if excursions sell out?', a: 'Additional availability sometimes opens closer to sailing or once onboard.' },
        { q: 'When is final payment due?', a: 'Final payment deadlines vary by itinerary and stateroom category.' },
        { q: 'Should I arrive the day before my cruise?', a: 'Many travelers choose to arrive one day early to avoid travel delays.' },
        { q: 'When should I book flights?', a: 'Generally 6–9 months before departure for the best selection and pricing.' },
        { q: 'Can I modify reservations after booking?', a: 'Yes, depending on availability and Disney Cruise Line policies.' },
        { q: 'What documents are required for embarkation?', a: 'Requirements vary by itinerary, but passports are strongly recommended.' },
        { q: 'Should I purchase travel insurance?', a: 'Many travelers choose travel insurance to protect against unexpected disruptions.' },
        { q: 'What is the most important deadline before sailing?', a: 'Completing online check-in and ensuring final payment has been made are among the most critical pre-cruise deadlines.' }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com" },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
            }
        ]
    }

    // ── Timeline phases data ──────────────────────────────────────────────────
    const timelinePhases = [
        {
            window: '12–24 Months Before Sailing',
            title: 'Book Your Cruise',
            icon: <Calendar size={22} />,
            color: 'var(--medi-navy)',
            // img: bookingEarly,
            badge: 'FIRST PRIORITY',
            intro: 'The best time to book a Disney Cruise is often as early as possible. Disney Cruise Line pricing generally increases as ships fill up.',
            subheading: 'Benefits of booking early include:',
            bullets: [
                'Best cabin selection',
                'Lower introductory pricing',
                'Access to preferred sailing dates',
                'More room category options',
                'Better family stateroom availability'
            ],
            note: 'Popular itineraries such as Alaska, Europe, Hawaii, and holiday cruises often sell out well in advance.'
        },
        {
            window: '9–12 Months Before Sailing',
            title: 'Monitor Promotions',
            icon: <Star size={22} />,
            color: 'var(--medi-navy)',
                // img: castawayClub,
            badge: 'SAVINGS WATCH',
            intro: 'After booking, keep an eye on:',
            bullets: [
                'Disney Cruise Line promotions',
                'Florida resident rates',
                'Military discounts',
                'Canadian resident offers',
                'Last-minute upgrades'
            ],
            note: 'If Disney releases a lower fare for your category before final payment, your travel advisor may be able to help adjust your reservation.'
        },
        {
            window: '6–9 Months Before Sailing',
            title: 'Plan Transportation',
            icon: <Plane size={22} />,
            color: 'var(--medi-navy)',
            // img: transportImg,
            badge: 'LOGISTICS',
            intro: 'Now is the time to begin arranging:',
            bullets: [
                'Flights — Book airfare before prices increase',
                'Pre-Cruise Hotels — Many guests arrive one day early to avoid travel delays',
                'Ground Transportation — Disney transfers, private transportation, rideshare services, or rental cars'
            ],
            note: 'Planning transportation early reduces stress closer to departure.'
        },
        {
            window: '120–130 Days Before Sailing',
            title: 'Concierge Guests',
            icon: <Crown size={22} />,
            color: 'var(--medi-navy)',
            // img: conciergeGuests,
            badge: 'PREMIUM ACCESS',
            intro: 'Guests staying in Concierge-level accommodations receive the earliest booking windows. Concierge guests can reserve:',
            bullets: [
                'Shore excursions',
                'Adult dining',
                'Beverage tastings',
                'Spa appointments',
                'Select onboard activities'
            ],
            note: 'These premium booking windows offer significant advantages for popular experiences.'
        },
        {
            window: '75–123 Days Before Sailing',
            title: 'Castaway Club Booking Windows',
            icon: <Anchor size={22} />,
            color: 'var(--medi-navy)',
            // img: castawayClub,
            badge: 'LOYALTY REWARDS',
            intro: 'Returning Disney cruisers receive early access based on loyalty status.',
            tiers: [
                { label: 'Pearl Members', days: 'Approximately 123 days before sailing' },
                { label: 'Platinum Members', days: 'Approximately 120 days before sailing' },
                { label: 'Gold Members', days: 'Approximately 105 days before sailing' },
                { label: 'Silver Members', days: 'Approximately 90 days before sailing' }
            ],
            note: 'These windows allow experienced cruisers to reserve activities before general guests.'
        },
        {
            window: '75–90 Days Before Sailing',
            title: 'First-Time Guests',
            icon: <Sparkles size={22} />,
            color: 'var(--medi-navy)',
            // img: excursionBooking,
            badge: 'FIRST-TIMERS',
            intro: 'Most first-time Disney cruisers can begin making reservations around 75 days before embarkation. Popular items include:',
            bullets: [
                'Port Adventures — Excursions often sell out quickly',
                'Palo Brunch — One of the most sought-after reservations',
                'Palo Dinner — Adults-only fine dining experience',
                'Enchanté — Available on select ships',
                'Beverage Tastings — Wine, whiskey, champagne, and mixology classes',
                'Spa Treatments — Massages and specialty treatments'
            ]
        },
        {
            window: '60–75 Days Before Sailing',
            title: 'Finalize Plans',
            icon: <CheckCircle size={22} />,
            color: 'var(--medi-navy)',
            // img: transportImg,
            badge: 'REVIEW & CONFIRM',
            intro: 'At this stage:',
            bullets: [
                'Review excursion reservations',
                'Purchase travel insurance',
                'Arrange airport transfers',
                'Confirm dining preferences',
                'Verify passport requirements',
                'Double-check all reservation details to avoid surprises later'
            ]
        },
        {
            window: '45–60 Days Before Sailing',
            title: 'Make Final Payments',
            icon: <CreditCard size={22} />,
            color: 'var(--medi-navy)',
            // img: onlineCheckIn,
            badge: 'PAYMENT DUE',
            intro: 'For most Disney cruises, final payment deadlines occur well before departure. Missing payment deadlines could result in cancellation. Review:',
            bullets: [
                'Cruise fare balance',
                'Insurance payments',
                'Transportation arrangements',
                'Hotel reservations'
            ]
        },
        {
            window: '30–40 Days Before Sailing',
            title: 'Complete Online Check-In',
            icon: <FileText size={22} />,
            color: 'var(--medi-navy)',
            // img: onlineCheckIn,
            badge: 'IMPORTANT STEP',
            intro: "Online check-in is one of the most important steps. You'll need:",
            bullets: [
                'Passport information',
                'Emergency contact details',
                'Payment method',
                'Travel documentation'
            ],
            subheading2: 'During check-in, guests select:',
            bullets2: [
                'Port arrival times',
                'Onboard payment methods',
                'Travel preferences'
            ],
            note: 'Earlier completion often provides more arrival time options.'
        },
        {
            window: '14–30 Days Before Sailing',
            title: 'Prepare Travel Documents',
            icon: <FileText size={22} />,
            color: 'var(--medi-navy)',
            // img: packingImg,
            badge: 'DOCUMENTATION',
            intro: 'Gather:',
            bullets: [
                'Passports — Verify expiration dates',
                'Identification — Required for embarkation',
                'Cruise Documents — Print or download all confirmations',
                'Travel Insurance Information — Keep policy details accessible'
            ]
        },
        {
            window: '7–14 Days Before Sailing',
            title: 'Begin Packing',
            icon: <Sparkles size={22} />,
            color: 'var(--medi-navy)',
            // img: packingImg,
            badge: 'PREPARATION',
            intro: 'Start preparing:',
            bullets: [
                'Cruise attire',
                'Swimwear',
                'Formal night outfits',
                'Medications',
                'Electronics',
                'Travel accessories'
            ],
            note: 'Consider creating a packing checklist to avoid forgetting essentials.'
        },
        {
            window: '1–3 Days Before Sailing',
            title: 'Final Confirmations',
            icon: <CheckCircle size={22} />,
            color: 'var(--medi-navy)',
            // img: transportImg,
            badge: 'FINAL CHECK',
            intro: 'Confirm:',
            bullets: [
                'Flight schedules',
                'Hotel reservations',
                'Transportation details',
                'Cruise terminal directions'
            ],
            note: 'If flying, monitor weather and airline notifications.'
        },
        {
            window: 'Embarkation Day',
            title: 'Embarkation Day',
            icon: <Ship size={22} />,
            color: 'var(--medi-navy)',
            // img: embarkationDay,
            badge: 'CRUISE DAY',
            intro: 'Arrive at the cruise terminal during your assigned arrival window. Have ready:',
            bullets: [
                'Passport or required documentation',
                'Cruise documents',
                'Luggage tags',
                'Payment information'
            ],
            note: 'Once onboard, begin exploring the ship and enjoy the start of your Disney vacation.'
        }
    ]

    const [selectedPhase, setSelectedPhase] = useState(0)

    return (
        <>
            <Helmet>
                <title>Disney Cruise Booking Timeline 2026 | Complete Planning Guide &amp; Key Dates</title>
                <meta name="description" content="Learn the complete Disney Cruise booking timeline, including when to reserve cruises, excursions, dining, onboard activities, transportation, and more. Includes 15 FAQs." />
                <meta name="keywords" content="Disney Cruise Booking Timeline, Disney cruise planning timeline, Disney cruise booking guide, when to book Disney cruise, Disney cruise reservations" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════════
                HERO
            ════════════════════════════════════════════════════════ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Calendar size={16} />
                        <span>Disney Cruise Planning Guide</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Disney Cruise Booking Timeline: When to Book, Reserve, and Plan Your Disney Cruise Vacation
                    </h1>
                    <div className="medi-hero-cta-container">
                        <p className="medi-cta-title-text">Never Miss a Critical Booking Deadline</p>
                        <p className="medi-cta-subtitle-text">From first booking to embarkation day — every milestone, every deadline, every step</p>
                        <div className="medi-cta-features-row">
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={15} />
                                <span>Step-by-Step Timeline</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={15} />
                                <span>Castaway Club Windows</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={15} />
                                <span>Planning Checklist</span>
                            </div>
                        </div>
                        <button className="medi-primary-cta-button">
                            <Phone size={18} />
                            Talk to a Planning Expert
                        </button>
                        <p className="medi-hero-disclaimer-text">Complimentary consultation &middot; No booking fees</p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                PREMIUM INTRO
            ════════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">COMPLETE PLANNING GUIDE</span>
                            <h2 className="medi-premium-heading">Disney Cruise Booking Timeline: A Step-by-Step Guide</h2>
                            <div className="medi-premium-separator"></div>
                            <p className="medi-premium-lead-text">
                                Planning a Disney Cruise is exciting, but many first-time cruisers are surprised by how many reservations and deadlines are involved before embarkation day.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                From selecting your stateroom and booking shore excursions to reserving specialty dining and completing online check-in, knowing what to do—and when to do it—can make your vacation much smoother.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                This Disney Cruise Booking Timeline walks you through the entire planning process so you don't miss important dates or popular experiences.
                            </p>
                            <div className="medi-immersion-list-wrapper" style={{ marginTop: '28px' }}>
                                <p className="medi-immersion-lead-in">This guide covers every critical milestone:</p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Calendar size={20} />, label: 'When to book your cruise' },
                                        { icon: <Star size={20} />, label: 'Monitoring promotions' },
                                        { icon: <Anchor size={20} />, label: 'Castaway Club windows' },
                                        { icon: <Crown size={20} />, label: 'Concierge booking access' },
                                        { icon: <CheckCircle size={20} />, label: 'Final payment deadlines' },
                                        { icon: <Ship size={20} />, label: 'Embarkation day prep' }
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Angela Expert Panel */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CRUISE PLANNING EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes guides families through the full Disney Cruise planning timeline — from initial booking to embarkation day — ensuring no deadline is missed and every experience is secured.
                                </p>
                                <div className="medi-premium-expert-quote-block">
                                    <p className="medi-premium-expert-quote-text">
                                        "Disney cruise planning is its own art form. The booking windows, loyalty tiers, and reservation systems reward those who plan ahead. I've seen guests miss out on their dream experiences simply by waiting a few weeks too long."
                                    </p>
                                    <span className="medi-quote-attribution">— Angela Hughes, CEO, Trips &amp; Ships Luxury Travel</span>
                                </div>
                                <div className="medi-expert-credentials-row">
                                    {[
                                        { num: '40+', label: 'Years Experience' },
                                        { num: '121', label: 'Countries Visited' },
                                        { num: '100s', label: 'Disney Cruises Booked' }
                                    ].map((stat, i) => (
                                        <div key={i} className="medi-expert-stat-chip">
                                            <span className="medi-expert-stat-number">{stat.num}</span>
                                            <span className="medi-expert-stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                INTERACTIVE TIMELINE DASHBOARD  (new section – inline CSS)
            ════════════════════════════════════════════════════════ */}
            <section style={{
                background: 'var(--medi-bg-dark)',
                padding: '80px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative coord watermarks matching excel-section style */}
                <div style={{
                    position: 'absolute', top: '20px', left: '24px',
                    color: 'rgba(255,255,255,0.04)', fontSize: '11px',
                    fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase',
                    pointerEvents: 'none', userSelect: 'none'
                }}>DISNEY CRUISE LINE // BOOKING TIMELINE</div>
                <div style={{
                    position: 'absolute', top: '20px', right: '24px',
                    color: 'rgba(255,255,255,0.04)', fontSize: '11px',
                    fontWeight: '600', letterSpacing: '0.15em',
                    pointerEvents: 'none', userSelect: 'none'
                }}>12–24 MONTHS → EMBARKATION</div>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(147,197,253,0.12)',
                            border: '1px solid rgba(147,197,253,0.25)',
                            borderRadius: '20px', padding: '6px 18px',
                            color: '#93c5fd', fontSize: '12px', fontWeight: '700',
                            letterSpacing: '0.1em', marginBottom: '20px'
                        }}>STEP-BY-STEP PLANNING</span>
                        <h2 className="medi-section-heading" style={{ color: '#ffffff', textAlign: 'center' }}>
                            Complete Disney Cruise Booking Timeline
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered" style={{ background: '#93c5fd' }}></div>
                    </div>

                    {/* Dashboard: tabs left + content right */}
                    <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '32px', alignItems: 'start' }}>

                        {/* Left: scrollable phase tab list */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '8px',
                            maxHeight: '640px', overflowY: 'auto',
                            paddingRight: '8px'
                        }}>
                            {timelinePhases.map((phase, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedPhase(idx)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '14px',
                                        padding: '14px 18px',
                                        background: selectedPhase === idx
                                            ? 'rgba(39,68,114,0.6)'
                                            : 'rgba(255,255,255,0.04)',
                                        border: selectedPhase === idx
                                            ? '1px solid rgba(147,197,253,0.4)'
                                            : '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.25s ease',
                                        width: '100%'
                                    }}
                                >
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                                        background: selectedPhase === idx ? '#93c5fd' : 'rgba(255,255,255,0.08)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: selectedPhase === idx ? 'var(--medi-bg-dark)' : '#94a3b8',
                                        transition: 'all 0.25s ease'
                                    }}>
                                        {phase.icon}
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{
                                            fontSize: '11px', fontWeight: '700',
                                            color: selectedPhase === idx ? '#93c5fd' : '#64748b',
                                            letterSpacing: '0.06em', marginBottom: '3px'
                                        }}>{phase.window}</div>
                                        <div style={{
                                            fontSize: '14px', fontWeight: '600',
                                            color: selectedPhase === idx ? '#ffffff' : '#94a3b8',
                                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                                        }}>{phase.title}</div>
                                    </div>
                                    <ChevronRight size={16} style={{
                                        color: selectedPhase === idx ? '#93c5fd' : '#475569',
                                        flexShrink: 0
                                    }} />
                                </button>
                            ))}
                        </div>

                        {/* Right: selected phase detail card */}
                        <div style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '20px', overflow: 'hidden'
                        }}>
                            {/* Phase image */}
                            <div style={{ position: 'relative', height: '260px' }}>
                                <img
                                    src={timelinePhases[selectedPhase].img}
                                    alt={timelinePhases[selectedPhase].title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.92) 0%, rgba(15,28,46,0.3) 60%, transparent 100%)'
                                }}></div>
                                <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        background: '#93c5fd', color: 'var(--medi-bg-dark)',
                                        borderRadius: '6px', padding: '4px 12px',
                                        fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em',
                                        marginBottom: '8px'
                                    }}>{timelinePhases[selectedPhase].badge}</span>
                                    <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700', margin: 0 }}>
                                        {timelinePhases[selectedPhase].window}
                                    </h3>
                                    <p style={{ color: '#93c5fd', fontSize: '16px', fontWeight: '600', margin: '4px 0 0' }}>
                                        {timelinePhases[selectedPhase].title}
                                    </p>
                                </div>
                            </div>

                            {/* Phase content */}
                            <div style={{ padding: '28px 32px' }}>
                                <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                                    {timelinePhases[selectedPhase].intro}
                                </p>

                                {/* Castaway tier table */}
                                {timelinePhases[selectedPhase].tiers && (
                                    <div style={{ marginBottom: '20px' }}>
                                        {timelinePhases[selectedPhase].tiers.map((tier, i) => (
                                            <div key={i} style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                padding: '12px 16px', marginBottom: '8px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '10px'
                                            }}>
                                                <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '15px' }}>{tier.label}</span>
                                                <span style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '500' }}>{tier.days}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Main bullets */}
                                {timelinePhases[selectedPhase].subheading && (
                                    <p style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '12px' }}>
                                        {timelinePhases[selectedPhase].subheading.toUpperCase()}
                                    </p>
                                )}
                                {timelinePhases[selectedPhase].bullets && (
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                                        {timelinePhases[selectedPhase].bullets.map((b, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                <CheckCircle size={15} style={{ color: '#93c5fd', flexShrink: 0, marginTop: '3px' }} />
                                                <span style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Secondary bullets */}
                                {timelinePhases[selectedPhase].subheading2 && (
                                    <p style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '12px', marginTop: '16px' }}>
                                        {timelinePhases[selectedPhase].subheading2.toUpperCase()}
                                    </p>
                                )}
                                {timelinePhases[selectedPhase].bullets2 && (
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                                        {timelinePhases[selectedPhase].bullets2.map((b, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                <CheckCircle size={15} style={{ color: '#93c5fd', flexShrink: 0, marginTop: '3px' }} />
                                                <span style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Note callout */}
                                {timelinePhases[selectedPhase].note && (
                                    <div style={{
                                        background: 'rgba(147,197,253,0.08)',
                                        border: '1px solid rgba(147,197,253,0.2)',
                                        borderRadius: '10px', padding: '14px 18px', marginTop: '12px'
                                    }}>
                                        <p style={{ color: '#93c5fd', fontSize: '14px', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                                            {timelinePhases[selectedPhase].note}
                                        </p>
                                    </div>
                                )}

                                {/* Navigation arrows */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                    <button
                                        onClick={() => setSelectedPhase(p => Math.max(0, p - 1))}
                                        disabled={selectedPhase === 0}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            background: 'none', border: '1px solid rgba(255,255,255,0.15)',
                                            borderRadius: '8px', padding: '10px 18px',
                                            color: selectedPhase === 0 ? '#475569' : '#cbd5e1',
                                            cursor: selectedPhase === 0 ? 'default' : 'pointer',
                                            fontSize: '14px', fontWeight: '500'
                                        }}
                                    >
                                        <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
                                        Previous
                                    </button>
                                    <span style={{ color: '#64748b', fontSize: '13px', alignSelf: 'center' }}>
                                        {selectedPhase + 1} / {timelinePhases.length}
                                    </span>
                                    <button
                                        onClick={() => setSelectedPhase(p => Math.min(timelinePhases.length - 1, p + 1))}
                                        disabled={selectedPhase === timelinePhases.length - 1}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            background: selectedPhase === timelinePhases.length - 1 ? 'none' : '#93c5fd',
                                            border: '1px solid rgba(147,197,253,0.3)',
                                            borderRadius: '8px', padding: '10px 18px',
                                            color: selectedPhase === timelinePhases.length - 1 ? '#475569' : 'var(--medi-bg-dark)',
                                            cursor: selectedPhase === timelinePhases.length - 1 ? 'default' : 'pointer',
                                            fontSize: '14px', fontWeight: '600'
                                        }}
                                    >
                                        Next
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                CONCIERGE vs CASTAWAY CLUB — diff cards
            ════════════════════════════════════════════════════════ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">BOOKING WINDOW ACCESS</span>
                        <h2 className="medi-diff-main-title">Understanding Booking Priority Windows</h2>
                        <div className="medi-diff-separator"></div>
                        <p style={{ color: '#475569', fontSize: '17px', maxWidth: '680px', margin: '0 auto', textAlign: 'center', lineHeight: '1.7' }}>
                            Not all guests get access to activities at the same time. Understanding your booking window is key to securing the most popular experiences.
                        </p>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Card 1: Concierge */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Crown size={24} /></div>
                                <h3 className="medi-diff-card-title">Concierge Guests</h3>
                            </div>
                            <p className="medi-diff-card-text">120–130 Days Before Sailing</p>
                            <p className="medi-diff-card-text">
                                Guests staying in Concierge-level accommodations receive the earliest booking windows. Concierge guests can reserve:
                            </p>
                            <ul className="medi-diff-experience-list">
                                {['Shore excursions', 'Adult dining', 'Beverage tastings', 'Spa appointments', 'Select onboard activities'].map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} className="medi-diff-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="medi-diff-card-text-secondary">These premium booking windows offer significant advantages for popular experiences.</p>
                        </div>

                        {/* Card 2: Castaway Club */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Anchor size={24} /></div>
                                <h3 className="medi-diff-card-title">Castaway Club Members</h3>
                            </div>
                            <p className="medi-diff-card-text">105–123 Days Before Sailing</p>
                            <p className="medi-diff-card-text">Returning Disney cruisers receive early access based on loyalty status:</p>
                            <ul className="medi-diff-focus-list-premium">
                                {[
                                    { num: '01', label: 'Pearl Members', days: '~123 days' },
                                    { num: '02', label: 'Platinum Members', days: '~120 days' },
                                    { num: '03', label: 'Gold Members', days: '~105 days' },
                                    { num: '04', label: 'Silver Members', days: '~90 days' }
                                ].map((tier, i) => (
                                    <li key={i} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="medi-diff-list-num">{tier.num}</span>
                                        <span style={{ flex: 1 }}>{tier.label}</span>
                                        <span style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600' }}>{tier.days}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 3: First-Time Guests */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Sparkles size={24} /></div>
                                <h3 className="medi-diff-card-title">First-Time Guests</h3>
                            </div>
                            <p className="medi-diff-card-text">75–90 Days Before Sailing</p>
                            <p className="medi-diff-card-text">
                                Most first-time Disney cruisers can begin making reservations around 75 days before embarkation. Popular items include:
                            </p>
                            <ul className="medi-diff-focus-list-premium">
                                {[
                                    { num: '01', label: 'Port Adventures' },
                                    { num: '02', label: 'Palo Brunch' },
                                    { num: '03', label: 'Palo Dinner' },
                                    { num: '04', label: 'Enchanté' },
                                    { num: '05', label: 'Beverage Tastings' },
                                    { num: '06', label: 'Spa Treatments' }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <span className="medi-diff-list-num">{item.num}</span>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">Excursions often sell out quickly — book as soon as your window opens.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                ONLINE CHECK-IN — image-split editorial
            ════════════════════════════════════════════════════════ */}
            <section style={{ background: 'var(--medi-bg-dark2)', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        {/* Image */}
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', position: 'relative' }}>
                            {/* <img
                                src={onlineCheckIn}
                                alt="Disney Cruise online check-in"
                                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                            /> */}
                            <div style={{
                                position: 'absolute', bottom: '24px', left: '24px',
                                background: 'rgba(15,28,46,0.92)', backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px',
                                padding: '16px 20px'
                            }}>
                                <div style={{ fontSize: '12px', color: '#93c5fd', fontWeight: '700', letterSpacing: '0.06em', marginBottom: '4px' }}>IMPORTANT STEP</div>
                                <div style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff' }}>30–40 Days Before Sailing</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span style={{
                                display: 'inline-block', background: 'rgba(147,197,253,0.12)',
                                border: '1px solid rgba(147,197,253,0.25)', borderRadius: '20px',
                                padding: '6px 16px', color: '#93c5fd',
                                fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '20px'
                            }}>CRITICAL DEADLINE</span>
                            <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Complete Online Check-In</h2>
                            <div className="medi-heading-separator-bar" style={{ background: '#93c5fd' }}></div>
                            <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
                                Online check-in is one of the most important steps.
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '12px' }}>YOU'LL NEED:</p>
                            {['Passport information', 'Emergency contact details', 'Payment method', 'Travel documentation'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                                    <CheckCircle size={15} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                    <span style={{ color: '#e2e8f0', fontSize: '15px' }}>{item}</span>
                                </div>
                            ))}
                            <p style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '12px', marginTop: '20px' }}>DURING CHECK-IN, GUESTS SELECT:</p>
                            {['Port arrival times', 'Onboard payment methods', 'Travel preferences'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                                    <Sparkles size={14} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                    <span style={{ color: '#e2e8f0', fontSize: '15px' }}>{item}</span>
                                </div>
                            ))}
                            <div style={{
                                background: 'rgba(147,197,253,0.08)', border: '1px solid rgba(147,197,253,0.2)',
                                borderRadius: '10px', padding: '14px 18px', marginTop: '20px'
                            }}>
                                <p style={{ color: '#93c5fd', fontSize: '14px', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                                    Earlier completion often provides more arrival time options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                PLANNING CHECKLIST  (new section – inline CSS)
            ════════════════════════════════════════════════════════ */}
            <section style={{ background: 'var(--medi-bg-soft)', padding: '80px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                            borderRadius: '20px', padding: '6px 16px', color: 'var(--medi-navy)',
                            fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '16px'
                        }}>QUICK REFERENCE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Disney Cruise Planning Checklist</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {[
                            { task: 'Book Cruise', timing: '12–24 months before', icon: <Ship size={18} />, done: true },
                            { task: 'Reserve Flights', timing: '6–9 months before', icon: <Plane size={18} />, done: true },
                            { task: 'Book Excursions', timing: '75–123 days before', icon: <MapPin size={18} />, done: true },
                            { task: 'Reserve Adult Dining', timing: 'Booking window opens', icon: <Crown size={18} />, done: true },
                            { task: 'Complete Final Payment', timing: 'Prior to deadline', icon: <CreditCard size={18} />, done: true },
                            { task: 'Complete Online Check-In', timing: 'Approximately 30–40 days before', icon: <FileText size={18} />, done: true },
                            { task: 'Pack', timing: '1–2 weeks before sailing', icon: <Sparkles size={18} />, done: true },
                            { task: 'Embark', timing: 'Cruise Day', icon: <Anchor size={18} />, done: true }
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '16px',
                                background: '#ffffff',
                                border: '1px solid rgba(39,68,114,0.1)',
                                borderRadius: '12px', padding: '18px 20px',
                                boxShadow: '0 2px 12px rgba(39,68,114,0.06)'
                            }}>
                                <div style={{
                                    width: '44px', height: '44px', flexShrink: 0,
                                    background: 'var(--medi-bg-soft)', borderRadius: '10px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--medi-navy)'
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--medi-navy)', marginBottom: '3px' }}>
                                        {item.task}
                                    </div>
                                    <div style={{ fontSize: '13px', color: '#64748b' }}>✓ {item.timing}</div>
                                </div>
                                <CheckCircle size={18} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                EXPERT EDITORIAL — Angela insight
            ════════════════════════════════════════════════════════ */}
            <section id="booking-timeline-expert" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes — Luxury Cruise Expert" /> */}
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <span className="medi-editorial-stat-number">40+</span>
                                <span className="medi-editorial-stat-label">Years of Cruise Expertise</span>
                            </div>
                        </div>

                        <div className="medi-editorial-text-block">
                            <span className="medi-editorial-eyebrow-label">EXPERT INSIGHT</span>
                            <h2 className="medi-editorial-title">Why the Booking Timeline Matters</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-body-text">
                                A Disney Cruise vacation begins long before embarkation day. Understanding the booking timeline helps ensure you secure the most popular activities, preferred dining reservations, ideal arrival times, and the best possible cruise experience.
                            </p>
                            <p className="medi-editorial-body-text" style={{ marginTop: '16px' }}>
                                By planning ahead and following key milestones throughout the process, you'll board your Disney ship feeling prepared, relaxed, and ready to enjoy the magic from the moment you step onboard.
                            </p>
                            <div className="medi-editorial-quote-pullout">
                                <p className="medi-editorial-quote-text">
                                    "The guests who get the best Disney cruise experiences are almost always the ones who planned the earliest. A great travel advisor doesn't just book your cruise — they track every window, every deadline, and every opportunity on your behalf."
                                </p>
                                <span className="medi-editorial-quote-attribution">— Angela Hughes, CEO, Trips &amp; Ships Luxury Travel</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

           

            {/* ════════════════════════════════════════════════════════
                COMMON MISTAKES SLIDER
            ════════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setSliderHovered(true)}
                onMouseLeave={() => setSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID PLANNING PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">Common Booking Mistakes to Avoid</h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setActiveSlide(p => (p === 0 ? mistakes.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mistakes.map((m, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${activeSlide === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{m.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{m.desc}</p>
                                        {m.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {m.bullets.map((b, bi) => (
                                                    <li key={bi} className="medi-mistake-card-bullet-item">
                                                        <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setActiveSlide(p => (p === mistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${activeSlide === idx ? 'active' : ''}`}
                                onClick={() => setActiveSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                WHO SHOULD USE THIS GUIDE — audience split
            ════════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Who Should Follow This Planning Timeline?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Users size={20} />, label: 'First-time Disney cruisers' },
                                    { icon: <Heart size={20} />, label: 'Families planning a Disney vacation' },
                                    { icon: <Star size={20} />, label: 'Guests booking specialty dining' },
                                    { icon: <Crown size={20} />, label: 'Concierge and suite guests' },
                                    { icon: <Globe size={20} />, label: 'International travelers needing extra planning time' },
                                    { icon: <Calendar size={20} />, label: 'Anyone unsure about booking windows' },
                                    { icon: <Anchor size={20} />, label: 'Castaway Club members maximizing loyalty perks' }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Key Reminders</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <AlertCircle size={20} />, label: 'Popular sailings sell out 12–24 months in advance' },
                                    { icon: <Clock size={20} />, label: 'Every booking window is different by loyalty tier' },
                                    { icon: <FileText size={20} />, label: 'Check-in should be completed as early as possible' }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

         

            {/* ════════════════════════════════════════════════════════
                AUTHORITY / PRESTIGE
            ════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                {/* <img src={Profile_AH} alt="Angela Hughes" className="medi-prestige-photo" /> */}
                            </div>
                            <span className="medi-prestige-name">Angela Hughes</span>
                            <span className="medi-prestige-role-pill">CEO, Trips &amp; Ships Luxury Travel</span>
                            <p className="medi-prestige-tagline">"Planning the magic before you board"</p>
                        </div>
                        <div className="medi-prestige-credentials-column">
                            {[
                                { category: 'EXPERIENCE', text: '40+ years in the luxury travel industry', icon: Award },
                                { category: 'GLOBAL REACH', text: 'Visited over 121 countries worldwide', icon: Globe },
                                { category: 'DISNEY EXPERTISE', text: 'Expert in Disney Cruise Line planning and timelines', icon: Calendar },
                                { category: 'CLIENT TRUST', text: 'Hundreds of families guided through every booking window', icon: Heart },
                                { category: 'RECOGNITION', text: 'International media and advisory board recognition', icon: Star }
                            ].map((accolade, i) => {
                                const IconComp = accolade.icon
                                return (
                                    <div key={i} className="medi-prestige-item-card">
                                        <div className="medi-prestige-item-icon-box">
                                            <IconComp size={16} />
                                        </div>
                                        <div className="medi-prestige-item-content">
                                            <span className="medi-prestige-item-category">{accolade.category}</span>
                                            <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                FAQ SECTION
            ════════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.q}</span>
                                    <span className="medi-faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                                </div>
                                {activeFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                CTA SECTION
            ════════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Start Planning Your Disney Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            A Disney Cruise vacation begins long before embarkation day. Understanding the booking timeline helps ensure you secure the most popular activities, preferred dining reservations, ideal arrival times, and the best possible cruise experience.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently navigate every step of the Disney Cruise planning timeline.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are planning:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Your first Disney cruise',
                                    'A holiday or special itinerary sailing',
                                    'A Concierge-level experience',
                                    'Specialty dining reservations',
                                    'Shore excursion and activity planning'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
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
        </>
    )
}

export default DisneyCruiseBookingTimeline