import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import portfolio from './assets/portfolio.jpg';
import CustomNav from './Navbar/Nav';
import ProjectsList from './Projects/ProjectsList';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <div className="custom-background">
        <CustomNav />

        {/* <!-- Masthead --> */}
        <header className="masthead text-white text-center" id='portfolio'>
          <div className="container d-flex align-items-center flex-column">

            {/* <!-- Masthead Avatar Image --> */}
            <img className="masthead-avatar mb-5 rounded-circle" src={portfolio} alt="" />

            {/* <!-- Masthead Heading --> */}
            <h1 className="masthead-heading text-uppercase mb-0">Abhilashsinh Virat</h1>

            {/* <!-- Icon Divider --> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>

            {/* <!-- Masthead Subheading --> */}
            <p className="masthead-subheading font-weight-light mb-0">Software Developer</p>

          </div>
        </header>
      </div>

      <ProjectsList />
      <About />
    </div>
  );
}

export default App;
