import React from "react";
import "./Subscribe.css";
import { Col, Container, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div className="margin-top py-5 subscribe">
      <Container className="sub-info py-5">
        <Row className="g-4">
          <Col xs={12} md={6}>
            <h1>Subscribe to Newsletter</h1>
            <h5>
              Get healthy news and solutions to your problems from our experts!
            </h5>
          </Col>

          <Col xs={12} md={6}>
            <input
              className="form-control rounded  w-75"
              type="email"
              placeholder="Enter Your Email"
            />
            <br />
            <button className="btn btn-danger rounded px-4">Subscribe</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
