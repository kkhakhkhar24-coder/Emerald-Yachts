import { useState, useEffect } from "react";
import {
    MapPin,
    Award,
    Check,
    Plus,
    Minus,
    ArrowRight,
    Quote,
    Star,
    Users,
    Shield,
    Compass,
    Camera,
    Globe,
    CheckCircle2,
    Sparkles,
    ChevronDown,
    ChevronUp,
    Heart,
} from "lucide-react";
import "./Bestafricasafariforfamilies.css";
import Navbar from "../../components/Navbar/Navbar";
import AboutImage from "../../assets/Angela_Hughes.jpg";
import BafricaImage1 from "../../assets/Bestafricasafariforfamilies/Bestafrica1.jpg";
import BafricaImage2 from "../../assets/Bestafricasafariforfamilies/Bestafrica2.jpg";
import BafricaImage8 from "../../assets/Bestafricasafariforfamilies/Bestafrica4.jpg";
import BafricaImage4 from "../../assets/Bestafricasafariforfamilies/Cheetahs.jpg";
import BafricaImage5 from "../../assets/Bestafricasafariforfamilies/Hippos.jpg";
import BafricaImage6 from "../../assets/Bestafricasafariforfamilies/KenyaTravel.jpg";
import BafricaImage7 from "../../assets/Bestafricasafariforfamilies/Kenya2.jpg";
import BafricaImage9 from "../../assets/Bestafricasafariforfamilies/safari-lunch.webp";
import BafricaImage10 from "../../assets/Bestafricasafariforfamilies/Consultation.jpg";
import BafricaImage11 from "../../assets/Bestafricasafariforfamilies/Teenagers.png";
import BafricaImage12 from "../../assets/Bestafricasafariforfamilies/family.jpg";
import BafricaImage13 from "../../assets/Bestafricasafariforfamilies/SafariCamps.jpg";
import Park from "../../assets/Bestafricasafariforfamilies/Park.jpg";

import TravelWeeklyLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Weekly.webp";
import TravelPulseLogo from "../../assets/BestTimeGreatMigrationSafari/TravelPulse.webp";
import InsiderReportLogo from "../../assets/BestTimeGreatMigrationSafari/Insider_Travel_Report.webp";
import TravelAgeWestLogo from "../../assets/BestTimeGreatMigrationSafari/Travel_Age_West.webp";
import { Helmet } from "react-helmet-async";

/* ── Schema ──────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            founder: {
                "@id": "https://www.tripsandships.com/#angela-hughes",
            },
            areaServed: [
                "Africa",
                "Kenya",
                "Tanzania",
                "South Africa",
                "Botswana",
                "Rwanda",
            ],
            knowsAbout: [
                "Luxury Family Safaris",
                "African Safaris with Children",
                "Kenya Family Safaris",
                "Tanzania Family Safaris",
                "South Africa Family Safaris",
                "Botswana Safaris",
                "Micato Safaris",
                "Luxury Safari Planning",
                "Multigenerational Safari Travel",
            ],
        },
        {
            "@type": "Person",
            "@id": "https://www.tripsandships.com/#angela-hughes",
            name: "Angela Hughes",
            jobTitle:
                "CEO of Trips & Ships Luxury Travel and Founder of Luxury Travel University",
            url: "https://www.tripsandships.com",
            sameAs: ["https://www.luxurytraveluniversity.com"],
            knowsAbout: [
                "Luxury Travel",
                "Luxury African Safaris",
                "Family Safaris",
                "Kenya Safaris",
                "Tanzania Safaris",
                "Luxury Safari Planning",
                "Expedition Travel",
                "Multigenerational Travel",
            ],
            affiliation: {
                "@id": "https://www.tripsandships.com/#organization",
            },
        },
        {
            "@type": "WebPage",
            "@id":
                "https://www.tripsandships.com/best-african-safari-for-families/#webpage",
            url: "https://www.tripsandships.com/best-african-safari-for-families/",
            name: "Best African Safari for Families in 2026 | Luxury Family Safari Guide",
            description:
                "Planning an African safari with children or teenagers? Discover the best luxury family safaris in Kenya, Tanzania, South Africa, Botswana, and beyond with expert safari planning advice from Angela Hughes of Trips & Ships Luxury Travel.",
            author: {
                "@id": "https://www.tripsandships.com/#angela-hughes",
            },
            publisher: {
                "@id": "https://www.tripsandships.com/#organization",
            },
            about: [
                { "@type": "Thing", name: "Luxury Family Safaris" },
                { "@type": "Thing", name: "African Safaris with Children" },
                { "@type": "Place", name: "Kenya" },
                { "@type": "Place", name: "Tanzania" },
                { "@type": "Place", name: "South Africa" },
                { "@type": "Place", name: "Botswana" },
                { "@type": "Organization", name: "Micato Safaris" },
            ],
            mainEntity: {
                "@id":
                    "https://www.tripsandships.com/best-african-safari-for-families/#faq",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id":
                "https://www.tripsandships.com/best-african-safari-for-families/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.tripsandships.com/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Luxury African Safaris",
                    item: "https://www.tripsandships.com/luxury-african-safaris/",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Best African Safari for Families",
                    item: "https://www.tripsandships.com/best-african-safari-for-families/",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id":
                "https://www.tripsandships.com/best-african-safari-for-families/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which African safari is best for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Kenya is often considered one of the best African safari destinations for families because of its conservancies, family friendly camps, exceptional guides, and flexible safari experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best African safari for first time families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Kenya and Tanzania are both excellent for first time family safaris, though Kenya often works particularly well for younger children and multigenerational travel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Africa safe for family travel?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Luxury safari travel in Africa is generally very safe when planned through experienced safari operators and luxury travel advisors.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What age should children be for safari?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many luxury safari camps welcome children, though ideal safari styles vary depending on age. Some camps have minimum age requirements for walking safaris or certain activities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Kenya or Tanzania better for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Kenya is often slightly easier for families because of its conservancy model and flexibility, while Tanzania is exceptional for migration experiences and dramatic wildlife viewing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are safaris good for teenagers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Safari can be transformational for teenagers because of the adventure, wildlife, photography opportunities, cultural interaction, and conservation experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What animals will children see on safari?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Families commonly see lions, elephants, giraffes, zebras, hippos, wildebeest, cheetahs, leopards, and many other species depending on destination and season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long should a family safari be?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most luxury family safaris work best at approximately 7 to 10 days with fewer camps and a more relaxed pace.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does a luxury family safari cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Luxury family safaris typically range from approximately $8,000 to more than $30,000 per person depending on destination, camp level, flights, and level of customization.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best safari country for younger children?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "South Africa and Kenya are often excellent options for younger children because of easier logistics and strong family safari infrastructure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best safari country for teenagers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tanzania and Botswana are often exceptional for teenagers because of dramatic wildlife experiences and adventure focused safaris.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should kids pack for safari?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Children should pack neutral colored lightweight clothing, binoculars, layers for cool mornings, sun protection, and comfortable shoes.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should families use a safari travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Family safaris involve complex logistics, age appropriate camp selection, internal flights, and safari pacing that benefit enormously from expert planning.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best luxury safari company for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There are several outstanding safari companies in Africa. We often recommend trusted luxury safari partners such as Micato Safaris based on the family's goals, destination, and preferred travel style.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a family safari worth the cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For many families, safari becomes one of the most meaningful and memorable travel experiences they ever share together.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Component ───────────────────────────────────────────────── */
function LfsgFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Which African safari is best for families?",
            a: "Kenya is often considered one of the best African safari destinations for families because of its conservancies, family friendly camps, exceptional guides, and flexible safari experiences.",
        },
        {
            q: "What is the best African safari for first time families?",
            a: "Kenya and Tanzania are both excellent for first time family safaris, though Kenya often works particularly well for younger children and multigenerational travel.",
        },
        {
            q: "Is Africa safe for family travel?",
            a: "Yes. Luxury safari travel in Africa is generally very safe when planned through experienced safari operators and luxury travel advisors.",
        },
        {
            q: "What age should children be for safari?",
            a: "Many luxury safari camps welcome children, though ideal safari styles vary depending on age. Some camps have minimum age requirements for walking safaris or certain activities.",
        },
        {
            q: "Is Kenya or Tanzania better for families?",
            a: "Kenya is often slightly easier for families because of its conservancy model and flexibility, while Tanzania is exceptional for migration experiences and dramatic wildlife viewing.",
        },
        {
            q: "Are safaris good for teenagers?",
            a: "Absolutely. Safari can be transformational for teenagers because of the adventure, wildlife, photography opportunities, and conservation experiences.",
        },
        {
            q: "What animals will children see on safari?",
            a: "Families commonly see lions, elephants, giraffes, zebras, hippos, wildebeest, cheetahs, leopards, and many other species depending on destination and season.",
        },
        {
            q: "How long should a family safari be?",
            a: "Most luxury family safaris work best at approximately 7 to 10 days with fewer camps and a more relaxed pace.",
        },
        {
            q: "How much does a luxury family safari cost?",
            a: "Luxury family safaris typically range from approximately $8,000 to more than $30,000 per person depending on destination, camp level, flights, and level of customization.",
        },
        {
            q: "What is the best safari country for younger children?",
            a: "South Africa and Kenya are often excellent options for younger children because of easier logistics and strong family safari infrastructure.",
        },
        {
            q: "What is the best safari country for teenagers?",
            a: "Tanzania and Botswana are often exceptional for teenagers because of dramatic wildlife experiences and adventure focused safaris.",
        },
        {
            q: "What should kids pack for safari?",
            a: "Neutral colored lightweight clothing, binoculars, layers for cool mornings, sun protection, and comfortable shoes are all highly recommended.",
        },
        {
            q: "Should families use a safari travel advisor?",
            a: "Absolutely. Family safaris involve complex logistics, age appropriate camp selection, internal flights, and safari pacing that benefit enormously from expert planning.",
        },
        {
            q: "What is the best luxury safari company for families?",
            a: "There are several outstanding safari companies in Africa. We often recommend trusted luxury safari partners such as Micato Safaris based on the family's goals, destination, and preferred travel style.",
        },
        {
            q: "Is a family safari worth the cost?",
            a: "For many families, safari becomes one of the most meaningful and memorable travel experiences they ever share together.",
        },
    ];

    return (
        <div className="Lfsg-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`Lfsg-faq-item${open === i ? " Lfsg-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Lfsg-faq-q">
                        <span>{item.q}</span>
                        <span className="Lfsg-faq-icon">
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
                        </span>
                    </div>
                    {open === i && (
                        <div className="Lfsg-faq-a">
                            <div className="Lfsg-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ── Main Component ──────────────────────────────────────────────── */
const BestAfricaSafariForFamilies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const images = [BafricaImage2, BafricaImage1, BafricaImage8];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="Lfsg-page-wrapper">
            <Helmet>
                <title>
                    Best African Safari for Families in 2026 | Luxury Family Safari Guide
                </title>
                <meta
                    name="description"
                    content="Planning an African safari with children or teenagers? Discover the best luxury family safaris in Kenya, Tanzania, South Africa, Botswana, and beyond with expert safari planning advice from Angela Hughes of Trips & Ships Luxury Travel."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="Lfsg-hero-section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Lfsg-hero-bg ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="Lfsg-hero-overlay" />
                <div className="Lfsg-hero-content">
                    <div className="Lfsg-hero-eyebrow">
                        <Sparkles size={13} />
                        Family Safari Guide 2026
                    </div>
                    <h1 className="Lfsg-hero-h1">
                        Best African Safari for Families in 2026
                    </h1>
                    <p className="Lfsg-hero-sub">
                        For many families, an African safari becomes far more than a vacation.
                        It becomes one of the defining experiences of their lives together.
                    </p>

                    {!showMore ? (
                        <button
                            className="Lfsg-read-more-btn"
                            onClick={() => setShowMore(true)}
                        >
                            <span>Read More</span>
                            <ChevronDown size={14} />
                        </button>
                    ) : (
                        <div className="Lfsg-hero-expanded-content">
                            <p className="Lfsg-hero-sub">
                                Long after the trip ends, families remember the moments vividly. Watching elephants cross directly in front of their safari vehicle. Hearing lions roaring outside their tented camp late at night. Seeing giraffes move silently across the horizon at sunrise. Sitting together around a fire beneath the African sky talking about the day’s wildlife sightings.
                            </p>
                            <p className="Lfsg-hero-sub">
                                Safari has a way of reconnecting families.
                            </p>
                            <p className="Lfsg-hero-sub">
                                In a world filled with schedules, sports, notifications, and screens, Africa slows people down. Children become curious again. Teenagers become present again. Parents reconnect not only with nature, but often with each other.
                            </p>
                            <p className="Lfsg-hero-sub Lfsg-font-medium">
                                One of the most common questions families ask when planning Africa is simple:
                            </p>
                            <p className="Lfsg-hero-statement">
                                Which African safari is actually best for families?
                            </p>
                            <p className="Lfsg-hero-sub">
                                After traveling throughout Africa more than a dozen times and helping families design luxury safari experiences across East and Southern Africa, I generally tell clients this:
                            </p>
                            <p className="Lfsg-hero-statement">
                                For most luxury family safaris, Kenya remains one of the strongest overall safari destinations for families, followed closely by Tanzania and South Africa depending on the ages of the children and the style of experience desired.
                            </p>
                            <button
                                className="Lfsg-read-more-btn"
                                onClick={() => setShowMore(false)}
                            >
                                <span>Read Less</span>
                                <ChevronUp size={14} />
                            </button>
                        </div>
                    )}

                    <div className="Lfsg-hero-actions">
                        <button
                            className="Lfsg-hero-cta"
                            onClick={() =>
                                (window.location.href = "mailto:angela@tripsandships.com")
                            }
                        >
                            Start Planning Our Family Safari
                            <ArrowRight size={18} />
                        </button>
                        <p className="Lfsg-hero-cta-note">
                            Complimentary consultation with Angela Hughes
                        </p>
                    </div>
                </div>
            </section>

            {/* AS SEEN IN */}
            <section className="btgms-as-seen">
                <div className="btgms-container">
                    <span className="btgms-seen-label-top">AS SEEN IN</span>
                    <div className="btgms-seen-slider">
                        <div className="btgms-seen-track">
                            {[
                                { logo: TravelWeeklyLogo, name: "Travel Weekly" },
                                { logo: TravelPulseLogo, name: "TravelPulse" },
                                { logo: InsiderReportLogo, name: "Insider Travel Report" },
                                { logo: TravelAgeWestLogo, name: "Travel Age West" },
                            ]
                                .concat([
                                    { logo: TravelWeeklyLogo, name: "Travel Weekly" },
                                    { logo: TravelPulseLogo, name: "TravelPulse" },
                                    { logo: InsiderReportLogo, name: "Insider Travel Report" },
                                    { logo: TravelAgeWestLogo, name: "Travel Age West" },
                                ])
                                .map((item, index) => (
                                    <div key={index} className="btgms-seen-box">
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="btgms-seen-logo"
                                        />
                                        <span className="btgms-seen-text">{item.name}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY SAFARI IS EXTRAORDINARY FOR FAMILIES ─────────────── */}
            <section className="Lfsg-section Lfsg-bg-soft" id="Lfsg-why">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            Why African Safaris Are Extraordinary for Families
                        </h2>
                        <div className="Lfsg-accent-line" />
                        <p className="Lfsg-body-text Lfsg-why-intro">
                            Safari is one of the few luxury travel experiences that genuinely works across multiple generations.
                            Grandparents, parents, teenagers, and younger children can all experience safari differently while still sharing the same journey together.
                        </p>
                        <p className="Lfsg-body-text Lfsg-why-encourages">
                            Unlike many traditional vacations, safari naturally encourages:
                        </p>
                    </div>

                    <div className="Lfsg-benefits-grid">
                        {[
                            {
                                icon: <Users size={26} strokeWidth={1.5} />,
                                text: "Shared experiences",
                            },
                            {
                                icon: <Globe size={26} strokeWidth={1.5} />,
                                text: "Curiosity and learning",
                            },
                            {
                                icon: <Compass size={26} strokeWidth={1.5} />,
                                text: "Adventure",
                            },
                            {
                                icon: <Heart size={26} strokeWidth={1.5} />,
                                text: "Family connection",
                            },
                            {
                                icon: <Camera size={26} strokeWidth={1.5} />,
                                text: "Appreciation for wildlife and conservation",
                            },
                            {
                                icon: <Sparkles size={26} strokeWidth={1.5} />,
                                text: "Meaningful conversation",
                            },
                            {
                                icon: <Shield size={26} strokeWidth={1.5} />,
                                text: "Time away from technology",
                            },
                        ].map((item, i) => (
                            <div key={i} className="Lfsg-benefit-card">
                                <div className="Lfsg-benefit-icon">{item.icon}</div>
                                <p className="Lfsg-benefit-text">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="Lfsg-why-stories">
                        <p className="Lfsg-body-text Lfsg-story-para">
                            Children often become deeply engaged with safari because every game drive feels unpredictable.
                            One morning may involve a leopard stretched across a tree branch. Another may involve lion cubs playing beside the road. Another may focus entirely on elephant herds crossing the plains at sunset.
                        </p>
                        <p className="Lfsg-body-text Lfsg-story-statement">
                            Safari creates excitement naturally.
                        </p>
                        <p className="Lfsg-body-text Lfsg-story-italic">
                            One of the things that surprises many parents on safari is how quickly children disconnect from screens and reconnect with curiosity. I have watched teenagers who barely looked up from phones suddenly become completely captivated by wildlife tracking, lion sightings, and conversations around the campfire after dinner.
                        </p>
                        <p className="Lfsg-body-text Lfsg-story-conclusion">
                            Africa changes people.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DESTINATION CARDS ─────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-white" id="Lfsg-destinations">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            Best African Safari Destinations for Families
                        </h2>
                        <div className="Lfsg-accent-line" />
                        <p className="Lfsg-body-text Lfsg-mt-20">
                            After traveling throughout Africa more than a dozen times and
                            helping families design luxury safari experiences, Kenya remains
                            one of the strongest overall safari destinations for families.
                        </p>
                    </div>

                    <div className="Lfsg-destination-grid">
                        {/* Kenya */}
                        <div className="Lfsg-destination-card">
                            <div className="Lfsg-destination-img-wrap">
                                <div
                                    className="Lfsg-destination-img"
                                    style={{ backgroundImage: `url(${BafricaImage2})` }}
                                />
                                <div className="Lfsg-destination-overlay" />
                                <div className="Lfsg-destination-header">
                                    <h3 className="Lfsg-destination-name">Kenya Safari</h3>
                                    <span className="Lfsg-destination-badge">
                                        The Best African Safari for Families
                                    </span>
                                </div>
                            </div>
                            <div className="Lfsg-destination-body">
                                <div className="Lfsg-destination-scroll-area">
                                    <p className="Lfsg-destination-desc">
                                        Kenya remains one of my top recommendations for luxury family safaris because it combines extraordinary wildlife with excellent safari infrastructure and highly family friendly experiences.
                                    </p>
                                    <p className="Lfsg-destination-ideal">
                                        Kenya is especially strong for:
                                    </p>
                                    <ul className="Lfsg-destination-list Lfsg-destination-list-main">
                                        {[
                                            "First time family safaris",
                                            "Multigenerational travel",
                                            "Family friendly conservancies",
                                            "Exceptional safari guides",
                                            "Flexible safari pacing",
                                            "Educational wildlife experiences",
                                            "Luxury family tents and villas",
                                            "Photography safaris",
                                        ].map((item, i) => (
                                            <li key={i} className="Lfsg-destination-list-item">
                                                <Check
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className="Lfsg-list-check"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="Lfsg-destination-desc Lfsg-destination-sublist-title">
                                        One of Kenya’s greatest strengths is its conservancy model. Private conservancies surrounding the Maasai Mara National Reserve often provide:
                                    </p>
                                    <ul className="Lfsg-destination-list Lfsg-destination-sublist">
                                        {[
                                            "Fewer safari vehicles",
                                            "Highly personalized guiding",
                                            "Off road wildlife viewing",
                                            "Walking safaris",
                                            "More intimate wildlife experiences",
                                        ].map((item, i) => (
                                            <li key={i} className="Lfsg-destination-list-item Lfsg-destination-sublist-item">
                                                <span className="Lfsg-destination-sublist-bullet">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="Lfsg-destination-desc">
                                        This creates a much more immersive environment for families.
                                    </p>
                                    <p className="Lfsg-destination-desc">
                                        Kenya also offers some of the best safari guides in Africa for children and teenagers. The right guide can completely transform a family safari experience by making wildlife interactive, educational, and deeply engaging.
                                    </p>
                                    <p className="Lfsg-destination-desc Lfsg-italic">
                                        For many families, Kenya becomes the perfect introduction to Africa.
                                    </p>
                                </div>

                                <a href="/kenya-luxury-safari-guide" className="Lfsg-related-guide">
                                    Related Guide: Kenya Luxury Safari Guide
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Tanzania */}
                        <div className="Lfsg-destination-card">
                            <div className="Lfsg-destination-img-wrap">
                                <div
                                    className="Lfsg-destination-img"
                                    style={{ backgroundImage: `url(${Park})` }}
                                />
                                <div className="Lfsg-destination-overlay" />
                                <div className="Lfsg-destination-header">
                                    <h3 className="Lfsg-destination-name">Tanzania Safari</h3>
                                    <span className="Lfsg-destination-badge">
                                        Best for Families Wanting the Classic Safari Experience
                                    </span>
                                </div>
                            </div>
                            <div className="Lfsg-destination-body">
                                <div className="Lfsg-destination-scroll-area">
                                    <p className="Lfsg-destination-desc">
                                        Tanzania offers one of the most iconic safari experiences in the world and is particularly strong for families with older children or teenagers.
                                    </p>
                                    <p className="Lfsg-destination-ideal">
                                        Tanzania is ideal for:
                                    </p>
                                    <ul className="Lfsg-destination-list Lfsg-destination-list-main">
                                        {[
                                            "Great Migration safaris",
                                            "Families with teenagers",
                                            "Luxury tented camps",
                                            "Fly in safaris",
                                            "Safari plus Zanzibar itineraries",
                                            "Families wanting dramatic landscapes",
                                        ].map((item, i) => (
                                            <li key={i} className="Lfsg-destination-list-item">
                                                <Check
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className="Lfsg-list-check"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="Lfsg-destination-desc">
                                        The Serengeti National Park often delivers the “wow factor” families dream about when imagining Africa for the first time.
                                    </p>
                                    <p className="Lfsg-destination-desc">
                                        Watching thousands of wildebeest cross the plains during migration season can become one of the most memorable wildlife experiences a family ever shares together.
                                    </p>
                                </div>

                                <a href="/tanzania-luxury-safari-guide" className="Lfsg-related-guide">
                                    Related Guide: Tanzania Luxury Safari Guide
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* South Africa */}
                        <div className="Lfsg-destination-card">
                            <div className="Lfsg-destination-img-wrap">
                                <div
                                    className="Lfsg-destination-img Lfsg-age-img-younger1"
                                    style={{ backgroundImage: `url(${BafricaImage4})` }}
                                />
                                <div className="Lfsg-destination-overlay" />
                                <div className="Lfsg-destination-header">
                                    <h3 className="Lfsg-destination-name">South Africa Safari</h3>
                                    <span className="Lfsg-destination-badge">
                                        Best for Easier Logistics and Younger Children
                                    </span>
                                </div>
                            </div>
                            <div className="Lfsg-destination-body">
                                <div className="Lfsg-destination-scroll-area">
                                    <p className="Lfsg-destination-desc">
                                        South Africa is often an excellent choice for families seeking slightly easier travel logistics or malaria free safari options.
                                    </p>
                                    <p className="Lfsg-destination-ideal">
                                        South Africa is especially strong for:
                                    </p>
                                    <ul className="Lfsg-destination-list Lfsg-destination-list-main">
                                        {[
                                            "Younger children",
                                            "Luxury safari lodges",
                                            "Safari plus Cape Town itineraries",
                                            "Easier international access",
                                            "Families concerned about malaria regions",
                                        ].map((item, i) => (
                                            <li key={i} className="Lfsg-destination-list-item">
                                                <Check
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className="Lfsg-list-check"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="Lfsg-destination-desc">
                                        Private reserves near Kruger National Park offer beautiful luxury lodges, exceptional service, and excellent wildlife viewing.
                                    </p>
                                    <p className="Lfsg-destination-desc">
                                        For some families, South Africa creates a softer introduction to safari while still delivering incredible wildlife experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Botswana */}
                        <div className="Lfsg-destination-card">
                            <div className="Lfsg-destination-img-wrap">
                                <div
                                    className="Lfsg-destination-img"
                                    style={{ backgroundImage: `url(${BafricaImage5})` }}
                                />
                                <div className="Lfsg-destination-overlay" />
                                <div className="Lfsg-destination-header">
                                    <h3 className="Lfsg-destination-name">Botswana Safari</h3>
                                    <span className="Lfsg-destination-badge">
                                        Best for Older Children and Ultra Luxury Family Safaris
                                    </span>
                                </div>
                            </div>
                            <div className="Lfsg-destination-body">
                                <div className="Lfsg-destination-scroll-area">
                                    <p className="Lfsg-destination-desc">
                                        Botswana offers one of the most exclusive luxury safari experiences in Africa, though it is generally better suited for families with older children due to camp structures and remote logistics.
                                    </p>
                                    <p className="Lfsg-destination-ideal">
                                        Botswana is ideal for:
                                    </p>
                                    <ul className="Lfsg-destination-list Lfsg-destination-list-main">
                                        {[
                                            "Older teenagers",
                                            "Ultra luxury safaris",
                                            "Wildlife focused families",
                                            "Private safari experiences",
                                            "Exclusive wilderness experiences",
                                        ].map((item, i) => (
                                            <li key={i} className="Lfsg-destination-list-item">
                                                <Check
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className="Lfsg-list-check"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="Lfsg-destination-desc">
                                        The Okavango Delta remains one of the most extraordinary safari ecosystems on earth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ───────────────────────────────────────── */}
            <section
                className="Lfsg-section Lfsg-bg-soft"
                id="Lfsg-comparison-table"
            >
                <div className="Lfsg-container">
                    <div className="Lfsg-table-wrap">
                        <div className="Lfsg-section-header">
                            <h2 className="Lfsg-h2">
                                Best African Safari Destinations for Families
                            </h2>
                            <div className="Lfsg-accent-line" />
                        </div>
                        <div className="Lfsg-table-container">
                            <table className="Lfsg-compare-table">
                                <thead>
                                    <tr>
                                        <th className="Lfsg-th Lfsg-th-feature">Country</th>
                                        <th className="Lfsg-th Lfsg-th-col">Best For</th>
                                        <th className="Lfsg-th Lfsg-th-col">Best Age Range</th>
                                        <th className="Lfsg-th Lfsg-th-col">Luxury Level</th>
                                        <th className="Lfsg-th Lfsg-th-col">Ease for Families</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        [
                                            "Kenya",
                                            "First time family safaris",
                                            "All ages",
                                            "Exceptional",
                                            "Excellent",
                                        ],
                                        [
                                            "Tanzania",
                                            "Migration and dramatic wildlife",
                                            "Older children and teens",
                                            "Exceptional",
                                            "Very Strong",
                                        ],
                                        [
                                            "South Africa",
                                            "Easier logistics and younger children",
                                            "Younger children",
                                            "Exceptional",
                                            "Excellent",
                                        ],
                                        [
                                            "Botswana",
                                            "Ultra luxury wilderness safaris",
                                            "Older teens",
                                            "Ultra Luxury",
                                            "Moderate",
                                        ],
                                        [
                                            "Rwanda",
                                            "Gorilla trekking families",
                                            "Teens",
                                            "Exceptional",
                                            "Moderate",
                                        ],
                                    ].map((row, i) => (
                                        <tr
                                            key={i}
                                            className={
                                                i % 2 === 0 ? "Lfsg-tr-even" : "Lfsg-tr-odd"
                                            }
                                        >
                                            {row.map((cell, j) => (
                                                <td
                                                    key={j}
                                                    className={`Lfsg-td${j === 0 ? " Lfsg-td-feature" : ""
                                                        }`}
                                                >
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── YOUNGER CHILDREN VS TEENAGERS ─────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-white" id="Lfsg-ages">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            Safari with Younger Children vs Teenagers
                        </h2>
                        <div className="Lfsg-accent-line" />
                    </div>

                    <div className="Lfsg-ages-grid">
                        <div className="Lfsg-age-card">
                            <div
                                className="Lfsg-age-card-img Lfsg-age-img-younger"
                                style={{ backgroundImage: `url(${BafricaImage11})` }}
                            >
                                <div className="Lfsg-age-card-overlay" />
                            </div>
                            <div className="Lfsg-age-card-body">
                                <h3 className="Lfsg-age-card-title">Younger Children</h3>
                                <p className="Lfsg-age-card-desc">
                                    Families traveling with younger children generally benefit
                                    from shorter game drives, family villas or family tents,
                                    flexible schedules, child focused safari activities, swimming
                                    pools, and camps experienced with children. South Africa and
                                    Kenya are often particularly strong for younger travelers.
                                </p>
                                <div className="Lfsg-age-features">
                                    {[
                                        "Shorter game drives",
                                        "Family villas or family tents",
                                        "Flexible schedules",
                                        "Child focused safari activities",
                                        "Swimming pools",
                                        "Camps experienced with children",
                                    ].map((item, i) => (
                                        <div key={i} className="Lfsg-age-feature-item">
                                            <CheckCircle2
                                                size={15}
                                                strokeWidth={1.5}
                                                className="Lfsg-age-check"
                                            />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="Lfsg-age-card">
                            <div
                                className="Lfsg-age-card-img Lfsg-age-img-teenagers"
                                style={{ backgroundImage: `url(${BafricaImage12})` }}
                            >
                                <div className="Lfsg-age-card-overlay" />
                            </div>
                            <div className="Lfsg-age-card-body">
                                <h3 className="Lfsg-age-card-title">Teenagers</h3>
                                <p className="Lfsg-age-card-desc">
                                    Teenagers often thrive on safari. For many teenagers, safari
                                    becomes one of the most meaningful trips of their lives. The
                                    adventure, wildlife, photography opportunities, and
                                    conservation experiences create a transformational experience
                                    that lives with them long after the trip ends.
                                </p>
                                <div className="Lfsg-age-features">
                                    {[
                                        "Wildlife excitement",
                                        "Adventure experiences",
                                        "Photography opportunities",
                                        "Conservation experiences",
                                        "Cultural interaction",
                                        "Walking safaris",
                                    ].map((item, i) => (
                                        <div key={i} className="Lfsg-age-feature-item">
                                            <CheckCircle2
                                                size={15}
                                                strokeWidth={1.5}
                                                className="Lfsg-age-check"
                                            />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MULTIGENERATIONAL ─────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-multigen">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2-white">
                            Why Safari Is One of the Best
                            <br /> Multigenerational Trips in the World
                        </h2>
                        <div className="Lfsg-accent-line-white" />
                        <p className="Lfsg-body-text-white Lfsg-mt-20">
                            One of the reasons safari works so beautifully for
                            multigenerational travel is because every age group experiences
                            Africa differently while still sharing the same adventure
                            together.
                        </p>
                    </div>

                    <div className="Lfsg-multigen-grid">
                        {[
                            {
                                label: "Grandparents",
                                desc: "Often appreciate the pace, scenery, and extraordinary wildlife experiences in remarkable comfort.",
                            },
                            {
                                label: "Teenagers",
                                desc: "Become fascinated with wildlife, adventure, photography, and conservation opportunities.",
                            },
                            {
                                label: "Younger Children",
                                desc: "Become completely captivated by animal sightings and interactive educational experiences.",
                            },
                            {
                                label: "Parents",
                                desc: "Appreciate the shared experience away from everyday distractions, screens, and routine.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="Lfsg-multigen-card">
                                <div className="Lfsg-multigen-number">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h4 className="Lfsg-multigen-label">{item.label}</h4>
                                <p className="Lfsg-multigen-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="Lfsg-multigen-features-wrap">
                        <p className="Lfsg-body-text-white Lfsg-font-medium">
                            Luxury safari camps are increasingly designed around
                            multigenerational travel with:
                        </p>
                        <div className="Lfsg-multigen-features">
                            {[
                                "Family suites",
                                "Private villas",
                                "Shared common spaces",
                                "Flexible dining",
                                "Private vehicles",
                                "Family safari guides",
                            ].map((item, i) => (
                                <div key={i} className="Lfsg-multigen-feature-tag">
                                    <div className="Lfsg-multigen-dot" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST LUXURY CAMPS ─────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-soft" id="Lfsg-camps">
                <div className="Lfsg-container">
                    <div className="Lfsg-camps-split">
                        <div className="Lfsg-camps-content">
                            <div className="Lfsg-section-header Lfsg-camps-header">
                                <h2 className="Lfsg-h2">
                                    Best Luxury Safari Camps for Families
                                </h2>
                                <div className="Lfsg-accent-line" />
                            </div>
                            <p className="Lfsg-camps-text">
                                One of the biggest misconceptions about safari is that every camp works well for families.
                            </p>
                            <p className="Lfsg-camps-text Lfsg-italic">
                                It does not.
                            </p>
                            <p className="Lfsg-camps-text">
                                The best luxury family safari camps typically offer:
                            </p>
                            <div className="Lfsg-camps-features">
                                {[
                                    "Family tents or villas",
                                    "Child friendly guides",
                                    "Flexible safari schedules",
                                    "Pools",
                                    "Educational activities",
                                    "Family dining flexibility",
                                    "Private safari vehicles when needed",
                                ].map((item, i) => (
                                    <div key={i} className="Lfsg-camps-feature-item">
                                        <Check
                                            size={16}
                                            strokeWidth={2.5}
                                            className="Lfsg-camps-check"
                                        />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="Lfsg-camps-text Lfsg-mt-20">
                                Choosing the right camps for your family’s age range and travel style matters enormously.
                            </p>
                            <a href="/best-luxury-safari-camps" className="Lfsg-related-guide">
                                Related Guide: Best Luxury Safari Camps in Africa
                                <ArrowRight size={14} />
                            </a>
                        </div>
                        <div className="Lfsg-camps-gallery">
                            <div
                                className="Lfsg-camps-img-main"
                                style={{ backgroundImage: `url(${BafricaImage9})` }}
                            />
                            <div
                                className="Lfsg-camps-img-accent"
                                style={{ backgroundImage: `url(${BafricaImage13})` }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST TIMING ───────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-white" id="Lfsg-timing">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">Best Time for Family Safari in Africa</h2>
                        <div className="Lfsg-accent-line" />
                        <p className="Lfsg-body-text Lfsg-mt-20">
                            Timing can dramatically shape the safari experience.
                        </p>
                    </div>

                    <div className="Lfsg-timing-grid">
                        {[
                            {
                                period: "June through October",
                                desc: "Often considered peak safari season in East Africa with exceptional wildlife viewing and Great Migration opportunities.",
                                icon: <Star size={28} strokeWidth={1.5} />,
                            },
                            {
                                period: "December through January",
                                desc: "Popular for holiday family travel and multigenerational trips.",
                                icon: <Sparkles size={28} strokeWidth={1.5} />,
                            },
                            {
                                period: "Green Season",
                                desc: "Often quieter with beautiful landscapes, fewer crowds, and excellent value depending on destination.",
                                icon: <Globe size={28} strokeWidth={1.5} />,
                            },
                        ].map((item, i) => (
                            <div key={i} className="Lfsg-timing-card">
                                <div className="Lfsg-timing-icon">{item.icon}</div>
                                <h3 className="Lfsg-timing-period">{item.period}</h3>
                                <p className="Lfsg-timing-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="Lfsg-timing-guide-wrap">
                        <a href="/best-time-for-safari-in-africa" className="Lfsg-related-guide">
                            Related Guide: Best Time for Safari in Africa
                            <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SAFARI COSTS ──────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-soft" id="Lfsg-cost">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            What Does a Luxury Family Safari Cost?
                        </h2>
                        <div className="Lfsg-accent-line" />
                        <div className="Lfsg-section-intro-text">
                            <p className="Lfsg-body-text">
                                Luxury family safaris vary significantly depending on a range
                                of factors.
                            </p>
                            <div className="Lfsg-factors-wrap">
                                {[
                                    "Destination",
                                    "Camp level",
                                    "Number of travelers",
                                    "Internal flights",
                                    "Private guides",
                                    "Family accommodations",
                                    "Seasonality",
                                ].map((item, i) => (
                                    <div key={i} className="Lfsg-factor-tag">
                                        <div className="Lfsg-factor-dot" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="Lfsg-pricing-grid">
                        {/* Premium */}
                        <div className="Lfsg-pricing-card">
                            <div className="Lfsg-pricing-card-inner">
                                <div className="Lfsg-pricing-icon">
                                    <Shield size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="Lfsg-pricing-tier">
                                    Premium Luxury Family Safari
                                </h3>
                                <div className="Lfsg-pricing-amount">$8,000 to $15,000+</div>
                                <div className="Lfsg-pricing-per">Per Person</div>
                                <div className="Lfsg-pricing-divider" />
                                <p className="Lfsg-pricing-desc">
                                    This typically includes luxury camps, exceptional guides,
                                    game drives, internal flights, and thoughtfully designed
                                    itineraries.
                                </p>
                            </div>
                        </div>

                        {/* Luxury */}
                        <div className="Lfsg-pricing-card Lfsg-pricing-featured">
                            <div className="Lfsg-pricing-card-inner">
                                <div className="Lfsg-pricing-badge">Most Popular</div>
                                <div className="Lfsg-pricing-icon">
                                    <Award size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="Lfsg-pricing-tier">Luxury Family Safari</h3>
                                <div className="Lfsg-pricing-amount">$15,000 to $30,000+</div>
                                <div className="Lfsg-pricing-per">Per Person</div>
                                <div className="Lfsg-pricing-divider" />
                                <p className="Lfsg-pricing-desc">
                                    This range often includes ultra luxury camps, fly in safaris,
                                    highly personalized service, and premium migration
                                    experiences.
                                </p>
                            </div>
                        </div>

                        {/* Ultra Luxury */}
                        <div className="Lfsg-pricing-card">
                            <div className="Lfsg-pricing-card-inner">
                                <div className="Lfsg-pricing-icon">
                                    <Sparkles size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="Lfsg-pricing-tier">Ultra Luxury Family Safari</h3>
                                <div className="Lfsg-pricing-amount">$30,000+</div>
                                <div className="Lfsg-pricing-per">Per Person</div>
                                <div className="Lfsg-pricing-divider" />
                                <p className="Lfsg-pricing-desc">
                                    These experiences may include private villas, private safari
                                    vehicles, charter flights, elite guiding, and highly
                                    customized itineraries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION ────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-white" id="Lfsg-video">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            Experience the Magic of a Family African Safari
                        </h2>
                        <div className="Lfsg-accent-line" />
                        <p className="Lfsg-body-text Lfsg-mt-20">
                            Watch this breathtaking showcase of Africa's wildlife and
                            landscapes to get a glimpse of what awaits your family on safari.
                        </p>
                    </div>
                    <div className="Lfsg-video-wrapper">
                        <iframe
                            className="Lfsg-video-iframe"
                            src="https://www.youtube.com/embed/KWE-hQT1DFk"
                            title="Best African Safari for Families"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2-white">
                            Common Mistakes Families Make When Planning Safari
                        </h2>
                        <div className="Lfsg-accent-line-white" />
                    </div>

                    <div className="Lfsg-mistakes-grid">
                        {[
                            {
                                title: "Trying to Visit Too Many Camps",
                                desc: "Families often underestimate travel distances in Africa. Fewer camps with longer stays generally create a far more enjoyable experience.",
                            },
                            {
                                title: "Choosing Camps Solely Based on Photos",
                                desc: "Some camps look beautiful online but may not work well for younger children or multigenerational travel.",
                            },
                            {
                                title: "Ignoring Internal Flight Logistics",
                                desc: "Safari travel often involves small charter aircraft with luggage restrictions and timing considerations.",
                            },
                            {
                                title: "Booking Without Understanding Seasonality",
                                desc: "Migration timing, weather, wildlife movement, and crowd levels all impact the family safari experience.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="Lfsg-mistake-card">
                                <div className="Lfsg-mistake-number">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h4 className="Lfsg-mistake-title">{item.title}</h4>
                                <p className="Lfsg-mistake-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY MICATO ────────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-soft" id="Lfsg-micato">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            Why We Often Recommend Micato Safaris for Families
                        </h2>
                        <div className="Lfsg-accent-line" />
                    </div>
                    <div className="Lfsg-micato-split">
                        <div className="Lfsg-micato-content">
                            <p className="Lfsg-micato-body-text">
                                One of the reasons we frequently recommend Micato Safaris for
                                family safaris is because of their exceptional guiding, highly
                                personalized service, and deep understanding of luxury
                                multigenerational travel.
                            </p>
                            <p className="Lfsg-micato-body-text">
                                Their family safari experiences are thoughtfully paced and
                                exceptionally well executed for both children and adults.
                            </p>
                            <p className="Lfsg-micato-body-text">
                                For first time safari families, having seamless logistics and
                                extraordinary guides can dramatically shape the overall
                                experience.
                            </p>
                            <p className="Lfsg-micato-body-text">
                                In addition to exceptional safari experiences, Micato also has
                                strong partnerships with wonderful family-friendly safari lodges
                                and camps across East and Southern Africa, allowing them to
                                create truly memorable multigenerational journeys.
                            </p>
                        </div>
                        <div className="Lfsg-micato-gallery">
                            <div className="Lfsg-micato-img-card Lfsg-micato-img-2">
                                <img src={BafricaImage6} alt="Safari Landscape" />
                            </div>
                            <div className="Lfsg-micato-img-card Lfsg-micato-img-1">
                                <img src={BafricaImage10} alt="Luxury Family Safari" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY TRIPS & SHIPS ─────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-dark2" id="Lfsg-tripsandships">
                <div className="Lfsg-container">
                    <div className="Lfsg-specialist-wrap">
                        <div className="Lfsg-specialist-quote-icon">
                            <Quote size={48} strokeWidth={1} />
                        </div>
                        <h2 className="Lfsg-specialist-title">
                            Why Families Work with Trips & Ships Luxury Travel
                        </h2>
                        <div className="Lfsg-accent-line-white" />

                        <p className="Lfsg-specialist-text Lfsg-mb-40">
                            Families often choose to work with Trips & Ships Luxury Travel because of our:
                        </p>

                        <div className="Lfsg-specialist-features-grid">
                            {[
                                "Extensive Africa travel experience",
                                "Luxury safari specialization",
                                "Family safari planning expertise",
                                "Trusted luxury safari partnerships",
                                "Multigenerational travel expertise",
                                "Personalized itinerary design",
                                "Knowledge of luxury camps and conservancies",
                                "Deep understanding of safari logistics",
                            ].map((item, i) => (
                                <div key={i} className="Lfsg-specialist-feature-card">
                                    <div className="Lfsg-specialist-feature-icon">
                                        <Check size={20} strokeWidth={2.5} />
                                    </div>
                                    <span className="Lfsg-specialist-feature-text">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="Lfsg-specialist-content-box">
                            <p className="Lfsg-specialist-text">
                                Family safari planning is far more complex than many travelers initially realize.
                            </p>
                            <p className="Lfsg-specialist-text">
                                Choosing the right camps, pacing, guides, wildlife regions, flights, and seasonality can dramatically shape the experience.
                            </p>

                            <div className="Lfsg-specialist-divider" />

                            <p className="Lfsg-specialist-text Lfsg-font-medium Lfsg-mb-24">
                                Whether you are planning:
                            </p>

                            <div className="Lfsg-specialist-pills">
                                {[
                                    "A first time family safari",
                                    "A multigenerational safari",
                                    "A luxury teen adventure",
                                    "A safari and beach itinerary",
                                    "A private family safari",
                                ].map((item, i) => (
                                    <div key={i} className="Lfsg-specialist-pill">
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="Lfsg-specialist-text Lfsg-specialist-conclusion">
                                …our team works closely with trusted luxury safari partners to create highly personalized journeys tailored to your family’s goals and comfort level.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ANGELA ──────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-white" id="Lfsg-about">
                <div className="Lfsg-container">
                    <div className="Lfsg-about-split">
                        <div className="Lfsg-about-left-col">
                            <div className="Lfsg-about-img-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes"
                                    className="Lfsg-about-img"
                                />
                                <div className="Lfsg-about-img-accent" />
                            </div>

                            <div className="Lfsg-about-stats">
                                {[
                                    { number: "121+", label: "Countries Visited" },
                                    { number: "12+", label: "Africa Visits" },
                                    { number: "40+", label: "Years Experience" },
                                ].map((stat, i) => (
                                    <div key={i} className="Lfsg-about-stat">
                                        <div className="Lfsg-about-stat-number">{stat.number}</div>
                                        <div className="Lfsg-about-stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Lfsg-about-content">
                            <div className="Lfsg-about-header">
                                <div className="Lfsg-about-eyebrow-container">
                                    <Sparkles size={16} className="Lfsg-wildlife-icon" />
                                    <span className="Lfsg-about-eyebrow Lfsg-about-eyebrow-no-mb">
                                        Luxury Safari Expert
                                    </span>
                                </div>
                                <h2 className="Lfsg-h2 Lfsg-about-title">
                                    About Angela Hughes
                                </h2>
                                <div className="Lfsg-accent-line Lfsg-about-accent-line" />
                            </div>

                            <p className="Lfsg-about-text">
                                Angela Hughes is the CEO of Trips & Ships Luxury Travel and
                                founder of Luxury Travel University. She has traveled to more
                                than 121 countries and has visited Africa more than a dozen
                                times, specializing in luxury safaris, expeditions, cruises,
                                and highly customized global travel experiences.
                            </p>
                            <p className="Lfsg-about-text">
                                Angela was named the 2024 Luxury Travel Influencer of the Year
                                by Travel Leaders Network and was recognized on the 2026 Most
                                Influential Women in Travel list by TravelPulse. She has been
                                featured in Travel Weekly, TravelPulse, Insider Travel Report,
                                Luxury Travel Advisor, Travel Market Report, and the Wall
                                Street Journal.
                            </p>
                            <p className="Lfsg-about-text">
                                In addition to her luxury travel expertise, Angela has spent
                                years involved in humanitarian and sustainable tourism
                                initiatives throughout developing countries around the world
                                including Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-soft" id="Lfsg-faq">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">
                            Frequently Asked Questions About Family Safaris in Africa
                        </h2>
                        <div className="Lfsg-accent-line" />
                        <p className="Lfsg-faq-intro">
                            These are the most common questions we are asked when planning a
                            family African safari.
                        </p>
                    </div>
                    <LfsgFAQ />
                </div>
            </section>

            {/* ── RELATED GUIDES ────────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-white" id="Lfsg-related-guides">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2">Related Luxury Safari Guides</h2>
                        <div className="Lfsg-accent-line" />
                    </div>

                    <div className="Lfsg-guides-grid">
                        {[
                            { name: "Kenya vs Tanzania Safari", path: "/kenya-vs-tanzania-safari" },
                            { name: "Best African Safari for First Timers", path: "/best-african-safari-for-first-timers" },
                            { name: "Great Migration Guide", path: "/best-time-great-migration-safari" },
                            { name: "Best Time for Safari in Africa", path: "" },
                            { name: "African Safari Cost Guide", path: "/luxury-african-safari-cost" },
                            { name: "Tanzania Luxury Safari Guide", path: "" },
                            { name: "Kenya Luxury Safari Guide", path: "/luxury-kenya-safari" },
                            { name: "Best Luxury Safari Camps in Africa", path: "" },
                            { name: "Safari Packing Guide", path: "" },
                            { name: "Safari and Zanzibar Itinerary", path: "" },
                        ].map((guide, idx) => (
                            <a key={idx} href={guide.path} className="Lfsg-guide-card">
                                <div className="Lfsg-guide-card-content">
                                    <span className="Lfsg-guide-card-name">{guide.name}</span>
                                    <span className="Lfsg-guide-card-icon-wrap">
                                        <ArrowRight size={16} className="Lfsg-guide-card-icon" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestAfricaSafariForFamilies;