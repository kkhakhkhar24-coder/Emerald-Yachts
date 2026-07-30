import Navbar from '../../components/Navbar/Navbar'
import './BestLuxuryExpeditionCruises.css'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { Anchor, ArrowRight, Binoculars, CalendarDays, Check, Compass, Phone, Sparkles } from 'lucide-react'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

const heroImages = [
    'https://placehold.co/2200x1200/274472/ffffff?text=Hero+Image+1',
    'https://placehold.co/2200x1200/274472/ffffff?text=Hero+Image+2',
    'https://placehold.co/2200x1200/274472/ffffff?text=Hero+Image+3'
]
const comforts = ['Spacious luxury suites', 'Personalized butler service', 'Gourmet dining', 'Premium beverages', 'Small expedition ships', 'Zodiac excursions', 'Expert naturalists', 'Destination-focused experiences', 'Wellness facilities', 'All-inclusive amenities']
const destinations = [
    ['Antarctica', 'Frozen wilderness, towering icebergs, and penguin colonies.', 'https://placehold.co/800x600/274472/ffffff?text=Antarctica'],
    ['Arctic & Svalbard', 'Polar bears, sea ice, and dramatic Arctic light.', 'https://placehold.co/800x600/274472/ffffff?text=Arctic'],
    ['Greenland', 'Dramatic fjords, glaciers, and remote coastal villages.', 'https://placehold.co/800x600/274472/ffffff?text=Greenland'],
    ['Iceland', 'Volcanic coastlines, waterfalls, and northern light.', 'https://placehold.co/800x600/274472/ffffff?text=Iceland'],
    ["Galápagos Islands", 'Wildlife-rich islands, volcanic landscapes, and endemic species.', 'https://placehold.co/800x600/274472/ffffff?text=Galapagos'],
    ['Alaska', 'Whales, forests, glaciers, and rugged wilderness.', 'https://placehold.co/800x600/274472/ffffff?text=Alaska'],
    ['Norwegian Fjords', 'Steep cliffs, quiet villages, and Arctic water.', 'https://placehold.co/800x600/274472/ffffff?text=Norwegian+Fjords'],
    ['Kimberley (Australia)', 'Remote gorges, tidal rivers, and ancient culture.', 'https://placehold.co/800x600/274472/ffffff?text=Kimberley'],
    ['South Pacific', 'Blue-water islands, reefs, and living culture.', 'https://placehold.co/800x600/274472/ffffff?text=South+Pacific'],
    ['Patagonia', 'Glaciers, granite peaks, and southern wilderness.', 'https://placehold.co/800x600/274472/ffffff?text=Patagonia'],
    ['Amazon River', 'Rainforest biodiversity from a smaller, slower perspective.', 'https://placehold.co/800x600/274472/ffffff?text=Amazon+River'],
    ["Canada's Arctic", 'Austere coastlines, sea ice, and remarkable wildlife.', 'https://placehold.co/800x600/274472/ffffff?text=Canada+Arctic']
]
const lines = [
    ['Scenic Cruises', 'Scenic Eclipse and Scenic Eclipse II combine ultra-luxury accommodations with helicopters, the Scenic Neptune™ submersible, Discovery Excursions, butler service, and all-inclusive luxury.', 'https://placehold.co/1200x800/274472/ffffff?text=Scenic+Cruises'],
    ['Silversea Expeditions', 'Silversea offers elegant expedition voyages featuring luxurious suites, exceptional cuisine, personalized service, and expert-led exploration across the globe.', 'https://placehold.co/1200x800/1e3a5f/ffffff?text=Silversea+Expeditions'],
    ['Seabourn Expeditions', 'Purpose-built expedition ships deliver luxury accommodations, fine dining, expedition specialists, and immersive destination experiences.', 'https://placehold.co/1200x800/1a2f4a/ffffff?text=Seabourn+Expeditions'],
    ['Ponant Explorations', 'Ponant blends French elegance with expedition cruising, offering intimate ships, refined cuisine, and unique itineraries worldwide.', 'https://placehold.co/1200x800/0f2444/ffffff?text=Ponant+Explorations'],
    ['Lindblad Expeditions', 'Partnering with National Geographic, Lindblad emphasizes wildlife, conservation, and educational exploration.', 'https://placehold.co/1200x800/162d50/ffffff?text=Lindblad+Expeditions'],
    ['HX (Hurtigruten Expeditions)', 'HX combines expedition expertise, sustainability initiatives, and scientific exploration with comfortable accommodations.', 'https://placehold.co/1200x800/0c2340/ffffff?text=HX+Hurtigruten']
]
const wildlife = ['Penguins', 'Polar bears', 'Whales', 'Dolphins', 'Seals', 'Sea lions', 'Puffins', 'Albatross', 'Sea turtles', 'Tropical bird species']
const activities = ['Zodiac cruising', 'Guided shore landings', 'Wildlife observation', 'Kayaking', 'Hiking', 'Photography expeditions', 'Snorkeling', 'Polar plunges', 'Helicopter excursions', 'Submarine experiences']
const onboard = ['Spacious ocean-view suites', 'Gourmet restaurants', 'Premium wines and beverages', 'Butler service', 'Luxury spa facilities', 'Fitness center', 'Observation lounges', 'Educational lectures', 'Concierge services', 'Elegant public spaces']
const seasons = [['Antarctica', 'November to March'], ['Arctic', 'May to September'], ['Alaska', 'May to September'], ['Galápagos', 'Year-round'], ['Kimberley', 'May to September'], ['Iceland', 'June to August'], ['Norwegian Fjords', 'May to September']]
const choosing = ['Destination', 'Cruise line', 'Ship size', 'Included excursions', 'Luxury level', 'Suite options', 'Expedition activities', 'Wildlife interests', 'Travel season', 'Budget']
const worthIt = ['Access to remote destinations', 'Small-group exploration', 'Expert expedition teams', 'Luxury accommodations', 'Exceptional dining', 'Wildlife encounters', 'Educational experiences', 'Personalized service', 'Exclusive adventures']
const love = ['Extraordinary destinations', 'Small luxury expedition ships', 'Exceptional accommodations', 'Personalized service', 'Expert expedition teams', 'Incredible wildlife experiences', 'Luxury dining', 'Unique adventure activities', 'Exclusive shore excursions', 'Outstanding onboard amenities']
const considerations = ['Luxury expedition cruises generally cost more than traditional cruises.', 'Itineraries depend on weather and environmental conditions.', 'Some excursions require moderate physical activity.', 'Popular voyages often sell out well in advance.']
const planning = ["Compare the world's leading luxury expedition cruise lines", 'Choose the ideal destination and travel season', 'Select the perfect suite', 'Explain included and optional expedition experiences', 'Reserve exclusive luxury itineraries', 'Arrange flights and pre- or post-cruise accommodations', 'Secure exclusive offers', 'Provide personalized concierge service']
const faqs = [
    ['What is a luxury expedition cruise?', 'A luxury expedition cruise combines exploration of remote destinations with premium accommodations, personalized service, gourmet dining, and expert-led excursions.'],
    ['Which cruise line offers the best luxury expedition cruises?', 'Leading options include Scenic Cruises, Silversea Expeditions, Seabourn Expeditions, Ponant, Lindblad Expeditions, and HX, depending on your travel style and destination.'],
    ['Where do luxury expedition cruises travel?', 'Popular destinations include Antarctica, the Arctic, Greenland, Galápagos, Alaska, Kimberley, Iceland, Patagonia, and the South Pacific.'],
    ['Are luxury expedition cruises all-inclusive?', 'Many luxury expedition cruise lines include accommodations, dining, premium beverages, guided excursions, gratuities, and expedition equipment, although inclusions vary by cruise line.'],
    ['Are Zodiac excursions included?', 'Most luxury expedition cruises include Zodiac cruises and guided landings as part of the itinerary.'],
    ['What wildlife can I expect to see?', 'Depending on the destination, guests may see penguins, whales, polar bears, seals, dolphins, sea turtles, seabirds, and many other native species.'],
    ['Is Scenic Eclipse considered a luxury expedition ship?', 'Yes. Scenic Eclipse is widely recognized as one of the world\'s premier ultra-luxury expedition yachts, offering butler service, helicopters, a submersible, and all-inclusive luxury.'],
    ['When is the best time for an expedition cruise?', 'The best season depends on the destination. Polar regions are generally explored during their summer months, while destinations such as the Galápagos are suitable year-round.'],
    ['Are luxury expedition cruises suitable for first-time cruisers?', 'Yes. Many first-time cruisers choose luxury expedition cruises because they combine adventure with premium comfort and expert guidance.'],
    ['What should I pack?', 'Pack destination-appropriate clothing, waterproof outerwear, sturdy walking shoes, binoculars, sunscreen, and a camera for wildlife and scenic photography.'],
    ['Are luxury expedition cruises worth the price?', 'Many travelers believe the combination of exclusive destinations, expert-led experiences, luxury accommodations, and personalized service provides exceptional value.'],
    ['Why choose Trips & Ships Luxury Travel?', 'Our experts provide personalized recommendations, exclusive offers, concierge-level planning, and ongoing support to help you choose the perfect luxury expedition cruise.']
]
const schema = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'WebPage', '@id': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises', 'name': 'Best Luxury Expedition Cruises', 'url': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises', 'description': 'Expert guide to the best luxury expedition cruises, featuring top cruise lines, remote destinations, luxury ships, and unforgettable adventure experiences.', 'inLanguage': 'en-US', 'publisher': { '@id': 'https://www.tripsshipsluxurytravel.com/#organization' }, 'mainEntity': { '@type': 'Article', '@id': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises#article' } },
        { '@type': 'Organization', '@id': 'https://www.tripsshipsluxurytravel.com/#organization', 'name': 'Trips & Ships Luxury Travel', 'url': 'https://www.tripsshipsluxurytravel.com' },
        { '@type': 'TravelAgency', '@id': 'https://www.tripsshipsluxurytravel.com/#travelagency', 'name': 'Trips & Ships Luxury Travel', 'url': 'https://www.tripsshipsluxurytravel.com', 'description': 'Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, river cruises, and personalized travel planning.' },
        { '@type': 'Person', '@id': 'https://www.tripsshipsluxurytravel.com/#angela-hughes', 'name': 'Angela Hughes', 'jobTitle': 'CEO', 'worksFor': { '@id': 'https://www.tripsshipsluxurytravel.com/#travelagency' } },
        { '@type': 'Article', '@id': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises#article', 'headline': 'Best Luxury Expedition Cruises', 'url': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises', 'description': 'Expert guide to the world\'s best luxury expedition cruises, including top cruise lines, destinations, ships, wildlife encounters, and planning advice.', 'image': 'https://www.tripsshipsluxurytravel.com/images/best-luxury-expedition-cruises.jpg', 'author': { '@id': 'https://www.tripsshipsluxurytravel.com/#angela-hughes' }, 'publisher': { '@id': 'https://www.tripsshipsluxurytravel.com/#organization' }, 'mainEntityOfPage': { '@id': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises' } },
        { '@type': 'Service', 'name': 'Luxury Expedition Cruise Planning', 'provider': { '@id': 'https://www.tripsshipsluxurytravel.com/#travelagency' }, 'serviceType': 'Luxury Expedition Cruise Consulting', 'description': 'Expert planning and personalized advice for luxury expedition cruises worldwide.' },
        { '@type': 'BreadcrumbList', 'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.tripsshipsluxurytravel.com' }, { '@type': 'ListItem', 'position': 2, 'name': 'Expedition Cruises', 'item': 'https://www.tripsshipsluxurytravel.com/expedition-cruises' }, { '@type': 'ListItem', 'position': 3, 'name': 'Best Luxury Expedition Cruises', 'item': 'https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises' }] },
        { '@type': 'FAQPage', 'mainEntity': faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }
    ]
}

