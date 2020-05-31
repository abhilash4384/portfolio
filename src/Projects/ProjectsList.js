import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProjectData from './config';
import ProjectItem from './ProjectItem';

const ProjectsList = () => {

  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});

  const displayModalHandler = (project) => {
    let modalImage = require(`../assets/${project.imgName}`);

    setProjectDetails({...project, modalImage});
    setShow(true);
  }

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
                <ProjectItem setShow={() => displayModalHandler(project)} key={project._id} project={project} />
              )
            })
          }
        </div>
      </div>
      <Modal size='lg' show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* <!-- Portfolio Modal - Title --> */}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{projectDetails.title}</h2>
                {/* <!-- Icon Divider --> */}
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Modal - Image --> */}
                <img className="img-thumbnail rounded mb-5" style={{height: '200px', width: '200px'}} src={projectDetails.modalImage} alt="" />
                {/* <!-- Portfolio Modal - Text --> */}
                {
                  projectDetails.link && (
                  <p>
                  <a href={projectDetails.link} target='_blank' > Project Link </a>
                  </p>)
                }
                <p className="mb-5">
                
                {projectDetails.body}
                </p>

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