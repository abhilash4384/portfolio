import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import portfolio from './assets/portfolio.jpg';
import Nav from './Navbar/Nav';
import Projects from './Projects/Projects';
import About from './About/About';

function App() {
  return (
    <div className="App">

      <Nav />

      {/* <!-- Masthead --> */}
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">

          {/* <!-- Masthead Avatar Image --> */}
          <img className="masthead-avatar mb-5" src={portfolio} alt="" />

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
          <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>

        </div>
      </header>

      <Projects />
      <About />
    </div>
  );
}

export default App;
