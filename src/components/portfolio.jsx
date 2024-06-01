import React from "react";
import PortfolioOne from "../assets/images/portfolio-1.jpg";
import PortfolioTwo from "../assets/images/portfolio-2.jpg";
import PortfolioThree from "../assets/images/portfolio-3.jpg";
import PortfolioFour from "../assets/images/portfolio-4.jpg";
import PortfolioFive from "../assets/images/portfolio-5.jpg";
import PortfolioSix from "../assets/images/portfolio-6.jpg";

function Portfolio() {
  return (
    <div id="portfolio">
      <p>THE DESIGN PORTFOLIO OF JOHN DOE</p>
      <button>MY PORTFOLIO</button>
      <div className="portfolio-gallery">
        <section className="first-area">
          <img src={PortfolioOne} />
          <div className="column-flex">
            <img src={PortfolioTwo} />
            <img src={PortfolioThree} />
          </div>
        </section>
        <section className="second-area">
          <img src={PortfolioFour} />
          <img src={PortfolioFive} />
          <img src={PortfolioSix} />
        </section>
      </div>
      <p>MY CURRENT STATUS</p>
      <button>CONTACT ME</button>
      <p className="sm-fs"><strong>Available</strong> and accepting freelance projectss</p>
    </div>
  );
}

export default Portfolio;
