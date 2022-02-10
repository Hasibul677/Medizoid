import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="text-white mt-5 py-3 bg-dark">
      <Container>
        <Row className="gy-4">
          <Col sm={12} md={12} lg={5}>
            <div className="fs-1 mb-4">
              <i className="fas fa-stethoscope"></i>
              <span className="text-info">Medi</span>zoid
            </div>
            <p>
              I must explain to you how at mistakidea of denouncing pleasure and
              praisi pain was born and I will give you.
            </p>
            <div className="mt-4">
              <button className="me-3 btn-danger">
                <i className="fa-2x text-white fab fa-facebook-square"></i>
              </button>
              <button className="me-3 btn-danger">
                <i className="fa-2x text-white fab fa-twitter"></i>
              </button>
              <button className="me-3 btn-danger">
                <i className="fa-2x text-white fab fa-instagram-square"></i>
              </button>
              <button className="me-3 btn-danger">
                <i className="fa-2x text-white fab fa-youtube"></i>
              </button>
            </div>
          </Col>
          <Col sm={12} md={12} lg={3}>
            <h3 className="mb-4">Information</h3>
            <div>
              About Hospital <br />
              Our Service <br />
              Our Feature <br />
              Health News <br />
              Cleaning Tips
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <h3 className="mb-4">Contact Info</h3>
            <div>
              <div className="mb-2">
                <i className="me-2 fs-4 fas fa-street-view"></i>Sector-10,
                Uttara Dhaka-1230
              </div>
              <div className="mb-2">
                <i className="me-2 fs-4 fas fa-phone-alt"></i>+880 1795443674
              </div>
              <div>
                <i className="me-2 fs-4 fas fa-envelope-open-text"></i>
                medizoid.health@gmail.com
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <hr />
      </Container>

      <div className="text-center mt-5">
        <i className="fa fa-copyright"></i>Copyright 2021 || Develop by Md
        Hasibul Hasan
      </div>
    </div>
  );
};

export default Footer;
