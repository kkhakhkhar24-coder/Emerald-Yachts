import Navbar from '../../components/Navbar/Navbar'
import './UniworldAirfareTransfers.css'
import {
    Plane, MapPin, Compass, Anchor, CheckCircle, Clock, Users,
    Luggage, ShieldCheck, ShieldAlert, FileText, Globe, Sun, Moon, AlertTriangle,
    ChevronRight, ArrowRight, Ship, Calendar, CreditCard, Phone,
    LayoutList, Wallet, BadgeCheck, Route, KeyRound, Backpack,
    Smartphone, Pill, MapPinned, StickyNote, Building2, Sparkles
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function UniworldAirfareTransfers() {

    const [uafActiveFaq, setUafActiveFaq] = useState(null)
    const uafToggleFaq = i => setUafActiveFaq(uafActiveFaq === i ? null : i)

    const uafChecklist = [
        { Icon: FileText, text: 'Passport validity' },
        { Icon: BadgeCheck, text: 'Required visas' },
        { Icon: Plane, text: 'Flight reservations' },
        { Icon: Ship, text: 'Cruise confirmation documents' },
        { Icon: ShieldCheck, text: 'Travel insurance' },
        { Icon: Route, text: 'Airport transfer arrangements' },
        { Icon: Building2, text: 'Hotel reservations (if arriving early)' }
    ]

    const uafIndependentBenefits = [
        'Flexible airline choices',
        'Airline loyalty rewards',
        'Greater control over schedules',
        'Opportunity to extend your vacation'
    ]

    const uafPackageBenefits = [
        'Coordinated flight schedules',
        'Simplified booking',
        'Single travel itinerary',
        'Assistance with cruise-related flight coordination'
    ]

    const uafArriveEarlyBenefits = [
        { Icon: AlertTriangle, text: 'Reduced risk from flight delays' },
        { Icon: Moon, text: 'Time to recover from jet lag' },
        { Icon: Compass, text: 'Opportunity to explore the embarkation city' },
        { Icon: Sun, text: 'Less stressful travel experience' }
    ]

    const uafTransferFactors = [
        'Booking package',
        'Airfare arrangements',
        'Arrival timing',
        'Selected itinerary'
    ]

    const uafArrivalSteps = [
        { Icon: FileText, title: 'Immigration and customs', desc: 'Clear standard entry procedures upon landing.', img: 'https://placehold.co/400x250/274472/ffffff?text=Immigration' },
        { Icon: Luggage, title: 'Baggage collection', desc: 'Retrieve checked luggage from the carousel.', img: 'https://placehold.co/400x250/274472/ffffff?text=Baggage+Claim' },
        { Icon: Users, title: 'Meeting transfer representatives', desc: 'Locate your driver or representative, if applicable.', img: 'https://placehold.co/400x250/274472/ffffff?text=Transfer+Representative' },
        { Icon: Route, title: 'Hotel or ship transportation', desc: 'Travel onward to your hotel or directly to the ship.', img: 'https://placehold.co/400x250/274472/ffffff?text=Transportation' },
        { Icon: Ship, title: 'Cruise check-in', desc: 'Complete check-in procedures upon arrival at the vessel.', img: 'https://placehold.co/400x250/274472/ffffff?text=Cruise+Check-in' }
    ]

    const uafEmbarkationSteps = [
        { Icon: FileText, title: 'Present travel documents', desc: 'Have your passport and cruise documents ready.' },
        { Icon: BadgeCheck, title: 'Complete check-in', desc: 'Finalize registration with the embarkation team.' },
        { Icon: KeyRound, title: 'Receive your cabin key', desc: 'Collect your stateroom key card.' },
        { Icon: Luggage, title: 'Drop off luggage', desc: 'Leave checked bags for delivery to your cabin.' },
        { Icon: ShieldCheck, title: 'Attend the safety briefing', desc: 'Join the mandatory onboard safety orientation.' },
        { Icon: Compass, title: 'Explore the ship before departure', desc: 'Tour the vessel before it sets sail.' }
    ]

    const uafLuggageList = [
        'One checked suitcase',
        'One carry-on bag',
        'Personal backpack or handbag'
    ]

    const uafHotelShipTransfers = [
        'Airport to hotel',
        'Hotel to ship',
        'Ship to airport',
        'Ship to post-cruise hotel'
    ]

    const uafDocuments = [
        'Passport',
        'Boarding passes',
        'Cruise documents',
        'Hotel confirmations',
        'Travel insurance',
        'Emergency contacts',
        'Visa documentation (if required)'
    ]

    const uafArrivalTips = [
        { Icon: MapPinned, text: 'Download offline maps.' },
        { Icon: Wallet, text: 'Carry local currency for small purchases.' },
        { Icon: Smartphone, text: 'Charge electronic devices before landing.' },
        { Icon: Pill, text: 'Keep medications in your carry-on.' },
        { Icon: Route, text: 'Verify airport transfer meeting instructions.' },
        { Icon: Clock, text: 'Allow additional time for immigration procedures.' }
    ]

    const uafMistakes = [
        'Book flights arriving on embarkation day when traveling internationally.',
        'Forget passport validity requirements.',
        'Pack important documents in checked baggage.',
        'Ignore baggage restrictions.',
        'Skip travel insurance.',
        'Forget to notify the cruise line about delayed flights when necessary.'
    ]

    const uafInternalLinks = [
        { text: 'First-Time Uniworld River Cruise Guide', url: '/uniworld-river-cruises/first-time-guide/' },
        { text: 'What Is Included on a Uniworld River Cruise', url: '/uniworld-river-cruises/whats-included/' },
        { text: 'Uniworld Dress Code and Packing Guide', url: '/uniworld-river-cruises/dress-code-packing/' },
        { text: 'Best Uniworld River Cruise Itineraries', url: '/uniworld-river-cruises/best-itineraries/' },
        { text: 'Best Uniworld Cabins', url: '/uniworld-river-cruises/best-cabins/' },
        { text: 'Uniworld Ships and Suites', url: '/uniworld-river-cruises/ships-suites/' }
    ]

    const uafExternalRefs = [
        'Official Uniworld Boutique River Cruises',
        'International Air Transport Association (IATA)',
        'U.S. Department of State Travel Advisories',
        'Transportation Security Administration (TSA)',
        'European Union Travel Information',
        'Local airport websites for embarkation cities'
    ]

    const uafKeyTakeaways = [
        'Arrive at least one day before embarkation for international cruises.',
        'Confirm airport transfer arrangements before departure.',
        'Keep travel documents in your carry-on luggage.',
        'Book return flights with enough time after disembarkation.',
        'Travel insurance provides valuable protection against unexpected delays.',
        'Pack efficiently and label all luggage clearly.',
        'Careful planning helps ensure a smooth embarkation experience.'
    ]

    const uafFaqs = [
        { question: 'Does Uniworld include airfare?', answer: 'Airfare may be available as part of certain cruise packages or promotions, while many travelers also choose to book flights independently.' },
        { question: 'Are airport transfers included?', answer: 'Airport transfers may be included depending on your booking package, itinerary, and qualifying airfare arrangements.' },
        { question: 'Should I arrive the day before my cruise?', answer: 'Yes. Arriving one day early is strongly recommended for international departures.' },
        { question: 'How do I find my airport transfer?', answer: "If transfers are included, you'll receive instructions before departure explaining where to meet your driver or representative." },
        { question: 'What time should I arrive for embarkation?', answer: 'Follow the embarkation time listed in your cruise documents to ensure a smooth check-in.' },
        { question: 'Can I board the ship early?', answer: "Early boarding depends on the ship's schedule and cabin readiness." },
        { question: 'What documents should I carry?', answer: 'Carry your passport, cruise documents, boarding passes, travel insurance information, and any required visas.' },
        { question: 'Is luggage transferred to my cabin?', answer: 'Yes. After check-in, crew members generally deliver checked luggage directly to your stateroom.' },
        { question: 'What happens if my flight is delayed?', answer: 'Contact your airline, travel advisor, and the cruise line as soon as possible for assistance and updated instructions.' },
        { question: 'Should I purchase travel insurance?', answer: 'Yes. Travel insurance can provide protection for delays, cancellations, medical emergencies, and lost baggage.' },
        { question: 'Can I arrange my own airport transportation?', answer: 'Yes. Many guests choose taxis, ride-sharing services, or private transfers if transfers are not included.' },
        { question: 'How much luggage should I bring?', answer: 'One checked suitcase, one carry-on, and one personal item are sufficient for most travelers.' },
        { question: 'Are hotel transfers available?', answer: 'Depending on your travel package, transfers between airports, hotels, and the ship may be offered.' },
        { question: 'What is the latest flight I should book after my cruise?', answer: 'Booking an afternoon or evening departure provides extra flexibility after disembarkation.' },
        { question: 'Can I extend my vacation before or after the cruise?', answer: 'Yes. Many travelers add independent hotel stays or land tours before or after their Uniworld cruise.' }
    ]

    const uafSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "logo": "https://www.tripsshipsluxurytravel.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "Uniworld Airfare, Airport Transfers and Arrival Guide",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/airfare-transfers/",
                "description": "Complete guide to Uniworld airfare options, airport transfers, embarkation procedures, arrival tips, and travel planning.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Airfare, Airport Transfers and Arrival Guide",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/airfare-transfers/" },
                "datePublished": "2026-08-07",
                "dateModified": "2026-08-07"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Airfare & Transfers", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/airfare-transfers/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uafFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Airfare, Transfers & Arrival Guide</title>
                <meta name="title" content="Uniworld Airfare, Transfers & Arrival Guide" />
                <meta name="description" content="Learn how Uniworld airfare, airport transfers, embarkation, and arrival work. Get travel tips, flight advice, luggage guidance, and transfer information." />
                <meta name="keywords" content="Uniworld Airfare, Airport Transfers and Arrival Guide, Uniworld airport transfers, Uniworld airfare, Uniworld flights, Uniworld embarkation, river cruise airport transfer, Uniworld arrival guide, luxury river cruise travel tips" />
                <script type="application/ld+json">{JSON.stringify(uafSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uaf-hero-section">
                <div className="uaf-hero-bg"></div>
                <div className="uaf-hero-overlay-layer"></div>
                <div className="uaf-hero-content-wrapper">
                    <div className="uaf-hero-eyebrow-tag">
                        <Plane size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uaf-hero-main-title">
                        Uniworld Airfare, Airport Transfers and Arrival Guide
                    </h1>
                    <p className="uaf-hero-subtitle-text">
                        Learn how airfare, airport transfers, embarkation, and arrival work so you can travel with confidence on your Uniworld River Cruise.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uaf-intro-section">
                <div className="uaf-intro-container">
                    <div className="uaf-intro-grid">
                        <div className="uaf-intro-text-col">
                            <span className="uaf-eyebrow">UNIWORLD RIVER CRUISES</span>
                            <h2 className="uaf-section-heading">Airfare, Transfers & Arrival Guide</h2>
                            <div className="uaf-heading-separator-bar"></div>
                            <p className="uaf-intro-lead">Planning transportation is an important part of any river cruise vacation.</p>
                            <p className="uaf-intro-body">From booking flights and arranging airport transfers to boarding your ship on embarkation day, understanding the travel process helps ensure a smooth start to your Uniworld River Cruise.</p>
                            <p className="uaf-intro-body">Whether you're cruising through Europe, Egypt, India, or Southeast Asia, this guide explains how airfare, airport transfers, arrival procedures, luggage handling, and embarkation typically work so you can travel with confidence.</p>
                        </div>
                        <div className="uaf-intro-image-col">
                            <div className="uaf-intro-image-frame">
                                <img src="https://placehold.co/600x500/274472/ffffff?text=Airport+Transfers" alt="Uniworld airport transfers and arrivals" className="uaf-intro-image" />
                            </div>
                            <p className="uaf-intro-image-caption">
                                <Plane size={14} className="uaf-intro-caption-icon" />
                                <span>Smooth transfers from airport to ship for a stress-free arrival.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PLANNING CHECKLIST ── */}
            <section className="uaf-checklist-section">
                <div className="uaf-checklist-container">
                    <div className="uaf-checklist-grid-layout">
                        <div className="uaf-checklist-image-col">
                            <div className="uaf-checklist-image-frame">
                                <img src="https://placehold.co/600x500/274472/ffffff?text=Travel+Checklist" alt="Travel checklist planning" className="uaf-checklist-image" />
                            </div>
                            <p className="uaf-checklist-image-caption">
                                <CheckCircle size={14} className="uaf-checklist-caption-icon" />
                                <span>Reviewing your documents before departure reduces the chance of last-minute issues.</span>
                            </p>
                        </div>
                        <div className="uaf-checklist-content-col">
                            <span className="uaf-eyebrow">GETTING STARTED</span>
                            <h2 className="uaf-section-heading">Planning Your Journey Before the Cruise</h2>
                            <div className="uaf-heading-separator-bar"></div>
                            <p className="uaf-section-intro">Before departure, confirm all travel arrangements well in advance. Your travel checklist should include:</p>

                            <div className="uaf-checklist-grid">
                                {uafChecklist.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uaf-checklist-item">
                                        <div className="uaf-checklist-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BOOKING AIRFARE ── */}
            <section className="uaf-booking-section">
                <div className="uaf-booking-container">
                    <span className="uaf-eyebrow uaf-eyebrow-light">FLIGHT OPTIONS</span>
                    <h2 className="uaf-section-heading uaf-white-heading" style={{ textAlign: 'center' }}>Booking Airfare</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered uaf-separator-white"></div>
                    <p className="uaf-section-intro uaf-intro-light uaf-intro-centered">Travelers generally have two options when arranging flights.</p>

                    <div className="uaf-booking-grid">
                        <div className="uaf-booking-card">
                            <div className="uaf-booking-card-icon"><Plane size={26} /></div>
                            <h3 className="uaf-booking-card-title">Book Flights Independently</h3>
                            <p className="uaf-booking-card-sub">Independent airfare offers:</p>
                            <ul className="uaf-booking-card-list">
                                {uafIndependentBenefits.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="uaf-booking-card-footnote">Many experienced travelers choose this option for maximum flexibility.</p>
                        </div>

                        <div className="uaf-booking-card">
                            <div className="uaf-booking-card-icon"><Ship size={26} /></div>
                            <h3 className="uaf-booking-card-title">Book Airfare Through the Cruise Provider</h3>
                            <p className="uaf-booking-card-sub">Depending on your booking and available promotions, airfare packages may be offered that can simplify travel planning. Potential benefits include:</p>
                            <ul className="uaf-booking-card-list">
                                {uafPackageBenefits.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="uaf-booking-card-footnote">Availability varies by itinerary, departure city, and booking package.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHOULD YOU ARRIVE EARLY ── */}
            <section className="uaf-early-section">
                <div className="uaf-early-container">
                    <div className="uaf-early-grid">
                        <div className="uaf-early-text-col">
                            <span className="uaf-eyebrow">TIMING MATTERS</span>
                            <h2 className="uaf-section-heading">Should You Arrive Early?</h2>
                            <div className="uaf-heading-separator-bar"></div>
                            <p className="uaf-early-lead">For international cruises, arriving at least one day before embarkation is highly recommended.</p>
                            <p className="uaf-early-body">This is especially helpful for long-haul international flights.</p>
                        </div>
                        <div className="uaf-early-benefits-col">
                            <p className="uaf-early-benefits-label">Benefits include:</p>
                            <div className="uaf-early-benefits-list">
                                {uafArriveEarlyBenefits.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uaf-early-benefit-item">
                                        <div className="uaf-early-benefit-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AIRPORT TRANSFERS EXPLAINED ── */}
            <section className="uaf-transfers-section">
                <div className="uaf-transfers-container">
                    <span className="uaf-eyebrow">GROUND TRANSPORTATION</span>
                    <h2 className="uaf-section-heading" style={{ textAlign: 'center' }}>Airport Transfers Explained</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered"></div>
                    <p className="uaf-section-intro" style={{ textAlign: 'center' }}>Airport transfers transport guests between the airport, hotel (when applicable), and the cruise ship. Transfer availability depends on factors such as:</p>

                    <div className="uaf-transfers-factors">
                        {uafTransferFactors.map((item, idx) => (
                            <div key={idx} className="uaf-transfers-factor">
                                <span className="uaf-transfers-factor-num">0{idx + 1}</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uaf-transfer-tip-alert">
                        <ShieldCheck size={18} className="uaf-transfer-tip-icon" />
                        <span className="uaf-transfer-tip-text">Always confirm your transfer details before departure.</span>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO EXPECT UPON ARRIVAL ── */}
            <section className="uaf-arrival-section">
                <div className="uaf-arrival-container">
                    <span className="uaf-eyebrow uaf-eyebrow-light">ON THE GROUND</span>
                    <h2 className="uaf-section-heading uaf-white-heading" style={{ textAlign: 'center' }}>What to Expect Upon Arrival</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered uaf-separator-white"></div>
                    <p className="uaf-section-intro uaf-intro-light uaf-intro-centered">After arriving at your destination airport, your next steps typically include:</p>

                    <div className="uaf-arrival-grid">
                        {uafArrivalSteps.map(({ Icon, title, desc, img }, idx) => (
                            <div key={idx} className="uaf-arrival-card">
                                <div className="uaf-arrival-card-image-box">
                                    <img src={img} alt={title} className="uaf-arrival-card-image" />
                                    <div className="uaf-arrival-card-icon"><Icon size={20} /></div>
                                </div>
                                <div className="uaf-arrival-card-content">
                                    <h3 className="uaf-arrival-card-title">{title}</h3>
                                    <p className="uaf-arrival-card-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uaf-arrival-tip-alert">
                        <ShieldCheck size={18} className="uaf-arrival-tip-icon" />
                        <span className="uaf-arrival-tip-text">Keeping travel documents readily accessible speeds up the process.</span>
                    </div>
                </div>
            </section>

            {/* ── EMBARKATION DAY ── */}
            <section className="uaf-embark-section">
                <div className="uaf-embark-container">
                    <div className="uaf-embark-grid-layout">
                        <div className="uaf-embark-image-col">
                            <span className="uaf-eyebrow">BOARDING DAY</span>
                            <h2 className="uaf-section-heading">Embarkation Day</h2>
                            <div className="uaf-heading-separator-bar"></div>

                            <div className="uaf-embark-image-frame">
                                <img src="https://placehold.co/600x650/274472/ffffff?text=Ship+Embarkation" alt="Uniworld ship embarkation day stateroom" className="uaf-embark-image" />
                            </div>
                            <div className="uaf-embark-image-caption">
                                <Clock size={16} className="uaf-embark-caption-icon" />
                                <span>Cabins may not always be immediately available upon boarding, depending on arrival time.</span>
                            </div>
                        </div>

                        <div className="uaf-embark-content-col">
                            <p className="uaf-section-intro">Embarkation is generally straightforward. Typical steps include:</p>

                            <div className="uaf-embark-steps">
                                {uafEmbarkationSteps.map(({ Icon, title, desc }, idx) => (
                                    <div key={idx} className="uaf-embark-step">
                                        <div className="uaf-embark-step-marker">
                                            <div className="uaf-embark-step-icon"><Icon size={18} /></div>
                                            {idx !== uafEmbarkationSteps.length - 1 && <div className="uaf-embark-step-line"></div>}
                                        </div>
                                        <div className="uaf-embark-step-content">
                                            <h3>{title}</h3>
                                            <p>{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LUGGAGE GUIDELINES ── */}
            <section className="uaf-luggage-section">
                <div className="uaf-luggage-container">
                    <div className="uaf-luggage-grid">
                        <div className="uaf-luggage-text-col">
                            <span className="uaf-eyebrow">PACKING SMART</span>
                            <h2 className="uaf-section-heading">Luggage Guidelines</h2>
                            <div className="uaf-heading-separator-bar"></div>
                            <p className="uaf-luggage-lead">Although exact airline baggage allowances vary, consider packing efficiently.</p>
                            <p className="uaf-luggage-sub">Recommended luggage:</p>
                            <div className="uaf-luggage-list">
                                {uafLuggageList.map((item, idx) => (
                                    <div key={idx} className="uaf-luggage-item">
                                        <Luggage size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uaf-luggage-tip-box">
                                <Backpack size={18} className="uaf-luggage-tip-icon-inline" />
                                <div className="uaf-luggage-tip-text-block">
                                    <p className="uaf-luggage-tip-p">Label all luggage with your contact information.</p>
                                    <p className="uaf-luggage-tip-p">Packing cubes and luggage tags can make unpacking easier.</p>
                                </div>
                            </div>
                        </div>
                        <div className="uaf-luggage-tip-col">
                            <div className="uaf-luggage-image-frame">
                                <img src="https://placehold.co/600x400/274472/ffffff?text=Luggage+Guide" alt="Uniworld luggage packing guidelines" className="uaf-luggage-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRANSFERS BETWEEN HOTELS AND SHIPS ── */}
            <section className="uaf-hotelship-section">
                <div className="uaf-hotelship-container">
                    <span className="uaf-eyebrow">COMBINED STAYS</span>
                    <h2 className="uaf-section-heading" style={{ textAlign: 'center' }}>Transfers Between Hotels and Ships</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered"></div>
                    <p className="uaf-section-intro uaf-intro-centered">Many travelers combine a pre-cruise hotel stay with their sailing. Common transportation arrangements include:</p>

                    <div className="uaf-hotelship-grid">
                        {uafHotelShipTransfers.map((item, idx) => (
                            <div key={idx} className="uaf-hotelship-card">
                                <div className="uaf-hotelship-icon"><Route size={20} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uaf-hotelship-tip-alert">
                        <ShieldCheck size={18} className="uaf-hotelship-tip-icon" />
                        <span className="uaf-hotelship-tip-text">Transfer availability depends on your travel package and itinerary.</span>
                    </div>
                </div>
            </section>

            {/* ── FLIGHT TIMING TIPS ── */}
            <section className="uaf-timing-section">
                <div className="uaf-timing-container">
                    <span className="uaf-eyebrow">SCHEDULE WISELY</span>
                    <h2 className="uaf-section-heading" style={{ textAlign: 'center' }}>Flight Timing Tips</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered"></div>

                    <div className="uaf-timing-grid">
                        <div className="uaf-timing-card">
                            <div className="uaf-timing-card-header">
                                <Sun size={22} />
                                <h3>Before Your Cruise</h3>
                            </div>
                            <p className="uaf-timing-card-lead">Choose flights arriving:</p>
                            <ul className="uaf-timing-card-list">
                                <li><CheckCircle size={14} /><span>Early afternoon or earlier</span></li>
                                <li><CheckCircle size={14} /><span>The day before embarkation whenever possible</span></li>
                            </ul>
                            <p className="uaf-timing-card-footnote">Avoid late-night arrivals that could be affected by delays.</p>
                        </div>

                        <div className="uaf-timing-card">
                            <div className="uaf-timing-card-header">
                                <Moon size={22} />
                                <h3>After Your Cruise</h3>
                            </div>
                            <p className="uaf-timing-card-lead">Book return flights later in the day whenever practical. This provides additional flexibility should:</p>
                            <ul className="uaf-timing-card-list">
                                <li><CheckCircle size={14} /><span>Disembarkation take longer than expected</span></li>
                                <li><CheckCircle size={14} /><span>Traffic delays occur</span></li>
                                <li><CheckCircle size={14} /><span>Airport transfers require extra time</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRAVEL DOCUMENTS ── */}
            <section className="uaf-docs-section">
                <div className="uaf-docs-container">
                    <div className="uaf-docs-grid">
                        <div className="uaf-docs-text-col">
                            <span className="uaf-eyebrow uaf-eyebrow-light">STAY ORGANIZED</span>
                            <h2 className="uaf-section-heading uaf-white-heading">Travel Documents You'll Need</h2>
                            <div className="uaf-heading-separator-bar uaf-separator-white"></div>
                            <p className="uaf-docs-lead">Carry these documents in your hand luggage:</p>

                            <div className="uaf-docs-warning-box">
                                <AlertTriangle size={18} className="uaf-docs-warning-icon" />
                                <span className="uaf-docs-warning-text">Avoid packing essential documents in checked luggage.</span>
                            </div>
                        </div>
                        <div className="uaf-docs-list-col">
                            {uafDocuments.map((item, idx) => (
                                <div key={idx} className="uaf-docs-item">
                                    <FileText size={17} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ARRIVAL TIPS FOR INTERNATIONAL TRAVELERS ── */}
            <section className="uaf-tips-section">
                <div className="uaf-tips-container">
                    <div className="uaf-tips-grid-layout">
                        <div className="uaf-tips-content-col">
                            <span className="uaf-eyebrow">TRAVEL SMARTER</span>
                            <h2 className="uaf-section-heading">Arrival Tips for International Travelers</h2>
                            <div className="uaf-heading-separator-bar"></div>
                            <p className="uaf-section-intro">To make arrival easier:</p>

                            <div className="uaf-tips-list">
                                {uafArrivalTips.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uaf-tips-list-item">
                                        <div className="uaf-tips-list-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="uaf-tips-image-col">
                            <div className="uaf-tips-image-frame">
                                <img src="https://placehold.co/600x650/274472/ffffff?text=International+Travel" alt="Arrival tips for international cruise travelers" className="uaf-tips-image" />
                            </div>
                            <div className="uaf-tips-note-alert">
                                <ShieldAlert size={16} className="uaf-tips-note-icon" />
                                <span>These simple steps help reduce travel stress.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMON ARRIVAL MISTAKES TO AVOID ── */}
            <section className="uaf-mistakes-section">
                <div className="uaf-mistakes-container">
                    <span className="uaf-eyebrow">LEARN FROM OTHERS</span>
                    <h2 className="uaf-section-heading" style={{ textAlign: 'center' }}>Common Arrival Mistakes to Avoid</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered"></div>
                    <p className="uaf-section-intro uaf-intro-centered">Many first-time travelers experience avoidable issues. Try not to:</p>

                    <div className="uaf-mistakes-list">
                        {uafMistakes.map((item, idx) => (
                            <div key={idx} className="uaf-mistake-item">
                                <AlertTriangle size={18} className="uaf-mistake-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uaf-mistakes-note-alert">
                        <BadgeCheck size={18} className="uaf-mistakes-note-icon" />
                        <span>Good preparation helps ensure a smoother vacation.</span>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uaf-takeaways-section">
                <div className="uaf-takeaways-container">
                    <div className="uaf-takeaways-eyebrow-row">
                        <Sparkles size={18} />
                        <span className="uaf-takeaways-eyebrow-text">KEY TAKEAWAYS</span>
                    </div>
                    <h2 className="uaf-takeaways-heading">Plan Ahead for a Smooth Start</h2>
                    <div className="uaf-takeaways-separator"></div>

                    <div className="uaf-takeaways-grid-row-1">
                        {uafKeyTakeaways.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="uaf-takeaway-item">
                                <CheckCircle size={18} className="uaf-takeaway-icon" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="uaf-takeaways-grid-row-2">
                        {uafKeyTakeaways.slice(4).map((item, idx) => (
                            <div key={idx} className="uaf-takeaway-item">
                                <CheckCircle size={18} className="uaf-takeaway-icon" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTERNAL LINKS ── */}
            <section className="uaf-links-section">
                <div className="uaf-links-container">
                    <span className="uaf-eyebrow">CONTINUE PLANNING</span>
                    <h2 className="uaf-section-heading" style={{ textAlign: 'center' }}>Explore More Uniworld Guides</h2>
                    <div className="uaf-heading-separator-bar uaf-bar-centered"></div>

                    <div className="uaf-links-grid">
                        {uafInternalLinks.map((link, idx) => (
                            <Link key={idx} to={link.url} className="uaf-link-card">
                                <span>{link.text}</span>
                                <ArrowRight size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="uaf-expert-insight-section">
                <div className="uaf-expert-insight-container">

                    <div className="uaf-expert-portrait-panel">
                        <div className="uaf-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Travel Designer" />
                        </div>
                        <div className="uaf-expert-stats-strip">
                            <div className="uaf-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="uaf-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Visited</p>
                            </div>
                        </div>
                    </div>

                    <div className="uaf-expert-content-panel">
                        <span className="uaf-eyebrow">MEET THE CEO</span>
                        <h2 className="uaf-section-heading">Insight from Angela Hughes</h2>
                        <div className="uaf-heading-separator-bar"></div>

                        <p className="uaf-expert-quote">
                            "Arranging flights and port transfers doesn't have to be stressful. When we coordinate air travel and arrival logistics, my clients begin their river cruise relaxed, knowing their journey is seamlessly managed from touchdown to embarkation."
                        </p>

                        <div className="uaf-expert-priorities">
                            <h5>Logistics Priorities Matrix:</h5>
                            <div className="uaf-expert-pills">
                                {['Coordinated Flight Routing', 'VIP Port Transfers', 'Pre-Cruise Hotel Stays', 'Arrival Meet-and-Greet', 'Luggage Assistance', 'Travel Insurance Shield'].map(pill => (
                                    <span key={pill} className="uaf-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="uaf-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the luxury travel world to deliver custom travel planning and seamless logistics coordination that regular booking engines simply cannot replicate.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uaf-faq-main-section">
                <div className="uaf-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="uaf-section-heading">Frequently Asked Questions</h2>
                        <div className="uaf-heading-separator-bar uaf-bar-centered"></div>
                    </div>
                    <div className="uaf-faq-list-wrapper">
                        {uafFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uaf-faq-individual-item"
                                onClick={() => uafToggleFaq(index)}
                            >
                                <div className="uaf-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uaf-faq-toggle-icon">{uafActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uafActiveFaq === index && (
                                    <p className="uaf-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="luxe-cta-section">
                <div className="luxe-cta-aurora-glow"></div>
                <div className="luxe-cta-crystal luxe-cta-crystal-1"></div>
                <div className="luxe-cta-crystal luxe-cta-crystal-2"></div>
                <div className="luxe-cta-crystal luxe-cta-crystal-3"></div>
                <div className="luxe-cta-grid-lines"></div>

                <div className="luxe-cta-content">
                    <div className="luxe-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="luxe-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="luxe-cta-title">Ready to Plan Your Uniworld Journey?</h2>
                    <div className="luxe-cta-bar"></div>
                    <p className="luxe-cta-subtitle">
                        Plan your journey with confidence by arranging flights, airport transfers, and arrival logistics early so you can begin your Uniworld River Cruise relaxed and ready to explore.
                    </p>
                    <div className="luxe-cta-actions">
                        <Link to="/contact" className="luxe-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="luxe-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default UniworldAirfareTransfers