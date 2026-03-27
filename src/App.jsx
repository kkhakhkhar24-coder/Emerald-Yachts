import React, { useState } from "react";
import FAQ from "./FAQ";
import "./orient.css";

const LuxuryHero = () => {

const [menuOpen, setMenuOpen] = React.useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

  return (
    <div className="wrapper">

    <nav className="navbar">
        <div className="logo">TRIPS & SHIPS</div>

        <div className="nav-links">
          <a href="#">HOME</a>
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

<div className="hamburger" onClick={() => toggleMenu()}>
  <span></span>
  <span></span>
  <span></span>
</div>

<div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>
   <div className="close-btn" onClick={() => toggleMenu()}>×</div>
  <a href="#">HOME</a>
  <a href="#">EXPERIENCES</a>
  <a href="#">MEETINGS & INCENTIVES</a>
  <a href="#">ALUMNI TRAVEL</a>
  <a href="#">VIP HOTELS</a>
  <a href="#">ABOUT & RESOURCES</a>
  <a href="#">BLOG</a>
  <button className="nav-btn">CONTACT</button>
</div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Orient Express Yachts:
            <br />
            A New Era of Luxury Travel at Sea
          </h1>

          <p className="lead">
            Most people think they understand cruising.
            <br />
            They don’t.
          </p>

          <p className="sub">
            And that is exactly why Orient Express Yachts matters.
          </p>

         <p className="extra-text">
  This is not simply another ship entering the market. It is a new
  expression of luxury travel at sea for travelers who care about
  space, design, privacy, and a more intentional pace of travel.
</p>

<p className="extra-text">
  I have spent more than four decades in the travel industry, and very
  few products genuinely shift consumer perception the way this one
  does.
</p>

          <div className="hero-buttons">
            <button className="primary">
              Request a Private Consultation
            </button>
            <button className="secondary">
              View Upcoming Sailings
            </button>
          </div>
        </div>
      </section>


<section className="what-luxury">

  <div className="luxury-bg"></div> 

  <div className="what-text">
    <h2>What Is Orient Express Yachts</h2>

    <p className="fade-in">
      Orient Express Sailing Yachts introduces a very different category of travel at sea. The first yacht, Orient Express Corinthian, begins its maiden voyages in May 2026. It is presented by the brand as the world’s largest sailing yacht and is designed with 54 suites, panoramic sea views, and Mediterranean itineraries that position it at the very top end of the ultra-luxury market. 
    </p>

    <p className="fade-in delay-1">
      This is not a traditional cruise ship experience. It is a more private, design-forward, and residential approach to being at sea.
    </p>

    <div className="highlights-title fade-in delay-2">Key highlights</div>

   <div className="highlights-luxury fade-in delay-2">
  <div className="highlight-pill">
    <span className="highlight-icon">⛵</span>
    54 Suites
  </div>
  <div className="highlight-pill">
    <span className="highlight-icon">🌊</span>
    Panoramic Sea Views
  </div>
  <div className="highlight-pill">
    <span className="highlight-icon">🗓️</span>
    Maiden Voyages May 2026
  </div>
  <div className="highlight-pill">
    <span className="highlight-icon">🧭</span>
    Mediterranean Itineraries
  </div>
  <div className="highlight-pill">
    <span className="highlight-icon">💎</span>
    Curated Luxury Concept
  </div>
</div>
  </div>

</section>



<section className="editorial-block">

  <div className="editorial-inner fade-in">
    <h2>Is Orient Express Yachts a Cruise or a Yacht</h2>

    <p>
      Technically, it operates as a sailing yacht experience, but the better answer is that it is designed to feel far more like a private yacht than a traditional cruise.
    </p>

    <p className="emphasis fade-in delay-1">
      That distinction matters.
    </p>

    <p>
      For many travelers, the resistance to cruising has never been about the sea. It has been about scale, density, and the feeling that the experience was built for someone else. Orient Express Yachts addresses that gap with a lower-density concept, stronger design identity, and a more immersive sense of place. Its positioning, suite count, and Mediterranean launch all support that interpretation.
    </p>
  </div>

</section>

<section className="difference">

  <div className="difference-bg"></div>

  <div className="difference-content">

    <div className="difference-card">
      <h2>Why This Is Different</h2>

      <p>
        Most cruise products have historically been built around itinerary, volume, and logistics.
      </p>

      <p className="highlight-line">
        Orient Express Yachts is built around something else entirely.
      </p>

      <p>
        It is about space over density, environment over programming, design over sameness, and atmosphere over activity schedules. The brand is bringing the legacy of Orient Express into a floating, highly stylized setting that is meant to feel curated rather than crowded.
      </p>

      <p>
        This is why it matters so much for travelers who have never really seen themselves on a cruise.
      </p>
    </div>

  </div>

</section>

<section className="experience">

  <div className="experience-inner">

    <h2>The Experience Onboard</h2>

    <p>
      The onboard experience is where this product begins to separate itself.
    </p>

    <p>
      Official Orient Express materials describe a layered experience that includes restaurants and bars, a marina, wellness spaces, a cabaret, a cinema, a game room, a music salon, and a library. Accor’s press materials also confirm five restaurants and private dining spaces, a 115-seat cabaret, a state-of-the-art recording studio, two pools, and a marina. Culinary direction for Orient Express Corinthian is led by Yannick Alléno.
    </p>

    <p>
      This gives the experience more depth than a simple yacht aesthetic.
    </p>

    <p className="emphasis">
      It creates a full world onboard.
    </p>

    <div className="exp-highlights-title">
      Experience highlights
    </div>

    <div className="exp-slider">
      <div className="exp-track">

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')"}}>
          <span>Five restaurants and private dining spaces</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')"}}>
          <span>Bars and lounges</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf')"}}>
          <span>115-seat cabaret</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"}}>
          <span>Marina and water access</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.pexels.com/photos/4716818/pexels-photo-4716818.jpeg')"}}>
          <span>Two pools</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773')"}}>
          <span>Fitness and wellness spaces</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')"}}>
          <span>Library, cinema, and music salon</span>
        </div>

        <div className="exp-slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1555992336-03a23c7b20ee')"}}>
          <span>Culinary direction by Yannick Alléno</span>
        </div>

      </div>
    </div>

  </div>

