import Navbar from '../../components/Navbar/Navbar'
import './Scenicluxuryyachtguide.css'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import {
    Sparkles, Phone, LayoutList, CheckCircle, Crown, Users, Home,
    UtensilsCrossed, Wine, Gift, Wifi, Compass, Anchor, Plane, Ship,
    Snowflake, Mountain, Palmtree, Waves, MapPin, ChevronRight, Star,
    Calendar, Camera, Award,
    Globe
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function ScenicLuxuryYachtGuide() {

    const [slyActiveFaq, setSlyActiveFaq] = useState(null)
    const slyToggleFaq = (index) => {
        setSlyActiveFaq(slyActiveFaq === index ? null : index)
    }

    /* Why Choose Scenic */
    const slyWhyChoose = [
        { text: 'Truly all-inclusive luxury', icon: Crown },
        { text: 'Butler service for every suite', icon: Users },
        { text: 'Spacious veranda suites', icon: Home },
        { text: 'Up to 10 dining experiences', icon: UtensilsCrossed },
        { text: 'Complimentary premium beverages', icon: Wine },
        { text: 'Included gratuities', icon: Gift },
        { text: 'Included Wi-Fi', icon: Wifi },
        { text: 'Scenic Enrich experiences', icon: Sparkles },
        { text: 'Scenic Freechoice excursions', icon: Compass },
        { text: 'Zodiac excursions', icon: Anchor },
        { text: 'Helicopter and submarine experiences (select voyages)', icon: Plane }
    ]

    /* Scenic Eclipse highlights */
    const slyEclipseHighlights = [
        'Approximately 228 guests (200 in Polar Regions)',
        'Spacious all-veranda suites',
        'Nearly 1:1 crew-to-guest ratio',
        'Two onboard helicopters (select itineraries)',
        'Custom-built submarine',
        'Polar Class 6 rating',
        'Advanced stabilization systems',
        'State-of-the-art expedition technology'
    ]

    /* Luxury suite features */
    const slySuiteFeatures = [
        'Private veranda',
        'Butler service',
        'King-size Scenic Slumber Bed',
        'Premium linens',
        'Spacious marble bathroom',
        'Mini-bar',
        'Luxury bath amenities',
        'Personalized in-suite dining'
    ]

    /* Dining venues */
    const slyDiningVenues = [
        'Elements', "Koko's Asian Fusion", "Night Market @ Koko's",
        'Lumière French Cuisine', "Sushi @ Koko's", 'Azure Bar & Café',
        'Yacht Club Grill', "Chef's Table", 'In-suite dining'
    ]

    /* Wellness facilities */
    const slyWellnessFacilities = [
        'Senses Spa', 'Infrared sauna', 'Salt therapy lounge', 'Steam room',
        'Yoga & Pilates studio', 'Gym', 'Vitality pools', 'Outdoor relaxation areas'
    ]

    /* Expedition experiences */
    const slyExpeditionExperiences = [
        'Zodiac cruises', 'Wildlife viewing', 'Hiking', 'Kayaking',
        'Snorkeling', 'Paddleboarding', 'Guided nature walks',
        'Cultural encounters'
    ]

    /* Destinations */
    const slyDestinations = [
        {
            name: 'Antarctica',
            text: 'Experience towering glaciers, penguin colonies, whales, seals, and Zodiac landings.',
            icon: Snowflake,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Antarctica'
        },
        {
            name: 'Arctic & Greenland',
            text: 'Visit Svalbard, Iceland, Greenland, and the Canadian Arctic while searching for polar bears and incredible wildlife.',
            icon: Compass,
            img: 'https://placehold.co/600x500/274472/ffffff?text=Arctic+%26+Greenland'
        },
        {
            name: 'Mediterranean',
            text: 'Discover Italy, Greece, Croatia, France, Spain, and hidden coastal villages inaccessible to larger ships.',
            icon: Anchor,
            img: 'https://placehold.co/600x500/1c2f4a/ffffff?text=Mediterranean'
        },
        {
            name: 'Norwegian Fjords',
            text: 'Cruise dramatic fjords, charming villages, waterfalls, and spectacular mountain scenery.',
            icon: Mountain,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Norwegian+Fjords'
        },
        {
            name: 'South Pacific',
            text: 'Explore Fiji, French Polynesia, Papua New Guinea, Indonesia, and remote tropical islands.',
            icon: Palmtree,
            img: 'https://placehold.co/600x500/274472/ffffff?text=South+Pacific'
        },
        {
            name: 'Australia & New Zealand',
            text: "Experience the Kimberley, Tasmania, New Zealand, and Australia's spectacular coastline.",
            icon: Waves,
            img: 'https://placehold.co/600x500/1c2f4a/ffffff?text=Australia+%26+New+Zealand'
        }
    ]

    /* What's included */
    const slyIncluded = [
        'Luxury accommodations', 'Butler service', 'Fine dining', 'Premium beverages',
        'Wi-Fi', 'Gratuities', 'Scenic Freechoice excursions', 'Scenic Enrich experiences',
        'Expedition equipment', 'Zodiac excursions', 'Airport transfers (select itineraries)'
    ]

    /* Who should cruise with Scenic */
    const slyWhoShouldCruise = [
        'Luxury expedition cruising', 'Small ship experiences', 'Adventure with comfort',
        'Exceptional dining', 'Personalized service', 'Couples travel',
        'Bucket-list destinations', 'All-inclusive value'
    ]

    /* Why book with Trips & Ships */
    const slyWhyBookUs = [
        { title: 'Compare Scenic itineraries', icon: LayoutList },
        { title: 'Choose the right suite', icon: Home },
        { title: 'Select the best sailing season', icon: Calendar },
        { title: "Understand what's included", icon: CheckCircle },
        { title: 'Compare Scenic with other luxury cruise lines', icon: Ship },
        { title: 'Arrange pre- and post-cruise travel', icon: Compass },
        { title: 'Coordinate airfare', icon: Plane },
        { title: 'Secure exclusive offers', icon: Gift },
        { title: 'Plan private tours', icon: MapPin },
        { title: 'Provide ongoing travel support', icon: Phone }
    ]

    /* Related Scenic guides */
    const slyRelatedGuides = [
        'Scenic vs Viking', 'Scenic vs Explora Journeys', 'Scenic vs Silversea',
        'Scenic vs Seabourn', 'Scenic Antarctica Cruises', 'Scenic Mediterranean Cruises',
        'Scenic Arctic Cruises', 'Scenic Eclipse vs Scenic Eclipse II'
    ]

    /* FAQs */
    const slyFaqs = [
        {
            question: 'The Caribbean: Paradise for Yacht Charters',
            answer: (
                <>
                    <p>The Caribbean is synonymous with sailing paradise and ranks among the best places to yacht. With its turquoise waters and sun-drenched skies, it beckons yacht enthusiasts. The region's diverse islands offer countless treasures to explore.</p>
                    <p>Each island boasts unique attractions, from vibrant marine life to pristine beaches. Sailing through this region provides an unmatched blend of natural beauty and adventure. Hidden coves and serene anchorages await exploration.</p>
                    <p>For the best experience, consider these destinations:</p>
                    <ul>
                        <li><strong>British Virgin Islands:</strong> Calm waters and short distances make it ideal for beginners.</li>
                        <li><strong>Antigua and Barbuda:</strong> Known for their beautiful beaches and vibrant culture.</li>
                        <li><strong>Saint Lucia:</strong> Offers lush landscapes and stunning coastal views.</li>
                    </ul>
                    <p>Yacht charters here offer diverse routes that suit all tastes. Some routes cover bustling ports, while others take you to secluded hideaways. The Caribbean truly has something for everyone.</p>
                </>
            )
        },
        {
            question: 'The Mediterranean: Culture, History, and Coastlines',
            answer: (
                <>
                    <p>The Mediterranean is a sailor's dream, rich in culture and history. Its azure waters gracefully cradle ancient port cities and vibrant coastlines. Sailing here offers a unique blend of exploration and relaxation.</p>
                    <p>From the bustling markets of Turkey to the quiet coves of Spain, there is much to discover. Each destination provides a glimpse into local heritage and a taste of Mediterranean cuisine. Sun-kissed beaches and historic sites abound.</p>
                    <p>Highlights of Mediterranean sailing include:</p>
                    <ul>
                        <li><strong>Greece:</strong> The Cyclades Islands are famous for their whitewashed villages and ancient ruins.</li>
                        <li><strong>Italy's Amalfi Coast:</strong> Known for its dramatic cliffs and charming coastal towns.</li>
                        <li><strong>Turkey's Turquoise Coast:</strong> A blend of ancient ruins and stunning natural beauty.</li>
                    </ul>
                    <p>Yacht routes span cultural hotspots and natural wonders, catering to varied interests. This region's enchanting landscapes promise unforgettable sailing experiences.</p>
                </>
            )
        },
        {
            question: 'Greece -- Cyclades & Ionian Islands',
            answer: (
                <>
                    <p>Greece offers some of the best yacht destinations in the world. The Cyclades and Ionian Islands stand out with their sheer beauty. Each island has its own distinct character and charm.</p>
                    <p>In the Cyclades, you'll find iconic white buildings and azure sea. Mykonos and Santorini are famous for their vibrant nightlife and stunning sunsets. History lovers will appreciate ancient ruins on Delos Island.</p>
                    <p>The Ionian Islands, on the other hand, offer green landscapes and calm waters. Corfu and Kefalonia are ideal for relaxed sailing and exploring lush scenery. These islands are perfect for a tranquil escape.</p>
                    <p>Must-see spots in Greece:</p>
                    <ul>
                        <li><strong>Santorini:</strong> Known for its dramatic cliffs and sunsets.</li>
                        <li><strong>Mykonos:</strong> Famous for lively nightlife and sandy beaches.</li>
                        <li><strong>Corfu:</strong> Offers lush scenery and historic forts.</li>
                    </ul>
                    <p>Both island groups provide yacht charter routes filled with breathtaking views. Sailing here can be a magical blend of discovery and relaxation.</p>
                </>
            )
        },
        {
            question: 'Croatia -- Dalmatian Coast',
            answer: (
                <>
                    <p>Croatia's Dalmatian Coast is a gem among top sailing destinations. Its medieval towns and pristine beaches draw many yacht enthusiasts. As you sail, you'll marvel at the Adriatic's clear waters.</p>
                    <p>The coast boasts several historic cities like Dubrovnik and Split. These cities are famous for their stunning architecture and rich history. Moreover, the nearby islands offer tranquil retreats away from the crowds.</p>
                    <p>For nature lovers, the national parks scattered along the coast offer lush greenery and breathtaking vistas. The islands of Hvar and Brač are known for lavender fields and olive groves, adding a touch of local culture to your sailing experience.</p>
                    <p>Highlights of the Dalmatian Coast:</p>
                    <ul>
                        <li><strong>Dubrovnik:</strong> A historic city with stunning walls and views.</li>
                        <li><strong>Split:</strong> Features ancient Roman architecture and vibrant markets.</li>
                        <li><strong>Hvar:</strong> Offers beautiful fields and energetic nightlife.</li>
                    </ul>
                    <p>The Dalmatian Coast remains a favorite for those seeking both adventure and relaxation.</p>
                </>
            )
        },
        {
            question: 'French Riviera, France',
            answer: (
                <>
                    <p>The French Riviera is synonymous with luxury and beauty. This glamorous coastline combines vibrant towns with breathtaking scenery. Yachting here provides an unmatched blend of sophistication and serene beaches.</p>
                    <p>Sail around iconic locations such as Nice and Cannes. These cities are well-known for their cultural events and upscale amenities. Hidden coves and pristine beaches await those who venture further along the coast.</p>
                    <p>Indulge in local cuisine and fine wine at numerous seaside restaurants. The region's allure is perfect for anyone seeking elegance on the water. Whether you prefer bustling city ports or secluded anchorages, the French Riviera has something for all tastes.</p>
                    <p>Notable places along the French Riviera:</p>
                    <ul>
                        <li><strong>Nice:</strong> Offers historic sites and fine dining.</li>
                        <li><strong>Cannes:</strong> Famous for its film festival and sandy beaches.</li>
                        <li><strong>Monaco:</strong> Known for luxury yachts and vibrant nightlife.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Thailand -- Andaman Sea',
            answer: (
                <>
                    <p>Thailand's Andaman Sea is a true paradise for sailors. Its turquoise waters teem with vibrant marine life. Towering limestone cliffs create dramatic backdrops, making every voyage memorable.</p>
                    <p>The region is filled with exotic islands, each offering unique experiences. Phang Nga Bay is known for its striking karsts jutting from the ocean. The Phi Phi Islands offer stunning beaches and exciting snorkeling opportunities.</p>
                    <p>Savor Thailand's rich culinary traditions at charming local eateries. The friendly locals and lush landscapes are sure to enhance your sailing adventure. It's no surprise that this destination is a favorite among yacht charter enthusiasts.</p>
                    <p>Highlights of sailing in the Andaman Sea:</p>
                    <ul>
                        <li><strong>Phang Nga Bay:</strong> Famous for its limestone formations.</li>
                        <li><strong>Phi Phi Islands:</strong> Known for beautiful beaches and clear waters.</li>
                        <li><strong>Similan Islands:</strong> Excellent for diving and snorkeling.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Whitsunday Islands, Australia',
            answer: (
                <>
                    <p>The Whitsunday Islands offer an unparalleled sailing experience. Nestled near the Great Barrier Reef, they boast dazzling marine biodiversity. Vibrant coral reefs make snorkeling and diving unforgettable.</p>
                    <p>These 74 islands feature serene beaches with pristine white sand. Whitehaven Beach stands out, acclaimed for its stunning silica sands. The panoramic views are truly breathtaking, leaving sailors in awe.</p>
                    <p>Sailing in the Whitsundays, you'll encounter plenty of adventure and relaxation. Explore secluded coves or take a refreshing swim. Local marinas offer warm hospitality, welcoming yachts from around the globe.</p>
                    <p>Reasons to sail the Whitsundays:</p>
                    <ul>
                        <li><strong>Whitehaven Beach:</strong> World-famous for its pure white sand.</li>
                        <li><strong>Great Barrier Reef:</strong> Thrilling for diving and marine exploration.</li>
                        <li><strong>Secluded Coves:</strong> Perfect for tranquil escapes.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Seychelles, Indian Ocean',
            answer: (
                <>
                    <p>The Seychelles archipelago is a sailor's paradise with its secluded beaches and azure waters. Located in the Indian Ocean, it offers a perfect escape from the bustling world. Each island has its own charm and unique wildlife.</p>
                    <p>Sailors can explore lush landscapes teeming with exotic fauna. Giant tortoises roam the islands, captivating nature enthusiasts. The underwater life in Seychelles is equally mesmerizing, showcasing vibrant coral reefs.</p>
                    <p>This sailing destination is ideal for those seeking tranquility and natural beauty. Every corner of the Seychelles offers a new discovery. Its warm, welcoming climate makes it perfect for year-round yachting.</p>
                    <p>Highlights of sailing in Seychelles:</p>
                    <ul>
                        <li><strong>Pristine Beaches:</strong> Offering solitude and serenity.</li>
                        <li><strong>Unique Wildlife:</strong> Home to giant tortoises.</li>
                        <li><strong>Vibrant Marine Life:</strong> Perfect for snorkeling.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Galápagos Islands, Ecuador',
            answer: (
                <>
                    <p>The Galápagos Islands are a sailor's dream for unique wildlife encounters. This UNESCO World Heritage site offers a blend of unique landscapes and rare animals. It's a must-visit for nature lovers and adventure seekers alike.</p>
                    <p>While sailing, you'll witness pristine environments largely untouched by human activity. The islands are famous for their unparalleled biodiversity. You might spot sea lions, iguanas, and various bird species during your journey.</p>
                    <p>The Galápagos offer more than just spectacular sailing experiences. Snorkeling and diving opportunities abound, with rich marine life waiting beneath the waves. The islands provide an unmatched exploration of the natural world.</p>
                    <p>Reasons to sail the Galápagos:</p>
                    <ul>
                        <li><strong>Unique Wildlife:</strong> Home to species found nowhere else.</li>
                        <li><strong>Pristine Environments:</strong> Largely untouched by development.</li>
                        <li><strong>Rich Marine Life:</strong> Offers vibrant snorkeling experiences.</li>
                    </ul>
                </>
            )
        },
        {
            question: "Norway's Fjords",
            answer: (
                <>
                    <p>Norway's fjords offer a sailing experience unlike any other. These deep blue waters weave through towering cliffs and breathtaking landscapes. They create an enchanting environment perfect for exploration and adventure.</p>
                    <p>Sailing in Norway offers opportunities to explore charming coastal towns. The fjords' dramatic scenery makes every turn a visual delight. The combination of serene waters and majestic natural structures is truly captivating.</p>
                    <p>The unique appeal of Norway's fjords lies in their untouched beauty and serene atmosphere. It's an ideal destination for those seeking tranquility amidst awe-inspiring landscapes. Combine sailing with hiking to experience the fullest of Norway's natural wonders.</p>
                    <p>Highlights of sailing in Norway's fjords:</p>
                    <ul>
                        <li><strong>Dramatic Landscapes:</strong> Towering cliffs create stunning views.</li>
                        <li><strong>Serene Waters:</strong> Perfect for peaceful sailing excursions.</li>
                        <li><strong>Charming Towns:</strong> Add cultural richness to your adventure.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Tips for Planning Your Yacht Charter Adventure',
            answer: (
                <>
                    <p>Embarking on a yacht charter adventure requires careful planning. Consider the season as weather can greatly impact your experience. Research the best time of year for your chosen destination.</p>
                    <p>Understanding local regulations is crucial when sailing internationally. Each location might have unique requirements for sailors. Ensure that your documentation is in order well in advance.</p>
                    <p>Budgeting properly helps ensure a smooth journey. Factor in costs beyond the charter itself, such as mooring fees and provisions. Planning your route in advance can save time and enhance your adventure.</p>
                    <p>Key planning tips:</p>
                    <ul>
                        <li><strong>Choose the Right Season:</strong> Align with optimal weather.</li>
                        <li><strong>Understand Local Regulations:</strong> Prepare documentation.</li>
                        <li><strong>Plan Your Budget:</strong> Consider all expenses.</li>
                        <li><strong>Match Destination to Experience:</strong> Research the best places to charter a yacht for your skill level.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Conclusion: Choosing Your Dream Sailing Destination',
            answer: (
                <>
                    <p>Choosing the perfect sailing destination depends on your preferences and style of adventure. Whether seeking luxury or exotic wildlife, there's a destination for every sailor's dream.</p>
                    <p>Consider what draws you to the sea—serene beaches, thrilling marine life, or historical coastal towns. Each destination offers unique experiences. With thoughtful planning, your sailing journey will be unforgettable and full of discovery. Deciding between the top yacht charter destinations worldwide ensures an incredible nautical adventure tailored just for you. Happy sailing!</p>
                </>
            )
        },
        {
            question: "I'm a first-time sailor—which destinations are most beginner-friendly?",
            answer: (
                <>
                    <p>The British Virgin Islands in the Caribbean are ideal, thanks to calm waters and short island hops. Greece's Ionian Islands are also great for relaxed sailing, with gentle conditions and lush, sheltered scenery.</p>
                </>
            )
        },
        {
            question: 'How do the Caribbean and the Mediterranean differ as sailing experiences?',
            answer: (
                <>
                    <p>The Caribbean emphasizes turquoise waters, hidden coves, and flexible routes from lively ports to secluded anchorages. The Mediterranean blends sailing with rich culture and history—think ancient port cities, dramatic coasts, vibrant local markets, and standout cuisine.</p>
                </>
            )
        },
        {
            question: 'Which destinations are best for wildlife and underwater exploration?',
            answer: (
                <>
                    <p>The Galápagos offer rare wildlife and pristine environments. Seychelles feature giant tortoises and vibrant reefs. Thailand's Andaman Sea (including the Similan and Phi Phi Islands) is great for snorkeling and marine life, and Australia's Whitsundays sit beside the Great Barrier Reef for unforgettable diving.</p>
                </>
            )
        },
        {
            question: 'When is the best season to sail these places?',
            answer: (
                <>
                    <p>It varies by destination—seasonality can shape wind, sea state, and crowds, so research timing before you book. One notable exception is Seychelles, which the guide highlights as suitable for year-round yachting.</p>
                </>
            )
        },
        {
            question: 'What should I plan for before booking a yacht charter?',
            answer: (
                <>
                    <p>Align your destination with your experience level, pick the right season, understand local regulations and required documents, set a full-trip budget (charter, mooring fees, provisions), and map a route that balances must-see highlights with safe, comfortable passages.</p>
                </>
            )
        }
    ]

    const slySchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-luxury-yacht-guide",
                "name": "Scenic Luxury Yacht Guide",
                "url": "https://www.tripsandships.com/scenic-luxury-yacht-guide",
                "description": "Complete guide to Scenic Luxury Yachts including Scenic Eclipse, Scenic Eclipse II, destinations, suites, dining, expedition experiences, and expert cruise planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-luxury-yacht-guide#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, and personalized travel planning."
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
                "@id": "https://www.tripsandships.com/scenic-luxury-yacht-guide#article",
                "headline": "Scenic Luxury Yacht Guide",
                "url": "https://www.tripsandships.com/scenic-luxury-yacht-guide",
                "description": "Expert guide to Scenic Eclipse luxury yacht cruises including ships, suites, dining, expedition experiences, destinations, pricing, and all-inclusive luxury.",
                "image": "https://www.tripsandships.com/images/scenic-luxury-yacht-guide.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-luxury-yacht-guide" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Scenic cruise planning and comparison services helping travelers choose the ideal Scenic itinerary, suite, and destination."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Luxury Yacht Guide", "item": "https://www.tripsandships.com/scenic-luxury-yacht-guide" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "The Caribbean: Paradise for Yacht Charters", "acceptedAnswer": { "@type": "Answer", "text": "The Caribbean is a sailing paradise with turquoise waters, diverse islands, and destinations like the British Virgin Islands, Antigua and Barbuda, and Saint Lucia offering calm waters, beautiful beaches, and vibrant culture." } },
                    { "@type": "Question", "name": "The Mediterranean: Culture, History, and Coastlines", "acceptedAnswer": { "@type": "Answer", "text": "The Mediterranean blends sailing with rich culture, history, and cuisine, with highlights including Greece, Italy's Amalfi Coast, and Turkey's Turquoise Coast offering ancient ruins and stunning coastlines." } },
                    { "@type": "Question", "name": "Greece -- Cyclades and Ionian Islands", "acceptedAnswer": { "@type": "Answer", "text": "Greece offers world-class sailing with iconic Cyclades islands like Santorini and Mykonos, and lush Ionian islands like Corfu, each offering unique beauty and cultural experiences." } },
                    { "@type": "Question", "name": "Croatia -- Dalmatian Coast", "acceptedAnswer": { "@type": "Answer", "text": "Croatia's Dalmatian Coast features medieval towns, clear Adriatic waters, and highlights like Dubrovnik, Split, and Hvar offering historic architecture and natural beauty." } },
                    { "@type": "Question", "name": "French Riviera, France", "acceptedAnswer": { "@type": "Answer", "text": "The French Riviera combines luxury, sophistication, and beautiful coastlines with iconic destinations like Nice, Cannes, and Monaco offering cultural events and upscale amenities." } },
                    { "@type": "Question", "name": "Thailand -- Andaman Sea", "acceptedAnswer": { "@type": "Answer", "text": "Thailand's Andaman Sea offers turquoise waters, limestone cliffs, and islands like Phang Nga Bay, Phi Phi Islands, and Similan Islands with excellent snorkeling and marine life." } },
                    { "@type": "Question", "name": "Whitsunday Islands, Australia", "acceptedAnswer": { "@type": "Answer", "text": "The Whitsunday Islands near the Great Barrier Reef offer world-famous Whitehaven Beach, incredible diving, and 74 islands with pristine silica sand and marine biodiversity." } },
                    { "@type": "Question", "name": "Seychelles, Indian Ocean", "acceptedAnswer": { "@type": "Answer", "text": "The Seychelles archipelago features secluded beaches, unique wildlife including giant tortoises, vibrant coral reefs, and year-round warm climate perfect for yachting." } },
                    { "@type": "Question", "name": "Galapagos Islands, Ecuador", "acceptedAnswer": { "@type": "Answer", "text": "The Galapagos Islands offer unparalleled wildlife encounters, pristine environments, and rich marine life for snorkeling and diving with species found nowhere else on Earth." } },
                    { "@type": "Question", "name": "Norway's Fjords", "acceptedAnswer": { "@type": "Answer", "text": "Norway's fjords offer dramatic landscapes, towering cliffs, serene waters, and charming coastal towns creating an enchanting environment perfect for sailing and exploration." } },
                    { "@type": "Question", "name": "Tips for Planning Your Yacht Charter Adventure", "acceptedAnswer": { "@type": "Answer", "text": "Planning a yacht charter requires choosing the right season, understanding local regulations, budgeting for all expenses including mooring fees and provisions, and matching destinations to your experience level." } },
                    { "@type": "Question", "name": "Conclusion: Choosing Your Dream Sailing Destination", "acceptedAnswer": { "@type": "Answer", "text": "Choosing the perfect sailing destination depends on your preferences for luxury, wildlife, culture, or adventure. Each destination offers unique experiences for an unforgettable nautical adventure." } },
                    { "@type": "Question", "name": "I'm a first-time sailor - which destinations are most beginner-friendly?", "acceptedAnswer": { "@type": "Answer", "text": "The British Virgin Islands in the Caribbean are ideal, thanks to calm waters and short island hops. Greece's Ionian Islands are also great for relaxed sailing, with gentle conditions and lush, sheltered scenery." } },
                    { "@type": "Question", "name": "How do the Caribbean and the Mediterranean differ as sailing experiences?", "acceptedAnswer": { "@type": "Answer", "text": "The Caribbean emphasizes turquoise waters, hidden coves, and flexible routes from lively ports to secluded anchorages. The Mediterranean blends sailing with rich culture and history, ancient port cities, vibrant local markets, and standout cuisine." } },
                    { "@type": "Question", "name": "Which destinations are best for wildlife and underwater exploration?", "acceptedAnswer": { "@type": "Answer", "text": "The Galapagos offer rare wildlife and pristine environments. Seychelles feature giant tortoises and vibrant reefs. Thailand's Andaman Sea is great for snorkeling, and Australia's Whitsundays sit beside the Great Barrier Reef for unforgettable diving." } },
                    { "@type": "Question", "name": "When is the best season to sail these places?", "acceptedAnswer": { "@type": "Answer", "text": "It varies by destination as seasonality shapes wind, sea state, and crowds. One notable exception is Seychelles, which is suitable for year-round yachting." } },
                    { "@type": "Question", "name": "What should I plan for before booking a yacht charter?", "acceptedAnswer": { "@type": "Answer", "text": "Align your destination with your experience level, pick the right season, understand local regulations and required documents, set a full-trip budget, and map a safe route." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Top 10 Sailing Destinations: Unforgettable Yacht Charters</title>
                <meta name="title" content="Top 10 Sailing Destinations: Unforgettable Yacht Charters" />
                <meta
                    name="description"
                    content="Explore the world's top 10 must-visit sailing destinations, from the Caribbean's hidden coves to the Mediterranean's historic shores. Your adventure awaits!"
                />
                <meta name="keywords" content="Top 10 Sailing Destinations, Sailing Destinations, Yacht Charters, Caribbean Yacht Charter, Mediterranean Sailing, Luxury Sailing, Best Sailing Destinations, Yacht Charter Guide" />
                <script type="application/ld+json">
                    {JSON.stringify(slySchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="sly-page-wrapper">

                {/* HERO SECTION */}
                <section className="sly-hero-section">
                    <div
                        className="sly-hero-slide"
                        style={{ backgroundImage: `url(https://placehold.co/1920x1080/0f1c2e/ffffff?text=Scenic+Eclipse)` }}
                    />
                    <div className="sly-hero-overlay"></div>
                    <div className="sly-hero-content">
                        <div className="sly-hero-tag">
                            <Sparkles size={16} />
                            <span>Scenic Eclipse Cruises & Luxury Expeditions</span>
                        </div>
                        <h1 className="sly-hero-title">Scenic Luxury Yacht Guide</h1>
                        <p className="sly-hero-subtitle">
                            Discover Scenic Eclipse — The World's First Discovery Yachts
                        </p>
                        <div className="sly-hero-btn-row">
                            <Link to="/contact" className="sly-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="sly-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="sly-intro-section">
                    <div className="sly-intro-container">
                        <div className="sly-intro-grid">
                            <div className="sly-intro-copy">
                                <span className="sly-eyebrow-label">THE WORLD'S FIRST DISCOVERY YACHTS</span>
                                <h2 className="sly-section-heading">Discover Scenic Eclipse — The World's First Discovery Yachts</h2>
                                <div className="sly-heading-bar"></div>
                                <p className="sly-lead-paragraph">
                                    Scenic has redefined luxury cruising with the introduction of Scenic Eclipse and Scenic Eclipse II, combining the elegance of a six-star luxury yacht with the capabilities of a true expedition vessel.
                                </p>
                                <p className="sly-lead-paragraph">
                                    Unlike traditional cruise ships, Scenic's Discovery Yachts are purpose-built to reach remote destinations while offering all-inclusive luxury, world-class dining, spacious suites, and unforgettable adventures.
                                </p>
                                <p className="sly-lead-paragraph">
                                    Whether you're dreaming of Antarctica, the Arctic, the Mediterranean, the South Pacific, or the Norwegian Fjords, Scenic delivers an experience where exploration and luxury exist in perfect harmony.
                                </p>
                            </div>
                            <div className="sly-intro-image-frame">
                                <img src="https://placehold.co/700x900/274472/ffffff?text=Scenic+Eclipse" alt="Scenic Eclipse luxury discovery yacht" />
                                <div className="sly-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Six-Star Expedition Luxury</span>
                                </div>
                            </div>
                            <div className="sly-intro-highlight-box">
                                <span className="sly-intro-quote-icon">"</span>
                                <div className="sly-intro-quote-content">
                                    This guide will help you understand everything Scenic offers and determine whether a Scenic luxury yacht is the right choice for your next journey.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE SCENIC */}
                <section className="sly-why-section">
                    <div className="sly-why-container">
                        <div className="sly-why-header">
                            <h2 className="sly-section-heading">Why Choose Scenic?</h2>
                                                        <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-lead-paragraph">Scenic appeals to travelers who want both adventure and uncompromising luxury.</p>

                            <p className="sly-lead-paragraph">Guests enjoy:</p>
                        </div>
                        <div className="sly-why-grid">
                            {slyWhyChoose.map((item, idx) => {
                                const SlyIcon = item.icon
                                return (
                                    <div key={idx} className="sly-why-card">
                                        <div className="sly-why-icon-ring">
                                            <SlyIcon size={22} />
                                        </div>
                                        <p className="sly-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sly-why-footnote">
                            Every voyage is designed to eliminate hidden costs while maximizing unforgettable experiences.
                        </p>
                    </div>
                </section>

                {/* MID-PAGE CTA BANNER */}
                <section className="sly-midcta-section">
                    <div className="sly-midcta-container">
                        <p className="sly-midcta-text">Ready to experience true all-inclusive luxury expedition cruising?</p>
                        <Link to="/contact" className="sly-btn-primary">
                            <Phone size={18} />
                            Plan My Scenic Voyage
                        </Link>
                    </div>
                </section>

                {/* MEET THE SCENIC DISCOVERY YACHTS — SCENIC ECLIPSE */}
                <section className="sly-yacht-section">
                    <div className="sly-yacht-container">
                        <div className="sly-yacht-grid">
                            <div className="sly-yacht-media-cell">
                                <div className="sly-yacht-media">
                                    <img src="https://placehold.co/800x900/1c2f4a/ffffff?text=Scenic+Eclipse+2019" alt="Scenic Eclipse discovery yacht launched 2019" />
                                    <div className="sly-yacht-badge">Meet The Scenic Discovery Yachts</div>
                                </div>
                            </div>
                            <div className="sly-yacht-copy">
                                <h2 className="sly-section-heading">
                                 
                                    Scenic Eclipse
                                </h2>
                                <p className="sly-lead-paragraph">Launched in 2019, Scenic Eclipse introduced a completely new category of luxury cruising.</p>
                                <p className="sly-yacht-intro">Highlights include:</p>
                                <ul className="sly-yacht-list">
                                    {slyEclipseHighlights.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className="sly-yacht-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SCENIC ECLIPSE II */}
                <section className="sly-eclipse2-section">
                    <div className="sly-eclipse2-container">
                        <h2 className="sly-eclipse2-title">Scenic Eclipse II</h2>
                        <p className="sly-eclipse2-text">
                            Scenic Eclipse II builds upon the success of the original Discovery Yacht while offering refined public spaces, expanded wellness facilities, and even more immersive expedition experiences.
                        </p>
                        <p className="sly-eclipse2-text">
                            Guests enjoy the same six-star service with enhanced comfort and innovation.
                        </p>
                    </div>
                </section>

                {/* LUXURY SUITES */}
                <section className="sly-suites-section">
                    <div className="sly-suites-container">
                        <div className="sly-suites-grid">
                            <div className="sly-suites-copy">
                                <h2 className="sly-section-heading">
                                    Luxury Suites
                                </h2>
                                <p className="sly-lead-paragraph">Every accommodation aboard Scenic Eclipse features:</p>
                                <div className="sly-heading-bar"></div>
                                <div className="sly-suites-features-grid">
                                    {slySuiteFeatures.map((feature, idx) => (
                                        <div key={idx} className="sly-suites-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="sly-lead-paragraph sly-suites-note">
                                    Suite categories range from Deluxe Veranda Suites to the spectacular Two-Bedroom Owner's Penthouse Suite.
                                </p>
                            </div>
                            <div className="sly-suites-gallery">
                                <img src="https://placehold.co/500x400/274472/ffffff?text=Veranda+Suite" alt="Scenic Eclipse veranda suite with private balcony" />
                                <img src="https://placehold.co/500x400/1c2f4a/ffffff?text=Marble+Bathroom" alt="Spacious marble bathroom in a Scenic Eclipse suite" />
                                <img src="https://placehold.co/500x400/0f1c2e/ffffff?text=Owner%27s+Penthouse" alt="Two-Bedroom Owner's Penthouse Suite aboard Scenic Eclipse" />
                                <img src="https://placehold.co/500x400/274472/ffffff?text=In-Suite+Dining" alt="Personalized in-suite dining aboard Scenic Eclipse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD */}
                <section className="sly-dining-section">
                    <div className="sly-dining-container">
                        <h2 className="sly-section-heading">
                            Dining Onboard
                        </h2>
                        <div className="sly-heading-bar sly-bar-center"></div>
                        <p className="sly-lead-paragraph">Scenic offers one of the most impressive culinary programs at sea.</p>
                        <p className="sly-lead-paragraph">Dining venues may include:</p>
                        <div className="sly-dining-pills-wrap">
                            {slyDiningVenues.map((venue, idx) => (
                                <span key={idx} className="sly-dining-pill">{venue}</span>
                            ))}
                        </div>
                        <p className="sly-lead-paragraph sly-dining-footnote">
                            Menus emphasize regional ingredients and international cuisine.
                        </p>
                    </div>
                </section>

                {/* WELLNESS & SPA */}
                <section className="sly-wellness-section">
                    <div className="sly-wellness-container">
                        <div className="sly-wellness-header">
                            <h2 className="sly-wellness-title">Wellness & Spa</h2>
                                                        <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-wellness-intro">Scenic Eclipse offers a destination-inspired wellness experience.</p>

                            <p className="sly-wellness-intro">Facilities include:</p>
                        </div>

                        <div className="sly-wellness-grid">
                            {slyWellnessFacilities.map((item, idx) => (
                                <div key={idx} className="sly-wellness-card">
                                    <div className="sly-wellness-card-number">
                                        <span>{idx + 1}</span>
                                    </div>
                                    <h4 className="sly-wellness-card-text">{item}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="sly-wellness-footnote-wrapper">
                            <div className="sly-wellness-footnote">
                                <Sparkles size={16} className="sly-footnote-sparkle" />
                                <span>Guests can enjoy wellness treatments while sailing through some of the world's most spectacular scenery.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPEDITION EXPERIENCES */}
                <section className="sly-expedition-section">
                    <div className="sly-expedition-container">
                        <div className="sly-expedition-header">
                            <h2 className="sly-expedition-title">Expedition Experiences</h2>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-expedition-intro">Scenic's Discovery Team leads immersive adventures ashore.</p>
                            <p className="sly-expedition-intro">Depending on your itinerary, experiences may include:</p>
                        </div>

                        <div className="sly-expedition-board">
                            {slyExpeditionExperiences.map((item, idx) => {
                                const angles = [-3, 2, -1.5, 3, -2, 1.5, -3, 2, -1.5]
                                const angle = angles[idx % angles.length]
                                return (
                                    <div key={idx} className="sly-expedition-polaroid" style={{ transform: `rotate(${angle}deg)` }}>
                                        <div className="sly-expedition-polaroid-tape"></div>
                                        <div className="sly-expedition-polaroid-inner">
                                            <div className="sly-expedition-polaroid-badge">
                                                <Camera size={16} />
                                            </div>
                                            <h4 className="sly-expedition-polaroid-text">{item}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="sly-expedition-footer">
                            <div className="sly-expedition-footnote">
                                <Sparkles size={16} className="sly-footnote-sparkle" />
                                <span>On select itineraries, guests can also enjoy helicopter sightseeing and submarine dives.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="sly-dest-section">
                    <div className="sly-dest-container">
                        <div className="sly-dest-header">
                            <h2 className="sly-expedition-title">Destinations</h2>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-dest-intro">Scenic Luxury Yachts explore destinations around the globe.</p>
                            <p className="sly-dest-intro">Popular itineraries include:</p>
                        </div>
                        <div className="sly-dest-grid">
                            {slyDestinations.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="sly-dest-card" style={{ backgroundImage: `url(${dest.img})` }}>
                                        <div className="sly-dest-card-overlay"></div>
                                        <div className="sly-dest-card-content">
                                            <div className="sly-dest-icon-wrap">
                                                <DestIcon size={22} />
                                            </div>
                                            <h4 className="sly-dest-card-name">{dest.name}</h4>
                                            <p className="sly-dest-card-text">{dest.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS CTA BANNER */}
                <section className="sly-destcta-section">
                    <div className="sly-destcta-inner">
                        <p className="sly-destcta-text">Dreaming of Antarctica, the Arctic, or the Mediterranean aboard Scenic Eclipse?</p>
                        <button className="sly-btn-outline">
                            <Calendar size={18} />
                            Check Sailing Dates & Pricing
                        </button>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="sly-included-section">
                    <div className="sly-included-container">
                        <h2 className="sly-expedition-title">What's Included?</h2>
                        <div className="sly-heading-bar sly-bar-center"></div>
                        <p className="sly-lead-paragraph">Scenic is known for exceptional value through comprehensive inclusions.</p>
                        <p className="sly-lead-paragraph">Most voyages include:</p>
                        <div className="sly-included-grid">
                            {slyIncluded.map((item, idx) => (
                                <div key={idx} className="sly-included-item">
                                    <CheckCircle size={18} className="sly-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="sly-lead-paragraph sly-included-note">
                            Some premium experiences such as helicopter flights or submarine dives may carry an additional fee depending on the itinerary.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CRUISE WITH SCENIC */}
                <section className="sly-who-section">
                    <div className="sly-who-container">
                        <div className="sly-who-grid">
                            <div className="sly-who-copy">
                                <h2 className="sly-expedition-title">
                                    Who Should Cruise with Scenic?
                                </h2>
                                <div className="sly-heading-bar"></div>
                                <div className="sly-who-cards">
                                    {slyWhoShouldCruise.map((item, idx) => (
                                        <div key={idx} className="sly-who-card">
                                            <div className="sly-who-card-badge">{idx + 1}</div>
                                            <span className="sly-who-card-title">{item}</span>
                                            <div className="sly-who-card-arrow">
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sly-who-footnote">
                                    <span>Travelers who enjoy both exploration and refined luxury often consider Scenic among the very best expedition cruise lines in the world.</span>
                                </div>
                            </div>
                            <div className="sly-who-media">
                                <img src="https://placehold.co/700x800/274472/ffffff?text=Couples+%26+Explorers" alt="Travelers enjoying a luxury expedition cruise with Scenic" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL */}
                <section className="sly-why-us-section">
                    <div className="sly-why-us-container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span className="sly-eyebrow-label">TRUSTED SCENIC CRUISE SPECIALISTS</span>
                            <h2 className="sly-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Choosing the right Scenic itinerary involves much more than selecting a destination. Our advisors help you:
                            </p>
                        </div>
                        <div className="sly-why-us-grid">
                            {slyWhyBookUs.map((item, idx) => {
                                const SlyIcon = item.icon
                                return (
                                    <div key={idx} className="sly-why-us-card">
                                        <div className="sly-why-us-icon">
                                            <SlyIcon size={20} />
                                        </div>
                                        <p className="sly-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sly-why-us-footnote">
                            Our goal is to ensure every Scenic voyage exceeds your expectations.
                        </p>
                        <div className="sly-why-us-cta-wrap">
                            <Link to="/contact" className="sly-btn-primary">
                                <Phone size={18} />
                                Speak with a Scenic Specialist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* RELATED SCENIC GUIDES */}
                <section className="sly-related-section">
                    <div className="sly-related-container">
                        <span className="sly-eyebrow-label">Related Scenic Guides</span>
                        <h2 className="sly-section-heading">Continue your research with our expert Scenic resources:</h2>
                        <div className="sly-heading-bar sly-bar-center"></div>
                        <div className="sly-related-grid">
                            {slyRelatedGuides.map((guide, idx) => (
                                <div key={idx} className="sly-related-card">
                                    <Compass size={18} className="sly-related-card-icon" />
                                    <span className="sly-related-card-text">{guide}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* EXPERT INSIGHT */}
                <section id="explora-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            {/* Left Side: Portrait and Floating Stat Badge */}
                            <div className="medi-editorial-portrait-block">
                                <div className="medi-editorial-image-frame">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
                                    <div className="medi-editorial-gradient-layer"></div>
                                </div>

                                <div className="medi-editorial-floating-stat">
                                    <div className="medi-stat-tile">
                                        <span className="medi-stat-number">40+</span>
                                        <span className="medi-stat-label">Years Experience</span>
                                    </div>
                                    <div className="medi-stat-divider"></div>
                                    <div className="medi-stat-tile">
                                        <span className="medi-stat-number">121+</span>
                                        <span className="medi-stat-label">Countries Visited</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Editorial Text */}
                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <Award size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Modern Luxury Travelers <br className="medi-growth-title-break" />Are Choosing Scenic
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Scenic travelers prioritizing:
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Polar discovery yachting',
                                            'Truly all-inclusive luxury',
                                            'Butler service for every suite',
                                            'Helicopter & submarine features',
                                            'Up to 10 dining experiences',
                                            'Immersive Zodiac excursions'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CheckCircle size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="medi-editorial-body-para">
                                    As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                                </p>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            { title: 'Ultra-luxury yachting', icon: Ship },
                                            { title: 'Polar expeditions', icon: Mountain },
                                            { title: 'Butler services', icon: Users },
                                            { title: 'Luxury cruise planning', icon: Compass },
                                            { title: 'Custom expedition travel', icon: Sparkles }
                                        ].map((item, idx) => {
                                            const IconComponent = item.icon
                                            return (
                                                <div key={idx} className="medi-expertise-pills-row">
                                                    <div className="medi-expertise-pill-icon-box">
                                                        <IconComponent size={14} />
                                                    </div>
                                                    <span className="medi-expertise-pill-text">{item.title}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* FAQ SECTION */}
                <section className="sly-faq-section">
                    <div className="sly-faq-container">
                        <h1 className="sly-faq-main-title">Top 10 Must-Visit Sailing Destinations Worldwide</h1>

                        <div className="sly-faq-intro">
                            <p>Sailing offers a unique way to explore the world. It combines adventure with relaxation, allowing you to discover hidden gems.</p>
                            <p>Imagine gliding over crystal-clear waters, surrounded by breathtaking landscapes. Each destination offers its own charm and allure.</p>
                            <p>From the vibrant culture of the Mediterranean to the tranquil beauty of the Seychelles, the options are endless.</p>
                            <p>Whether you're a seasoned sailor or a curious traveler, there's a perfect spot waiting for you.</p>
                            <p>Join us as we explore the top 10 must-visit sailing destinations worldwide. Your next adventure awaits on the horizon, with many of these picks also ranking among the best yacht charter destinations.</p>
                        </div>

                        <div className="sly-faq-list">
                            {slyFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="sly-faq-item"
                                    onClick={() => slyToggleFaq(index)}
                                >
                                    <div className="sly-faq-question-row">
                                        <h2 className="sly-faq-q-title">{faq.question}</h2>
                                        <span className="sly-faq-toggle-icon">
                                            {slyActiveFaq === index ? "\u2212" : "+"}
                                        </span>
                                    </div>
                                    {slyActiveFaq === index && (
                                        <div className="sly-faq-answer-content">{faq.answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="sly-cta-section">
                    <div className="sly-cta-bg-pattern"></div>
                    <div className="sly-cta-inner">
                        <h2 className="sly-cta-heading">Ready to Sail Aboard Scenic Eclipse?</h2>
                        <div className="sly-cta-separator"></div>
                        <p className="sly-cta-text">
                            From Antarctica to the Mediterranean, let our expert advisors help you choose the perfect Scenic voyage, suite, and season for an unforgettable six-star expedition.
                        </p>
                        <div className="sly-cta-btn-row">
                            <Link to="/contact" className="sly-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="sly-btn-outline">
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

export default ScenicLuxuryYachtGuide