function BestLuxuryExpeditionCruises() {
    const [hero, setHero] = useState(0)
    const [luxeActiveFaq, setLuxeActiveFaq] = useState(null)
    const [activeLine, setActiveLine] = useState(0)
    const luxeToggleFaq = i => setLuxeActiveFaq(luxeActiveFaq === i ? null : i)

    useEffect(() => {
        const timer = setInterval(() => {
            setHero(value => (value + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const list = (items, Icon = Check) => items.map(item => (
        <div className="luxe-list-row" key={item}><Icon size={16} /><span>{item}</span></div>
    ))

    return (
        <main className="luxe-page">
            <Helmet>
                <title>Best Luxury Expedition Cruises | Expert Guide & Reviews</title>
                <meta name="title" content="Best Luxury Expedition Cruises | Expert Guide & Reviews" />
                <meta name="description" content="Explore the best luxury expedition cruises to Antarctica, the Arctic, Galápagos, Alaska, Kimberley, and beyond. Compare the world's top luxury expedition cruise lines, ships, destinations, and experiences." />
                <meta name="keywords" content="Best Luxury Expedition Cruises, luxury expedition cruises, best luxury expedition cruise lines, ultra luxury expedition cruises, luxury adventure cruises, Scenic Eclipse, Silversea Expeditions, Seabourn Venture, Ponant luxury cruises, expedition yacht cruises" />
                <link rel="canonical" href="https://www.tripsshipsluxurytravel.com/best-luxury-expedition-cruises" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${hero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Ultra-luxury adventure travel · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">Best Luxury Expedition Cruises</h1>
                    <p className="medi-hero-subtitle-text">
                        Explore the world&rsquo;s most remote destinations with exceptional accommodations, personalized service, and expert-led discovery.
                    </p>
                </div>
            </section>

            {/* ── THE COMPLETE GUIDE ── */}
            <section className="luxe-intro-section">
                <div className="luxe-intro-container">
                    <div className="luxe-intro-grid">
                        <div className="luxe-intro-text-col">
                            <span className="luxe-eyebrow">THE COMPLETE GUIDE</span>
                            <h2 className="medi-section-heading">Which Are the Best Luxury Expedition Cruises?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p>Luxury expedition cruises combine world-class accommodations, personalized service, and fine dining with unforgettable adventures to some of the planet&rsquo;s most remote destinations. Unlike traditional cruises, these voyages focus on exploration, wildlife, and immersive experiences while maintaining the comfort and elegance of a luxury hotel.</p>
                            <p>Today&rsquo;s purpose-built expedition ships feature spacious suites, gourmet restaurants, expert expedition teams, Zodiac landings, wellness facilities, and innovative technology such as helicopters and submarines on select vessels.</p>
                            <p>Whether you&rsquo;re exploring Antarctica&rsquo;s frozen wilderness, the wildlife-rich Gal&aacute;pagos Islands, Greenland&rsquo;s dramatic fjords, or Australia&rsquo;s Kimberley coast, the best luxury expedition cruises deliver extraordinary journeys unlike any other form of travel.</p>
                        </div>
                        <div className="luxe-intro-image-col">
                            <div className="luxe-image-frame">
                                <img src="https://placehold.co/800x600/274472/ffffff?text=Luxury+Expedition+Cruise" alt="Luxury expedition cruise destination" className="luxe-frame-img" />
                                <div className="luxe-frame-overlay"></div>
                                <div className="luxe-image-badge">
                                    <Anchor size={13} />
                                    <span>The complete guide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS A LUXURY EXPEDITION CRUISE ── */}
            <section className="luxe-different-section">
                <div className="luxe-different-container">
                    <div className="luxe-different-grid">
                        <div className="luxe-different-text-col">
                            <span className="luxe-eyebrow luxe-eyebrow-light">ADVENTURE WITHOUT COMPROMISE</span>
                            <h2 className="medi-section-heading luxe-white-heading">What Is a Luxury Expedition Cruise?</h2>
                            <div className="medi-heading-separator-bar luxe-separator-white"></div>
                            <p className="luxe-different-intro">Luxury expedition cruises are designed for travelers who want to experience remote destinations without sacrificing comfort. Every voyage blends adventure with exceptional hospitality and personalized service.</p>
                        </div>
                        <div className="luxe-different-list-col">
                            {list(comforts)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST DESTINATIONS ── */}
            <section className="luxe-destinations-section">
                <div className="luxe-destinations-container">
                    <div className="luxe-destinations-header">
                        <span className="luxe-eyebrow">REMOTE BY DESIGN</span>
                        <h2 className="medi-section-heading">Best Luxury Expedition Cruise Destinations</h2>
                        <div className="medi-heading-separator-bar" style={{ margin: '0 auto 20px' }}></div>
                        <p className="luxe-destinations-intro">Luxury expedition cruises visit some of the world&rsquo;s most spectacular locations. Each destination offers unique wildlife, breathtaking scenery, and unforgettable exploration opportunities.</p>
                    </div>
                    <div className="luxe-destinations-grid">
                        {destinations.map(([name, copy], index) => (
                            <article className="luxe-destination-card" key={name}>
                                {/* Image placeholder — replace src with real image path when available */}
                                <div className="luxe-dest-img-placeholder">
                                    <span className="luxe-dest-img-label">{name}</span>
                                </div>
                                <div className="luxe-dest-card-body">
                                    <span className="luxe-destination-card-num">0{index + 1}</span>
                                    <h3>{name}</h3>
                                    <p>{copy}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TOP CRUISE LINES ── */}
            <section className="luxe-lines-section">
                <div className="luxe-lines-container">
                    <div className="luxe-lines-header">
                        <span className="luxe-eyebrow luxe-eyebrow-light">THE SHORTLIST</span>
                        <h2 className="medi-section-heading luxe-white-heading">Top Luxury Expedition Cruise Lines</h2>
                        <div className="medi-heading-separator-bar luxe-separator-white" style={{ margin: '0 auto 16px' }}></div>
                        <p className="luxe-lines-intro">Several cruise lines are recognized for delivering exceptional luxury expedition experiences.</p>
                    </div>
                    <div className="luxe-lines-body">
                        {/* Left: clickable list (Names only) */}
                        <div className="luxe-lines-list">
                            {lines.map(([name], index) => (
                                <button
                                    key={name}
                                    className={`luxe-line-row ${activeLine === index ? 'is-active' : ''}`}
                                    onClick={() => setActiveLine(index)}
                                >
                                    <span className="luxe-line-row-num">0{index + 1}</span>
                                    <div className="luxe-line-row-body">
                                        <h3>{name}</h3>
                                    </div>
                                    <ArrowRight size={16} className="luxe-line-row-arrow" />
                                </button>
                            ))}
                        </div>
                        {/* Right: sticky panel with smaller image box & description text below it */}
                        <div className="luxe-lines-image-panel">
                            <div className="luxe-lines-img-wrap">
                                {lines.map(([name, , img], index) => (
                                    <img
                                        key={name}
                                        src={img}
                                        alt={`${name} luxury expedition cruise`}
                                        className={`luxe-lines-img ${activeLine === index ? 'is-visible' : ''}`}
                                    />
                                ))}
                                <div className="luxe-lines-img-overlay"></div>
                                <div className="luxe-lines-img-badge">
                                    <span>{lines[activeLine][0]}</span>
                                </div>
                            </div>
                            <div className="luxe-lines-info-card">
                                <h3>{lines[activeLine][0]}</h3>
                                <p>{lines[activeLine][1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC ECLIPSE ── */}
            <section className="luxe-eclipse-section">
                <div className="luxe-eclipse-container">
                    <div className="luxe-eclipse-grid">
                        <div className="luxe-eclipse-image-col">
                            <div className="luxe-image-frame">
                                <img src="https://placehold.co/1600x1000/274472/ffffff?text=Scenic+Eclipse" alt="Scenic Eclipse luxury expedition yacht in Antarctica" className="luxe-frame-img" />
                                <div className="luxe-frame-overlay"></div>
                                <div className="luxe-image-badge">
                                    <Sparkles size={13} />
                                    <span>Featured expedition yacht</span>
                                </div>
                            </div>
                        </div>
                        <div className="luxe-eclipse-text-col">
                            <span className="luxe-eyebrow">ULTRA-LUXURY INNOVATION</span>
                            <h2 className="medi-section-heading">Scenic Eclipse</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="luxe-eclipse-lead">Scenic Eclipse is widely regarded as one of the most advanced luxury expedition ships ever built.</p>
                            <p className="luxe-eclipse-body">Its combination of luxury and expedition capabilities places Scenic Eclipse among the world&rsquo;s leading expedition yachts.</p>
                            <div className="luxe-eclipse-features">
                                {list(['Ultra-luxury suites', 'Personal butler service', 'Up to 10 dining experiences', 'Scenic Neptune&trade; submersible', 'Helicopter experiences', 'Scenic Discovery Team', 'Zodiac excursions', 'Spa and wellness center', 'Premium all-inclusive experience'])}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WILDLIFE & ACTIVITIES ── */}
            <section className="luxe-wildlife-section">
                <div className="luxe-wildlife-container">
                    <div className="luxe-wildlife-grid">
                        <div className="luxe-wildlife-text-col">
                            <span className="luxe-eyebrow">INCREDIBLE WILDLIFE EXPERIENCES</span>
                            <h2 className="medi-section-heading">Observe wildlife in its natural habitat.</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="luxe-wildlife-intro">Expert guides help guests better understand local ecosystems and wildlife conservation.</p>
                        </div>
                        <div className="luxe-wildlife-list-col">
                            <h3 className="luxe-list-label">Wildlife you may encounter</h3>
                            {list(wildlife, Binoculars)}
                        </div>
                        <div className="luxe-wildlife-list-col">
                            <h3 className="luxe-list-label">Activities included</h3>
                            {list(activities, Compass)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD EXPERIENCE ── */}
            <section className="luxe-onboard-section">
                <div className="luxe-onboard-container">
                    <div className="luxe-onboard-grid">
                        <div className="luxe-onboard-text-col">
                            <span className="luxe-eyebrow luxe-eyebrow-light">FIVE-STAR COMFORT</span>
                            <h2 className="medi-section-heading luxe-white-heading">Luxury Onboard Experience</h2>
                            <div className="medi-heading-separator-bar luxe-separator-white"></div>
                            <p className="luxe-onboard-intro">Despite visiting remote regions, luxury expedition ships provide exceptional onboard amenities. Every aspect of the journey is designed for maximum comfort and relaxation.</p>
                        </div>
                        <div className="luxe-onboard-list-col">
                            {list(onboard, Anchor)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST TIME ── */}
            <section className="luxe-seasons-section">
                <div className="luxe-seasons-container">
                    <div className="luxe-seasons-header">
                        <span className="luxe-eyebrow luxe-eyebrow-light">SEASONAL INTELLIGENCE</span>
                        <h2 className="medi-section-heading luxe-white-heading">Best Time for a Luxury Expedition Cruise</h2>
                        <div className="medi-heading-separator-bar luxe-separator-white medi-bar-centered"></div>
                        <p className="luxe-seasons-intro">The ideal travel season depends on your chosen destination. Choosing the right season improves wildlife viewing opportunities and weather conditions.</p>
                    </div>
                    <div className="luxe-seasons-grid">
                        {seasons.map(([place, season]) => (
                            <div key={place} className="luxe-season-card">
                                <div className="luxe-season-card-icon">
                                    <CalendarDays size={18} />
                                </div>
                                <h3>{place}</h3>
                                <p>{season}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE ── */}
            <section className="luxe-choose-section">
                <div className="luxe-choose-container">
                    <div className="luxe-choose-grid">
                        <div className="luxe-choose-text-col">
                            <span className="luxe-eyebrow">A BETTER MATCH</span>
                            <h2 className="medi-section-heading">How to Choose the Best Luxury Expedition Cruise</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p>When comparing luxury expedition cruises, consider destination, cruise line, ship size, included excursions, luxury level, suite options, expedition activities, wildlife interests, travel season, and budget.</p>
                            <p>An experienced luxury travel advisor can help identify the itinerary that best matches your travel preferences.</p>
                            <Link to="/contact" className="luxe-button">Build my shortlist <ArrowRight size={16} /></Link>
                        </div>
                        <div className="luxe-choose-criteria-col">
                            {choosing.map((item, index) => (
                                <div key={item} className="luxe-choose-criterion">
                                    <span className="luxe-choose-criterion-num">0{index + 1}</span>
                                    <p>{item}</p>
                                    <Check size={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WORTH IT ── */}
            <section className="luxe-value-section">
                <div className="luxe-value-container">
                    <div className="luxe-value-grid">
                        <div className="luxe-value-text-col">
                            <span className="luxe-eyebrow luxe-eyebrow-light">VALUE BEYOND THE FARE</span>
                            <h2 className="medi-section-heading luxe-white-heading">Are Luxury Expedition Cruises Worth It?</h2>
                            <div className="medi-heading-separator-bar luxe-separator-white"></div>
                            <p>Luxury expedition cruises provide experiences unavailable on traditional cruises. For travelers seeking meaningful exploration combined with five-star comfort, luxury expedition cruising offers outstanding value.</p>
                        </div>
                        <div className="luxe-value-benefits-col">
                            <h3 className="luxe-value-benefits-title">Key benefits</h3>
                            {list(worthIt)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERT REVIEW ── */}
            <section className="luxe-review-section">
                <div className="luxe-review-container">
                    <div className="luxe-review-grid">
                        <div className="luxe-review-text-col">
                            <span className="luxe-eyebrow luxe-eyebrow-light">OUR EXPERT REVIEW</span>
                            <h2 className="medi-section-heading luxe-white-heading">Adventure travel at its highest standard.</h2>
                            <div className="medi-heading-separator-bar luxe-separator-white"></div>
                            <p>After reviewing the world&rsquo;s leading luxury expedition cruise lines, we believe these voyages represent the highest standard of adventure travel.</p>
                            <p>Overall, the <strong>Best Luxury Expedition Cruises</strong> combine exploration, comfort, education, and world-class service to create unforgettable travel experiences.</p>
                            <div className="luxe-review-consider-wrap">
                                <h3 className="luxe-review-consider-label">Areas to Consider</h3>
                                <div className="luxe-review-consider-cards">
                                    {considerations.map((item, index) => (
                                        <div key={item} className="luxe-review-consider-card">
                                            <span className="luxe-review-consider-dot">{index + 1}</span>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="luxe-review-detail-col">
                            <h3 className="luxe-review-list-label">What We Love</h3>
                            {list(love)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK WITH US ── */}
            <section className="luxe-planning-section">
                <div className="luxe-planning-container">
                    <div className="luxe-planning-grid">
                        <div className="luxe-planning-text-col">
                            <span className="luxe-eyebrow">PLAN WITH CONFIDENCE</span>
                            <h2 className="medi-section-heading">Why Book with Trips &amp; Ships Luxury Travel?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p>Our expert guidance ensures every detail of your luxury expedition cruise is tailored to your travel goals.</p>
                        </div>
                        <div className="luxe-planning-steps-col">
                            {planning.map((item, index) => (
                                <div key={item} className="luxe-planning-step">
                                    <span className="luxe-planning-step-num">0{index + 1}</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="luxe-expert-insight-section">
                <div className="luxe-expert-insight-container">

                    <div className="luxe-expert-portrait-panel">
                        <div className="luxe-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Expedition Travel Designer" />
                        </div>
                        <div className="luxe-expert-stats-strip">
                            <div className="luxe-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Designing Travel</p>
                            </div>
                            <div className="luxe-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Traveled</p>
                            </div>
                        </div>
                    </div>

                    <div className="luxe-expert-content-panel">
                        <span className="luxe-eyebrow">MEET THE CEO</span>
                        <h2 className="medi-section-heading">Insight from Angela Hughes</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <p className="luxe-expert-quote">
                            "Expedition cruising is not just a vacation—it is a transformation. True luxury is having the access to step ashore on polar ice and untouched islands while returning to an all-suite sanctuary at the end of the day."
                        </p>

                        <div className="luxe-expert-priorities">
                            <h5>Travel Prioritization Matrix:</h5>
                            <div className="luxe-expert-pills">
                                {['Custom Zodiac Outings', 'Expert Naturalist Guides', 'Intimate Small-Ship Luxury', 'Remote Landing Access', 'Butler Services', 'Scientific Lectures'].map(pill => (
                                    <span key={pill} className="luxe-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="luxe-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the adventure cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="luxe-faq-section">
                <div className="luxe-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="luxe-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="luxe-faq-list-wrapper">
                        {faqs.map(([question, answer], index) => (
                            <div
                                key={question}
                                className="luxe-faq-item"
                                onClick={() => luxeToggleFaq(index)}
                            >
                                <div className="luxe-faq-question-row">
                                    <span>{question}</span>
                                    <span className="luxe-faq-toggle-icon">{luxeActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {luxeActiveFaq === index && (
                                    <p className="luxe-faq-answer-text">{answer}</p>
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
                    <h2 className="luxe-cta-title">Find Your <br /> Best Luxury Expedition Cruise</h2>
                    <div className="luxe-cta-bar"></div>
                    <p className="luxe-cta-subtitle">
                        Let&rsquo;s compare the destinations, seasons, ships, suites, and experiences that fit your travel goals.
                    </p>
                    <div className="luxe-cta-actions">
                        <Link to="/contact" className="luxe-cta-primary-btn">
                            <Phone size={18} />
                            <span>Speak with a luxury expedition specialist</span>
                            <ArrowRight size={16} className="luxe-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BestLuxuryExpeditionCruises
