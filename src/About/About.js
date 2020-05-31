import React, { useEffect, useState } from "react";
import "../App.css";
import BioData from "./config";

const About = () => {
  const [bioData, setBioData] = useState(BioData.bio);

  useEffect(() => {
    // joining Date
    // 5th Dec 2016
    const dobMonth = 11;
    const dobDay = 5;
    const dobYear = 2016;

    //todays date
    const now = new Date();
    const nowDay = now.getDate();
    const nowMonth = now.getMonth();
    const nowYear = now.getFullYear();

    let ageyear = nowYear - dobYear;
    let agemonth = nowMonth - dobMonth - 1;
    if (agemonth <= 0) {
      ageyear--;
      agemonth = 12 + agemonth;
    }
    if (nowDay < dobDay) {
      agemonth--;
    }
    
    const msg = `${ageyear} year ${agemonth} months`;

    setBioData(BioData.bio.replace("||EXPERIANCE||", msg));
  }, []);

  return (
    // <!-- About Section -->
    <section
      className="page-section custom-background text-white mb-0"
      id="about"
    >
      <div className="container">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About Me
        </h2>

        {/* <!-- Icon Divider --> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        {/* <!-- About Section Content --> */}
        <div className="row">
          <div className="col-lg-12 mr-auto">
            <h3 className="text-center">Skills</h3>
            <p className="lead text-center">{BioData.Skills.toString()}</p>
          </div>

          <div className="col-lg-12 ml-auto">
            <h3 className="text-center">Bio</h3>
            <p className="lead text-center">{bioData}</p>
          </div>

          <div className="col-lg-12 ml-auto">
            <h3 className="text-center">Email</h3>
            <h4 className="lead text-center">{BioData.email}</h4>
          </div>
        </div>

        {/* <!-- About Section Button --> */}
        {/* <div className="text-center mt-4">
              <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
                <i className="fas fa-download mr-2"></i>
                Free Download!
              </a>
            </div> */}
      </div>
    </section>
  );
};

export default About;