</section>


<section className="suites">

  <div className="suites-inner">

   
    <div className="suites-image"></div>

    <div className="suites-text">

      <h2>Suites and Space</h2>

      <p>
        One of the strongest selling points is the sense of space.
      </p>

      <p>
        Accor states that the yacht’s 54 suites range from 485 square feet to 2,476 square feet, with expansive picture windows or terraces and elevated ceilings. That is materially different from how most travelers think about accommodation at sea.
      </p>

      <p className="emphasis">
        For the right traveler, that changes the entire conversation.
      </p>

      <p>
        This is not about fitting into a cabin. It is about inhabiting a beautifully designed environment that happens to move through the Mediterranean.
      </p>

    </div>

  </div>

</section>


<section className="pricing">

  <div className="pricing-inner">

    <h2>How Much Does Orient Express Yacht Cost</h2>

    <p>
      Pricing is expected to place Orient Express Yachts at the very top of the ultra-luxury market.
    </p>

    <p>
      While the brand’s public materials emphasize itinerary availability and booking status rather than a simple universal rate card, the overall product positioning, suite scale, culinary leadership, and density strongly suggest a mid five-figure starting point per person and upward, depending on suite category, season, and itinerary. That pricing expectation is an inference based on the official product profile and positioning rather than a single published flat rate.
    </p>

    <p className="emphasis">
      This is not a price-first product.
    </p>

    <p>
      It is a product for travelers choosing for rarity, design, access, and experience.
    </p>

  </div>

</section>


<section className="sustainability">

  <div className="sustain-inner">

    <h2>Sustainability and Innovation</h2>

    <p>
      Sustainability is part of the product story, but in this case it is also part of the appeal.
    </p>

    <p>
      Orient Express has positioned this as a sailing yacht experience, and the brand’s official messaging centers the vessel’s identity as a large-scale sailing concept rather than a conventional cruise ship. What matters for the consumer page is that this is being framed as a more future-facing, design-led approach to ultra-luxury travel at sea.
    </p>

    <p className="emphasis">
      For many luxury travelers, that combination of innovation and elegance is part of the draw.
    </p>

  </div>

</section>

<section className="audience">

  <div className="audience-inner">

    <h2>Who This Is For</h2>

    <p className="intro">
      This is not for everyone.
    </p>

    <p>
      It is best suited for travelers who:
    </p>

    <div className="audience-list">
      <p>Have never really identified as cruise travelers</p>
      <p>Prefer private villas, yachts, and more design-driven environments</p>
      <p>Value privacy, atmosphere, and a quieter pace</p>
      <p>Want something newer and more distinctive than a standard luxury cruise</p>
      <p>Want to integrate a sailing into a broader Europe itinerary</p>
    </div>

    <p className="emphasis">
      If you have ever said, “I do not think cruising is for me,” this may be the first product that genuinely challenges that assumption.
    </p>

  </div>

