import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruiseShipsCompleteFleetGuide.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
  Ship, MapPin, Star, Users, CheckCircle, XCircle,
  ArrowRight, Compass, Sparkles, Anchor, Gem,
  Crown, Phone, LayoutList, Heart, Utensils,
  Sun, Award, Moon, Music, Mic,
  Globe, DollarSign, Wifi, Plane, Wine, Bed,
  Bell, Waves, ShieldCheck, Coffee, AlertCircle,
  Layers, Ruler, Route, ListChecks, Calendar
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CelebrityCruiseShipsCompleteFleetGuide() {

  const [ccsActiveFaq, setCcsActiveFaq] = useState(null)
  const ccsToggleFaq = i => setCcsActiveFaq(ccsActiveFaq === i ? null : i)
  const [ccsActiveEdgeTab, setCcsActiveEdgeTab] = useState(0)
  const [ccsActiveSolTab, setCcsActiveSolTab] = useState(0)
  const [ccsActiveMilTab, setCcsActiveMilTab] = useState(0)

  const ccsFaqs = [
    { question: 'How many Celebrity cruise ships are there?', answer: "Celebrity's current 2026–2027 fleet program lists 15 operating ships: five Edge Series ships, five Solstice Series ships, four Millennium Series ships and Celebrity Flora." },
    { question: 'What is the newest Celebrity cruise ship?', answer: 'Celebrity Xcel is currently the newest operating Celebrity cruise ship. It debuted in the Caribbean in November 2025 and is the fifth ship in the Edge Series.' },
    { question: 'What are the Celebrity Edge Series ships?', answer: 'The Edge Series currently includes Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel.' },
    { question: 'What are the Celebrity Solstice Series ships?', answer: 'The Solstice Series includes Celebrity Solstice, Celebrity Equinox, Celebrity Eclipse, Celebrity Silhouette and Celebrity Reflection.' },
    { question: 'What are the Celebrity Millennium Series ships?', answer: 'The Millennium Series includes Celebrity Millennium, Celebrity Infinity, Celebrity Constellation and Celebrity Summit.' },
    { question: 'Which Celebrity cruise ships sail to the Caribbean?', answer: "Celebrity's Caribbean fleet includes ships such as Celebrity Xcel, Ascent, Apex, Beyond, Reflection, Constellation, Eclipse, Silhouette and Summit, depending on the season and sailing schedule." },
    { question: 'Which Celebrity ships sail to Alaska?', answer: "Celebrity's current Alaska deployment includes Celebrity Edge, Celebrity Solstice and Celebrity Summit. Exact ship assignments vary by season and itinerary." },
    { question: 'Which Celebrity cruise ships sail in Europe?', answer: "Celebrity's European deployment can include Edge Series ships such as Xcel, Apex and Ascent, along with ships including Eclipse, Equinox, Silhouette, Constellation and Infinity, depending on the season." },
    { question: 'Which Celebrity ship is best for the Galápagos?', answer: 'Celebrity Flora is the dedicated Celebrity ship for Galápagos exploration. It was specifically designed for the region and offers all-suite accommodations.' },
    { question: 'What is the difference between Celebrity Edge and Solstice ships?', answer: 'Edge Series ships use a newer design philosophy centered on features such as the Magic Carpet, Infinite Verandas and large outdoor spaces, while Solstice Series ships use an established Celebrity large-ship design with their own dining, entertainment and outdoor facilities.' },
    { question: 'Does Celebrity Xcel sail in the Caribbean?', answer: 'Yes. Celebrity Xcel debuted in the Caribbean and currently operates Caribbean itineraries as part of its deployment. It is also scheduled for European cruising.' },
    { question: 'Which Celebrity cruise ships have Infinite Verandas?', answer: "Infinite Veranda staterooms are a signature accommodation concept of Celebrity's Edge Series. Availability and specific cabin configurations should be checked on the individual ship's deck plan." },
    { question: 'Are all Celebrity cruise ships the same size?', answer: 'No. Celebrity operates ships of substantially different sizes. For example, Celebrity Ascent accommodates 3,260 guests at double occupancy, while Celebrity Flora has a maximum capacity of 100 guests.' },
    { question: 'Which Celebrity cruise ship is best for a first cruise?', answer: 'The best ship depends on your destination and preferred onboard experience. Travelers seeking newer design may prefer an Edge Series ship, while those interested in different itineraries may find a Solstice or Millennium Series ship more suitable.' },
    { question: 'How do I choose the right Celebrity cruise ship?', answer: 'Start with your destination and travel dates, identify the ships sailing that itinerary, then compare ship class, cabin types, dining, entertainment, outdoor spaces, amenities and total trip cost. Always review the exact sailing and deck plan before booking.' }
  ]

  const ccsFleetOverview = [
    { series: 'Edge Series', ships: 'Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent, Celebrity Xcel', defines: 'Contemporary design, innovative outdoor spaces and modern accommodations' },
    { series: 'Solstice Series', ships: 'Celebrity Solstice, Celebrity Equinox, Celebrity Eclipse, Celebrity Silhouette, Celebrity Reflection', defines: 'Established large-ship design with extensive dining, entertainment and outdoor areas' },
    { series: 'Millennium Series', ships: 'Celebrity Millennium, Celebrity Infinity, Celebrity Constellation, Celebrity Summit', defines: 'More traditional Celebrity layouts with global and regional itineraries' },
    { series: 'Expedition', ships: 'Celebrity Flora', defines: 'Purpose-built all-suite ship for the Galápagos' }
  ]

  const ccsEdgeShips = [
    {
      name: 'Celebrity Edge',
      intro: "Celebrity Edge introduced the Edge Series concept and established the design language that later ships expanded upon.",
      features: ['The Magic Carpet', 'Modern public spaces', 'Redesigned veranda concepts', 'Contemporary restaurants and bars', 'Large outdoor areas', 'Modern entertainment spaces'],
      deployment: "Celebrity Edge's deployment includes destinations such as Alaska, Australia and New Zealand, Hawaii and Transpacific itineraries.",
      who: { title: 'Who Should Consider Celebrity Edge?', text: 'Celebrity Edge can be a strong option for travelers who want the original Edge Series design while choosing an itinerary that may differ from the Caribbean-focused deployment of some newer Edge ships.' }
    },
    {
      name: 'Celebrity Apex',
      intro: "Celebrity Apex is the second ship in the Edge Series and continues the series' modern architecture and open-air design.",
      features: ['Magic Carpet', 'Edge Series accommodations', 'Infinite Veranda staterooms', 'Rooftop Garden', 'Contemporary dining', 'Large outdoor social spaces', 'The Retreat suite experience'],
      deployment: 'Celebrity currently lists Apex among its ships sailing in the Caribbean, Europe and Transatlantic regions.',
      who: { title: 'Why Choose Celebrity Apex?', text: 'Apex is worth considering if you want an Edge Series ship combined with European or Caribbean itineraries and prefer the newer-generation Celebrity design.' }
    },
    {
      name: 'Celebrity Beyond',
      intro: 'Celebrity Beyond expands on the Edge Series concept with additional outdoor and social spaces.',
      features: ['Multi-tiered Sunset Bar', 'Larger Grand Plaza', 'Rooftop Garden', 'Edge Series Infinite Verandas', 'The Retreat', 'Multiple restaurants and lounges', 'Contemporary entertainment spaces'],
      deployment: "Celebrity currently lists Beyond primarily for Caribbean cruising in its fleet deployment information.",
      who: { title: 'Celebrity Beyond for Caribbean Cruises', text: "Beyond can be particularly relevant for travelers searching for a modern Celebrity ship for a Caribbean vacation. Celebrity's 2026–2027 Caribbean program includes Beyond among its ships operating in the region." }
    },
    {
      name: 'Celebrity Ascent',
      intro: 'Celebrity Ascent is the fourth Edge Series ship.',
      features: ['32 restaurants, bars and lounges', 'Le Voyage by Chef Daniel Boulud', 'Multi-deck Sunset Bar', 'Rooftop Garden', 'Two cantilevered floating pools', 'AquaClass staterooms', 'Infinite Veranda staterooms', 'The Retreat suite accommodations'],
      deployment: "The ship measures 141,420 gross registered tons, has a double-occupancy capacity of 3,260, and is 1,073 feet long according to Celebrity's published specifications.",
      who: { title: 'Where Does Celebrity Ascent Sail?', text: 'Celebrity Ascent operates in regions including the Caribbean, Europe and Transatlantic itineraries, depending on season.' }
    },
    {
      name: 'Celebrity Xcel',
      intro: 'Celebrity Xcel is currently the newest Celebrity cruise ship and the fifth Edge Series vessel.',
      features: [],
      deployment: 'It debuted in the Caribbean in November 2025 and combines the Edge Series design with additional experiences and new spaces. Celebrity currently promotes Xcel for Caribbean and European cruising.',
      who: { title: 'What Makes Celebrity Xcel Different?', text: 'Xcel builds upon the existing Edge Series rather than introducing an entirely separate ship class. Travelers can expect the familiar Edge Series design philosophy alongside new experiences introduced specifically for Xcel. For travelers specifically searching for the newest Celebrity cruise ship, Xcel is the key ship to compare.' }
    }
  ]

  const ccsSolsticeShips = [
    {
      name: 'Celebrity Solstice',
      intro: 'Celebrity Solstice is the namesake ship of the Solstice Series.',
      features: ['Alaska', 'Australia and New Zealand', 'Hawaii', 'Asia', 'Transpacific voyages'],
      deployment: "Celebrity's current deployment information places Solstice among its ships serving these regions.",
      who: { title: 'Best For', text: 'Celebrity Solstice can appeal to travelers who want an established Celebrity ship while exploring destinations such as Alaska, Asia, Australia and New Zealand.' }
    },
    {
      name: 'Celebrity Equinox',
      intro: 'Celebrity Equinox is a Solstice Series ship with itineraries covering multiple regions.',
      features: ['Europe', 'Caribbean', 'South America', 'Antarctica', 'Transatlantic'],
      deployment: 'Current deployment information includes the regions listed above.',
      who: { title: null, text: 'Equinox can therefore be an interesting choice for travelers who prioritize itinerary variety rather than specifically seeking the newest ship.' }
    },
    {
      name: 'Celebrity Eclipse',
      intro: 'Celebrity Eclipse operates across several regional programs, including Europe, the Caribbean, Transatlantic routes and selected other itineraries.',
      features: [],
      deployment: '',
      who: { title: null, text: 'Its deployment can make it useful for travelers looking for European or longer repositioning voyages without specifically selecting an Edge Series vessel.' }
    },
    {
      name: 'Celebrity Silhouette',
      intro: 'Celebrity Silhouette is another Solstice Series ship and has undergone modernization.',
      features: ['Lawn Club', 'Dining venues', 'Bars and lounges', 'Outdoor spaces', 'Reimagined staterooms and suites', 'Entertainment venues'],
      deployment: 'Celebrity highlights its reimagined accommodations and venues, with itineraries including Europe and the Caribbean as well as selected northern European destinations.',
      who: { title: 'What Stands Out on Celebrity Silhouette?', text: null }
    },
    {
      name: 'Celebrity Reflection',
      intro: 'Celebrity Reflection completes the Solstice Series.',
      features: [],
      deployment: 'It operates primarily in the Caribbean in current fleet deployment information and offers a large-ship Celebrity experience with extensive dining, entertainment and outdoor spaces.',
      who: { title: null, text: 'Celebrity has also announced a future refreshed Celebrity Reflection, scheduled to debut in the Caribbean in March 2027.' }
    }
  ]

  const ccsMillenniumShips = [
    { name: 'Celebrity Millennium', text: 'Celebrity currently lists Millennium primarily for Asian itineraries. This makes it particularly relevant for travelers interested in exploring Asian destinations while staying with the Celebrity brand.' },
    { name: 'Celebrity Infinity', text: 'Celebrity Infinity operates primarily in Europe in Celebrity current fleet deployment information. It can be a useful choice for travelers interested in Mediterranean and European itineraries who want to explore destinations from an established Celebrity ship.' },
    { name: 'Celebrity Constellation', text: 'Celebrity Constellation currently operates across regions including the Caribbean, Europe and Transatlantic itineraries. Its broader deployment makes it suitable for travelers comparing different regional cruise options.' },
    { name: 'Celebrity Summit', text: 'Celebrity Summit operates itineraries including Alaska, the Caribbean and Pacific Coastal routes. For travelers choosing an Alaska cruise, Summit provides an alternative to the Edge Series ships operating in the region.' }
  ]

  const ccsFloraExperience = ['Wildlife', 'Naturalist-led exploration', 'Volcanic landscapes', 'Small-group excursions', 'Galápagos destinations', 'All-suite accommodation', 'Expedition-style travel']

  const ccsSeriesTable = [
    { series: 'Edge Series', ships: 'Edge, Apex, Beyond, Ascent, Xcel', style: 'Modern, design-led cruising' },
    { series: 'Solstice Series', ships: 'Solstice, Equinox, Eclipse, Silhouette, Reflection', style: 'Established large-ship experience' },
    { series: 'Millennium Series', ships: 'Millennium, Infinity, Constellation, Summit', style: 'Regional and global itineraries' },
    { series: 'Expedition', ships: 'Flora', style: 'Galápagos exploration' }
  ]

  const ccsDestinationTable = [
    { dest: 'Caribbean', ships: 'Xcel, Ascent, Apex, Beyond, Reflection, Constellation, Eclipse, Silhouette, Summit' },
    { dest: 'Europe', ships: 'Xcel, Ascent, Apex, Edge, Eclipse, Equinox, Silhouette, Constellation, Infinity' },
    { dest: 'Alaska', ships: 'Edge, Solstice, Summit' },
    { dest: 'Asia', ships: 'Solstice, Millennium' },
    { dest: 'Australia & New Zealand', ships: 'Edge, Solstice' },
    { dest: 'South America', ships: 'Eclipse, Equinox and selected seasonal ships' },
    { dest: 'Antarctica', ships: 'Selected Equinox itineraries' },
    { dest: 'Galápagos', ships: 'Celebrity Flora' }
  ]

  const ccsChooseEdge = ['Newer ship design', 'Contemporary interiors', 'Infinite Veranda options', 'Magic Carpet', 'Large outdoor spaces', 'Modern restaurants and lounges', 'The newest Celebrity experience']
  const ccsChooseSolstice = ['A proven Celebrity ship design', 'Extensive onboard facilities', 'Strong destination variety', 'Caribbean or European options', 'Alaska or other seasonal itineraries on selected ships']
  const ccsChooseMillennium = ['Established Celebrity cruising', 'Regional itineraries', 'Europe, Asia, Alaska or Caribbean options depending on ship', 'A different alternative to the Edge and Solstice Series']
  const ccsChooseFlora = ['Galápagos exploration', 'All-suite accommodation', 'Small-ship expedition travel', 'Naturalist-led experiences', 'Wildlife and nature-focused itineraries']

  const ccsComparisonTable = [
    { category: 'Design', edge: 'Most contemporary', solstice: 'Established modern design', millennium: 'Established Celebrity design' },
    { category: 'Ship concept', edge: 'Innovation and open-air spaces', solstice: 'Resort-style cruising', millennium: 'Regional/global cruising' },
    { category: 'Infinite Veranda', edge: 'Available on Edge Series ships', solstice: 'Not the defining feature', millennium: 'Not the defining feature' },
    { category: 'Magic Carpet', edge: 'Yes', solstice: 'No', millennium: 'No' },
    { category: 'Itinerary range', edge: 'Broad', solstice: 'Broad', millennium: 'Broad, varies by ship' },
    { category: 'Best starting point', edge: 'Newest design', solstice: 'Classic Celebrity experience', millennium: 'Destination-focused comparison' }
  ]

  const ccsCabinTypes = ['Inside staterooms', 'Ocean View staterooms', 'Veranda staterooms', 'Infinite Veranda staterooms on Edge Series ships', 'AquaClass accommodations', 'Suites', 'The Retreat suite accommodations']
  const ccsDiningEntertainment = ['Main restaurants', 'Specialty restaurants', 'Casual dining', 'Cafés', 'Poolside food', 'Cocktail lounges', 'Theater entertainment', 'Live music', 'Nightlife', 'Outdoor entertainment', 'Fitness and wellness facilities']
  const ccsDeckPlanChecklist = ['Your deck location', 'Distance from elevators', 'Restaurants and entertainment venues above or below', 'Pool deck location', 'Nearby service areas', 'Balcony or veranda configuration', 'Cabin category', 'Connecting-room availability', 'Accessible accommodation requirements']

  const ccsSeasonHighlights = ['Celebrity Xcel sailing the Caribbean and Europe', 'Expanded European itineraries', 'Alaska cruises', 'Asia itineraries', 'Australia and New Zealand', 'South America', 'Antarctica', 'Galápagos', 'Overnight stays in selected destinations', 'A 110-day Grand Voyage from Alaska to Asia']

  const ccsChooseSteps = [
    { title: 'Start With the Destination', text: 'Decide whether you want the Caribbean, Mediterranean, Alaska, Asia, Australia and New Zealand, South America, Antarctica or the Galápagos.' },
    { title: 'Shortlist the Ships', text: 'Identify the Celebrity ships sailing your preferred itinerary.' },
    { title: 'Compare Ship Classes', text: 'Decide whether Edge, Solstice, Millennium or expedition-style Flora best fits your travel style.' },
    { title: "Check the Ship's Features", text: 'Compare restaurants, pools, entertainment, outdoor spaces, spa, fitness, children\'s facilities, suite areas, and cabin types.' },
    { title: 'Study the Deck Plan', text: 'Check your exact cabin location before booking.' },
    { title: 'Compare the Total Price', text: 'Include cruise fare, taxes and fees, drinks, Wi-Fi, specialty dining, excursions, flights, hotels, transfers, and other travel expenses.' },
    { title: 'Check the Current Sailing Details', text: 'Ship deployments, itineraries, venues and schedules can change, so verify the exact sailing before making a final booking decision.' }
  ]

  const ccsInternalLinks = [
    { text: 'Celebrity Cruises Complete Guide', path: '/celebrity-cruises/' },
    { text: 'Celebrity Cruise Destinations', path: '/celebrity-cruises/destinations/' },
    { text: 'Celebrity Cruise Deals', path: '/celebrity-cruises/deals/' },
    { text: 'Celebrity Cruise Itineraries', path: '/celebrity-cruises/itineraries/' },
    { text: 'Caribbean Cruises', path: '/caribbean-cruises/' },
    { text: 'Mediterranean Cruises', path: '/mediterranean-cruises/' },
    { text: 'Alaska Cruises', path: '/alaska-cruises/' },
    { text: 'Cruise Ships Guide', path: '/cruise-ships/' },
    { text: 'Cruise Destinations', path: '/cruise-destinations/' },
    { text: 'Cruise Travel Guide', path: '/cruise-travel-guide/' }
  ]

  const ccsKeyTakeaways = [
    'Celebrity Cruises currently operates four main fleet categories: Edge, Solstice, Millennium and Expedition.',
    'The Edge Series includes Celebrity Edge, Apex, Beyond, Ascent and Xcel.',
    'Celebrity Xcel is currently the newest operating Celebrity cruise ship.',
    'Celebrity Xcel debuted in the Caribbean in November 2025.',
    'The Solstice Series includes Solstice, Equinox, Eclipse, Silhouette and Reflection.',
    'The Millennium Series includes Millennium, Infinity, Constellation and Summit.',
    'Celebrity Flora is a specialized all-suite ship designed specifically for the Galápagos.',
    'Edge Series ships emphasize contemporary design, outdoor spaces and innovative accommodations.',
    'Celebrity ship deployment changes by season.',
    'Alaska, Caribbean, Europe, Asia, Australia and New Zealand, South America and Antarctica are among the regions served by the fleet.',
    'The best ship depends on the itinerary, cabin, onboard features and travel style.',
    'Always check the exact ship and sailing before booking because itineraries and deployment can change.'
  ]

  const ccsBestForTravelers = [
    { title: 'Best Celebrity Ships for Couples', text: 'Couples may prefer newer Edge Series ships such as Celebrity Ascent, Beyond, Apex or Xcel for their contemporary design, dining and outdoor spaces.' },
    { title: 'Best Celebrity Ships for Families', text: 'Families should compare cabin configurations, children\'s programming, pools, dining options and itinerary length on the specific ship rather than choosing solely by class.' },
    { title: 'Best Celebrity Ships for Alaska', text: "Celebrity's current Alaska deployment includes Celebrity Edge, Celebrity Solstice and Celebrity Summit." },
    { title: 'Best Celebrity Ships for the Caribbean', text: 'The current Caribbean fleet includes Edge Series ships such as Xcel, Ascent, Apex and Beyond alongside selected Solstice and Millennium Series ships.' },
    { title: 'Best Celebrity Ship for the Galápagos', text: 'Celebrity Flora is the dedicated Celebrity choice for Galápagos exploration.' }
  ]

  const ccsSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/ships/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/ships/",
        "name": "Celebrity Cruise Ships: Complete Fleet Guide",
        "description": "Explore the complete Celebrity Cruises fleet, including Edge, Solstice, Millennium and Flora ships, with ship features, destinations and planning tips.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/ships/" },
        "publisher": { "@id": "https://www.tripsandships.com#organization" },
        "breadcrumb": { "@id": "https://www.tripsandships.com/celebrity-cruises/ships/#breadcrumb" }
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/celebrity-cruises/ships/#article",
        "url": "https://www.tripsandships.com/celebrity-cruises/ships/",
        "headline": "Celebrity Cruise Ships: Complete Fleet Guide",
        "description": "A comprehensive guide to Celebrity Cruises ships, including Edge, Solstice, Millennium and Flora, with fleet comparisons, destinations and ship-selection advice.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/ships/" },
        "publisher": { "@id": "https://www.tripsandships.com#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/ships/#faq",
        "mainEntity": ccsFaqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/ships/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/" },
          { "@type": "ListItem", "position": 3, "name": "Celebrity Cruise Ships", "item": "https://www.tripsandships.com/celebrity-cruises/ships/" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com#organization",
        "name": "Trips and Ships",
        "url": "https://www.tripsandships.com"
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Celebrity Cruise Ships: Complete Fleet Guide</title>
        <meta name="title" content="Celebrity Cruise Ships: Complete Fleet Guide" />
        <meta name="description" content="Explore the complete Celebrity Cruises fleet, including Edge, Solstice, Millennium and Flora ships, with ship features, destinations and planning tips." />
        <meta name="keywords" content="Celebrity Cruise Ships, Celebrity Cruises fleet, Celebrity cruise ships, Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent, Celebrity Xcel, Celebrity Solstice Series, Celebrity Millennium Series, Celebrity Flora, Celebrity ship classes, newest Celebrity cruise ship, Celebrity ship comparison, Celebrity cruise fleet" />
        <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/ships" />
        <script type="application/ld+json">{JSON.stringify(ccsSchemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="ccs-hero-section">
        <div className="ccs-hero-overlay-layer"></div>
        <div className="ccs-hero-content-wrapper">
          <div className="ccs-hero-eyebrow-tag">
            <Ship size={16} />
            <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
          </div>
          <h1 className="ccs-hero-main-title">Celebrity Cruise Ships: Complete Fleet Guide</h1>
          <p className="ccs-hero-subtitle-text">
            Explore the complete Celebrity Cruises fleet, including Edge, Solstice, Millennium and Flora ships, with ship features, destinations and planning tips.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ccs-intro-section">
        <div className="ccs-intro-container">
          <div className="ccs-intro-grid">
            <div className="ccs-intro-text-col">
              <div className="ccs-intro-lead-card">
                <p className="ccs-intro-lead">
                  Celebrity Cruises operates a diverse fleet designed around several different cruising styles. The fleet includes the contemporary Edge Series, the established Solstice Series, the Millennium Series, and the specialized Celebrity Flora, which was designed specifically for Galápagos exploration. Celebrity's published 2026–2027 program lists 15 ships sailing across its main and expedition fleet, with itineraries spanning more than 70 countries and all seven continents.
                </p>
              </div>
              <p className="ccs-intro-body">
                For travelers comparing Celebrity cruise ships, the most important difference is not simply ship size or age. Each class has a different atmosphere, accommodation design, dining lineup, outdoor spaces, entertainment options, and itinerary profile.
              </p>
              <p className="ccs-intro-body">
                This guide explains the current fleet, what distinguishes each ship, which destinations each vessel serves, and how to choose the right Celebrity ship for your trip.
              </p>
            </div>
            <div className="ccs-intro-image-col">
              <div className="ccs-intro-image-frame ccs-placeholder-frame">
                <div className="ccs-placeholder-content">
                  <Ship size={48} className="ccs-placeholder-icon" />
                  <span className="ccs-placeholder-text">Celebrity Fleet Image Placeholder</span>
                </div>
                <div className="ccs-intro-image-badge">
                  <Anchor size={14} />
                  <span>Modern Luxury</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET AT A GLANCE ── */}
      <section className="ccs-table-section" style={{ background: '#e3ebf5' }}>
        <div className="ccs-table-container" style={{ maxWidth: '1100px' }}>
          <span className="ccs-eyebrow">FLEET OVERVIEW</span>
          <h2 className="ccs-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Fleet at a Glance</h2>
          <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          <p className="ccs-table-intro">Celebrity's current fleet can be grouped into four main categories:</p>
          <div className="ccs-fleet-table-wrapper">
            <table className="ccs-fleet-table">
              <thead>
                <tr>
                  <th>Series</th>
                  <th>Ships</th>
                  <th>What Defines the Series</th>
                </tr>
              </thead>
              <tbody>
                {ccsFleetOverview.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.series}</strong></td>
                    <td>{row.ships}</td>
                    <td>{row.defines}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ccs-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Celebrity's official fleet page identifies these ships and their current series and regional deployments.</span>
          </div>
        </div>
      </section>

      {/* ── IS XCEL THE NEWEST ── */}
      <section className="ccs-feature-section">
        <div className="ccs-feature-container">
          <div className="ccs-feature-grid">
            <div className="ccs-feature-image-col">
              <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '360px' }}>
                <div className="ccs-placeholder-content">
                  <Sparkles size={48} className="ccs-placeholder-icon" />
                  <span className="ccs-placeholder-text">Celebrity Xcel Image Placeholder</span>
                </div>
                <div className="ccs-image-badge"><Ship size={13} /><span>Newest Ship</span></div>
              </div>
            </div>
            <div className="ccs-feature-text-col">
              <span className="ccs-eyebrow">NEWEST SHIP</span>
              <h2 className="ccs-section-heading">Is Celebrity Xcel the Newest Celebrity Cruise Ship?</h2>
              <div className="ccs-heading-separator-bar"></div>
              <p className="ccs-feature-lead">Yes. Celebrity Xcel is currently the newest ship in the Celebrity fleet.</p>
              <p className="ccs-feature-body">It debuted in the Caribbean in November 2025 and is part of the five-ship Edge Series. Celebrity currently markets Xcel for Caribbean and European itineraries.</p>
              <p className="ccs-feature-body">Celebrity has also announced Celebrity Xcite, which is listed as coming in 2028. It should therefore be treated as a future ship rather than part of the current operating fleet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDGE SERIES ── */}
      <section className="ccs-different-section">
        <div className="ccs-different-container">
          <span className="ccs-eyebrow">EDGE SERIES SHIPS</span>
          <h2 className="ccs-section-heading">Celebrity Edge Series Ships</h2>
          <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          <p className="ccs-different-body">
            The Edge Series is Celebrity's most contemporary ship family. It currently includes five ships: Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel. Celebrity describes the series around distinctive design features, including the Magic Carpet, expansive outdoor areas, and accommodations designed to connect guests more closely with the ocean.
          </p>
        </div>
      </section>

      {/* ── EDGE SERIES TABS SECTION ── */}
      <section className="ccs-edge-tabs-section">
        <div className="ccs-edge-tabs-container">
          <div className="ccs-edge-tabs-header">
            <span className="ccs-eyebrow">EDGE SERIES</span>
            <h2 className="ccs-edge-tabs-main-title">Celebrity Edge Fleet</h2>
            <div className="ccs-edge-tabs-divider"></div>
          </div>
          <div className="ccs-edge-tabs-grid">
            {/* Left side: Tabs selector list */}
            <div className="ccs-edge-tabs-list">
              {ccsEdgeShips.map((ship, idx) => (
                <button
                  key={ship.name}
                  className={`ccs-edge-tab-btn ${ccsActiveEdgeTab === idx ? 'ccs-active' : ''}`}
                  onClick={() => setCcsActiveEdgeTab(idx)}
                >
                  <div className="ccs-edge-tab-btn-icon">
                    <Ship size={18} />
                  </div>
                  <div className="ccs-edge-tab-btn-text">
                    <span>{ship.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right side: Active tab content */}
            <div className="ccs-edge-tab-content">
              <div className="ccs-edge-tab-content-inner">
                <div className="ccs-edge-tab-image-box">
                  <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '320px' }}>
                    <div className="ccs-placeholder-content">
                      <Ship size={48} className="ccs-placeholder-icon" />
                      <span className="ccs-placeholder-text">{ccsEdgeShips[ccsActiveEdgeTab].name} Image Placeholder</span>
                    </div>
                    <div className="ccs-image-badge">
                      <Anchor size={13} />
                      <span>Edge Series</span>
                    </div>
                  </div>
                </div>
                <div className="ccs-edge-tab-info-card">
                  <span className="ccs-eyebrow">EDGE SERIES</span>
                  <h3 className="ccs-edge-tab-title">{ccsEdgeShips[ccsActiveEdgeTab].name}</h3>
                  <div className="ccs-edge-tab-divider"></div>
                  <p className="ccs-feature-lead">{ccsEdgeShips[ccsActiveEdgeTab].intro}</p>
                  {ccsEdgeShips[ccsActiveEdgeTab].features && ccsEdgeShips[ccsActiveEdgeTab].features.length > 0 && (
                    <div className="ccs-edge-tab-features">
                      {ccsEdgeShips[ccsActiveEdgeTab].features.map((f, i) => (
                        <span key={i}><CheckCircle size={14} />{f}</span>
                      ))}
                    </div>
                  )}
                  <p className="ccs-feature-body">{ccsEdgeShips[ccsActiveEdgeTab].deployment}</p>
                  {ccsEdgeShips[ccsActiveEdgeTab].who && (ccsEdgeShips[ccsActiveEdgeTab].who.title || ccsEdgeShips[ccsActiveEdgeTab].who.text) && (
                    <div className="ccs-edge-tab-footnote">
                      <Compass size={15} />
                      <span><strong>{ccsEdgeShips[ccsActiveEdgeTab].who.title}</strong> {ccsEdgeShips[ccsActiveEdgeTab].who.text}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── SOLSTICE SERIES TABS ── */}
      <section className="ccs-sol-tabs-section">
        <div className="ccs-sol-tabs-container">
          <div className="ccs-sol-tabs-header">
            <span className="ccs-eyebrow">SOLSTICE SERIES</span>
            <h2 className="ccs-sol-tabs-main-title">Celebrity Solstice Fleet</h2>
            <div className="ccs-sol-tabs-divider"></div>
          </div>
          <div className="ccs-sol-tabs-grid">
            {/* Left side: Tabs selector list */}
            <div className="ccs-sol-tabs-list">
              {ccsSolsticeShips.map((ship, idx) => (
                <button
                  key={ship.name}
                  className={`ccs-sol-tab-btn ${ccsActiveSolTab === idx ? 'ccs-active' : ''}`}
                  onClick={() => setCcsActiveSolTab(idx)}
                >
                  <div className="ccs-sol-tab-btn-icon">
                    <Ship size={18} />
                  </div>
                  <div className="ccs-sol-tab-btn-text">
                    <span>{ship.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right side: Active tab content */}
            <div className="ccs-sol-tab-content">
              <div className="ccs-sol-tab-content-inner">
                {/* Full width image */}
                <div className="ccs-sol-tab-image-box">
                  <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '320px' }}>
                    <div className="ccs-placeholder-content">
                      <Ship size={48} className="ccs-placeholder-icon" />
                      <span className="ccs-placeholder-text">{ccsSolsticeShips[ccsActiveSolTab].name} Image Placeholder</span>
                    </div>
                    <div className="ccs-image-badge">
                      <Anchor size={13} />
                      <span>Solstice Series</span>
                    </div>
                  </div>
                </div>
                {/* Info below image */}
                <div className="ccs-sol-tab-info-card">
                  <span className="ccs-eyebrow">SOLSTICE SERIES</span>
                  <h3 className="ccs-sol-tab-title">{ccsSolsticeShips[ccsActiveSolTab].name}</h3>
                  <div className="ccs-sol-tab-divider"></div>
                  <p className="ccs-sol-tab-intro">{ccsSolsticeShips[ccsActiveSolTab].intro}</p>

                  {ccsSolsticeShips[ccsActiveSolTab].features && ccsSolsticeShips[ccsActiveSolTab].features.length > 0 && (
                    <div className="ccs-sol-tab-features-wrapper" style={{ margin: '14px 0 16px 0' }}>
                      <p className="ccs-sol-tab-features-label" style={{ fontWeight: 600, color: 'var(--ccsx-navy)', marginBottom: '8px' }}>
                        {ccsSolsticeShips[ccsActiveSolTab].name === 'Celebrity Solstice' ? 'Itineraries include:' : 'Current deployment:'}
                      </p>
                      <div className="ccs-sol-tab-features">
                        {ccsSolsticeShips[ccsActiveSolTab].features.map((f, i) => (
                          <span key={i}><CheckCircle size={14} />{f}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {ccsSolsticeShips[ccsActiveSolTab].deployment && (
                    <p className="ccs-sol-tab-deploy">{ccsSolsticeShips[ccsActiveSolTab].deployment}</p>
                  )}

                  {ccsSolsticeShips[ccsActiveSolTab].who && (ccsSolsticeShips[ccsActiveSolTab].who.title || ccsSolsticeShips[ccsActiveSolTab].who.text) && (
                    <div className="ccs-sol-tab-footnote">
                      <Compass size={15} />
                      <span>
                        {ccsSolsticeShips[ccsActiveSolTab].who.title && <strong>{ccsSolsticeShips[ccsActiveSolTab].who.title} </strong>}
                        {ccsSolsticeShips[ccsActiveSolTab].who.text}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILLENNIUM SERIES TABS ── */}
      <section className="ccs-mil-tabs-section">
        <div className="ccs-mil-tabs-container">
          <div className="ccs-mil-tabs-header">
            <span className="ccs-eyebrow">MILLENNIUM SERIES</span>
            <h2 className="ccs-mil-tabs-main-title">Celebrity Millennium Fleet</h2>
            <div className="ccs-mil-tabs-divider"></div>
          </div>
          <div className="ccs-mil-tabs-grid">
            {/* Left side: Tabs selector list */}
            <div className="ccs-mil-tabs-list">
              {ccsMillenniumShips.map((ship, idx) => (
                <button
                  key={ship.name}
                  className={`ccs-mil-tab-btn ${ccsActiveMilTab === idx ? 'ccs-active' : ''}`}
                  onClick={() => setCcsActiveMilTab(idx)}
                >
                  <div className="ccs-mil-tab-btn-icon">
                    <Ship size={18} />
                  </div>
                  <div className="ccs-mil-tab-btn-text">
                    <span>{ship.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right side: Active tab content */}
            <div className="ccs-mil-tab-content">
              <div className="ccs-mil-tab-content-inner">
                {/* Full width image */}
                <div className="ccs-mil-tab-image-box">
                  <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '320px' }}>
                    <div className="ccs-placeholder-content">
                      <Ship size={48} className="ccs-placeholder-icon" />
                      <span className="ccs-placeholder-text">{ccsMillenniumShips[ccsActiveMilTab].name} Image Placeholder</span>
                    </div>
                    <div className="ccs-image-badge">
                      <Anchor size={13} />
                      <span>Millennium Series</span>
                    </div>
                  </div>
                </div>
                {/* Info below image */}
                <div className="ccs-mil-tab-info-card">
                  <span className="ccs-eyebrow">MILLENNIUM SERIES</span>
                  <h3 className="ccs-mil-tab-title">{ccsMillenniumShips[ccsActiveMilTab].name}</h3>
                  <div className="ccs-mil-tab-divider"></div>
                  <p className="ccs-mil-tab-intro">{ccsMillenniumShips[ccsActiveMilTab].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CELEBRITY FLORA ── */}
      <section className="ccs-flora-section">
        <div className="ccs-flora-bg">
          <div className="ccs-flora-overlay"></div>
        </div>
        <div className="ccs-flora-container">
          <div className="ccs-flora-header">
            <span className="ccs-eyebrow">EXPEDITION</span>
            <h2 className="ccs-flora-main-title">Celebrity Flora: The Galápagos Ship</h2>
            <div className="ccs-flora-divider"></div>
            <p className="ccs-flora-subtitle">Celebrity Flora is fundamentally different from Celebrity's large cruise ships. It was designed specifically for the Galápagos Islands and is an all-suite mega-yacht-style vessel.</p>
          </div>
          <div className="ccs-flora-content-grid">
            <div className="ccs-flora-image-col">
              <div className="ccs-flora-image-box">
                <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '340px' }}>
                  <div className="ccs-placeholder-content">
                    <Compass size={48} className="ccs-placeholder-icon" />
                    <span className="ccs-placeholder-text">Celebrity Flora Image Placeholder</span>
                  </div>
                  <div className="ccs-image-badge"><Globe size={13} /><span>Galápagos Ship</span></div>
                </div>
              </div>
              <div className="ccs-flora-footnote">
                <Sparkles size={15} />
                <span>Celebrity currently offers Inner Loop and Outer Loop Galápagos itineraries, with some extended programs incorporating Quito, Lima and Machu Picchu.</span>
              </div>
            </div>
            <div className="ccs-flora-info-col">
              <div className="ccs-flora-stats-grid">
                <div className="ccs-flora-stat-card">
                  <MapPin size={18} />
                  <div className="ccs-flora-stat-info">
                    <span className="ccs-flora-stat-label">Destination</span>
                    <span className="ccs-flora-stat-value">Galápagos Islands</span>
                  </div>
                </div>
                <div className="ccs-flora-stat-card">
                  <Bed size={18} />
                  <div className="ccs-flora-stat-info">
                    <span className="ccs-flora-stat-label">Accommodation</span>
                    <span className="ccs-flora-stat-value">All Suites</span>
                  </div>
                </div>
                <div className="ccs-flora-stat-card">
                  <Users size={18} />
                  <div className="ccs-flora-stat-info">
                    <span className="ccs-flora-stat-label">Max Guests</span>
                    <span className="ccs-flora-stat-value">100</span>
                  </div>
                </div>
                <div className="ccs-flora-stat-card">
                  <Ruler size={18} />
                  <div className="ccs-flora-stat-info">
                    <span className="ccs-flora-stat-label">Length</span>
                    <span className="ccs-flora-stat-value">~333 feet</span>
                  </div>
                </div>
                <div className="ccs-flora-stat-card">
                  <Calendar size={18} />
                  <div className="ccs-flora-stat-info">
                    <span className="ccs-flora-stat-label">Maiden Voyage</span>
                    <span className="ccs-flora-stat-value">2019</span>
                  </div>
                </div>
                <div className="ccs-flora-stat-card">
                  <Compass size={18} />
                  <div className="ccs-flora-stat-info">
                    <span className="ccs-flora-stat-label">Design Focus</span>
                    <span className="ccs-flora-stat-value">Galápagos Exploration</span>
                  </div>
                </div>
              </div>
              <p className="ccs-flora-desc">Celebrity states that Flora has a maximum guest capacity of 100 and uses destination-specific design and environmental technologies, including dynamic positioning that allows it to remain on station without dropping anchors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD CHOOSE FLORA ── */}
      <section className="ccs-flora-choose-section">
        <div className="ccs-flora-choose-container">
          <div className="ccs-flora-choose-header">
            <span className="ccs-eyebrow">GALÁPAGOS TRAVEL</span>
            <h2 className="ccs-flora-choose-title">Who Should Choose Celebrity Flora?</h2>
            <div className="ccs-flora-choose-divider"></div>
            <p className="ccs-flora-choose-intro">Flora is for travelers whose main objective is exploring the Galápagos rather than enjoying the traditional amenities of a large cruise resort.</p>
          </div>
          <div className="ccs-flora-choose-grid">
            {ccsFloraExperience.map((item, idx) => {
              const icons = [Compass, Users, Waves, Users, MapPin, Bed, Ship]
              const Icon = icons[idx % icons.length]
              return (
                <div key={idx} className="ccs-flora-choose-card">
                  <div className="ccs-flora-choose-icon">
                    <Icon size={20} />
                  </div>
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SHIPS BY SERIES ── */}
      <section className="ccs-table-section ccs-comparison-section-redesign">
        <div className="ccs-table-container" style={{ maxWidth: '1000px' }}>
          <span className="ccs-eyebrow">QUICK COMPARISON</span>
          <h2 className="ccs-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Ships by Series</h2>
          <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          <p className="ccs-table-intro">For a quick comparison, use this fleet breakdown:</p>
          <div className="ccs-fleet-table-wrapper">
            <table className="ccs-fleet-table">
              <thead>
                <tr><th>Ship Series</th><th>Ships</th><th>Travel Style</th></tr>
              </thead>
              <tbody>
                {ccsSeriesTable.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.series}</strong></td>
                    <td>{row.ships}</td>
                    <td>{row.style}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ccs-table-footnote-badge">
            <Award size={15} />
            <span>The Edge Series currently has five ships, while the Solstice and Millennium Series each have four or five ships respectively, and Celebrity Flora operates as the fleet's specialized Galápagos vessel.</span>
          </div>
        </div>
      </section>

      {/* ── SHIPS BY DESTINATION ── */}
      <section className="ccs-table-section">
        <div className="ccs-table-container" style={{ maxWidth: '1000px' }}>
          <span className="ccs-eyebrow">DESTINATION PLANNING</span>
          <h2 className="ccs-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Ships by Destination</h2>
          <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          <p className="ccs-table-intro">Your destination can help narrow down the fleet faster than comparing every ship individually.</p>
          <div className="ccs-fleet-table-wrapper">
            <table className="ccs-fleet-table">
              <thead>
                <tr><th>Destination</th><th>Celebrity Ships to Consider</th></tr>
              </thead>
              <tbody>
                {ccsDestinationTable.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.dest}</strong></td>
                    <td>{row.ships}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ccs-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Ship deployment is seasonal and can change, so use the specific sailing schedule when making a final selection. Celebrity's 2026–2027 program includes destinations across all seven continents.</span>
          </div>
        </div>
      </section>

      {/* ── WHICH SHIP IS BEST FOR YOU ── */}
      <section className="ccs-best-ship-section">
        <div className="ccs-best-ship-container">
          <div className="ccs-best-ship-header">
            <span className="ccs-eyebrow">SHIP SELECTION</span>
            <h2 className="ccs-best-ship-main-title">Which Celebrity Cruise Ship Is Best for You?</h2>
            <div className="ccs-best-ship-divider"></div>
            <p className="ccs-best-ship-intro">There is no single best Celebrity ship for every traveler. The right choice depends on what matters most to your travel style.</p>
          </div>

          <div className="ccs-best-ship-grid">
            {/* Card 1: Edge Series */}
            <div className="ccs-best-ship-card">
              <div className="ccs-best-ship-card-header">
                <Sparkles size={20} />
                <h3>Edge Series</h3>
              </div>
              <div className="ccs-best-ship-card-body">
                <p className="ccs-best-ship-card-lead">Choose this series if you want:</p>
                <ul className="ccs-best-ship-list">
                  {ccsChooseEdge.map((item, idx) => (
                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Solstice Series */}
            <div className="ccs-best-ship-card">
              <div className="ccs-best-ship-card-header">
                <Sun size={20} />
                <h3>Solstice Series</h3>
              </div>
              <div className="ccs-best-ship-card-body">
                <p className="ccs-best-ship-card-lead">Choose this series if you want:</p>
                <ul className="ccs-best-ship-list">
                  {ccsChooseSolstice.map((item, idx) => (
                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Millennium Series */}
            <div className="ccs-best-ship-card">
              <div className="ccs-best-ship-card-header">
                <Layers size={20} />
                <h3>Millennium Series</h3>
              </div>
              <div className="ccs-best-ship-card-body">
                <p className="ccs-best-ship-card-lead">Choose this series if you want:</p>
                <ul className="ccs-best-ship-list">
                  {ccsChooseMillennium.map((item, idx) => (
                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4: Celebrity Flora */}
            <div className="ccs-best-ship-card">
              <div className="ccs-best-ship-card-header">
                <Compass size={20} />
                <h3>Celebrity Flora</h3>
              </div>
              <div className="ccs-best-ship-card-body">
                <p className="ccs-best-ship-card-lead">Choose this vessel if you want:</p>
                <ul className="ccs-best-ship-list">
                  {ccsChooseFlora.map((item, idx) => (
                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDGE VS SOLSTICE VS MILLENNIUM COMPARISON ── */}
      <section className="ccs-table-section ccs-comparison-section-redesign">
        <div className="ccs-table-container" style={{ maxWidth: '1000px' }}>
          <span className="ccs-eyebrow">HOW THE SERIES COMPARE</span>
          <h2 className="ccs-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Ship Comparison: <br /> Edge vs. Solstice vs. Millennium</h2>
          <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          <div className="ccs-fleet-table-wrapper">
            <table className="ccs-fleet-table">
              <thead>
                <tr><th>Category</th><th>Edge Series</th><th>Solstice Series</th><th>Millennium Series</th></tr>
              </thead>
              <tbody>
                {ccsComparisonTable.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.category}</strong></td>
                    <td>{row.edge}</td>
                    <td>{row.solstice}</td>
                    <td>{row.millennium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ccs-table-footnote-badge">
            <AlertCircle size={15} />
            <span>The individual ship matters within each category, so travelers should compare the exact vessel rather than relying only on ship class.</span>
          </div>
        </div>
      </section>

      {/* ── SIZE AND CAPACITY ── */}
      <section className="ccs-size-capacity-section">
        <div className="ccs-feature-container">
          <div className="ccs-feature-grid ccs-reverse">
            <div className="ccs-feature-image-col">
              <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '340px' }}>
                <div className="ccs-placeholder-content">
                  <Ruler size={48} className="ccs-placeholder-icon" />
                  <span className="ccs-placeholder-text">Ship Size Comparison Placeholder</span>
                </div>
                <div className="ccs-image-badge"><Layers size={13} /><span>Sizes &amp; Capacity</span></div>
              </div>
              <div className="ccs-left-footnote-card" style={{ marginTop: '16px' }}>
                <Ruler size={16} className="ccs-footnote-card-icon" />
                <p className="ccs-left-footnote-text">When comparing ships, capacity can be more useful than gross tonnage alone because it gives you a better idea of the passenger environment.</p>
              </div>
            </div>
            <div className="ccs-feature-text-col">
              <span className="ccs-eyebrow">SHIP SIZES</span>
              <h2 className="ccs-section-heading">Celebrity Cruise Ship Sizes and Capacity</h2>
              <div className="ccs-heading-separator-bar"></div>
              <p className="ccs-feature-lead">Ship size varies considerably across the fleet.</p>
              <p className="ccs-feature-body">For example, Celebrity Ascent has a double-occupancy capacity of 3,260 and measures 141,420 gross tons, while Celebrity Flora is designed for a maximum of 100 guests.</p>
              <p className="ccs-feature-body">This creates two very different styles of travel:</p>
              <ul className="ccs-check-list">
                <li><CheckCircle size={16} /><span>Large Celebrity ships: More restaurants, lounges, pools, entertainment and public spaces.</span></li>
                <li><CheckCircle size={16} /><span>Celebrity Flora: A small expedition-focused environment designed around the Galápagos.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CABINS ── */}
      <section className="ccs-feature-section">
        <div className="ccs-feature-container">
          <div className="ccs-feature-grid">
            <div className="ccs-feature-image-col">
              <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '340px' }}>
                <div className="ccs-placeholder-content">
                  <Bed size={48} className="ccs-placeholder-icon" />
                  <span className="ccs-placeholder-text">Cabin Types Image Placeholder</span>
                </div>
                <div className="ccs-image-badge"><Bed size={13} /><span>Cabin Types</span></div>
              </div>
              <div className="ccs-left-footnote-card" style={{ marginTop: '16px' }}>
                <Sparkles size={16} className="ccs-footnote-card-icon" />
                <p className="ccs-left-footnote-text">
                  <strong>How to Choose a Cabin: </strong>
                  Consider the itinerary before selecting a cabin. For scenic destinations such as Alaska, a balcony or ocean-facing accommodation may be especially appealing. For a port-intensive Mediterranean itinerary, travelers who spend less time in the cabin may prefer to allocate more budget toward the itinerary itself.
                </p>
              </div>
            </div>
            <div className="ccs-feature-text-col">
              <span className="ccs-eyebrow">CABINS</span>
              <h2 className="ccs-section-heading">Celebrity Cruise Ship Cabins</h2>
              <div className="ccs-heading-separator-bar"></div>
              <p className="ccs-feature-lead">Cabin categories vary by ship, but travelers can generally encounter:</p>
              <ul className="ccs-check-list">
                {ccsCabinTypes.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="ccs-feature-body">Celebrity Flora is different because every accommodation is a suite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING & ENTERTAINMENT ── */}
      <section className="ccs-dining-ent-section">
        <div className="ccs-dining-ent-container">
          <div className="ccs-dining-ent-grid">
            {/* Left side: Header, Intro, and Image placeholder */}
            <div className="ccs-dining-ent-left-col">
              <span className="ccs-eyebrow">ONBOARD LIFE</span>
              <h2 className="ccs-dining-ent-title">Celebrity Cruise Ship Dining and Entertainment</h2>
              <div className="ccs-dining-ent-divider"></div>
              <p className="ccs-dining-ent-intro">Dining and entertainment options vary from ship to ship. The onboard experience features a refined mix of complimentary venues, specialty dining, and sophisticated lounges.</p>

              <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '220px', marginTop: '20px' }}>
                <div className="ccs-placeholder-content">
                  <Utensils size={40} className="ccs-placeholder-icon" />
                  <span className="ccs-placeholder-text">Dining and Onboard Venues Placeholder</span>
                </div>
                <div className="ccs-image-badge"><Wine size={13} /><span>Onboard Venues</span></div>
              </div>
            </div>

            {/* Right side: Venue Cards Grid and Footnote */}
            <div className="ccs-dining-ent-right-col">
              <h4 className="ccs-dining-ent-grid-heading">Depending on the vessel, you may find:</h4>
              <div className="ccs-dining-ent-cards">
                {ccsDiningEntertainment.map((item, idx) => {
                  const icons = [Utensils, Wine, Coffee, Coffee, Utensils, Wine, Music, Music, Moon, Sparkles, Waves]
                  const Icon = icons[idx % icons.length]
                  return (
                    <div key={idx} className="ccs-dining-ent-card">
                      <Icon size={18} />
                      <span>{item}</span>
                    </div>
                  )
                })}
              </div>

              <div className="ccs-dining-ent-footnote">
                <Sparkles size={15} />
                <span>Newer Edge Series ships place particular emphasis on contemporary restaurants and lounges. Celebrity Ascent, for example, features 32 restaurants, bars and lounges. Always check the venue list for your specific ship.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DECK PLANS ── */}
      <section className="ccs-deck-plans-section">
        <div className="ccs-deck-plans-container">
          <div className="ccs-deck-plans-header">
            <span className="ccs-eyebrow">PLANNING TOOLS</span>
            <h2 className="ccs-deck-plans-title">Celebrity Cruise Ship Deck Plans</h2>
            <div className="ccs-deck-plans-divider"></div>
          </div>

          <div className="ccs-deck-plans-grid">
            {/* Left Column: Mock interactive deck plan card */}
            <div className="ccs-deck-plans-visual-col">
              <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '360px' }}>
                <div className="ccs-placeholder-content">
                  <Layers size={48} className="ccs-placeholder-icon" style={{ color: 'var(--ccsx-navy)' }} />
                  <span className="ccs-placeholder-text">Interactive Deck Plan Map Viewer</span>
                  <div className="ccs-deck-plans-mock-indicator">
                    <span className="ccs-indicator-dot"></span>
                    <span>Live Cabin Layout Map</span>
                  </div>
                </div>
                <div className="ccs-image-badge"><MapPin size={13} /><span>Deck Plans Viewer</span></div>
              </div>
              <div className="ccs-deck-plans-footnote" style={{ marginTop: '16px' }}>
                <AlertCircle size={14} />
                <span>A deck plan can reveal practical differences that are not obvious from ship photographs.</span>
              </div>
            </div>

            {/* Right Column: Information card */}
            <div className="ccs-deck-plans-info-col">
              <p className="ccs-feature-lead">Deck plans are one of the most useful tools when choosing between staterooms.</p>
              
              <div className="ccs-deck-plans-list-wrapper">
                <span className="ccs-deck-plans-list-label">Before selecting a cabin, check:</span>
                <div className="ccs-deck-plans-checklist-grid">
                  {ccsDeckPlanChecklist.map((item, idx) => (
                    <div key={idx} className="ccs-deck-plans-check-item">
                      <CheckCircle size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIPS FOR DIFFERENT TRAVELERS ── */}
      <section className="ccs-different-section-clean">
        <div className="ccs-different-container-clean">
          <div className="ccs-different-clean-grid">
            {/* Left side: Sticky header */}
            <div className="ccs-different-clean-left">
              <span className="ccs-eyebrow">TRAVEL STYLES</span>
              <h2 className="ccs-different-clean-title">Celebrity Cruise Ships for Different Travelers</h2>
              <div className="ccs-different-clean-divider"></div>
              <p className="ccs-different-clean-intro">We break down the fleet configurations to help you select the ideal match for your specific travel preferences.</p>
            </div>

            {/* Right side: Minimal list */}
            <div className="ccs-different-clean-right">
              <div className="ccs-different-clean-list">
                {ccsBestForTravelers.map((item, idx) => {
                  const icons = [Heart, Users, Compass, Globe, Ship]
                  const Icon = icons[idx % icons.length]
                  return (
                    <div key={idx} className="ccs-different-clean-item">
                      <div className="ccs-different-clean-item-header">
                        <Icon size={18} className="ccs-different-clean-icon" />
                        <h3>{item.title}</h3>
                      </div>
                      <p className="ccs-different-clean-item-text">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026-2027 SEASON ── */}
      <section className="ccs-season-section">
        <div className="ccs-season-container">
          <div className="ccs-season-header">
            <span className="ccs-eyebrow">PLANNING AHEAD</span>
            <h2 className="ccs-season-title">Celebrity Cruise Ships in 2026 and 2027</h2>
            <div className="ccs-season-divider"></div>
          </div>

          <div className="ccs-season-grid">
            {/* Left Column: Image and Moved Footnote Card */}
            <div className="ccs-season-image-col">
              <div className="ccs-image-frame ccs-placeholder-frame" style={{ height: '340px' }}>
                <div className="ccs-placeholder-content">
                  <Globe size={48} className="ccs-placeholder-icon" />
                  <span className="ccs-placeholder-text">2026-2027 Season Image Placeholder</span>
                </div>
                <div className="ccs-image-badge"><Route size={13} /><span>2026–2027 Season</span></div>
              </div>
              <div className="ccs-left-footnote-card" style={{ marginTop: '16px' }}>
                <Globe size={16} className="ccs-footnote-card-icon" />
                <p className="ccs-left-footnote-text">Celebrity says its 2026–2027 program covers more than 70 countries, all seven continents and more than 280 destinations. Because deployment changes seasonally, travelers should compare the actual departure date, ship and itinerary rather than relying on a ship's general destination profile.</p>
              </div>
            </div>

            {/* Right Column: Information details */}
            <div className="ccs-season-text-col">
              <p className="ccs-feature-lead">Celebrity's 2026–2027 season includes all major current fleet series and a wide range of destinations.</p>
              
              <div className="ccs-season-highlights-box">
                <span className="ccs-season-highlights-label">Current highlights include:</span>
                <div className="ccs-season-highlights-list">
                  {ccsSeasonHighlights.map((item, idx) => (
                    <div key={idx} className="ccs-season-highlight-item">
                      <CheckCircle size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CHOOSE ── */}
      <section className="ccs-choose-steps-section">
        <div className="ccs-choose-steps-container">
          <div className="ccs-choose-steps-header">
            <span className="ccs-eyebrow">STEP BY STEP</span>
            <h2 className="ccs-choose-steps-main-title">How to Choose the Right Celebrity Cruise Ship</h2>
            <div className="ccs-choose-steps-divider"></div>
            <p className="ccs-choose-steps-intro">Use this simple, expert-recommended process to select the ideal match for your next cruise:</p>
          </div>

          <div className="ccs-choose-steps-grid">
            {ccsChooseSteps.map((step, idx) => (
              <div key={idx} className="ccs-choose-step-card">
                <div className="ccs-choose-step-num-badge">
                  <span>0{idx + 1}</span>
                </div>
                <h3 className="ccs-choose-step-title">{step.title}</h3>
                <div className="ccs-choose-step-line"></div>
                <p className="ccs-choose-step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
      <section className="ccsl-expert-insight-section">
        <div className="ccsl-expert-insight-container">

          <div className="ccsl-expert-portrait-panel">
            <div className="ccsl-expert-img-frame">
              <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Expert" className="ccsl-expert-img" />
              <div className="ccsl-expert-img-overlay"></div>
              <span className="ccsl-expert-badge">EXPERT ADVISOR</span>
            </div>
            <div className="ccsl-expert-stats-strip">
              <div className="ccsl-expert-stat-box">
                <div className="ccsl-expert-stat-num">40+</div>
                <div className="ccsl-expert-stat-lbl">Years Experience</div>
              </div>
              <div className="ccsl-expert-stat-box">
                <div className="ccsl-expert-stat-num">121+</div>
                <div className="ccsl-expert-stat-lbl">Countries Visited</div>
              </div>
            </div>
          </div>

          <div className="ccsl-expert-content-panel">
            <div className="ccsl-expert-eyebrow-row">
              <Sparkles size={16} />
              <span className="ccsl-eyebrow">MEET THE CEO</span>
            </div>
            <h2 className="ccsm-section-heading1">Insight from Angela Hughes</h2>
            <div className="ccsm-heading-separator-bar"></div>

            <div className="ccsl-expert-quote-card">
              <span className="ccsl-expert-quote-mark">"</span>
              <p className="ccsl-expert-quote-text">
                Choosing between Celebrity's ship series isn't about which is objectively best — it's about matching the ship's personality to your itinerary. The Edge Series ships turn heads with their design, but a well-chosen Solstice or Millennium sailing can deliver an equally memorable destination-first experience.
              </p>
            </div>

            <div className="ccsl-expert-priorities">
              <h5 className="ccsl-priorities-title">What Makes Celebrity Stand Out:</h5>
              <div className="ccsl-expert-pills">
                {['Modern Edge Series Design', 'Established Solstice Comfort', 'Global Millennium Itineraries', 'Dedicated Galápagos Expedition', 'Signature Dining & Venues', 'Destination-Led Deployment'].map(pill => (
                  <span key={pill} className="ccsl-expert-pill">
                    <CheckCircle size={12} />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="ccsl-expert-footer-bio">
              <p className="ccsl-expert-bio">
                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── KEY TAKEAWAYS ── */}
      <section className="ccs-takeaways-section">
        <div className="ccs-takeaways-container">
          <h2 className="ccs-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
          <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          <div className="ccs-takeaways-grid">
            {ccsKeyTakeaways.map((item, idx) => (
              <div key={idx} className="ccs-takeaway-card">
                <div className="ccs-takeaway-number">0{idx + 1}</div>
                <p className="ccs-takeaway-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ccs-faq-section">
        <div className="ccs-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="ccs-section-heading">Frequently Asked Questions About Celebrity Cruise Ships</h2>
            <div className="ccs-heading-separator-bar ccs-bar-centered"></div>
          </div>
          <div className="ccs-faq-list-wrapper">
            {ccsFaqs.map((faq, index) => (
              <div
                key={index}
                className="ccs-faq-item"
                onClick={() => ccsToggleFaq(index)}
              >
                <div className="ccs-faq-question-row">
                  <span>{faq.question}</span>
                  <span className="ccs-faq-toggle-icon">{ccsActiveFaq === index ? '−' : '+'}</span>
                </div>
                {ccsActiveFaq === index && (
                  <p className="ccs-faq-answer-text">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ccs-cta-redesign-section">
        <div className="ccs-cta-aurora-glow"></div>
        <div className="ccs-cta-crystal ccs-cta-crystal-1"></div>
        <div className="ccs-cta-crystal ccs-cta-crystal-2"></div>
        <div className="ccs-cta-crystal ccs-cta-crystal-3"></div>
        <div className="ccs-cta-grid-lines"></div>

        <div className="ccs-cta-content">
          <div className="ccs-cta-compass-ring">
            <Compass size={28} />
          </div>
          <span className="ccs-cta-eyebrow">FIND YOUR PERFECT SHIP</span>
          <h2 className="ccs-cta-title">Ready to Choose Your Celebrity Cruise Ship?</h2>
          <div className="ccs-cta-bar"></div>
          <p className="ccs-cta-subtitle">
            Whether you want the newest Edge Series experience aboard Celebrity Xcel, the contemporary design of Celebrity Ascent or Celebrity Beyond, the established Solstice and Millennium Series, or an expedition to the Galápagos aboard Celebrity Flora, we can help you compare the ship, itinerary, cabin and total trip cost before booking.
          </p>
          <div className="ccs-cta-actions">
            <Link to="/contact" className="ccs-cta-primary-btn">
              <Phone size={18} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} className="ccs-cta-btn-arrow" />
            </Link>
            <Link to="/celebrity-cruises" className="ccs-cta-secondary-btn">
              <LayoutList size={18} />
              <span>Explore Celebrity Cruises</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CelebrityCruiseShipsCompleteFleetGuide