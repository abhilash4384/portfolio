import React from 'react';
import '../App.css';
import { ListGroup } from 'react-bootstrap';
import BioData from './config';

const About = () => {
  return (
    // <!-- About Section -->
    <section className="page-section custom-background text-white mb-0" id="about">
      <div className="container">

        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>

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
            <h3 className='text-center'>Skills</h3>
            <p className='lead text-center'>{BioData.Skills.toString()}</p>
          </div>

          <div className="col-lg-12 ml-auto">
            <h3 className='text-center'>Bio</h3>
            <p className="lead text-center">{BioData.bio}</p>
          </div>

          <div className="col-lg-12 ml-auto">
            <h3 className='text-center'>Email</h3>
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
}

export default About;