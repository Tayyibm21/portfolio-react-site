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
              href="https://mahmoudcali02.github.io/secure-password-generator/#index.html"
            >
              Demo
            </a>
            <a
              className="button"
              href="https://github.com/Mahmoudcali02/secure-password-generator"
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
            <div className="title">Languigi | Translator</div>
            <div className="contents">
            An application that allows users to translate their favorite phrases into the most popular languages in an instant.
              <br />
              <br />
              Tech Utilised: HTML, CSS, JavaScript, API
            </div>
            
            <a
              className="button"
              href="https://a89ball.github.io/Translator/"
            >
            Demo
            </a>
            <a
              className="button"
              href="https://github.com/a89ball/Translator"
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
            <div className="title">CLI | ECOMMERCE BACKEND</div>  
            <div className="contents">
            Built the back end for an e-commerce site. Configured a working Express.js API to use Sequelize to interact with a MySQL database.
              <br />
              <br />
              Tech Utilised: Node.js, Express.js, MySQL, Sequalize
            </div>
            <a
              className="button"
              href="https://drive.google.com/file/d/1XsefJRKRF3JIEdtK-2C9tJiSOEKSnETj/view?usp=sharing"
            >
              Demo
            </a>
            <a
              className="button"
              href="https://github.com/Mahmoudcali02/ecommerce-backend-HW13"
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
            <div className="title">CLI | EMPLOYEE MANAGEMENT SYSTEM</div>
            <div className="contents">
            Node.js command line-based employee management system with commands to add and manage Employees, Roles and Departments.
              <br />  <br />
              Tech Utilised: Node.js, Express.js, MySQL
            </div>
            <a className="button" href="https://drive.google.com/file/d/1nQyomj_KaaGxWQFMjNgRd6hHMRmwu7dL/view?usp=sharing">
              Demo
            </a>
            <a className="button" href="https://github.com/Mahmoudcali02/the-employee-tracker">
              Repository
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={paint} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">RANDOM EMPLOYEE PROFILE GENERATOR</div>
            <div className="contents">
            A node.js employee profile generator that allows you to generate a static HTML website with team data shown in cards. <br />
              <br /> 
            Tech Utilised: HTML, CSS, Node.js, Inquirer
            </div>{" "}
            <a
              className="button"
              href="https://drive.google.com/file/d/1Y_TJ_TQbjFeRc3BUzXB2Wa-5fsJ61uLu/view?usp=sharings"
            >
              Demo
            </a>
            <a
              className="button"
              href="https://github.com/Mahmoudcali02/random-team-generator-hw10"
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
            <div className="title">GREEN-COUNTRY-HOSPITAL</div>
            <div className="contents">
            A complete responsive hospital website design using html css and vanilla javascript.<br />
              <br />
              <br /> Tech Utilised: HTML, CSS, JavaScript
            </div>
            <a
              className="button"
              href="https://mahmoudcali02.github.io/green-country-hospital/#index.html"
            >
              Demo
            </a>
            <a className="button" href="https://github.com/Mahmoudcali02/green-country-hospital">
              Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
