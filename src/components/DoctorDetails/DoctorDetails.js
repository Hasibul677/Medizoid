import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const history = useHistory();
  const [doctor, setDoctor] = useState({});
  const { img, name, descrip, post, email, phone } = doctor;

  //dynamic route
  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => {
        const findDoctor = data.find((doctor) => doctor.id == doctorId);
        if (findDoctor) {
          setDoctor(findDoctor);
        }
      });
  }, []);
  return (
    <div>
      <div className="serviceImage text-center">
        <h1 className="display-1 mt-5">About Doctor</h1>
      </div>

      <Container>
        <Row className="py-5">
          <Col xm={12} md={6} lg={4}>
            <Card className="overflow-hidden">
              <Card.Img className="img-fluid image" variant="top" src={img} />
            </Card>
          </Col>
          <Col xm={12} md={6} lg={8}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-3 text-success">{name}</Card.Title>
                <Card.Text>{post} Specialist</Card.Text>
                <Card.Text>{descrip}</Card.Text>
                <Card.Text>{phone}</Card.Text>
                <Card.Text>{email}</Card.Text>
                <div className="mt-5">
                  <Link
                    to="/appointment"
                    className="btn btn-outline-danger me-3"
                  >
                    Appointment
                  </Link>
                  <button
                    onClick={() => history.goBack()}
                    className="btn btn-outline-danger"
                  >
                    Go Back
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoctorDetails;
