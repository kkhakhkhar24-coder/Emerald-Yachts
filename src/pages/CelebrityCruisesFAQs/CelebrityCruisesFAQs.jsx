import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruisesFAQs.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem, ArrowRight,
    Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, Calendar, DollarSign, Info,
    Image as ImageIcon, Coffee, Salad, Fish, Soup, PartyPopper,
    Leaf, Shirt, ListChecks, HelpCircle, BookOpen, Home, Plane,
    Users as UsersIcon, Coffee as CoffeeIcon, Gift as GiftIcon,
    Wind, Anchor as AnchorIcon, Compass as CompassIcon,
    Umbrella, Mountain, Building, Briefcase, CreditCard, RefreshCw
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CcfPlaceholder({ label, className = '' }) {
    return (
        <div className={`ccf-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityCruisesFAQs() {
    const [ccfActiveFaq, setCcfActiveFaq] = useState(null)
    const ccfToggleFaq = i => setCcfActiveFaq(ccfActiveFaq === i ? null : i)

    const ccfAtAGlance = [
        { topic: 'Cruise style', detail: 'Contemporary, premium ocean cruising' },
        { topic: 'Main destinations', detail: 'Caribbean, Europe, Alaska and other global destinations' },
        { topic: 'Accommodation', detail: 'Interior, ocean view, balcony, Infinite Veranda, AquaClass and suites' },
        { topic: 'Premium suite experience', detail: 'The Retreat' },
        { topic: 'Main dining', detail: 'Multiple complimentary dining venues on many ships' },
        { topic: 'Specialty dining', detail: 'Available on ships, generally for an additional charge' },
        { topic: 'Drinks', detail: 'Complimentary selections plus optional beverage packages' },
        { topic: 'Entertainment', detail: 'Shows, live music, activities and destination-focused experiences' },
        { topic: 'Families', detail: 'Family-friendly facilities and activities vary by ship' },
        { topic: 'Best booking approach', detail: 'Compare the exact ship, sailing, fare and cabin together' }
    ]

    const ccfShipQuestions = [
        {
            q: 'How many ships does Celebrity Cruises have?',
            a: 'Celebrity Cruises operates a fleet spanning several ship series, including the Edge Series, Solstice Series and Millennium Series. The fleet changes over time as new ships enter service and older vessels leave the fleet. For a current booking, always check the ship assigned to your specific sailing rather than relying only on the cruise line\'s overall fleet size.'
        },
        {
            q: 'What are the newest Celebrity Cruises ships?',
            a: 'The Edge Series contains some of Celebrity\'s newest ships, including Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel. Later ships in the series build on the original Edge design with updated public areas, accommodations, dining and outdoor spaces.'
        },
        {
            q: 'What is the difference between Celebrity Edge Series and Solstice Series ships?',
            a: 'The Edge Series uses a newer design philosophy featuring innovations such as Infinite Veranda staterooms, the Magic Carpet and multiple main dining concepts. Solstice Series ships have a more traditional Celebrity layout while still offering many of the cruise line\'s signature dining, entertainment and service features.'
        }
    ]

    const ccfCabinQuestions = [
        {
            q: 'What types of cabins are available on Celebrity Cruises?',
            a: 'Celebrity Cruises offers several accommodation categories, which can include: Interior staterooms, Ocean View staterooms, Veranda staterooms, Infinite Veranda staterooms on applicable ships, Concierge Class, AquaClass, Suites, and The Retreat accommodations. Exact categories vary by ship.'
        },
        {
            q: 'What is an Infinite Veranda?',
            a: 'An Infinite Veranda is a Celebrity accommodation design in which the balcony area is integrated into the stateroom. Rather than having a completely separate exterior balcony, the design uses an opening window and interior space to create a balcony-style connection with the sea. Travelers who specifically want a traditional outdoor balcony should compare the exact cabin type and deck plan before booking.'
        },
        {
            q: 'What is AquaClass on Celebrity Cruises?',
            a: 'AquaClass is a premium stateroom category designed around wellness-focused amenities and experiences. AquaClass guests have access to Blu, a specialty restaurant associated with the category, along with additional wellness-oriented benefits that can vary by ship and sailing.'
        },
        {
            q: 'What is The Retreat on Celebrity Cruises?',
            a: 'The Retreat is Celebrity Cruises\' suite-focused premium experience. Depending on the ship and suite, benefits can include access to: Luminae, Retreat Lounge, Retreat Sundeck, Concierge services, Suite-specific amenities, and Enhanced onboard services. The exact benefits depend on the ship and suite category.'
        }
    ]

    const ccfDiningQuestions = [
        {
            q: 'Is food included on Celebrity Cruises?',
            a: 'Yes. A Celebrity Cruises fare generally includes access to a selection of complimentary dining venues. These can include main dining restaurants, casual dining and other included food venues. The exact selection varies by ship. Specialty restaurants, premium dining experiences and certain food or beverage items may cost extra.'
        },
        {
            q: 'How many restaurants does Celebrity Cruises have?',
            a: 'The number and type of restaurants vary significantly by ship. Celebrity vessels can feature: Multiple main restaurants, Buffet-style dining, Casual restaurants, Specialty restaurants, Cafés, Wellness-oriented dining, and Suite-exclusive dining. Check the dining lineup for the specific ship before booking because restaurant concepts differ across the fleet.'
        },
        {
            q: 'Does Celebrity Cruises have specialty restaurants?',
            a: 'Yes. Celebrity Cruises offers specialty dining on many ships. Examples can include steakhouse, French-inspired, Italian-inspired, seafood and other premium dining concepts. Specialty restaurants generally carry an additional charge unless dining is included through a specific package, fare or suite benefit.'
        }
    ]

    const ccfDrinkQuestions = [
        {
            q: 'Are drinks included on Celebrity Cruises?',
            a: 'Some beverages are included in the standard cruise fare, but the range depends on the fare and package purchased. Guests may have access to selected complimentary beverages, while premium coffees, bottled water, alcoholic beverages and other drinks can require an additional charge.'
        },
        {
            q: 'Are Celebrity Cruises drink packages worth it?',
            a: 'The value of a drink package depends on how much and what type of beverages you expect to consume. Before purchasing one, estimate your typical daily spending on: Cocktails, Wine, Beer, Premium coffee, Bottled water, and Other included or premium beverages. Also compare the package\'s current price and restrictions with your booking because Celebrity\'s package options and inclusions can change.'
        },
        {
            q: 'Can you bring alcohol on a Celebrity cruise?',
            a: 'Celebrity Cruises has specific policies governing alcohol brought onboard, including rules that can differ between embarkation and ports of call. Because these policies can change, review Celebrity Cruises\' current alcohol policy before traveling rather than relying on an older packing list.'
        }
    ]

    const ccfFareQuestions = [
        {
            q: 'What is included in a Celebrity Cruises fare?',
            a: 'The inclusions depend on the fare and booking. A standard cruise fare can provide access to: Your booked accommodation, Included dining venues, Selected onboard entertainment, Pools and public areas, and Many scheduled activities. Depending on the fare or promotion, additional benefits may be included, such as drinks, Wi-Fi or other extras. Always compare the specific fare type rather than assuming every Celebrity booking includes the same benefits.'
        },
        {
            q: 'Is Wi-Fi included on Celebrity Cruises?',
            a: 'Wi-Fi inclusion depends on the fare, package and booking. Some Celebrity fares or promotions may include internet access, while other bookings may require an internet package. Check your reservation\'s exact inclusions before purchasing a separate package.'
        },
        {
            q: 'Does Celebrity Cruises include gratuities?',
            a: 'Gratuity treatment can depend on the fare, promotion, booking type and current Celebrity Cruises policies. Some fares or packages may include gratuities, while other reservations may have gratuities charged separately. Review the terms attached to your booking before budgeting for the cruise.'
        }
    ]

    const ccfItineraryQuestions = [
        {
            q: 'Where does Celebrity Cruises sail?',
            a: 'Celebrity Cruises operates itineraries in destinations around the world. Popular regions include: Caribbean, Mediterranean, Northern Europe, Alaska, Canada and New England, Mexico, The Bahamas, and Other seasonal destinations. Itinerary availability changes by ship and season.'
        },
        {
            q: 'How long are Celebrity Cruises?',
            a: 'Celebrity Cruises offers a range of cruise lengths. Depending on the itinerary, travelers can find shorter cruises as well as longer voyages lasting several weeks. Longer itineraries may provide more sea days or allow visits to a greater number of ports.'
        },
        {
            q: 'Does Celebrity Cruises visit the Caribbean?',
            a: 'Yes. The Caribbean is one of Celebrity Cruises\' major cruise regions. Itineraries can include destinations in the eastern, western and southern Caribbean, depending on the ship and season.'
        }
    ]

    const ccfFamilyQuestions = [
        {
            q: 'Is Celebrity Cruises good for families?',
            a: 'Celebrity Cruises can be suitable for families, but the experience varies by ship, itinerary and children\'s ages. Families should consider: Children\'s programming, Teen facilities, Connecting cabins, Family accommodation, Pool areas, Dining flexibility, Shore excursions, and Sailing length. Families traveling with children should confirm age requirements and available youth facilities for their specific ship.'
        },
        {
            q: 'Does Celebrity Cruises have kids\' activities?',
            a: 'Celebrity Cruises offers youth and family-oriented activities on applicable ships. The availability, age groups and programming can vary by vessel and sailing, so families should check the current information for their specific cruise.'
        }
    ]

    const ccfPlanningQuestions = [
        {
            q: 'What should I look for when choosing a Celebrity cruise?',
            a: 'Start with these factors: Destination — Choose the region and ports that interest you. Ship — Compare the vessel\'s dining, entertainment and facilities. Cabin — Decide between an interior, ocean view, balcony, AquaClass or suite. Fare — Compare exactly what is included. Sailing date — Consider weather, season and pricing. Cruise length — Match the itinerary to your available vacation time. Dining preferences — Check complimentary and specialty options. Budget — Include taxes, gratuities where applicable, excursions and optional purchases.'
        },
        {
            q: 'When should I book a Celebrity cruise?',
            a: 'The ideal booking time depends on destination, season, cabin category and sailing demand. Popular itineraries and specific cabin categories can become limited well before departure, while other sailings may have different pricing patterns. If you need a particular cabin or sailing date, booking earlier generally gives you more choice.'
        },
        {
            q: 'Should I choose the ship or itinerary first?',
            a: 'For most travelers, it is useful to identify both before booking. If the destination is your priority, start with the itinerary and then compare the ships operating that route. If the ship experience is the priority, select the vessel first and then compare its available sailings.'
        }
    ]

    const ccfPlanningFactors = [
        { label: 'Destination', text: 'Choose the region and ports that interest you.' },
        { label: 'Ship', text: 'Compare the vessel\'s dining, entertainment and facilities.' },
        { label: 'Cabin', text: 'Decide between an interior, ocean view, balcony, AquaClass or suite.' },
        { label: 'Fare', text: 'Compare exactly what is included.' },
        { label: 'Sailing date', text: 'Consider weather, season and pricing.' },
        { label: 'Cruise length', text: 'Match the itinerary to your available vacation time.' },
        { label: 'Dining preferences', text: 'Check complimentary and specialty options.' },
        { label: 'Budget', text: 'Include taxes, gratuities where applicable, excursions and optional purchases.' }
    ]

    const ccfChecklist = [
        'Ship name',
        'Departure port',
        'Ports of call',
        'Cruise duration',
        'Cabin category',
        'Exact cabin location',
        'Fare inclusions',
        'Drink package requirements',
        'Wi-Fi inclusion',
        'Gratuity treatment',
        'Specialty dining costs',
        'Excursion costs',
        'Travel documentation',
        'Airport and transfer arrangements',
        'Cancellation and change conditions'
    ]

    const ccfKeyTakeaways = [
        'Celebrity Cruises offers several ship series, including the Edge, Solstice and Millennium Series.',
        'The Edge Series includes Edge, Apex, Beyond, Ascent and Xcel.',
        'Cabin categories range from interior staterooms to premium suites in The Retreat.',
        'Infinite Verandas are a distinctive accommodation feature on applicable Edge Series ships.',
        'Some dining and entertainment are included, while specialty experiences may cost extra.',
        'Beverage and Wi-Fi inclusions depend on the fare or package.',
        'The Retreat provides a suite-focused premium experience.',
        'Celebrity operates cruises in destinations including the Caribbean, Mediterranean and Alaska.',
        'Families should compare youth facilities and cabin configurations for their specific ship.',
        'Always check the exact fare and sailing terms before assuming that a particular benefit is included.'
    ]

    const ccfFaqs = [
        { q: 'What is Celebrity Cruises known for?', a: 'Celebrity Cruises is known for contemporary ships, destination-focused itineraries, modern accommodations, dining experiences and premium offerings such as The Retreat.' },
        { q: 'What ships are in Celebrity Cruises\' fleet?', a: 'Celebrity Cruises operates ships across multiple series, including the Edge, Solstice and Millennium Series. The fleet changes as new ships enter service and older vessels leave.' },
        { q: 'What is included in a Celebrity Cruises fare?', a: 'A fare generally includes your booked accommodation, access to complimentary dining venues, selected entertainment and many onboard facilities. Exact inclusions depend on the fare and booking.' },
        { q: 'Is food free on Celebrity Cruises?', a: 'Selected dining is included in the cruise fare, including main dining and other complimentary venues. Specialty restaurants and certain premium food experiences generally cost extra.' },
        { q: 'Are drinks included on Celebrity Cruises?', a: 'Some beverages are included, but premium alcoholic drinks, certain coffees, bottled water and other beverages may require an additional charge unless covered by your fare or beverage package.' },
        { q: 'Is Wi-Fi included on Celebrity Cruises?', a: 'Wi-Fi inclusion depends on the fare, package and booking. Some Celebrity bookings include internet access, while others require a separate package.' },
        { q: 'What is The Retreat on Celebrity Cruises?', a: 'The Retreat is Celebrity\'s suite-focused premium experience. Depending on the ship and suite, it can include Luminae, the Retreat Lounge, Retreat Sundeck and enhanced services.' },
        { q: 'What is AquaClass on Celebrity Cruises?', a: 'AquaClass is a premium stateroom category associated with wellness-focused amenities and access to Blu, a restaurant designed specifically for AquaClass guests.' },
        { q: 'What is an Infinite Veranda on Celebrity Cruises?', a: 'An Infinite Veranda integrates the balcony concept into the stateroom, allowing the cabin\'s window area to open toward the sea rather than using only a separate exterior balcony.' },
        { q: 'Does Celebrity Cruises have specialty restaurants?', a: 'Yes. Many Celebrity ships offer specialty restaurants with premium dining concepts. These usually have an additional charge unless covered by a relevant package or benefit.' },
        { q: 'Does Celebrity Cruises sail to the Caribbean?', a: 'Yes. Celebrity Cruises operates numerous Caribbean itineraries, including eastern, western and southern Caribbean routes depending on the ship and season.' },
        { q: 'Is Celebrity Cruises good for families?', a: 'Celebrity Cruises can work well for families, with youth activities and family-oriented facilities on applicable ships. Families should compare the specific vessel, cabin and itinerary.' },
        { q: 'How long are Celebrity Cruises?', a: 'Celebrity offers cruises of different lengths, from shorter voyages to extended itineraries. The duration depends on the ship, route and sailing date.' },
        { q: 'How should I choose a Celebrity Cruises cabin?', a: 'Compare cabin category, size, view, balcony configuration, deck location and proximity to potentially noisy public areas. Your budget and preferred onboard experience should also guide the choice.' },
        { q: 'What should I check before booking a Celebrity cruise?', a: 'Check the ship, itinerary, cabin, fare inclusions, drink and Wi-Fi policies, gratuities, specialty dining, excursions, travel documents and cancellation conditions before booking.' }
    ]

    const ccfSchemaData = {
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/faqs#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/faqs",
                "name": "Celebrity Cruises Frequently Asked Questions",
                "description": "Find answers to common Celebrity Cruises questions about ships, cabins, dining, drinks, The Retreat, itineraries, inclusions, families and more.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/faqs" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/faqs#article",
                "headline": "Celebrity Cruises Frequently Asked Questions",
                "description": "A comprehensive FAQ guide covering Celebrity Cruises ships, cabins, dining, drinks, The Retreat, itineraries, fares, families and cruise planning.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/faqs" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/faqs#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Cruises Frequently Asked Questions", "item": "https://www.tripsandships.com/celebrity-cruises/faqs" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/faqs#faq",
                "mainEntity": ccfFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Cruises FAQs: Your Questions Answered</title>
                <meta name="title" content="Celebrity Cruises FAQs: Your Questions Answered" />
                <meta name="description" content="Find answers to common Celebrity Cruises questions about ships, cabins, dining, drinks, The Retreat, itineraries, inclusions, families and more." />
                <meta name="keywords" content="Celebrity Cruises FAQs, Celebrity Cruises frequently asked questions, Celebrity Cruises guide, Celebrity cruise tips, Celebrity Cruises cabins, Celebrity Cruises dining, Celebrity drink packages, Celebrity The Retreat, Celebrity cruise inclusions, Celebrity Cruises ships, Celebrity cruise costs" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/faqs" />
                <script type="application/ld+json">{JSON.stringify(ccfSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="ccf-page">

                {/* ── HERO ── */}
                <section className="ccf-hero-section">
                    <CcfPlaceholder label="Celebrity Cruises ship at sea" className="ccf-hero-bg-placeholder" />
                    <div className="ccf-hero-overlay-layer"></div>
                    <div className="ccf-hero-content-wrapper">
                        <div className="ccf-hero-eyebrow-tag">
                            <HelpCircle size={16} />
                            <span>FAQ · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="ccf-hero-main-title">Celebrity Cruises <br /> Frequently Asked Questions</h1>
                        <p className="ccf-hero-subtitle-text">
                            Planning a Celebrity Cruises vacation often means comparing ships, cabins, dining options, drink packages, fares, itineraries and onboard experiences. This Celebrity Cruises FAQ guide brings the most useful questions together in one place.
                        </p>
                    </div>
                </section>

                {/* ── AT A GLANCE ── */}
                <section className="ccf-glance-section">
                    <div className="ccf-glance-container">
                        <span className="ccf-eyebrow ccf-eyebrow-center">OVERVIEW</span>
                        <h2 className="ccf-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises at a Glance</h2>
                        <div className="ccf-heading-separator-bar ccf-bar-centered"></div>

                        <div className="ccf-table-wrapper">
                            <div className="ccf-table-row ccf-table-head">
                                <span>Topic</span>
                                <span>What to know</span>
                            </div>
                            {ccfAtAGlance.map((row, idx) => (
                                <div key={idx} className="ccf-table-row">
                                    <span data-label="Topic">{row.topic}</span>
                                    <span data-label="What to know">{row.detail}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ccf-glance-note">
                            <Info size={16} className="ccf-glance-note-icon" />
                            <p>Celebrity Cruises is known for its contemporary ships, destination-focused itineraries, premium accommodation options and dining experiences. However, what is included in a cruise fare—and what costs extra—can vary by fare, ship, itinerary, accommodation and current offer.</p>
                        </div>
                    </div>
                </section>

                {/* ── SHIP QUESTIONS ── */}
                <section className="ccf-ship-section">
                    <div className="ccf-ship-container">
                        <div className="ccf-ship-header">
                            <span className="ccf-eyebrow ccf-eyebrow-light ccf-eyebrow-center">FLEET</span>
                            <h2 className="ccf-section-heading ccf-white-heading" style={{ textAlign: 'center' }}>Celebrity Cruises <br /> Ship Questions</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered ccf-separator-white"></div>
                        </div>

                        <div className="ccf-ship-layout">
                            <div className="ccf-ship-visual">
                                <CcfPlaceholder label="Celebrity Cruises fleet of ships including Edge, Solstice and Millennium Series" className="ccf-ship-visual-img" />
                                <div className="ccf-ship-visual-overlay"></div>
                                <div className="ccf-ship-visual-badge">
                                    <Ship size={14} />
                                    <span>Three Ship Series</span>
                                </div>
                            </div>
                            <div className="ccf-ship-intro-panel">
                                <p className="ccf-ship-intro-lead">Celebrity's fleet spans several ship series, each with its own personality.</p>
                                <div className="ccf-ship-chips">
                                    {['Edge Series', 'Solstice Series', 'Millennium Series'].map((chip, idx) => (
                                        <span key={idx} className="ccf-ship-chip">
                                            <Anchor size={12} />
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                                <p className="ccf-ship-intro-text">The newest Edge Series ships focus on innovation and outdoor spaces, while Solstice and Millennium Series vessels offer a more traditional Celebrity layout. Understanding the differences helps you pick the right ship for your sailing.</p>
                            </div>
                        </div>

                        <div className="ccf-ship-qa-list">
                            {ccfShipQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-ship-qa-row">
                                    <div className="ccf-ship-qa-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="ccf-ship-qa-icon"><Ship size={18} /></div>
                                    <div className="ccf-ship-qa-body">
                                        <h3 className="ccf-qa-question">{item.q}</h3>
                                        <p className="ccf-qa-answer">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CABIN QUESTIONS ── */}
                <section className="ccf-cabin-section">
                    <div className="ccf-cabin-container">
                        <span className="ccf-eyebrow ccf-eyebrow-center">ACCOMMODATION</span>
                        <h2 className="ccf-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Cabin Questions</h2>
                        <div className="ccf-heading-separator-bar ccf-bar-centered"></div>

                        <div className="ccf-cabin-banner">
                            <CcfPlaceholder label="Celebrity Cruises stateroom and cabin types including Infinite Veranda, AquaClass and The Retreat" className="ccf-cabin-banner-img" />
                            <div className="ccf-cabin-banner-badge">
                                <Bed size={14} />
                                <span>Four Cabin Styles</span>
                            </div>
                        </div>

                        <div className="ccf-cabin-grid">
                            {ccfCabinQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-cabin-card">
                                    <div className="ccf-cabin-card-icon"><Bed size={18} /></div>
                                    <h3 className="ccf-qa-question">{item.q}</h3>
                                    <p className="ccf-qa-answer">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="ccf-cabin-tip">
                            <Sparkles size={16} />
                            <span>Not sure which category fits? Angela can compare deck plans and fare inclusions for the ships you are considering.</span>
                        </div>
                    </div>
                </section>

                {/* ── DINING QUESTIONS ── */}
                <section className="ccf-dining-section">
                    <div className="ccf-dining-container">
                        <div className="ccf-dining-header">
                            <span className="ccf-eyebrow ccf-eyebrow-light ccf-eyebrow-center">ONBOARD DINING</span>
                            <h2 className="ccf-section-heading ccf-white-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Dining Questions</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered ccf-separator-white"></div>
                        </div>

                        <div className="ccf-dining-banner">
                            <CcfPlaceholder label="Celebrity Cruises dining venues including main restaurants, specialty dining and casual options" className="ccf-dining-banner-img" />
                            <div className="ccf-dining-banner-badge">
                                <Utensils size={14} />
                                <span>Culinary Lineup</span>
                            </div>
                        </div>

                        <div className="ccf-dining-grid">
                            {ccfDiningQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-dining-card">
                                    <div className="ccf-dining-card-icon"><Utensils size={18} /></div>
                                    <div className="ccf-dining-card-body">
                                        <h3 className="ccf-qa-question">{item.q}</h3>
                                        <p className="ccf-qa-answer">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── DRINK QUESTIONS ── */}
                <section className="ccf-drink-section">
                    <div className="ccf-drink-container">
                        <span className="ccf-eyebrow ccf-eyebrow-center">BEVERAGES</span>
                        <h2 className="ccf-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Drink Questions</h2>
                        <div className="ccf-heading-separator-bar ccf-bar-centered"></div>

                        <div className="ccf-drink-banner">
                            <CcfPlaceholder label="Celebrity Cruises drink packages and beverage options" className="ccf-drink-banner-img" />
                            <div className="ccf-drink-banner-badge">
                                <Wine size={14} />
                                <span>Bar &amp; Café Options</span>
                            </div>
                        </div>

                        <div className="ccf-drink-list">
                            {ccfDrinkQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-drink-row">
                                    <div className="ccf-drink-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="ccf-drink-row-icon"><CoffeeIcon size={18} /></div>
                                    <div className="ccf-drink-row-body">
                                        <h3 className="ccf-qa-question">{item.q}</h3>
                                        <p className="ccf-qa-answer">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FARE AND COST QUESTIONS ── */}
                <section className="ccf-fare-section">
                    <div className="ccf-fare-container">
                        <div className="ccf-fare-header">
                            <span className="ccf-eyebrow ccf-eyebrow-light ccf-eyebrow-center">PRICING</span>
                            <h2 className="ccf-section-heading ccf-white-heading" style={{ textAlign: 'center' }}>Celebrity Cruises <br /> Fare and Cost Questions</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered ccf-separator-white"></div>
                        </div>

                        <div className="ccf-fare-list">
                            {ccfFareQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-fare-row">
                                    <div className="ccf-fare-chip">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="ccf-fare-row-body">
                                        <h3 className="ccf-qa-question">{item.q}</h3>
                                        <p className="ccf-qa-answer">{item.a}</p>
                                    </div>
                                    <div className="ccf-fare-row-icon"><DollarSign size={18} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── ITINERARY QUESTIONS ── */}
                <section className="ccf-itinerary-section">
                    <div className="ccf-itinerary-container">
                        <span className="ccf-eyebrow ccf-eyebrow-center">DESTINATIONS</span>
                        <h2 className="ccf-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Itinerary Questions</h2>
                        <div className="ccf-heading-separator-bar ccf-bar-centered"></div>

                        <div className="ccf-itinerary-banner">
                            <CcfPlaceholder label="Celebrity Cruises destinations including Caribbean, Mediterranean, Alaska and more" className="ccf-itinerary-banner-img" />
                            <div className="ccf-itinerary-banner-badge">
                                <Compass size={14} />
                                <span>Regions &amp; Routes</span>
                            </div>
                        </div>

                        <div className="ccf-itinerary-grid">
                            {ccfItineraryQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-itinerary-card">
                                    <div className="ccf-itinerary-card-icon"><MapPin size={22} /></div>
                                    <h3 className="ccf-qa-question">{item.q}</h3>
                                    <p className="ccf-qa-answer">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAMILY QUESTIONS ── */}
                <section className="ccf-family-section">
                    <div className="ccf-family-container">
                        <div className="ccf-family-header">
                            <span className="ccf-eyebrow ccf-eyebrow-light ccf-eyebrow-center">FAMILIES</span>
                            <h2 className="ccf-section-heading ccf-white-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Family Questions</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered ccf-separator-white"></div>
                        </div>

                        <div className="ccf-family-banner">
                            <CcfPlaceholder label="Family cruising on Celebrity Cruises with kids activities and youth programs" className="ccf-family-banner-img" />
                            <div className="ccf-family-banner-badge">
                                <Users size={14} />
                                <span>Family Friendly</span>
                            </div>
                        </div>

                        <div className="ccf-family-grid">
                            {ccfFamilyQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-family-card">
                                    <div className="ccf-family-card-icon"><UsersIcon size={20} /></div>
                                    <h3 className="ccf-qa-question">{item.q}</h3>
                                    <p className="ccf-qa-answer">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="ccf-family-note">
                            <Heart size={16} />
                            <span>Traveling with kids? Angela confirms youth programming and age requirements on the specific ship and sailing before recommending a family cruise.</span>
                        </div>
                    </div>
                </section>

                {/* ── PLANNING QUESTIONS ── */}
                <section className="ccf-planning-section">
                    <div className="ccf-planning-container">
                        <span className="ccf-eyebrow ccf-eyebrow-center">PLANNING</span>
                        <h2 className="ccf-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Planning Questions</h2>
                        <div className="ccf-heading-separator-bar ccf-bar-centered"></div>

                        <div className="ccf-planning-list">
                            {ccfPlanningQuestions.map((item, idx) => (
                                <div key={idx} className="ccf-planning-card">
                                    <div className="ccf-planning-card-icon"><BookOpen size={20} /></div>
                                    <div className="ccf-planning-card-body">
                                        <h3 className="ccf-qa-question">{item.q}</h3>
                                        <p className="ccf-qa-answer">{item.a}</p>
                                        {idx === 0 && (
                                            <div className="ccf-planning-check-list">
                                                {ccfPlanningFactors.map((f, i) => (
                                                    <div key={i} className="ccf-planning-check">
                                                        <CheckCircle size={16} />
                                                        <span><strong>{f.label}:</strong> {f.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CHECKLIST ── */}
                <section className="ccf-checklist-section">
                    <div className="ccf-checklist-container">
                        <div className="ccf-checklist-header">
                            <span className="ccf-eyebrow ccf-eyebrow-light ccf-eyebrow-center">BEFORE YOU BOOK</span>
                            <h2 className="ccf-section-heading ccf-white-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Booking Checklist</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered ccf-separator-white"></div>
                            <p className="ccf-checklist-intro">Before making a reservation, check:</p>
                        </div>

                        <div className="ccf-checklist-grid">
                            {ccfChecklist.map((item, idx) => (
                                <div key={idx} className="ccf-checklist-item">
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ccf-checklist-note">
                            <Info size={16} className="ccf-checklist-note-icon" />
                            <p>This approach helps prevent unexpected costs and makes it easier to compare two apparently similar Celebrity cruises.</p>
                        </div>
                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="ccf-takeaway-section">
                    <div className="ccf-takeaway-container">
                        <div className="ccf-takeaway-header">
                            <span className="ccf-eyebrow ccf-eyebrow-center">SUMMARY</span>
                            <h2 className="ccf-section-heading">Key Takeaways</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered"></div>
                        </div>

                        <div className="ccf-takeaway-grid">
                            {ccfKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="ccf-takeaway-card">
                                    <div className="ccf-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="ccf-takeaway-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="ccf-expert-section">
                    <div className="ccf-expert-container">

                        <div className="ccf-expert-portrait-panel">
                            <div className="ccf-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="ccf-expert-stats-strip">
                                <div className="ccf-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="ccf-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="ccf-expert-content-panel">
                            <span className="ccf-eyebrow ccf-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="ccf-section-heading">Insight from Angela Hughes</h2>
                            <div className="ccf-heading-separator-bar"></div>

                            <p className="ccf-expert-quote">
                                &ldquo;The best Celebrity cruise isn&rsquo;t just about the ship or the itinerary—it&rsquo;s about finding the right combination of both. I always tell my clients to start with what they want to see and do, then let the ship enhance that experience, not the other way around.&rdquo;
                            </p>

                            <div className="ccf-expert-priorities">
                                <h5>FAQ Focus Areas:</h5>
                                <div className="ccf-expert-pills">
                                    {['Ship Selection', 'Cabin Choice', 'Dining Strategy', 'Drink Packages', 'Itinerary Planning', 'Fare Comparison'].map(pill => (
                                        <span key={pill} className="ccf-expert-pill">
                                            <HelpCircle size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="ccf-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="ccf-faq-section">
                    <div className="ccf-faq-container">
                        <div className="ccf-faq-header">
                            <span className="ccf-eyebrow ccf-eyebrow-center">QUESTIONS BEFORE YOU SAIL</span>
                            <h2 className="ccf-section-heading">Frequently Asked Questions</h2>
                            <div className="ccf-heading-separator-bar ccf-bar-centered"></div>
                        </div>
                        <div className="ccf-faq-list-wrapper">
                            {ccfFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ccf-faq-item"
                                    onClick={() => ccfToggleFaq(index)}
                                >
                                    <div className="ccf-faq-question-row">
                                        <span>{faq.q}</span>
                                        <span className="ccf-faq-toggle-icon">{ccfActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {ccfActiveFaq === index && (
                                        <p className="ccf-faq-answer-text">{faq.a}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="ccf-cta-section">
                    <div className="ccf-cta-aurora-glow"></div>
                    <div className="ccf-cta-crystal ccf-cta-crystal-1"></div>
                    <div className="ccf-cta-crystal ccf-cta-crystal-2"></div>
                    <div className="ccf-cta-crystal ccf-cta-crystal-3"></div>
                    <div className="ccf-cta-grid-lines"></div>

                    <div className="ccf-cta-content">
                        <div className="ccf-cta-compass-ring">
                            <HelpCircle size={28} />
                        </div>
                        <span className="ccf-cta-eyebrow">PLAN YOUR CRUISE</span>
                        <h2 className="ccf-cta-title">Ready to Plan Your <br /> Celebrity Cruise?</h2>
                        <div className="ccf-cta-bar"></div>
                        <p className="ccf-cta-subtitle">
                            Start by comparing the ship, itinerary, cabin category and fare inclusions. Then explore the detailed Celebrity Cruises guides on Trips and Ships to choose a sailing that matches your travel style and budget.
                        </p>
                        <div className="ccf-cta-actions">
                            <Link to="/contact" className="ccf-cta-primary-btn">
                                <span>Speak with a Celebrity Cruises specialist</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CelebrityCruisesFAQs