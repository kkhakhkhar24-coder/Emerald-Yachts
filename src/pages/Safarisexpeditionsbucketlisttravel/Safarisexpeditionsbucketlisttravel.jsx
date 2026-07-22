import Navbar from '../../components/Navbar/Navbar'
import './Safarisexpeditionsbucketlisttravel.css'
import {
    Compass, Users, Globe, Calendar, Sparkles, Camera,
    Ship, Anchor, Mountain, Home, Star, Phone,
    CheckCircle, LayoutList, Binoculars, Fish, Snowflake,
    Leaf, Award, MapPin, Sun, Plane, Crown
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* Hero Images */
import hero1 from '../../assets/Safarisexpeditionsbucketlisttravel/african-safari-expedition-hero.png'
import hero2 from '../../assets/Safarisexpeditionsbucketlisttravel/antarctica-expedition-cruise-hero.png'
import hero3 from '../../assets/Safarisexpeditionsbucketlisttravel/galapagos-islands-luxury-yacht-hero.png'

/* Intro Image */
import introSafariDrive from '../../assets/Safarisexpeditionsbucketlisttravel/luxury-african-safari-game-drive.png'

/* Safari Countries */
import kenyaImg from '../../assets/Safarisexpeditionsbucketlisttravel/kenya-masai-mara-luxury-safari.png'
import tanzaniaImg from '../../assets/Safarisexpeditionsbucketlisttravel/tanzania-serengeti-great-migration-safari.png'
import botswanaImg from '../../assets/Safarisexpeditionsbucketlisttravel/botswana-okavango-delta-luxury-safari.png'
import southAfricaImg from '../../assets/Safarisexpeditionsbucketlisttravel/south-africa-kruger-luxury-safari.png'
import namibiaImg from '../../assets/Safarisexpeditionsbucketlisttravel/namibia-sossusvlei-red-dunes-safari.png'
import zambiaImg from '../../assets/Safarisexpeditionsbucketlisttravel/zambia-victoria-falls-safari.png'
import zimbabweImg from '../../assets/Safarisexpeditionsbucketlisttravel/zimbabwe-mana-pools-safari.png'
import rwandaImg from '../../assets/Safarisexpeditionsbucketlisttravel/rwanda-gorilla-trekking-safari.png'

/* Antarctica Expedition Images */
import antarcticaGlaciers from '../../assets/Safarisexpeditionsbucketlisttravel/antarctica-expedition-glaciers-vessel.png'
import antarcticaPenguins from '../../assets/Safarisexpeditionsbucketlisttravel/antarctica-gentoo-penguin-colony-wildlife.webp'
import antarcticaZodiac from '../../assets/Safarisexpeditionsbucketlisttravel/antarctica-zodiac-expedition-excursion.jpg'

/* Galápagos Cruise Images */
import galapagosTortoise from '../../assets/Safarisexpeditionsbucketlisttravel/galapagos-giant-tortoise-wildlife-sanctuary.jpg'
import galapagosBooby from '../../assets/Safarisexpeditionsbucketlisttravel/galapagos-blue-footed-booby-wildlife.webp'
import galapagosSnorkeling from '../../assets/Safarisexpeditionsbucketlisttravel/galapagos-snorkeling-marine-life-expedition.webp'

/* Expedition Cruise Images */
import expeditionVessel from '../../assets/Safarisexpeditionsbucketlisttravel/luxury-polar-expedition-cruise-vessel.jpg'
import norwegianFjords from '../../assets/Safarisexpeditionsbucketlisttravel/norwegian-fjords-expedition-cruise-landscape.webp'
import arcticKayaking from '../../assets/Safarisexpeditionsbucketlisttravel/arctic-kayaking-expedition-excursion.webp'

/* Family Adventure Images */
import familySafari from '../../assets/Safarisexpeditionsbucketlisttravel/multigenerational-family-safari-vacation.jpg'
import grandparentsSafari from '../../assets/Safarisexpeditionsbucketlisttravel/grandparents-grandchildren-safari-experience.jpg'
import teenagersAdventure from '../../assets/Safarisexpeditionsbucketlisttravel/teenagers-family-expedition-adventure-vacation.jpg'

/* Luxury Accommodations Images */
import lodgeDeck from '../../assets/Safarisexpeditionsbucketlisttravel/luxury-safari-lodge-private-deck-suite.jpg'
import glampingSuite from '../../assets/Safarisexpeditionsbucketlisttravel/boutique-expedition-camp-glamping-suite.jpg'
import cruiseSuite from '../../assets/Safarisexpeditionsbucketlisttravel/expedition-cruise-ship-suite-balcony-view.jpg'
import resortDining from '../../assets/Safarisexpeditionsbucketlisttravel/eco-luxury-resort-dining-experience.webp'

/* Conservation Image */
import conservationImg from '../../assets/Safarisexpeditionsbucketlisttravel/wildlife-conservation-responsible-travel.webp'

/* Why Choose Us Image */
import whyChooseUsImg from '../../assets/Safarisexpeditionsbucketlisttravel/family-enjoying-luxury-expedition-adventure.jpg'

function SafarisExpeditionsBucketListTravel() {

    /* Hero rotating background images */
    const sfexHeroImages = [
        hero1,
        hero2,
        hero3
    ]
    const [sfexCurrentHero, setSfexCurrentHero] = useState(0)
    useEffect(() => {
        const sfexTimer = setInterval(() => {
            setSfexCurrentHero((prev) => (prev + 1) % sfexHeroImages.length)
        }, 5000)
        return () => clearInterval(sfexTimer)
    }, [sfexHeroImages.length])

    const [sfexActiveFaq, setSfexActiveFaq] = useState(null)
    const sfexToggleFaq = (index) => {
        setSfexActiveFaq(sfexActiveFaq === index ? null : index)
    }

    /* Why choose a bucket list adventure */
    const sfexWhyAdventure = [
        { text: 'Rare wildlife encounters', icon: Binoculars },
        { text: 'Cultural immersion', icon: Globe },
        { text: 'Exclusive destinations', icon: MapPin },
        { text: 'Personalized itineraries', icon: LayoutList },
        { text: 'Luxury accommodations', icon: Home },
        { text: 'Expert naturalist guides', icon: Compass },
        { text: 'Small-group experiences', icon: Users },
        { text: 'Lifelong memories', icon: Star }
    ]

    /* African safari countries with images */
    const sfexSafariCountries = [
        { name: 'Kenya', img: kenyaImg },
        { name: 'Tanzania', img: tanzaniaImg },
        { name: 'Botswana', img: botswanaImg },
        { name: 'South Africa', img: southAfricaImg },
        { name: 'Namibia', img: namibiaImg },
        { name: 'Zambia', img: zambiaImg },
        { name: 'Zimbabwe', img: zimbabweImg },
        { name: 'Rwanda', img: rwandaImg }
    ]

    const sfexSafariExperiences = [
        'Big Five wildlife viewing', 'Private game drives', 'Luxury safari lodges', 'Hot air balloon safaris',
        'Walking safaris', 'Gorilla trekking', 'Cultural village visits', 'Private photography excursions'
    ]

    /* Luxury accommodations */
    const sfexAccommodationFeatures = [
        'Luxury safari lodges', 'Boutique camps', 'Expedition suites', 'Private villas',
        'Five-star hotels', 'Eco-luxury resorts', 'Luxury cruise suites', 'Private charter experiences'
    ]

    /* Concierge services */
    const sfexConciergeServices = [
        'International flights', 'Private aviation', 'Airport VIP assistance', 'Luxury transfers',
        'Private guides', 'Customized excursions', 'Travel insurance recommendations', 'Dining reservations',
        'Special celebrations', '24/7 travel support'
    ]

    /* Conservation */
    const sfexConservationItems = [
        { text: 'Sustainable tourism', icon: Leaf },
        { text: 'Wildlife protection', icon: Binoculars },
        { text: 'Environmental stewardship', icon: Globe },
        { text: 'Local community engagement', icon: Users },
        { text: 'Responsible expedition practices', icon: Compass }
    ]

    /* Why choose us */
    const sfexWhyChooseUs = [
        { title: 'Personalized itinerary design', icon: LayoutList },
        { title: 'Luxury expedition expertise', icon: Ship },
        { title: 'Safari specialists', icon: Binoculars },
        { title: 'Concierge-level service', icon: Star },
        { title: 'Exclusive travel partnerships', icon: Award },
        { title: 'Global destination knowledge', icon: Globe },
        { title: 'Flexible planning', icon: Calendar },
        { title: 'Ongoing travel support', icon: Phone }
    ]

    /* FAQs */
    const sfexFaqs = [
        { question: 'What is bucket list travel?', answer: 'Bucket list travel refers to once-in-a-lifetime journeys to extraordinary destinations such as Antarctica, Africa, the Galápagos Islands, and other iconic locations.' },
        { question: 'Which African countries are best for luxury safaris?', answer: 'Kenya, Tanzania, Botswana, South Africa, Namibia, Zambia, Zimbabwe, and Rwanda are among the top luxury safari destinations.' },
        { question: 'What animals can I see on an African safari?', answer: 'Depending on the destination, travelers may see the Big Five, elephants, giraffes, lions, leopards, cheetahs, zebras, rhinos, and many other species.' },
        { question: 'Is Antarctica safe to visit?', answer: 'Yes. Antarctica expeditions are operated by experienced expedition teams using purpose-built ships and strict environmental guidelines.' },
        { question: 'What is special about the Galápagos Islands?', answer: 'The Galápagos are renowned for unique wildlife found nowhere else on Earth, making them one of the world\'s premier wildlife destinations.' },
        { question: 'What is an expedition cruise?', answer: 'An expedition cruise combines luxury accommodations with exploration, guided excursions, wildlife encounters, and educational experiences.' },
        { question: 'Are luxury safaris suitable for families?', answer: 'Yes. Many safari lodges and itineraries are designed specifically for families and multigenerational travelers.' },
        { question: 'What should I pack for an expedition?', answer: 'Packing depends on the destination but generally includes layered clothing, waterproof gear, comfortable footwear, binoculars, and photography equipment.' },
        { question: 'Can private safaris be arranged?', answer: 'Absolutely. We specialize in customized private safaris with exclusive guides, luxury accommodations, and personalized itineraries.' },
        { question: 'How far in advance should I book a bucket list vacation?', answer: 'Luxury safaris and expedition cruises should ideally be booked 9 to 18 months in advance due to limited availability.' },
        { question: 'Do you arrange private jet transportation?', answer: 'Yes. We coordinate private aviation, VIP airport services, luxury transfers, and complete travel logistics.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel provides expert planning, luxury accommodations, trusted expedition partners, concierge-level service, and personalized adventures tailored to every traveler.' }
    ]

    const sfexSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel",
                "name": "Safaris, Expeditions & Bucket List Travel",
                "url": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel",
                "description": "Luxury safaris, Antarctica expeditions, Galápagos cruises, and bucket list vacations designed for travelers seeking extraordinary adventure experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "description": "Luxury travel agency specializing in African safaris, expedition cruises, bucket list vacations, luxury cruises, and personalized adventure travel."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel#article",
                "headline": "Safaris, Expeditions & Bucket List Travel",
                "url": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel",
                "description": "Expert guide to luxury African safaris, Antarctica expeditions, Galápagos cruises, expedition voyages, wildlife adventures, and bucket list travel experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/safaris-expeditions-bucket-list-travel.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel" }
            },
            {
                "@type": "Service",
                "name": "Luxury Safari & Expedition Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Adventure Travel Consulting",
                "description": "Expert planning services for African safaris, Antarctica expeditions, Galápagos cruises, expedition voyages, wildlife adventures, and personalized bucket list vacations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Family Travel", "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel" },
                    { "@type": "ListItem", "position": 3, "name": "Safaris, Expeditions & Bucket List Travel", "item": "https://www.tripsshipsluxurytravel.com/safaris-expeditions-bucket-list-travel" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is bucket list travel?", "acceptedAnswer": { "@type": "Answer", "text": "Bucket list travel includes once-in-a-lifetime journeys to extraordinary destinations such as Africa, Antarctica, and the Galápagos Islands." } },
                    { "@type": "Question", "name": "Which African countries are best for luxury safaris?", "acceptedAnswer": { "@type": "Answer", "text": "Kenya, Tanzania, Botswana, South Africa, Namibia, Zambia, Zimbabwe, and Rwanda are among the leading luxury safari destinations." } },
                    { "@type": "Question", "name": "What wildlife can I see on safari?", "acceptedAnswer": { "@type": "Answer", "text": "Travelers may see the Big Five, elephants, giraffes, lions, leopards, zebras, rhinos, cheetahs, and countless bird species." } },
                    { "@type": "Question", "name": "Is Antarctica safe to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Antarctica expeditions are operated by experienced teams following strict safety and environmental regulations." } },
                    { "@type": "Question", "name": "Why are the Galápagos Islands unique?", "acceptedAnswer": { "@type": "Answer", "text": "The Galápagos Islands are famous for endemic wildlife, pristine ecosystems, and exceptional wildlife viewing." } },
                    { "@type": "Question", "name": "What is an expedition cruise?", "acceptedAnswer": { "@type": "Answer", "text": "An expedition cruise combines luxury accommodations with guided exploration, wildlife encounters, and educational experiences." } },
                    { "@type": "Question", "name": "Are luxury safaris suitable for families?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many luxury safari lodges offer family-friendly accommodations and activities for multiple generations." } },
                    { "@type": "Question", "name": "What should I pack for an expedition?", "acceptedAnswer": { "@type": "Answer", "text": "Layered clothing, waterproof outerwear, sturdy footwear, binoculars, and camera equipment are recommended." } },
                    { "@type": "Question", "name": "Can private safaris be arranged?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private safaris with dedicated guides, luxury lodges, and personalized itineraries can be arranged." } },
                    { "@type": "Question", "name": "How far in advance should I book a bucket list vacation?", "acceptedAnswer": { "@type": "Answer", "text": "Booking 9 to 18 months in advance is recommended for luxury safaris and expedition cruises." } },
                    { "@type": "Question", "name": "Do you arrange private jet transportation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private aviation, VIP airport services, and luxury transfers can all be coordinated." } },
                    { "@type": "Question", "name": "Why choose Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel offers expert planning, luxury accommodations, trusted expedition partners, concierge-level service, and personalized bucket list adventures." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Safaris, Expeditions & Bucket List Travel | African Safaris & Adventure Vacations</title>
                <meta name="title" content="Safaris, Expeditions & Bucket List Travel | Luxury Adventure Travel" />
                <meta
                    name="description"
                    content="Plan extraordinary bucket list vacations with luxury African safaris, Antarctica expeditions, Galápagos cruises, polar adventures, and once-in-a-lifetime journeys designed by Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="African safaris, Antarctica expeditions, Galápagos cruises, Bucket list vacations, Luxury adventure travel, Luxury safaris, Expedition cruises, Polar expeditions, Family adventure travel, Wildlife vacations" />
                <script type="application/ld+json">
                    {JSON.stringify(sfexSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="sfex-page-wrapper">

                {/* HERO SECTION */}
                <section className="sfex-hero-section">
                    {sfexHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`sfex-hero-slide ${sfexCurrentHero === idx ? 'sfex-slide-active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                    <div className="sfex-hero-overlay"></div>
                    <div className="sfex-hero-content">
                        <div className="sfex-hero-tag">
                            <Compass size={16} />
                            <span>Luxury Adventure & Expedition Travel</span>
                        </div>
                        <h1 className="sfex-hero-title">Safaris, Expeditions & Bucket List Travel</h1>
                        <p className="sfex-hero-subtitle">
                            Extraordinary Journeys for Extraordinary Families
                        </p>
                        <div className="sfex-hero-btn-row">
                            <button className="sfex-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="sfex-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="sfex-intro-section">
                    <div className="sfex-intro-container">
                        <div className="sfex-intro-grid">
                            <div className="sfex-intro-copy">
                                <span className="sfex-eyebrow-label">LIFE-CHANGING EXPERIENCES</span>
                                <h2 className="sfex-section-heading">Extraordinary Journeys for Extraordinary Families</h2>
                                <div className="sfex-heading-bar"></div>
                                <p className="sfex-lead-paragraph">
                                    Some destinations are more than vacations—they are life-changing experiences. Watching lions roam the African savanna, standing among towering glaciers in Antarctica, or witnessing giant tortoises in the Galápagos Islands creates memories that remain with you forever.
                                </p>
                                <p className="sfex-lead-paragraph">
                                    At Trips & Ships Luxury Travel, we design luxury safaris, expedition cruises, and bucket list adventures for families, couples, executives, and discerning travelers seeking the world's most remarkable destinations.
                                </p>
                                <div className="sfex-intro-highlight-box">
                                    Every itinerary combines authentic exploration with luxury accommodations, expert guides, personalized service, and seamless travel planning.
                                </div>
                            </div>
                            <div className="sfex-intro-image-frame">
                                <img src={introSafariDrive} alt="Luxury African safari game drive experience with expert guide" />
                                <div className="sfex-intro-badge-float">
                                    <Compass size={18} />
                                    <span>Expertly Guided Adventures</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A BUCKET LIST ADVENTURE */}
                <section className="sfex-why-section">
                    <div className="sfex-why-container">
                        <div className="sfex-why-header">
                            <span className="sfex-eyebrow-label">ADVENTURE MEETS COMFORT</span>
                            <h2 className="sfex-section-heading">Why Choose a Bucket List Adventure?</h2>
                            <div className="sfex-heading-bar sfex-bar-center"></div>
                            <p className="sfex-lead-paragraph">
                                Luxury adventure travel combines unforgettable experiences with exceptional comfort. Benefits include:
                            </p>
                        </div>
                        <div className="sfex-why-grid">
                            {sfexWhyAdventure.map((item, idx) => {
                                const SfexIcon = item.icon
                                return (
                                    <div key={idx} className="sfex-why-card">
                                        <div className="sfex-why-icon-ring">
                                            <SfexIcon size={22} />
                                        </div>
                                        <p className="sfex-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sfex-lead-paragraph" style={{ textAlign: 'center', color: '#cbd5e1', maxWidth: '780px', margin: '40px auto 0' }}>
                            Our journeys allow travelers to experience the world's most spectacular places without compromising comfort or service.
                        </p>
                    </div>
                </section>

                {/* LUXURY AFRICAN SAFARIS */}
                <section className="sfex-country-section">
                    <div className="sfex-country-container">
                        <div className="sfex-country-header">
                            <span className="sfex-eyebrow-label">
                                <Binoculars size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Luxury African Safaris
                            </span>
                            <h2 className="sfex-section-heading">An African safari remains one of the world's greatest travel experiences.</h2>
                            <div className="sfex-heading-bar sfex-bar-center"></div>
                            <p className="sfex-lead-paragraph">Popular destinations include:</p>
                        </div>
                        <div className="sfex-country-grid">
                            {sfexSafariCountries.map((country, idx) => (
                                <div key={idx} className="sfex-country-card">
                                    <img src={country.img} alt={`${country.name} luxury safari destination`} />
                                    <div className="sfex-country-card-overlay">
                                        <h4 className="sfex-country-card-name">{country.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="sfex-lead-paragraph" style={{ textAlign: 'center' }}>Luxury safari experiences may include:</p>
                        <div className="sfex-experience-pills-wrap">
                            {sfexSafariExperiences.map((exp, idx) => (
                                <span key={idx} className="sfex-experience-pill">{exp}</span>
                            ))}
                        </div>
                        <p className="sfex-lead-paragraph" style={{ textAlign: 'center', maxWidth: '780px', margin: '30px auto 0' }}>
                            Every safari is customized to your interests, preferred pace, and travel style.
                        </p>
                    </div>
                </section>

                {/* ANTARCTICA EXPEDITIONS */}
                <section className="sfex-journey-section">
                    <div className="sfex-journey-container">
                        <div className="sfex-journey-grid">
                            <div className="sfex-journey-media">
                                <img className="sfex-media-tall" src={antarcticaGlaciers} alt="Antarctica polar expedition vessel among giant glaciers" />
                                <img className="sfex-media-short" src={antarcticaPenguins} alt="Gentoo penguin colonies in Antarctica snow shoreline" />
                                <img className="sfex-media-short" src={antarcticaZodiac} alt="Zodiac boat expedition excursion near icebergs in Antarctica" />
                            </div>
                            <div className="sfex-journey-copy">
                                <span className="sfex-journey-eyebrow">
                                    <Snowflake size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Antarctica Expeditions
                                </span>
                                <h3 className="sfex-journey-title">Antarctica offers one of the most extraordinary travel experiences on Earth.</h3>
                                <p className="sfex-journey-intro">Highlights include:</p>
                                <ul className="sfex-journey-list">
                                    {['Massive glaciers', 'Penguin colonies', 'Whale watching', 'Zodiac landings', 'Icebergs', 'Scientific research stations', 'Polar photography', 'Expert expedition teams'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="sfex-journey-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="sfex-journey-footnote">
                                    Luxury expedition ships provide elegant accommodations while allowing travelers to safely explore the White Continent.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALÁPAGOS CRUISES */}
                <section className="sfex-journey-section sfex-journey-soft">
                    <div className="sfex-journey-container">
                        <div className="sfex-journey-grid sfex-journey-reverse">
                            <div className="sfex-journey-media">
                                <img className="sfex-media-tall" src={galapagosTortoise} alt="Giant tortoise wildlife in Galápagos Islands" />
                                <img className="sfex-media-short" src={galapagosBooby} alt="Blue-footed booby birds in Galápagos Islands" />
                                <img className="sfex-media-short" src={galapagosSnorkeling} alt="Snorkeling with marine life in Galápagos Islands" />
                            </div>
                            <div className="sfex-journey-copy">
                                <span className="sfex-journey-eyebrow">
                                    <Fish size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Galápagos Cruises
                                </span>
                                <h3 className="sfex-journey-title">The Galápagos Islands are unlike anywhere else in the world.</h3>
                                <p className="sfex-journey-intro">Visitors can experience:</p>
                                <ul className="sfex-journey-list">
                                    {['Giant tortoises', 'Blue-footed boobies', 'Marine iguanas', 'Sea lions', 'Snorkeling', 'Guided island walks', 'Wildlife photography', 'Conservation-focused tourism'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="sfex-journey-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="sfex-journey-footnote">
                                    Small expedition ships provide intimate access to these remarkable islands while preserving their fragile ecosystem.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPEDITION CRUISES */}
                <section className="sfex-journey-section">
                    <div className="sfex-journey-container">
                        <div className="sfex-journey-grid">
                            <div className="sfex-journey-media">
                                <img className="sfex-media-tall" src={expeditionVessel} alt="Ultra-luxury polar expedition cruise ship" />
                                <img className="sfex-media-short" src={norwegianFjords} alt="Norwegian Fjords expedition cruise landscape" />
                                <img className="sfex-media-short" src={arcticKayaking} alt="Arctic kayaking expedition excursion near icebergs" />
                            </div>
                            <div className="sfex-journey-copy">
                                <span className="sfex-journey-eyebrow">
                                    <Ship size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Expedition Cruises
                                </span>
                                <h3 className="sfex-journey-title">Luxury expedition cruises combine exploration with refined onboard experiences.</h3>
                                <p className="sfex-journey-intro">Popular destinations include:</p>
                                <ul className="sfex-journey-list">
                                    {['Arctic', 'Greenland', 'Iceland', 'Norwegian Fjords', 'Alaska', 'Amazon River', 'South Pacific', 'Patagonia'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="sfex-journey-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="sfex-journey-footnote">
                                    Many itineraries include expert lectures, Zodiac excursions, kayaking, hiking, and wildlife encounters.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAMILY ADVENTURE TRAVEL */}
                <section className="sfex-journey-section sfex-journey-soft">
                    <div className="sfex-journey-container">
                        <div className="sfex-journey-grid sfex-journey-reverse">
                            <div className="sfex-journey-media">
                                <img className="sfex-media-tall" src={familySafari} alt="Multigenerational family safari adventure vacation" />
                                <img className="sfex-media-short" src={grandparentsSafari} alt="Grandparents and grandchildren on African safari" />
                                <img className="sfex-media-short" src={teenagersAdventure} alt="Teenagers on family adventure vacation" />
                            </div>
                            <div className="sfex-journey-copy">
                                <span className="sfex-journey-eyebrow">
                                    <Users size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Family Adventure Travel
                                </span>
                                <h3 className="sfex-journey-title">Bucket list adventures are increasingly popular among multigenerational families.</h3>
                                <p className="sfex-journey-intro">Experiences can be tailored for:</p>
                                <ul className="sfex-journey-list">
                                    {['Grandparents', 'Parents', 'Teenagers', 'Adult children'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="sfex-journey-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="sfex-journey-footnote">
                                    Activities are carefully selected to balance adventure, education, relaxation, and family bonding.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS */}
                <section className="sfex-stay-section">
                    <div className="sfex-stay-container">
                        <div className="sfex-stay-grid">
                            <div className="sfex-stay-copy">
                                <span className="sfex-eyebrow-label">
                                    <Home size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Luxury Accommodations
                                </span>
                                <h2 className="sfex-section-heading">Adventure does not mean sacrificing comfort.</h2>
                                <div className="sfex-heading-bar"></div>
                                <p className="sfex-lead-paragraph">We arrange:</p>
                                <div className="sfex-stay-features-grid">
                                    {sfexAccommodationFeatures.map((feature, idx) => (
                                        <div key={idx} className="sfex-stay-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="sfex-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Every accommodation is selected for its quality, location, and exceptional service.
                                </p>
                            </div>
                            <div className="sfex-stay-gallery">
                                <img src={lodgeDeck} alt="Luxury African safari lodge suite with private deck" />
                                <img src={glampingSuite} alt="Boutique expedition camp glamping tent suite" />
                                <img src={cruiseSuite} alt="Expedition cruise ship suite with ocean balcony view" />
                                <img src={resortDining} alt="Eco-luxury resort outdoor dining experience" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PERSONALIZED CONCIERGE SERVICES */}
                <section className="sfex-concierge-section">
                    <div className="sfex-concierge-container">
                        <span className="sfex-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Personalized Concierge Services
                        </span>
                        <h2 className="sfex-section-heading">Our advisors coordinate every aspect of your journey.</h2>
                        <div className="sfex-heading-bar sfex-bar-center"></div>
                        <p className="sfex-lead-paragraph">Services include:</p>
                        <div className="sfex-concierge-pills-wrap">
                            {sfexConciergeServices.map((service, idx) => (
                                <span key={idx} className="sfex-concierge-pill">{service}</span>
                            ))}
                        </div>
                        <p className="sfex-lead-paragraph" style={{ marginTop: '30px' }}>
                            Every detail is managed so you can focus on enjoying the experience.
                        </p>
                    </div>
                </section>

                {/* CONSERVATION & RESPONSIBLE TRAVEL */}
                <section className="sfex-conservation-section">
                    <div className="sfex-conservation-container">
                        <div className="sfex-conservation-copy">
                            <span className="sfex-eyebrow-label" style={{ background: 'rgba(240, 217, 160, 0.15)', color: '#f0d9a0' }}>
                                <Leaf size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Conservation & Responsible Travel
                            </span>
                            <h2 className="sfex-section-heading">Many luxury adventure experiences support wildlife conservation and local communities.</h2>
                            <div className="sfex-heading-bar" style={{ background: '#f0d9a0' }}></div>
                            <p className="sfex-lead-paragraph">We work with trusted partners committed to:</p>
                            <ul className="sfex-conservation-list">
                                {sfexConservationItems.map((item, idx) => {
                                    const SfexIcon = item.icon
                                    return (
                                        <li key={idx}>
                                            <SfexIcon size={18} className="sfex-conservation-list-icon" />
                                            <span>{item.text}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <p className="sfex-lead-paragraph" style={{ marginTop: '22px' }}>
                                Travel can create meaningful experiences while helping preserve extraordinary destinations for future generations.
                            </p>
                        </div>
                        <div className="sfex-conservation-image">
                            <img src={conservationImg} alt="Wildlife conservation and responsible travel" />
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE TRIPS & SHIPS */}
                <section className="sfex-why-us-section">
                    <div className="sfex-why-us-container">
                        <div className="sfex-why-us-top">
                            <div className="sfex-why-us-copy">
                                <span className="sfex-eyebrow-label">TRUSTED EXPEDITION PLANNERS</span>
                                <h2 className="sfex-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                                <div className="sfex-heading-bar"></div>
                                <p className="sfex-lead-paragraph">
                                    Planning remote luxury adventures requires expertise, trusted partnerships, and meticulous attention to detail. Families choose us because we provide:
                                </p>
                            </div>
                            <div className="sfex-why-us-image">
                                <img src={whyChooseUsImg} alt="Family enjoying a luxury expedition adventure" />
                            </div>
                        </div>
                        <div className="sfex-why-us-grid">
                            {sfexWhyChooseUs.map((item, idx) => {
                                const SfexIcon = item.icon
                                return (
                                    <div key={idx} className="sfex-why-us-card">
                                        <div className="sfex-why-us-icon">
                                            <SfexIcon size={22} />
                                        </div>
                                        <p className="sfex-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sfex-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            Whether your dream is an African safari, an Antarctica expedition, a Galápagos cruise, or another bucket list journey, we'll create an unforgettable adventure designed specifically for you.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="sfex-faq-section">
                    <div className="sfex-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="sfex-section-heading">Frequently Asked Questions</h2>
                            <div className="sfex-heading-bar sfex-bar-center"></div>
                        </div>
                        <div className="sfex-faq-list">
                            {sfexFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="sfex-faq-item"
                                    onClick={() => sfexToggleFaq(index)}
                                >
                                    <div className="sfex-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="sfex-faq-toggle">
                                            {sfexActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {sfexActiveFaq === index && (
                                        <p className="sfex-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="sfex-cta-section">
                    <div className="sfex-cta-bg-pattern"></div>
                    <div className="sfex-cta-inner">
                        <h2 className="sfex-cta-heading">Ready to Plan Your Next Bucket List Adventure?</h2>
                        <div className="sfex-cta-separator"></div>
                        <p className="sfex-cta-text">
                            Whether your dream is an African safari, an Antarctica expedition, a Galápagos cruise, or another bucket list journey, we'll create an unforgettable adventure designed specifically for you.
                        </p>
                        <div className="sfex-cta-btn-row">
                            <button className="sfex-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="sfex-btn-outline">
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

export default SafarisExpeditionsBucketListTravel