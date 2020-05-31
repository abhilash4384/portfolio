import React from 'react';

const ProjectItem = ({setShow, project}) => {
    return(
    <React.Fragment>
       
          <div className="col-md-6 col-lg-4">
            <div className="portfolio-item mx-auto" onClick={setShow}>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid"  src={require(`../assets/${project.imgName}`)} alt="" />
              <h3 style={{ textAlign:'center', marginTop: 5 }}>{project.title}</h3>
            </div>
          </div>

        </React.Fragment>
    );
}

export default ProjectItem;