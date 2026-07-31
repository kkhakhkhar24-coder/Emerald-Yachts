import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const HOME_GROUPS = [
  {
    title: "Antarctica & Expedition",
    links: [
      { label: "Antarctica Cruise Cost", to: "/antarctica-cruise-cost" },
      { label: "Scenic Antarctica Cruises", to: "/scenic-antarctica-cruise" },
      { label: "The Drake Passage", to: "/DrakePassagePage" },
      { label: "Best Expedition Cruises", to: "/best-expedition-cruises" },
      {
        label: "Best Luxury Expedition Cruises",
        to: "/best-luxury-expedition-cruises",
      },
    ],
  },
  {
    title: "Emerald Yachts",
    links: [
      { label: "Emerald Yachts", to: "/emerald-yachts" },
      {
        label: "Emerald Azzurra vs Emerald Sakara",
        to: "/emerald-azzurra-vs-emerald-sakara",
      },
      {
        label: "Emerald Yachts vs Ritz-Carlton Yacht Collection",
        to: "/emerald-yachts-vs-ritz-carlton-yacht-collection",
      },
    ],
  },
  {
    title: "Scenic",
    links: [
      { label: "Scenic Luxury Yacht Guide", to: "/scenic-luxury-yacht-guide" },
      { label: "Scenic Eclipse Reviews", to: "/scenic-eclipse-reviews" },
      { label: "Scenic Eclipse II Reviews", to: "/scenic-eclipse-ii-reviews" },
      { label: "Scenic vs Silversea Antarctica", to: "/scenic-vs-silversea-antarctica" },
      { label: "Scenic vs Emerald Yachts", to: "/ScenicvsEmeraldYachts" },
      { label: "Scenic vs Four Seasons Yachts", to: "/scenic-vs-four-seasons-yachts" },
      { label: "Scenic vs Ponant", to: "/scenic-vs-ponant" },
      { label: "Scenic vs Seabourn", to: "/scenic-vs-seabourn" },
      { label: "Scenic Mediterranean Cruises", to: "/scenic-mediterranean-cruises" },
      { label: "Scenic Iceland Cruises", to: "/scenic-iceland-cruises" },
      { label: "Scenic Greenland Cruises", to: "/scenic-greenland-cruises" },
      { label: "What Is Included On Scenic", to: "/what-is-included-on-scenic" },
      { label: "Is Scenic Worth It", to: "/is-scenic-worth-it" },
      { label: "Scenic Food Review", to: "/scenic-food-review" },
      { label: "Scenic Cabins Guide", to: "/scenic-cabins-guide" },
      { label: "Best Scenic Suites", to: "/best-scenic-suites" },
      { label: "Scenic Helicopter Experience", to: "/scenic-helicopter-experience" },
      { label: "Scenic Submarine Experience", to: "/scenic-submarine-experience" },
    ],
  },
  {
    title: "Riverside",
    links: [
      { label: "Riverside Luxury Cruises", to: "/riverside-luxury-cruises" },
      {
        label: "Riverside vs Viking River Cruises",
        to: "/riverside-vs-viking-river-cruises",
      },
      { label: "Riverside vs AmaWaterways", to: "/riverside-vs-amawaterways" },
    ],
  },
  {
    title: "Azamara",
    links: [
      { label: "Azamara Cruises Guide 2026-2027", to: "/azamara-cruises-guide-2026-2027" },
      { label: "Azamara Cabins Guide", to: "/azamara-cabins-guide" },
      { label: "Azamara Cabins Guide 2026", to: "/azamara-cabins-guide-2026" },
      { label: "Azamara Cabins Alaska Guide", to: "/azamara-cabins-alaska-guide" },
      { label: "Best Cabins on Azamara", to: "/best-cabins-on-azamara" },
      { label: "Azamara Alaska Cruises", to: "/azamara-alaska-cruises" },
      { label: "Azamara Mediterranean Cruises", to: "/azamara-mediterranean-cruises" },
      { label: "Azamara Greece Cruises", to: "/azamara-greece-cruises" },
      { label: "Azamara Japan Cruises", to: "/azamara-japan-cruises" },
      { label: "Azamara Worth It", to: "/azamara-worth-it" },
      { label: "Azamara vs Viking Ocean Cruises", to: "/azamara-vs-viking-ocean-cruises" },
      { label: "Azamara Ship Comparison", to: "/azamara-ship-comparison" },
      { label: "Azamara vs Regent Seven Seas", to: "/azamara-vs-regent-seven-seas" },
    ],
  },
  {
    title: "Explora Journeys",
    links: [
      {
        label: "Best Explora Cruises for First-Time Luxury Travelers",
        to: "/best-explora-cruises-for-first-time-luxury-travelers",
      },
      { label: "Best Suites on Explora Journeys", to: "/best-suites-on-explora-journeys" },
      {
        label: "Should You Book Explora Through a Travel Advisor?",
        to: "/should-you-book-explora-through-a-travel-advisor",
      },
      { label: "Explora FAQ Before Booking", to: "/explora-faq-before-booking" },
      { label: "Explora Journeys vs Silversea", to: "/explora-journeys-vs-silversea" },
      { label: "Explora vs Regent", to: "/explora-vs-regent" },
      {
        label: "Explora vs Ritz-Carlton Yacht Collection",
        to: "/explora-vs-ritz-carlton-yacht-collection",
      },
      { label: "Explora vs Viking", to: "/explora-vs-viking" },
      { label: "Explora vs Oceania", to: "/explora-vs-oceania" },
      { label: "Explora vs Scenic", to: "/explora-vs-scenic" },
      { label: "Explora vs Ponant", to: "/explora-vs-ponant" },
      { label: "Explora vs Crystal", to: "/explora-vs-crystal" },
    ],
  },
  {
    title: "HX Expeditions",
    links: [
      { label: "HX Expeditions Cruises", to: "/hx-expeditions" },
      { label: "HX Expeditions Ships", to: "/hx-expeditions-ships" },
      { label: "HX Expeditions Antarctica Cruises", to: "/hx-expeditions-antarctica-cruises" },
      { label: "HX Expeditions Svalbard Cruises", to: "/hx-expeditions-svalbard-cruises" },
      { label: "HX Expeditions Greenland Cruises", to: "/hx-expeditions-greenland-cruises" },
      { label: "HX Expeditions Galapagos Cruises", to: "/hx-expeditions-galapagos-cruises" },
      {
        label: "Best HX Expeditions Cruises for First-Timers",
        to: "/best-hx-expeditions-cruises-for-first-timers",
      },
      { label: "HX Expeditions vs Viking Expeditions", to: "/hx-expeditions-vs-viking-expeditions" },
      {
        label: "HX Expeditions vs Silversea Expeditions",
        to: "/hx-expeditions-vs-silversea-expeditions",
      },
    ],
  },
  {
    title: "Viking",
    links: [
      { label: "Viking Rhine River Cruises", to: "/viking-rhine-river-cruises" },
      { label: "Viking Christmas Market Cruises", to: "/viking-christmas-market-cruises" },
      { label: "Viking Mediterranean Cruises", to: "/viking-mediterranean-cruises" },
      { label: "Viking Alaska Cruises", to: "/viking-alaska-cruises" },
      { label: "Viking Iceland Cruises", to: "/viking-iceland-cruises" },
      { label: "Viking Cruise Resource Center", to: "/viking-cruise-resource-center" },
      { label: "Why I Resisted Viking for Years", to: "/why-i-resisted-viking-for-years" },
      { label: "Viking vs AmaWaterways", to: "/viking-vs-amawaterways" },
      { label: "Viking vs Tauck", to: "/viking-vs-tauck" },
      { label: "Viking vs Scenic", to: "/viking-vs-scenic" },
      { label: "Viking vs Uniwold", to: "/viking-vs-uniworld" },
    ],
  },
  {
    title: "Disney Cruise",
    links: [
      { label: "Disney Cruise for Adults Without Kids", to: "/disney-cruise-for-adults-without-kids" },
      { label: "Best Disney Cruise Ship for Adults", to: "/best-disney-cruise-ship-for-adults" },
      { label: "Best Disney Cruise Cabins", to: "/best-disney-cruise-cabins" },
      { label: "Disney Cruise Dining Guide", to: "/disney-cruise-dining-guide" },
      { label: "Disney Cruise Booking Timeline", to: "/disney-cruise-booking-timeline" },
      { label: "Disney Cruise Packing List", to: "/disney-cruise-packing-list" },
      { label: "Disney Concierge Benefits Explained", to: "/disney-concierge-benefits-explained" },
      { label: "Is Disney Concierge Worth It?", to: "/is-disney-concierge-worth-it" },
      { label: "Is Disney Cruise Line Worth the Money", to: "/is-disney-cruise-line-worth-the-money" },
      {
        label: "What Luxury Travelers Get Wrong About Disney Cruise Line",
        to: "/what-luxury-travelers-get-wrong-about-disney-cruise-line",
      },
      { label: "Disney Wish vs Disney Treasure", to: "/disney-wish-vs-disney-treasure" },
      { label: "Disney Cruise vs Royal Caribbean", to: "/disney-cruise-vs-royal-caribbean" },
      { label: "Disney Cruise vs Celebrity Cruises", to: "/disney-cruise-vs-celebrity-cruises" },
      { label: "Castaway Cay vs Lookout Cay", to: "/castaway-cay-vs-lookout-cay" },
    ],
  },
  {
    title: "Japan",
    links: [
      { label: "Luxury travel to Japan", to: "/luxury-travel-to-japan" },
      { label: "Trip To Japan", to: "/trip-to-japan" },
      { label: "First Time Japan Itinerary", to: "/first-time-japan-itinerary" },
      { label: "Japan Travel Cost", to: "/japan-travel-cost" },
      { label: "Best Time to Visit Japan", to: "/best-time-to-visit-japan" },
      { label: "Japan Land vs Cruise", to: "/japan-land-vs-cruise" },
    ],
  },
  {
    title: "World Cruises",
    links: [
      { label: "World Cruises", to: "/world-cruises" },
      { label: "World Cruise Cost", to: "/world-cruise-cost" },
      { label: "Regent Seven Seas World Cruise Guide", to: "/regent-seven-seas-world-cruise-guide" },
    ],
  },
  {
    title: "Kenya & Africa Safari",
    links: [
      { label: "Luxury Kenya Safari Micato", to: "/luxury-kenya-safari-micato" },
      { label: "Luxury Kenya Safari", to: "/luxury-kenya-safari" },
      { label: "Best Time Great Migration Safari", to: "/best-time-great-migration-safari" },
      { label: "Kenya Vs Tanzania Safari", to: "/kenya-vs-tanzania-safari" },
      { label: "Luxury African Safari Cost", to: "/luxury-african-safari-cost" },
      { label: "Best African Safari for First-Timers", to: "/best-african-safari-for-first-timers" },
      { label: "Luxury Safari in Africa", to: "/best-country-for-luxury-safari-in-africa/" },
      { label: "Best African Safari for Families", to: "/best-african-safari-for-families/" },
    ],
  },
  {
    title: "Luxury Travel",
    links: [
      { label: "Luxury Travel", to: "/luxury-travel" },
      { label: "Luxury Yacht Cruises", to: "/luxury-yacht-cruises" },
      { label: "Distinctive Voyage Sailings", to: "/distinctive-voyage-sailings" },
    ],
  },
  {
    title: "Donor & Performing Arts",
    links: [
      { label: "Donor River Cruises", to: "/donor-river-cruises" },
      { label: "Donor safaris", to: "/donor-safaris" },
      { label: "Travel Programs for Opera Companies", to: "/travel-programs-for-opera-companies" },
      {
        label: "Travel Programs for Symphony Orchestras",
        to: "/travel-programs-for-symphony-orchestras",
      },
      {
        label: "Performing arts travel",
        to: "/Travel-Programs-for-Theaters&Performing-Arts-Organizations",
      },
      {
        label: "Why travel donor engagement",
        to: "/why-travel-increases-donor-engagement-and-fundraising",
      },
    ],
  },
  {
    title: "Family Travel",
    links: [
      { label: "Family Legacy Travel", to: "/family-legacy-travel" },
      { label: "Multigenerational Luxury Travel", to: "/multigenerational-luxury-travel" },
      { label: "Private Equity Family Travel", to: "/private-equity-family-travel" },
      { label: "Family Office Travel Planning", to: "/family-office-travel-planning" },
      { label: "Executive Family Retreats", to: "/executive-family-retreats" },
      { label: "Family Governance Retreats", to: "/family-governance-retreats" },
      { label: "Luxury Family Celebrations", to: "/luxury-family-celebrations" },
      { label: "Luxury Cruises For Affluent Families", to: "/luxury-cruises-for-affluent-families" },
      { label: "International Family Adventures", to: "/international-family-adventures" },
      {
        label: "Business Milestone Liquidity Event Travel",
        to: "/business-milestone-liquidity-event-travel",
      },
      { label: "Building stronger families through travel", to: "/building-stronger-families-through-travel" },
    ],
  },
  {
    title: "Private & Wellness",
    links: [
      { label: "Private Jet Concierge Travel", to: "/private-jet-concierge-travel" },
      { label: "Private villas & exclusive resorts", to: "/private-villas-exclusive-resorts" },
      { label: "Safari & expeditions bucket list travel", to: "/safaris-expeditions-bucket-list-travel" },
      { label: "Luxury Wellness Retreats", to: "/luxury-wellness-retreats" },
      { label: "Philanthropic Purpose-Driven Travel", to: "/philanthropic-purpose-driven-travel" },
      { label: "Privacy & security travel planning", to: "/privacy-security-travel-planning" },
    ],
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const dropdownScrollRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setHomeDropdownOpen(!homeDropdownOpen);
  };

  const scrollDropdown = (direction) => {
    dropdownScrollRef.current?.scrollBy({
      left: direction * 460,
      behavior: "smooth",
    });
  };

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
            <button
              className="nav-dropdown-arrow nav-dropdown-arrow-left"
              onClick={() => scrollDropdown(-1)}
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="nav-dropdown-scroll" ref={dropdownScrollRef}>
              {HOME_GROUPS.map((group) => (
                <div className="nav-dropdown-group" key={group.title}>
                  <span className="nav-dropdown-title">{group.title}</span>
                  {group.links.map((link) => (
                    <NavLink key={link.to} to={link.to}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
            <button
              className="nav-dropdown-arrow nav-dropdown-arrow-right"
              onClick={() => scrollDropdown(1)}
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
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
            {HOME_GROUPS.map((group) => (
              <div className="mobile-dropdown-group" key={group.title}>
                <span className="mobile-dropdown-title">{group.title}</span>
                {group.links.map((link) => (
                  <NavLink key={link.to} to={link.to} onClick={toggleMenu}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ))}
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
