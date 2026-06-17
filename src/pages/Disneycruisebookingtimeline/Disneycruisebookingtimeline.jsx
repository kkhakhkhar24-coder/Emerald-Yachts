import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import {
    Calendar, CheckCircle, Clock, Star, Crown, Phone,
    ChevronRight, Globe, LayoutList, Sparkles, Compass,
    MapPin, Gem, Award, Ship, Heart, Users, ArrowRight,
    Anchor, FileText, AlertCircle, Plane, Hotel, CreditCard,GraduationCap,Mic
} from 'lucide-react'

// ── Hero images ──────────────────────────────────────────────────────────────
// import hero1 from '../../assets/DisneyCruiseBookingTimeline/hero1.jpg'
// import hero2 from '../../assets/DisneyCruiseBookingTimeline/hero2.jpg'
// import hero3 from '../../assets/DisneyCruiseBookingTimeline/hero3.jpg'


import image1 from '../../assets/Disneycruisebookingtimeline/disney-cruise-norwegian-fjords-scenic-cruise-waterfalls-mountains.jpeg'
import image2 from '../../assets/Disneycruisebookingtimeline/disney-cruise-sunset-ocean-voyage-luxury-family-cruise-experience.jpg'
import image3 from '../../assets/Disneycruisebookingtimeline/disney-magic-cruise-ship-at-port.jpeg'
import image4 from '../../assets/Disneycruisebookingtimeline/disney-treasure-grand-hall-luxury-cruise-ship-atrium-interior-design.jpg'
import image5 from '../../assets/Disneycruisebookingtimeline/disney-cruise-ship-docked-at-castaway-cay-aerial-view.jpg'
import image6 from '../../assets/Disneycruisebookingtimeline/disney-wish-arendelle-frozen-dining-adventure-live-show-stage.jpeg'
import image7 from '../../assets/Disneycruisebookingtimeline/disney-wish-enchante-restaurant-luxury-booth-seating-adults (2).jpg'
import image8 from '../../assets/Disneycruisebookingtimeline/disney-wish-grand-hall-atrium-mickey-mouse-family-portrait.jpg'
import image9  from '../../assets/Disneycruisebookingtimeline/castaway-cay-pirates-in-the-caribbean-family-beach-activity-disney-cruise.jpg'
import image10 from '../../assets/Disneycruisebookingtimeline/disney-castaway-cay-private-island-character-meet-greet-family-beach.jpg'
import image11 from '../../assets/Disneycruisebookingtimeline/disney-cruise-funnel-vision-outdoor-movie-deck-family.jpg'
import image12 from '../../assets/Disneycruisebookingtimeline/disney-cruise-line-deluxe-oceanview-stateroom-with-private-verandah.jpg'
import image13 from '../../assets/Disneycruisebookingtimeline/disney-cruise-oceaneer-club-family-cruise-kids-entertainment-onboard.jpg'
import image14 from '../../assets/Disneycruisebookingtimeline/disney-cruise-royal-suite-multigenerational-family-luxury-travel.jpg'
import image15 from '../../assets/Disneycruisebookingtimeline/disney-cruise-vibe-teen-club-outdoor-sun-deck.jpg'
import image16 from '../../assets/Disneycruisebookingtimeline/disney-wish-1923-restaurant-animation-themed-fine-dining.jpeg'
import image17 from '../../assets/Disneycruisebookingtimeline/haunted-mansion-parlor-guests-disney-cruise.webp'
// ── Section images ───────────────────────────────────────────────────────────
// import bookingEarly      from '../../assets/DisneyCruiseBookingTimeline/booking-early.jpg'
// import conciergeGuests   from '../../assets/DisneyCruiseBookingTimeline/concierge-guests.jpg'
// import castawayClub      from '../../assets/DisneyCruiseBookingTimeline/castaway-club.jpg'
// import excursionBooking  from '../../assets/DisneyCruiseBookingTimeline/excursion-booking.jpg'
// import onlineCheckIn     from '../../assets/DisneyCruiseBookingTimeline/online-checkin.jpg'
// import packingImg        from '../../assets/DisneyCruiseBookingTimeline/packing.jpg'
// import embarkationDay    from '../../assets/DisneyCruiseBookingTimeline/embarkation-day.jpg'
// import transportImg      from '../../assets/DisneyCruiseBookingTimeline/transport.jpg'
import Profile_AH from '../../assets/Media (2).jpg'
import Profile_Picture_AH from '../../assets/Media (3).jpg'

function DisneyCruiseBookingTimeline() {

    // ── Hero rotation ─────────────────────────────────────────────────────────
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [image1, image2, image3]
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    // ── FAQ accordion ─────────────────────────────────────────────────────────
    const [activeFaq, setActiveFaq] = useState(null)
    const toggleFaq = i => setActiveFaq(activeFaq === i ? null : i)

    // ── Priority slider state ──────────────────────────────────────────────────
    const [activePriorityTab, setActivePriorityTab] = useState(0)

    // ── Mistakes slider ───────────────────────────────────────────────────────
    const [activeSlide, setActiveSlide] = useState(0)
    const [sliderHovered, setSliderHovered] = useState(false)

    // ── Checklist state ────────────────────────────────────────────────────────
    const [checklist, setChecklist] = useState([
        { id: 0, task: 'Book Cruise', timing: '12–24 months before', icon: <Ship size={18} />, done: true },
        { id: 1, task: 'Reserve Flights', timing: '6–9 months before', icon: <Plane size={18} />, done: true },
        { id: 2, task: 'Book Excursions', timing: '75–123 days before', icon: <MapPin size={18} />, done: true },
        { id: 3, task: 'Reserve Adult Dining', timing: 'Booking window opens', icon: <Crown size={18} />, done: true },
        { id: 4, task: 'Complete Final Payment', timing: 'Prior to deadline', icon: <CreditCard size={18} />, done: true },
        { id: 5, task: 'Complete Online Check-In', timing: 'Approximately 30–40 days before', icon: <FileText size={18} />, done: false },
        { id: 6, task: 'Pack', timing: '1–2 weeks before sailing', icon: <Sparkles size={18} />, done: false },
        { id: 7, task: 'Embark', timing: 'Cruise Day', icon: <Anchor size={18} />, done: false }
    ])
    const toggleChecklistItem = (id) => {
        setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item))
    }
    const completedChecklistCount = checklist.filter(item => item.done).length
    const checklistProgressPercent = Math.round((completedChecklistCount / checklist.length) * 100)
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

  const cruisebooking = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Disney Cruise Booking Timeline: When to Book, Reserve, and Plan Your Disney Cruise Vacation",
    "description": "Learn the complete Disney Cruise booking timeline, including when to reserve cruises, excursions, dining, onboard activities, transportation, and more.",
    "author": {
      "@type": "Person",
      "name": "Angela Hughes",
      "jobTitle": "CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Trips & Ships Luxury Travel"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trips & Ships Luxury Travel",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tripsandships.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.tripsandships.com/disney-cruise-booking-timeline"
    },
    "datePublished": "2026-06-17",
    "dateModified": "2026-06-17"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far in advance should I book a Disney Cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking 12–24 months in advance often provides the best pricing and cabin selection."
        }
      },
      {
        "@type": "Question",
        "name": "Does Disney Cruise pricing go up over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, yes. Disney Cruise Line often uses demand-based pricing."
        }
      },
      {
        "@type": "Question",
        "name": "When can I book excursions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking windows typically open between 75 and 123 days before sailing depending on your Castaway Club status."
        }
      },
      {
        "@type": "Question",
        "name": "When can first-time cruisers make reservations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most first-time guests can book activities approximately 75 days before sailing."
        }
      },
      {
        "@type": "Question",
        "name": "What is Castaway Club?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Disney Cruise Line's loyalty program that offers early booking privileges and other benefits."
        }
      },
      {
        "@type": "Question",
        "name": "When should I complete online check-in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As soon as your check-in window opens, usually around 30–40 days before departure."
        }
      },
      {
        "@type": "Question",
        "name": "Can I reserve Palo before sailing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Palo reservations become available during your booking window."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if excursions sell out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Additional availability sometimes opens closer to sailing or once onboard."
        }
      },
      {
        "@type": "Question",
        "name": "When is final payment due?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Final payment deadlines vary by itinerary and stateroom category."
        }
      },
      {
        "@type": "Question",
        "name": "Should I arrive the day before my cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many travelers choose to arrive one day early to avoid travel delays."
        }
      },
      {
        "@type": "Question",
        "name": "When should I book flights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally 6–9 months before departure for the best selection and pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I modify reservations after booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, depending on availability and Disney Cruise Line policies."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for embarkation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Requirements vary by itinerary, but passports are strongly recommended."
        }
      },
      {
        "@type": "Question",
        "name": "Should I purchase travel insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many travelers choose travel insurance to protect against unexpected disruptions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most important deadline before sailing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Completing online check-in and ensuring final payment has been made are among the most critical pre-cruise deadlines."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
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
        "name": "Disney Cruise Line",
        "item": "https://www.tripsandships.com/disney-cruise-line"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Disney Cruise Booking Timeline",
        "item": "https://www.tripsandships.com/disney-cruise-booking-timeline"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Trips & Ships Luxury Travel",
    "url": "https://www.tripsandships.com",
    "logo": "https://www.tripsandships.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/tripsandships"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Angela Hughes",
    "jobTitle": "CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Trips & Ships Luxury Travel"
    },
    "url": "https://www.tripsandships.com/about-angela-hughes",
    "sameAs": [
      "https://www.instagram.com/tripsandships"
    ]
  }
]

    // ── Timeline phases data ──────────────────────────────────────────────────
    const timelinePhases = [
        {
            window: '12–24 Months Before Sailing',
            title: 'Book Your Cruise',
            icon: <Calendar size={22} />,
            color: 'var(--medi-navy)',
            img: image1,
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
                img: image2,
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
            img: image3,
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
            img: image4,
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
            img: image5,
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
            img: image6,
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
            img: image7,
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
            img: image8,
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
                <script type="application/ld+json">{JSON.stringify(cruisebooking)}</script>
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
                            {/* Phase header (text only, no image card) */}
                            <div style={{
                                padding: '32px 32px 20px 32px',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                                background: 'rgba(255,255,255,0.02)'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    background: '#93c5fd', color: 'var(--medi-bg-dark)',
                                    borderRadius: '6px', padding: '4px 12px',
                                    fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em',
                                    marginBottom: '8px'
                                }}>{timelinePhases[selectedPhase].badge}</span>
                                <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', margin: 0 }}>
                                    {timelinePhases[selectedPhase].window}
                                </h3>
                                <p style={{ color: '#93c5fd', fontSize: '18px', fontWeight: '600', margin: '4px 0 0' }}>
                                    {timelinePhases[selectedPhase].title}
                                </p>
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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '40px',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        alignItems: 'start'
                    }}>
                        {/* Sticky Left Column: Overview Panel */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--medi-navy) 0%, #172a45 100%)',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: '0 15px 35px rgba(15,28,46,0.25)',
                            position: 'sticky',
                            top: '100px',
                            color: '#ffffff',
                            border: '1px solid rgba(255,255,255,0.08)'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                background: 'rgba(147,197,253,0.12)',
                                border: '1px solid rgba(147,197,253,0.25)',
                                borderRadius: '20px', padding: '6px 16px',
                                color: '#93c5fd', fontSize: '11px', fontWeight: '700',
                                letterSpacing: '0.1em', marginBottom: '24px',
                                textTransform: 'uppercase'
                            }}>Access Priority Guide</span>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1.4', margin: '0 0 16px 0', color: '#ffffff' }}>
                                Booking priority is determined by stateroom class & loyalty level
                            </h3>
                            <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7', margin: '0 0 28px 0' }}>
                                Disney Cruise Line rewards repeat travelers and premium guests with early access booking windows. Planning according to your window yields the highest success rates for specialty reservations.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    'Unlock early access to Palo dining',
                                    'Secure preferred Port Adventures',
                                    'Maximize Castaway Club perks'
                                ].map((bullet, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <div style={{
                                            width: '24px', height: '24px', borderRadius: '50%',
                                            background: 'rgba(147,197,253,0.15)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', color: '#93c5fd',
                                            flexShrink: 0
                                        }}>
                                            <CheckCircle size={14} />
                                        </div>
                                        <span style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: '500' }}>{bullet}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{
                                marginTop: '36px',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '16px',
                                padding: '20px'
                            }}>
                                <p style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                                    Planning Tip
                                </p>
                                <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                                    Excursions and specialty dining slots are limited. Complete booking as soon as your window opens.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Interactive Slider Container */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            
                            {/* Segmented Slide Tabs */}
                            <div style={{
                                display: 'flex',
                                background: 'rgba(39,68,114,0.04)',
                                borderRadius: '12px',
                                padding: '6px',
                                marginBottom: '20px',
                                border: '1px solid rgba(39,68,114,0.08)',
                                gap: '8px'
                            }}>
                                {[
                                    { id: 0, label: 'Concierge Guests', badge: '120–130d' },
                                    { id: 1, label: 'Castaway Club', badge: '105–123d' },
                                    { id: 2, label: 'First-Time Guests', badge: '75–90d' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActivePriorityTab(tab.id)}
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                            background: activePriorityTab === tab.id ? 'var(--medi-navy)' : 'transparent',
                                            color: activePriorityTab === tab.id ? '#ffffff' : 'var(--medi-navy)'
                                        }}
                                    >
                                        <span style={{ fontSize: '13px', fontWeight: '700' }}>{tab.label}</span>
                                        <span style={{
                                            fontSize: '10px',
                                            fontWeight: '600',
                                            opacity: 0.8,
                                            marginTop: '2px',
                                            color: activePriorityTab === tab.id ? '#cbd5e1' : '#64748b'
                                        }}>{tab.badge}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Active Card Content */}
                            <div style={{ minHeight: '340px' }}>
                                {activePriorityTab === 0 && (
                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid rgba(39,68,114,0.08)',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 4px 25px rgba(39,68,114,0.04)',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '28px',
                                        alignItems: 'start'
                                    }}>
                                        <div style={{ position: 'relative', width: '180px', height: '180px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, flexGrow: 1, minWidth: '150px' }}>
                                            <img src={image4} alt="Concierge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div style={{
                                                position: 'absolute', top: '12px', left: '12px',
                                                background: 'rgba(39,68,114,0.95)', color: '#ffffff',
                                                borderRadius: '6px', padding: '4px 10px', fontSize: '11px',
                                                fontWeight: '700', letterSpacing: '0.05em', boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                                            }}>
                                                120–130 DAYS
                                            </div>
                                        </div>
                                        <div style={{ flex: '1 1 300px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                                <div style={{
                                                    width: '36px', height: '36px', borderRadius: '8px',
                                                    background: 'rgba(39,68,114,0.06)', display: 'flex',
                                                    alignItems: 'center', justifyContent: 'center', color: 'var(--medi-navy)'
                                                }}>
                                                    <Crown size={20} />
                                                </div>
                                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>
                                                    Concierge Guests
                                                </h3>
                                            </div>
                                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                                                Guests staying in Concierge-level accommodations receive the earliest booking windows. Concierge guests can reserve:
                                            </p>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: '16px' }}>
                                                {['Shore excursions', 'Adult dining', 'Beverage tastings', 'Spa appointments', 'Select onboard activities'].map((item, i) => (
                                                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                        <CheckCircle size={14} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                                        <span style={{ color: '#334155', fontSize: '13px', fontWeight: '500' }}>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p style={{ color: '#64748b', fontSize: '13px', fontStyle: 'italic', margin: 0, borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '12px' }}>
                                                These premium booking windows offer significant advantages for popular experiences.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activePriorityTab === 1 && (
                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid rgba(39,68,114,0.08)',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 4px 25px rgba(39,68,114,0.04)',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '28px',
                                        alignItems: 'start'
                                    }}>
                                        <div style={{ position: 'relative', width: '180px', height: '180px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, flexGrow: 1, minWidth: '150px' }}>
                                            <img src={image5} alt="Castaway Club" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div style={{
                                                position: 'absolute', top: '12px', left: '12px',
                                                background: 'rgba(39,68,114,0.95)', color: '#ffffff',
                                                borderRadius: '6px', padding: '4px 10px', fontSize: '11px',
                                                fontWeight: '700', letterSpacing: '0.05em', boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                                            }}>
                                                105–123 DAYS
                                            </div>
                                        </div>
                                        <div style={{ flex: '1 1 300px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                                <div style={{
                                                    width: '36px', height: '36px', borderRadius: '8px',
                                                    background: 'rgba(39,68,114,0.06)', display: 'flex',
                                                    alignItems: 'center', justifyContent: 'center', color: 'var(--medi-navy)'
                                                }}>
                                                    <Anchor size={20} />
                                                </div>
                                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>
                                                    Castaway Club Members
                                                </h3>
                                            </div>
                                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                                                Returning Disney cruisers receive early access based on loyalty status:
                                            </p>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                {[
                                                    { num: '01', label: 'Pearl Members', days: '~123 days' },
                                                    { num: '02', label: 'Platinum Members', days: '~120 days' },
                                                    { num: '03', label: 'Gold Members', days: '~105 days' },
                                                    { num: '04', label: 'Silver Members', days: '~90 days' }
                                                ].map((tier, i) => (
                                                    <div key={i} style={{
                                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                        padding: '10px 14px', background: 'rgba(39,68,114,0.03)',
                                                        borderRadius: '8px', border: '1px solid rgba(39,68,114,0.05)'
                                                    }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--medi-navy)' }}>{tier.num}</span>
                                                            <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>{tier.label}</span>
                                                        </div>
                                                        <span style={{ color: 'var(--medi-navy)', fontSize: '12px', fontWeight: '700' }}>{tier.days}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePriorityTab === 2 && (
                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid rgba(39,68,114,0.08)',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 4px 25px rgba(39,68,114,0.04)',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '28px',
                                        alignItems: 'start'
                                    }}>
                                        <div style={{ position: 'relative', width: '180px', height: '180px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, flexGrow: 1, minWidth: '150px' }}>
                                            <img src={image6} alt="First-Time Guests" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div style={{
                                                position: 'absolute', top: '12px', left: '12px',
                                                background: 'rgba(39,68,114,0.95)', color: '#ffffff',
                                                borderRadius: '6px', padding: '4px 10px', fontSize: '11px',
                                                fontWeight: '700', letterSpacing: '0.05em', boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                                            }}>
                                                75–90 DAYS
                                            </div>
                                        </div>
                                        <div style={{ flex: '1 1 300px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                                <div style={{
                                                    width: '36px', height: '36px', borderRadius: '8px',
                                                    background: 'rgba(39,68,114,0.06)', display: 'flex',
                                                    alignItems: 'center', justifyContent: 'center', color: 'var(--medi-navy)'
                                                }}>
                                                    <Sparkles size={20} />
                                                </div>
                                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>
                                                    First-Time Guests
                                                </h3>
                                            </div>
                                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                                                Most first-time Disney cruisers can begin making reservations around 75 days before embarkation. Popular items include:
                                            </p>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: '16px' }}>
                                                {[
                                                    { num: '01', label: 'Port Adventures' },
                                                    { num: '02', label: 'Palo Brunch' },
                                                    { num: '03', label: 'Palo Dinner' },
                                                    { num: '04', label: 'Enchanté' },
                                                    { num: '05', label: 'Beverage Tastings' },
                                                    { num: '06', label: 'Spa Treatments' }
                                                ].map((item, i) => (
                                                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                        <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--medi-navy)' }}>{item.num}</span>
                                                        <span style={{ color: '#334155', fontSize: '13px', fontWeight: '500' }}>{item.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{
                                                background: 'rgba(39,68,114,0.03)',
                                                border: '1px solid rgba(39,68,114,0.06)',
                                                borderRadius: '10px', padding: '12px 16px'
                                            }}>
                                                <p style={{ color: 'var(--medi-navy)', fontSize: '13px', fontWeight: '600', margin: 0, fontStyle: 'italic' }}>
                                                    Excursions often sell out quickly — book as soon as your window opens.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Slider Navigation chevrons */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: '0 4px' }}>
                                <button
                                    onClick={() => setActivePriorityTab(p => Math.max(0, p - 1))}
                                    disabled={activePriorityTab === 0}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        background: 'none', border: '1px solid rgba(39,68,114,0.15)',
                                        borderRadius: '8px', padding: '8px 16px',
                                        color: activePriorityTab === 0 ? '#cbd5e1' : 'var(--medi-navy)',
                                        cursor: activePriorityTab === 0 ? 'default' : 'pointer',
                                        fontSize: '13px', fontWeight: '600', transition: 'all 0.2s'
                                    }}
                                >
                                    <ChevronRight size={14} style={{ transform: 'rotate(180deg)' }} />
                                    Prev Tier
                                </button>
                                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
                                    {activePriorityTab + 1} / 3
                                </span>
                                <button
                                    onClick={() => setActivePriorityTab(p => Math.min(2, p + 1))}
                                    disabled={activePriorityTab === 2}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        background: activePriorityTab === 2 ? 'none' : 'var(--medi-navy)',
                                        border: activePriorityTab === 2 ? '1px solid rgba(39,68,114,0.15)' : '1px solid var(--medi-navy)',
                                        borderRadius: '8px', padding: '8px 16px',
                                        color: activePriorityTab === 2 ? '#cbd5e1' : '#ffffff',
                                        cursor: activePriorityTab === 2 ? 'default' : 'pointer',
                                        fontSize: '13px', fontWeight: '600', transition: 'all 0.2s'
                                    }}
                                >
                                    Next Tier
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    {/* ════════════════════════════════════════════════════════
                IMAGE GALLERY
            ════════════════════════════════════════════════════════ */}
            {/* ════════════════════════════════════════════════════════
                IMAGE GALLERY - Visual Highlights Showcase
            ════════════════════════════════════════════════════════ */}
            <section style={{
                background: 'var(--medi-bg-white)',
                padding: '80px 20px',
                borderTop: '1px solid rgba(39,68,114,0.1)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: 'rgba(39,68,114,0.1)',
                            borderRadius: '20px', padding: '6px 16px', color: 'var(--medi-navy)',
                            fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '16px'
                        }}>PHOTO SHOWCASE</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Explore the Disney Cruise Experience</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '600px', margin: '0 auto' }}>
                            A visual preview of the stunning views, luxury amenities, and magical experiences awaiting you onboard.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridAutoRows: '240px',
                        gap: '16px'
                    }}>
                        {[
                            // { img: image1,  tall: true },
                            // { img: image2,  tall: false },
                            // { img: image3,  tall: false },
                            // { img: image4,  tall: true },
                            // { img: image5,  tall: false },
                            // { img: image6,  tall: true },
                            { img: image7,  tall: true },
                            { img: image8,  tall: false },
                            { img: image9,  tall: false },
                            { img: image10, tall: true },
                            { img: image11, tall: false },
                            { img: image12, tall: false },
                            { img: image13, tall: true },
                            { img: image14, tall: false },
                            { img: image15, tall: false },
                            { img: image16, tall: true }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    gridRow: item.tall ? 'span 2' : 'span 1',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(39,68,114,0.07)',
                                    border: '1px solid rgba(39,68,114,0.08)',
                                    transition: 'all 0.35s ease',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'
                                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(39,68,114,0.14)'
                                    e.currentTarget.style.zIndex = '2'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(39,68,114,0.07)'
                                    e.currentTarget.style.zIndex = '1'
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={`Disney Cruise Experience Highlight ${idx + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
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
                            <img
                                src={image2}
                                alt="Disney Cruise online check-in"
                                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                            />
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
                            <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Complete Online <br /> Check-In</h2>
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
                PLANNING CHECKLIST
            ════════════════════════════════════════════════════════ */}
            <section style={{ 
                background: 'linear-gradient(180deg, var(--medi-bg-soft) 0%, #ffffff 100%)', 
                padding: '100px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background decorative elements */}
                <div style={{
                    position: 'absolute', top: '10%', right: '-100px',
                    width: '300px', height: '300px', borderRadius: '50%',
                    background: 'rgba(39,68,114,0.03)', filter: 'blur(50px)', pointerEvents: 'none'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '10%', left: '-100px',
                    width: '350px', height: '350px', borderRadius: '50%',
                    background: 'rgba(147,197,253,0.08)', filter: 'blur(60px)', pointerEvents: 'none'
                }}></div>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '64px', alignItems: 'start' }}>
                        
                        {/* Left Column: Title, Progress & Image */}
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <span style={{
                                display: 'inline-block', background: 'rgba(39,68,114,0.08)',
                                borderRadius: '20px', padding: '6px 16px', color: 'var(--medi-navy)',
                                fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', marginBottom: '16px',
                                textTransform: 'uppercase'
                            }}>Interactive Checklist</span>
                            
                            <h2 className="medi-section-heading" style={{ margin: '0 0 16px 0', fontSize: 'clamp(28px, 4vw, 38px)' }}>
                                Disney Cruise Planning Checklist
                            </h2>
                            <div className="medi-heading-separator-bar" style={{ margin: '0 0 28px 0' }}></div>
                            
                            <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.7', margin: '0 0 32px 0' }}>
                                Use this interactive tracker to map out your pre-cruise milestones. Click on any item to mark it off as you complete your preparations.
                            </p>

                            {/* Progress Tracker Card */}
                            <div style={{
                                background: '#ffffff',
                                border: '1px solid rgba(39,68,114,0.08)',
                                borderRadius: '20px',
                                padding: '24px 28px',
                                boxShadow: '0 10px 30px rgba(39,68,114,0.05)',
                                marginBottom: '36px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--medi-navy)' }}>Pre-Cruise Progress</span>
                                    <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--medi-navy)' }}>{checklistProgressPercent}%</span>
                                </div>
                                
                                {/* Progress Bar Container */}
                                <div style={{ width: '100%', height: '8px', background: 'var(--medi-bg-soft)', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px' }}>
                                    <div style={{
                                        width: `${checklistProgressPercent}%`,
                                        height: '100%',
                                        background: 'linear-gradient(90deg, var(--medi-navy) 0%, #3b82f6 100%)',
                                        borderRadius: '10px',
                                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}></div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={16} style={{ color: checklistProgressPercent === 100 ? '#10b981' : '#93c5fd' }} />
                                    <span style={{ fontSize: '13px', color: '#475569', fontWeight: '500' }}>
                                        {checklistProgressPercent === 100 
                                            ? "Perfect! You are fully prepared to set sail!" 
                                            : `${completedChecklistCount} of 8 steps completed. Keep going!`}
                                    </span>
                                </div>
                            </div>

                            {/* Image with overlay caption */}
                            <div style={{ 
                                borderRadius: '24px', 
                                overflow: 'hidden', 
                                boxShadow: '0 15px 35px rgba(0,0,0,0.12)', 
                                height: '280px',
                                position: 'relative'
                            }}>
                                <img src={image3} alt="Disney Cruise Ship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, rgba(15,28,46,0.3) 60%, transparent 100%)',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                                    padding: '24px'
                                }}>
                                    <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600', margin: 0, letterSpacing: '0.02em', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                                        "A seamless voyage starts with beautiful preparation."
                                    </p>
                                    <span style={{ color: '#93c5fd', fontSize: '12px', fontWeight: '500', marginTop: '4px' }}>
                                        Trips & Ships Luxury Travel
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Timeline Checklist List */}
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '24px' }}>
                            {/* Vertical line behind timeline */}
                            <div style={{
                                position: 'absolute', left: '46px', top: '24px', bottom: '24px',
                                width: '2px', background: 'linear-gradient(180deg, var(--medi-navy) 0%, rgba(39,68,114,0.1) 100%)',
                                pointerEvents: 'none'
                            }}></div>

                            {checklist.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => toggleChecklistItem(item.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            background: '#ffffff',
                                            border: item.done ? '1px solid rgba(39,68,114,0.15)' : '1px solid rgba(39,68,114,0.06)',
                                            borderRadius: '16px',
                                            padding: '16px 20px',
                                            boxShadow: item.done ? '0 4px 15px rgba(39,68,114,0.03)' : '0 10px 25px rgba(39,68,114,0.05)',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                            position: 'relative',
                                            zIndex: 2,
                                            transform: 'translateY(0)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)'
                                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(39,68,114,0.08)'
                                            e.currentTarget.style.borderColor = 'rgba(39,68,114,0.2)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = item.done ? '0 4px 15px rgba(39,68,114,0.03)' : '0 10px 25px rgba(39,68,114,0.05)'
                                            e.currentTarget.style.borderColor = item.done ? 'rgba(39,68,114,0.15)' : 'rgba(39,68,114,0.06)'
                                        }}
                                    >
                                        {/* Left check circle & connection dot */}
                                        <div style={{
                                            width: '24px', height: '24px', borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0, zIndex: 3
                                        }}>
                                            {item.done ? (
                                                <CheckCircle size={22} style={{ color: 'var(--medi-navy)', fill: 'rgba(147,197,253,0.15)', transition: 'all 0.2s' }} />
                                            ) : (
                                                <div style={{
                                                    width: '20px', height: '20px', borderRadius: '50%',
                                                    border: '2px solid #cbd5e1', background: '#ffffff', transition: 'all 0.2s'
                                                }}></div>
                                            )}
                                        </div>

                                        {/* Icon Box */}
                                        <div style={{
                                            width: '44px', height: '44px', borderRadius: '12px',
                                            background: item.done ? 'rgba(39,68,114,0.06)' : 'var(--medi-bg-soft)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: item.done ? 'var(--medi-navy)' : '#64748b',
                                            flexShrink: 0,
                                            transition: 'all 0.25s'
                                        }}>
                                            {item.icon}
                                        </div>

                                        {/* Text info */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{
                                                fontSize: '16px', fontWeight: '700',
                                                color: item.done ? '#475569' : 'var(--medi-navy)',
                                                textDecoration: item.done ? 'line-through rgba(71,85,105,0.4)' : 'none',
                                                transition: 'all 0.25s'
                                            }}>{item.task}</div>
                                            <div style={{
                                                fontSize: '13px',
                                                color: item.done ? '#94a3b8' : '#64748b',
                                                marginTop: '2px',
                                                fontWeight: '500'
                                            }}>{item.timing}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

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
                                <img src={Profile_Picture_AH} alt="Disney Cruise Norwegian Fjords" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat" >
                                <span className="medi-editorial-stat-number">40+</span>
                                <span className="medi-editorial-stat-label">Years of Cruise Expertise</span>
                            </div>
                        </div>

                        <div className="medi-editorial-text-block">
                            <span className="medi-editorial-eyebrow-label">EXPERT INSIGHT</span>
                            <h2 className="medi-editorial-title">Why the Booking <br /> Timeline Matters</h2>
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
                    {/* Visual Callout Banner using image7 */}
                    <div style={{ marginTop: '48px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', height: '280px', position: 'relative' }}>
                        <img src={image17} alt="Disney Cruise dining experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, rgba(15,28,46,0.9) 30%, rgba(15,28,46,0.3) 70%, transparent 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '40px'
                        }}>
                            <div style={{ maxWidth: '450px' }}>
                                <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Exclusive Onboard Dining &amp; Shows</h4>
                                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                                    From adults-only fine dining at Enchanté to Broadway-caliber family shows, early planning ensures you don't miss out on premium experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         

          {/* ============================================================
                ANGELA HUGHES AUTHORITY BOX
            ============================================================ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Angela Hughes Authority Box</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "40+ years luxury travel expertise", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026", icon: Crown, category: "PRESTIGE" },
                                    { text: "Featured in global travel publications", icon: Sparkles, category: "RECOGNITION" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box"><IconComp size={16} /></div>
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