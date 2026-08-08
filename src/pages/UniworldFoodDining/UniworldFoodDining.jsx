import Navbar from '../../components/Navbar/Navbar'
import './UniworldFoodDining.css'

import {
    Utensils, Coffee, Wine, Sun, Moon, Sparkles, Leaf, Heart,
    CheckCircle, Globe, MapPin, Star, Clock, ChevronRight, Phone,
    Anchor, Gem, Award, LayoutList, Croissant, Soup, Salad,
    IceCreamCone, GlassWater, Music, Compass, ArrowRight
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function UniworldFoodDining() {
    const [ufdCurrentHero, setUfdCurrentHero] = useState(0)
    const ufdHeroImages = [
        'linear-gradient(135deg, #1c2f4a 0%, #0f1c2e 100%)',
        'linear-gradient(135deg, #274472 0%, #1c2f4a 100%)',
        'linear-gradient(135deg, #0f1c2e 0%, #274472 100%)'
    ]

    useEffect(() => {
        const ufdTimer = setInterval(() => {
            setUfdCurrentHero(prev => (prev + 1) % ufdHeroImages.length)
        }, 5000)
        return () => clearInterval(ufdTimer)
    }, [ufdHeroImages.length])

    const [ufdActiveFaq, setUfdActiveFaq] = useState(null)
    const ufdToggleFaq = i => setUfdActiveFaq(ufdActiveFaq === i ? null : i)

    const ufdFaqs = [
        { question: 'Is food included on Uniworld River Cruises?', answer: 'Yes. Breakfast, lunch, dinner, snacks, and many specialty dining events are typically included in the cruise fare.' },
        { question: 'Are drinks included with meals?', answer: 'Yes. Premium wines, beer, soft drinks, coffee, tea, and many spirits are generally included.' },
        { question: 'Does Uniworld offer regional cuisine?', answer: 'Yes. Menus are inspired by the destinations visited during each itinerary.' },
        { question: 'Are vegetarian meals available?', answer: 'Yes. Vegetarian options are available daily.' },
        { question: 'Can Uniworld accommodate food allergies?', answer: 'Yes. Guests should notify the cruise line before departure about dietary restrictions or allergies.' },
        { question: 'Is there assigned seating at dinner?', answer: 'No. Most ships offer open seating, allowing guests flexibility during meals.' },
        { question: 'Are specialty restaurants available?', answer: 'Dining venues vary by ship, but most meals are served in the main restaurant with rotating regional menus.' },
        { question: 'Is room service available?', answer: 'Availability varies by ship and cabin category, particularly for suite guests.' },
        { question: 'What is the dress code for dinner?', answer: 'Smart casual attire is generally appropriate for evening dining.' },
        { question: 'Are wine pairings included?', answer: 'Yes. Wine is commonly served with lunch and dinner on most itineraries.' },
        { question: 'Does Uniworld serve local wines?', answer: 'Yes. Many itineraries feature wines from the regions visited.' },
        { question: "Are children's menus available?", answer: 'Family sailings may offer child-friendly options, but most itineraries primarily cater to adults.' },
        { question: 'Can vegan guests dine comfortably?', answer: 'Yes. Vegan meals can usually be arranged with advance notice.' },
        { question: 'Are desserts made onboard?', answer: 'Many desserts are freshly prepared and inspired by regional culinary traditions.' },
        { question: 'Is Uniworld dining considered luxurious?', answer: 'Yes. The combination of gourmet cuisine, premium ingredients, destination-inspired menus, and attentive service makes dining one of the highlights of the Uniworld experience.' }
    ]

    const ufdRegionalCuisine = [
        { destination: 'France', experience: 'Fine wines, cheeses, pastries, gourmet cuisine' },
        { destination: 'Germany', experience: 'Sausages, pretzels, seasonal specialties' },
        { destination: 'Austria', experience: 'Schnitzel, strudel, coffee culture' },
        { destination: 'Portugal', experience: 'Seafood, Port wine, traditional desserts' },
        { destination: 'Italy', experience: 'Fresh pasta, risotto, regional wines' },
        { destination: 'Egypt', experience: 'Middle Eastern flavors and local specialties' }
    ]

    const ufdSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/food-dining/",
                "name": "Uniworld Food and Dining Review",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/food-dining/",
                "description": "Complete guide to Uniworld River Cruises food, dining, beverages, restaurants, and regional cuisine.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "logo": "https://www.tripsshipsluxurytravel.com/logo.png"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Food and Dining Review",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/food-dining/"
                },
                "datePublished": "2026-08-07",
                "dateModified": "2026-08-07"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Food & Dining", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/food-dining/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": ufdFaqs.map(f => ({
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
                <title>Uniworld Food and Dining Guide</title>
                <meta name="title" content="Uniworld Food and Dining Guide" />
                <meta name="description" content="Explore Uniworld River Cruises dining, gourmet cuisine, regional specialties, beverages, dietary options, and onboard restaurants in this complete guide." />
                <meta name="keywords" content="Uniworld Food and Dining, Uniworld dining review, Uniworld restaurants, Uniworld cuisine, gourmet river cruise dining, Uniworld beverages, luxury cruise food, Uniworld menus, river cruise dining experience" />
                <script type="application/ld+json">{JSON.stringify(ufdSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="ufd-page">

                {/* ── HERO ── */}
                <section className="ufd-hero-section">
                    {ufdHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`ufd-hero-background ${ufdCurrentHero === idx ? 'ufd-active' : ''}`}
                            style={{ backgroundImage: img }}
                        />
                    ))}
                    <div className="ufd-hero-overlay-layer"></div>
                    <div className="ufd-hero-content-wrapper">
                        <div className="ufd-hero-eyebrow-tag">
                            <Utensils size={16} />
                            <span>Uniworld River Cruises · Food &amp; Dining</span>
                        </div>
                        <h1 className="ufd-hero-main-title">Uniworld Food and Dining Review</h1>
                        <p className="ufd-hero-subtitle-text">
                            Explore Uniworld River Cruises dining, gourmet cuisine, regional specialties, beverages,
                            dietary options, and onboard restaurants in this complete guide.
                        </p>
                    </div>
                </section>

                {/* ── INTRO ── */}
                <section className="ufd-intro-section">
                    <div className="ufd-container">
                        <div className="ufd-grid">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">OVERVIEW</span>
                                <h2 className="ufd-section-heading">Uniworld Boutique River Cruises Dining</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-intro-lead">
                                    Dining is one of the defining features of the Uniworld Boutique River Cruises experience.
                                    Rather than offering standard cruise fare, Uniworld focuses on destination-inspired cuisine,
                                    locally sourced ingredients, premium beverages, and elegant dining venues that reflect the
                                    regions visited throughout each itinerary.
                                </p>
                                <p className="ufd-body">
                                    Whether you're cruising along the Danube, Rhine, Seine, Douro, Nile, or Venice Lagoon, meals
                                    are designed to immerse guests in local culinary traditions while maintaining the high
                                    standards expected from a luxury river cruise. This guide explores everything you can expect
                                    from Uniworld's food and dining experience, including restaurants, menus, beverages, dietary
                                    accommodations, and tips for making the most of every meal onboard.
                                </p>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Utensils size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CULINARY EXPERIENCE INSPIRED BY EVERY DESTINATION ── */}
                <section className="ufd-culinary-section">
                    <div className="ufd-container">
                        <div className="ufd-grid ufd-grid-reverse">
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Globe size={48} />
                                    </div>
                                </div>
                                <div className="ufd-highlight-box">
                                    <p>This regional approach gives every itinerary a unique culinary identity.</p>
                                </div>
                            </div>
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">REGIONAL INSPIRATION</span>
                                <h2 className="ufd-section-heading">A Culinary Experience Inspired by Every Destination</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Uniworld's dining philosophy centers on authentic regional cuisine. Chefs incorporate
                                    seasonal ingredients and local recipes to create menus that complement the destinations
                                    visited during the cruise.
                                </p>
                                <p className="ufd-body">Examples include:</p>
                                <ul className="ufd-list">
                                    <li><Croissant size={18} /><span>French pastries and cheeses on Seine itineraries</span></li>
                                    <li><Soup size={18} /><span>Portuguese seafood and wines along the Douro</span></li>
                                    <li><IceCreamCone size={18} /><span>Austrian desserts on Danube cruises</span></li>
                                    <li><Utensils size={18} /><span>Italian specialties in Venice</span></li>
                                    <li><Globe size={18} /><span>Egyptian-inspired dishes on Nile sailings</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAIN DINING VENUE ── */}
                <section className="ufd-alt-section">
                    <div className="ufd-container">
                        <div className="ufd-grid">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">ONBOARD RESTAURANTS</span>
                                <h2 className="ufd-section-heading">Main Dining Venue</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Most Uniworld ships feature a beautifully designed main restaurant where breakfast,
                                    lunch, and dinner are served.
                                </p>
                                <p className="ufd-body">Guests can generally expect:</p>
                                <div className="ufd-pillars">
                                    {['Open seating', 'Elegant table settings', 'Attentive table service', 'Rotating daily menus', 'Fresh regional ingredients', 'Multi-course dinners'].map((item, idx) => (
                                        <div key={idx} className="ufd-pillar">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Coffee size={48} />
                                    </div>
                                </div>
                                <div className="ufd-image-caption">
                                    <p>Dining rooms are designed to provide a relaxed atmosphere without assigned seating, encouraging guests to socialize throughout the voyage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT IS INCLUDED ── */}
                <section className="ufd-dark-section">
                    <div className="ufd-dark-bg"></div>
                    <div className="ufd-container">
                        <div className="ufd-center-header">
                            <span className="ufd-eyebrow ufd-eyebrow-light">ALL-INCLUSIVE DINING</span>
                            <h2 className="ufd-section-heading ufd-white-heading">What Is Included in the <br /> Dining Experience?</h2>
                            <div className="ufd-heading-separator ufd-separator-white ufd-bar-centered"></div>
                            <p className="ufd-intro-white">
                                One of the advantages of Uniworld's all-inclusive model is that most dining expenses
                                are already covered.
                            </p>
                            <p className="ufd-sub-white">Included with the cruise fare are typically:</p>
                        </div>
                        <div className="ufd-cards-grid">
                            {[
                                { Icon: Sun, label: 'Daily breakfast' },
                                { Icon: Utensils, label: 'Lunch' },
                                { Icon: Moon, label: 'Multi-course dinner' },
                                { Icon: Coffee, label: 'Early riser breakfast' },
                                { Icon: Coffee, label: 'Afternoon tea' },
                                { Icon: Salad, label: 'Light snacks' },
                                { Icon: GlassWater, label: 'Welcome reception' },
                                { Icon: Star, label: 'Farewell dinner' },
                                { Icon: IceCreamCone, label: 'Specialty desserts' },
                                { Icon: Coffee, label: 'Complimentary coffee and tea' }
                            ].map(({ Icon, label }, idx) => (
                                <div key={idx} className="ufd-mini-card">
                                    <div className="ufd-mini-card-icon"><Icon size={22} /></div>
                                    <span className="ufd-mini-card-label">{label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="ufd-beverage-highlight">
                            <Wine size={20} />
                            <span>Premium beverages are also included on most itineraries.</span>
                        </div>
                    </div>
                </section>

                {/* ── BREAKFAST OPTIONS ── */}
                <section className="ufd-alt-section">
                    <div className="ufd-container">
                        <div className="ufd-grid">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">MORNING DINING</span>
                                <h2 className="ufd-section-heading">Breakfast Options</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Breakfast usually combines buffet selections with cooked-to-order menu items.
                                </p>
                                <p className="ufd-body">Typical offerings include:</p>
                                <div className="ufd-chip-list">
                                    {['Fresh fruit', 'Yogurt', 'Cereals', 'Pastries', 'Artisan breads', 'Eggs cooked to order', 'Bacon and sausage', 'Smoked salmon', 'Cheese selections', 'Fresh juices', 'Coffee specialties'].map((item, idx) => (
                                        <span key={idx} className="ufd-chip">{item}</span>
                                    ))}
                                </div>
                                <div className="ufd-info-callout">
                                    <Sun size={18} />
                                    <span>Guests can enjoy a leisurely breakfast before beginning daily excursions.</span>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Coffee size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LUNCH SERVICE ── */}
                <section className="ufd-section-white">
                    <div className="ufd-container">
                        <div className="ufd-grid ufd-grid-reverse">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">MIDDAY DINING</span>
                                <h2 className="ufd-section-heading">Lunch Service</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Lunch often includes a mix of buffet stations and à la carte options.
                                </p>
                                <p className="ufd-body">Popular choices may include:</p>
                                <div className="ufd-chip-list">
                                    {['Fresh salads', 'Regional soups', 'Seafood', 'Pasta', 'Sandwiches', 'Grilled meats', 'Vegetarian dishes', 'Seasonal desserts'].map((item, idx) => (
                                        <span key={idx} className="ufd-chip">{item}</span>
                                    ))}
                                </div>
                                <div className="ufd-info-callout">
                                    <Sun size={18} />
                                    <span>Outdoor dining may be available on select ships when weather permits.</span>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Sun size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DINNER HIGHLIGHTS ── */}
                <section className="ufd-alt-section">
                    <div className="ufd-container">
                        <div className="ufd-grid">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">EVENING DINING</span>
                                <h2 className="ufd-section-heading">Dinner Highlights</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">Dinner is generally the culinary centerpiece of each day.</p>
                                <p className="ufd-body">Meals commonly feature:</p>
                                <ul className="ufd-list">
                                    <li><Utensils size={18} /><span>Four- or five-course menus</span></li>
                                    <li><Globe size={18} /><span>Regional specialties</span></li>
                                    <li><Wine size={18} /><span>Premium wine pairings</span></li>
                                    <li><Soup size={18} /><span>Fresh seafood</span></li>
                                    <li><Leaf size={18} /><span>Locally sourced produce</span></li>
                                    <li><Award size={18} /><span>Artisan cheeses</span></li>
                                    <li><IceCreamCone size={18} /><span>Decadent desserts</span></li>
                                </ul>
                                <div className="ufd-info-callout">
                                    <Utensils size={18} />
                                    <span>Menus rotate frequently to showcase different regional flavors throughout the itinerary.</span>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Moon size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── REGIONAL CUISINE BY DESTINATION (TABLE) ── */}
                <section className="ufd-table-section">
                    <div className="ufd-container">
                        <div className="ufd-center-header">
                            <span className="ufd-eyebrow">DESTINATION FLAVORS</span>
                            <h2 className="ufd-section-heading">Regional Cuisine by Destination</h2>
                            <div className="ufd-heading-separator ufd-bar-centered"></div>
                        </div>
                        <div className="ufd-destination-grid">
                            {ufdRegionalCuisine.map((row, idx) => (
                                <div key={idx} className="ufd-destination-card">
                                    <div className="ufd-destination-card-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <h3 className="ufd-destination-card-title">{row.destination}</h3>
                                    <p className="ufd-destination-card-text">{row.experience}</p>
                                </div>
                            ))}
                        </div>
                        <div className="ufd-table-note-center">
                            <p><Globe size={18} /> These culinary experiences help connect guests with the culture of each destination.</p>
                        </div>
                    </div>
                </section>

                {/* ── BEVERAGES INCLUDED ── */}
                <section className="ufd-section-white">
                    <div className="ufd-container">
                        <div className="ufd-grid ufd-grid-reverse">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">ONBOARD BAR &amp; BEVERAGES</span>
                                <h2 className="ufd-section-heading">Beverages Included</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Uniworld includes a generous beverage program as part of its all-inclusive experience.
                                </p>
                                <p className="ufd-body">Guests generally enjoy:</p>
                                <div className="ufd-chip-list">
                                    {['Premium wines', 'Champagne', 'Local wines', 'Cocktails', 'Premium spirits', 'Beer', 'Specialty coffee', 'Espresso', 'Tea', 'Soft drinks', 'Bottled water'].map((item, idx) => (
                                        <span key={idx} className="ufd-chip">{item}</span>
                                    ))}
                                </div>
                                <div className="ufd-info-callout">
                                    <Wine size={18} />
                                    <span>Wine pairings are commonly offered during lunch and dinner.</span>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Wine size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DIETARY REQUIREMENTS ── */}
                <section className="ufd-alt-section">
                    <div className="ufd-container">
                        <div className="ufd-grid">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">ACCOMMODATIONS</span>
                                <h2 className="ufd-section-heading">Dietary Requirements</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Uniworld accommodates many dietary preferences and medical requirements.
                                </p>
                                <p className="ufd-body">Guests can typically request:</p>
                                <div className="ufd-pillars">
                                    {['Vegetarian meals', 'Vegan dishes', 'Gluten-free menus', 'Dairy-free options', 'Low-sodium meals', 'Allergy-conscious preparations'].map((item, idx) => (
                                        <div key={idx} className="ufd-pillar">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="ufd-note-box">
                                    <p>Dietary requests should be communicated before departure to ensure the best experience.</p>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Leaf size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SPECIAL DINING EVENTS ── */}
                <section className="ufd-section-white">
                    <div className="ufd-container">
                        <div className="ufd-grid ufd-grid-reverse">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">MEMORABLE MOMENTS</span>
                                <h2 className="ufd-section-heading">Special Dining Events</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">
                                    Many itineraries include memorable culinary experiences beyond the main restaurant.
                                </p>
                                <p className="ufd-body">Examples may include:</p>
                                <ul className="ufd-list">
                                    <li><Star size={18} /><span>Captain's Welcome Dinner</span></li>
                                    <li><Sparkles size={18} /><span>Farewell Gala Dinner</span></li>
                                    <li><Utensils size={18} /><span>Regional tasting menus</span></li>
                                    <li><Wine size={18} /><span>Wine tastings</span></li>
                                    <li><Coffee size={18} /><span>Afternoon tea</span></li>
                                    <li><Music size={18} /><span>Local food demonstrations</span></li>
                                    <li><Gem size={18} /><span>Destination-inspired celebrations</span></li>
                                </ul>
                                <div className="ufd-info-callout">
                                    <Sparkles size={18} />
                                    <span>Availability varies depending on the itinerary and ship.</span>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <Sparkles size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DINING ATMOSPHERE ── */}
                <section className="ufd-alt-section">
                    <div className="ufd-container">
                        <div className="ufd-grid">
                            <div className="ufd-text-col">
                                <span className="ufd-eyebrow">THE EXPERIENCE</span>
                                <h2 className="ufd-section-heading">Dining Atmosphere</h2>
                                <div className="ufd-heading-separator"></div>
                                <p className="ufd-lead">Uniworld maintains an elegant yet relaxed dining environment.</p>
                                <p className="ufd-body">Guests generally appreciate:</p>
                                <div className="ufd-pillars">
                                    {['No formal dress code', 'Smart casual evenings', 'Comfortable seating', 'Friendly service', 'Scenic river views', 'Flexible dining times'].map((item, idx) => (
                                        <div key={idx} className="ufd-pillar">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="ufd-info-callout">
                                    <Heart size={18} />
                                    <span>This atmosphere makes dining enjoyable without feeling overly formal.</span>
                                </div>
                            </div>
                            <div className="ufd-image-col">
                                <div className="ufd-image-frame">
                                    <div className="ufd-image-placeholder">
                                        <GlassWater size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TIPS FOR ENJOYING THE DINING EXPERIENCE ── */}
                <section className="ufd-table-section">
                    <div className="ufd-container">
                        <div className="ufd-center-header">
                            <span className="ufd-eyebrow">INSIDER ADVICE</span>
                            <h2 className="ufd-section-heading">Tips for Enjoying <br /> the Dining Experience</h2>
                            <div className="ufd-heading-separator ufd-bar-centered"></div>
                            <p className="ufd-intro-lead" style={{ textAlign: 'center' }}>To make the most of your meals onboard:</p>
                        </div>
                        <div className="ufd-tips-grid">
                            {[
                                'Try regional specialties each day.',
                                'Participate in wine tastings when available.',
                                'Inform staff about dietary needs before sailing.',
                                'Pair meals with local wines.',
                                'Save room for regional desserts.',
                                'Ask servers about daily chef recommendations.'
                            ].map((tip, idx) => (
                                <div key={idx} className="ufd-tip-card">
                                    <div className="ufd-tip-number">{String(idx + 1).padStart(2, '0')}</div>
                                    <p>{tip}</p>
                                </div>
                            ))}
                        </div>
                        <div className="ufd-table-note-center">
                            <p><Sparkles size={18} /> These small choices can enhance the overall culinary experience.</p>
                        </div>
                    </div>
                </section>

                {/* ── HOW UNIWORLD DINING COMPARES ── */}
                <section className="ufd-compare-section">
                    <div className="ufd-container">
                        <div className="ufd-compare-content">
                            <div className="ufd-compare-left">
                                <span className="ufd-eyebrow">COMPARISON</span>
                                <h2 className="ufd-section-heading">How Uniworld Dining Compares</h2>
                                <div className="ufd-heading-separator"></div>
                            </div>
                            <div className="ufd-compare-right">
                                <p>
                                    Compared with many premium river cruise lines, Uniworld places a strong emphasis on
                                    destination-inspired cuisine, premium beverages, and personalized service. Rather than
                                    offering identical menus across every sailing, meals evolve throughout the itinerary to
                                    reflect local culture and ingredients, giving guests a richer culinary experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="ufd-expert-insight-section">
                    <div className="ufd-expert-insight-container">

                        <div className="ufd-expert-portrait-panel">
                            <div className="ufd-expert-img-container">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Dining & River Cruise Expert" />
                            </div>
                            <div className="ufd-expert-stats-strip">
                                <div className="ufd-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Experience</p>
                                </div>
                                <div className="ufd-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Visited</p>
                                </div>
                            </div>
                        </div>

                        <div className="ufd-expert-content-panel">
                            <span className="ufd-eyebrow ufd-eyebrow-light">MEET THE CEO</span>
                            <h2 className="ufd-section-heading ufd-white-heading">Insight from Angela Hughes</h2>
                            <div className="ufd-heading-separator ufd-separator-blue"></div>

                            <p className="ufd-expert-quote">
                                "Uniworld's dining is genuinely one of the most underrated luxuries on the river. From farm-sourced regional menus to the sommelier-curated wine cellar, every meal is an extension of the destination. It's not just food — it's part of the story."
                            </p>

                            <div className="ufd-expert-priorities">
                                <h5>Dining Highlights Matrix:</h5>
                                <div className="ufd-expert-pills">
                                    {['Regional Cuisine Focus', 'Award-Winning Sommeliers', 'All-Inclusive Beverages', 'Private Dining Options', 'Chef-Led Cooking Classes', 'Farm-to-Table Philosophy'].map(pill => (
                                        <span key={pill} className="ufd-expert-pill">
                                            <Anchor size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="ufd-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes has experienced Uniworld's culinary programme across multiple rivers — and consistently ranks it among the finest dining at sea or on land.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="ufd-dark-section">
                    <div className="ufd-dark-bg"></div>
                    <div className="ufd-container">
                        <div className="ufd-center-header">
                            <span className="ufd-eyebrow ufd-eyebrow-light">SUMMARY</span>
                            <h2 className="ufd-section-heading ufd-white-heading">Key Takeaways</h2>
                            <div className="ufd-heading-separator ufd-separator-white ufd-bar-centered"></div>
                        </div>
                        <div className="ufd-takeaways-grid">
                            {[
                                'Uniworld emphasizes destination-inspired gourmet dining.',
                                'Breakfast, lunch, dinner, snacks, and premium beverages are typically included.',
                                'Menus feature regional specialties that reflect each itinerary.',
                                'Dietary requirements can usually be accommodated with advance notice.',
                                'Premium wines and local beverages complement daily meals.',
                                'Dining is elegant yet relaxed, with no formal dress code on most evenings.',
                                'Culinary experiences are an integral part of the overall luxury river cruise experience.'
                            ].map((item, idx) => (
                                <div key={idx} className="ufd-takeaway-item">
                                    <CheckCircle size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="ufd-faq-section">
                    <div className="ufd-container">
                        <div className="ufd-center-header">
                            <h2 className="ufd-section-heading">Frequently Asked Questions</h2>
                            <div className="ufd-heading-separator ufd-bar-centered"></div>
                        </div>
                        <div className="ufd-faq-list">
                            {ufdFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ufd-faq-item"
                                    onClick={() => ufdToggleFaq(index)}
                                >
                                    <div className="ufd-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ufd-faq-toggle-icon">{ufdActiveFaq === index ? '−' : '+'}</span>
                                    </div>
                                    {ufdActiveFaq === index && (
                                        <p className="ufd-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CONTINUE EXPLORING (INTERNAL LINKS) ── */}
                <section className="ufd-links-section">
                    <div className="ufd-container">
                        <div className="ufd-center-header">
                            <span className="ufd-eyebrow">KEEP EXPLORING</span>
                            <h2 className="ufd-section-heading">Continue Exploring Uniworld River Cruises</h2>
                            <div className="ufd-heading-separator ufd-bar-centered"></div>
                        </div>
                        <div className="ufd-links-grid">
                            {[
                                { text: 'Uniworld River Cruises Guide', url: '/uniworld-river-cruises/' },
                                { text: "What Is Included on a Uniworld River Cruise", url: '/uniworld-river-cruises/whats-included/' },
                                { text: 'Best Uniworld River Cruise Itineraries', url: '/uniworld-river-cruises/best-itineraries/' },
                                { text: 'Uniworld Ships and Suites', url: '/uniworld-river-cruises/ships-suites/' },
                                { text: 'First-Time Uniworld River Cruise Guide', url: '/uniworld-river-cruises/first-time-guide/' },
                                { text: 'Is Uniworld Worth the Money', url: '/uniworld-river-cruises/is-uniworld-worth-it/' },
                                { text: 'Luxury River Cruises', url: '/luxury-river-cruises/' }
                            ].map((link, idx) => (
                                <Link to={link.url} key={idx} className="ufd-link-card">
                                    <span>{link.text}</span>
                                    <ChevronRight size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="ufd-cta-section">
                    <div className="ufd-cta-aurora-glow"></div>
                    <div className="ufd-cta-crystal ufd-cta-crystal-1"></div>
                    <div className="ufd-cta-crystal ufd-cta-crystal-2"></div>
                    <div className="ufd-cta-crystal ufd-cta-crystal-3"></div>
                    <div className="ufd-cta-grid-lines"></div>

                    <div className="ufd-cta-content">
                        <div className="ufd-cta-compass-ring">
                            <Compass size={28} />
                        </div>
                        <span className="ufd-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                        <h2 className="ufd-cta-title">Discover Uniworld's Exceptional <br /> Dining Experience</h2>
                        <div className="ufd-cta-bar"></div>
                        <p className="ufd-cta-subtitle">
                            Explore itineraries, compare ships, and find the luxury river cruise that matches your
                            culinary interests and travel style.
                        </p>
                        <div className="ufd-cta-actions">
                            <Link to="/contact" className="ufd-cta-primary-btn">
                                <Phone size={18} />
                                <span>Speak With a Travel Advisor</span>
                                <ArrowRight size={16} className="ufd-cta-btn-arrow" />
                            </Link>
                            <Link to="/uniworld-river-cruises/best-itineraries/" className="ufd-cta-secondary-btn">
                                <LayoutList size={18} />
                                <span>Explore Itineraries</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default UniworldFoodDining