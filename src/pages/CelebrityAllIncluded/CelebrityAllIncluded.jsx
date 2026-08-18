// CelebrityAllIncluded.jsx
import Navbar from '../../components/Navbar/Navbar'
import './CelebrityAllIncluded.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
  Ship, MapPin, Star, Users, CheckCircle, XCircle,
  ArrowRight, Compass, Sparkles, Anchor, Gem,
  Crown, Phone, LayoutList, Heart, Utensils,
  Sun, Award, Moon, Music, Mic,
  Globe, DollarSign, Wifi, Plane, Wine, Bed,
  Bell, Waves, ShieldCheck, Coffee, AlertCircle
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CelebrityAllIncluded() {
  const [caiActiveFaq, setCaiActiveFaq] = useState(null)
  const caiToggleFaq = i => setCaiActiveFaq(caiActiveFaq === i ? null : i)

  const caiFaqs = [
    { question: 'What is Celebrity All Included?', answer: 'Celebrity All Included is a bundled cruise-fare option that adds a Classic Drinks Package and unlimited Basic Wi-Fi to the standard cruise experience for eligible bookings.' },
    { question: 'What does Celebrity All Included cover?', answer: 'It covers the standard Celebrity cruise fare plus the Classic Drinks Package and unlimited Basic Wi-Fi. Beverage-package gratuities are included, while current U.S. Celebrity terms state that onboard staff gratuities are separate.' },
    { question: 'Are drinks included with Celebrity All Included?', answer: 'Yes. All Included provides the Classic Drinks Package, which covers selected beers, wines, spirits, cocktails, frozen drinks, sodas, specialty coffees, juices and bottled water, subject to package terms.' },
    { question: 'Is Wi-Fi included with Celebrity All Included?', answer: 'Yes. All Included includes unlimited Basic Wi-Fi. Basic Wi-Fi supports browsing, email and messaging, while streaming and video calls require Premium Wi-Fi.' },
    { question: 'Are gratuities included in Celebrity All Included?', answer: 'Beverage-package gratuities are included. For current U.S. bookings, Celebrity states that onboard staff gratuities are charged separately. Because terms can vary by market, travelers should check the fare conditions for their booking.' },
    { question: 'Does Celebrity All Included include specialty dining?', answer: 'No, not as a standard All Included benefit. Specialty restaurants generally have an additional charge unless a separate dining package or applicable suite benefit is included.' },
    { question: 'Does Celebrity All Included include shore excursions?', answer: 'No. Shore excursions are generally additional purchases and are not part of the standard All Included package.' },
    { question: 'Can I upgrade the Classic Drinks Package to Premium?', answer: 'Yes. Celebrity allows guests who book All Included to upgrade from Classic to Premium Drinks, with pre-cruise upgrades generally available through the Cruise Planner.' },
    { question: 'Can I upgrade Basic Wi-Fi to Premium Wi-Fi?', answer: 'Yes. Guests can upgrade to Premium Wi-Fi, and Celebrity recommends arranging the upgrade before the cruise through the Cruise Planner.' },
    { question: 'Do all guests in the same cabin get All Included?', answer: 'Eligible guests in the same stateroom must generally choose the same fare, and the corresponding drink and Wi-Fi benefits apply to the guests in that stateroom.' },
    { question: 'Can I add All Included after booking?', answer: 'Celebrity\'s current All Included terms state that the All Included fare is selected at booking and cannot simply be added afterward as the same fare option. Individual Wi-Fi or beverage upgrades may still be available through the Cruise Planner.' },
    { question: 'Does All Included include food on Celebrity Cruises?', answer: 'The standard Celebrity cruise fare already includes substantial dining such as main restaurant meals and complimentary casual venues. All Included primarily adds drinks and Wi-Fi rather than creating a separate unlimited specialty-dining package.' },
    { question: 'Is Premium Wi-Fi included with All Included?', answer: 'No. Standard All Included provides Basic Wi-Fi. Premium Wi-Fi is a separate upgrade, while guests staying in The Retreat receive Premium Wi-Fi as part of the enhanced Retreat experience.' },
    { question: 'Does Celebrity All Included include the Premium Drinks Package?', answer: 'No. Standard All Included provides the Classic Drinks Package. Guests can generally pay to upgrade to Premium Drinks. Retreat guests receive Premium Drinks as part of their enhanced suite experience.' },
    { question: 'Is Celebrity All Included worth it?', answer: 'It can be worthwhile if you expect to use the included drinks and Wi-Fi regularly. The best way to judge the value is to compare the All Included fare with the Cruise Only fare and the separate cost of the benefits you would actually use. Celebrity currently advertises potential savings of up to $800, but actual savings vary by booking.' }
  ]

  const caiIncludedList = [
    'Boutique accommodations', 'All meals', 'Premium wines, beer, cocktails, and spirits',
    'Daily shore excursions', 'Onboard gratuities', 'Scheduled airport transfers on eligible itineraries',
    'Wi-Fi', 'Entertainment', 'Wellness activities', 'Concierge-style service'
  ]

  const caiAccommodationFeatures = [
    'Luxury handcrafted furnishings', 'Premium bedding', 'Marble bathrooms', 'Bathrobes and slippers',
    'Daily housekeeping', 'Nightly turndown service', 'Climate control', 'Flat-screen television',
    'In-room safe', 'Complimentary bottled water', 'Luxury bath amenities'
  ]

  const caiBreakfast = ['Extensive buffet', 'Fresh pastries', 'Seasonal fruits', 'Made-to-order specialties', 'Regional dishes']
  const caiLunch = ['Multi-course dining', 'Fresh salads', 'Local cuisine', 'Outdoor dining when available']
  const caiDinner = ['Multi-course gourmet menus', 'Locally inspired cuisine', 'Premium ingredients', 'Vegetarian selections', 'Vegan options', 'Gluten-free meals upon request', 'Regional wine pairings']
  const caiAdditionalDining = ['Afternoon tea', 'Late-night snacks', 'Specialty dining events', 'Farm-to-table experiences', 'Destination-inspired culinary tastings']

  const caiBeverages = [
    'Premium wines', 'Champagne', 'Craft cocktails', 'Top-shelf spirits', 'Local beers',
    'Specialty coffee', 'Espresso drinks', 'Tea', 'Soft drinks', 'Mineral water', 'Fresh juices'
  ]

  const caiExcursions = [
    'Historic city walking tours', 'Castle visits', 'Museum tours', 'Wine tastings', 'Local food experiences',
    'Bike rides', 'Hiking excursions', 'Cultural performances', 'Village visits', 'Scenic countryside tours'
  ]

  const caiButlerServices = [
    'Personal butler service', 'Unpacking assistance', 'Packing assistance', 'In-room dining',
    'Personalized concierge support', 'Laundry assistance', 'Shoe shining'
  ]

  const caiEntertainment = [
    'Local musicians', 'Classical performances', 'Cultural presentations', 'Cooking demonstrations',
    'Guest lectures', 'Wine tastings', 'Regional entertainment', 'Themed evenings'
  ]

  const caiWellness = [
    { Icon: Waves, text: 'Fitness center' },
    { Icon: Sparkles, text: 'Wellness classes' },
    { Icon: Sun, text: 'Yoga sessions' },
    { Icon: Compass, text: 'Walking tracks' },
    { Icon: Ship, text: 'Complimentary bicycles' },
    { Icon: Heart, text: 'Massage services (additional charge)' },
    { Icon: Gem, text: 'Spa treatments (additional charge)' }
  ]

  const caiWifiUses = ['Check email', 'Share travel photos', 'Browse the internet', 'Use messaging apps', 'Stay connected with family']
  const caiTransfers = ['Airport to ship', 'Ship to airport', 'Hotel transfers on qualifying cruise-tour packages']
  const caiGratuitiesCover = ['Dining staff', 'Housekeeping', 'Ship crew', 'Hospitality team']
  const caiSuiteBenefits = [
    'Larger living spaces', 'Butler service', 'Premium minibars', 'Laundry service',
    'Exclusive dining experiences', 'Enhanced bathroom amenities', 'Priority services', 'Complimentary room service'
  ]

  const caiIncludedVsExtra = [
    { included: 'Luxury accommodations', extra: 'International airfare' },
    { included: 'All meals', extra: 'Travel insurance' },
    { included: 'Premium beverages', extra: 'Optional spa treatments' },
    { included: 'Daily excursions', extra: 'Personal shopping' },
    { included: 'Wi-Fi', extra: 'Independent private tours' },
    { included: 'Gratuities', extra: 'Visa fees (if required)' },
    { included: 'Entertainment', extra: 'Some premium experiences' },
    { included: 'Fitness facilities', extra: 'Optional pre/post cruise hotels' }
  ]

  const caiComparison = [
    { feature: 'Meals', uniworld: 'Included', typical: 'Included' },
    { feature: 'Premium alcohol', uniworld: 'Extensive', typical: 'Often limited' },
    { feature: 'Shore excursions', uniworld: 'Included', typical: 'Included' },
    { feature: 'Wi-Fi', uniworld: 'Included', typical: 'Usually included' },
    { feature: 'Gratuities', uniworld: 'Included', typical: 'Sometimes extra' },
    { feature: 'Butler service', uniworld: 'Selected suites', typical: 'Limited' },
    { feature: 'Boutique décor', uniworld: 'Signature feature', typical: 'Varies' },
    { feature: 'Airport transfers', uniworld: 'Eligible itineraries', typical: 'Varies' }
  ]

  const caiKeyTakeaways = [
    'Celebrity All Included is a bundled fare option, not an everything-is-free cruise package.',
    'Current U.S. Celebrity information identifies Classic Drinks and Basic Wi-Fi as the main All Included additions.',
    'Beverage-package gratuities are included.',
    'Current U.S. terms state that onboard staff gratuities are separate, so check your market-specific fare terms.',
    'Basic Wi-Fi supports browsing, email and messaging but not streaming or video calls.',
    'The Classic Drinks Package includes alcoholic and non-alcoholic choices.',
    'Specialty dining, shore excursions, spa services, photos and other premium purchases generally remain extra.',
    'The Retreat has enhanced inclusions, including Premium Drinks and Premium Wi-Fi.'
  ]

  const caiSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com#organization",
        "name": "Trips and Ships",
        "url": "https://www.tripsandships.com"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/all-included/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/all-included/",
        "name": "Celebrity All Included Explained",
        "description": "Learn what Celebrity Cruises All Included covers, including drinks, Wi-Fi, gratuities, dining, savings, upgrades and exclusions.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/celebrity-cruises/all-included/"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/celebrity-cruises/all-included/#article",
        "headline": "Celebrity All Included Explained",
        "description": "A complete guide to Celebrity Cruises All Included, including drinks, Wi-Fi, gratuities, dining, exclusions, upgrades and value.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/celebrity-cruises/all-included/"
        },
        "author": {
          "@type": "Organization",
          "name": "Trips and Ships",
          "url": "https://www.tripsandships.com"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/all-included/#breadcrumb",
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
            "name": "Celebrity Cruises",
            "item": "https://www.tripsandships.com/celebrity-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Celebrity All Included",
            "item": "https://www.tripsandships.com/celebrity-cruises/all-included/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/all-included/#faq",
        "mainEntity": caiFaqs.map(f => ({
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
        <title>Celebrity All Included Explained: What's Included?</title>
        <meta name="title" content="Celebrity All Included Explained: What's Included?" />
        <meta name="description" content="Learn what Celebrity Cruises All Included covers, including drinks, Wi-Fi, gratuities, dining, savings, upgrades, exclusions and how it compares with Cruise Only." />
        <meta name="keywords" content="Celebrity All Included, Celebrity Cruises All Included, Celebrity All Included package, Celebrity All Included benefits, Celebrity drink package, Celebrity Wi-Fi, Celebrity gratuities, Celebrity Classic Drinks Package, Celebrity Basic Wi-Fi, Celebrity Cruise Only vs All Included, Celebrity cruise fare" />
        <script type="application/ld+json">{JSON.stringify(caiSchemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="cai-hero-section">
        <div className="cai-hero-overlay-layer"></div>
        <div className="cai-hero-content-wrapper">
          <div className="cai-hero-eyebrow-tag">
            <Anchor size={16} />
            <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
          </div>
          <h1 className="cai-hero-main-title">Celebrity All Included Explained</h1>
          <p className="cai-hero-subtitle-text">
            Learn what Celebrity Cruises All Included covers, including drinks, Wi-Fi, gratuities, dining, savings, upgrades, exclusions and how it compares with Cruise Only.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cai-intro-section">
        <div className="cai-intro-container">
          <div className="cai-intro-grid">
            <div className="cai-intro-text-col">
              <div className="cai-intro-lead-card">
                <p className="cai-intro-lead">
                  Celebrity Cruises' All Included is a cruise-fare option that bundles selected popular extras into the booking price rather than requiring guests to purchase them separately.
                </p>
              </div>
              <p className="cai-intro-body">
                For eligible bookings, the current Celebrity Cruises offering combines the cruise fare with a Classic Drinks Package and unlimited Basic Wi-Fi. Celebrity's current U.S. FAQ also states that onboard staff gratuities are charged separately, while beverage-package gratuities are included. The Retreat has a different enhanced package structure, with Premium Drinks and Premium Wi-Fi included.
              </p>
              <p className="cai-intro-body">
                The important distinction is that All Included does not mean every expense on a Celebrity cruise is covered. Your accommodation, included dining, entertainment and many onboard activities are part of the cruise fare, while specialty dining, shore excursions, photos, spa services and several other purchases can still cost extra.
              </p>
              <p className="cai-intro-body">
                This guide explains exactly how Celebrity All Included works, what you receive, what is excluded, how the drink and Wi-Fi packages work, and what to check before booking.
              </p>
            </div>
            <div className="cai-intro-image-col">
              <div className="cai-intro-image-frame cai-placeholder-frame">
                <div className="cai-placeholder-content">
                  <Ship size={48} className="cai-placeholder-icon" />
                  <span className="cai-placeholder-text">Celebrity Cruise Image Placeholder</span>
                </div>
                <div className="cai-intro-image-badge">
                  <Anchor size={14} />
                  <span>All Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES CELEBRITY DIFFERENT ── */}
      <section className="cai-different-section">
        <div className="cai-different-container">
          <div className="cai-different-layout-grid">
            <div className="cai-different-left-panel">
              <span className="cai-eyebrow">WHAT IS CELEBRITY ALL INCLUDED?</span>
              <h2 className="cai-section-heading">Celebrity All Included Is a Bundled Cruise-Fare Option</h2>
              <div className="cai-heading-separator-bar"></div>
              <p className="cai-different-body">
                Celebrity All Included is a bundled cruise-fare option that adds Classic Drinks and Basic Wi-Fi to the standard cruise experience. Instead of paying a separate price for these packages, eligible guests select the All Included fare when booking.
              </p>
              <p className="cai-different-body">
                Celebrity currently describes All Included as providing:
              </p>
            </div>
            <div className="cai-different-right-panel">
              <div className="cai-included-grid">
                {caiIncludedList.map((item, idx) => (
                  <div key={idx} className="cai-included-chip">
                    <CheckCircle size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="cai-different-footer-card" style={{ marginTop: '20px', width: '100%', maxWidth: 'none' }}>
                <ShieldCheck size={20} />
                <span>The package is intended to simplify the cost of a cruise, but it should not be confused with a package where virtually every onboard purchase is free.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DOES ALL INCLUDED INCLUDE ── */}
      <section className="cai-feature-section cai-bg-accomm" style={{ padding: '64px 20px' }}>
        <div className="cai-feature-container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="cai-eyebrow">WHAT'S INCLUDED</span>
            <h2 className="cai-section-heading">What Does Celebrity All Included Include?</h2>
            <div className="cai-heading-separator-bar cai-bar-centered" style={{ marginBottom: '16px' }}></div>
            <p className="cai-feature-lead" style={{ fontSize: '15px', marginBottom: '24px', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>The easiest way to understand the package is to separate what comes with the normal cruise fare from the extras added by All Included.</p>
          </div>
          <div className="cai-table-wrapper" style={{ margin: '0 auto' }}>
            <table className="cai-include-table">
              <thead>
                <tr>
                  <th>Cruise benefit</th>
                  <th>Cruise Only</th>
                  <th>All Included</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Stateroom</td><td><span className="cret-table-status-pill yes">Included</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td>Main dining</td><td><span className="cret-table-status-pill yes">Included</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td>Included casual dining</td><td><span className="cret-table-status-pill yes">Included</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td>Main onboard entertainment</td><td><span className="cret-table-status-pill yes">Included</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td>Many onboard activities</td><td><span className="cret-table-status-pill yes">Included</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td>Pools and fitness center</td><td><span className="cret-table-status-pill yes">Included</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td><strong>Classic Drinks Package</strong></td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill yes"><strong>Included</strong></span></td></tr>
                <tr><td><strong>Basic Wi-Fi</strong></td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill yes"><strong>Included</strong></span></td></tr>
                <tr><td>Beverage-package gratuities</td><td><span className="cret-table-status-pill no">N/A</span></td><td><span className="cret-table-status-pill yes">Included</span></td></tr>
                <tr><td>Onboard staff gratuities</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Check terms</span></td></tr>
                <tr><td>Specialty restaurants</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Extra</span></td></tr>
                <tr><td>Shore excursions</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Extra</span></td></tr>
                <tr><td>Spa treatments</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Extra</span></td></tr>
                <tr><td>Photos</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Extra</span></td></tr>
                <tr><td>Casino</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Extra</span></td></tr>
                <tr><td>Medical services</td><td><span className="cret-table-status-pill no">Extra</span></td><td><span className="cret-table-status-pill no">Extra</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CELEBRITY CLASSIC DRINKS PACKAGE ── */}
      <section className="cai-feature-section cai-dining-redesign-section">
        <div className="cai-feature-container">
          <div className="cai-dining-grid-layout">
            <div className="cai-dining-left-col">
              <span className="cai-eyebrow">BEVERAGES</span>
              <h2 className="cai-section-heading">Celebrity Classic Drinks Package</h2>
              <div className="cai-heading-separator-bar"></div>
              <p className="cai-dining-intro-text">
                The Classic Drinks Package is the beverage component of All Included. Celebrity says it covers a broad selection of beverages, including alcoholic and non-alcoholic choices.
              </p>
              <p className="cai-dining-intro-text">
                Depending on the current onboard menu and package terms, choices can include:
              </p>
              <div className="cai-dining-image-box cai-dining-placeholder-box">
                <div className="cai-placeholder-content">
                  <Wine size={40} className="cai-placeholder-icon" />
                  <span className="cai-placeholder-text">Classic Drinks Package Image Placeholder</span>
                </div>
                <div className="cai-image-badge"><Wine size={13} /><span>Classic Drinks</span></div>
              </div>
            </div>

            <div className="cai-dining-right-col">
              <div className="cai-dining-card-grid-split">
                <div className="cai-dining-card">
                  <div className="cai-dining-card-header">
                    <div className="cai-dining-card-icon-wrapper"><Sun size={18} /></div>
                    <h3 className="cai-dining-card-title">Alcoholic Choices</h3>
                  </div>
                  <ul className="cai-dining-tags">
                    <li>Beers</li>
                    <li>Wines by the glass</li>
                    <li>Spirits</li>
                    <li>Cocktails</li>
                    <li>Liqueurs</li>
                    <li>Frozen drinks</li>
                  </ul>
                </div>

                <div className="cai-dining-card">
                  <div className="cai-dining-card-header">
                    <div className="cai-dining-card-icon-wrapper"><Utensils size={18} /></div>
                    <h3 className="cai-dining-card-title">Non-Alcoholic Choices</h3>
                  </div>
                  <ul className="cai-dining-tags">
                    <li>Sodas</li>
                    <li>Specialty coffees</li>
                    <li>Teas</li>
                    <li>Juices</li>
                    <li>Bottled water</li>
                  </ul>
                </div>

                <div className="cai-dining-card cai-dining-card-dinner">
                  <div className="cai-dining-card-header">
                    <div className="cai-dining-card-icon-wrapper"><Moon size={18} /></div>
                    <h3 className="cai-dining-card-title">Key Questions</h3>
                  </div>
                  <div className="cai-dining-qa-grid">
                    <div className="cai-dining-qa-item">
                      <p className="cai-dining-card-subtitle">Does the Classic Drinks Package include alcohol?</p>
                      <ul className="cai-dining-tags">
                        <li>Yes, includes selected alcoholic beverages</li>
                        <li>Includes non-alcoholic options too</li>
                      </ul>
                    </div>
                    <div className="cai-dining-qa-item">
                      <p className="cai-dining-card-subtitle">Does it include bottled water?</p>
                      <ul className="cai-dining-tags">
                        <li>Yes, subject to package limits</li>
                      </ul>
                    </div>
                    <div className="cai-dining-qa-item">
                      <p className="cai-dining-card-subtitle">Does it include specialty coffee?</p>
                      <ul className="cai-dining-tags">
                        <li>Yes, Celebrity lists it among choices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLASSIC VS PREMIUM DRINKS ── */}
      <section className="cai-feature-section cai-bg-dark cai-beverages-section" style={{ padding: '64px 20px', background: 'var(--cai-navy-dark)' }}>
        <div className="cai-feature-container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="cai-eyebrow" style={{ color: 'var(--cai-accent-light)' }}>COMPARE</span>
            <h2 className="cai-section-heading" style={{ color: '#ffffff' }}>Classic vs Premium Drinks Package</h2>
            <div className="cai-heading-separator-bar cai-bar-centered" style={{ background: 'var(--cai-accent-light)', marginBottom: '16px' }}></div>
            <p className="cai-feature-lead" style={{ fontSize: '15px', color: '#cbd5e1', marginBottom: '24px', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
              One of the most important points is that All Included normally provides the Classic Drinks Package, not the Premium Drinks Package.
            </p>
          </div>

          <div className="cai-table-wrapper" style={{ margin: '0 auto 24px' }}>
            <table className="cai-compare-drinks-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Classic Drinks</th>
                  <th>Premium Drinks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Standard cocktails</td><td><span className="cret-table-status-pill yes">Yes</span></td><td><span className="cret-table-status-pill yes">Yes</span></td></tr>
                <tr><td>Selected spirits</td><td><span className="cret-table-status-pill yes">Yes</span></td><td><span className="cret-table-status-pill yes">Yes</span></td></tr>
                <tr><td>Selected wines by the glass</td><td><span className="cret-table-status-pill yes">Yes</span></td><td><span className="cret-table-status-pill yes">Broader</span></td></tr>
                <tr><td>Beer</td><td><span className="cret-table-status-pill yes">Yes</span></td><td><span className="cret-table-status-pill yes">Broader</span></td></tr>
                <tr><td>Specialty coffee</td><td><span className="cret-table-status-pill yes">Yes</span></td><td><span className="cret-table-status-pill yes">Yes</span></td></tr>
                <tr><td>Bottled water</td><td><span className="cret-table-status-pill yes">Yes</span></td><td><span className="cret-table-status-pill yes">Premium</span></td></tr>
                <tr><td>Premium brands</td><td><span className="cret-table-status-pill no">Limited</span></td><td><span className="cret-table-status-pill yes">Broader</span></td></tr>
                <tr><td><strong>Included with standard All Included</strong></td><td><span className="cret-table-status-pill yes"><strong>Yes</strong></span></td><td><span className="cret-table-status-pill no"><strong>No</strong></span></td></tr>
                <tr><td>Upgrade available</td><td><span className="cret-table-status-pill no">—</span></td><td><span className="cret-table-status-pill yes">Yes</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="cai-wine-footnote-badge" style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.05)', borderLeftColor: 'var(--cai-accent-light)', color: '#cbd5e1', width: '100%', maxWidth: 'none', margin: '0', justifyContent: 'center' }}>
            <Sparkles size={14} style={{ color: 'var(--cai-accent-light)' }} />
            <span>If you regularly prefer premium spirits, higher-priced wines or premium bottled water, calculate the upgrade cost before deciding which fare represents better value.</span>
          </div>
        </div>
      </section>

      {/* ── CELEBRITY BASIC WIFI ── */}
      <section className="cai-feature-section cai-excursions-redesign-section">
        <div className="cai-feature-container">
          <div className="cai-feature-grid">
            <div className="cai-feature-image-col">
              <div className="cai-image-frame cai-placeholder-frame" style={{ height: '360px' }}>
                <div className="cai-placeholder-content">
                  <Wifi size={48} className="cai-placeholder-icon" />
                  <span className="cai-placeholder-text">Basic Wi-Fi Image Placeholder</span>
                </div>
                <div className="cai-image-badge"><Wifi size={13} /><span>Basic Wi-Fi</span></div>
              </div>
              <div className="cai-left-footnote-card">
                <Compass size={16} className="cai-footnote-card-icon" />
                <p className="cai-left-footnote-text">
                  Basic Wi-Fi is intended for everyday connectivity rather than high-bandwidth use. It supports web browsing, email, and texting through supported messaging applications.
                </p>
              </div>
            </div>
            <div className="cai-feature-text-col">
              <span className="cai-eyebrow">CONNECTIVITY</span>
              <h2 className="cai-section-heading">Celebrity Basic Wi-Fi</h2>
              <div className="cai-heading-separator-bar"></div>
              <p className="cai-feature-lead">The second major All Included benefit is unlimited Basic Wi-Fi.</p>
              <p className="cai-feature-body">Basic Wi-Fi is intended for everyday connectivity rather than high-bandwidth use. Celebrity says Basic Wi-Fi supports activities such as:</p>
              <div className="cai-excursions-grid">
                {caiWifiUses.map((item, idx) => (
                  <div key={idx} className="cai-excursion-card">
                    <CheckCircle size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="cai-wine-footnote-badge">
                <AlertCircle size={14} />
                <span>Basic Wi-Fi does not cover streaming, video calls, sending large files, or sharing photos/videos on social media — those require Premium Wi-Fi.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPGRADES ── */}
      <section className="cai-feature-section cai-bg-soft">
        <div className="cai-feature-container">
          <div className="cai-feature-grid cai-reverse">
            <div className="cai-feature-image-col">
              <div className="cai-image-frame cai-placeholder-frame" style={{ height: '360px' }}>
                <div className="cai-placeholder-content">
                  <ArrowRight size={48} className="cai-placeholder-icon" />
                  <span className="cai-placeholder-text">Upgrade Options Image Placeholder</span>
                </div>
                <div className="cai-image-badge"><Crown size={13} /><span>Upgrade Options</span></div>
              </div>
              <div className="cai-left-footnote-card">
                <Users size={16} className="cai-footnote-card-icon" />
                <p className="cai-left-footnote-text">
                  Celebrity currently recommends upgrading before the cruise through its Cruise Planner, where the price may be lower than purchasing the upgrade onboard.
                </p>
              </div>
            </div>
            <div className="cai-feature-text-col">
              <span className="cai-eyebrow">UPGRADES</span>
              <h2 className="cai-section-heading">Can You Upgrade?</h2>
              <div className="cai-heading-separator-bar"></div>
              <p className="cai-feature-lead">Yes — both the drinks package and Wi-Fi can be upgraded.</p>
              <p className="cai-feature-body"><strong>Upgrade to Premium Drinks:</strong> Guests who book All Included can upgrade from Classic to Premium Drinks, with pre-cruise upgrades generally available through the Cruise Planner.</p>
              <p className="cai-feature-body"><strong>Upgrade to Premium Wi-Fi:</strong> Guests can upgrade from Basic Wi-Fi to Premium Wi-Fi. Celebrity's published FAQ currently identifies a $9.99 per-person-per-day upgrade charge for this option, although prices and offers can change.</p>
              <div className="cai-wine-footnote-badge">
                <Sparkles size={14} />
                <span>Premium Wi-Fi is designed for heavier internet use, including video calls, streaming, social media uploads, larger file transfers, streaming entertainment, and more demanding browsing. Celebrity's current Wi-Fi information says Premium Wi-Fi is powered by Starlink.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRATUITIES ── */}
      <section className="cai-simple-section">
        <div className="cai-simple-container">
          <span className="cai-eyebrow">GRATUITIES</span>
          <h2 className="cai-section-heading" style={{ textAlign: 'center' }}>Are Gratuities Included in Celebrity All Included?</h2>
          <div className="cai-heading-separator-bar cai-bar-centered"></div>
          <p className="cai-simple-intro">This is one of the most confusing parts of Celebrity's All Included terminology because published information can differ by market and fare wording.</p>
          <p className="cai-simple-intro">For current U.S. Celebrity Cruises information, onboard staff gratuities are charged separately. Celebrity's current U.S. FAQ specifically states that All Included combines Basic Wi-Fi and Classic Drinks, with beverage-package gratuities included, while onboard staff gratuities are separate.</p>
          <div className="cai-card-grid">
            <div className="cai-mini-card">
              <CheckCircle size={20} />
              <span>Beverage-package gratuities are included</span>
            </div>
            <div className="cai-mini-card">
              <AlertCircle size={20} />
              <span>Onboard staff gratuities are separate (U.S. terms)</span>
            </div>
            <div className="cai-mini-card">
              <Globe size={20} />
              <span>Terms can vary by market</span>
            </div>
            <div className="cai-mini-card">
              <ShieldCheck size={20} />
              <span>Check fare conditions for your booking</span>
            </div>
          </div>
          <div className="cai-entertainment-footnote-badge">
            <AlertCircle size={14} />
            <span>Some Celebrity regional FAQ material has described All Included as including three amenities — tips, Basic Wi-Fi and Classic Drinks. Therefore, travelers should check the terms displayed for their country, booking currency and specific sailing.</span>
          </div>
        </div>
      </section>

      {/* ── WHAT'S NOT INCLUDED ── */}
      <section className="cai-table-section cai-not-included-section">
        <div className="cai-table-container">
          <span className="cai-eyebrow">GOOD TO KNOW</span>
          <h2 className="cai-section-heading" style={{ textAlign: 'center' }}>What Is Not Included in Celebrity <br /> All Included?</h2>
          <div className="cai-heading-separator-bar cai-bar-centered"></div>
          <p className="cai-table-intro">All Included does not cover every purchase on the ship. Common additional expenses include:</p>

          <div className="cai-comparison-cards-layout">
            <div className="cai-comp-card cai-comp-included">
              <div className="cai-comp-card-header">
                <CheckCircle size={22} className="cai-comp-header-icon" />
                <h3 className="cai-comp-card-title">Typically Included</h3>
              </div>
              <ul className="cai-comp-list">
                {caiIncludedVsExtra.map((row, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} />
                    <span>{row.included}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cai-comp-card cai-comp-extra">
              <div className="cai-comp-card-header">
                <XCircle size={22} className="cai-comp-header-icon" />
                <h3 className="cai-comp-card-title">Usually Extra Cost</h3>
              </div>
              <ul className="cai-comp-list">
                {caiIncludedVsExtra.map((row, idx) => (
                  <li key={idx}>
                    <XCircle size={15} />
                    <span>{row.extra}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cai-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Always review your specific itinerary, as inclusions can vary.</span>
          </div>
        </div>
      </section>

      {/* ── ALL INCLUDED VS CRUISE ONLY ── */}
      <section className="cai-table-section cai-comparison-section-redesign">
        <div className="cai-table-container" style={{ maxWidth: '1000px' }}>
          <span className="cai-eyebrow">COMPARE</span>
          <h2 className="cai-section-heading" style={{ textAlign: 'center' }}>All Included vs Cruise Only</h2>
          <div className="cai-heading-separator-bar cai-bar-centered"></div>

          <div className="cai-compare-wrapper">
            <table className="cai-compare-table">
              <thead>
                <tr>
                  <th>Compare Features</th>
                  <th className="cai-uni-header">
                    <Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--cai-accent-light)' }} />
                    Cruise Only
                  </th>
                  <th className="cai-typical-header">All Included</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="cai-feature-title">Stateroom</td><td className="cai-uni-cell"><span className="cai-uni-badge"><CheckCircle size={13} /><span>Included</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Included</span></td></tr>
                <tr><td className="cai-feature-title">Included dining</td><td className="cai-uni-cell"><span className="cai-uni-badge"><CheckCircle size={13} /><span>Included</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Included</span></td></tr>
                <tr><td className="cai-feature-title">Entertainment</td><td className="cai-uni-cell"><span className="cai-uni-badge"><CheckCircle size={13} /><span>Included</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Included</span></td></tr>
                <tr><td className="cai-feature-title">Many onboard activities</td><td className="cai-uni-cell"><span className="cai-uni-badge"><CheckCircle size={13} /><span>Included</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Included</span></td></tr>
                <tr><td className="cai-feature-title"><strong>Classic Drinks</strong></td><td className="cai-uni-cell"><span className="cai-uni-badge"><XCircle size={13} /><span>Extra</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value" style={{ color: '#274472', fontWeight: '700' }}>Included</span></td></tr>
                <tr><td className="cai-feature-title"><strong>Basic Wi-Fi</strong></td><td className="cai-uni-cell"><span className="cai-uni-badge"><XCircle size={13} /><span>Extra</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value" style={{ color: '#274472', fontWeight: '700' }}>Included</span></td></tr>
                <tr><td className="cai-feature-title">Beverage-package gratuity</td><td className="cai-uni-cell"><span className="cai-uni-badge">N/A</span></td><td className="cai-typical-cell"><span className="cai-typical-value" style={{ color: '#274472', fontWeight: '700' }}>Included</span></td></tr>
                <tr><td className="cai-feature-title">Staff gratuities</td><td className="cai-uni-cell"><span className="cai-uni-badge">Check fare terms</span></td><td className="cai-typical-cell"><span className="cai-typical-value">Current U.S. terms: separate</span></td></tr>
                <tr><td className="cai-feature-title">Specialty dining</td><td className="cai-uni-cell"><span className="cai-uni-badge"><XCircle size={13} /><span>Extra</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Extra</span></td></tr>
                <tr><td className="cai-feature-title">Excursions</td><td className="cai-uni-cell"><span className="cai-uni-badge"><XCircle size={13} /><span>Extra</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Extra</span></td></tr>
                <tr><td className="cai-feature-title">Spa</td><td className="cai-uni-cell"><span className="cai-uni-badge"><XCircle size={13} /><span>Extra</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Extra</span></td></tr>
                <tr><td className="cai-feature-title">Photos</td><td className="cai-uni-cell"><span className="cai-uni-badge"><XCircle size={13} /><span>Extra</span></span></td><td className="cai-typical-cell"><span className="cai-typical-value">Extra</span></td></tr>
              </tbody>
            </table>
          </div>
          <div className="cai-table-footnote-badge">
            <Award size={15} />
            <span>Celebrity describes All Included as a higher-value booking option that adds drinks and Wi-Fi, while Cruise Only is the lower fare with those extras excluded.</span>
          </div>
        </div>
      </section>

      {/* ── VALUE ── */}
      <section className="cai-value-section">
        <div className="cai-value-container">
          <div className="cai-value-grid">
            <div className="cai-value-left-col">
              <div className="cai-value-eyebrow-row">
                <Gem size={18} />
                <span className="cai-value-eyebrow-text">IS IT WORTH THE PRICE?</span>
              </div>
              <h2 className="cai-value-heading">Is Celebrity All Included Worth It?</h2>
              <div className="cai-value-separator"></div>
              <p className="cai-value-body-lead">
                The answer depends primarily on whether you would otherwise purchase drinks and Wi-Fi.
              </p>
              <p className="cai-value-body-desc">
                All Included can make sense if you drink several beverages each day, want Wi-Fi throughout the cruise, enjoy specialty coffee, bottled water or other package beverages, want a simpler cruise budget, are traveling with other guests who will use the package, and find the fare difference lower than buying the benefits separately.
              </p>
            </div>

            <div className="cai-value-right-col">
              <div className="cai-value-inclusion-card">
                <h3 className="cai-inclusion-card-title">A Simple Way to Calculate the Value</h3>
                <p className="cai-inclusion-card-subtitle">Use this basic comparison:</p>
                <div className="cai-value-list-items">
                  <div className="cai-value-list-item">
                    <CheckCircle size={16} className="cai-value-item-icon" />
                    <div className="cai-value-item-details">
                      <span className="cai-value-item-title">All Included fare − Cruise Only fare</span>
                      <span className="cai-value-item-desc">= Additional cost of All Included</span>
                    </div>
                  </div>
                  <div className="cai-value-list-item">
                    <ArrowRight size={16} className="cai-value-item-icon" style={{ color: 'var(--cai-accent-light)' }} />
                    <div className="cai-value-item-details">
                      <span className="cai-value-item-title">Then compare with what you'd spend on:</span>
                      <span className="cai-value-item-desc">Drink package + Wi-Fi + applicable package charges</span>
                    </div>
                  </div>
                  <div className="cai-value-list-item">
                    <Sparkles size={16} className="cai-value-item-icon" />
                    <div className="cai-value-item-details">
                      <span className="cai-value-item-title">Example</span>
                      <span className="cai-value-item-desc">If All Included costs $400 more and you'd spend $300 on drinks + $150 on Wi-Fi, it's good value.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cai-value-quote-card" style={{ marginTop: '20px' }}>
                <span className="cai-quote-mark">“</span>
                <p className="cai-value-emphasis">
                  The best approach is to compare the actual All Included fare against the actual Cruise Only fare for the same cabin, sailing and number of guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY TAKEAWAYS ── */}
      <section className="cai-takeaways-section" style={{ padding: '64px 20px' }}>
        <div className="cai-takeaways-container" style={{ maxWidth: '1200px' }}>
          <h2 className="cai-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
          <div className="cai-heading-separator-bar cai-bar-centered" style={{ marginBottom: '32px' }}></div>
          <div className="cai-takeaways-new-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'left' }}>
            {caiKeyTakeaways.map((item, idx) => (
              <div key={idx} className="cai-takeaway-strip" style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid rgba(39, 68, 114, 0.06)', boxShadow: '0 2px 8px rgba(15, 28, 46, 0.01)' }}>
                <div className="cai-takeaway-strip-num" style={{ background: 'var(--cai-navy)', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '750', fontSize: '13px', flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <p className="cai-takeaway-text" style={{ fontSize: '13.5px', color: 'var(--cai-text-body)', margin: '0', fontWeight: '500', lineHeight: '1.5' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
      <section className="cai-expert-insight-section">
        <div className="cai-expert-insight-container">
          <div className="cai-expert-portrait-panel">
            <div className="cai-expert-img-frame">
              <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury River Cruise Expert" className="cai-expert-img" />
              <div className="cai-expert-img-overlay"></div>
              <span className="cai-expert-badge">EXPERT ADVISOR</span>
            </div>
            <div className="cai-expert-stats-strip">
              <div className="cai-expert-stat-box">
                <div className="cai-expert-stat-num">40+</div>
                <div className="cai-expert-stat-lbl">Years Experience</div>
              </div>
              <div className="cai-expert-stat-box">
                <div className="cai-expert-stat-num">121+</div>
                <div className="cai-expert-stat-lbl">Countries Visited</div>
              </div>
            </div>
          </div>
          <div className="cai-expert-content-panel">
            <div className="cai-expert-eyebrow-row">
              <Sparkles size={16} />
              <span className="cai-eyebrow">MEET THE CEO</span>
            </div>
            <h2 className="cai-section-heading">Insight from Angela Hughes</h2>
            <div className="cai-heading-separator-bar"></div>
            <div className="cai-expert-quote-card">
              <span className="cai-expert-quote-mark">“</span>
              <p className="cai-expert-quote-text">
                Celebrity's All Included model simplifies the cruising experience by bundling the most commonly purchased extras into a single fare. When your drinks and Wi-Fi are already covered, you can focus on enjoying the journey rather than tracking every onboard expense.
              </p>
            </div>
            <div className="cai-expert-priorities">
              <h5 className="cai-priorities-title">What Makes Celebrity All Included Stand Out:</h5>
              <div className="cai-expert-pills">
                {['Classic Drinks Package', 'Basic Wi-Fi', 'Beverage Gratuities Included', 'Simplified Budgeting', 'Upgrade Options', 'The Retreat Enhanced Benefits'].map(pill => (
                  <span key={pill} className="cai-expert-pill">
                    <CheckCircle size={12} />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="cai-expert-footer-bio">
              <p className="cai-expert-bio">
                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cai-faq-section">
        <div className="cai-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="cai-section-heading">Frequently Asked Questions</h2>
            <div className="cai-heading-separator-bar cai-bar-centered"></div>
          </div>
          <div className="cai-faq-list-wrapper">
            {caiFaqs.map((faq, index) => (
              <div
                key={index}
                className="cai-faq-item"
                onClick={() => caiToggleFaq(index)}
              >
                <div className="cai-faq-question-row">
                  <span>{faq.question}</span>
                  <span className="cai-faq-toggle-icon">{caiActiveFaq === index ? '−' : '+'}</span>
                </div>
                {caiActiveFaq === index && (
                  <p className="cai-faq-answer-text">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cai-cta-redesign-section">
        <div className="cai-cta-aurora-glow"></div>
        <div className="cai-cta-crystal cai-cta-crystal-1"></div>
        <div className="cai-cta-crystal cai-cta-crystal-2"></div>
        <div className="cai-cta-crystal cai-cta-crystal-3"></div>
        <div className="cai-cta-grid-lines"></div>

        <div className="cai-cta-content">
          <div className="cai-cta-compass-ring">
            <Compass size={28} />
          </div>
          <span className="cai-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
          <h2 className="cai-cta-title">Ready to Book Your Celebrity Cruise?</h2>
          <div className="cai-cta-bar"></div>
          <p className="cai-cta-subtitle">
            Planning a Celebrity cruise? Compare the Cruise Only and All Included fares for your exact sailing, then calculate the cost of drinks and Wi-Fi you would otherwise purchase. Checking the full fare difference before booking can help you choose the option that best matches your travel style and budget.
          </p>
          <div className="cai-cta-actions">
            <Link to="/contact" className="cai-cta-primary-btn">
              <Phone size={18} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} className="cai-cta-btn-arrow" />
            </Link>
            <Link to="/celebrity-cruises" className="cai-cta-secondary-btn">
              <LayoutList size={18} />
              <span>Explore Celebrity Cruises</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CelebrityAllIncluded