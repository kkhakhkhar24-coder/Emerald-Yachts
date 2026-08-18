import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruisesTheRetreat.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
  Ship, MapPin, Star, Users, CheckCircle, XCircle,
  ArrowRight, Compass, Sparkles, Anchor, Gem,
  Crown, Phone, LayoutList, Heart, Sun, Moon,
  Globe, Wifi, Bed, Waves,
  ShieldCheck, AlertCircle, Home, Eye, Layers,
  TreePine,
  Utensils, Coffee, Wine, Bell
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CelebrityCruisesTheRetreat() {

  const [cretActiveFaq, setCretActiveFaq] = useState(null)
  const cretToggleFaq = i => setCretActiveFaq(cretActiveFaq === i ? null : i)

  const cretFaqs = [
    { question: 'What is The Retreat on Celebrity Cruises?', answer: "The Retreat is Celebrity Cruises' suite-focused experience combining premium suite accommodation with dedicated butler service, private dining at Luminae, an exclusive lounge and access to a Retreat Sundeck on applicable ships. (Celebrity Cruises)" },
    { question: 'What is included with The Retreat on Celebrity Cruises?', answer: "The Retreat includes suite accommodation, dedicated butler service, Luminae, the Retreat Lounge, the Retreat Sundeck on applicable ships, Premium Drinks and Premium Wi-Fi under Celebrity's current offering. Specific benefits vary by suite and fare. (Celebrity Cruises)" },
    { question: 'Does The Retreat include a private restaurant?', answer: 'Yes. Retreat guests have access to Luminae at The Retreat, a private restaurant with exclusive menus and signature dishes from Chef Daniel Boulud. (Celebrity Cruises)' },
    { question: 'Is The Retreat Lounge included with a Celebrity suite?', answer: "Yes. Guests staying in The Retreat have access to the exclusive Retreat Lounge. On some non-revolutionized ships, the corresponding venue is called Michael's Club. (Celebrity Cruises)" },
    { question: 'Does The Retreat have a private pool?', answer: 'The Retreat Sundeck on applicable ships can include a pool and hot tub, but the exact facilities vary by ship. The Retreat Sundeck is available on Edge Series and revolutionized ships. (Celebrity Cruises)' },
    { question: 'Do all Celebrity Retreat suites have a butler?', answer: 'Yes. Celebrity states that all suites within The Retreat come with dedicated butler service. Butler Chat is also available for contacting the butler from a personal device. (Celebrity Cruises)' },
    { question: 'Is Wi-Fi included with The Retreat?', answer: "Premium Wi-Fi is included with The Retreat under Celebrity's current offering, although certain special fares and MoveUp upgrades can have different terms. (Celebrity Cruises)" },
    { question: 'Are drinks included in The Retreat?', answer: "Yes. Celebrity's current Retreat offering includes Premium Drinks. Booking-specific terms should still be checked, particularly when comparing special fares or upgrades. (Celebrity Cruises)" },
    { question: 'Is specialty dining included with Celebrity The Retreat?', answer: 'Specialty dining benefits depend on the suite category. Celebrity currently lists complimentary specialty dining among the enhanced benefits for higher-level suites, including Royal Suites and above, while its FAQ identifies several specific premium suite categories. (Celebrity Cruises)' },
    { question: 'What is the difference between a Sky Suite and Aqua Sky Suite?', answer: 'A Sky Suite provides the core Retreat suite experience, while an Aqua Sky Suite combines Retreat benefits with AquaClass wellness features such as applicable thermal-suite access, spa concierge services and fitness benefits. (Celebrity Cruises)' },
    { question: 'Which Celebrity suites are part of The Retreat?', answer: 'The Retreat includes multiple suite categories, which vary by ship. They can include Sky Suites, Aqua Sky Suites, Celebrity Suites, Royal Suites, Signature Suites, Penthouse Suites, Edge Villas, Reflection Suites and Iconic Suites. (Celebrity Cruises)' },
    { question: 'Is The Retreat available on every Celebrity ship?', answer: 'The Retreat is available across multiple Celebrity ships, but the suite categories and exclusive facilities differ. The Retreat Sundeck, for example, is specifically available on Edge Series and revolutionized ships. (Celebrity Cruises)' },
    { question: 'Do Retreat guests get priority boarding?', answer: 'Retreat suites can receive priority embarkation and departure benefits at applicable destinations. The exact priority services depend on the ship, port and itinerary. (Celebrity Cruises)' },
    { question: 'Does The Retreat include laundry service?', answer: 'Complimentary laundry and unlimited pressing are among the enhanced benefits available to qualifying higher-level suites, including Royal Suites and above. They are not a standard benefit for every Retreat suite. (Celebrity Cruises)' },
    { question: 'Is Celebrity The Retreat worth the extra cost?', answer: 'The value depends on how much you will use the additional space, private dining, dedicated service, Premium Drinks, Premium Wi-Fi and exclusive Retreat facilities. Comparing the complete benefits and price difference for your specific suite and sailing is the best way to assess the value. (Celebrity Cruises)' }
  ]

  const cretIncludedRows = [
    { benefit: 'Suite accommodation', value: 'Yes' },
    { benefit: 'Dedicated butler', value: 'Yes' },
    { benefit: 'Luminae', value: 'Yes' },
    { benefit: 'Retreat Lounge', value: 'Yes' },
    { benefit: 'Retreat Sundeck', value: 'On applicable ships' },
    { benefit: 'Premium Wi-Fi', value: 'Included under current Retreat offering' },
    { benefit: 'Premium Drinks', value: 'Included under current Retreat offering' },
    { benefit: 'In-suite dining', value: 'Available' },
    { benefit: 'Premium bath amenities', value: 'Yes' },
    { benefit: 'Priority embarkation/departure', value: 'Applicable benefits' },
    { benefit: 'Destination assistance', value: 'Yes' },
    { benefit: 'Specialty dining', value: 'Depends on suite' },
    { benefit: 'Laundry/pressing', value: 'Enhanced benefits for qualifying higher suites' }
  ]

  const cretRetreatCategories = ['Sky Suite', 'Aqua Sky Suite', 'Celebrity Suite', 'Royal Suite', 'Signature Suite', 'Horizon Suite', 'Penthouse Suite', 'Edge Villa', 'Reflection Suite', 'Iconic Suite']

  const cretSkySuiteHighlights = [
    'Dedicated butler service', 'Butler Chat', 'Destination Experience Specialist',
    'Priority departure and embarkation at applicable destinations',
    'Reserved theater seating on Evening Chic nights', 'Premium bath amenities',
    'Premium Wi-Fi', 'Premium Drinks', 'Full in-suite dining',
    'Access to Luminae', 'Access to The Retreat Lounge',
    'Access to applicable Retreat Sundeck facilities'
  ]

  const cretAquaHighlights = [
    'The Retreat Lounge', 'Luminae', 'Retreat Sundeck', 'Dedicated butler',
    'SEA Thermal Suite on applicable Edge Series ships', 'Spa concierge',
    'Priority spa reservations', 'Fitness classes', 'Yoga mats',
    'In-room fitness amenities', 'Wellness-oriented bathroom products', 'Daily bottled water'
  ]

  const cretCelebrityWants = [
    'Separate living and sleeping space', 'A larger suite footprint',
    'Private outdoor space', 'Retreat-level service',
    'Access to Luminae and other Retreat venues'
  ]

  const cretPenthouseFeatures = [
    'Large separate living spaces', 'Dining area', 'Large private terrace',
    'Premium suite amenities', 'Dedicated butler', 'Luminae access',
    'Retreat Lounge access', 'Retreat Sundeck access where applicable',
    'Higher-level suite benefits'
  ]

  const cretLuminaeMeals = ['Breakfast', 'Lunch', 'Dinner']

  const cretLoungeAmenities = [
    'Complimentary beverages', 'Gourmet bites', 'Afternoon tea',
    'Dedicated concierge services', 'Assistance with dining reservations',
    'Spa appointment assistance', 'Shore excursion assistance', 'Comfortable seating'
  ]

  const cretSundeckFeatures = [
    'Lounge seating', 'Shaded loungers', 'Pool', 'Hot tub', 'Bar service',
    'Towels', 'Snacks', 'Beverages', 'Retreat attendants'
  ]

  const cretButlerServices = [
    'Packing and unpacking', 'Dining reservations', 'Spa appointments',
    'Shore excursion arrangements', 'In-suite service', 'Other vacation requests'
  ]

  const cretConciergeHelp = [
    'Shore excursions', 'Dining', 'Spa treatments', 'Transfers', 'Onboard activities', 'Special arrangements'
  ]

  const cretDiningBenefitCards = [
    { title: 'Premium Drinks', Icon: Wine, body: "Celebrity's current FAQ states that Retreat guests receive Premium Drinks as part of the current Retreat offering. (Celebrity Cruises)" },
    { title: 'Premium Wi-Fi', Icon: Wifi, body: 'Premium Wi-Fi is also included in the current Retreat offering. Celebrity notes that special fares and certain MoveUp upgrades can have exceptions, so the booking terms should be checked carefully. (Celebrity Cruises)' },
    { title: 'Specialty Dining', Icon: Utensils, body: 'Specialty dining is not necessarily identical for every Retreat suite. Celebrity currently lists complimentary specialty dining, including lunch, among the enhanced benefits for Royal Suites and above, while its FAQ specifically identifies Iconic, Edge Villa, Reflection, Penthouse, Royal and Signature Suites for complimentary specialty dining. (Celebrity Cruises) This is an important distinction when comparing a Sky Suite with a higher-level suite.' },
    { title: 'In-Suite Dining', Icon: Bed, body: "Retreat guests can order meals to their suite. Celebrity's current Retreat information includes full in-suite breakfast, lunch and dinner service, along with daily delights. (Celebrity Cruises)" }
  ]

  const cretInSuiteDiningUses = [
    'You want breakfast privately', 'You are enjoying a scenic day from your suite',
    'You prefer a quiet evening', 'You want to use your private veranda or terrace'
  ]

  const cretAmenitiesList = [
    'Welcome bottle of sparkling wine', 'Premium Cashmere mattress', 'Exclusive Retreat bedding',
    'Premium bath amenities', 'Cotton towels', 'Bathrobes', 'Pillow menu',
    'Complimentary minibar benefits', 'Premium Wi-Fi', 'In-suite dining', 'Enhanced bathroom amenities'
  ]

  const cretBenefitsTable = [
    { benefit: 'Retreat Lounge', sky: 'Yes', aqua: 'Yes', royal: 'Yes' },
    { benefit: 'Luminae', sky: 'Yes', aqua: 'Yes', royal: 'Yes' },
    { benefit: 'Dedicated butler', sky: 'Yes', aqua: 'Yes', royal: 'Yes' },
    { benefit: 'Premium Wi-Fi', sky: 'Yes*', aqua: 'Yes*', royal: 'Yes*' },
    { benefit: 'Premium Drinks', sky: 'Yes', aqua: 'Yes', royal: 'Yes' },
    { benefit: 'Aqua wellness benefits', sky: 'No', aqua: 'Yes', royal: 'Not automatically' },
    { benefit: 'Specialty dining', sky: 'Not generally included', aqua: 'Not generally included', royal: 'Enhanced eligibility' },
    { benefit: 'Daily laundry', sky: 'Not standard', aqua: 'Not standard', royal: 'Yes' },
    { benefit: 'Unlimited pressing', sky: 'Not standard', aqua: 'Not standard', royal: 'Yes' },
    { benefit: 'Complimentary sleepwear', sky: 'No', aqua: 'No', royal: 'Yes' },
    { benefit: 'SEA Thermal Suite/Persian Garden', sky: 'No', aqua: 'Yes, where applicable', royal: 'Yes for qualifying suites' }
  ]

  const cretShipExamples = [
    'Edge Series ships', 'Solstice Series ships', 'Millennium Series ships',
    'Revolutionized ships with updated Retreat facilities'
  ]

  const cretShipChecks = [
    'Which Retreat venues are available.',
    'Whether the ship has a Retreat Sundeck.',
    'Which suite categories are offered.',
    'The exact suite size.',
    'Whether your fare includes all advertised benefits.',
    'Whether the ship has been revolutionized.'
  ]

  const cretEdgeList = [
    'Luminae', 'Retreat Lounge', 'Retreat Sundeck', 'Dedicated butler service',
    'Modern suite accommodations', 'Premium dining and beverage benefits',
    'Premium Wi-Fi', 'Edge-specific suite categories'
  ]

  const cretSolsticeList = [
    'Luminae', 'Retreat Lounge', 'Retreat Sundeck', 'Updated suite accommodations',
    'Dedicated butler service', 'Enhanced suite amenities'
  ]

  const cretAquaVsRetreat = [
    { feature: 'Main focus', aqua: 'Wellness', retreat: 'Suite luxury and service' },
    { feature: 'Private suite', aqua: 'No', retreat: 'Yes' },
    { feature: 'Luminae', aqua: 'No', retreat: 'Yes' },
    { feature: 'Retreat Lounge', aqua: 'No', retreat: 'Yes' },
    { feature: 'Retreat Sundeck', aqua: 'No', retreat: 'Yes' },
    { feature: 'Blu restaurant', aqua: 'Yes', retreat: 'Aqua Sky Suites and applicable benefits' },
    { feature: 'Spa-related benefits', aqua: 'Yes', retreat: 'Varies by suite' },
    { feature: 'Dedicated butler', aqua: 'No', retreat: 'Yes' },
    { feature: 'Premium suite services', aqua: 'No', retreat: 'Yes' }
  ]

  const cretConciergeAdds = [
    'Suite accommodation', 'Luminae', 'Retreat Lounge', 'Retreat Sundeck on applicable ships',
    'Butler service', 'Suite-specific amenities', 'Enhanced benefits'
  ]

  const cretAttractiveList = [
    'More personal space', 'Private dining', 'A quieter lounge', 'Dedicated butler assistance',
    'Premium beverages', 'Premium Wi-Fi', 'Suite-only outdoor spaces',
    'Priority services', 'In-suite dining', 'Higher-end amenities'
  ]

  const cretChoiceCards = [
    { title: 'Choose a Sky Suite for the Core Retreat Experience', Icon: Crown, text: 'A Sky Suite can make sense if your priority is access to The Retreat without paying for the largest accommodation.' },
    { title: 'Choose an Aqua Sky Suite for Wellness', Icon: Waves, text: 'An Aqua Sky Suite is worth investigating if you want the combination of suite accommodation, butler service, Luminae, Retreat Lounge, Retreat Sundeck and spa and wellness benefits.', list: ['Suite accommodation', 'Butler service', 'Luminae', 'Retreat Lounge', 'Retreat Sundeck', 'Spa and wellness benefits'] },
    { title: 'Choose a Royal Suite or Above for More Included Benefits', Icon: Gem, text: 'Higher-level suites can add substantial benefits such as specialty dining, laundry, pressing and other premium services. (Celebrity Cruises)' },
    { title: 'Choose an Edge Villa for a Distinctive Layout', Icon: Home, text: 'Edge Villas offer a two-level configuration and private outdoor space, making them particularly different from conventional cruise suites.' },
    { title: 'Choose an Iconic Suite for Maximum Space', Icon: Sparkles, text: "For travelers prioritizing space and an expansive outdoor area, the Iconic Suite is one of Celebrity's largest suite accommodations. (Celebrity Cruises)" }
  ]

  const cretCheckCards = [
    { title: 'Ship', text: 'The facilities differ between ship classes.' },
    { title: 'Suite Category', text: 'A Sky Suite and Penthouse Suite do not have identical benefits.' },
    { title: 'Exact Suite Number', text: 'Look at the deck plan rather than relying solely on the category.' },
    { title: 'Outdoor Space', text: 'Check the size and configuration of the veranda or terrace.' },
    { title: 'Included Dining', text: 'Confirm whether specialty dining is included with your specific suite.' },
    { title: 'Fare Type', text: 'Special fares and MoveUp upgrades can have different inclusion rules.' },
    { title: 'Retreat Sundeck', text: 'Confirm whether your ship offers the dedicated outdoor venue.' },
    { title: 'Accessibility', text: 'If accessibility features are required, verify the exact suite configuration before booking.' }
  ]

  const cretKeyTakeaways = [
    "The Retreat is Celebrity Cruises' suite-focused experience, not simply a larger cabin.",
    'Retreat guests receive access to Luminae, the Retreat Lounge and, on applicable ships, the Retreat Sundeck. (Celebrity Cruises)',
    'A dedicated butler is included with Retreat suites.',
    'Current Retreat benefits include Premium Drinks and Premium Wi-Fi, subject to applicable fare terms. (Celebrity Cruises)',
    'Aqua Sky Suites combine AquaClass wellness benefits with The Retreat experience. (Celebrity Cruises)',
    'Higher-level suites can receive additional benefits such as specialty dining, laundry and unlimited pressing. (Celebrity Cruises)',
    "The Retreat Lounge is exclusive to Retreat guests; on some older ships it is called Michael's Club.",
    'The Retreat Sundeck is available on Edge Series and revolutionized ships.',
    'Suite categories and benefits vary by ship, so check the exact vessel and suite before booking.'
  ]

  const cretInternalLinks = [
    { text: 'Celebrity Cruises Complete Guide', url: '/celebrity-cruises' },
    { text: 'Celebrity Staterooms and Suites Guide', url: '/celebrity-cruises/staterooms-suites' },
    { text: 'What Is Included on a Celebrity Cruise?', url: '/celebrity-cruises/whats-included' },
    { text: 'Celebrity Cruises Best Cabins', url: '/celebrity-cruises/best-cabins' },
    { text: 'Celebrity Cruises Food and Dining', url: '/celebrity-cruises/food-dining' },
    { text: 'Celebrity Cruises Best Itineraries', url: '/celebrity-cruises/best-itineraries' },
    { text: 'Celebrity Cruises First-Time Guide', url: '/celebrity-cruises/first-time-guide' },
    { text: 'Celebrity Cruises Dress Code and Packing Guide', url: '/celebrity-cruises/dress-code-packing' },
    { text: 'Is Celebrity Cruises Worth It?', url: '/celebrity-cruises/is-celebrity-worth-it' }
  ]

  const cretExternalReferences = ['Celebrity Cruises — The Retreat', 'Celebrity Cruises — The Retreat FAQs', 'Celebrity Ascent — The Retreat', 'Celebrity Solstice — The Retreat', 'Celebrity Cruises — Sky Suite']

  const cretSchemaData = {
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
        "@id": "https://www.tripsandships.com/celebrity-cruises/the-retreat#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/the-retreat",
        "name": "Celebrity Cruises The Retreat",
        "description": "A complete guide to The Retreat on Celebrity Cruises, including suites, Luminae, private lounges, sundecks, butler service, dining and premium benefits.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/the-retreat" },
        "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
        "inLanguage": "en"
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/celebrity-cruises/the-retreat#article",
        "headline": "Celebrity Cruises The Retreat",
        "description": "A complete guide to Celebrity Cruises The Retreat, including suite categories, Luminae, the Retreat Lounge, Retreat Sundeck, butler service and premium benefits.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/the-retreat" },
        "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
        "publisher": { "@id": "https://www.tripsandships.com#organization" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tripsandships.com/celebrity-cruises/the-retreat#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
          { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
          { "@type": "ListItem", "position": 3, "name": "The Retreat", "item": "https://www.tripsandships.com/celebrity-cruises/the-retreat" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/the-retreat#faq",
        "mainEntity": cretFaqs.map(f => ({
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
        <title>Celebrity Cruises The Retreat Guide</title>
        <meta name="title" content="Celebrity Cruises The Retreat Guide" />
        <meta name="description" content="Discover The Retreat on Celebrity Cruises, including suites, Luminae, private lounges, sundecks, butler service, dining and premium benefits." />
        <meta name="keywords" content="Celebrity Cruises The Retreat, The Retreat Celebrity Cruises, Celebrity The Retreat suites, Celebrity Retreat benefits, Celebrity Retreat amenities, Luminae, Retreat Lounge, Retreat Sundeck, Celebrity suite benefits, Celebrity butler service, Celebrity Cruises suites, Celebrity Aqua Sky Suite" />
        <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/the-retreat" />
        <script type="application/ld+json">{JSON.stringify(cretSchemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="cret-hero-section">
        <div className="cret-hero-overlay-layer"></div>
        <div className="cret-hero-content-wrapper">
          <div className="cret-hero-eyebrow-tag">
            <Anchor size={16} />
            <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
          </div>
          <h1 className="cret-hero-main-title">Celebrity Cruises The Retreat: Complete Guide</h1>
          <p className="cret-hero-subtitle-text">
            Discover The Retreat on Celebrity Cruises, including suites, Luminae, private lounges, sundecks, butler service, dining and premium benefits.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cret-intro-section cret-tone-light">
        <div className="cret-intro-container">
          <div className="cret-intro-grid">
            <div className="cret-intro-text-col">
              <div className="cret-intro-lead-card">
                <p className="cret-intro-lead">
                  The Retreat is Celebrity Cruises' suite-focused experience, combining premium suite accommodation with dedicated service, exclusive spaces and enhanced dining and onboard amenities. It is more than a larger cabin: guests staying in eligible suites receive access to private areas such as Luminae at The Retreat, The Retreat Lounge and, on applicable ships, The Retreat Sundeck.
                </p>
              </div>
              <p className="cret-intro-body">
                Celebrity currently describes The Retreat as including all suites, a dedicated butler and team, Luminae, an exclusive lounge and an exclusive sundeck on Edge Series and revolutionized ships. The Retreat experience also includes Premium Drinks and Premium Wi-Fi under Celebrity's current offering, although specific benefits can vary by suite, fare and sailing. (Celebrity Cruises)
              </p>
              <p className="cret-intro-body">
                This guide explains what The Retreat includes, how the suite categories differ, what you can expect from Luminae and the private Retreat spaces, and what to check before booking.
              </p>
            </div>
            <div className="cret-intro-image-col">
              <div className="cret-intro-image-frame cret-placeholder-frame">
                <div className="cret-placeholder-content">
                  <Crown size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">The Retreat Image Placeholder</span>
                </div>
                <div className="cret-intro-image-badge">
                  <Gem size={14} />
                  <span>Celebrity Cruises · The Retreat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS THE RETREAT ── */}
      <section className="cret-different-section cret-tone-soft">
        <div className="cret-different-container">
          <div className="cret-different-layout-grid">
            <div className="cret-different-left-panel">
              <span className="cret-eyebrow">THE EXPERIENCE</span>
              <h2 className="cret-section-heading">What Is The Retreat on Celebrity Cruises?</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-different-lead">The Retreat is Celebrity's dedicated suite experience.</p>
              <p className="cret-different-body">
                Instead of treating a suite simply as a larger stateroom, Celebrity combines the accommodation with access to private venues and additional services.
              </p>
              <div className="cret-different-footer-card">
                <ShieldCheck size={20} className="cret-different-footer-icon" />
                <span>Celebrity's current Retreat information confirms that all Retreat suites receive access to Luminae and the Retreat Lounge, while the Retreat Sundeck is available on Edge Series and revolutionized ships. (Celebrity Cruises)</span>
              </div>
            </div>
            <div className="cret-different-right-panel">
              <div className="cret-included-grid">
                {[
                  'Suite accommodation', 'Dedicated butler service', 'Butler Chat', 'Luminae at The Retreat',
                  'The Retreat Lounge', 'The Retreat Sundeck on applicable ships', 'Premium Wi-Fi', 'Premium Drinks',
                  'Enhanced in-suite amenities', 'Priority embarkation and departure benefits',
                  'Dedicated concierge and destination assistance', 'Selected wellness benefits', 'Additional benefits for higher-level suites'
                ].map((item, idx) => (
                  <div key={idx} className="cret-included-chip">
                    <CheckCircle size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCLUDED ── */}
      <section className="cret-table-section cret-tone-dark">
        <div className="cret-table-container">
          <span className="cret-eyebrow">INCLUDED WITH YOUR SUITE</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>What Is Included in The Retreat?</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-table-intro">
            The exact inclusions depend on the suite and fare, but the core Retreat experience generally revolves around five areas: your suite, personalized service, private dining, exclusive spaces and premium amenities.
          </p>
          <div className="cret-compare-wrapper">
            <table className="cret-compare-table">
              <thead>
                <tr>
                  <th>Benefit</th>
                  <th className="cret-retreat-header"><Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: '#3b82f6' }} />The Retreat</th>
                </tr>
              </thead>
              <tbody>
                {cretIncludedRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="cret-feature-title">{row.benefit}</td>
                    <td className="cret-retreat-cell">
                      <span className="cret-retreat-badge">
                        <CheckCircle size={13} />
                        <span>{row.value}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cret-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Celebrity notes that certain enhanced benefits, including complimentary specialty dining, daily laundry and unlimited pressing, apply specifically to higher-level suites such as Royal Suites and above. (Celebrity Cruises)</span>
          </div>
        </div>
      </section>

      {/* ── SUITE CATEGORIES ── */}
      <section className="cret-categories-section cret-tone-light">
        <div className="cret-categories-container">
          <span className="cret-eyebrow">FIND YOUR FIT</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>Celebrity Retreat Suite Categories</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-categories-lead">The Retreat is not one single cabin type. It includes multiple suite categories, and the inventory differs between Celebrity ships.</p>
          <p className="cret-categories-body">Common and ship-specific categories can include:</p>
          <div className="cret-categories-grid">
            {cretRetreatCategories.map((item, idx) => (
              <div key={idx} className="cret-category-card">
                <span className="cret-category-number">0{idx + 1}</span>
                <span className="cret-category-name">{item}</span>
              </div>
            ))}
          </div>
          <div className="cret-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Not every category is available on every ship. For example, Signature Suites are specific to Celebrity Reflection, while Edge Villas and Iconic Suites are associated with Edge Series ships. (Celebrity Cruises)</span>
          </div>
        </div>
      </section>

      {/* ── SKY SUITE ── */}
      <section className="cret-feature-section cret-tone-soft cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Crown size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Sky Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Crown size={13} /><span>Sky Suite</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Gem size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  For travelers who want the Retreat experience without selecting one of the largest suites, a Sky Suite can provide the key private spaces and service associated with the program.
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">ENTRY POINT</span>
              <h2 className="cret-section-heading">Sky Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Sky Suite is one of the main entry points into The Retreat.</p>
              <p className="cret-feature-body">Celebrity's current Sky Suite information highlights:</p>
              <ul className="cret-check-list-grid">
                {cretSkySuiteHighlights.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">The precise benefits can depend on the fare and sailing. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AQUA SKY SUITE ── */}
      <section className="cret-feature-section cret-tone-dark cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Waves size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Aqua Sky Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Waves size={13} /><span>Aqua Sky Suite</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Heart size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  Aqua Sky Suite benefits vary according to the ship's facilities.
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">WELLNESS + SUITE</span>
              <h2 className="cret-section-heading">Aqua Sky Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Aqua Sky Suite combines The Retreat with Celebrity's wellness-focused AquaClass experience.</p>
              <p className="cret-feature-body">On Celebrity Beyond, for example, Celebrity lists the Aqua Sky Suite at 319 square feet of interior space plus a 79-square-foot veranda. Benefits include access to the private suite venues as well as wellness features such as the SEA Thermal Suite, spa concierge services and fitness classes. (Celebrity Cruises)</p>
              <p className="cret-feature-body">Aqua Sky Suite benefits can include:</p>
              <ul className="cret-check-list-grid">
                {cretAquaHighlights.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Aqua Sky Suite benefits vary according to the ship's facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CELEBRITY SUITE ── */}
      <section className="cret-feature-section cret-tone-light">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Home size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Celebrity Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Home size={13} /><span>Celebrity Suite</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <LayoutList size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  Celebrity Suites provide a two-room layout, which can be particularly useful when separate living and sleeping areas matter.
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">TWO-ROOM SUITES</span>
              <h2 className="cret-section-heading">Celebrity Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">Celebrity Suites offer more living space than Sky Suites and generally feature separate living and sleeping areas.</p>
              <p className="cret-feature-body">Celebrity describes its Celebrity Suites as two-room suites with large living areas and floor-to-ceiling panoramic windows on applicable ships. (Celebrity Cruises)</p>
              <p className="cret-feature-body">They are particularly suitable for travelers who want:</p>
              <ul className="cret-check-list">
                {cretCelebrityWants.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROYAL SUITE ── */}
      <section className="cret-feature-section cret-tone-soft">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Gem size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Royal Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Gem size={13} /><span>Royal Suite</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">HIGHER-LEVEL SUITE</span>
              <h2 className="cret-section-heading">Royal Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Royal Suite sits higher in the Retreat hierarchy and adds significantly more space and enhanced benefits.</p>
              <p className="cret-feature-body">Celebrity's current Retreat information lists Royal Suites among the higher-level suites that can receive benefits such as complimentary specialty dining, daily laundry and unlimited pressing. (Celebrity Cruises)</p>
              <p className="cret-feature-body">Royal Suites are designed for travelers who want both substantial living space and a more comprehensive premium-service experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE SUITE ── */}
      <section className="cret-feature-section cret-tone-dark">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Sparkles size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Signature Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Sparkles size={13} /><span>Signature Suite</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Star size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  Because it is ship-specific, travelers should confirm the current configuration when comparing it with other Retreat suites.
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">SHIP-SPECIFIC</span>
              <h2 className="cret-section-heading">Signature Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Signature Suite is a ship-specific category available on Celebrity Reflection.</p>
              <p className="cret-feature-body">Celebrity lists a Signature Suite at approximately 441 square feet of interior space and a 118-square-foot terrace, with features including higher ceilings, floor-to-ceiling glass doors and windows, a spacious veranda and enhanced suite amenities. (Celebrity Cruises)</p>
              <p className="cret-feature-body">Because it is ship-specific, travelers should confirm the current configuration when comparing it with other Retreat suites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PENTHOUSE SUITE ── */}
      <section className="cret-feature-section cret-tone-light cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Crown size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Penthouse Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Crown size={13} /><span>Penthouse Suite</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">LARGEST CATEGORIES</span>
              <h2 className="cret-section-heading">Penthouse Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Penthouse Suite is one of Celebrity's largest suite categories.</p>
              <p className="cret-feature-body">Celebrity's current Retreat information places Penthouse Suites among the higher suite categories eligible for enhanced benefits, including complimentary specialty dining and additional laundry services. (Celebrity Cruises)</p>
              <p className="cret-feature-body">Features can include:</p>
              <ul className="cret-check-list-grid">
                {cretPenthouseFeatures.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDGE VILLA ── */}
      <section className="cret-feature-section cret-tone-soft">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <TreePine size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Edge Villa Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><TreePine size={13} /><span>Edge Villa</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">TWO-LEVEL LIVING</span>
              <h2 className="cret-section-heading">Edge Villa</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Edge Villa is a distinctive two-level suite found on selected Edge Series ships.</p>
              <p className="cret-feature-body">Celebrity describes Edge Villas as two-story accommodations with indoor and outdoor living space. They include a private terrace and plunge-pool-style outdoor space on applicable ships.</p>
              <p className="cret-feature-body">Edge Villas also qualify for the enhanced suite benefits associated with higher-level Retreat accommodations. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ICONIC SUITE ── */}
      <section className="cret-feature-section cret-tone-dark">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Sparkles size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Iconic Suite Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Sparkles size={13} /><span>Iconic Suite</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Eye size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  The large outdoor area and position near the ship's bridge make this category particularly distinctive.
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">TOP OF THE FLEET</span>
              <h2 className="cret-section-heading">Iconic Suite</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Iconic Suite represents the top end of Celebrity's suite accommodation on selected ships.</p>
              <p className="cret-feature-body">Celebrity describes the Iconic Suite as the largest and most luxurious suite in its fleet. On Celebrity Ascent, it is listed at approximately 1,892 square feet of interior space and a 689-square-foot veranda. (Celebrity Cruises)</p>
              <p className="cret-feature-body">The large outdoor area and position near the ship's bridge make this category particularly distinctive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUMINAE ── */}
      <section className="cret-luminae-section cret-tone-light">
        <div className="cret-feature-container">
          <div className="cret-dining-grid-layout">
            <div className="cret-dining-left-col">
              <span className="cret-eyebrow">PRIVATE DINING</span>
              <h2 className="cret-section-heading">Luminae at The Retreat</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">Luminae at The Retreat is Celebrity's private restaurant for suite guests.</p>
              <p className="cret-feature-body">
                It is one of the defining parts of The Retreat experience. Celebrity describes Luminae as serving an exclusive menu that is not available elsewhere onboard, alongside complimentary signature dishes from Chef Daniel Boulud, Celebrity's Global Culinary Brand Ambassador. (Celebrity Cruises)
              </p>
              <div className="cret-dining-image-box cret-placeholder-frame">
                <div className="cret-placeholder-content">
                  <Utensils size={40} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Luminae Restaurant Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Utensils size={13} /><span>Luminae at The Retreat</span></div>
              </div>
            </div>

            <div className="cret-dining-right-col">
              <h4 className="cret-subheading">What meals are available at Luminae?</h4>
              <p className="cret-feature-body">Luminae can serve:</p>
              <div className="cret-dining-card-grid-split">
                {cretLuminaeMeals.map((meal, idx) => {
                  const mealIcons = [Sun, Utensils, Moon]
                  const MealIcon = mealIcons[idx]
                  return (
                    <div key={idx} className="cret-dining-card">
                      <div className="cret-dining-card-header">
                        <div className="cret-dining-card-icon-wrapper"><MealIcon size={18} /></div>
                        <h3 className="cret-dining-card-title">{meal}</h3>
                      </div>
                      <ul className="cret-dining-tags">
                        <li>Exclusive Luminae menu</li>
                      </ul>
                    </div>
                  )
                })}
                <div className="cret-dining-card">
                  <div className="cret-dining-card-header">
                    <div className="cret-dining-card-icon-wrapper"><Coffee size={18} /></div>
                    <h3 className="cret-dining-card-title">Signature Dishes</h3>
                  </div>
                  <ul className="cret-dining-tags">
                    <li>Chef Daniel Boulud selections</li>
                  </ul>
                </div>
              </div>
              <div className="cret-wine-footnote-badge">
                <AlertCircle size={14} />
                <span>Opening hours vary by itinerary, so guests should check the onboard daily schedule for current service times. (Celebrity Cruises)</span>
              </div>
              <h4 className="cret-subheading cret-luminae-faq-heading">Can Retreat guests dine in Luminae every day?</h4>
              <p className="cret-feature-body">Yes, Luminae is designed as the private restaurant for guests of The Retreat. Reservations may be appropriate for certain dining arrangements, but service details can vary by sailing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETREAT LOUNGE ── */}
      <section className="cret-feature-section cret-tone-soft cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Layers size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Retreat Lounge Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Layers size={13} /><span>The Retreat Lounge</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Bell size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  Celebrity states that the lounge is available 24/7, although staffed service hours vary by itinerary. (Celebrity Cruises)
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">EXCLUSIVE LOUNGE</span>
              <h2 className="cret-section-heading">The Retreat Lounge</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Retreat Lounge is a private lounge reserved for Retreat guests.</p>
              <p className="cret-feature-body">On older non-revolutionized ships, the equivalent venue may be called Michael's Club. (Celebrity Cruises)</p>
              <p className="cret-feature-body">The lounge provides a quieter place to relax away from the ship's larger public venues.</p>
              <p className="cret-feature-body">Amenities can include:</p>
              <ul className="cret-check-list-grid">
                {cretLoungeAmenities.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Celebrity states that the lounge is available 24/7, although staffed service hours vary by itinerary. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETREAT SUNDECK ── */}
      <section className="cret-feature-section cret-tone-dark cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Sun size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Retreat Sundeck Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Sun size={13} /><span>The Retreat Sundeck</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Waves size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  If access to a private outdoor area is important to you, check whether your specific ship has a Retreat Sundeck before booking.
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">PRIVATE OUTDOOR AREA</span>
              <h2 className="cret-section-heading">The Retreat Sundeck</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Retreat Sundeck is an exclusive outdoor area for Retreat guests.</p>
              <p className="cret-feature-body">It is available on Edge Series and revolutionized ships, rather than being a fleet-wide feature on every vessel. (Celebrity Cruises)</p>
              <p className="cret-feature-body">Depending on the ship, the area can include:</p>
              <ul className="cret-check-list-grid">
                {cretSundeckFeatures.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Celebrity describes the Retreat Sundeck as an outdoor sanctuary designed exclusively for suite guests. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUTLER SERVICE ── */}
      <section className="cret-feature-section cret-tone-light cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Crown size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Butler Service Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Bell size={13} /><span>Dedicated Butler</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Users size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  Celebrity also offers Butler Chat, allowing guests to contact their butler using a personal device. (Celebrity Cruises)
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">PERSONALIZED SERVICE</span>
              <h2 className="cret-section-heading">Celebrity Retreat Butler Service</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">Every Retreat suite comes with a dedicated butler.</p>
              <p className="cret-feature-body">The butler can assist with practical arrangements and reservations, allowing guests to spend less time managing logistics during the cruise.</p>
              <p className="cret-feature-body">Celebrity says Retreat butlers can assist with:</p>
              <ul className="cret-check-list-grid">
                {cretButlerServices.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Celebrity also offers Butler Chat, allowing guests to contact their butler using a personal device. (Celebrity Cruises)</p>
              <h4 className="cret-subheading cret-luminae-faq-heading">What is Butler Chat?</h4>
              <p className="cret-feature-body">Butler Chat provides a convenient way to contact your assigned butler without having to visit or call a service desk.</p>
              <p className="cret-feature-body">It can be useful for simple requests while you are elsewhere on the ship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCIERGE & DESTINATION ── */}
      <section className="cret-feature-section cret-tone-soft cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Compass size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Concierge Assistance Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><MapPin size={13} /><span>Destination Assistance</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">RETREAT CONCIERGE</span>
              <h2 className="cret-section-heading">Retreat Concierge and Destination Assistance</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Retreat experience extends beyond the suite itself.</p>
              <p className="cret-feature-body">Celebrity's current Retreat information includes a Destination Experience Specialist who can help guests make plans ashore, while the Retreat Concierge can assist with reservations and onboard arrangements. (Celebrity Cruises)</p>
              <p className="cret-feature-body">This can be useful when you want help coordinating:</p>
              <ul className="cret-check-list-grid">
                {cretConciergeHelp.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING & BEVERAGE BENEFITS ── */}
      <section className="cret-bento-benefits-section">
        <div className="cret-benefits-cards-container">
          <div className="cret-benefits-header-block">
            <span className="cret-eyebrow" style={{ color: 'var(--cret-accent-light)', textAlign: 'center' }}>FOOD &amp; BEVERAGE</span>
            <h2 className="cret-section-heading" style={{ color: '#ffffff', textAlign: 'center' }}>Retreat Dining and Beverage Benefits</h2>
            <div className="cret-heading-separator-bar cret-bar-centered" style={{ background: 'var(--cret-accent-light)' }}></div>
          </div>

          <div className="cret-benefit-bands">
            {cretDiningBenefitCards.map((card, idx) => {
              const CardIcon = card.Icon
              return (
                <div key={idx} className="cret-benefit-band">
                  <div className="cret-benefit-band-icon"><CardIcon size={20} /></div>
                  <div className="cret-benefit-band-content">
                    <h3 className="cret-bento-title">{card.title}</h3>
                    <p className="cret-bento-body">{card.body}</p>
                    {idx === 3 && (
                      <div className="cret-benefit-band-uses">
                        <p className="cret-bento-body" style={{ fontWeight: 'bold' }}>This can be especially useful when:</p>
                        <div className="cret-benefit-band-chips">
                          {cretInSuiteDiningUses.map((item, i) => (
                            <span key={i} className="cret-benefit-band-chip"><CheckCircle size={13} />{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SUITE AMENITIES ── */}
      <section className="cret-feature-section cret-tone-light cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Bed size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Retreat Suite Amenities Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Sparkles size={13} /><span>Suite Amenities</span></div>
              </div>
              <div className="cret-left-footnote-card">
                <Sparkles size={16} className="cret-footnote-card-icon" />
                <p className="cret-left-footnote-text">
                  Celebrity notes that Royal Suites and above can receive additional benefits such as personalized minibar options and complimentary sleepwear. (Celebrity Cruises)
                </p>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">IN-ROOM ELEVATION</span>
              <h2 className="cret-section-heading">Retreat Suite Amenities</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">Retreat suites receive upgraded in-room amenities compared with standard accommodation.</p>
              <p className="cret-feature-body">Depending on the suite, these can include:</p>
              <ul className="cret-check-list-grid">
                {cretAmenitiesList.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Celebrity notes that Royal Suites and above can receive additional benefits such as personalized minibar options and complimentary sleepwear. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH BENEFITS DEPEND ON YOUR SUITE ── */}
      <section className="cret-table-section cret-tone-soft">
        <div className="cret-table-container" style={{ maxWidth: '1100px' }}>
          <span className="cret-eyebrow">COMPARE BEFORE BOOKING</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>Which Retreat Benefits Depend on Your Suite?</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-table-intro">
            One of the most important things to understand is that not every Retreat suite receives exactly the same benefits.
          </p>

          <div className="cret-comparison-grid">
            <div className="cret-comparison-card">
              <div className="cret-comparison-header">
                <h3 className="cret-comparison-title">Sky Suite</h3>
              </div>
              <ul className="cret-comparison-list">
                {cretBenefitsTable.map((row, idx) => (
                  <li key={idx} className="cret-comparison-item">
                    <span className="cret-comparison-feature">{row.benefit}</span>
                    {row.sky}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cret-comparison-card">
              <div className="cret-comparison-header">
                <h3 className="cret-comparison-title">Aqua Sky Suite</h3>
              </div>
              <ul className="cret-comparison-list">
                {cretBenefitsTable.map((row, idx) => (
                  <li key={idx} className="cret-comparison-item">
                    <span className="cret-comparison-feature">{row.benefit}</span>
                    {row.aqua}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cret-comparison-card">
              <div className="cret-comparison-header">
                <h3 className="cret-comparison-title">Royal Suite & Above</h3>
              </div>
              <ul className="cret-comparison-list">
                {cretBenefitsTable.map((row, idx) => (
                  <li key={idx} className="cret-comparison-item">
                    <span className="cret-comparison-feature">{row.benefit}</span>
                    {row.royal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cret-table-footnote-badge">
            <AlertCircle size={15} />
            <span>*Certain special fares and MoveUp upgrades can have different terms. Celebrity's current suite information confirms that Royal Suites and above receive additional benefits such as complimentary specialty dining, laundry and pressing, while Aqua Sky Suites receive wellness benefits. (Celebrity Cruises)</span>
          </div>
        </div>
      </section>
      {/* ── WHICH SHIPS HAVE THE RETREAT ── */}
      <section className="cret-ships-section cret-tone-dark">
        <div className="cret-ships-container">
          <span className="cret-eyebrow">FLEET AVAILABILITY</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>Which Celebrity Ships Have The Retreat?</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-ships-lead">The Retreat is available across multiple Celebrity ship classes, but the facilities are not identical across the fleet.</p>
          <p className="cret-ships-body">Examples include:</p>

          <div className="cret-ships-bento-grid">
            {cretShipExamples.map((item, idx) => (
              <div key={idx} className="cret-ship-class-card">
                <span className="cret-ship-class-number">0{idx + 1}</span>
                <div className="cret-ship-class-header">
                  <span className="cret-ship-class-icon-box"><Ship size={20} /></span>
                  <h3 className="cret-ship-class-title">{item}</h3>
                </div>
                <p className="cret-ship-class-description">Available on ships in this class with varying suite categories and exclusive facility designs.</p>
              </div>
            ))}
          </div>

          <p className="cret-ships-body">The design can differ substantially. Edge Series ships may feature a Retreat Sundeck with modern outdoor facilities, while older ships can use Michael's Club as the Retreat lounge. (Celebrity Cruises)</p>
          <div className="cret-ships-matters-panel">
            <div className="cret-ships-matters-text">
              <h4 className="cret-subheading">Why the ship matters</h4>
              <p className="cret-feature-body">Before booking, check:</p>
            </div>
            <ul className="cret-ships-matters-list">
              {cretShipChecks.map((item, idx) => (
                <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* ── EDGE SERIES ── */}
      <section className="cret-feature-section cret-tone-light cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Ship size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Edge Series Retreat Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Sun size={13} /><span>Edge Series</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">EDGE SERIES SHIPS</span>
              <h2 className="cret-section-heading">The Retreat on Edge Series Ships</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">The Retreat experience is particularly prominent on Celebrity's Edge Series.</p>
              <p className="cret-feature-body">On applicable Edge Series ships, guests can have access to:</p>
              <ul className="cret-check-list-grid">
                {cretEdgeList.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Celebrity Ascent's Retreat, for example, includes a private restaurant, exclusive lounge and outdoor sundeck, with dedicated butler service. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLSTICE SERIES ── */}
      <section className="cret-feature-section cret-tone-soft cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid cret-reverse">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Globe size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Solstice Series Retreat Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Globe size={13} /><span>Solstice Series</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">SOLSTICE SERIES SHIPS</span>
              <h2 className="cret-section-heading">The Retreat on Solstice Series Ships</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">Celebrity has also updated Retreat facilities on selected Solstice Series ships.</p>
              <p className="cret-feature-body">Celebrity Solstice's renewed Retreat includes:</p>
              <ul className="cret-check-list-grid">
                {cretSolsticeList.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">Celebrity describes its renewed Solstice Retreat as including an updated sundeck, redesigned lounge and Luminae with Daniel Boulud signature dishes. (Celebrity Cruises)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VS AQUACLASS ── */}
      <section className="cret-table-section cret-tone-dark">
        <div className="cret-table-container" style={{ maxWidth: '1000px' }}>
          <span className="cret-eyebrow">THE RETREAT VS. AQUACLASS</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>The Retreat vs. AquaClass</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-table-intro">
            AquaClass and The Retreat can both appeal to travelers looking for a more elevated experience, but their focus is different.
          </p>
          <div className="cret-vs-strip">
            <div className="cret-vs-side"><Waves size={17} />AquaClass</div>
            <div className="cret-vs-chip">VS</div>
            <div className="cret-vs-side"><Sparkles size={17} />The Retreat</div>
          </div>
          <div className="cret-compare-wrapper cret-vs-wrapper">
            <table className="cret-compare-table">
              <tbody>
                {cretAquaVsRetreat.map((row, idx) => (
                  <tr key={idx}>
                    <td className="cret-feature-title">{row.feature}</td>
                    <td className="cret-compare-cell">{row.aqua}</td>
                    <td className="cret-retreat-cell">
                      <span className="cret-retreat-badge">
                        <CheckCircle size={13} />
                        <span>{row.retreat}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cret-table-note">AquaClass is primarily a wellness-focused stateroom category, while The Retreat centers on suite accommodation and exclusive service.</p>
          <div className="cret-table-footnote-badge">
            <Waves size={15} />
            <span>Aqua Sky Suites combine the two concepts by bringing AquaClass wellness benefits into a Retreat suite. (Celebrity Cruises)</span>
          </div>
        </div>
      </section>

      {/* ── VS CONCIERGE CLASS ── */}
      <section className="cret-feature-section cret-tone-light cret-skysuite-redesign">
        <div className="cret-feature-container">
          <div className="cret-feature-grid">
            <div className="cret-feature-image-col">
              <div className="cret-image-frame cret-placeholder-frame" style={{ height: '380px' }}>
                <div className="cret-placeholder-content">
                  <Star size={48} className="cret-placeholder-icon" />
                  <span className="cret-placeholder-text">Concierge Class Comparison Image Placeholder</span>
                </div>
                <div className="cret-image-badge"><Star size={13} /><span>Concierge Class</span></div>
              </div>
            </div>
            <div className="cret-feature-text-col">
              <span className="cret-eyebrow">THE RETREAT VS. CONCIERGE CLASS</span>
              <h2 className="cret-section-heading">The Retreat vs. Concierge Class</h2>
              <div className="cret-heading-separator-bar"></div>
              <p className="cret-feature-lead">Concierge Class and The Retreat are also different levels of accommodation.</p>
              <p className="cret-feature-body">Concierge Class can provide enhanced service and selected additional amenities, but it does not provide the same suite-exclusive access as The Retreat.</p>
              <p className="cret-feature-body">The Retreat adds:</p>
              <ul className="cret-check-list-grid">
                {cretConciergeAdds.map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="cret-feature-body font-footnote-details">If access to private venues is important, Concierge Class should not be considered a substitute for The Retreat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IS THE RETREAT WORTH CONSIDERING ── */}
      <section className="cret-worth-section cret-tone-soft">
        <div className="cret-worth-container">
          <span className="cret-eyebrow">MAKE THE RIGHT CALL</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>Is The Retreat Worth Considering?</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-worth-lead">Whether The Retreat represents good value depends on how much you will use its benefits.</p>
          <div className="cret-worth-stack">
            <div className="cret-worth-card cret-worth-attractive">
              <div className="cret-worth-card-header">
                <CheckCircle size={22} className="cret-worth-header-icon" />
                <h3 className="cret-worth-card-title">It May Be Particularly Attractive If You Value:</h3>
              </div>
              <ul className="cret-worth-list">
                {cretAttractiveList.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cret-worth-card cret-worth-less">
              <div className="cret-worth-card-header">
                <XCircle size={22} className="cret-worth-header-icon" />
                <h3 className="cret-worth-card-title">It May Be Less Compelling If:</h3>
              </div>
              <ul className="cret-worth-list">
                <li>
                  <XCircle size={15} />
                  <span>Your priority is simply having a comfortable place to sleep and you expect to spend most of your time ashore.</span>
                </li>
              </ul>
              <div className="cret-worth-footer-card">
                <Gem size={18} />
                <p className="cret-worth-footer-text">
                  The best comparison is not simply suite price vs. standard cabin price. Consider the value of the private dining, drinks, Wi-Fi, service, suite space and exclusive venues included with your specific booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CHOOSE ── */}
      <section className="cret-choose-section cret-tone-dark">
        <div className="cret-choose-container">
          <span className="cret-eyebrow" style={{ display: 'block', textAlign: 'center' }}>YOUR PRIORITIES</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>How to Choose the Right Retreat Suite</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <div className="cret-choose-grid">
            {cretChoiceCards.map((card, idx) => {
              const CardIcon = card.Icon
              return (
                <div key={idx} className="cret-choose-card">
                  <div className="cret-choose-icon-wrapper"><CardIcon size={22} /></div>
                  <h3 className="cret-choose-card-title">{card.title}</h3>
                  <p className="cret-choose-card-text">{card.text}</p>
                  {card.list && (
                    <ul className="cret-choose-card-list">
                      {card.list.map((item, i) => (
                        <li key={i}><CheckCircle size={13} /><span>{item}</span></li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT TO CHECK BEFORE BOOKING ── */}
      <section className="cret-check-booking-section cret-tone-light">
        <div className="cret-check-booking-container">
          <span className="cret-eyebrow">BEFORE YOU RESERVE</span>
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>What to Check Before Booking The Retreat</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <p className="cret-check-booking-lead">Before selecting a Retreat suite, compare the following:</p>
          <div className="cret-check-booking-grid">
            {cretCheckCards.map((card, idx) => (
              <div key={idx} className="cret-check-booking-card">
                <div className="cret-check-booking-card-head">
                  <span className="cret-check-booking-number">0{idx + 1}</span>
                  <h3 className="cret-check-booking-title">{card.title}</h3>
                </div>
                <p className="cret-check-booking-text">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="cret-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Celebrity offers accessible Retreat suites with features such as wider doors, roll-in showers and grab bars on selected ships and categories. (Celebrity Cruises)</span>
          </div>
        </div>
      </section>

      {/* ── CONCLUSION ── */}
      <section className="cret-conclusion-section cret-tone-soft">
        <div className="cret-conclusion-container">
          <div className="cret-conclusion-eyebrow-row">
            <Gem size={18} />
            <span className="cret-conclusion-eyebrow-text">THE SHORT VERSION</span>
          </div>
          <h2 className="cret-conclusion-heading" style={{ textAlign: 'center' }}>A Complete Premium Suite Experience</h2>
          <div className="cret-conclusion-separator"></div>
          <p className="cret-conclusion-body-lead">
            Celebrity Cruises The Retreat is designed as a complete premium suite experience rather than simply an upgraded stateroom. Guests receive suite accommodation alongside dedicated butler service, private dining at Luminae, access to the Retreat Lounge and, on applicable ships, the Retreat Sundeck. Current Retreat benefits also include Premium Drinks and Premium Wi-Fi, subject to applicable booking terms. (Celebrity Cruises)
          </p>
          <p className="cret-conclusion-body-desc">
            The most important distinction is that Retreat benefits vary by suite category and ship. A Sky Suite delivers the core Retreat experience, Aqua Sky Suites add wellness benefits, while Royal Suites and larger accommodations can provide additional inclusions such as specialty dining, laundry and pressing. (Celebrity Cruises)
          </p>
          <p className="cret-conclusion-body-desc">
            Before booking, compare the exact suite, ship and fare rather than judging The Retreat solely by its headline price. For travelers who value personal space, premium service, private dining and exclusive shipboard areas, understanding those differences can make it much easier to select the right Celebrity Cruises suite.
          </p>
          <div className="cret-conclusion-quote-card">
            <span className="cret-conclusion-quote-mark">“</span>
            <p className="cret-conclusion-quote-text">
              Private spaces. Personalized service. A suite experience that goes beyond the cabin.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY TAKEAWAYS ── */}
      <section className="cret-takeaways-section cret-tone-light">
        <div className="cret-takeaways-container">
          <h2 className="cret-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
          <div className="cret-heading-separator-bar cret-bar-centered"></div>
          <div className="cret-takeaways-grid">
            {cretKeyTakeaways.map((item, idx) => (
              <div key={idx} className="cret-takeaway-card">
                <div className="cret-takeaway-number">0{idx + 1}</div>
                <p className="cret-takeaway-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
      <section className="cret-expert-insight-section">
        <div className="cret-expert-insight-container">

          {/* Left Column: Portrait & Stats Grid */}
          <div className="cret-expert-portrait-panel">
            <div className="cret-expert-img-frame">
              <img src={Profile_Picture_AH} alt="Angela Hughes - Celebrity Cruises The Retreat Expert" className="cret-expert-img" />
              <div className="cret-expert-img-overlay"></div>
              <span className="cret-expert-badge">EXPERT ADVISOR</span>
            </div>
            <div className="cret-expert-stats-strip">
              <div className="cret-expert-stat-box">
                <div className="cret-expert-stat-num">40+</div>
                <div className="cret-expert-stat-lbl">Years Experience</div>
              </div>
              <div className="cret-expert-stat-box">
                <div className="cret-expert-stat-num">121+</div>
                <div className="cret-expert-stat-lbl">Countries Visited</div>
              </div>
            </div>
          </div>

          {/* Right Column: Insight Editorial Panel */}
          <div className="cret-expert-content-panel">
            <div className="cret-expert-eyebrow-row">
              <Sparkles size={16} />
              <span className="cret-eyebrow">MEET THE CEO</span>
            </div>
            <h2 className="cret-expert-heading">Insight from Angela Hughes</h2>
            <div className="cret-expert-separator-bar"></div>

            <div className="cret-expert-quote-card">
              <span className="cret-expert-quote-mark">“</span>
              <p className="cret-expert-quote-text">
                The Retreat is where Celebrity's suite experience comes to life. When your suite includes a dedicated butler, private dining at Luminae and an exclusive lounge, the entire voyage begins to feel less like a cruise and more like a personal luxury escape.
              </p>
            </div>

            <div className="cret-expert-priorities">
              <h5 className="cret-priorities-title">What Makes The Retreat Stand Out:</h5>
              <div className="cret-expert-pills">
                {['Luminae Private Dining', 'Dedicated Butler Service', 'Retreat Lounge Access', 'Premium Drinks & Wi-Fi', 'Retreat Sundeck', 'Higher-Level Suite Benefits'].map(pill => (
                  <span key={pill} className="cret-expert-pill">
                    <CheckCircle size={12} />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="cret-expert-footer-bio">
              <p className="cret-expert-bio">
                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise world to deliver custom travel planning that regular booking engines simply cannot replicate.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cret-faq-section cret-tone-soft">
        <div className="cret-faq-container">
          <div style={{ textAlign: 'center' }}>
            <span className="cret-eyebrow">QUESTIONS TRAVELERS ASK</span>
            <h2 className="cret-section-heading">Frequently Asked Questions</h2>
            <div className="cret-heading-separator-bar cret-bar-centered"></div>
          </div>
          <div className="cret-faq-list-wrapper">
            {cretFaqs.map((faq, index) => (
              <div
                key={index}
                className="cret-faq-item"
                onClick={() => cretToggleFaq(index)}
              >
                <div className="cret-faq-question-row">
                  <span>{faq.question}</span>
                  <span className="cret-faq-toggle-icon">{cretActiveFaq === index ? '−' : '+'}</span>
                </div>
                {cretActiveFaq === index && (
                  <p className="cret-faq-answer-text">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cret-cta-redesign-section">
        <div className="cret-cta-aurora-glow"></div>
        <div className="cret-cta-crystal cret-cta-crystal-1"></div>
        <div className="cret-cta-crystal cret-cta-crystal-2"></div>
        <div className="cret-cta-crystal cret-cta-crystal-3"></div>
        <div className="cret-cta-grid-lines"></div>

        <div className="cret-cta-content">
          <div className="cret-cta-compass-ring">
            <Compass size={28} />
          </div>
          <span className="cret-cta-eyebrow">PLAN YOUR SUITE VACATION</span>
          <h2 className="cret-cta-title">Ready to Experience The Retreat on Celebrity Cruises?</h2>
          <div className="cret-cta-bar"></div>
          <p className="cret-cta-subtitle">
            Planning a Celebrity Cruises suite vacation? Compare the Retreat suite categories on your specific ship before booking. Check the suite's size, veranda or terrace, dining benefits, Wi-Fi and beverage inclusions, private Retreat facilities and any higher-level suite perks so you can choose the accommodation that matches your travel priorities.
          </p>
          <div className="cret-cta-actions">
            <Link to="/contact" className="cret-cta-primary-btn">
              <Phone size={18} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} className="cret-cta-btn-arrow" />
            </Link>
            <Link to="/celebrity-cruises" className="cret-cta-secondary-btn">
              <LayoutList size={18} />
              <span>Explore Celebrity Cruises</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CelebrityCruisesTheRetreat