</section>


<section className="compare">

  <div className="compare-inner">

   
    <div className="compare-text">

      <h2>How It Compares to Other Luxury Yacht Experiences</h2>

      <p>
        Orient Express Yachts enters a space that already includes products that blend hospitality and small-ship luxury.
      </p>

      <p>
        What makes this stand apart is the strength of the Orient Express brand identity, the emphasis on sailing, the highly stylized design point of view, the intimate suite count, and the framing of the journey itself as part of the allure. The official brand language leans much more heavily into heritage, craftsmanship, and the Mediterranean experience than into conventional cruise messaging.
      </p>

      <p className="emphasis">
        That difference matters.
      </p>

      <p className="emphasis">
        It changes who will be drawn to it.
      </p>

    </div>

  
    <div className="compare-images">
      <img src="https://www.tripsandships.com/blog-river-cruise.jpeg" alt="luxury yacht" />
      <img src="https://www.tripsandships.com/MAGNA_Exterior_passau.jpeg" alt="deck view" />
      <img src="https://www.tripsandships.com/bush-lunch-tanzania-safari-experience.jpeg" alt="luxury interior" />
    </div>

  </div>

</section>

<section className="angela">

  <div className="angela-box">

    <h2>Why Work with Angela Hughes and Trips & Ships Luxury Travel</h2>

    <p className="lead">
      Angela Hughes leads this work personally.
    </p>

    <p>
      She is the CEO and Founder of Trips & Ships Luxury Travel and one of the most recognized voices in luxury travel today.
    </p>

    <div className="angela-points">
      <p>CEO and Founder of Trips & Ships Luxury Travel</p>
      <p>Founder of Luxury Travel University</p>
      <p>More than 40 years in the travel industry</p>
      <p>Named one of the Most Influential Women in Travel 2026 by TravelPulse</p>
      <p>Named Luxury Travel Influencer of the Year 2024 by Travel Leaders Network</p>
      <p>Trusted by luxury travelers globally</p>
    </div>

    <p>
      Her role is not simply to book a product.
    </p>

    <p className="emphasis">
      It is to interpret where the market is going and help clients decide whether something is truly right for them.
    </p>

    <p>
      Orient Express Yachts is one of those moments.
    </p>

    <h3 className="subhead">
      A personal approach backed by a global team
    </h3>

    <p>
      While Angela leads the strategy and client experience, she is supported by a team of more than 140 luxury travel advisors and operational specialists within Trips & Ships Luxury Travel.
    </p>

    <p>
      That means clients benefit from:
    </p>

    <div className="angela-points">
      <p>Strategic oversight</p>
      <p>Deep supplier relationships</p>
      <p>Support before, during, and after travel</p>
      <p>Full itinerary coordination around the sailing itself</p>
    </div>

    <p className="emphasis">
      This is not a one-person transaction.
    </p>

    <p>
      It is a high-touch experience supported by both leadership and infrastructure.
    </p>

  </div>

</section>

<section className="availability">

  <div className="availability-inner">

    <h2>Availability and Booking Strategy</h2>

    <p>
      With only 54 suites, this is a limited-inventory product from the start. Official Orient Express itinerary pages already show booking-driven sailings, call-for-availability language on some departures, and a clear emphasis on early planning.
    </p>

    <p>
      Working with Trips & Ships Luxury Travel means:
    </p>

    <div className="availability-list">

      <div className="availability-item">
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <p>Strategic timing on when to book</p>
      </div>

      <div className="availability-item">
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <p>Guidance on whether the product fits your travel style</p>
      </div>

      <div className="availability-item">
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <p>Help selecting the right suite and sailing</p>
      </div>

      <div className="availability-item">
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <p>Pre- and post-yacht itinerary planning</p>
      </div>

      <div className="availability-item">
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <p>Ongoing advocacy throughout the experience</p>
      </div>

    </div>

  </div>

</section>


<section className="final-cta">

  <div className="final-cta-inner">

    <h2>Start Your Journey</h2>

    <p>
      This is not something to book casually in five minutes.
    </p>

    <p>
      It requires thought, fit, timing, and the right planning around it.
    </p>

    <p className="cta-emphasis">
      If this aligns with how you want to travel, the next step is a conversation.
    </p>

    <button className="cta-button">
      Request a Private Consultation
    </button>

  </div>

</section>
      

    </div>
  );
};

export default LuxuryHero;
