import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <div id="header">
      <nav>
        <h1>Gallery Port <br/> by R. Mahat</h1>
        <ul>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className="intro-text">
        <h2>
          HELLO ! <br /> I'M XAVIER{" "}
        </h2>
        <div className="divider"></div>
        <p>
          Interface, brand <br /> & web design
        </p>
      </div>
      <IoIosArrowDown size={50}  className="scroller"/>
    </div>
  );
}

export default Header;
