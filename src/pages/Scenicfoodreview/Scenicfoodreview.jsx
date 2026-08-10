import Navbar from '../../components/Navbar/Navbar'
import '../Luxuryfamilycelebrations/Luxuryfamilycelebrations.css'
import './Scenicfoodreview.css'
import {
    Sparkles, Phone, LayoutList, CheckCircle, UtensilsCrossed, ChefHat,
    Fish, Store, Wine, Coffee, Sun, Home, Compass, Ship, BedDouble,
    Plane, Gift, Users, AlertCircle, Star
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function ScenicFoodReview() {

    const [sfrActiveFaq, setSfrActiveFaq] = useState(null)
    const sfrToggleFaq = (index) => {
        setSfrActiveFaq(sfrActiveFaq === index ? null : index)
    }

    /* Overall Dining Experience */
    const sfrDiningExperience = [
        'Freshly prepared meals', 'International cuisine', 'Regional specialties', 'Multiple dining venues',
        'Elegant presentation', 'Personalized service', 'Flexible dining times', 'Premium ingredients'
    ]

    /* Restaurants on Scenic Eclipse */
    const sfrRestaurants = [
        {
            name: 'Elements',
            text: 'The main restaurant serving breakfast, lunch, and dinner with international menus and destination-inspired cuisine.',
            icon: UtensilsCrossed,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Elements'
        },
        {
            name: "Koko's Asian Fusion",
            text: 'A sophisticated restaurant featuring Japanese, Chinese, Thai, and other Asian-inspired dishes.',
            icon: ChefHat,
            img: 'https://placehold.co/600x500/274472/ffffff?text=Koko%27s+Asian+Fusion'
        },
        {
            name: "Sushi @ Koko's",
            text: 'Fresh sushi, sashimi, and specialty rolls prepared by experienced chefs.',
            icon: Fish,
            img: 'https://placehold.co/600x500/1c2f4a/ffffff?text=Sushi+%40+Koko%27s'
        },
        {
            name: "Night Market @ Koko's",
            text: 'Interactive Asian dining featuring authentic regional flavors.',
            icon: Store,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Night+Market'
        },
        {
            name: 'Lumière',
            text: 'Elegant French fine dining with expertly prepared seasonal menus.',
            icon: Wine,
            img: 'https://placehold.co/600x500/274472/ffffff?text=Lumi%C3%A8re'
        },
        {
            name: 'Azure Bar & Café',
            text: 'Light meals, pastries, coffee, sandwiches, and casual dining throughout the day.',
            icon: Coffee,
            img: 'https://placehold.co/600x500/1c2f4a/ffffff?text=Azure+Bar+%26+Caf%C3%A9'
        },
        {
            name: 'Yacht Club',
            text: 'Poolside dining featuring grilled specialties, pizza, salads, and relaxed outdoor meals.',
            icon: Sun,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Yacht+Club'
        },
        {
            name: 'In-Suite Dining',
            text: 'Guests may also enjoy room service and private dining in their suite.',
            icon: Home,
            img: 'https://placehold.co/600x500/274472/ffffff?text=In-Suite+Dining'
        }
    ]

    /* Quality of the Food */
    const sfrFoodQuality = [
        'Fresh seafood', 'Premium meats', 'Handmade desserts', 'Artisan breads',
        'International cheeses', 'Fresh fruits', 'Seasonal vegetables', 'Beautiful presentation'
    ]

    /* Mediterranean & Regional Cuisine */
    const sfrRegionalCuisine = [
        'Italian pasta', 'Mediterranean seafood', 'Greek specialties', 'French cuisine',
        'Nordic dishes', 'South American flavors', 'Australian wines', 'Local cheeses'
    ]

    /* Wine & Beverage Program */
    const sfrBeverageProgram = [
        'Champagne', 'Premium wines', 'Craft cocktails', 'Top-shelf spirits',
        'Local wines', 'Specialty coffees', 'Espresso drinks', 'Soft drinks', 'Fresh juices'
    ]

    /* Dietary Requirements */
    const sfrDietaryOptions = [
        'Vegetarian meals', 'Vegan cuisine', 'Gluten-free menus',
        'Dairy-free options', 'Low-sodium meals', 'Allergy accommodations'
    ]

    /* Service During Meals */
    const sfrServiceHighlights = [
        'Attentive servers', 'Knowledgeable wine recommendations', 'Personalized preferences remembered',
        'Relaxed dining pace', 'Professional presentation', 'Friendly hospitality'
    ]

    /* Dining Atmosphere */
    const sfrAtmosphereHighlights = [
        'Elegant décor', 'Ocean views', 'Quiet surroundings',
        'No crowded dining rooms', 'Comfortable seating', 'Refined ambiance'
    ]

    /* Is Scenic Better Than Other Luxury Cruise Lines */
    const sfrStrengths = [
        'Multiple specialty restaurants', 'Excellent wine selection', 'High-quality ingredients', 'Destination-inspired cuisine',
        'Butler service', 'Flexible dining', 'Included premium beverages', 'Outstanding service'
    ]

    /* Our Expert Review - What We Love */
    const sfrWhatWeLove = [
        'Exceptional variety', 'High-quality ingredients', 'Multiple specialty restaurants', 'Excellent service',
        'Beautiful presentation', 'Premium beverages included', 'Relaxed dining atmosphere', 'Consistently high standards'
    ]

    /* Our Expert Review - Areas to Consider */
    const sfrAreasToConsider = [
        'Some specialty restaurants require reservations.',
        'Menus may vary depending on itinerary and ship.',
        'Expedition itineraries may offer slightly different dining experiences due to remote destinations.'
    ]

    /* Why Book with Trips & Ships */
    const sfrWhyBookUs = [
        { title: 'Choose the right Scenic itinerary', icon: Compass },
        { title: 'Compare Scenic with other luxury cruise lines', icon: Ship },
        { title: 'Select the best suite', icon: BedDouble },
        { title: 'Explain dining options and inclusions', icon: UtensilsCrossed },
        { title: 'Arrange pre- and post-cruise travel', icon: Plane },
        { title: 'Secure exclusive offers', icon: Gift },
        { title: 'Provide personalized concierge service', icon: Users }
    ]

    /* FAQs */
    const sfrFaqs = [
        { question: 'Is the food good on Scenic Cruises?', answer: 'Yes. Scenic is widely recognized for offering exceptional cuisine with fresh ingredients, multiple restaurants, and destination-inspired menus.' },
        { question: 'Are specialty restaurants included?', answer: 'Yes. Most specialty restaurants aboard Scenic Eclipse are included in your cruise fare.' },
        { question: 'Does Scenic offer room service?', answer: 'Yes. Guests can enjoy in-suite dining and room service throughout their voyage.' },
        { question: 'Are premium beverages included?', answer: 'Yes. Premium wines, cocktails, spirits, beer, soft drinks, and specialty coffees are generally included.' },
        { question: 'Does Scenic accommodate dietary restrictions?', answer: 'Yes. Scenic offers vegetarian, vegan, gluten-free, dairy-free, and allergy-friendly dining options.' },
        { question: 'Is there a buffet?', answer: 'Scenic focuses primarily on made-to-order dining and elegant restaurants rather than traditional large buffets.' },
        { question: 'Which restaurant is most popular?', answer: "Lumière and Koko's Asian Fusion are among the most highly praised dining venues aboard Scenic Eclipse." },
        { question: 'Are reservations required?', answer: 'Some specialty restaurants may require advance reservations depending on availability.' },
        { question: 'Is the dining experience formal?', answer: 'The atmosphere is elegant yet relaxed, with no requirement for overly formal dining every evening.' },
        { question: 'Does Scenic serve local cuisine?', answer: 'Yes. Menus frequently feature regional specialties inspired by the destinations visited.' },
        { question: 'Is Scenic better than other luxury cruise lines for food?', answer: "Many travelers consider Scenic among the industry's best for dining thanks to its variety, quality, premium beverages, and personalized service." },
        { question: 'Is Scenic worth it for food lovers?', answer: 'Absolutely. Scenic offers one of the finest culinary experiences at sea, making it an excellent choice for travelers who value exceptional dining.' }
    ]

    const sfrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-food-review",
                "name": "Scenic Food Review",
                "url": "https://www.tripsandships.com/scenic-food-review",
                "description": "Read our Scenic Food Review and discover what to expect from dining aboard Scenic Eclipse and Scenic Eclipse II, including restaurants, cuisine, beverages, service, and our expert opinion.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-food-review#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/scenic-food-review#article",
                "headline": "Scenic Food Review",
                "url": "https://www.tripsandships.com/scenic-food-review",
                "description": "Expert review of Scenic Cruises dining experience, including restaurants, culinary quality, premium beverages, service, and overall value aboard Scenic Eclipse and Scenic Eclipse II.",
                "image": "https://www.tripsandships.com/images/scenic-food-review.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-food-review" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Scenic cruise planning and consultation services helping travelers compare ships, dining experiences, itineraries, and luxury cruise options."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Food Review", "item": "https://www.tripsandships.com/scenic-food-review" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is the food good on Scenic Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic is widely recognized for offering exceptional cuisine with fresh ingredients, multiple restaurants, and destination-inspired menus." } },
                    { "@type": "Question", "name": "Are specialty restaurants included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most specialty restaurants aboard Scenic Eclipse are included in your cruise fare." } },
                    { "@type": "Question", "name": "Does Scenic offer room service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guests can enjoy in-suite dining and room service throughout their voyage." } },
                    { "@type": "Question", "name": "Are premium beverages included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Premium wines, cocktails, spirits, beer, soft drinks, and specialty coffees are generally included." } },
                    { "@type": "Question", "name": "Does Scenic accommodate dietary restrictions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic offers vegetarian, vegan, gluten-free, dairy-free, and allergy-friendly dining options." } },
                    { "@type": "Question", "name": "Is there a buffet on Scenic?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic focuses primarily on made-to-order dining and elegant restaurants rather than traditional large buffet experiences." } },
                    { "@type": "Question", "name": "Which restaurant is most popular aboard Scenic Eclipse?", "acceptedAnswer": { "@type": "Answer", "text": "Lumière and Koko's Asian Fusion are among the most popular and highly rated dining venues aboard Scenic Eclipse." } },
                    { "@type": "Question", "name": "Are restaurant reservations required?", "acceptedAnswer": { "@type": "Answer", "text": "Some specialty restaurants may require reservations depending on availability and the itinerary." } },
                    { "@type": "Question", "name": "Is the dining experience formal?", "acceptedAnswer": { "@type": "Answer", "text": "The atmosphere is elegant yet relaxed, with flexible dining and no requirement for overly formal attire every evening." } },
                    { "@type": "Question", "name": "Does Scenic serve regional cuisine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic frequently incorporates regional specialties and locally inspired dishes that reflect the destinations visited." } },
                    { "@type": "Question", "name": "Is Scenic better than other luxury cruise lines for food?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers consider Scenic among the best luxury cruise lines for dining thanks to its restaurant variety, premium ingredients, excellent wine selection, and personalized service." } },
                    { "@type": "Question", "name": "Is Scenic worth it for food lovers?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Scenic offers one of the finest culinary experiences at sea, making it an excellent choice for travelers who value exceptional dining and all-inclusive luxury." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Food Review | Dining, Restaurants & Culinary Experience</title>
                <meta name="title" content="Scenic Food Review | Is the Food Worth It?" />
                <meta
                    name="description"
                    content="Read our Scenic Food Review and discover what to expect from dining aboard Scenic Eclipse and Scenic Eclipse II, including restaurants, cuisine, service, beverages, and our expert opinion."
                />
                <meta name="keywords" content="Scenic Food Review, Scenic dining review, Scenic Eclipse restaurants, Scenic cruise food, Scenic luxury dining, Scenic cruise restaurants, Scenic Eclipse food review" />
                <script type="application/ld+json">
                    {JSON.stringify(sfrSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION — reused fcel-hero-* classes */}
                <section className="fcel-hero-section">
                    <div
                        className="fcel-hero-slide fcel-slide-active"
                        style={{ backgroundImage: `url(https://placehold.co/1920x1080/0f1c2e/ffffff?text=Scenic+Dining)` }}
                    />
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Scenic Dining Review</span>
                        </div>
                        <h1 className="fcel-hero-title">Scenic Food Review</h1>
                        <p className="fcel-hero-subtitle">
                            Is the Food on Scenic Worth the Hype?
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION — reused fcel-intro-* classes */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">SCENIC CULINARY EXPERIENCE</span>
                                <h2 className="fcel-section-heading">Dining is one of the highlights of any luxury cruise, and Scenic delivers an exceptional culinary experience that rivals many of the world's finest luxury hotels.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Whether you're sailing aboard Scenic Eclipse or Scenic Eclipse II, you'll enjoy a wide variety of restaurants, fresh ingredients, attentive service, and beautifully presented cuisine inspired by destinations around the world.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Unlike many cruise lines that rely heavily on buffet dining, Scenic emphasizes made-to-order meals, multiple specialty restaurants, premium ingredients, and personalized service. Combined with an extensive selection of premium wines, cocktails, and beverages, dining becomes an unforgettable part of the journey.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <img src="https://placehold.co/700x900/274472/ffffff?text=Scenic+Cuisine" alt="Elegantly plated cuisine aboard Scenic" />
                                <div className="fcel-intro-badge-float">
                                    <Star size={15} />
                                    <span>Six-Star Culinary Program</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    For travelers who appreciate outstanding food, Scenic consistently ranks among the best luxury cruise experiences available.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OVERALL DINING EXPERIENCE — reused fcel-concierge-* classes (pill tags) */}
                <section className="fcel-concierge-section">
                    <div className="fcel-concierge-container">
                        <span className="fcel-eyebrow-label">
                            <UtensilsCrossed size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Overall Dining Experience
                        </span>
                        <h2 className="fcel-section-heading">Scenic's culinary philosophy focuses on quality over quantity.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Guests enjoy:</p>
                        <div className="fcel-concierge-pills-wrap">
                            {sfrDiningExperience.map((item, idx) => (
                                <span key={idx} className="fcel-concierge-pill">{item}</span>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ marginTop: '30px' }}>
                            Every meal is designed to reflect the destinations you're visiting while maintaining consistently high standards throughout the voyage.
                        </p>
                    </div>
                </section>

                {/* RESTAURANTS ON SCENIC ECLIPSE — reused fcel-dest-* classes + new sfr-dest-card-text */}
                <section className="fcel-dest-section">
                    <div className="fcel-dest-container">
                        <div className="fcel-dest-header">
                            <span className="fcel-eyebrow-label">Restaurants on Scenic Eclipse</span>
                            <h2 className="fcel-section-heading">Scenic Eclipse offers several distinct dining venues, allowing guests to enjoy something different every day.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Dining options typically include:</p>
                        </div>
                        <div className="fcel-dest-grid">
                            {sfrRestaurants.map((rest, idx) => {
                                const RestIcon = rest.icon
                                return (
                                    <div key={idx} className="fcel-dest-card" style={{ backgroundImage: `url(${rest.img})` }}>
                                        <div className="fcel-dest-card-overlay"></div>
                                        <div className="fcel-dest-card-content">
                                            <div className="fcel-dest-icon-wrap">
                                                <RestIcon size={22} />
                                            </div>
                                            <h4 className="fcel-dest-card-name">{rest.name}</h4>
                                            <p className="sfr-dest-card-text">{rest.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CTA BANNER — new sfr-midcta section */}
                <section className="sfr-midcta-section">
                    <div className="sfr-midcta-container">
                        <p className="sfr-midcta-text">Curious which Scenic restaurants suit your itinerary best?</p>
                        <Link to="/contact" className="fcel-btn-primary">
                            <Phone size={18} />
                            Ask a Scenic Dining Specialist
                        </Link>
                    </div>
                </section>

                {/* QUALITY OF THE FOOD — reused fcel-villa-* classes (gallery + feature pills) */}
                <section className="fcel-villa-section">
                    <div className="fcel-villa-container">
                        <div className="fcel-villa-grid">
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <ChefHat size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Quality of the Food
                                </span>
                                <h2 className="fcel-section-heading">Scenic consistently receives praise for:</h2>
                                <div className="fcel-heading-bar"></div>
                                <div className="fcel-villa-features-grid">
                                    {sfrFoodQuality.map((item, idx) => (
                                        <div key={idx} className="fcel-villa-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Menus change regularly to provide variety throughout longer voyages.
                                </p>
                            </div>
                            <div className="fcel-villa-gallery">
                                <img src="https://placehold.co/400x400/274472/ffffff?text=Fresh+Seafood" alt="Fresh seafood served aboard Scenic" />
                                <img src="https://placehold.co/400x400/1c2f4a/ffffff?text=Handmade+Desserts" alt="Handmade desserts aboard Scenic" />
                                <img src="https://placehold.co/400x400/0f1c2e/ffffff?text=Artisan+Breads" alt="Artisan breads served aboard Scenic" />
                                <img src="https://placehold.co/400x400/274472/ffffff?text=Elegant+Plating" alt="Beautifully presented cuisine aboard Scenic" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* MEDITERRANEAN & REGIONAL CUISINE — reused fcel-occasion-* classes */}
                <section className="fcel-occasion-section">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid">
                            <div className="fcel-occasion-media">
                                <img className="fcel-media-tall" src="https://placehold.co/500x700/274472/ffffff?text=Mediterranean+Cuisine" alt="Mediterranean-inspired cuisine aboard Scenic" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/1c2f4a/ffffff?text=Italian+Pasta" alt="Italian pasta dish aboard Scenic" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/0f1c2e/ffffff?text=Greek+Specialties" alt="Greek specialties served aboard Scenic" />
                            </div>
                            <div>
                                <span className="fcel-occasion-eyebrow">Mediterranean & Regional Cuisine</span>
                                <h3 className="fcel-occasion-title">One of Scenic's strengths is incorporating local flavors into each itinerary.</h3>
                                <p className="fcel-occasion-intro">Depending on your destination, you may enjoy:</p>
                                <ul className="fcel-occasion-list">
                                    {sfrRegionalCuisine.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    This destination-inspired approach enhances the overall travel experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WINE & BEVERAGE PROGRAM — reused fcel-occasion-* classes (soft bg, reversed) */}
                <section className="fcel-occasion-section fcel-occasion-soft">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid fcel-occasion-reverse">
                            <div className="fcel-occasion-media">
                                <img className="fcel-media-tall" src="https://placehold.co/500x700/1c2f4a/ffffff?text=Wine+%26+Beverage" alt="Wine and beverage program aboard Scenic" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/274472/ffffff?text=Champagne" alt="Champagne service aboard Scenic" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/0f1c2e/ffffff?text=Craft+Cocktails" alt="Craft cocktails aboard Scenic" />
                            </div>
                            <div>
                                <span className="fcel-occasion-eyebrow">Wine & Beverage Program</span>
                                <h3 className="fcel-occasion-title">Scenic's beverage program is among the industry's strongest.</h3>
                                <p className="fcel-occasion-intro">Included selections typically feature:</p>
                                <ul className="fcel-occasion-list">
                                    {sfrBeverageProgram.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    Most beverages are included, creating a truly all-inclusive dining experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DIETARY REQUIREMENTS — reused fcel-reunion-* classes */}
                <section className="fcel-reunion-section">
                    <div className="fcel-reunion-container">
                        <div className="fcel-reunion-grid-layout">
                            <div className="fcel-reunion-media-col">
                                <div className="fcel-reunion-framed-card">
                                    <img src="https://placehold.co/700x800/274472/ffffff?text=Dietary+Options" alt="Dietary accommodations available aboard Scenic" />
                                    <div className="fcel-reunion-frame-badge">Personalized Dining Care</div>
                                </div>
                            </div>
                            <div className="fcel-reunion-copy-col">
                                <span className="fcel-birthday-eyebrow">
                                    <UtensilsCrossed size={16} className="fcel-cake-icon" />
                                    Dietary Requirements
                                </span>
                                <h3 className="fcel-reunion-title">Scenic accommodates a wide variety of dietary needs.</h3>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-reunion-intro">Options include:</p>
                                <div className="fcel-reunion-cards-grid">
                                    {sfrDietaryOptions.map((item, idx) => (
                                        <div key={idx} className="fcel-reunion-card">
                                            <CheckCircle size={16} className="fcel-reunion-card-icon" />
                                            <span className="fcel-reunion-card-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="fcel-reunion-footnote">
                                    Guests are encouraged to notify Scenic before sailing to ensure personalized service.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE DURING MEALS — reused fcel-birthday-* classes (media collage + numbered cards) */}
                <section className="fcel-birthday-section">
                    <div className="fcel-birthday-container">
                        <div className="fcel-birthday-grid">
                            <div className="fcel-birthday-media-collage">
                                <div className="fcel-collage-img-wrap fcel-collage-tall">
                                    <img src="https://placehold.co/500x650/274472/ffffff?text=Attentive+Service" alt="Attentive dining service aboard Scenic" />
                                </div>
                                <div className="fcel-collage-img-wrap fcel-collage-short-1">
                                    <img src="https://placehold.co/500x400/1c2f4a/ffffff?text=Wine+Pairing" alt="Wine recommendation service aboard Scenic" />
                                </div>
                                <div className="fcel-collage-img-wrap fcel-collage-short-2">
                                    <img src="https://placehold.co/500x400/0f1c2e/ffffff?text=Fine+Dining" alt="Fine dining service aboard Scenic" />
                                </div>
                                <div className="fcel-collage-glow"></div>
                            </div>
                            <div className="fcel-birthday-copy">
                                <span className="fcel-birthday-eyebrow">
                                    <Users size={16} className="fcel-cake-icon" />
                                    Service During Meals
                                </span>
                                <h3 className="fcel-birthday-title">Dining service reflects Scenic's six-star reputation.</h3>
                                <p className="fcel-birthday-intro">Guests can expect:</p>
                                <div className="fcel-birthday-cards-container">
                                    {sfrServiceHighlights.map((item, idx) => (
                                        <div key={idx} className="fcel-birthday-card">
                                            <div className="fcel-birthday-card-badge">{idx + 1}</div>
                                            <div className="fcel-birthday-card-content">
                                                <span className="fcel-birthday-card-title">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="fcel-birthday-footnote">
                                    <Sparkles size={16} className="fcel-footnote-sparkle" />
                                    <span>The smaller guest capacity allows crew members to provide highly personalized service.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING ATMOSPHERE — reused fcel-grad-* classes (polaroid board) */}
                <section className="fcel-grad-section">
                    <div className="fcel-grad-container">
                        <div className="fcel-grad-header">
                            <span className="fcel-birthday-eyebrow">
                                <Sparkles size={16} className="fcel-cake-icon" />
                                Dining Atmosphere
                            </span>
                            <h3 className="fcel-grad-title">Unlike larger cruise ships, Scenic offers a relaxed and sophisticated atmosphere.</h3>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-grad-intro">Restaurants feature:</p>
                        </div>

                        <div className="fcel-grad-board">
                            {sfrAtmosphereHighlights.map((item, idx) => {
                                const angles = [-3, 2, -1.5, 3, -2, 1.5]
                                const angle = angles[idx % angles.length]
                                return (
                                    <div key={idx} className="fcel-grad-polaroid" style={{ transform: `rotate(${angle}deg)` }}>
                                        <div className="fcel-grad-polaroid-tape"></div>
                                        <div className="fcel-grad-polaroid-inner">
                                            <div className="fcel-grad-polaroid-badge">
                                                <Sparkles size={16} />
                                            </div>
                                            <h4 className="fcel-grad-polaroid-text">{item}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="fcel-grad-footer">
                            <div className="fcel-grad-footnote">
                                <Sparkles size={16} className="fcel-footnote-sparkle" />
                                <span>The intimate environment makes every meal feel special.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IS SCENIC BETTER THAN OTHER LUXURY CRUISE LINES — reused fcel-retire-* classes (dark numbered grid) */}
                <section className="fcel-retire-section">
                    <div className="fcel-retire-container">
                        <div className="fcel-retire-header">
                            <span className="fcel-birthday-eyebrow">
                                <Star size={16} className="fcel-cake-icon" />
                                Is Scenic Better Than Other Luxury Cruise Lines?
                            </span>
                            <h3 className="fcel-retire-title">Scenic compares favorably with many luxury brands.</h3>
                            <div className="fcel-heading-bar"></div>
                            <p className="fcel-retire-intro">Its strengths include:</p>
                        </div>

                        <div className="fcel-retire-grid">
                            {sfrStrengths.map((item, idx) => (
                                <div key={idx} className="fcel-retire-card">
                                    <div className="fcel-retire-card-number">
                                        <span>{idx + 1}</span>
                                    </div>
                                    <h4 className="fcel-retire-card-text">{item}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="fcel-retire-footnote-wrapper">
                            <div className="fcel-retire-footnote">
                                <Sparkles size={16} className="fcel-footnote-sparkle" />
                                <span>Travelers who prioritize culinary experiences consistently rate Scenic among the top luxury cruise lines.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR EXPERT REVIEW — new sfr-review section (pros / considerations) */}
                <section className="sfr-review-section">
                    <div className="sfr-review-container">
                        <div className="sfr-review-header">
                            <span className="fcel-eyebrow-label">Our Expert Review</span>
                            <h2 className="fcel-section-heading">After evaluating Scenic's dining experience, our overall impression is extremely positive.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="sfr-review-grid">
                            <div className="sfr-review-card sfr-review-card-love">
                                <div className="sfr-review-card-header">
                                    <div className="sfr-review-card-icon">
                                        <CheckCircle size={22} />
                                    </div>
                                    <h3 className="sfr-review-card-title">What We Love</h3>
                                </div>
                                <ul className="sfr-review-list">
                                    {sfrWhatWeLove.map((item, idx) => (
                                        <li key={idx} className="sfr-review-list-item">
                                            <CheckCircle size={16} className="sfr-review-list-icon-love" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sfr-review-card sfr-review-card-consider">
                                <div className="sfr-review-card-header">
                                    <div className="sfr-review-card-icon">
                                        <AlertCircle size={22} />
                                    </div>
                                    <h3 className="sfr-review-card-title">Areas to Consider</h3>
                                </div>
                                <ul className="sfr-review-list">
                                    {sfrAreasToConsider.map((item, idx) => (
                                        <li key={idx} className="sfr-review-list-item">
                                            <AlertCircle size={16} className="sfr-review-list-icon-consider" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="sfr-review-closing">
                            Overall, Scenic delivers one of the finest culinary experiences available at sea.
                        </p>

                        <div className="sfr-review-cta-wrap">
                            <button className="fcel-btn-primary">
                                <Phone size={18} />
                                Get My Scenic Dining Guide
                            </button>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL — reused fcel-why-us-* classes */}
                <section className="fcel-why-us-section">
                    <div className="fcel-why-us-container">
                        <div className="fcel-why-us-top">
                            <div className="fcel-why-us-copy">
                                <span className="fcel-eyebrow-label">TRUSTED SCENIC CRUISE SPECIALISTS</span>
                                <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Our Scenic specialists help you:
                                </p>
                            </div>
                            <div className="fcel-why-us-image">
                                <img src="https://placehold.co/700x600/1c2f4a/ffffff?text=Trips+%26+Ships+Advisors" alt="Trips and Ships Luxury Travel advisors planning a Scenic voyage" />
                            </div>
                        </div>
                        <div className="fcel-why-us-grid">
                            {sfrWhyBookUs.map((item, idx) => {
                                const SfrIcon = item.icon
                                return (
                                    <div key={idx} className="fcel-why-us-card">
                                        <div className="fcel-why-us-icon">
                                            <SfrIcon size={22} />
                                        </div>
                                        <p className="fcel-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            We ensure every detail of your Scenic vacation exceeds expectations.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                            <Link to="/contact" className="fcel-btn-outline" style={{ color: 'var(--fcel-navy)', borderColor: 'rgba(39, 68, 114, 0.35)' }}>
                                <Users size={18} />
                                Speak with a Scenic Specialist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION — reused fcel-faq-* classes */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {sfrFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => sfrToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {sfrActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {sfrActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION — reused fcel-cta-* classes */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Savor the Scenic Culinary Experience?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Let our Scenic specialists guide you through every restaurant, itinerary, and suite option so your next voyage is as unforgettable as the food.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ScenicFoodReview