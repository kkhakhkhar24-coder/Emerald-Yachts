import { useState } from "react";

const faqData = [
  {
    q: "Is Orient Express Yachts worth it",
    a: "For the right traveler, yes. If you value design, privacy, rarity, and a more intimate experience at sea, this is one of the most compelling new luxury travel products entering the market."
  },
  {
    q: "When does Orient Express Corinthian launch",
    a: "The maiden voyages begin in May 2026."
  },
  {
    q: "How many suites does Orient Express Corinthian have",
    a: "It has 54 suites."
  },
  {
    q: "Where will Orient Express Yachts sail",
    a: "The initial focus is the Mediterranean, with itineraries published across that region. Orient Express also has destination content referring to both the Mediterranean and Caribbean more broadly."
  },
  {
    q: "Does every suite have a sea view",
    a: "The official site says each suite offers panoramic sea views."
  },
  {
    q: "Who is the chef for Orient Express Corinthian",
    a: "Culinary direction is led by Yannick Alléno."
  },
  {
    q: "How large are the suites",
    a: "Accor says the suites range from 485 square feet to 2,476 square feet."
  },
  {
    q: "How many guests are onboard",
    a: "The public materials emphasize 54 suites, and market positioning strongly suggests a low-density guest experience. Some third-party summaries reference approximately 110 guests, but the official pages surfaced here primarily emphasize the 54-suite positioning. Based on that, it is best to market the yacht around its low-density suite count unless you want to add guest count later from a confirmed official spec."
  },
  {
    q: "What makes it different from a traditional luxury cruise",
    a: "It is built around a more private, design-led, sailing-oriented, and immersive experience rather than a standard cruise model."
  },
  {
    q: "Can I combine this with a longer Europe trip",
    a: "Yes. This is often the smartest way to plan it, especially if you want to build pre- and post-stay experiences around the sailing."
  },
  {
    q: "When should I book",
    a: "As early as possible. Limited suite inventory and early demand make timing important."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-inner">

        <h2>Frequently Asked Questions About Orient Express Yachts</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="faq-question">
              {item.q}

              <span className="faq-icon">
                {active === index ? "−" : "+"}
              </span>
            </div>

            <div className={`faq-answer ${active === index ? "open" : ""}`}>
              {item.a}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}