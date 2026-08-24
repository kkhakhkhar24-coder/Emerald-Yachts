import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './ScenicGreenlandCruises.css'
import {
    Helmet
} from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import {
    Anchor, ArrowRight, Award, Binoculars, BookOpen, Check, CheckCircle, ChevronDown, Compass, Crown, Globe2, Heart, IceCreamBowl, MapPin, Mountain, Navigation, Phone, Ship, Sparkles, Star, Sun, Users, Waves, Utensils, Wind, Camera, ShipWheel, Gem, Globe
} from 'lucide-react'

const faqData = [
    { q: 'Where do Scenic Greenland Cruises sail?', a: 'Scenic itineraries visit destinations across Greenland, including Ilulissat, Disko Bay, East Greenland, Narsaq, and Prince Christian Sound. Many voyages also include Iceland.' },
    { q: 'Which ship sails to Greenland?', a: 'Scenic Greenland expeditions are operated aboard Scenic Eclipse, Scenic\'s ultra-luxury Discovery Yacht.' },
    { q: 'Are Scenic Greenland Cruises all-inclusive?', a: 'Yes. Most voyages include luxury accommodations, butler service, gourmet dining, premium beverages, Wi-Fi, gratuities, and expedition experiences.' },
    { q: 'What wildlife can I see in Greenland?', a: 'Depending on the season, guests may see whales, seals, Arctic birds, musk oxen, and other wildlife.' },
    { q: 'Does Scenic include Zodiac excursions?', a: 'Yes. Zodiac cruises and guided landings are key components of Scenic\'s Greenland expedition experience.' },
    { q: 'When is the best time to cruise Greenland?', a: 'Most Greenland cruises operate between June and September, offering ideal weather and wildlife viewing opportunities.' },
    { q: 'Does Scenic visit Ilulissat?', a: 'Yes. Many Greenland itineraries include Ilulissat and the spectacular UNESCO-listed Icefjord.' },
    { q: 'Are helicopter excursions available in Greenland?', a: 'Helicopter operations are subject to itinerary, regulations, weather, and operational conditions. Scenic notes that helicopter experiences may be available on select voyages where permitted.' },
    { q: 'Is butler service included?', a: 'Yes. Every Scenic suite includes personalized butler service.' },
    { q: 'What should I pack?', a: 'Warm layered clothing, waterproof outerwear, gloves, a hat, binoculars, sturdy walking shoes, and a camera are recommended.' },
    { q: 'Are Greenland cruises suitable for first-time expedition travelers?', a: 'Yes. Scenic combines expert guidance with luxury amenities, making Greenland an excellent introduction to expedition cruising.' },
    { q: 'Is Wi-Fi included?', a: 'Yes. Complimentary Wi-Fi is included on board.' },
    { q: 'How long are Scenic Greenland Cruises?', a: 'Itineraries typically range from about 8 to 16 days depending on the route and destinations.' },
    { q: 'Can I combine Greenland with Iceland?', a: 'Yes. Many Scenic itineraries include both Iceland and Greenland during the same voyage.' },
    { q: 'Why choose Scenic for Greenland?', a: 'Scenic combines six-star luxury, all-inclusive amenities, expert expedition leadership, and immersive Arctic exploration, creating one of the most comprehensive luxury Greenland cruise experiences available.' }
]

