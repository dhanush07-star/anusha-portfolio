import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode,faBook,faBlog } from "@fortawesome/free-solid-svg-icons";
//<FontAwesomeIcon icon={} />
//<FontAwesomeIcon icon="fa-solid fa-blog" />

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my works</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Projects</h3>
              <p>I approach each project individually and always focus on the result.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Papers</h3>
              <p>Your website will be build with an new proven technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faBlog} size="2x" />
                {/* <FontAwesomeIcon className="icon" size="2x" icon="fa-solid fa-blog"  /> */}
                </div>

              <h3>Blogs</h3>
              <p>Your potential clients well see your services or product on Facebook</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faBook} size="2x" /></div>

              <h3>Thesis</h3>
              <p>Your service or product will appear at the top of the Google search</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
