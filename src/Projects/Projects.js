import  React from 'react';
import cakeImag from '../assets/cake.png'

const Projects = () => {
    return(
        // <!-- Portfolio Section -->
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
      
            {/* <!-- Portfolio Section Heading --> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      
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
      
              {/* <!-- Portfolio Item 1 --> */}
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={cakeImag} alt="" />
                </div>
              </div>
      
             
            </div>
            {/* <!-- /.row --> */}
      
          </div>

          {/* <!-- Portfolio Modal 1 --> */}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <div className="modal-body text-center">
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
                <button className="btn btn-primary" href="#" data-dismiss="modal">
                  <i className="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        </section>
      
    );
}

export default Projects;