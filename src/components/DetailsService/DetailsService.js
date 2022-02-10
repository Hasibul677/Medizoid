import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./DetailsService.css";
import { Link } from 'react-router-dom';

const DetailsService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { image, discription, serviceName } = service;
  const history = useHistory();
  

  // fetch for dynamic route
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        const findService = data.find((service) => service.id == serviceId);
        if (findService) {
          setService(findService);
        }
      });
  }, []);

  return (
    <div>
      <div className="serviceImage text-center">
        <h1 className="display-1 mt-5">Service Details</h1>
      </div>

      <Container>
        <Row className="py-5">
          <Col xm={12} md={6} lg={4}>
            <Card className="overflow-hidden">
              <Card.Img className="img-fluid image" variant="top" src={image} />
            </Card>
          </Col>
          <Col xm={12} md={6} lg={8}>
            <Card>
              <Card.Body>
                <Card.Title className="fs-3 text-success">
                  {serviceName}
                </Card.Title>
                <Card.Text>{discription}</Card.Text>
                <div className="mt-5">
                <Link to='/appointment' className='btn btn-outline-danger me-3'>Appointment</Link>
                <button onClick={()=> history.goBack()} className='btn btn-outline-danger'>Go Back</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsService;
