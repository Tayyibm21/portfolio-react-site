import React, { memo } from "react";

import "../styles/portfolio.scss";
import picker from "../images/translator.png";
import pickup from "../images/employee-tracker-img.jpg";
import note from "../images/ecommerce.jpg";
import paint from "../images/team-generator.jpg";
import word from "../images/password-generator.jpg";
import popol from "../images/green-hospital.jpg";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={word} alt="" />
            </div>
            <div className="title">PASSWORD GENERATOR</div>
            <div className="contents">
                Developed an application that allows users to generate random and secured passwords based on predefined criteria.  <br />
              <br /> Tech Utilised: HTML, CSS, JavaScript
            </div> 
            <a
              className="button"
              href="https://tayyibm21.github.io/javascript-fixing-code/"
            >
              Demo
            </a>
            <a
              className="button"
              href="https://github.com/Tayyibm21/javascript-fixing-code"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={picker}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">Weather app</div>
            <div className="contents">
            This application will allow the user to search for the weather in locations of there choice.
              <br />
              <br />
              Tech Utilised: HTML, CSS, JavaScript
            </div>
            
            <a
              className="button"
              href="https://tayyibm21.github.io/weather-app/"
            >
            Demo
            </a>
            <a
              className="button"
              href="https://github.com/Tayyibm21/weather-app
              "
            >
            Repository
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={note} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">E-COMMERCE BACKEND</div>  
            <div className="contents">
            Built the back end for an e-commerce site. Configured a working Express.js API to use Sequelize to interact with a MySQL database.
              <br />
              <br />
              Tech Utilised: Node.js, Express.js, MySQL, Sequalize
            </div>
            <a
              className="button"
              href=" https://drive.google.com/file/d/1XsefJRKRF3JIEdtK-2C9tJiSOEKSnETj/view?usp=sharing"
            >
              Demo
            </a>
            <a
              className="button"
              href="https://github.com/Tayyibm21/E-commerce-backend/tree/dev"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={pickup}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">EMPLOYEE MANAGEMENT SYSTEM</div>
            <div className="contents">
            Node.js command line-based employee management system with commands to add and manage Employees, Roles and Departments.
              <br />  <br />
              Tech Utilised: Node.js, Express.js, MySQL
            </div>
            <a className="button" href="https://drive.google.com/file/d/1qHT-aHTJVsA09oEqTTS4RNp1G_07H48-/view?usp=sharing">
              Demo
            </a>
            <a className="button" href="https://github.com/Tayyibm21/employee-tracker/tree/dev
">
              Repository
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={paint} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">EMPLOYEE PROFILE GENERATOR</div>
            <div className="contents">
            A node.js employee profile generator that allows you to generate a static HTML website with team data shown in cards. <br />
              <br /> 
            Tech Utilised: HTML, CSS, Node.js, Inquirer
            </div>{" "}
            <a
              className="button"
              href="https://watch.screencastify.com/v/pRSKSNkPmgIDJfeBlh4z"
            >
              Demo
            </a>
            <a
              className="button"
              href="https://github.com/Tayyibm21/team-builder/tree/dev
              "
            >
              Repository
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={popol} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">Day planner</div>
            <div className="contents">
            The user will be able to schedule and save there plans for the up coming weeks.<br />
              <br />
              <br /> Tech Utilised: HTML, CSS, JavaScript
            </div>
            <a
              className="button"
              href="https://tayyibm21.github.io/Day-planner/"
            >
              Demo
            </a>
            <a className="button" href="https://github.com/Tayyibm21/Day-planner">
              Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
