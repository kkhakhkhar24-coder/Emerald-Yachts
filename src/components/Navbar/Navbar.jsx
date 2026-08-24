import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setHomeDropdownOpen(!homeDropdownOpen);
  };

  useEffect(() => {
    // Scroll active link in any dropdown menu into view when pathname/menu states change
    requestAnimationFrame(() => {
      const activeLinks = document.querySelectorAll(
        ".nav-dropdown-menu a.active, .mobile-dropdown-menu a.active"
      );
      activeLinks.forEach((activeLink) => {
        const parent = activeLink.closest(
          ".nav-dropdown-menu, .mobile-dropdown-menu"
        );
        if (parent && parent.scrollHeight > parent.clientHeight) {
          const targetScrollTop =
            activeLink.offsetTop -
            parent.offsetTop -
            parent.clientHeight / 2 +
            activeLink.clientHeight / 2;
          parent.scrollTop = Math.max(0, targetScrollTop);
        }
      });
    });
  }, [pathname, menuOpen, homeDropdownOpen]);

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        TRIPS & SHIPS
      </div>

      <div className="nav-links">
        <div className="nav-dropdown-wrapper">
          <Link to="/" className="nav-dropdown-trigger">
            HOME <i className="fas fa-angle-down"></i>
          </Link>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-group">
              <span className="nav-dropdown-title">ANTARCTICA</span>
              <NavLink to="/emerald-yachts">Emerald Yachts</NavLink>
              <NavLink to="/antarctica-cruise-cost">
                Antarctica Cruise Cost
              </NavLink>
              <NavLink to="/scenic-antarctica-cruise">
                Scenic Antarctica Cruises
              </NavLink>
              <NavLink to="/scenic-vs-silversea-antarctica">
                Scenic vs Silversea Antarctica
              </NavLink>
              <NavLink to="/ScenicvsEmeraldYachts">
                Scenic vs Emerald Yachts
              </NavLink>
              <NavLink to="/DrakePassagePage">The Drake Passage</NavLink>
              <NavLink to="/luxury-travel" className="nav-dropdown-single">
                Luxury Travel
              </NavLink>
              <NavLink
                to="/scenic-vs-four-seasons-yachts"
                className="nav-dropdown-single"
              >
                Scenic vs Four Seasons Yachts
              </NavLink>
              <NavLink
                to="/emerald-azzurra-vs-emerald-sakara"
                className="nav-dropdown-single"
              >
                Emerald Azzurra vs Emerald Sakara
              </NavLink>
              <NavLink
                to="/emerald-yachts-vs-ritz-carlton-yacht-collection"
                className="nav-dropdown-single"
              >
                Emerald Yachts vs Ritz-Carlton Yacht Collection
              </NavLink>
              <NavLink
                to="/luxury-yacht-cruises"
                className="nav-dropdown-single"
              >
                Luxury Yacht Cruises
              </NavLink>
              <NavLink
                to="/riverside-luxury-cruises"
                className="nav-dropdown-single"
              >
                Riverside Luxury Cruises
              </NavLink>
              <NavLink
                to="/riverside-vs-viking-river-cruises"
                className="nav-dropdown-single"
              >
                Riverside vs Viking River Cruises
              </NavLink>

              <NavLink
                to="/riverside-vs-amawaterways"
                className="nav-dropdown-single"
              >
                Riverside vs AmaWaterways
              </NavLink>

              <NavLink
                to="/distinctive-voyage-sailings"
                className="nav-dropdown-single"
              >
                Distinctive Voyage Sailings
              </NavLink>

              <NavLink
                to="/luxury-travel-to-japan"
                className="nav-dropdown-single"
              >
                Luxury travel to Japan
              </NavLink>

              <NavLink to="/trip-to-japan" className="nav-dropdown-single">
                Trip To Japan
              </NavLink>

              <NavLink
                to="/first-time-japan-itinerary"
                className="nav-dropdown-single"
              >
                First Time Japan Itinerary
              </NavLink>

              <NavLink
                to="/japan-travel-cost"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Japan Travel Cost
              </NavLink>

              <NavLink
                to="/best-time-to-visit-japan"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Time to Visit Japan
              </NavLink>

              <NavLink
                to="/japan-land-vs-cruise"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Japan Land vs Cruise
              </NavLink>

              <NavLink
                to="/azamara-cruises-guide-2026-2027"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Cruises Guide 2026-2027
              </NavLink>

              <NavLink
                to="/azamara-vs-viking-ocean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Vs Viking Ocean Cruises
              </NavLink>

              <NavLink
                to="/azamara-cabins-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Cabins Guide
              </NavLink>

              <NavLink
                to="/azamara-alaska-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Alaska Cruises
              </NavLink>

              <NavLink
                to="/azamara-cabins-alaska-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Cabins Alaska Guide
              </NavLink>

              <NavLink
                to="/world-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                World Cruises
              </NavLink>

              <NavLink
                to="/world-cruise-cost"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                World Cruise Cost
              </NavLink>

              <NavLink
                to="/regent-seven-seas-world-cruise-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Regent Seven Seas World Cruise Guide
              </NavLink>

              <NavLink
                to="/luxury-kenya-safari-micato"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Kenya Safari Micato
              </NavLink>

              <NavLink
                to="/kenya-vs-tanzania-safari"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Kenya Vs Tanzania Safari
              </NavLink>

              <NavLink
                to="/best-time-great-migration-safari"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Time Great Migration Safari
              </NavLink>

              <NavLink
                to="/luxury-kenya-safari"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Kenya Safari
              </NavLink>

              <NavLink
                to="/luxury-african-safari-cost"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury African Safari Cost
              </NavLink>
              <NavLink
                to="/best-african-safari-for-first-timers"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best African Safari for First-Timers
              </NavLink>

              <NavLink
                to="/best-country-for-luxury-safari-in-africa/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Safari in Africa</NavLink>

              <NavLink
                to="/best-african-safari-for-families/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best African Safari for Families</NavLink>

              <NavLink
                to="/azamara-mediterranean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Mediterranean Cruises</NavLink>

              <NavLink
                to="/azamara-greece-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Greece Cruises</NavLink>

              <NavLink
                to="/azamara-japan-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Japan Cruises</NavLink>


              <NavLink
                to="/azamara-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Worth It</NavLink>

              <NavLink
                to="/azamara-cabins-guide-2026"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Cabins Guide 2026</NavLink>

              <NavLink
                to="/best-cabins-on-azamara"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Cabins on Azamara</NavLink>

              <NavLink
                to="/best-explora-cruises-for-first-time-luxury-travelers"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Explora Cruises for First-Time Luxury Travelers</NavLink>

              <NavLink
                to="/best-suites-on-explora-journeys"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Suites on Explora Journeys</NavLink>

              <NavLink
                to="/should-you-book-explora-through-a-travel-advisor"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Should You Book Explora Through a Travel Advisor?</NavLink>

              <NavLink
                to="/explora-faq-before-booking"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora FAQ Before Booking</NavLink>

              <NavLink
                to="/explora-journeys-vs-silversea"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Journeys Vs Silversea</NavLink>

              <NavLink
                to="/hx-expeditions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions Cruises</NavLink>

              <NavLink
                to="/hx-expeditions-antarctica-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions Antarctica Cruises</NavLink>

              <NavLink
                to="/hx-expeditions-svalbard-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions Svalbard Cruises</NavLink>

              <NavLink
                to="/hx-expeditions-greenland-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions Greenland Cruises</NavLink>

              <NavLink
                to="/hx-expeditions-galapagos-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions Galapagos Cruises</NavLink>

              <NavLink
                to="/hx-expeditions-vs-viking-expeditions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions vs Viking Expeditions</NavLink>

              <NavLink
                to="/hx-expeditions-vs-silversea-expeditions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions vs Silversea Expeditions</NavLink>

              <NavLink
                to="/best-hx-expeditions-cruises-for-first-timers"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best HX Expeditions Cruises for First-Timers</NavLink>

              <NavLink
                to="/hx-expeditions-ships"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                HX Expeditions Ships</NavLink>

              <NavLink
                to="/disney-cruise-for-adults-without-kids"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise for Adults Without Kids</NavLink>

              <NavLink
                to="/what-luxury-travelers-get-wrong-about-disney-cruise-line"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What Luxury Travelers Get Wrong About Disney Cruise Line</NavLink>

              <NavLink
                to="/is-disney-cruise-line-worth-the-money"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Disney Cruise Line Worth the Money</NavLink>

              <NavLink
                to="/disney-cruise-vs-royal-caribbean"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise vs Royal Caribbean
              </NavLink>

              <NavLink
                to="/is-disney-concierge-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Disney Concierge Worth It?
              </NavLink>

              <NavLink
                to="/best-disney-cruise-ship-for-adults"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Disney Cruise Ship for Adults
              </NavLink>

              <NavLink
                to="/disney-cruise-vs-celebrity-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise vs Celebrity Cruises
              </NavLink>

              <NavLink
                to="/disney-wish-vs-disney-treasure"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Wish vs Disney Treasure
              </NavLink>

              <NavLink
                to="/castaway-cay-vs-lookout-cay"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Castaway Cay vs Lookout Cay
              </NavLink>

              <NavLink
                to="/disney-concierge-benefits-explained"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Concierge Benefits Explained
              </NavLink>

              <NavLink
                to="/disney-cruise-dining-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise Dining Guide
              </NavLink>

              <NavLink
                to="/best-disney-cruise-cabins"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Disney Cruise Cabins
              </NavLink>

              <NavLink
                to="/disney-cruise-booking-timeline"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise Booking Timeline
              </NavLink>

              <NavLink
                to="/disney-cruise-packing-list"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise Packing List
              </NavLink>

              <NavLink
                to="/viking-rhine-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Rhine River Cruises
              </NavLink>

              <NavLink
                to="/viking-christmas-market-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Christmas Market Cruises
              </NavLink>


              <NavLink
                to="/viking-mediterranean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Mediterranean Cruises
              </NavLink>

              <NavLink
                to="/viking-alaska-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Alaska Cruises
              </NavLink>

              <NavLink
                to="/viking-iceland-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Iceland Cruises
              </NavLink>

              <NavLink
                to="/viking-vs-amawaterways"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking vs AmaWaterways
              </NavLink>

              <NavLink
                to="/viking-vs-tauck"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking vs Tauck
              </NavLink>

              <NavLink
                to="/viking-vs-scenic"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking vs Scenic
              </NavLink>

              <NavLink
                to="/viking-vs-uniworld"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking vs Uniwold
              </NavLink>

              <NavLink
                to="/why-i-resisted-viking-for-years"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why I Resisted Viking for Years
              </NavLink>

              <NavLink
                to="/viking-cruise-resource-center"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Viking Cruise Resource Center
              </NavLink>

              <NavLink
                to="/donor-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Donor River Cruises
              </NavLink>

              <NavLink
                to="/donor-safaris"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Donor safaris
              </NavLink>

              <NavLink
                to="/travel-programs-for-opera-companies"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Travel Programs for Opera Companies
              </NavLink>

              <NavLink
                to="/travel-programs-for-symphony-orchestras"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Travel Programs for Symphony Orchestras
              </NavLink>

              <NavLink
                to="/Travel-Programs-for-Theaters&Performing-Arts-Organizations"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Performing arts travel
              </NavLink>


              <NavLink
                to="/why-travel-increases-donor-engagement-and-fundraising"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why travel donor engagement
              </NavLink>

              <NavLink
                to="/explora-vs-regent"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Regent
              </NavLink>

              <NavLink
                to="/explora-vs-ritz-carlton-yacht-collection
