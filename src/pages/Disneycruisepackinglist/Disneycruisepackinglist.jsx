import Navbar from '../../components/Navbar/Navbar'
import './Disneycruisepackinglist.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Hero rotating images — place in src/assets/DisneyCruisePackingList/
import hero1 from '../../assets/Disneycruisepackinglist/disney-wish-1923-restaurant-animation-themed-family-dining.jpg'
import hero2 from '../../assets/Disneycruisepackinglist/disney-wish-luna-lounge-circular-stage-architecture.jpg'
import hero3 from '../../assets/Disneycruisepackinglist/disney-castaway-cay-private-island-tropical-beachfront-relaxation.jpg'

// Section feature images
import imgCastawayBeach from '../../assets/Disneycruisepackinglist/chip-and-dale-castaway-cay-family-beach.jpg'
import imgLookoutCay from '../../assets/Disneycruisepackinglist/disney-lookout-cay-lighthouse-point-boardwalk-trail.jpg'
import imgPromenadeDeck from '../../assets/Disneycruisepackinglist/disney-cruise-line-family-walking-promenade-deck.jpg'
import imgPaloDining from '../../assets/Disneycruisepackinglist/disney-wish-palo-steakhouse-adults-only-premium-dining-room.jpg'
import imgPortholeView from '../../assets/Disneycruisepackinglist/disney-very-merrytime-cruise-porthole-window-ocean-view.jpg'
import imgHalloweenParty from '../../assets/Disneycruisepackinglist/disney-cruise-halloween-on-the-high-seas-chip-and-dale.jpg'
import imgAlaskaMickey from '../../assets/Disneycruisepackinglist/disney-wonder-alaska-cruise-mickey-mouse-family-photo.jpg'
import imgLunaLounge from '../../assets/Disneycruisepackinglist/disney-wish-luna-lounge-family-entertainment-hub-interior.jpg'
import imgDogSledding from '../../assets/Disneycruisepackinglist/disney-cruise-alaska-shore-excursion-dog-sledding-puppy.jpeg'
import imgJunkanooLookout from '../../assets/Disneycruisepackinglist/junkanoo-cultural-celebration-at-lookout-cay.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Briefcase, Shirt,
    Camera, Smartphone, Stethoscope, Tag, X, Anchor as AnchorIcon,
    Umbrella, Droplet, ShieldAlert
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function DisneyCruisePackingList() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1,hero2,hero3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedCategory, setMediSelectedCategory] = useState(0)

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    // Lucide Icons Map for Category list
    const categoryIcons = [
        Briefcase,      // Embarkation Day Bag
        Shirt,          // Clothing Essentials
        Droplet,        // Swimwear & Pool Essentials
        Crown,          // Pirate Night Packing List
        Umbrella,       // Castaway Cay & Lookout Cay
        Sparkles,       // Character Experience Essentials
        Smartphone,     // Electronics & Technology
        Baby,           // Toddlers & Babies
        Utensils,       // Dining & Specialty Attire
        Heart           // Stateroom Door Decorations
    ];

    const packingCategories = [
        {
            title: 'Embarkation Day Bag',
            // img: embarkationBag,
            badge: 'PACK FIRST',
            intro: "Your checked luggage may not arrive at your stateroom until later in the afternoon. Pack a carry-on bag with items you'll need immediately.",
            items: ['Travel documents', 'Swimsuits', 'Sunscreen', 'Medications', 'Phone chargers', 'Portable battery pack', 'Change of clothes', 'Sunglasses', 'Water bottle', "Kids' necessities"],
            note: 'Many families head straight to the pool after boarding. Having swimwear accessible allows you to enjoy the ship immediately.'
        },
        {
            title: 'Clothing Essentials',
            // img: clothingEssentials,
            badge: 'EVERYDAY WEAR',
            intro: "Disney cruises are generally casual, but you'll want options for various activities.",
            subgroups: [
                { label: 'Daytime Clothing', items: ['T-shirts', 'Casual tops', 'Shorts', 'Sundresses', 'Lightweight pants', 'Comfortable walking shoes', 'Sandals'] },
                { label: 'Evening Clothing', items: ['Casual dresses', 'Polo shirts', 'Button-down shirts', 'Khakis', 'Resort wear'] }
            ],
            note: 'Disney Cruise Line does not require formal attire, although many guests choose to dress up for special evenings.'
        },
        {
            title: 'Swimwear & Pool Essentials',
            // img: swimwearPool,
            badge: 'POOL & WATER PLAY',
            intro: "You'll spend plenty of time around pools, water play areas, and beaches.",
            items: ['2–3 swimsuits per person', 'Cover-ups', 'Rash guards', 'Water shoes', 'Flip-flops', 'Pool bag', 'Waterproof phone case', 'Quick-dry towels (optional)']
        },
        {
            title: 'Pirate Night Packing List',
            // img: pirateNight,
            badge: 'DISNEY TRADITION',
            intro: "One of Disney Cruise Line's most popular traditions is Pirate Night. Many guests participate by dressing up in pirate-themed outfits.",
            items: ['Pirate costumes', 'Pirate hats', 'Eye patches', 'Pirate-themed shirts', 'Pirate accessories', 'Themed family outfits'],
            note: 'Disney provides basic pirate bandanas, but many guests enjoy bringing more elaborate costumes.'
        },
        {
            title: 'Castaway Cay & Lookout Cay',
            // img: castawayCay,
            badge: 'PRIVATE ISLAND',
            intro: "Disney's private destinations are highlights of many cruises.",
            items: ['Reef-safe sunscreen', 'Beach bag', 'Sunglasses', 'Hats', 'Water shoes', 'Refillable water bottle', 'Snorkel gear (optional)', 'Waterproof phone pouch', 'Lightweight cover-up', 'Beach toys for children']
        },
        {
            title: 'Character Experience Essentials',
            // img: characterExperience,
            badge: 'MEET & GREET',
            intro: 'Character interactions are a major part of Disney cruising. Consider bringing:',
            items: ['Autograph books', 'Disney pens', 'Character-themed outfits', 'Matching family shirts', 'Disney ears', 'Photo props'],
            note: 'These small items can make character encounters even more memorable.'
        },
        {
            title: 'Electronics & Technology',
            // img: electronics,
            badge: 'STAY CONNECTED',
            intro: 'Although onboard shops sell basic necessities, prices can be higher.',
            items: ['Smartphones', 'Chargers', 'Portable battery packs', 'Smart watches', 'Tablets', 'Cameras', 'Memory cards', 'Power bank'],
            note: 'Disney staterooms have limited outlets. Many travelers bring USB charging hubs.'
        },
        {
            title: 'Toddlers & Babies',
            // img: toddlerBaby,
            badge: 'FAMILIES WITH LITTLE ONES',
            intro: 'Families traveling with young children should prepare carefully.',
            items: ['Diapers', 'Wipes', 'Formula', 'Bottles', 'Baby food', 'Pacifiers', 'Stroller', 'Baby monitor', 'Extra clothing', 'Favorite comfort items'],
            note: 'Disney offers some baby supplies onboard, but availability may be limited.'
        },
        {
            title: 'Dining & Specialty Attire',
            // img: diningAttire,
            badge: 'PALO & ENCHANTÉ',
            intro: 'Most dining venues are casual. However, Palo and Enchanté encourage elevated attire.',
            subgroups: [
                { label: 'Women', items: ['Dresses', 'Resort wear', 'Elegant separates'] },
                { label: 'Men', items: ['Collared shirts', 'Dress pants', 'Sport coats (optional)'] }
            ],
            note: 'Formal wear is not required.'
        },
        {
            title: 'Stateroom Door Decorations',
            // img: doorDecorations,
            badge: 'MAGNETS ONLY',
            intro: 'Many Disney cruisers decorate their stateroom doors. Popular decorations include:',
            items: ['Magnets', 'Family names', 'Disney themes', 'Celebration signs', 'Birthday decorations'],
            note: 'Only magnetic decorations are permitted. Tape and adhesives are generally prohibited.'
        }
    ]

    const mediFaqs = [
        { question: 'What should I pack for a Disney Cruise?', answer: 'You should pack travel documents, casual clothing, swimwear, medications, electronics, sunscreen, Pirate Night attire, and beach essentials.' },
        { question: 'Do I need a passport for a Disney Cruise?', answer: 'A passport is strongly recommended, although some closed-loop cruises may allow alternative documentation.' },
        { question: 'What should I bring for Pirate Night?', answer: 'Most guests bring pirate costumes, themed shirts, hats, eye patches, and accessories.' },
        { question: 'Are formal clothes required on Disney Cruise Line?', answer: 'No. Disney Cruise Line generally follows a cruise-casual dress code, although specialty restaurants encourage more polished attire.' },
        { question: 'Should I bring beach towels?', answer: 'Disney provides towels for pool and beach use, so bringing your own is optional.' },
        { question: 'Do Disney Cruise staterooms have hair dryers?', answer: 'Yes. Disney staterooms include hair dryers.' },
        { question: 'Can I decorate my Disney Cruise door?', answer: 'Yes. Magnetic decorations are permitted and very popular among Disney cruisers.' },
        { question: 'Should I bring a refillable water bottle?', answer: 'Yes. A refillable bottle can help you stay hydrated throughout the cruise.' },
        { question: 'What should I pack for Castaway Cay?', answer: 'Pack sunscreen, sunglasses, hats, water shoes, swimsuits, and a waterproof phone pouch.' },
        { question: "Is motion sickness medicine necessary?", answer: "Even if you don't usually experience motion sickness, it's wise to pack medication just in case." },
        { question: 'Do Disney ships provide toiletries?', answer: 'Basic toiletries are provided, but many guests prefer bringing their favorite products.' },
        { question: 'What electronics should I bring?', answer: 'Bring phones, chargers, cameras, power banks, tablets, and any devices needed during travel.' },
        { question: 'Can I do laundry onboard?', answer: 'Yes. Disney ships offer self-service laundry facilities and laundry services.' },
        { question: 'What is the most forgotten item on a Disney Cruise?', answer: 'Portable chargers, sunscreen, medications, and Pirate Night accessories are among the most commonly forgotten items.' },
        { question: 'How many outfits should I pack for a 7-night Disney Cruise?', answer: 'Most travelers pack one daytime outfit per day, several evening outfits, multiple swimsuits, and one Pirate Night costume or themed outfit.' }
    ]

    const mustNotForget = ['Sunscreen', 'Portable charger', 'Autograph book', 'Refillable water bottle', 'Pirate Night outfit', 'Medications', 'Waterproof phone case', 'Travel documents', 'Disney-themed outfits', 'Motion sickness remedies']
    const prohibitedItems = ['Irons', 'Steamers', 'Candles', 'Heating devices', 'Weapons', 'Illegal substances', 'Drones']

    const checklistGroups = [
        { label: 'Documents', icon: FileText, items: ['Passport', 'ID', 'Cruise documents', 'Travel insurance'] },
        { label: 'Clothing', icon: Shirt, items: ['Daytime outfits', 'Evening outfits', 'Swimsuits', 'Sleepwear', 'Undergarments'] },
        { label: 'Beach Items', icon: Umbrella, items: ['Sunscreen', 'Sunglasses', 'Hats', 'Water shoes'] },
        { label: 'Electronics', icon: Smartphone, items: ['Chargers', 'Camera', 'Power bank'] },
        { label: 'Disney Extras', icon: Sparkles, items: ['Pirate Night costumes', 'Autograph books', 'Door magnets', 'Disney ears'] }
    ]

