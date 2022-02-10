import React from "react";
import "./Health.css";
import { Col, Container, Row } from "react-bootstrap";

const Health = () => {
  return (
    <div className="margin-top">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className="mb-5">
            <h5>WHY CHOOSE HOPE MEDICAL</h5>
            <h1>
              <span className="text-danger">The Best</span> For Your Health
            </h1>
            <p className="mb-5">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
            <div className="parents rounded-circle">
              <div className="parent rounded-circle">
                <div className="health-info rounded-circle text-center">
                  <div className="icon rounded-circle d-flex justify-content-center align-items-center">
                    <i className="text-danger fa-3x far fa-address-book"></i>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="mt-5">MEDICAL COUNSELING</span>
                  </div>
                </div>

                <div className="health-info1 rounded-circle text-center">
                  <div className="icon rounded-circle d-flex justify-content-center align-items-center">
                    <i className="text-danger fa-3x fas fa-user-md"></i>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="mt-5">TOP LEVEL DOCTORS</span>
                  </div>
                </div>

                <div className="health-info2 rounded-circle text-center">
                  <div className="icon rounded-circle d-flex justify-content-center align-items-center">
                    <i className="text-danger fa-3x fas fa-ambulance"></i>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="mt-5">24 HOURS SERVICES</span>
                  </div>
                </div>

                <div className="health-info3 rounded-circle text-center">
                  <div className="icon rounded-circle d-flex justify-content-center align-items-center">
                    <i className="text-danger fa-3x fas fa-microscope"></i>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="mt-5">
                      MEDICAL <br /> FACILITES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <img
              className="w-75 text-center"
              src="/images/service/1.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Health;
