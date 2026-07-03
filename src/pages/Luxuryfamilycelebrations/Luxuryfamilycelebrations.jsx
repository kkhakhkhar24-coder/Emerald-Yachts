import Navbar from '../../components/Navbar/Navbar'
import './Luxuryfamilycelebrations.css'
import {
    Heart, Users, Globe, Calendar, Sparkles, Gift,
    Cake, Anchor, GraduationCap, Home, Compass, Star,
    CheckCircle, Phone, LayoutList, Plane, Ship, Sun,
    Crown, Award, MapPin, Clock, ChevronRight, Palmtree,
    Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function LuxuryFamilyCelebrations() {

    /* Hero rotating background images */
    const fcelHeroImages = [
        'https://placehold.co/1800x1200?text=Milestone+Vacations',
        'https://placehold.co/1800x1200?text=Family+Reunions',
        'https://placehold.co/1800x1200?text=Anniversary+Travel'
    ]
    const [fcelCurrentHero, setFcelCurrentHero] = useState(0)
    useEffect(() => {
        const fcelTimer = setInterval(() => {
            setFcelCurrentHero((prev) => (prev + 1) % fcelHeroImages.length)
        }, 5000)
        return () => clearInterval(fcelTimer)
    }, [fcelHeroImages.length])

    const [fcelActiveFaq, setFcelActiveFaq] = useState(null)
    const fcelToggleFaq = (index) => {
        setFcelActiveFaq(fcelActiveFaq === index ? null : index)
    }

    /* Why celebrate through travel */
    const fcelWhyTravel = [
        { text: 'Celebrate together without distractions', icon: Users },
        { text: 'Create lasting memories', icon: Heart },
        { text: 'Strengthen family relationships', icon: Home },
        { text: 'Experience new cultures', icon: Globe },
        { text: 'Honor important milestones', icon: Award },
        { text: 'Begin new family traditions', icon: Sparkles },
        { text: 'Reconnect across generations', icon: Users },
        { text: 'Enjoy personalized luxury experiences', icon: Crown }
    ]

    /* Anniversary destinations with images */
    const fcelAnniversaryDestinations = [
        { name: 'Italy', icon: Globe },
        { name: 'France', icon: Heart },
        { name: 'Greece', icon: Anchor },
        { name: 'Bora Bora', icon: Palmtree },
        { name: 'Maldives', icon: Compass },
        { name: 'Hawaii', icon: Sun },
        { name: 'Amalfi Coast', icon: Ship },
        { name: 'Swiss Alps', icon: Mountain }
    ]

    /* Luxury cruise lines */
    const fcelCruiseLines = [
        'Explora Journeys', 'Regent Seven Seas Cruises', 'Crystal Cruises',
        'Silversea Cruises', 'Seabourn', 'Viking'
    ]

    const fcelCruiseBenefits = [
        { text: 'Spacious suites', icon: Home },
        { text: 'Fine dining', icon: Sun },
        { text: 'Entertainment for all ages', icon: Sparkles },
        { text: 'Private shore excursions', icon: Compass },
        { text: 'Personalized service', icon: Heart },
        { text: 'Exceptional value', icon: Gift }
    ]

    /* Private villas offerings */
    const fcelVillaFeatures = [
        'Complete privacy', 'Personal chefs', 'Private pools', 'Concierge services',
        'Spacious gathering areas', 'Flexible dining', 'Customized activities', 'Family-friendly luxury'
    ]

    /* Concierge services */
    const fcelConciergeServices = [
        'Flights', 'Private aviation', 'Luxury accommodations', 'Airport transfers',
        'Restaurant reservations', 'Private tours', 'Entertainment', 'Celebration dinners',
        'Event planning', 'Special surprises'
    ]

    /* Why choose us */
    const fcelWhyChooseUs = [
        { title: 'Personalized itinerary design', icon: LayoutList },
        { title: 'Luxury travel expertise', icon: Crown },
        { title: 'Concierge-level service', icon: Star },
        { title: 'Global destination knowledge', icon: Globe },
        { title: 'Exclusive travel partnerships', icon: Award },
        { title: 'Family travel specialists', icon: Users },
        { title: 'Flexible planning', icon: Calendar },
        { title: 'Ongoing travel support', icon: Phone }
    ]

    /* FAQs */
    const fcelFaqs = [
        { question: 'What are luxury family celebrations?', answer: 'Luxury family celebrations are personalized vacations designed to celebrate important milestones such as birthdays, anniversaries, retirements, graduations, and family reunions.' },
        { question: 'What occasions are best celebrated through travel?', answer: 'Popular celebrations include milestone birthdays, wedding anniversaries, retirements, graduations, family reunions, and special family achievements.' },
        { question: 'Can you plan multigenerational family vacations?', answer: 'Yes. We specialize in designing luxury trips that accommodate grandparents, parents, children, and grandchildren.' },
        { question: 'What destinations are popular for anniversary trips?', answer: 'Italy, France, Greece, Bora Bora, the Maldives, Hawaii, and the Amalfi Coast are among the most popular anniversary destinations.' },
        { question: 'Are luxury cruises good for family celebrations?', answer: 'Absolutely. Luxury cruises offer exceptional dining, entertainment, spacious accommodations, and the convenience of visiting multiple destinations in one vacation.' },
        { question: 'Can private villas be arranged?', answer: 'Yes. We arrange luxury villas with private pools, chefs, concierge services, and customized family experiences.' },
        { question: 'Do you coordinate family reunion travel?', answer: 'Yes. We manage accommodations, transportation, activities, dining, and logistics for family reunions of all sizes.' },
        { question: 'Can you arrange private jet travel?', answer: 'Yes. We coordinate private aviation, airport VIP services, and personalized travel logistics.' },
        { question: 'What concierge services are available?', answer: 'Our concierge services include restaurant reservations, private tours, celebration planning, transportation, event coordination, and exclusive experiences.' },
        { question: 'How far in advance should we plan a celebration trip?', answer: 'For the best availability, we recommend planning luxury family celebrations 6 to 12 months in advance, especially for large groups.' },
        { question: 'Can celebrations be customized around family traditions?', answer: 'Absolutely. Every itinerary is personalized to reflect your family\'s traditions, interests, milestones, and travel style.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel specializes in luxury family celebrations, offering expert planning, personalized service, exclusive travel partnerships, and unforgettable experiences tailored to your family\'s most important moments.' }
    ]

    const fcelSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations",
                "name": "Luxury Family Celebrations",
                "url": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations",
                "description": "Luxury family celebrations featuring milestone vacations, anniversary trips, retirement travel, graduation vacations, and family reunion planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations#article" }
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
                "description": "Luxury travel agency specializing in milestone vacations, anniversary travel, family reunion planning, luxury cruises, and personalized family celebrations."
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
                "@id": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations#article",
                "headline": "Luxury Family Celebrations",
                "url": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations",
                "description": "Expert guide to planning luxury family celebrations including milestone birthdays, anniversary trips, retirement vacations, family reunions, luxury cruises, and exclusive travel experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/luxury-family-celebrations.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations" }
            },
            {
                "@type": "Service",
                "name": "Luxury Family Celebration Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Celebration Travel Consulting",
                "description": "Expert planning services for anniversary trips, milestone vacations, retirement travel, graduation celebrations, family reunions, luxury cruises, and personalized family travel experiences."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Family Travel", "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel" },
                    { "@type": "ListItem", "position": 3, "name": "Luxury Family Celebrations", "item": "https://www.tripsshipsluxurytravel.com/luxury-family-celebrations" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What are luxury family celebrations?", "acceptedAnswer": { "@type": "Answer", "text": "Luxury family celebrations are customized vacations designed to commemorate important milestones such as birthdays, anniversaries, retirements, graduations, and family reunions." } },
                    { "@type": "Question", "name": "What occasions can be celebrated through travel?", "acceptedAnswer": { "@type": "Answer", "text": "Popular occasions include milestone birthdays, anniversaries, retirements, graduations, family reunions, and special family achievements." } },
                    { "@type": "Question", "name": "Can you plan multigenerational family vacations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in planning luxury vacations for grandparents, parents, children, and grandchildren." } },
                    { "@type": "Question", "name": "What are the best destinations for anniversary trips?", "acceptedAnswer": { "@type": "Answer", "text": "Italy, France, Greece, Bora Bora, the Maldives, Hawaii, and the Amalfi Coast are among the most popular luxury anniversary destinations." } },
                    { "@type": "Question", "name": "Are luxury cruises suitable for family celebrations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Luxury cruises provide exceptional accommodations, fine dining, entertainment, and personalized service for celebrations." } },
                    { "@type": "Question", "name": "Can private villas be arranged?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private villas with chefs, concierge services, pools, and customized experiences can be arranged." } },
                    { "@type": "Question", "name": "Do you coordinate family reunion travel?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We coordinate accommodations, transportation, activities, dining, and logistics for family reunions." } },
                    { "@type": "Question", "name": "Can private jet travel be included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private aviation, VIP airport services, and luxury ground transportation can all be arranged." } },
                    { "@type": "Question", "name": "What concierge services do you provide?", "acceptedAnswer": { "@type": "Answer", "text": "We provide restaurant reservations, celebration planning, transportation, private tours, event coordination, and personalized experiences." } },
                    { "@type": "Question", "name": "How early should we plan our celebration trip?", "acceptedAnswer": { "@type": "Answer", "text": "Planning 6 to 12 months in advance provides the best availability for luxury accommodations and exclusive experiences." } },
                    { "@type": "Question", "name": "Can the itinerary be customized around family traditions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every itinerary is personalized to reflect your family's traditions, interests, milestones, and travel preferences." } },
                    { "@type": "Question", "name": "Why choose Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel provides personalized planning, luxury travel expertise, concierge service, and unforgettable family celebration experiences." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Luxury Family Celebrations | Milestone Vacations, Family Reunions & Anniversary Travel</title>
                <meta name="title" content="Luxury Family Celebrations | Anniversary & Family Reunion Travel" />
                <meta
                    name="description"
                    content="Celebrate life's biggest moments with luxury family celebrations. Discover milestone vacations, anniversary trips, retirement travel, family reunions, and personalized luxury experiences planned by Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Luxury family celebrations, Anniversary trips, Milestone vacations, Family reunion travel, Luxury family vacations, Birthday celebration travel, Retirement trips, Graduation vacations, Multigenerational travel, Luxury travel concierge" />
                <script type="application/ld+json">
                    {JSON.stringify(fcelSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION */}
                <section className="fcel-hero-section">
                    {fcelHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`fcel-hero-slide ${fcelCurrentHero === idx ? 'fcel-slide-active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Milestone Vacations & Family Reunion Travel</span>
                        </div>
                        <h1 className="fcel-hero-title">Luxury Family Celebrations</h1>
                        <p className="fcel-hero-subtitle">
                            Celebrate Life's Biggest Moments with Extraordinary Travel
                        </p>
                        <div className="fcel-hero-btn-row">
                            <button className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">CELEBRATE LIFE'S BIGGEST MOMENTS</span>
                                <h2 className="fcel-section-heading">Celebrate Life's Biggest Moments with Extraordinary Travel</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Some moments deserve more than a party—they deserve an unforgettable journey. Whether you're celebrating a milestone birthday, a wedding anniversary, a retirement, a graduation, or bringing generations together for a family reunion, luxury travel transforms these occasions into lifelong memories.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    At Trips & Ships Luxury Travel, we specialize in creating personalized luxury family celebrations that combine exceptional destinations, world-class accommodations, and unforgettable experiences. Every itinerary is thoughtfully designed to reflect your family's unique traditions, interests, and milestones.
                                </p>
                                <div className="fcel-intro-highlight-box">
                                    From private villas overlooking the Mediterranean to luxury cruises, African safaris, and exclusive island escapes, we ensure every celebration is seamless, meaningful, and truly extraordinary.
                                </div>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <img src="https://picsum.photos/seed/fcel-intro-family/900/1000" alt="Family celebrating together on a luxury vacation" />
                                <div className="fcel-intro-badge-float">
                                    <Heart size={18} />
                                    <span>Crafted for Every Generation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CELEBRATE THROUGH TRAVEL */}
                <section className="fcel-why-section">
                    <div className="fcel-why-container">
                        <div className="fcel-why-header">
                            <span className="fcel-eyebrow-label">THE POWER OF SHARED EXPERIENCES</span>
                            <h2 className="fcel-section-heading">Why Celebrate Through Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">
                                Experiences often become more meaningful than material gifts. Luxury travel allows families to:
                            </p>
                        </div>
                        <div className="fcel-why-grid">
                            {fcelWhyTravel.map((item, idx) => {
                                const FcelIcon = item.icon
                                return (
                                    <div key={idx} className="fcel-why-card">
                                        <div className="fcel-why-icon-ring">
                                            <FcelIcon size={22} />
                                        </div>
                                        <p className="fcel-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', color: '#cbd5e1', maxWidth: '780px', margin: '40px auto 0' }}>
                            Whether the celebration lasts a long weekend or several weeks, shared experiences create memories that will be cherished for years to come.
                        </p>
                    </div>
                </section>

                {/* MILESTONE BIRTHDAY VACATIONS */}
                <section className="fcel-birthday-section">
                    <div className="fcel-birthday-container">
                        <div className="fcel-birthday-grid">
                            <div className="fcel-birthday-media-collage">
                                <div className="fcel-collage-img-wrap fcel-collage-tall">
                                    <img src="https://placehold.co/700x900?text=Milestone+Birthday+Destination" alt="Milestone birthday celebration destination" />
                                </div>
                                <div className="fcel-collage-img-wrap fcel-collage-short-1">
                                    <img src="https://placehold.co/700x440?text=Private+Villa+Birthday" alt="Private villa birthday getaway" />
                                </div>
                                <div className="fcel-collage-img-wrap fcel-collage-short-2">
                                    <img src="https://placehold.co/700x440?text=Surprise+Luxury+Birthday" alt="Surprise luxury birthday getaway" />
                                </div>
                                <div className="fcel-collage-glow"></div>
                            </div>
                            <div className="fcel-birthday-copy">
                                <span className="fcel-birthday-eyebrow">
                                    <Cake size={16} className="fcel-cake-icon" />
                                    Milestone Birthday Vacations
                                </span>
                                <h3 className="fcel-birthday-title">Landmark birthdays deserve unforgettable destinations.</h3>
                                <p className="fcel-birthday-intro">Popular celebrations include:</p>
                                <div className="fcel-birthday-cards-container">
                                    {['40th Birthday Trips', '50th Birthday Celebrations', '60th Birthday Vacations', '70th & 80th Birthday Family Gatherings', 'Surprise Luxury Getaways'].map((item, idx) => (
                                        <div key={idx} className="fcel-birthday-card">
                                            <div className="fcel-birthday-card-badge">{idx + 1}</div>
                                            <div className="fcel-birthday-card-content">
                                                <span className="fcel-birthday-card-title">{item}</span>
                                            </div>
                                            <div className="fcel-birthday-card-arrow">
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="fcel-birthday-footnote">
                                    <Sparkles size={16} className="fcel-footnote-sparkle" />
                                    <span>Destinations may include private Caribbean villas, Mediterranean yacht charters, luxury safari lodges, or exclusive European resorts.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ANNIVERSARY TRIPS - DESTINATION GRID */}
                <section className="fcel-dest-section">
                    <div className="fcel-dest-container">
                        <div className="fcel-dest-header">
                            <span className="fcel-eyebrow-label">
                                <Heart size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Anniversary Trips
                            </span>
                            <h2 className="fcel-section-heading">Celebrate decades of love with an unforgettable luxury escape.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-dest-grid">
                            {fcelAnniversaryDestinations.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="fcel-dest-card">
                                        <div className="fcel-dest-icon-wrap">
                                            <DestIcon size={24} />
                                        </div>
                                        <div className="fcel-dest-card-overlay">
                                            <h4 className="fcel-dest-card-name">{dest.name}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-dest-footer-note">
                            Whether celebrating a 25th, 40th, or 50th wedding anniversary, every itinerary is designed around romance, relaxation, and unforgettable experiences.
                        </p>
                    </div>
                </section>

                {/* FAMILY REUNION TRAVEL */}
                <section className="fcel-reunion-section">
                    <div className="fcel-reunion-container">
                        <div className="fcel-reunion-grid-layout">
                            <div className="fcel-reunion-media-col">
                                <div className="fcel-reunion-framed-card">
                                    <img src="https://placehold.co/800x1000?text=Family+Reunion+Travel" alt="Multigenerational family reunion travel" />
                                    <div className="fcel-reunion-frame-badge">Multi-Generational Excellence</div>
                                </div>
                            </div>
                            <div className="fcel-reunion-copy-col">
                                <span className="fcel-birthday-eyebrow">
                                    <Users size={16} className="fcel-cake-icon" />
                                    Family Reunion Travel
                                </span>
                                <h3 className="fcel-reunion-title">Bringing together multiple generations requires thoughtful planning and expert coordination.</h3>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-reunion-intro">We arrange family reunions that include:</p>
                                <div className="fcel-reunion-cards-grid">
                                    {['Luxury resorts', 'Private villas', 'Ocean cruises', 'River cruises', 'National park adventures', 'Beach vacations', 'Guided cultural experiences', 'Private family excursions'].map((item, idx) => (
                                        <div key={idx} className="fcel-reunion-card">
                                            <CheckCircle size={16} className="fcel-reunion-card-icon" />
                                            <span className="fcel-reunion-card-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="fcel-reunion-footnote">
                                    Every family member—from grandparents to grandchildren—enjoys activities tailored to their interests.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RETIREMENT CELEBRATIONS */}
                <section className="fcel-retire-section">
                    <div className="fcel-retire-container">
                        <div className="fcel-retire-header">
                            <span className="fcel-birthday-eyebrow">
                                <Compass size={16} className="fcel-cake-icon" />
                                Retirement Celebrations
                            </span>
                            <h3 className="fcel-retire-title">Retirement marks the beginning of an exciting new chapter.</h3>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-retire-intro">Celebrate with:</p>
                        </div>

                        <div className="fcel-retire-timeline">
                            {['Around-the-world journeys', 'Luxury cruises', 'African safaris', 'European grand tours', 'Expedition cruises', 'Wellness retreats', 'Private yacht charters', 'Bucket-list adventures'].map((item, idx) => (
                                <div key={idx} className="fcel-retire-timeline-item">
                                    <div className="fcel-retire-timeline-dot">
                                        <span>{idx + 1}</span>
                                    </div>
                                    <div className="fcel-retire-timeline-content">
                                        <h4 className="fcel-retire-item-text">{item}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="fcel-retire-footnote-wrapper">
                            <div className="fcel-retire-footnote">
                                <Sparkles size={16} className="fcel-footnote-sparkle" />
                                <span>We create personalized itineraries that celebrate years of achievement while looking forward to new experiences.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GRADUATION VACATIONS */}
                <section className="fcel-grad-section">
                    <div className="fcel-grad-container">
                        <div className="fcel-grad-header">
                            <span className="fcel-birthday-eyebrow">
                                <GraduationCap size={16} className="fcel-cake-icon" />
                                Graduation Vacations
                            </span>
                            <h3 className="fcel-grad-title">Honor academic achievements with a memorable family adventure.</h3>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-grad-intro">Popular graduation trips include:</p>
                        </div>

                        <div className="fcel-grad-board">
                            {['European city tours', 'Alaska cruises', 'Tropical island escapes', 'Luxury safari experiences', 'Adventure vacations', 'Cultural journeys', 'Luxury train travel', 'Private guided tours'].map((item, idx) => {
                                const angles = [-3, 2, -1.5, 3, -2, 1.5, -3, 2]
                                const angle = angles[idx % angles.length]
                                return (
                                    <div key={idx} className="fcel-grad-polaroid" style={{ transform: `rotate(${angle}deg)` }}>
                                        <div className="fcel-grad-polaroid-tape"></div>
                                        <div className="fcel-grad-polaroid-inner">
                                            <div className="fcel-grad-polaroid-badge">
                                                <GraduationCap size={16} />
                                            </div>
                                            <h4 className="fcel-grad-polaroid-text">{item}</h4>
                                            <span className="fcel-grad-polaroid-num">Class of {idx + 1}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="fcel-grad-footer">
                            <div className="fcel-grad-footnote">
                                <Sparkles size={16} className="fcel-footnote-sparkle" />
                                <span>Graduation travel provides families with meaningful time together before life's next chapter begins.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY CRUISES FOR FAMILY CELEBRATIONS */}
                <section className="fcel-cruise-section">
                    <div className="fcel-cruise-container">
                        <div className="fcel-cruise-header">
                            <span className="fcel-eyebrow-label">
                                <Ship size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Luxury Cruises for Family Celebrations
                            </span>
                            <h2 className="fcel-section-heading">Luxury cruises offer one of the easiest ways to celebrate together while exploring multiple destinations.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="fcel-cruise-grid-layout">
                            <div className="fcel-cruise-lines-col">
                                <h3 className="fcel-cruise-col-title">Recommended Cruise Lines</h3>
                                <div className="fcel-cruise-lines-grid">
                                    {fcelCruiseLines.map((line, idx) => (
                                        <div key={idx} className="fcel-cruise-line-card">
                                            <Ship size={16} className="fcel-cruise-card-icon" />
                                            <span className="fcel-cruise-line-name">{line}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="fcel-cruise-benefits-col">
                                <h3 className="fcel-cruise-col-title">Cruise Celebration Benefits</h3>
                                <div className="fcel-cruise-benefits-list">
                                    {fcelCruiseBenefits.map((item, idx) => {
                                        const BenefitIcon = item.icon
                                        return (
                                            <div key={idx} className="fcel-cruise-benefit-card">
                                                <div className="fcel-cruise-benefit-icon-wrapper">
                                                    <BenefitIcon size={20} />
                                                </div>
                                                <div className="fcel-cruise-benefit-text-wrapper">
                                                    <span className="fcel-cruise-benefit-text">{item.text}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRIVATE VILLAS & EXCLUSIVE RESORTS */}
                <section className="fcel-villa-section">
                    <div className="fcel-villa-container">
                        <div className="fcel-villa-grid">
                            <div className="fcel-villa-copy">
                                <span className="fcel-eyebrow-label">
                                    <Home size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Private Villas & Exclusive Resorts
                                </span>
                                <h2 className="fcel-section-heading">Many families prefer private accommodations for milestone celebrations.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">Private villas offer:</p>
                                <div className="fcel-villa-features-grid">
                                    {fcelVillaFeatures.map((feature, idx) => (
                                        <div key={idx} className="fcel-villa-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Luxury resorts also provide outstanding amenities while offering activities for every generation.
                                </p>
                            </div>
                            <div className="fcel-villa-gallery">
                                <img src="https://placehold.co/500x500?text=Luxury+Villa+with+Pool" alt="Private luxury villa with pool" />
                                <img src="https://placehold.co/500x500?text=Personal+Chef+Dining" alt="Personal chef villa dining" />
                                <img src="https://placehold.co/500x500?text=Private+Pool+View" alt="Private pool villa view" />
                                <img src="https://placehold.co/500x500?text=Exclusive+Resort" alt="Exclusive resort gathering area" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PERSONALIZED CONCIERGE SERVICES */}
                <section className="fcel-concierge-section">
                    <div className="fcel-concierge-container">
                        <span className="fcel-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Personalized Concierge Services
                        </span>
                        <h2 className="fcel-section-heading">Every celebration is unique.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Our concierge team coordinates:</p>
                        <div className="fcel-concierge-pills-wrap">
                            {fcelConciergeServices.map((service, idx) => (
                                <span key={idx} className="fcel-concierge-pill">{service}</span>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ marginTop: '30px' }}>
                            From the smallest details to the biggest moments, we ensure everything runs smoothly.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE TRIPS & SHIPS */}
                <section className="fcel-why-us-section">
                    <div className="fcel-why-us-container">
                        <div className="fcel-why-us-top">
                            <div className="fcel-why-us-copy">
                                <span className="fcel-eyebrow-label">TRUSTED BY FAMILIES WORLDWIDE</span>
                                <h2 className="fcel-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Luxury family celebrations require careful planning, creativity, and attention to detail. Families trust us because we provide:
                                </p>
                            </div>
                            <div className="fcel-why-us-image">
                                <img src="https://placehold.co/900x650?text=Multigenerational+Family+Travel" alt="Multigenerational family enjoying luxury travel" />
                            </div>
                        </div>
                        <div className="fcel-why-us-grid">
                            {fcelWhyChooseUs.map((item, idx) => {
                                const FcelIcon = item.icon
                                return (
                                    <div key={idx} className="fcel-why-us-card">
                                        <div className="fcel-why-us-icon">
                                            <FcelIcon size={22} />
                                        </div>
                                        <p className="fcel-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            Whether you're celebrating a milestone birthday, planning a multigenerational reunion, or honoring a lifetime achievement, we'll create an unforgettable journey designed around your family's vision.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {fcelFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => fcelToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {fcelActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {fcelActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Celebrate Your Family's Next Big Moment?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Whether you're celebrating a milestone birthday, planning a multigenerational reunion, or honoring a lifetime achievement, we'll create an unforgettable journey designed around your family's vision.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <button className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
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

export default LuxuryFamilyCelebrations