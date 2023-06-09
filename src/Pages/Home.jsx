import React, { useState } from "react";
import pyramid from "../img/pyramid.jpg";
import { CookieFooter } from "../components/CookieFooter";
import { NavLink } from "react-router-dom";

const Home = ({ authenticated }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated)
  console.log(isAuthenticated);
  return (
    <>
      <div className="Home">
        <img src={pyramid} />
        <div className="projectDescription">
          <h1>Project Description</h1>
          <br></br>
          <div className="typing">
            <div className="text-cover"></div>
            <p className="typed-out">
              Fag el-Gamous (which means Way of the Water Buffalo) is a large
              and important cemetery in Egypt that has been under archeological
              investigation (primarily by BYU researchers) for over 25 years.
              The excavation has garnered international attention because of the
              interesting insights gained by studying the Fag el-Gamous mummies.
              Detailed background information on this site can be found in the
              academic article “Rethinking burial dates at a Graeco-Roman
              Cemetery: Fag el-Gamous, Fayoum, Egypt.” During multiple years of
              study, researchers have excavated more than 1,000 mummies and
              collected data in field notes, spreadsheets, and simple databases
              about each mummy’s location, physical orientation in the ground,
              burial depth, hair color, wrapping (including information about
              the textiles used), sex, age, bone (including skull and teeth)
              dimensions, items accompanying the mummy, and more. And, of
              course, there are many, many photographs. Offsite, researchers
              have performed a variety of analyses on the excavated items
              including carbon dating, DNA sequencing, and others.
            </p>
          </div>
        </div>
        <NavLink as={NavLink} to="/Summary" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Burial Records</span>
              <span className="link-title2 title">Burial Records</span>
            </div>
          </span>
          <div className="link-icon">
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </NavLink>
      </div>
      <div className="link-icon">
        <svg
          className="icon"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
        <svg
          className="icon"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </>
  );
};

export default Home;
