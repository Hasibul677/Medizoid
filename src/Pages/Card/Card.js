import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";

const Card = () => {
  return (
    <div className="margin-top mb-5">
      <Container>
        <div className="text-center pt-5 mb-5">
          <h5>PRICING LIST</h5>
          <h1>
            <span className="text-danger">Protect &</span> With Health Care Card
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account.
          </p>
        </div>

        <Row>
          <Col xm={12} md={12} lg={4}>
            <div className="shadow text-center p-3 mb-5">
              <h3>STANDARD</h3>
              <h4 className="text-danger mb-4">
                <sup>$</sup>29
              </h4>
              <p>Carpet Cleaning</p>
              <p>Upholstery Cleaning</p>
              <p>House Cleaning</p>
              <p>Apartment Cleaning</p>
              <p>Building Cleaning</p>
              <button className="mt-4 btn btn-outline-danger rounded-pill px-4">
                Choose Plan
              </button>
            </div>
          </Col>
          <Col xm={12} md={12} lg={4}>
            <div className="shadow-lg text-center p-3 premium mb-5">
              <h3>PREMIUM</h3>
              <h4 className="text-danger mb-4">
                <sup>$</sup>59
              </h4>
              <p>Carpet Cleaning</p>
              <p>Upholstery Cleaning</p>
              <p>House Cleaning</p>
              <p>Apartment Cleaning</p>
              <p>Building Cleaning</p>
              <button className="mt-4 btn btn-outline-danger rounded-pill px-4">
                Choose Plan
              </button>
            </div>
          </Col>
          <Col xm={12} md={12} lg={4}>
            <div className="shadow text-center p-3">
              <h3>ULTIMATE</h3>
              <h4 className="text-danger mb-4">
                <sup>$</sup>99
              </h4>
              <p>Carpet Cleaning</p>
              <p>Upholstery Cleaning</p>
              <p>House Cleaning</p>
              <p>Apartment Cleaning</p>
              <p>Building Cleaning</p>
              <button className="mt-4 btn btn-outline-danger rounded-pill px-4">
                Choose Plan
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;
