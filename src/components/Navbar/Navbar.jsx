import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHomeDropdown = (e) => {
    e.preventDefault();
    setHomeDropdownOpen(!homeDropdownOpen);
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
                to="/azamara-cruises-guide-2026-2027"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Cruises Guide 2026-2027
              </NavLink>
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
              to="/azamara-cruises-guide-2026-2027"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Cruises Guide 2026-2027
            </NavLink>

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