const cruisepacking = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Disney Cruise Packing List: The Ultimate Disney Cruise Line Packing Guide",
    "description": "Planning a Disney Cruise? Discover the ultimate Disney Cruise packing list with essentials for adults, kids, toddlers, Pirate Night, Castaway Cay, excursions, and embarkation day.",
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
      "@id": "https://www.tripsandships.com/disney-cruise-packing-list"
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
        "name": "What should I pack for a Disney Cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should pack travel documents, casual clothing, swimwear, medications, electronics, sunscreen, Pirate Night attire, and beach essentials."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a passport for a Disney Cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A passport is strongly recommended, although some closed-loop cruises may allow alternative documentation."
        }
      },
      {
        "@type": "Question",
        "name": "What should I bring for Pirate Night?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most guests bring pirate costumes, themed shirts, hats, eye patches, and accessories."
        }
      },
      {
        "@type": "Question",
        "name": "Are formal clothes required on Disney Cruise Line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Disney Cruise Line generally follows a cruise-casual dress code, although specialty restaurants encourage more polished attire."
        }
      },
      {
        "@type": "Question",
        "name": "Should I bring beach towels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Disney provides towels for pool and beach use, so bringing your own is optional."
        }
      },
      {
        "@type": "Question",
        "name": "Do Disney Cruise staterooms have hair dryers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Disney staterooms include hair dryers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I decorate my Disney Cruise door?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Magnetic decorations are permitted and very popular among Disney cruisers."
        }
      },
      {
        "@type": "Question",
        "name": "Should I bring a refillable water bottle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A refillable bottle can help you stay hydrated throughout the cruise."
        }
      },
      {
        "@type": "Question",
        "name": "What should I pack for Castaway Cay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pack sunscreen, sunglasses, hats, water shoes, swimsuits, and a waterproof phone pouch."
        }
      },
      {
        "@type": "Question",
        "name": "Is motion sickness medicine necessary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even if you don't usually experience motion sickness, it's wise to pack medication just in case."
        }
      },
      {
        "@type": "Question",
        "name": "Do Disney ships provide toiletries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic toiletries are provided, but many guests prefer bringing their favorite products."
        }
      },
      {
        "@type": "Question",
        "name": "What electronics should I bring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bring phones, chargers, cameras, power banks, tablets, and any devices needed during travel."
        }
      },
      {
        "@type": "Question",
        "name": "Can I do laundry onboard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Disney ships offer self-service laundry facilities and laundry services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most forgotten item on a Disney Cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Portable chargers, sunscreen, medications, and Pirate Night accessories are among the most commonly forgotten items."
        }
      },
      {
        "@type": "Question",
        "name": "How many outfits should I pack for a 7-night Disney Cruise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most travelers pack one daytime outfit per day, several evening outfits, multiple swimsuits, and one Pirate Night costume or themed outfit."
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
        "name": "Disney Cruise Packing List",
        "item": "https://www.tripsandships.com/disney-cruise-packing-list"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disney Cruise Packing List: The Ultimate Disney Cruise Line Packing Guide",
    "url": "https://www.tripsandships.com/disney-cruise-packing-list",
    "description": "Complete Disney Cruise packing guide covering embarkation day, Pirate Night, Castaway Cay, family essentials, travel documents, electronics, and cruise vacation must-haves."
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


   
    return (
        <>
            <Helmet>
                <title>Disney Cruise Packing List (2026 Guide) | What to Pack for a Disney Cruise</title>
                <meta name="title" content="Disney Cruise Packing List: Everything You Need to Bring" />
                <meta name="description" content="Planning a Disney Cruise? Discover the ultimate Disney Cruise packing list with essentials for adults, kids, toddlers, Pirate Night, Castaway Cay, excursions, and embarkation day." />
                <meta name="keywords" content="Disney Cruise Packing List, Disney Cruise Packing Guide, Disney Cruise Checklist, Disney Cruise Packing Guide, Disney Cruise essentials" />
                <script type="application/ld+json">{JSON.stringify(cruisepacking)}</script>
            </Helmet>

            <Navbar />

            {/* ============================================================
                HERO SECTION
            ============================================================ */}
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
                        <Briefcase size={16} />
                        <span>Disney Cruise Line Packing Guide 2026</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Disney Cruise Packing List: Everything You Need for a Smooth Sailing Vacation
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        From embarkation day to Pirate Night to Castaway Cay — pack with confidence
                    </p>
                  
                </div>
            </section>

            {/* ============================================================
                PREMIUM INTRO SECTION
            ============================================================ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">SMOOTH SAILING STARTS HERE</span>
                            <h2 className="medi-premium-heading">Packing for a Disney Cruise Is Different</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Packing for a Disney Cruise is different from packing for a typical cruise vacation.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                Between Pirate Night, character meet-and-greets, beach days at Castaway Cay, onboard activities, specialty dining, and family adventures, there are several Disney-specific items many first-time cruisers forget to bring.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                The good news?
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                With the right preparation, you&apos;ll avoid unnecessary purchases onboard and enjoy a stress-free vacation from embarkation day through debarkation morning.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                This complete Disney Cruise Packing List covers everything you need for adults, kids, toddlers, excursions, Pirate Night, and Disney&apos;s private island destinations.
                            </p>


                        </div>

                        {/* Signature Expert Block */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, luxury cruise expert Angela Hughes helps families prepare thoroughly so their Disney Cruise feels effortless from embarkation to debarkation.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">&quot;</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes offers unmatched insight into Disney Cruise Line preparation.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ── Essential Travel Documents ── standalone block ── */}
                    <div className="disney-docs-section-wrapper">
                        <div className="disney-docs-section-header">
                            <span className="disney-docs-eyebrow">Before You Pack Anything Else</span>
                            <h3 className="disney-docs-heading">Essential Travel Documents</h3>
                            <div className="disney-docs-separator"></div>
                            <p className="disney-docs-lead">Essential Travel Documents — before packing anything else, make sure you have:</p>
                        </div>
                        <div className="disney-docs-cards-grid">
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><FileText size={22} /></div>
                                <span className="disney-docs-card-title">Passport (recommended)</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><FileText size={22} /></div>
                                <span className="disney-docs-card-title">Birth certificates (if applicable)</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><Tag size={22} /></div>
                                <span className="disney-docs-card-title">Government-issued photo ID</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><Ship size={22} /></div>
                                <span className="disney-docs-card-title">Disney Cruise boarding documents</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><ShieldAlert size={22} /></div>
                                <span className="disney-docs-card-title">Travel insurance information</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><Calendar size={22} /></div>
                                <span className="disney-docs-card-title">Flight confirmations</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><Calendar size={22} /></div>
                                <span className="disney-docs-card-title">Hotel confirmations</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><Compass size={22} /></div>
                                <span className="disney-docs-card-title">Excursion confirmations</span>
                            </div>
                            <div className="disney-docs-card-item">
                                <div className="disney-docs-icon-box"><Phone size={22} /></div>
                                <span className="disney-docs-card-title">Emergency contact information</span>
                            </div>
                        </div>
                        <div className="disney-docs-pro-tip">
                            <span className="disney-docs-pro-tip-label">Pro Tip</span>
                            Keep all travel documents in a waterproof travel organizer that stays with your carry-on luggage.
                        </div>
                    </div>

                </div>
            </section>

            {/* ============================================================
                PACKING CATEGORIES — INTERACTIVE DASHBOARD (REDESIGNED)
            ============================================================ */}
            <section className="disney-packing-section">
                <div className="disney-packing-container">
                    <div className="disney-packing-header">
                        <span className="disney-packing-eyebrow">Packing Guide</span>
                        <h2 className="disney-packing-heading">Your Disney Cruise Packing Categories</h2>
                        <div className="disney-packing-separator"></div>
                    </div>

                    <div className="disney-packing-dashboard">
                        {/* Sidebar Tabs */}
                        <div className="disney-packing-tabs-container">
                            <div className="disney-packing-tabs-header">
                                <span className="disney-packing-tabs-title">Categories</span>
                            </div>
                            <div className="disney-packing-tabs">
                                {packingCategories.map((cat, idx) => {
                                    const IconComponent = categoryIcons[idx] || Briefcase;
                                    
                                    return (
                                        <button
                                            key={idx}
                                            className={`disney-packing-tab-btn ${mediSelectedCategory === idx ? 'active' : ''}`}
                                            onClick={() => setMediSelectedCategory(idx)}
                                        >
                                            <div className="disney-packing-tab-icon-wrapper">
                                                <IconComponent size={18} />
                                            </div>
                                            <div className="disney-packing-tab-content">
                                                <span className="disney-packing-tab-number">Deck 0{idx + 1}</span>
                                                <span className="disney-packing-tab-title">{cat.title}</span>
                                                <span className="disney-packing-tab-badge">{cat.badge}</span>
                                            </div>
                                            <ChevronRight size={14} className="disney-packing-tab-arrow" style={{ opacity: 0.6 }} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Showcase Card */}
                        <div className="disney-packing-showcase-card">
                            <div className="disney-packing-showcase-header">
                                <div>
                                    <span className="disney-packing-showcase-badge">
                                        {packingCategories[mediSelectedCategory].badge}
                                    </span>
                                    <h3 className="disney-packing-showcase-title">
                                        {packingCategories[mediSelectedCategory].title}
                                    </h3>
                                </div>
                            </div>

                            <p className="disney-packing-intro">
                                {packingCategories[mediSelectedCategory].intro}
                            </p>

                            {/* Packing Checklist Items */}
                            {packingCategories[mediSelectedCategory].subgroups ? (
                                <div className="disney-packing-subgroups-wrapper">
                                    {packingCategories[mediSelectedCategory].subgroups.map((sub, si) => (
                                        <div key={si} className="disney-packing-subgroup-section">
                                            <h4 className="disney-packing-subgroup-title">{sub.label}</h4>
                                            <div className="disney-packing-subgroup-grid">
                                                {sub.items.map((item, i) => (
                                                    <div key={i} className="disney-packing-item-card static">
                                                        <CheckCircle size={14} className="disney-packing-bullet-icon" style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                                        <span className="disney-packing-item-text">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="disney-packing-items-grid">
                                    {packingCategories[mediSelectedCategory].items.map((item, i) => (
                                        <div key={i} className="disney-packing-item-card static">
                                            <CheckCircle size={14} className="disney-packing-bullet-icon" style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                            <span className="disney-packing-item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Pro Tip Callout Box */}
                            {packingCategories[mediSelectedCategory].note && (
                                <div className="disney-packing-pro-tip">
                                    <Anchor size={20} className="disney-packing-pro-tip-icon" />
                                    <div className="disney-packing-pro-tip-content">
                                        <span className="disney-packing-pro-tip-title">Captain's Stateroom Tip</span>
                                        {packingCategories[mediSelectedCategory].note}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                VISUAL MOMENTS — PREMIUM GALLERY
            ============================================================ */}
            <section className="disney-gallery-section">
                <div className="disney-gallery-container">
                    <div className="disney-gallery-header">
                        <span className="disney-gallery-eyebrow">Onboard & Shore Experience</span>
                        <h2 className="disney-gallery-heading">Visualizing Your Disney Cruise Adventure</h2>
                        <div className="disney-gallery-separator"></div>
                    </div>
                    <div className="disney-gallery-grid">
                        <div className="disney-gallery-item wide">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgCastawayBeach} alt="Chip and Dale at Castaway Cay Family Beach" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Castaway Cay</span>
                                    <h4 className="disney-gallery-title">Disney's Private Island Paradise</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgLookoutCay} alt="Lookout Cay Lighthouse Point Boardwalk Trail" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Lookout Cay</span>
                                    <h4 className="disney-gallery-title">Lighthouse Point Boardwalk</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgPromenadeDeck} alt="Family walking on the Promenade Deck" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Deck Activities</span>
                                    <h4 className="disney-gallery-title">Strolling the Promenade Deck</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgPaloDining} alt="Palo Steakhouse Adults-Only Premium Dining" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Fine Dining</span>
                                    <h4 className="disney-gallery-title">Palo Steakhouse Premium Dining</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgPortholeView} alt="Porthole view with ocean scenery" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Stateroom Comfort</span>
                                    <h4 className="disney-gallery-title">Cozy Ocean Views</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                HEALTH, PERSONAL CARE & ELECTRONICS — REDESIGNED
            ============================================================ */}
            <section className="disney-health-section">
                <div className="disney-health-container">
                    <div className="disney-health-header-block">
                        <span className="disney-health-eyebrow">DAILY NECESSITIES</span>
                        <h2 className="disney-health-main-title">Health and Personal Care Items</h2>
                        <div className="disney-health-separator"></div>
                        <p className="disney-health-subtitle">
                            Although onboard shops sell basic necessities, prices can be higher.
                        </p>
                    </div>

                    <div className="disney-health-grid">
                        {/* Toiletries Card */}
                        <div className="disney-health-card">
                            <div className="disney-health-card-header">
                                <div className="disney-health-header-left">
                                    <div className="disney-health-icon-wrapper">
                                        <Droplet size={22} />
                                    </div>
                                    <h3 className="disney-health-card-title">Toiletries</h3>
                                </div>
                            </div>
                            <ul className="disney-health-list">
                                {['Toothbrush', 'Toothpaste', 'Shampoo', 'Conditioner', 'Hairbrush', 'Deodorant', 'Makeup', 'Skincare products'].map((item, i) => (
                                    <li key={i} className="disney-health-item-card static">
                                        <CheckCircle size={14} className="disney-health-bullet-icon" style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                        <span className="disney-health-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Health Essentials Card */}
                        <div className="disney-health-card">
                            <div className="disney-health-card-header">
                                <div className="disney-health-header-left">
                                    <div className="disney-health-icon-wrapper">
                                        <Stethoscope size={22} />
                                    </div>
                                    <h3 className="disney-health-card-title">Health Essentials</h3>
                                </div>
                            </div>
                            <ul className="disney-health-list">
                                {['Prescription medications', 'Motion sickness medication', 'Pain relievers', 'Allergy medicine', 'Bandages', 'First-aid supplies'].map((item, i) => (
                                    <li key={i} className="disney-health-item-card static">
                                        <CheckCircle size={14} className="disney-health-bullet-icon" style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                        <span className="disney-health-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Laundry Tips */}
                    <div className="disney-health-laundry-box">
                        <AnchorIcon size={24} className="disney-health-laundry-icon" />
                        <div>
                            <span className="disney-health-laundry-title">Cabin Service Laundry Tip</span>
                            <p className="disney-health-laundry-text">
                                Disney ships offer laundry facilities onboard. Consider packing a laundry bag, travel detergent, and a stain remover pen. This allows families to pack lighter for longer sailings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                DON'T FORGET vs WHAT NOT TO PACK — AUDIENCE SPLIT
            ============================================================ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 className="medi-section-heading">Items You Should NOT Forget</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Most Commonly Forgotten</h3>
                            <ul className="medi-audience-list">
                                {mustNotForget.map((item, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best"><CheckCircle size={20} className="medi-audience-icon" /></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">What Not to Pack</h3>
                            <ul className="medi-audience-list">
                                {prohibitedItems.map((item, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal"><X size={20} className="medi-audience-icon" /></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '20px', fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>
                                Always review Disney Cruise Line&apos;s latest prohibited items policy before departure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                VISUAL MOMENTS — ADDITIONAL SHORE & SHIPS GALLERY
            ============================================================ */}
            <section className="disney-gallery-section second-gallery">
                <div className="disney-gallery-container">
                    <div className="disney-gallery-header">
                        <span className="disney-gallery-eyebrow">Onboard Events & Shore Excursions</span>
                        <h2 className="disney-gallery-heading">Magical Highlights & Adventures</h2>
                        <div className="disney-gallery-separator"></div>
                    </div>
                    <div className="disney-gallery-grid">
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgHalloweenParty} alt="Disney Cruise Halloween on the High Seas with Chip and Dale" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Seasonal Events</span>
                                    <h4 className="disney-gallery-title">Halloween on the High Seas</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgAlaskaMickey} alt="Mickey Mouse Family Photo on Disney Wonder Alaska Cruise" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Character Meet</span>
                                    <h4 className="disney-gallery-title">Alaska Cruise Mickey Photo</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgLunaLounge} alt="Disney Wish Luna Lounge Family Entertainment Hub Interior" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Entertainment</span>
                                    <h4 className="disney-gallery-title">Luna Lounge Family Hub</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item wide">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgDogSledding} alt="Disney Cruise Alaska Shore Excursion Dog Sledding Puppy" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Alaska Excursion</span>
                                    <h4 className="disney-gallery-title">Dog Sledding Excursion</h4>
                                </div>
                            </div>
                        </div>
                        <div className="disney-gallery-item">
                            <div className="disney-gallery-image-wrapper">
                                <img src={imgJunkanooLookout} alt="Junkanoo Cultural Celebration at Lookout Cay" loading="lazy" />
                                <div className="disney-gallery-overlay">
                                    <span className="disney-gallery-tag">Cultural Celebration</span>
                                    <h4 className="disney-gallery-title">Junkanoo at Lookout Cay</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                PRINTABLE CHECKLIST — REDESIGNED
            ============================================================ */}
            <section id="printable-checklist-section" className="disney-printable-section">
                <div className="disney-printable-container">
                    <div className="disney-printable-header">
                        <span className="disney-printable-eyebrow">QUICK REFERENCE</span>
                        <h2 className="disney-printable-heading">Printable Disney Cruise Packing Checklist</h2>
                        <div className="disney-printable-separator"></div>
                    </div>

                    {/* Card Grid */}
                    <div className="disney-printable-grid">
                        {checklistGroups.map((group, idx) => {
                            const Icon = group.icon;
                            
                            return (
                                <div key={idx} className="disney-printable-card">
                                    <div className="disney-printable-card-header">
                                        <div className="disney-printable-card-icon-wrapper">
                                            <Icon size={18} />
                                        </div>
                                        <div className="disney-printable-card-title-group">
                                            <h3 className="disney-printable-card-title">{group.label}</h3>
                                        </div>
                                    </div>
                                    <ul className="disney-printable-list">
                                        {group.items.map((item, i) => (
                                            <li key={i} className="disney-printable-item-card static">
                                                <CheckCircle size={12} className="disney-printable-bullet-icon" style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                                <span className="disney-printable-item-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                EXPERT EDITORIAL — FINAL THOUGHTS
            ============================================================ */}
            <section id="disney-packing-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Final Thoughts from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    A Well-Planned Packing List Makes the Difference
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                A well-planned packing list can make your Disney Cruise significantly more enjoyable.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    By preparing for embarkation day, Pirate Night, character experiences, beach days, and onboard activities, you&apos;ll spend less time worrying about forgotten items and more time making magical memories.
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Embarkation day ready', 'Pirate Night prepared', 'Character experience extras', 'Beach day essentials', 'Stress-free vacation', 'Magical memories'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                Whether you&apos;re sailing on Disney Wish, Disney Treasure, Disney Fantasy, Disney Dream, Disney Magic, or Disney Wonder, having the right essentials packed ensures a smoother and more relaxing vacation for the entire family.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Angela Hughes&apos; expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Disney Cruise Line', icon: Ship },
                                        { title: 'Luxury cruises', icon: Anchor },
                                        { title: 'Expedition travel', icon: Compass },
                                        { title: 'Family travel planning', icon: Users },
                                        { title: 'Premium global travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box"><IconComponent size={14} /></div>
                                                <span className="medi-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
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

            {/* ============================================================
                FAQ SECTION
            ============================================================ */}
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
                                        {mediActiveFaq === index ? '−' : '+'}
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

            {/* ============================================================
                CTA SECTION
            ============================================================ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Plan Your Disney Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            A well-planned packing list can make your Disney Cruise significantly more enjoyable, but planning the right itinerary, stateroom, and dining experience matters just as much.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help families confidently plan every detail of their Disney Cruise.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you need help with:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Choosing the right Disney ship",
                                    "Booking Palo or Enchanté reservations",
                                    "Planning Castaway Cay and Lookout Cay excursions",
                                    "Selecting the ideal stateroom category",
                                    "Coordinating family travel logistics"
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
                                Request Disney Cruise Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DisneyCruisePackingList