"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Ritzcarlton
              </NavLink>

              <NavLink
                to="/explora-vs-viking"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Viking
              </NavLink>

              <NavLink
                to="/explora-vs-oceania"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Oceania
              </NavLink>

              <NavLink
                to="/explora-vs-scenic"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Scenic
              </NavLink>

              <NavLink
                to="/explora-vs-ponant"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Ponant
              </NavLink>

              <NavLink
                to="/explora-vs-crystal"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Vs Crystal
              </NavLink>

              <NavLink
                to="/private-equity-family-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Private Equity Family Travel</NavLink>

              <NavLink
                to="/family-legacy-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Family Legacy Travel</NavLink>

              <NavLink
                to="/multigenerational-luxury-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Multigenerational Luxury Travel</NavLink>

              <NavLink
                to="/family-office-travel-planning"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Family Office Travel Planning</NavLink>

              <NavLink
                to="/executive-family-retreats"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Executive Family Retreats</NavLink>

              <NavLink
                to="/family-governance-retreats"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Family Governance Retreats</NavLink>

              <NavLink
                to="/luxury-family-celebrations"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Family Celebrations</NavLink>

              <NavLink
                to="/private-jet-concierge-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Private Jet Concierge Travel</NavLink>

              <NavLink
                to="/private-villas-exclusive-resorts"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Private villas & exclusive resorts</NavLink>

              <NavLink
                to="/safaris-expeditions-bucket-list-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Safari & expeditions bucket list travel</NavLink>

              <NavLink
                to="/luxury-wellness-retreats"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Wellness Retreats</NavLink>

              <NavLink
                to="/philanthropic-purpose-driven-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Philanthropic Purpose-Driven Travel</NavLink>

              <NavLink
                to="/luxury-cruises-for-affluent-families"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Cruises For Affluent Families</NavLink>

              <NavLink
                to="/international-family-adventures"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                International Family Adventures</NavLink>


              <NavLink
                to="/business-milestone-liquidity-event-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Business Milestone Liquidity Event Travel</NavLink>

              <NavLink
                to="/privacy-security-travel-planning"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Privacy & security travel planning</NavLink>

              <NavLink
                to="/building-stronger-families-through-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Building stronger families through travel</NavLink>

              <NavLink
                to="/scenic-luxury-yacht-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Luxury Yacht Guide</NavLink>

              <NavLink
                to="/scenic-eclipse-reviews"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Eclipse Reviews</NavLink>

              <NavLink
                to="/scenic-eclipse-ii-reviews"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Eclipse Ii Reviews</NavLink>

              <NavLink
                to="/scenic-vs-ponant"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Vs Ponant</NavLink>

              <NavLink
                to="/scenic-vs-seabourn"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Vs Seabourn</NavLink>

              <NavLink
                to="/what-is-included-on-scenic"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What Is Included On Scenic</NavLink>

              <NavLink
                to="/scenic-mediterranean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Mediterranean Cruises</NavLink>

              <NavLink
                to="/is-scenic-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Scenic Worth It</NavLink>

              <NavLink
                to="/scenic-iceland-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Iceland Cruises</NavLink>

              <NavLink
                to="/scenic-greenland-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Greenland Cruises</NavLink>

              <NavLink
                to="/scenic-food-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Food Review</NavLink>

              <NavLink
                to="/scenic-cabins-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Cabins Guide</NavLink>

              <NavLink
                to="/best-scenic-suites"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Scenic Suites</NavLink>

              <NavLink
                to="/scenic-helicopter-experience"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Helicopter Experience</NavLink>

              <NavLink
                to="/scenic-submarine-experience"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Scenic Submarine Experience</NavLink>

              <NavLink
                to="/best-expedition-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Expedition Cruises</NavLink>

              <NavLink
                to="/best-luxury-expedition-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Luxury Expedition Cruises</NavLink>

              <NavLink
                to="/uniworld-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld River Cruises
              </NavLink>
              <NavLink
                to="/uniworld-river-cruises-review"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld River Cruises Review
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/cruise-and-rail"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Cruise And Rail Journeys
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/rhine"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Rhine River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/whats-included/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What's Included on a Uniworld River Cruise
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/cost-deals/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How Much Does a Uniworld River Cruise Cost?
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/is-uniworld-worth-it/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Uniworld Worth the Money?
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/ships-suites/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Ships &amp; Suites Guide
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/danube"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Danube River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/seine"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Seine River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/rhone-saone"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Rhone Saone River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/bordeaux"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Bordeaux River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/cabin-categories/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Cabin Categories Explained
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/best-cabins/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Uniworld Cabins and Cabins to Avoid
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/best-itineraries/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Best Uniworld River Cruise Itineraries
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/italy-venice"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Italy Venice River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/egypt-nile"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Egypt Nile River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/first-time-guide/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                First-Time Uniworld River Cruise Guide
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/food-dining/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Food and Dining Review
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/dress-code-packing/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Dress Code and Packing Guide
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/airfare-transfers/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Airfare, Airport Transfers and Arrival Guide
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/solo-travel/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Solo River Cruises &amp; Single Supplement Guide
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/family-cruises/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Family River Cruises and Generations Collection
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/christmas-markets/"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Christmas Market River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/uniworld-vs-avalon"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld vs Avalon
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/uniworld-vs-tauck"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld vs Tauck
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/uniworld-vs-riverside"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld vs Riverside
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/uniworld-vs-scenic"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Vs Scenic River Cruises
              </NavLink>

              <NavLink
                to="/uniworld-river-cruises/uniworld-vs-amawaterways"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Uniworld Vs Ama Waterways
              </NavLink>

              <NavLink
                to="/celebrity-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises: Complete Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/whats-included"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                What Is Included on a Celebrity Cruise?
              </NavLink>

              <NavLink
                to="/celebrity-cruises/ships"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruise Ships: Complete Fleet Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/staterooms-suites"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Staterooms and Suites Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/the-retreat"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises: The Retreat
              </NavLink>

              <NavLink
                to="/celebrity-cruises/all-included"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity All Included Explained
              </NavLink>

              <NavLink
                to="/celebrity-cruises/drink-packages"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises Drink Packages
              </NavLink>

              <NavLink
                to="/celebrity-cruises/dining"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises Dining Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/edge-series"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Edge Series Ships Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/faqs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises Frequently Asked Questions
              </NavLink>

              <NavLink
                to="/celebrity-cruises/why-book-with-us"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why Book Celebrity With Trips &amp; Ships?
              </NavLink>

              <NavLink
                to="/celebrity-cruises/celebrity-vs-royal-caribbean"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises vs. Royal Caribbean
              </NavLink>

              <NavLink
                to="/celebrity-cruises/celebrity-vs-princess"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Cruises vs. Princess Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/ships/celebrity-xcel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Xcel Cruise Ship Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/ships/celebrity-ascent"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Ascent Cruise Ship Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/ships/celebrity-beyond"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Beyond Cruise Ship Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/ships/celebrity-apex"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Apex Cruise Ship Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/ships/celebrity-edge"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Edge Cruise Ship Guide
              </NavLink>

              <NavLink
                to="/celebrity-cruises/edge-vs-solstice-series"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Edge vs Solstice Series
              </NavLink>

              <NavLink
                to="/celebrity-cruises/river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity River Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/river-cruises/rhine"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Rhine River Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/river-cruises/danube"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Danube River Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/galapagos"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Galapagos Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/alaska"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Alaska Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/mediterranean"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Mediterranean Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/caribbean"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Caribbean Cruises
              </NavLink>

              <NavLink
                to="/celebrity-cruises/aquaclass-vs-concierge-class"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Aqua Class vs Concierge Class
              </NavLink>

              <NavLink
                to="/celebrity-cruises/infinite-veranda"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Infinite Veranda
              </NavLink>

              {/* <NavLink
                to="/celebrity-cruises/offers-loyalty"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Offers & Loyalty
              </NavLink> */}



            </div>
          </div>
        </div>
        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
      </div>

      <div className="nav-right">
        <button className="nav-btn">CONTACT</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          ×
        </div>

        <div className="mobile-dropdown-wrapper">
          <div className="mobile-dropdown-trigger" onClick={toggleHomeDropdown}>
            HOME{" "}
            <i
              className={`fas fa-angle-${homeDropdownOpen ? "up" : "down"}`}
            ></i>
          </div>
          <div
            className={`mobile-dropdown-menu ${homeDropdownOpen ? "active" : ""}`}
          >
            <span className="mobile-dropdown-title">ANTARCTICA</span>
            <NavLink to="/emerald-yachts" onClick={toggleMenu}>
              Emerald Yachts
            </NavLink>
            <NavLink to="/antarctica-cruise-cost" onClick={toggleMenu}>
              Antarctica Cruise Cost
            </NavLink>
            <NavLink to="/scenic-antarctica-cruise" onClick={toggleMenu}>
              Scenic Antarctica Cruises
            </NavLink>
            <NavLink to="/scenic-vs-silversea-antarctica" onClick={toggleMenu}>
              Scenic vs Silversea Antarctica
            </NavLink>
            <NavLink to="/ScenicvsEmeraldYachts" onClick={toggleMenu}>
              Scenic vs Emerald Yachts
            </NavLink>
            <NavLink to="/DrakePassagePage" onClick={toggleMenu}>
              The Drake Passage
            </NavLink>
            <NavLink
              to="/luxury-travel"
              onClick={toggleMenu}
              className="mobile-dropdown-single"
            >
              Luxury Travel
            </NavLink>
            <NavLink
              to="/emerald-azzurra-vs-emerald-sakara"
              onClick={toggleMenu}
            >
              Emerald Azzurra vs Emerald Sakara
            </NavLink>
            <NavLink
              to="/scenic-vs-four-seasons-yachts"
              onClick={toggleMenu}
              className="mobile-dropdown-single"
            >
              Scenic vs Four Seasons Yachts
            </NavLink>
            <NavLink
              to="/emerald-yachts-vs-ritz-carlton-yacht-collection"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Emerald Yachts vs Ritz-Carlton Yacht Collection
            </NavLink>
            <NavLink
              to="/luxury-yacht-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Yacht Cruises
            </NavLink>

            <NavLink
              to="/riverside-vs-viking-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside vs Viking River Cruises
            </NavLink>

            <NavLink
              to="/riverside-vs-amawaterways"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Riverside vs AmaWaterways
            </NavLink>

            <NavLink
              to="/distinctive-voyage-sailings"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Distinctive Voyage Sailings
            </NavLink>

            <NavLink
              to="/luxury-travel-to-japan"
              className="nav-dropdown-single"
            >
              Luxury travel to Japan
            </NavLink>

            <NavLink
              to="/trip-to-japan"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Trip To Japan
            </NavLink>

            <NavLink
              to="/first-time-japan-itinerary"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              First Time Japan Itinerary
            </NavLink>

            <NavLink
              to="/japan-travel-cost"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Japan Travel Cost
            </NavLink>

            <NavLink
              to="/best-time-to-visit-japan"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Time to Visit Japan
            </NavLink>

            <NavLink
              to="/japan-land-vs-cruise"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Japan Land vs Cruise
            </NavLink>

            <NavLink
              to="/azamara-cruises-guide-2026-2027"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Cruises Guide 2026-2027
            </NavLink>

            <NavLink
              to="/azamara-vs-viking-ocean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Vs Viking Ocean Cruises
            </NavLink>

            <NavLink
              to="/azamara-cabins-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Cabins Guide
            </NavLink>

            <NavLink
              to="/azamara-alaska-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Alaska Cruises
            </NavLink>

            <NavLink
              to="/azamara-cabins-alaska-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Cabins Alaska Guide
            </NavLink>

            <NavLink
              to="/world-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              World Cruises
            </NavLink>

            <NavLink
              to="/world-cruise-cost"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              World Cruise Cost
            </NavLink>

            <NavLink
              to="/regent-seven-seas-world-cruise-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Regent Seven Seas World Cruise Guide
            </NavLink>

            <NavLink
              to="/luxury-kenya-safari-micato"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Kenya Safari Micato
            </NavLink>

            <NavLink
              to="/kenya-vs-tanzania-safari"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Kenya Vs Tanzania Safari
            </NavLink>

            <NavLink
              to="/best-time-great-migration-safari"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Time Great Migration Safari
            </NavLink>

            <NavLink
              to="/luxury-kenya-safari"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Kenya Safari
            </NavLink>

            <NavLink
              to="/luxury-african-safari-cost"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury African Safari Cost
            </NavLink>

            <NavLink
              to="/best-african-safari-for-first-timers"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best African Safari for First-Timers
            </NavLink>

            <NavLink
              to="/best-african-safari-for-families/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best African Safari for Families</NavLink>


            <NavLink
              to="/azamara-mediterranean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Mediterranean Cruises</NavLink>

            <NavLink
              to="/azamara-greece-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Greece Cruises</NavLink>

            <NavLink
              to="/azamara-japan-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Japan Cruises</NavLink>

            <NavLink
              to="/azamara-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Worth It</NavLink>

            <NavLink
              to="/azamara-cabins-guide-2026"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Cabins Guide 2026</NavLink>

            <NavLink
              to="/best-cabins-on-azamara"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Cabins on Azamara</NavLink>

            <NavLink
              to="/best-explora-cruises-for-first-time-luxury-travelers"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Explora Cruises for First-Time Luxury Travelers</NavLink>

            <NavLink
              to="/best-suites-on-explora-journeys"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Suites on Explora Journeys</NavLink>

            <NavLink
              to="/should-you-book-explora-through-a-travel-advisor"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Should You Book Explora Through a Travel Advisor?</NavLink>

            <NavLink
              to="/explora-faq-before-booking"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora FAQ Before Booking</NavLink>

            <NavLink
              to="/explora-journeys-vs-silversea"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Journeys Vs Silversea</NavLink>

            <NavLink
              to="/hx-expeditions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions Cruises</NavLink>

            <NavLink
              to="/hx-expeditions-antarctica-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions Antarctica Cruises</NavLink>

            <NavLink
              to="/hx-expeditions-svalbard-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions Svalbard Cruises</NavLink>

            <NavLink
              to="/hx-expeditions-greenland-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions Greenland Cruises</NavLink>

            <NavLink
              to="/hx-expeditions-galapagos-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions Galapagos Cruises</NavLink>

            <NavLink
              to="/hx-expeditions-vs-viking-expeditions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions vs Viking Expeditions</NavLink>

            <NavLink
              to="/hx-expeditions-vs-silversea-expeditions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions vs Silversea Expeditions</NavLink>

            <NavLink
              to="/best-hx-expeditions-cruises-for-first-timers"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best HX Expeditions Cruises for First-Timers</NavLink>

            <NavLink
              to="/hx-expeditions-ships"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              HX Expeditions Ships</NavLink>

            <NavLink
              to="/disney-cruise-for-adults-without-kids"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise for Adults Without Kids</NavLink>

            <NavLink
              to="/what-luxury-travelers-get-wrong-about-disney-cruise-line"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What Luxury Travelers Get Wrong About Disney Cruise Line</NavLink>

            <NavLink
              to="/is-disney-cruise-line-worth-the-money"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Disney Cruise Line Worth the Money</NavLink>

            <NavLink
              to="/disney-cruise-vs-royal-caribbean"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise vs Royal Caribbean
            </NavLink>

            <NavLink
              to="/is-disney-concierge-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Disney Concierge Worth It?
            </NavLink>

            <NavLink
              to="/best-disney-cruise-ship-for-adults"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Disney Cruise Ship for Adults
            </NavLink>

            <NavLink
              to="/disney-cruise-vs-celebrity-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise vs Celebrity Cruises
            </NavLink>

            <NavLink
              to="/disney-wish-vs-disney-treasure"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Wish vs Disney Treasure
            </NavLink>

            <NavLink
              to="/castaway-cay-vs-lookout-cay"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Castaway Cay vs Lookout Cay
            </NavLink>

            <NavLink
              to="/disney-concierge-benefits-explained"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Concierge Benefits Explained
            </NavLink>

            <NavLink
              to="/disney-cruise-dining-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise Dining Guide
            </NavLink>

            <NavLink
              to="/best-disney-cruise-cabins"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Disney Cruise Cabins
            </NavLink>

            <NavLink
              to="/disney-cruise-booking-timeline"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise Booking Timeline
            </NavLink>

            <NavLink
              to="/disney-cruise-packing-list"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise Packing List
            </NavLink>

            <NavLink
              to="/viking-rhine-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Rhine River Cruises
            </NavLink>

            <NavLink
              to="/viking-christmas-market-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Christmas Market Cruises
            </NavLink>

            <NavLink
              to="/viking-mediterranean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Mediterranean Cruises
            </NavLink>

            <NavLink
              to="/viking-alaska-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Alaska Cruises
            </NavLink>

            <NavLink
              to="/viking-iceland-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Iceland Cruises
            </NavLink>

            <NavLink
              to="/viking-vs-amawaterways"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking vs AmaWaterways
            </NavLink>

            <NavLink
              to="/viking-vs-tauck"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking vs Tauck
            </NavLink>

            <NavLink
              to="/viking-vs-scenic"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking vs Scenic
            </NavLink>

            <NavLink
              to="/viking-vs-uniworld"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking vs Uniwold
            </NavLink>

            <NavLink
              to="/why-i-resisted-viking-for-years"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why I Resisted Viking for Years
            </NavLink>

            <NavLink
              to="/viking-cruise-resource-center"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Viking Cruise Resource Center
            </NavLink>

            <NavLink
              to="/donor-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Donor River Cruises
            </NavLink>

            <NavLink
              to="/donor-safaris"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Donor safaris
            </NavLink>

            <NavLink
              to="/travel-programs-for-opera-companies"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Travel Programs for Opera Companies
            </NavLink>

            <NavLink
              to="/travel-programs-for-symphony-orchestras"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Travel Programs for Symphony Orchestras
            </NavLink>

            <NavLink
              to="/Travel-Programs-for-Theaters&Performing-Arts-Organizations"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Performing arts travel
            </NavLink>

            <NavLink
              to="/why-travel-increases-donor-engagement-and-fundraising"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why travel donor engagement
            </NavLink>

            <NavLink
              to="/explora-vs-regent"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Vs Regent
            </NavLink>

            <NavLink
              to="/explora-vs-ritz-carlton-yacht-collection"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Vs Ritzcarlton
            </NavLink>

            <NavLink
              to="/explora-vs-oceania"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Vs Oceania
            </NavLink>

            <NavLink
              to="/explora-vs-ponant"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Vs Ponant
            </NavLink>

            <NavLink
              to="/explora-vs-crystal"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Vs Crystal
            </NavLink>

            <NavLink
              to="/private-equity-family-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Private Equity Family Travel</NavLink>

            <NavLink
              to="/family-legacy-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Family Legacy Travel</NavLink>

            <NavLink
              to="/multigenerational-luxury-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Multigenerational Luxury Travel</NavLink>

            <NavLink
              to="/family-office-travel-planning"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Family Office Travel Planning</NavLink>

            <NavLink
              to="/executive-family-retreats"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Executive Family Retreats</NavLink>

            <NavLink
              to="/family-governance-retreats"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Family Governance Retreats</NavLink>

            <NavLink
              to="/luxury-family-celebrations"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Family Celebrations</NavLink>

            <NavLink
              to="/private-jet-concierge-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Private Jet Concierge Travel</NavLink>


            <NavLink
              to="/private-villas-exclusive-resorts"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Private villas & exclusive resorts</NavLink>

            <NavLink
              to="/safaris-expeditions-bucket-list-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Safari & expeditions bucket list travel</NavLink>

            <NavLink
              to="/luxury-wellness-retreats"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Wellness Retreats</NavLink>

            <NavLink
              to="/philanthropic-purpose-driven-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Philanthropic Purpose-Driven Travel</NavLink>

            <NavLink
              to="/luxury-cruises-for-affluent-families"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Cruises For Affluent Families</NavLink>

            <NavLink
              to="/international-family-adventures"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              International Family Adventures</NavLink>

            <NavLink
              to="/business-milestone-liquidity-event-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Business Milestone Liquidity Event Travel</NavLink>

            <NavLink
              to="/privacy-security-travel-planning"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Privacy & security travel planning</NavLink>

            <NavLink
              to="/building-stronger-families-through-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Building stronger families through travel</NavLink>

            <NavLink
              to="/scenic-luxury-yacht-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Luxury Yacht Guide</NavLink>

            <NavLink
              to="/scenic-eclipse-reviews"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Eclipse Reviews</NavLink>

            <NavLink
              to="/scenic-vs-ponant"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Vs Ponant</NavLink>

            <NavLink
              to="/scenic-vs-seabourn"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Vs Seabourn</NavLink>

            <NavLink
              to="/what-is-included-on-scenic"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What Is Included On Scenic</NavLink>

            <NavLink
              to="/scenic-mediterranean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Mediterranean Cruises</NavLink>

            <NavLink
              to="/is-scenic-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Scenic Worth It</NavLink>

            <NavLink
              to="/scenic-iceland-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Iceland Cruises</NavLink>

            <NavLink
              to="/scenic-greenland-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Greenland Cruises</NavLink>

            <NavLink
              to="/scenic-food-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Food Review</NavLink>

            <NavLink
              to="/scenic-cabins-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Cabins Guide</NavLink>

            <NavLink
              to="/best-scenic-suites"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Scenic Suites</NavLink>

            <NavLink
              to="/scenic-helicopter-experience"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Helicopter Experience</NavLink>

            <NavLink
              to="/scenic-submarine-experience"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Scenic Submarine Experience</NavLink>

            <NavLink
              to="/best-expedition-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Expedition Cruises</NavLink>

            <NavLink
              to="/best-luxury-expedition-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Luxury Expedition Cruises</NavLink>

            <NavLink
              to="/uniworld-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld River Cruises
            </NavLink>
            <NavLink
              to="/uniworld-river-cruises-review"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld River Cruises Review
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/cruise-and-rail"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Cruise And Rail Journeys
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/rhine"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Rhine River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/whats-included/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What's Included on a Uniworld River Cruise
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/cost-deals/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How Much Does a Uniworld River Cruise Cost?
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/is-uniworld-worth-it/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Uniworld Worth the Money?
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/danube"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Danube River Cruises
            </NavLink>


            <NavLink
              to="/uniworld-river-cruises/seine"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Seine River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/rhone-saone"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Rhone Saone River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/bordeaux"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Bordeaux River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/cabin-categories/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Cabin Categories Explained
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/best-cabins/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Uniworld Cabins and Cabins to Avoid
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/best-itineraries/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Best Uniworld River Cruise Itineraries
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/italy-venice"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Italy Venice River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/egypt-nile"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Egypt Nile River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/first-time-guide/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              First-Time Uniworld River Cruise Guide
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/food-dining/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Food and Dining Review
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/dress-code-packing/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Dress Code and Packing Guide
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/airfare-transfers/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Airfare, Airport Transfers and Arrival Guide
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/solo-travel/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Solo River Cruises & Single Supplement Guide
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/family-cruises/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Family River Cruises and Generations Collection
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/christmas-markets/"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Christmas Market River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/uniworld-vs-avalon"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld vs Avalon
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/uniworld-vs-tauck"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld vs Tauck
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/uniworld-vs-riverside"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld vs Riverside
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/uniworld-vs-scenic"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Vs Scenic River Cruises
            </NavLink>

            <NavLink
              to="/uniworld-river-cruises/uniworld-vs-amawaterways"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Uniworld Vs Ama Waterways
            </NavLink>

            <NavLink
              to="/celebrity-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises: Complete Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/whats-included"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              What Is Included on a Celebrity Cruise?
            </NavLink>

            <NavLink
              to="/celebrity-cruises/ships"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruise Ships: Complete Fleet Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/staterooms-suites"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Staterooms and Suites Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/the-retreat"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises: The Retreat
            </NavLink>

            <NavLink
              to="/celebrity-cruises/all-included"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity All Included Explained
            </NavLink>

            <NavLink
              to="/celebrity-cruises/drink-packages"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises Drink Packages
            </NavLink>

            <NavLink
              to="/celebrity-cruises/dining"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises Dining Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/edge-series"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Edge Series Ships Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/faqs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises Frequently Asked Questions
            </NavLink>

            <NavLink
              to="/celebrity-cruises/why-book-with-us"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why Book Celebrity With Trips &amp; Ships?
            </NavLink>

            <NavLink
              to="/celebrity-cruises/celebrity-vs-royal-caribbean"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises vs. Royal Caribbean
            </NavLink>

            <NavLink
              to="/celebrity-cruises/celebrity-vs-princess"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Cruises vs. Princess Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/ships/celebrity-xcel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Xcel Cruise Ship Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/ships/celebrity-ascent"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Ascent Cruise Ship Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/ships/celebrity-beyond"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Beyond Cruise Ship Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/ships/celebrity-apex"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Apex Cruise Ship Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/ships/celebrity-edge"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Edge Cruise Ship Guide
            </NavLink>

            <NavLink
              to="/celebrity-cruises/edge-vs-solstice-series"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Edge vs Solstice Series
            </NavLink>

            <NavLink
              to="/celebrity-cruises/river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity River Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/river-cruises/rhine"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Rhine River Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/river-cruises/danube"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Danube River Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/galapagos"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Galapagos Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/alaska"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Alaska Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/mediterranean"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Mediterranean Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/caribbean"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Caribbean Cruises
            </NavLink>

            <NavLink
              to="/celebrity-cruises/aquaclass-vs-concierge-class"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Aqua Class vs Concierge Class
            </NavLink>

            <NavLink
              to="/celebrity-cruises/infinite-veranda"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Celebrity Infinite Veranda
            </NavLink>

            {/* <NavLink
                to="/celebrity-cruises/offers-loyalty"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Celebrity Offers & Loyalty
              </NavLink> */}


            <span className="mobile-dropdown-divider"></span>
          </div>
        </div>

        <a href="#">EXPERIENCES</a>
        <a href="#">MEETINGS & INCENTIVES</a>
        <a href="#">ALUMNI TRAVEL</a>
        <a href="#">VIP HOTELS</a>
        <a href="#">ABOUT & RESOURCES</a>
        <a href="#">BLOG</a>
        <button className="nav-btn">CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;