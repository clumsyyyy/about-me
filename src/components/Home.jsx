import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Hi, I'm Owen.</h1>
            <p>
              I'm a beginner programmer / CS student aspiring to find new experience and knowledge about 
              programming and teamwork / management.
              <hr></hr>
              I am also into music education and have had experiences performing music. I also enjoy playing games, mostly racing games.
              <hr></hr>
              Connect with me via:
              <div className="col-12 col-sm-11 m-2">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-dark" href="https://github.com/clumsyyyy"><i className="fa fa-github"></i> GitHub</a>
                    <a role="button" className="btn btn-primary" href = "https://www.linkedin.com/in/owencwijaya/"><i className="fa fa-linkedin"></i> LinkedIn</a>
                    <a role="button" className="btn btn-dark instagram-button" href="https://instagram.com/"><i className="fa fa-instagram"></i> Instagram</a>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;