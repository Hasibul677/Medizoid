import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctor.css";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  
  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);



  return (
    <div id="doctors" className="doctors margin-top pb-5">
      <Container className="doctor-info">
        <div className="text-center pt-5">
          <h5>MEET OUR DOCTORS</h5>
          <h1>
            <span className="text-danger">Professional &</span> Enthusiastic
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account.
          </p>
        </div>

        <Row className="g-4">
          {doctors.map((doctor) => (
            <DisplayData key={doctor.id} doctor={doctor}></DisplayData>
          ))}
        </Row>
      </Container>
    </div>
  );
};

function DisplayData({ doctor }) {
  const { id, name, post, img, description } = doctor;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="overflow-hidden text-center">
        <Card.Img className="image" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6 className="text-danger">{post} Specialist</h6>
          <Card.Text>{description.slice(0, 80)}...</Card.Text>
          <Link to={`/doctor/${id}`}>
            <button className="rounded-pill btn btn-outline-primary">
              Read More
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Doctor;
