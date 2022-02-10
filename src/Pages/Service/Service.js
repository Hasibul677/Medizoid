import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Service.css";
import ServiceData from "./../../hooks/serviceData";

const Service = () => {
  const { services } = ServiceData();

  return (
    <div id="servicess" className="services pb-5">
      <Container>
        <div id="service" className="mt-5">
          <h1 className="text-center text-white text-uppercase display-3 service-title mb-5">
            services
          </h1>
          <Row className="g-3">
            {services.map((service) => (
              <DisplayData key={service.id} service={service}></DisplayData>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

function DisplayData({ service }) {
  const { id, serviceName, image, discription } = service;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="overflow-hidden">
        <Card.Img className="image" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fs-3 text-success">{serviceName}</Card.Title>
          <Card.Text>{discription.slice(0, 70)}...</Card.Text>
          <NavLink to={`/service/${id}`}>
            <button className="btn btn-outline-danger">Details</button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Service;
