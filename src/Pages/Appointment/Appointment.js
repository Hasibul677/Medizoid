import React from "react";
import "./Appointment.css";
import { Col, Container, Row } from "react-bootstrap";

const Appointment = () => {
  return (
    <Container>
      <div id="appointment" className="booking margin-top mb-5">
        <div className="text-center mt-5 mb-5">
          <h5>WE ALWAY READY HELPS YOU</h5>
          <h1>
            <span className="text-danger">Book An</span> Appointment
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </p>
        </div>

        <Row className="px-5">
          <Col xs={6}>
            <input
              className="form-control text-danger w-100 h-50 rounded-pill my-4"
              type="text"
              placeholder="Name"
              required
            />
          </Col>
          <Col xs={6}>
            <input
              className="form-control text-danger w-100 h-50 rounded-pill my-4"
              type="email"
              placeholder="Email"
              required
            />
          </Col>
          <Col xs={6}>
            <input
              className="form-control text-danger w-100 h-50 rounded-pill my-4"
              type="number"
              placeholder="Phone"
              required
            />
          </Col>
          <Col xs={6}>
            <input
              className="form-control text-danger w-100 h-50 rounded-pill my-4"
              type="text"
              placeholder="Address"
              required
            />
          </Col>
          <Col xs={12}>
            <textarea
              className="form-control text-danger w-100 h-75 rounded my-4"
              type="text"
              placeholder="Message"
            ></textarea>
          </Col>
          <button className="w-25 m-auto px-3 py-2 rounded-pill btn-outline-danger my-5">
            Make and Appointment
          </button>
        </Row>
      </div>
    </Container>
  );
};

export default Appointment;
