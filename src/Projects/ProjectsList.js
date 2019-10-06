import React, { useState } from 'react';
import cakeImag from '../assets/cake.png';
import { Modal, Button } from 'react-bootstrap';
import ProjectData from './config';
import ProjectItem from './ProjectItem';

const ProjectsList = () => {

  const [show, setShow] = useState(false);



  return (
    // <!-- Portfolio Section -->
    <section className="page-section portfolio" id="projects">
      <div className="container">

        {/* <!-- Portfolio Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>

        {/* <!-- Icon Divider --> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        {/* <!-- Portfolio Grid Items --> */}
        <div className="row">

          {
            ProjectData.map(project => {
              return (
                <ProjectItem setShow={() => setShow(true)} key={project._id} project={project} />
              )
            })
          }
        </div></div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* <!-- Portfolio Modal - Title --> */}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                {/* <!-- Icon Divider --> */}
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Modal - Image --> */}
                <img className="img-fluid rounded mb-5" src={cakeImag} alt="" />
                {/* <!-- Portfolio Modal - Text --> */}
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>

  );
}

export default ProjectsList;