const destinations = [
    { name: 'Ilulissat', Icon: IceCreamBowl, text: 'One of Greenland\'s most iconic destinations, Ilulissat is famous for the UNESCO-listed Ilulissat Icefjord, where enormous icebergs drift from the Jakobshavn Glacier.', tags: ['Icefjord viewpoints', 'Boat excursions', 'Inuit heritage', 'Arctic scenery'] },
    { name: 'Disko Bay', Icon: Navigation, text: 'Renowned for spectacular floating icebergs and abundant marine wildlife. Travelers may see humpback whales, fin whales, seals, and seabirds.', tags: ['Whale watching', 'Photography', 'Arctic scenery'] },
    { name: 'East Greenland', Icon: Mountain, text: 'One of the most remote regions on Earth. Explore massive fjords, Arctic mountains, glaciers, small Inuit settlements, and untouched wilderness.', tags: ['Fjords', 'Glaciers', 'Wilderness', 'Expert insights'] },
    { name: 'Narsaq', Icon: Compass, text: 'Located in southern Greenland, Narsaq offers colorful homes, dramatic mountain scenery, and fascinating Norse and Inuit history.', tags: ['Guided walks', 'Local culture', 'Mountain scenery'] },
    { name: 'Prince Christian Sound', Icon: MapPin, text: 'Towering cliffs, waterfalls, glaciers, and drifting icebergs create one of the Arctic\'s most scenic waterways.', tags: ['Waterfalls', 'Glaciers', 'Scenic cruising'] },
    { name: 'Qaqortoq', Icon: Anchor, text: 'The largest town in southern Greenland, featuring beautiful colonial architecture, stone monuments, and stunning surrounding fjords.', tags: ['Colonial history', 'Fjords', 'Local art', 'Southern Greenland'] }
]

const benefits = [
    'Six-star Discovery Yacht', 'Butler service for every suite',
    'Expert Discovery Team', 'Zodiac excursions',
    'Gourmet dining', 'Luxury spa',
    'Premium beverages', 'Complimentary Wi-Fi',
    'Gratuities included', 'Spacious all-veranda suites'
]

const eclipseFeatures = [
    { Icon: Crown, label: 'Observation lounges' },
    { Icon: Wind, label: 'Panoramic viewing decks' },
    { Icon: Utensils, label: 'Multiple restaurants' },
    { Icon: Star, label: 'Butler service' },
    { Icon: Sparkles, label: 'Scenic Senses Spa' },
    { Icon: Heart, label: 'Wellness facilities' },
    { Icon: Sun, label: 'Indoor & outdoor relaxation' }
]

const activities = [
    { Icon: ShipWheel, title: 'Zodiac Cruises', desc: 'Navigate among towering icebergs and dramatic coastlines.' },
    { Icon: MapPin, title: 'Guided Shore Landings', desc: 'Explore remote Arctic landscapes inaccessible to larger ships.' },
    { Icon: Binoculars, title: 'Wildlife Viewing', desc: 'Observe whales, seabirds, seals, and other Arctic wildlife.' },
    { Icon: Camera, title: 'Photography', desc: 'Capture breathtaking glaciers, mountains, and Arctic light.' },
    { Icon: BookOpen, title: 'Discovery Lectures', desc: 'Learn from marine biologists, historians, geologists, and naturalists.' }
]

const months = [
    { name: 'June', desc: 'Longer daylight, emerging wildlife, fresh Arctic landscapes' },
    { name: 'July', desc: 'Peak expedition season, iceberg viewing, wildlife activity' },
    { name: 'August', desc: 'Comfortable temperatures, excellent cruising conditions' },
    { name: 'September', desc: 'Beautiful autumn colors, dramatic lighting, fewer visitors' }
]

const whoList = [
    'Want an ultra-luxury expedition experience',
    'Appreciate all-inclusive travel',
    'Love wildlife and photography',
    'Enjoy learning from expedition experts',
    'Prefer smaller expedition ships',
    'Want to experience Greenland without sacrificing comfort',
    'Seek once-in-a-lifetime Arctic adventures'
]

const editorialPills = [
    'Personalized cruise recommendations',
    'Expedition expertise',
    'Pre- and post-cruise planning',
    'Flights and hotel arrangements',
    'Comprehensive travel support'
]

const expertisePills = [
    { label: 'Luxury Arctic cruises', Icon: Ship },
    { label: 'Expedition travel', Icon: Compass },
    { label: 'River & ocean cruises', Icon: Anchor },
    { label: 'Custom itineraries', Icon: MapPin }
]

