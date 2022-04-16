import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/myficture.jpg";
import { MdMenu } from "react-icons/md";


import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img} 
          alt=""
        ></img>
        <div className="about-info">
          <b className="info-title">Full Stack Software Developer</b>
          <div className="info">
            <br />
            An enthusiastic Full Stack Software Developer with a strong interest in technology and business, as well as extensive software development experience and a customer service background. <br /><br />
            Equipped with a Full Stack Software Developer certification from University of Birmingham and honed skills in HTML, CSS, JavaScript, React.js and Node.js <br /><br />
            A rational problem solver who has consistently found and corrected problems, maximising development while lowering risk and uncertainty.
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> 07365798261
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> Birmingham, UK
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> Tayyibmahmood2001@outlook.com
              </div>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
