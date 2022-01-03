import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">

        <header className="jumbotron">
          <div className="container d-flex justify-content-center">
              <div className="row row-header">
                <div className="col-12 col-sm-12">
                  <h1 className = "font-weight-light">About Me</h1>
                  <p className = "font-weight-light">My life in quick words and short titles</p>
                </div>
              </div>
          </div>
        </header>

        <body>
          <div class = "row row-content align-items-center m-5">
              <div class = "col-12 col-sm-4 order-sm-first col-md-3">
                  <h3 className = "font-weight-light">Education</h3>
              </div>
              <div class = " col-12 col-sm-9">
                <ul>
                  <li>Junior High School: SMP Kristen Bina Kasih Jambi</li>
                  <li>Senior High School: SMA Xaverius 1 Jambi (Science Program)</li>
                  <li>Bachelor's Degree: Informatics Study Program, STEI ITB</li>
                  <li>Non-Academical Education:</li>
                    <ul>
                      <li>Merit Award for 8th Grade Piano Certification, LCM</li>
                      <li>Distinction Award for 5th Grade Piano Certification, LCM/ABRSM</li>
                    </ul>
                </ul>
              </div>
          </div>

          <div class = "row row-content align-items-center">
              <div class = "col-12 col-sm-4 order-sm-last col-md-3">
                  <h3 className = "font-weight-light offset-1">Previous Experiences</h3>
              </div>
              <div class = "col-12 col-sm-9">
                <ul>
                  <li>Head of IT Division for <a href = "https://theinitiator.tech">The IniTiator</a>, social act service for HMIF ITB's inauguration</li>
                  <li>Technical Officer Intern for Inkubator IT HMIF ITB</li>
                  <li>Silver Award for Piano Performance, 5th <a href = "http://www.asiaartsfestival.com/">Asia Arts Festival</a></li>
                  <li>Event operations for Mile Zero Project 2.0 and Aku Masuk ITB 2020</li>
                  <li>Project manager in various projects for college courses</li>
                  <li>Community manager at STEI Empayer, a student community by STEI 20 students for STEI 20 students</li>
                </ul>
              </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default About;