function ScenicGreenlandCruises() {
    const [activeFaq, setActiveFaq] = useState(null)

    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            { '@type': 'WebPage', '@id': 'https://www.tripsandships.com/scenic-greenland-cruises', 'name': 'Scenic Greenland Cruises', 'url': 'https://www.tripsandships.com/scenic-greenland-cruises', 'description': 'Explore Scenic Greenland Cruises aboard Scenic Eclipse with all-inclusive luxury, Arctic expeditions, Inuit culture, Ilulissat Icefjord, Disko Bay, and breathtaking Greenland fjords.' },
            { '@type': 'TravelAgency', '@id': 'https://www.tripsandships.com/#organization', 'name': 'Trips & Ships Luxury Travel', 'url': 'https://www.tripsandships.com', 'description': 'Luxury travel advisors specializing in Scenic Cruises, expedition cruises, river cruises, and custom luxury vacations.' },
            { '@type': 'FAQPage', 'mainEntity': faqData.slice(0, 5).map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })) }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Greenland Cruises | Luxury Greenland Expeditions 2026 &amp; 2027</title>
                <meta name="title" content="Scenic Greenland Cruises | Luxury Greenland Expeditions 2026 &amp; 2027" />
                <meta name="description" content="Discover Scenic Greenland Cruises aboard Scenic Eclipse. Explore Ilulissat, Disko Bay, East Greenland, breathtaking fjords, Inuit culture, and Arctic wildlife with an all-inclusive luxury expedition." />
                <meta name="keywords" content="Scenic Greenland Cruises, Scenic Greenland Expedition, Scenic Eclipse Greenland, Greenland Luxury Cruises, Greenland Expedition Cruises, Greenland Cruises 2026, Greenland Cruises 2027, Arctic Luxury Cruises, Scenic Arctic Cruises" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="scng-hero-section">
                <div className="scng-hero-background scng-placeholder" />
                <div className="scng-hero-overlay-layer"></div>
                <div className="scng-hero-content-wrapper">
                    <div className="scng-hero-eyebrow-tag">
                        <Ship size={16} />
                        <span>Scenic Discovery Yacht · Greenland Expeditions</span>
                    </div>
                    <h1 className="scng-hero-main-title">
                        Scenic Greenland Cruises:<br />Explore the Arctic in Six-Star Ultra-Luxury
                    </h1>
                    <p className="scng-hero-subtitle-text">
                        Experience the untouched beauty of the Arctic aboard Scenic Eclipse, where colossal ice,
                        remote fjords, and Inuit culture meet six-star ultra-luxury.
                    </p>
                    <div className="scng-hero-actions">
                        <Link to="/contact" className="scng-primary-cta-button">
                            <Phone size={17} />Plan Your Expedition
                        </Link>
                        <a onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="scng-secondary-outline-button">
                            Explore Destinations <ChevronDown size={17} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="scng-section" style={{ background: 'var(--scng-bg-white)' }}>
                <div className="scng-container">
                    <div className="scng-intro-grid">
                        <div>
                            <span className="scng-eyebrow">THE ARCTIC, ELEVATED</span>
                            <h2 className="scng-section-heading">Experience the Untouched Beauty of the Arctic</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">Greenland is one of the world's last true wilderness destinations, where towering icebergs, dramatic fjords, ancient glaciers, and vibrant Inuit communities create an unforgettable expedition experience.</p>
                            <p className="scng-intro-body">Aboard <strong>Scenic Eclipse</strong>, Scenic's award-winning Discovery Yacht—purpose-built and Polar Class 6 certified with advanced stabilization systems and a strengthened hull for confident navigation in polar waters—you'll experience Greenland in exceptional comfort while exploring some of the most remote and spectacular landscapes on Earth. Guests can sail through breathtaking fjords, admire colossal ice formations, visit colorful coastal villages, and learn about Inuit culture with guidance from Scenic's expert Discovery Team.</p>
                            <p className="scng-intro-body">Scenic's Greenland itineraries often combine Greenland with Iceland, allowing travelers to experience two extraordinary Arctic destinations on a single voyage.</p>
                        </div>
                        <div className="scng-intro-right-wrapper">
                            <div className="scng-intro-image scng-placeholder">
                                <div className="scng-why-badge"><Ship size={16} /> Arctic Expedition</div>
                            </div>
                            <div className="scng-intro-feature-box">
                                <div className="scng-feature-item"><CheckCircle size={16} /><span>Polar Class 6 ice-strengthened hull</span></div>
                                <div className="scng-feature-item"><CheckCircle size={16} /><span>Expert Discovery Team on board</span></div>
                                <div className="scng-feature-item"><CheckCircle size={16} /><span>Zodiac landings &amp; Arctic exploration</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY SCENIC ── */}
            <section id="why-scenic" className="scng-section" style={{ background: 'var(--scng-bg-soft)' }}>
                <div className="scng-container">
                    <div className="scng-why-grid">
                        <div className="scng-why-image scng-placeholder">
                            <div className="scng-why-badge"><ShipWheel size={16} /> Scenic Eclipse</div>
                        </div>
                        <div>
                            <span className="scng-eyebrow">SIX-STAR DISCOVERY</span>
                            <h2 className="scng-section-heading">Why Choose Scenic for a Greenland Cruise?</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">Scenic combines luxury cruising with authentic expedition experiences. Unlike traditional expedition cruises, Scenic offers an ultra-luxury, all-inclusive journey where exploration and comfort go hand in hand.</p>
                            <div className="scng-benefit-grid">
                                {benefits.map((b, i) => (
                                    <div key={i} className="scng-benefit"><Check size={15} /><span>{b}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DISCOVER SCENIC ECLIPSE ── */}
            <section className="scng-section scng-eclipse-section">
                <div className="scng-container">
                    <div className="scng-eclipse-grid">
                        <div>
                            <span className="scng-eyebrow">PURPOSE-BUILT FOR POLAR</span>
                            <h2 className="scng-section-heading">Discover Greenland Aboard Scenic Eclipse</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">Scenic Eclipse has been purpose-built for polar exploration. Its advanced technology allows guests to travel safely through Greenland's icy waters while enjoying one of the most luxurious expedition ships ever built.</p>
                            <div className="scng-eclipse-highlights">
                                {eclipseFeatures.map(({ Icon, label }, i) => (
                                    <div key={i} className="scng-eclipse-highlight"><Icon size={16} /><span>{label}</span></div>
                                ))}
                            </div>
                            <p className="scng-eclipse-note">On select voyages outside the Arctic, Scenic Eclipse also offers helicopter flights and the Scenic Neptune submersible. Helicopter experiences may be available on some Iceland voyages where conditions permit, while the submersible is not operated in the Arctic region because of operational restrictions.</p>
                        </div>
                        <div className="scng-eclipse-image scng-placeholder"></div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section id="destinations" className="scng-section scng-destinations-section">
                <div className="scng-container" style={{ textAlign: 'center' }}>
                    <span className="scng-eyebrow" style={{ justifyContent: 'center' }}>FIVE WAYS INTO THE WILD</span>
                    <h2 className="scng-section-heading">Incredible Greenland Destinations</h2>
                    <div className="scng-heading-separator-bar scng-bar-centered"></div>
                    <p className="scng-intro-body" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>Each destination reveals a different side of the world's largest island, from iceberg-choked bays to communities shaped by the Arctic.</p>
                </div>
                <div className="scng-container">
                    <div className="scng-destination-grid">
                        {destinations.map(({ name, Icon, text, tags }, i) => (
                            <div key={i} className="scng-destination-card">
                                <div className="scng-destination-image scng-placeholder">
                                    <div className="scng-destination-icon"><Icon size={22} /></div>
                                </div>
                                <div className="scng-destination-body">
                                    <h3>{name}</h3>
                                    <p>{text}</p>
                                    <div className="scng-destination-tags">
                                        {tags.map((tag, ti) => <span key={ti}>{tag}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WILDLIFE ── */}
            <section className="scng-section scng-wildlife-section">
                <div className="scng-container">
                    <div className="scng-wildlife-grid">
                        <div className="scng-wildlife-image scng-placeholder"></div>
                        <div>
                            <span className="scng-eyebrow scng-eyebrow-light">LIFE ON THE ICE EDGE</span>
                            <h2 className="scng-section-heading scng-white-heading">Incredible Wildlife Encounters</h2>
                            <div className="scng-heading-separator-bar" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
                            <p className="scng-intro-body" style={{ color: 'rgba(255,255,255,0.8)' }}>Greenland offers exceptional opportunities to observe Arctic wildlife in its natural habitat. Depending on the season and itinerary, you may encounter humpback whales, minke whales, seals, Arctic foxes, musk oxen, puffins, guillemots, and polar seabirds.</p>
                            <p className="scng-intro-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Wildlife sightings are never guaranteed, but Scenic's experienced expedition team helps maximize opportunities while respecting the fragile Arctic environment.</p>
                            <div className="scng-wildlife-list">
                                <span><Binoculars size={15} /> Observe responsibly</span>
                                <span><Compass size={15} /> Follow expert guidance</span>
                                <span><Heart size={15} /> Protect the wild</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CULTURE ── */}
            <section className="scng-section" style={{ background: 'var(--scng-bg-white)' }}>
                <div className="scng-container">
                    <div className="scng-culture-grid">
                        <div>
                            <span className="scng-eyebrow">BEYOND THE LANDSCAPE</span>
                            <h2 className="scng-section-heading">Immerse Yourself in Inuit Culture</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">A Greenland expedition is about more than spectacular scenery. Guests also have opportunities to learn about Greenland's Indigenous Inuit communities through cultural presentations, village visits, local traditions, Arctic history, and contemporary Greenlandic life.</p>
                            <p className="scng-intro-body">These authentic experiences provide a deeper understanding of one of the world's most fascinating cultures.</p>
                            <div className="scng-culture-points">
                                <span><Users size={15} /> Village visits</span>
                                <span><BookOpen size={15} /> Arctic history</span>
                                <span><Globe2 size={15} /> Local traditions</span>
                            </div>
                        </div>
                        <div className="scng-culture-image scng-placeholder">
                            <div className="scng-culture-quote">"The landscape is immense. The welcome is personal."</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ACTIVITIES ── */}
            <section className="scng-section scng-activities-section">
                <div className="scng-container" style={{ textAlign: 'center' }}>
                    <span className="scng-eyebrow scng-eyebrow-light">DISCOVERY, YOUR WAY</span>
                    <h2 className="scng-section-heading scng-white-heading">Expedition Experiences</h2>
                    <div className="scng-heading-separator-bar scng-bar-centered" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
                    <p className="scng-intro-body" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 40px' }}>Scenic Greenland Cruises include unforgettable expedition activities led by experienced specialists.</p>
                </div>
                <div className="scng-container">
                    <div className="scng-activity-grid">
                        {activities.map(({ Icon, title, desc }, i) => (
                            <div key={i} className="scng-activity-card">
                                <span className="scng-activity-number">0{i + 1}</span>
                                <Icon size={25} />
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ALL-INCLUSIVE ── */}
            <section className="scng-section scng-inclusive-section">
                <div className="scng-container">
                    <div className="scng-inclusive-grid">
                        <div>
                            <span className="scng-eyebrow">THE SCENIC DIFFERENCE</span>
                            <h2 className="scng-section-heading">Scenic's Truly All-Inclusive Experience</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">Your Greenland expedition includes a remarkable collection of luxury amenities. This all-inclusive approach allows guests to focus on enjoying the journey rather than worrying about additional onboard costs.</p>
                            <div className="scng-inclusive-tag-grid">
                                {benefits.map((b, i) => (
                                    <div key={i} className="scng-inclusive-tag"><CheckCircle size={16} /><span>{b}</span></div>
                                ))}
                            </div>
                        </div>
                        <div className="scng-inclusive-right-wrapper">
                            <div className="scng-inclusive-image scng-placeholder">
                                <div className="scng-why-badge"><Ship size={16} /> All-Inclusive Luxury</div>
                            </div>
                            <div className="scng-inclusive-panel">
                                <div><strong>Every suite</strong><span>Personalized butler service</span></div>
                                <div><strong>Every day</strong><span>Discovery Team guidance</span></div>
                                <div><strong>Every meal</strong><span>Gourmet dining at sea</span></div>
                                <div><strong>Every landing</strong><span>Zodiac exploration</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="scng-section scng-dining-section">
                <div className="scng-container">
                    <div className="scng-dining-grid">
                        <div className="scng-dining-image scng-placeholder"></div>
                        <div>
                            <span className="scng-eyebrow">CULINARY EXCELLENCE</span>
                            <h2 className="scng-section-heading">Dining at Sea</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">Scenic's culinary program rivals many luxury hotels. Guests can enjoy international cuisine, fine dining restaurants, casual dining venues, regional specialties, and in-suite dining with premium wines and spirits.</p>
                            <p className="scng-intro-body">Menus frequently highlight fresh seasonal ingredients inspired by the destinations visited.</p>
                            <div className="scng-dining-list">
                                {['International cuisine', 'Fine dining', 'Casual venues', 'Regional specialties', 'In-suite dining', 'Premium wines'].map((item, i) => (
                                    <span key={i}><CheckCircle size={14} />{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEASON ── */}
            <section className="scng-section scng-season-section">
                <div className="scng-container" style={{ textAlign: 'center' }}>
                    <span className="scng-eyebrow" style={{ justifyContent: 'center' }}>WHEN TO GO</span>
                    <h2 className="scng-section-heading">Best Time for Scenic Greenland Cruises</h2>
                    <div className="scng-heading-separator-bar scng-bar-centered"></div>
                    <p className="scng-intro-body" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>Most Scenic Greenland expeditions operate during the Arctic summer, generally from June through September, when conditions allow expedition ships to navigate Greenland's coastal waters.</p>
                </div>
                <div className="scng-container">
                    <div className="scng-month-grid">
                        {months.map(({ name, desc }, i) => (
                            <div key={i} className="scng-month-card">
                                <strong>{name}</strong>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="scng-section scng-who-section">
                <div className="scng-container">
                    <div className="scng-who-grid">
                        <div>
                            <span className="scng-eyebrow">IDEAL FOR</span>
                            <h2 className="scng-section-heading">Who Should Choose a Scenic Greenland Cruise?</h2>
                            <div className="scng-heading-separator-bar"></div>
                            <p className="scng-intro-body">Scenic Greenland Cruises are ideal for travelers who:</p>
                            <div className="scng-who-list">
                                {whoList.map((item, i) => (
                                    <div key={i} className="scng-who-item"><CheckCircle size={18} /><span>{item}</span></div>
                                ))}
                            </div>
                        </div>
                        <div className="scng-who-image scng-placeholder">
                            <div className="scng-why-badge"><Compass size={16} /> Arctic Explorer</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* EXPERT INSIGHT � Celebrity ref tight, scng- isolated */}
            <section id="scng-growth-insight" className="scng-expert-insight-section">
                <div className="scng-expert-insight-container">
                    <div className="scng-expert-portrait-panel">
                        <div className="scng-expert-img-frame">
                            <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="scng-expert-img" />
                            <div className="scng-expert-img-overlay"></div>
                            <span className="scng-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="scng-expert-stats-strip">
                            <div className="scng-expert-stat-box">
                                <div className="scng-expert-stat-num">40+</div>
                                <div className="scng-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="scng-expert-stat-box">
                                <div className="scng-expert-stat-num">121+</div>
                                <div className="scng-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    <div className="scng-expert-content-panel">
                        <div className="scng-expert-eyebrow-row">
                            <Award size={14} />
                            <span className="scng-eyebrow">Expert Insight from Angela Hughes</span>
                        </div>
                        <h2 className="scng-editorial-title">
                            Why Modern Luxury Travelers Are Choosing Scenic
                        </h2>
                        <div className="scng-heading-separator-bar"></div>

                        <div className="scng-expert-quote-card">
                            <span className="scng-expert-quote-mark">�</span>
                            <p className="scng-expert-quote-text scng-expert-quote">
                                According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts � but ultimately fall in love with the all-inclusive onboard expedition experience.
                            </p>
                        </div>

                        <div className="scng-expert-priorities">
                            <h5 className="scng-priorities-title">Scenic travelers consistently prioritize:</h5>
                            <div className="scng-expert-pills">
                                {[
                                    'Polar discovery yachting',
                                    'Truly all-inclusive luxury',
                                    'Butler service for every suite',
                                    'Helicopter & submarine features',
                                    'Up to 10 dining experiences',
                                    'Immersive Zodiac excursions'
                                ].map((pill) => (
                                    <span key={pill} className="scng-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="scng-editorial-text scng-expert-quote">
                            As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically � based on real-world expertise rather than generic online recommendations.
                        </p>

                        <div className="scng-expert-footer-bio">
                            <p className="scng-expert-bio">Her expertise spans ultra-luxury yachting, polar expeditions, butler services, luxury cruise planning and custom expedition travel � backed by 40+ years and 121+ countries visited.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── FAQ ── */}
            <section className="scng-faq-section">
                <div className="scng-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="scng-section-heading">Frequently Asked Questions</h2>
                        <div className="scng-heading-separator-bar scng-bar-centered"></div>
                    </div>
                    <div className="scng-faq-list">
                        {faqData.map(({ q, a }, i) => (
                            <div key={i} className="scng-faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div className="scng-faq-question">
                                    <span>{q}</span>
                                    <span className="scng-faq-toggle">{activeFaq === i ? '−' : '+'}</span>
                                </div>
                                {activeFaq === i && <p className="scng-faq-answer">{a}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="scng-cta-section">
                {/* Decorative background elements */}
                <div className="scng-cta-aurora-glow"></div>
                <div className="scng-cta-ice-crystal scng-cta-crystal-1"></div>
                <div className="scng-cta-ice-crystal scng-cta-crystal-2"></div>
                <div className="scng-cta-ice-crystal scng-cta-crystal-3"></div>
                <div className="scng-cta-grid-lines"></div>

                <div className="scng-cta-content">
                    {/* Floating compass decoration */}
                    <div className="scng-cta-compass-ring">
                        <Compass size={28} />
                    </div>

                    <span className="scng-cta-eyebrow">YOUR ARCTIC STORY STARTS HERE</span>
                    <h2 className="scng-cta-title">Ready to Explore Greenland<br className="scng-cta-br" />with Scenic?</h2>
                    <div className="scng-cta-bar"></div>
                    <p className="scng-cta-subtitle">
                        A well-planned Scenic Greenland expedition combines six-star luxury with authentic Arctic exploration. Let our specialists help you find the perfect itinerary.
                    </p>

                    {/* Glassmorphic considerations grid */}
                    <div className="scng-cta-cards-grid">
                        {[
                            { icon: Ship, text: 'Scenic Greenland expeditions' },
                            { icon: Globe2, text: 'Iceland & Greenland combined voyages' },
                            { icon: Crown, text: 'Scenic Eclipse Discovery Yacht' },
                            { icon: Navigation, text: 'Antarctica & Arctic expedition cruises' },
                            { icon: Gem, text: 'Custom luxury cruise packages' }
                        ].map(({ icon: Icon, text }, i) => (
                            <div key={i} className="scng-cta-card">
                                <div className="scng-cta-card-icon"><Icon size={20} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="scng-cta-closing">
                        Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                    </p>

                    <div className="scng-cta-actions">
                        <Link to="/contact" className="scng-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="scng-cta-btn-arrow" />
                        </Link>
                        <a onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="scng-cta-ghost-btn">
                            <Compass size={17} />Explore Destinations
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScenicGreenlandCruises
