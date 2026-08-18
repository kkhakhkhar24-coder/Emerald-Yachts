// CelebrityDrinkPackages.jsx
import Navbar from '../../components/Navbar/Navbar'
import './CelebrityDrinkPackages.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
  Ship, MapPin, Star, Users, CheckCircle, XCircle,
  ArrowRight, Compass, Sparkles, Anchor, Gem,
  Crown, Phone, LayoutList, Heart, Utensils,
  Sun, Award, Moon, Music, Mic,
  Globe, DollarSign, Wifi, Plane, Wine, Bed,
  Bell, Waves, ShieldCheck, Coffee, AlertCircle,
  Menu, Gift, Coffee as CoffeeIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CelebrityDrinkPackages() {
  const [ccdpActiveFaq, setCcdpActiveFaq] = useState(null)
  const ccdpToggleFaq = i => setCcdpActiveFaq(ccdpActiveFaq === i ? null : i)

  const ccdpFaqs = [
    { question: 'What drink packages does Celebrity Cruises offer?', answer: 'Celebrity currently offers the Classic Drink Package, Premium Drink Package and Zero Proof Drink Package. Classic and Premium include alcoholic beverages, while Zero Proof focuses on premium non-alcoholic drinks.' },
    { question: 'How much is the Celebrity Cruises drink package?', answer: 'Celebrity does not have one fixed price for every sailing. Package prices vary by cruise, market, promotion and package type, so the current Cruise Planner price for your reservation is the best reference.' },
    { question: 'What is included in the Celebrity Classic Drink Package?', answer: 'The Classic Package includes selected beers, spirits, cocktails, liqueurs, frozen drinks, wines by the glass, bottled water, sodas, premium coffees and teas, subject to the package\'s applicable limits and availability.' },
    { question: 'What is included in the Celebrity Premium Drink Package?', answer: 'Premium includes the Classic selection plus a broader range of premium spirits, craft and artisan beers, specialty coffees and teas, premium bottled water, higher-priced wines by the glass and other premium beverages.' },
    { question: 'What is the Celebrity Zero Proof Drink Package?', answer: 'Zero Proof is Celebrity\'s non-alcoholic beverage package. It can include premium bottled water, specialty coffees and teas, energy drinks, smoothies, zero-proof cocktails, sodas and other premium non-alcoholic beverages.' },
    { question: 'What is the Celebrity drink price limit for the Classic Package?', answer: 'Celebrity\'s current standard U.S. FAQ lists the Classic Package limit at $12 per serving. Celebrity currently lists $14 for sailings departing from UK and Australian ports. Regional pricing and package terms can change.' },
    { question: 'What is the Celebrity drink price limit for the Premium Package?', answer: 'Celebrity\'s current standard U.S. FAQ lists the Premium Package limit at $19 per serving, while UK and Australian departures are currently listed at $23. The applicable limit for your sailing should be checked before purchase.' },
    { question: 'What happens if my Celebrity drink costs more than the package limit?', answer: 'Celebrity charges the difference between the drink\'s price and the package limit, along with the applicable gratuity.' },
    { question: 'Are wine bottles included in Celebrity drink packages?', answer: 'No. Bottles of wine are not included as package beverages, but Celebrity provides a discount on wine bottles for package holders. Classic currently provides 15% off and Premium 20% off.' },
    { question: 'Can Celebrity drink packages be shared?', answer: 'No. Celebrity says drink packages are for individual guest use and cannot be shared between multiple guests.' },
    { question: 'Does everyone in a Celebrity cabin need the same drink package?', answer: 'Celebrity\'s drink-package policy requires all guests of legal drinking age in the same stateroom to purchase the same package, including upgrades.' },
    { question: 'Can I upgrade from the Celebrity Classic to Premium Drink Package?', answer: 'Yes. Celebrity allows Classic guests to upgrade to Premium. The current FAQ lists a $20-per-person-per-day upgrade plus 20% gratuity in its applicable pricing information, although promotional and regional terms may vary.' },
    { question: 'Are Celebrity drink packages available on every cruise?', answer: 'No. Celebrity states that drink packages are not available on cruises in the Galapagos. Availability and package terms can also depend on the sailing and departure market.' },
    { question: 'Can I use a Celebrity drink package for room service or minibar drinks?', answer: 'No. Celebrity states that drink packages can be used in restaurants, bars and lounges, but room-service and minibar beverages are excluded.' },
    { question: 'Is a Celebrity Cruises drink package worth it?', answer: 'It can be worthwhile if you regularly purchase cocktails, wine, beer, specialty coffee, bottled water or other covered drinks. Compare the actual package price with your expected daily beverage spending before buying.' }
  ]

  const ccdpPackages = [
    {
      name: 'Classic Drink Package',
      icon: Wine,
      color: '#274472',
      description: 'Standard alcoholic and non-alcoholic drinks',
      limit: '$12 per serving (U.S.)',
      features: [
        'Beers', 'Spirits', 'Cocktails', 'Liqueurs',
        'Frozen drinks', 'Wines by the glass', 'Bottled water',
        'Sodas', 'Premium coffees', 'Teas'
      ],
      discount: '15% off wine bottles'
    },
    {
      name: 'Premium Drink Package',
      icon: Crown,
      color: '#3b82f6',
      description: 'Wider selection and higher-priced beverages',
      limit: '$19 per serving (U.S.)',
      features: [
        'Classic Package items', 'Craft and artisan beers',
        'Premium spirits', 'Premium cocktails', 'Frozen drinks',
        'Coca-Cola products', 'Premium bottled water',
        'Higher-priced wines by the glass',
        'Additional premium beverage selections'
      ],
      discount: '20% off wine bottles'
    },
    {
      name: 'Zero Proof Drink Package',
      icon: CoffeeIcon,
      color: '#1a2a44',
      description: 'Premium non-alcoholic beverages',
      limit: 'Non-alcoholic package',
      features: [
        'Premium bottled water', 'Specialty coffees',
        'Organic and premium teas', 'Red Bull and energy drinks',
        'Frozen smoothies', 'Zero-proof cocktails',
        'Coca-Cola selections', 'Vitamin Water',
        'Bottled iced teas', 'Other non-alcoholic beverages'
      ],
      discount: '—'
    }
  ]

  const ccdpComparison = [
    { feature: 'Alcoholic drinks', classic: 'Yes', premium: 'Yes', zero: 'No' },
    { feature: 'Beer', classic: 'Yes', premium: 'Yes', zero: 'No' },
    { feature: 'Wine by glass', classic: 'Yes', premium: 'Yes, broader selection', zero: 'No' },
    { feature: 'Spirits', classic: 'Yes', premium: 'Premium selection', zero: 'No' },
    { feature: 'Cocktails', classic: 'Yes', premium: 'Broader selection', zero: 'Zero-proof cocktails' },
    { feature: 'Frozen drinks', classic: 'Yes', premium: 'Yes', zero: 'Selected non-alcoholic options' },
    { feature: 'Specialty coffee', classic: 'Included selections', premium: 'Broader selection', zero: 'Yes' },
    { feature: 'Premium bottled water', classic: 'Limited/selected', premium: 'Yes', zero: 'Yes' },
    { feature: 'Energy drinks', classic: 'Package dependent', premium: 'Broader selection', zero: 'Yes' },
    { feature: 'Bottle-of-wine discount', classic: '15%', premium: '20%', zero: '—' },
    { feature: 'Current standard U.S. drink-price threshold', classic: 'Up to $12', premium: 'Up to $19', zero: 'Non-alcoholic package' }
  ]

  const ccdpKeyTakeaways = [
    'Celebrity Cruises currently offers Classic, Premium and Zero Proof drink packages.',
    'Classic covers a broad selection of alcoholic and non-alcoholic beverages.',
    'Premium provides a wider selection of premium drinks and higher package limits.',
    'Zero Proof is designed for premium non-alcoholic beverages.',
    'Celebrity currently lists the standard U.S. Classic limit at $12 per serving and Premium at $19.',
    'Drinks above the applicable package limit can result in a charge for the difference.',
    'Wine bottles are not included, but package holders receive a bottle discount.',
    'Drink packages cannot be shared, and adults in the same stateroom must purchase the same package.'
  ]

  const ccdpSchemaData = {
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
        "@id": "https://www.tripsandships.com/celebrity-cruises/drink-packages/#webpage",
        "url": "https://www.tripsandships.com/celebrity-cruises/drink-packages/",
        "name": "Celebrity Cruises Drink Packages",
        "description": "Compare Celebrity Cruises drink packages, including Classic, Premium and Zero Proof options, prices, inclusions, restrictions, upgrades and booking tips.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/celebrity-cruises/drink-packages/"
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Article",
        "@id": "https://www.tripsandships.com/celebrity-cruises/drink-packages/#article",
        "headline": "Celebrity Cruises Drink Packages",
        "description": "A complete guide to Celebrity Cruises drink packages, including Classic, Premium and Zero Proof options, package limits, upgrades, exclusions and value.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.tripsandships.com/celebrity-cruises/drink-packages/"
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
        "@id": "https://www.tripsandships.com/celebrity-cruises/drink-packages/#breadcrumb",
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
            "item": "https://www.tripsandships.com/celebrity-cruises/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Celebrity Cruises Drink Packages",
            "item": "https://www.tripsandships.com/celebrity-cruises/drink-packages/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/celebrity-cruises/drink-packages/#faq",
        "mainEntity": ccdpFaqs.map(f => ({
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
        <title>Celebrity Cruises Drink Packages Guide</title>
        <meta name="title" content="Celebrity Cruises Drink Packages Guide" />
        <meta name="description" content="Compare Celebrity Cruises drink packages, including Classic, Premium and Zero Proof options, prices, inclusions, restrictions, upgrades and booking tips." />
        <meta name="keywords" content="Celebrity Cruises drink packages, Celebrity drink package, Celebrity Classic Drink Package, Celebrity Premium Drink Package, Celebrity Zero Proof Package, Celebrity beverage package, Celebrity drink package prices, Celebrity drink package cost, Celebrity drink package upgrade, Celebrity All Included drinks" />
        <script type="application/ld+json">{JSON.stringify(ccdpSchemaData)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="ccdp-hero-section">
        <div className="ccdp-hero-overlay-layer"></div>
        <div className="ccdp-hero-content-wrapper">
          <div className="ccdp-hero-eyebrow-tag">
            <Anchor size={16} />
            <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
          </div>
          <h1 className="ccdp-hero-main-title">Celebrity Cruises <br /> Drink Packages Guide</h1>
          <p className="ccdp-hero-subtitle-text">
            Compare Celebrity Cruises drink packages, including Classic, Premium and Zero Proof options, prices, inclusions, restrictions, upgrades and booking tips.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ccdp-intro-section">
        <div className="ccdp-intro-container">
          <div className="ccdp-intro-grid">
            <div className="ccdp-intro-text-col">
              <div className="ccdp-intro-lead-card">
                <p className="ccdp-intro-lead">
                  Celebrity Cruises offers several beverage packages designed for different drinking habits and budgets. The main options currently include the Classic Drink Package, Premium Drink Package and Zero Proof Drink Package. The Classic and Premium packages cover alcoholic and non-alcoholic beverages, while Zero Proof is designed for guests who do not want an alcoholic package.
                </p>
              </div>
              <p className="ccdp-intro-body">
                The biggest difference between the packages is the range and price level of beverages covered. Celebrity's current FAQ states that the Classic Package covers beverages up to $12 per serving and Premium covers beverages up to $19 per serving on its standard U.S. pricing information. For sailings departing from UK and Australian ports, Celebrity currently lists higher thresholds of $14 and $23, respectively.
              </p>
              <p className="ccdp-intro-body">
                This guide explains how Celebrity drink packages work, what each package includes, what happens when a drink exceeds the package limit, whether packages are worth buying, and how the rules affect couples, families and solo travelers.
              </p>
            </div>
            <div className="ccdp-intro-image-col">
              <div className="ccdp-intro-image-frame ccdp-placeholder-frame">
                <div className="ccdp-placeholder-content">
                  <Ship size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Celebrity Cruises Image Placeholder</span>
                </div>
                <div className="ccdp-intro-image-badge">
                  <Anchor size={14} />
                  <span>Beverage Packages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES OVERVIEW ── */}
      <section className="ccdp-packages-section">
        <div className="ccdp-packages-container">
          <span className="ccdp-eyebrow">BEVERAGE PACKAGES</span>
          <h2 className="ccdp-section-heading">What Drink Packages Does Celebrity Cruises Offer?</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>

          <div className="ccdp-packages-grid">
            {ccdpPackages.map((pkg, idx) => {
              const Icon = pkg.icon
              return (
                <div key={idx} className="ccdp-package-card">
                  <div className="ccdp-package-icon-wrapper" style={{ background: pkg.color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="ccdp-package-name">{pkg.name}</h3>
                  <p className="ccdp-package-desc">{pkg.description}</p>
                  <div className="ccdp-package-limit">{pkg.limit}</div>
                  <ul className="ccdp-package-features">
                    {pkg.features.map((feature, fi) => (
                      <li key={fi}>
                        <CheckCircle size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="ccdp-package-discount">
                    <Gift size={14} />
                    <span>{pkg.discount}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CLASSIC PACKAGE ── */}
      <section className="ccdp-feature-section ccdp-bg-classic">
        <div className="ccdp-feature-container">
          <div className="ccdp-feature-grid">
            <div className="ccdp-feature-image-col">
              <div className="ccdp-image-frame ccdp-placeholder-frame" style={{ height: '360px' }}>
                <div className="ccdp-placeholder-content">
                  <Wine size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Classic Package Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><Wine size={13} /><span>Classic Package</span></div>
              </div>
              <div className="ccdp-left-footnote-card">
                <Star size={16} className="ccdp-footnote-card-icon" />
                <p className="ccdp-left-footnote-text">
                  The Classic Package provides a 15% discount on wines purchased by the bottle.
                </p>
              </div>
            </div>
            <div className="ccdp-feature-text-col">
              <span className="ccdp-eyebrow">CLASSIC PACKAGE</span>
              <h2 className="ccdp-section-heading">Celebrity Classic Drink Package</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-feature-lead">The Classic Drink Package is Celebrity's standard alcoholic beverage package.</p>
              <p className="ccdp-feature-body">Celebrity currently describes it as covering a selection of:</p>
              <ul className="ccdp-check-list">
                {['Beers', 'Spirits', 'Cocktails', 'Liqueurs', 'Frozen drinks', 'Wines by the glass', 'Bottled water', 'Sodas', 'Premium coffees', 'Teas'].map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="ccdp-feature-body" style={{ marginTop: '16px' }}>
                The current U.S. Celebrity FAQ places the Classic package limit at <strong>$12 per serving</strong>, while Celebrity currently lists <strong>$14</strong> for sailings from UK and Australian ports.
              </p>
              <div className="ccdp-wine-footnote-badge">
                <AlertCircle size={14} />
                <span>If the beverage exceeds the package's applicable price threshold, Celebrity charges the difference plus the applicable gratuity to the guest's account.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIUM PACKAGE ── */}
      <section className="ccdp-feature-section ccdp-bg-premium">
        <div className="ccdp-feature-container">
          <div className="ccdp-feature-grid ccdp-reverse">
            <div className="ccdp-feature-image-col">
              <div className="ccdp-image-frame ccdp-placeholder-frame" style={{ height: '360px' }}>
                <div className="ccdp-placeholder-content">
                  <Crown size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Premium Package Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><Crown size={13} /><span>Premium Package</span></div>
              </div>
              <div className="ccdp-left-footnote-card">
                <Star size={16} className="ccdp-footnote-card-icon" />
                <p className="ccdp-left-footnote-text">
                  Premium provides a 20% discount on bottles of wine, compared with 15% with Classic.
                </p>
              </div>
            </div>
            <div className="ccdp-feature-text-col">
              <span className="ccdp-eyebrow">PREMIUM PACKAGE</span>
              <h2 className="ccdp-section-heading">Celebrity Premium Drink Package</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-feature-lead">The Premium Drink Package builds on the Classic Package and expands the selection to higher-priced and premium beverages.</p>
              <p className="ccdp-feature-body">Celebrity says the Premium Package includes Classic Package items plus options such as:</p>
              <ul className="ccdp-check-list">
                {['Specialty coffees and teas', 'Craft and artisan beers', 'Premium spirits', 'Premium cocktails', 'Frozen drinks', 'Coca-Cola products', 'Premium bottled water', 'Higher-priced wines by the glass', 'Additional premium beverage selections'].map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="ccdp-feature-body" style={{ marginTop: '16px' }}>
                Celebrity currently lists the Premium threshold at <strong>$19 per serving</strong> in its standard U.S. FAQ, with <strong>$23</strong> for sailings departing from UK and Australian ports.
              </p>
              <div className="ccdp-wine-footnote-badge">
                <AlertCircle size={14} />
                <span>Premium is particularly relevant if you regularly prefer higher-end wines, premium spirits, craft beers, specialty coffees, premium bottled water, or more expensive cocktails.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZERO PROOF ── */}
      <section className="ccdp-feature-section ccdp-bg-zeroproof">
        <div className="ccdp-feature-container">
          <div className="ccdp-feature-grid">
            <div className="ccdp-feature-image-col">
              <div className="ccdp-image-frame ccdp-placeholder-frame" style={{ height: '360px' }}>
                <div className="ccdp-placeholder-content">
                  <CoffeeIcon size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Zero Proof Package Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><CoffeeIcon size={13} /><span>Zero Proof</span></div>
              </div>
              <div className="ccdp-left-footnote-card">
                <Users size={16} className="ccdp-footnote-card-icon" />
                <p className="ccdp-left-footnote-text">
                  Zero Proof is useful for non-drinkers, designated drivers, guests who prefer specialty coffee and premium water, and travelers who want mocktails and other zero-proof beverages.
                </p>
              </div>
            </div>
            <div className="ccdp-feature-text-col">
              <span className="ccdp-eyebrow">ZERO PROOF</span>
              <h2 className="ccdp-section-heading">Celebrity Zero Proof Drink Package</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-feature-lead">The Zero Proof Drink Package is Celebrity's non-alcoholic option.</p>
              <p className="ccdp-feature-body">It is intended for guests who want a broader selection of premium non-alcoholic beverages without purchasing an alcoholic package.</p>
              <p className="ccdp-feature-body">Celebrity's current information describes options including:</p>
              <ul className="ccdp-check-list">
                {['Premium bottled water', 'Specialty coffees', 'Organic and premium teas', 'Red Bull and other energy drinks', 'Frozen smoothies', 'Zero-proof cocktails', 'Coca-Cola selections', 'Vitamin Water', 'Bottled iced teas', 'Other non-alcoholic beverages'].map((item, idx) => (
                  <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <div className="ccdp-wine-footnote-badge">
                <AlertCircle size={14} />
                <span>Specific products can vary by ship and availability.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="ccdp-comparison-section">
        <div className="ccdp-comparison-container">
          <span className="ccdp-eyebrow">COMPARISON</span>
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>Celebrity Drink Package Comparison</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>

          <div className="ccdp-comparison-grid">
            <div className="ccdp-compare-card">
              <h3 className="ccdp-compare-title">Classic</h3>
              <ul className="ccdp-compare-list">
                {ccdpComparison.map((row, idx) => (
                  <li key={idx} className="ccdp-compare-item">
                    <span className="ccdp-compare-feature">{row.feature}</span>
                    {row.classic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ccdp-compare-card">
              <h3 className="ccdp-compare-title">Premium</h3>
              <ul className="ccdp-compare-list">
                {ccdpComparison.map((row, idx) => (
                  <li key={idx} className="ccdp-compare-item">
                    <span className="ccdp-compare-feature">{row.feature}</span>
                    {row.premium}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ccdp-compare-card">
              <h3 className="ccdp-compare-title">Zero Proof</h3>
              <ul className="ccdp-compare-list">
                {ccdpComparison.map((row, idx) => (
                  <li key={idx} className="ccdp-compare-item">
                    <span className="ccdp-compare-feature">{row.feature}</span>
                    {row.zero}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ccdp-table-footnote-badge">
            <AlertCircle size={15} />
            <span>Package contents, price thresholds and beverage availability can change, so the terms shown for your sailing should take priority.</span>
          </div>
        </div>
      </section>
      {/* ── PRICING ── */}
      <section className="ccdp-pricing-section">
        <div className="ccdp-pricing-container">
          <div className="ccdp-pricing-grid">
            <div className="ccdp-pricing-left-col">
              <span className="ccdp-eyebrow">PRICING</span>
              <h2 className="ccdp-section-heading">How Much Do Celebrity Drink Packages Cost?</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-pricing-body-lead">
                Celebrity does not use one universal drink-package price for every cruise.
              </p>
              <p className="ccdp-pricing-body-desc">
                Pricing can vary according to: sailing, ship, cruise length, departure market, promotions, package type, when the package is purchased, available pre-cruise offers, and more.
              </p>
              <p className="ccdp-pricing-body-desc">
                Celebrity's published promotional materials have shown different starting prices at different times, which is why travelers should not assume a fixed daily price from an older article or screenshot.
              </p>
            </div>
            <div className="ccdp-pricing-right-col">
              <div className="ccdp-pricing-card">
                <h3 className="ccdp-pricing-card-title">Gratuity on Drink Packages</h3>
                <div className="ccdp-pricing-card-stat">
                  <span className="ccdp-pricing-card-stat-value">20%</span>
                  <span className="ccdp-pricing-card-stat-label">service charge</span>
                </div>
                <p className="ccdp-pricing-card-text">
                  Celebrity's published package materials state that a <strong>20% service charge</strong> is applied to drink-package purchases at checkout in the applicable markets.
                </p>
                <p className="ccdp-pricing-card-text">
                  Because taxes, service charges and regional booking rules can vary, check the final checkout price rather than calculating the package solely from its advertised base price.
                </p>
              </div>
              <div className="ccdp-pricing-note">
                <AlertCircle size={16} />
                <span>The most reliable method is to check the Cruise Planner for your specific reservation and compare the current package price with your expected drink spending.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PURCHASE INFO ── */}
      <section className="ccdp-purchase-section">
        <div className="ccdp-purchase-container">
          <span className="ccdp-eyebrow">PURCHASE</span>
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>Can You Buy a Celebrity Drink Package <br /> Before the Cruise?</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          <p className="ccdp-purchase-intro">
            Yes. Celebrity says guests can purchase drink packages through the Cruise Planner before sailing, subject to the applicable booking deadline. Its current FAQ states that packages can also be purchased onboard on the first day of the cruise.
          </p>
          <div className="ccdp-purchase-grid">
            <div className="ccdp-purchase-card">
              <div className="ccdp-purchase-card-head">
                <div className="ccdp-purchase-icon-wrapper"><Ship size={22} /></div>
                <h3 className="ccdp-purchase-title">Buy Before Sailing</h3>
              </div>
              <ul className="ccdp-purchase-list">
                <li><CheckCircle size={14} /><span>You can compare packages in advance</span></li>
                <li><CheckCircle size={14} /><span>You can monitor promotional pricing</span></li>
                <li><CheckCircle size={14} /><span>Avoid having to arrange the package after boarding</span></li>
                <li><CheckCircle size={14} /><span>Calculate your expected beverage budget before departure</span></li>
              </ul>
              <p className="ccdp-purchase-note">Celebrity recommends checking the Cruise Planner for the current price and availability for your booking.</p>
            </div>
            <div className="ccdp-purchase-card">
              <div className="ccdp-purchase-card-head">
                <div className="ccdp-purchase-icon-wrapper"><Anchor size={22} /></div>
                <h3 className="ccdp-purchase-title">Buy Onboard</h3>
              </div>
              <ul className="ccdp-purchase-list">
                <li><CheckCircle size={14} /><span>Packages can be purchased onboard</span></li>
                <li><CheckCircle size={14} /><span>Available on the first day of the cruise</span></li>
                <li><CheckCircle size={14} /><span>Guests can ask at a bar for information</span></li>
              </ul>
              <p className="ccdp-purchase-note">If you are comparing prices, check the pre-cruise Cruise Planner first because Celebrity frequently promotes pre-cruise package pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPGRADE ── */}
      <section className="ccdp-upgrade-section">
        <div className="ccdp-upgrade-container">
          <div className="ccdp-upgrade-grid">
            <div className="ccdp-upgrade-text-col">
              <span className="ccdp-eyebrow">UPGRADE</span>
              <h2 className="ccdp-section-heading">Can You Upgrade From Classic to Premium?</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-upgrade-lead">
                Yes. Guests with a Classic Drink Package can upgrade to Premium.
              </p>
              <p className="ccdp-upgrade-body">
                Celebrity's current FAQ lists a <strong>$20 per person per day</strong> Classic-to-Premium upgrade price plus 20% gratuity in the applicable information, although promotional pricing and regional terms can differ.
              </p>
              <p className="ccdp-upgrade-body">
                The upgrade can be useful if you want premium brands without paying for an entirely separate package.
              </p>
            </div>
            <div className="ccdp-upgrade-image-col">
              <div className="ccdp-upgrade-image-frame ccdp-placeholder-frame" style={{ height: '320px' }}>
                <div className="ccdp-placeholder-content">
                  <ArrowRight size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Upgrade Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><Star size={13} /><span>Upgrade Available</span></div>
              </div>
              <div className="ccdp-upgrade-note">
                <AlertCircle size={16} />
                <span>Before upgrading, compare: Premium package price − Classic package price against the value of the additional drinks you expect to order.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIONS ── */}
      <section className="ccdp-exclusions-section">
        <div className="ccdp-exclusions-container">
          <span className="ccdp-eyebrow">EXCLUSIONS</span>
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>What's Not Included in Celebrity Drink Packages?</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          <div className="ccdp-exclusions-grid">
            <div className="ccdp-exclusion-card">
              <div className="ccdp-exclusion-head">
                <div className="ccdp-exclusion-icon"><XCircle size={20} /></div>
                <h3 className="ccdp-exclusion-title">Room Service</h3>
              </div>
              <p className="ccdp-exclusion-text">Room service beverages are not included. Celebrity's FAQ specifically states that drink packages can be used at restaurants, bars and lounges onboard, but room service beverages are excluded.</p>
            </div>
            <div className="ccdp-exclusion-card">
              <div className="ccdp-exclusion-head">
                <div className="ccdp-exclusion-icon"><XCircle size={20} /></div>
                <h3 className="ccdp-exclusion-title">Minibar Drinks</h3>
              </div>
              <p className="ccdp-exclusion-text">Minibar beverages are not included. If you order a beverage from the minibar, expect a separate charge.</p>
            </div>
            <div className="ccdp-exclusion-card">
              <div className="ccdp-exclusion-head">
                <div className="ccdp-exclusion-icon"><XCircle size={20} /></div>
                <h3 className="ccdp-exclusion-title">Wine Bottles</h3>
              </div>
              <p className="ccdp-exclusion-text">Bottles of wine are not included as a package beverage, but Classic and Premium package holders can receive discounts on bottles of wine (15% for Classic, 20% for Premium).</p>
            </div>
            <div className="ccdp-exclusion-card">
              <div className="ccdp-exclusion-head">
                <div className="ccdp-exclusion-icon"><XCircle size={20} /></div>
                <h3 className="ccdp-exclusion-title">Galapagos Cruises</h3>
              </div>
              <p className="ccdp-exclusion-text">Celebrity states that drink packages are not available on cruises in the Galapagos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHARING POLICY ── */}
      <section className="ccdp-sharing-section">
        <div className="ccdp-sharing-container">
          <div className="ccdp-sharing-grid">
            <div className="ccdp-sharing-image-col">
              <div className="ccdp-sharing-image-frame ccdp-placeholder-frame" style={{ height: '320px' }}>
                <div className="ccdp-placeholder-content">
                  <Users size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Sharing Policy Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><Users size={13} /><span>Sharing Policy</span></div>
              </div>
              <div className="ccdp-sharing-note">
                <AlertCircle size={16} />
                <span>Celebrity's drink-package policy requires all guests of legal drinking age in the same stateroom to purchase the same drink package, including upgrades.</span>
              </div>
            </div>
            <div className="ccdp-sharing-text-col">
              <span className="ccdp-eyebrow">SHARING POLICY</span>
              <h2 className="ccdp-section-heading">Can Celebrity Drink Packages Be Shared?</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-sharing-lead">
                No. Celebrity states that drink packages are for <strong>single-guest use</strong> and cannot be shared between multiple people.
              </p>
              <p className="ccdp-sharing-body">
                For example, one person cannot use their package to order drinks for another guest who does not have a package. This rule is important when calculating whether buying a package for one person will actually work for your travel party.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAME STATEROOM RULE ── */}
      <section className="ccdp-stateroom-section">
        <div className="ccdp-stateroom-container">
          <div className="ccdp-stateroom-grid">
            <div className="ccdp-stateroom-text-col">
              <span className="ccdp-eyebrow">STATEROOM RULE</span>
              <h2 className="ccdp-section-heading">Does Everyone in a Stateroom Need the Same Drink Package?</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-stateroom-lead">
                Celebrity's drink-package policy requires all guests of legal drinking age in the same stateroom to purchase the same drink package, including upgrades.
              </p>
              <p className="ccdp-stateroom-body">
                For example, if two adults share a cabin and one wants Premium, the other adult generally must also have Premium. This rule can significantly affect the value calculation for couples.
              </p>
            </div>
            <div className="ccdp-stateroom-image-col">
              <div className="ccdp-stateroom-image-frame ccdp-placeholder-frame" style={{ height: '320px' }}>
                <div className="ccdp-placeholder-content">
                  <Users size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Stateroom Policy Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><Users size={13} /><span>Same Package Required</span></div>
              </div>
              <div className="ccdp-stateroom-note">
                <AlertCircle size={16} />
                <span>If someone does not drink alcohol, the available non-alcoholic package options and applicable rules should be confirmed for the booking before purchase.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL INCLUDED ── */}
      <section className="ccdp-allincluded-section">
        <div className="ccdp-allincluded-container">
          <span className="ccdp-eyebrow">ALL INCLUDED</span>
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>Celebrity Drink Packages and All Included</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          <div className="ccdp-allincluded-grid">
            <div className="ccdp-allincluded-info">
              <p className="ccdp-allincluded-intro">
                Celebrity's All Included fare is different from simply purchasing a beverage package. For eligible standard stateroom bookings, Celebrity currently describes All Included as bundling the Classic Drinks Package and Basic Wi-Fi into the cruise fare.
              </p>
              <ul className="ccdp-allincluded-list">
                <li><CheckCircle size={15} /><span>Classic Drinks Package</span></li>
                <li><CheckCircle size={15} /><span>Basic Wi-Fi</span></li>
                <li><CheckCircle size={15} /><span>Eligible standard stateroom bookings</span></li>
              </ul>
            </div>
            <div className="ccdp-allincluded-card">
              <div className="ccdp-allincluded-head">
                <div className="ccdp-allincluded-icon"><Gift size={22} /></div>
                <h3 className="ccdp-allincluded-title">All Included Benefits</h3>
              </div>
              <p className="ccdp-allincluded-text">
                Celebrity advertises All Included as a way to save on its popular Classic Drinks and Basic Wi-Fi packages. This means that if you are already considering Classic Drinks and Wi-Fi, it is worth comparing the Cruise Only and All Included fares before purchasing the beverage package separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE RETREAT ── */}
      <section className="ccdp-retreat-section">
        <div className="ccdp-retreat-container">
          <div className="ccdp-retreat-grid">
            <div className="ccdp-retreat-image-col">
              <div className="ccdp-retreat-image-frame ccdp-placeholder-frame" style={{ height: '320px' }}>
                <div className="ccdp-placeholder-content">
                  <Crown size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">The Retreat Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><Crown size={13} /><span>The Retreat</span></div>
              </div>
            </div>
            <div className="ccdp-retreat-text-col">
              <span className="ccdp-eyebrow">THE RETREAT</span>
              <h2 className="ccdp-section-heading">Celebrity Drink Packages and The Retreat</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-retreat-lead">
                Guests staying in The Retreat have a different level of included benefits.
              </p>
              <p className="ccdp-retreat-body">
                Celebrity's current materials state that Retreat guests receive enhanced benefits including <strong>Premium Drinks</strong> and Premium Wi-Fi.
              </p>
              <p className="ccdp-retreat-body">
                That means a Retreat guest should not automatically compare their beverage benefits with a standard Classic-package booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE CALCULATION ── */}
      <section className="ccdp-value-section">
        <div className="ccdp-value-container">
          <span className="ccdp-eyebrow">VALUE</span>
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>Is a Celebrity Drink Package Worth It?</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          <div className="ccdp-value-grid">
            <div className="ccdp-value-card ccdp-value-good">
              <h3 className="ccdp-value-card-title">A Package May Make Sense If You:</h3>
              <ul className="ccdp-value-list">
                {['Drink several beverages every day', 'Like cocktails or wine by the glass', 'Regularly drink specialty coffee', 'Want bottled water throughout the day', 'Prefer predictable beverage spending', 'Want to avoid tracking individual drink charges', 'Plan to spend significant time onboard'].map((item, idx) => (
                  <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="ccdp-value-card ccdp-value-poor">
              <h3 className="ccdp-value-card-title">A Package May Not Make Sense If You:</h3>
              <ul className="ccdp-value-list">
                {['Drink very little', 'Prefer complimentary water and beverages', 'Spend most days ashore', 'Do not drink alcohol and rarely buy premium non-alcoholic beverages', 'Would not normally spend enough on drinks to recover the package cost'].map((item, idx) => (
                  <li key={idx}><XCircle size={14} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULATION EXAMPLE ── */}
      <section className="ccdp-calculation-section">
        <div className="ccdp-calculation-container">
          <div className="ccdp-calculation-grid">
            <div className="ccdp-calculation-text-col">
              <span className="ccdp-eyebrow">CALCULATION</span>
              <h2 className="ccdp-section-heading">How to Calculate Whether a Celebrity Drink Package Is Worth It</h2>
              <div className="ccdp-heading-separator-bar"></div>
              <p className="ccdp-calculation-lead">
                Use this simple calculation:
              </p>
              <div className="ccdp-calculation-formula">
                <p className="ccdp-formula-text">
                  <strong>Daily package cost</strong> ÷ <strong>expected number of chargeable drinks</strong> = <strong>break-even cost per drink</strong>
                </p>
              </div>
              <p className="ccdp-calculation-body">
                Then consider: cocktails, wine, beer, coffee, bottled water, soda, mocktails, and other beverages you would otherwise buy. For a multi-day cruise, multiply the realistic daily spend by the number of cruise days.
              </p>
            </div>
            <div className="ccdp-calculation-image-col">
              <div className="ccdp-calculation-image-frame ccdp-placeholder-frame" style={{ height: '260px' }}>
                <div className="ccdp-placeholder-content">
                  <DollarSign size={48} className="ccdp-placeholder-icon" />
                  <span className="ccdp-placeholder-text">Calculation Image Placeholder</span>
                </div>
                <div className="ccdp-image-badge"><DollarSign size={13} /><span>Calculate Value</span></div>
              </div>
              <div className="ccdp-calculation-example">
                <h4 className="ccdp-example-title">Example</h4>
                <p className="ccdp-example-text">
                  Suppose your expected daily beverage spending without a package is: 2 cocktails, 1 glass of wine, 1 specialty coffee, and 2 bottled waters. Estimate what those individual drinks would cost on your sailing. Then compare that total with the actual package price shown in your Cruise Planner.
                </p>
                <p className="ccdp-example-note">The important number is not how many drinks you could consume. It is how much you would normally spend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="ccdp-tips-section">
        <div className="ccdp-tips-container">
          <span className="ccdp-eyebrow">TIPS</span>
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>Celebrity Drink Package Tips for <br /> First-Time Cruisers</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          <div className="ccdp-tips-grid">
            {[
              { title: 'Check the current package price', desc: 'Do not rely on old blog posts or screenshots. Celebrity changes promotional pricing and package offerings.' },
              { title: 'Check the beverage threshold', desc: 'A drink above your package limit can result in a separate charge for the difference.' },
              { title: 'Compare Classic with Premium', desc: 'If most of your preferred drinks fall within Classic, Premium may not be necessary.' },
              { title: 'Check the same-stateroom rule', desc: 'Adults sharing a stateroom generally need the same package level.' },
              { title: 'Look for All Included pricing', desc: 'If you also want Wi-Fi, compare the All Included fare with purchasing the beverage package separately.' },
              { title: 'Check regional rules', desc: 'Package limits and pricing can differ by departure market.' }
            ].map((tip, idx) => (
              <div key={idx} className="ccdp-tip-card">
                <div className="ccdp-tip-head">
                  <span className="ccdp-tip-number">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="ccdp-tip-title">{tip.title}</h3>
                </div>
                <p className="ccdp-tip-desc">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY TAKEAWAYS ── */}
      <section className="ccdp-takeaways-section">
        <div className="ccdp-takeaways-container">
          <h2 className="ccdp-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
          <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          <div className="ccdp-takeaways-grid">
            {ccdpKeyTakeaways.map((item, idx) => (
              <div key={idx} className="ccdp-takeaway-card">
                <div className="ccdp-takeaway-number">0{idx + 1}</div>
                <p className="ccdp-takeaway-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
      <section className="ccdp-expert-insight-section">
        <div className="ccdp-expert-insight-container">
          <div className="ccdp-expert-portrait-panel">
            <div className="ccdp-expert-img-frame">
              <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Expert" className="ccdp-expert-img" />
              <div className="ccdp-expert-img-overlay"></div>
              <span className="ccdp-expert-badge">EXPERT ADVISOR</span>
            </div>
            <div className="ccdp-expert-stats-strip">
              <div className="ccdp-expert-stat-box">
                <div className="ccdp-expert-stat-num">40+</div>
                <div className="ccdp-expert-stat-lbl">Years Experience</div>
              </div>
              <div className="ccdp-expert-stat-box">
                <div className="ccdp-expert-stat-num">121+</div>
                <div className="ccdp-expert-stat-lbl">Countries Visited</div>
              </div>
            </div>
          </div>
          <div className="ccdp-expert-content-panel">
            <div className="ccdp-expert-eyebrow-row">
              <Sparkles size={16} />
              <span className="ccdp-eyebrow">MEET THE CEO</span>
            </div>
            <h2 className="ccdp-expert-heading">Insight from Angela Hughes</h2>
            <div className="ccdp-expert-separator"></div>
            <div className="ccdp-expert-quote-card">
              <span className="ccdp-expert-quote-mark">“</span>
              <p className="ccdp-expert-quote-text">
                Celebrity's drink packages give travelers flexibility to choose what fits their vacation style. The key is understanding your own drinking habits and comparing that against the package price — not just assuming that 'all-inclusive' automatically means 'better value.'
              </p>
            </div>
            <div className="ccdp-expert-priorities">
              <h5 className="ccdp-priorities-title">What Makes Celebrity's Drink Packages Stand Out:</h5>
              <div className="ccdp-expert-pills">
                {['Classic, Premium & Zero Proof Options', 'Clear Price Thresholds', 'Convenient Upgrade Path', 'All Included Bundling', 'The Retreat Benefits', 'Perfect Day at CocoCay Compatibility'].map(pill => (
                  <span key={pill} className="ccdp-expert-pill">
                    <CheckCircle size={12} />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="ccdp-expert-footer-bio">
              <p className="ccdp-expert-bio">
                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ccdp-faq-section">
        <div className="ccdp-faq-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="ccdp-section-heading">Frequently Asked Questions</h2>
            <div className="ccdp-heading-separator-bar ccdp-bar-centered"></div>
          </div>
          <div className="ccdp-faq-list-wrapper">
            {ccdpFaqs.map((faq, index) => (
              <div
                key={index}
                className="ccdp-faq-item"
                onClick={() => ccdpToggleFaq(index)}
              >
                <div className="ccdp-faq-question-row">
                  <span>{faq.question}</span>
                  <span className="ccdp-faq-toggle-icon">{ccdpActiveFaq === index ? '−' : '+'}</span>
                </div>
                {ccdpActiveFaq === index && (
                  <p className="ccdp-faq-answer-text">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ccdp-cta-section">
        <div className="ccdp-cta-aurora-glow"></div>
        <div className="ccdp-cta-crystal ccdp-cta-crystal-1"></div>
        <div className="ccdp-cta-crystal ccdp-cta-crystal-2"></div>
        <div className="ccdp-cta-crystal ccdp-cta-crystal-3"></div>
        <div className="ccdp-cta-grid-lines"></div>

        <div className="ccdp-cta-content">
          <div className="ccdp-cta-compass-ring">
            <Compass size={28} />
          </div>
          <span className="ccdp-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
          <h2 className="ccdp-cta-title">Ready to Book Your Celebrity Cruise?</h2>
          <div className="ccdp-cta-bar"></div>
          <p className="ccdp-cta-subtitle">
            Planning a Celebrity cruise? Check the current Classic, Premium and Zero Proof prices for your specific sailing, then compare the package cost with what you realistically expect to spend on drinks each day. If you also want Wi-Fi, compare the total with Celebrity's All Included fare before booking.
          </p>
          <div className="ccdp-cta-actions">
            <Link to="/contact" className="ccdp-cta-primary-btn">
              <Phone size={18} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} className="ccdp-cta-btn-arrow" />
            </Link>
            <Link to="/celebrity-cruises" className="ccdp-cta-secondary-btn">
              <LayoutList size={18} />
              <span>Explore Celebrity Cruises</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CelebrityDrinkPackages