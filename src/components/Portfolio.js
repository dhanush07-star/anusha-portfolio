import React from "react";
import dummy from "../images/dummy.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import "react-popupbox/dist/react-popupbox.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img className="portfolio-image-popupbox" src={dummy} />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://google.com")}>https://google.com</a>
      </Modal.Body>
    
    </Modal>
  );
}

const Pofrfolio = () => {
  const [modalShow, setModalShow] = React.useState(false);
 
  return (
    <div  id="portfolio" className="portfolio-wrapper">
      <div className="container-fluid">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="d-flex justify-content-center">
          <div className="portfolio-image-box" variant="primary" onClick={() => setModalShow(true)}>
            <img className="portfolio-image" src={dummy} />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" variant="primary" onClick={() => setModalShow(true)} >
            <img className="portfolio-image" src={dummy} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" variant="primary" onClick={() => setModalShow(true)}  >
            <img className="portfolio-image" src={dummy} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" variant="primary" onClick={() => setModalShow(true)} >
            <img className="portfolio-image" src={dummy} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}

export default Pofrfolio;
