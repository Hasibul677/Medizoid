import React from "react";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about" className="aboutMargin">
      <Container>
        <Row className='g-3'>
          <Col xm={12} md={12} lg={6}>
            <h2 className="text-info mb-4">
              <i className="fs-6 text-info fas fa-circle"></i>
              <i className="fs-4 text-info fas fa-circle"></i>
              <i className="fs-2 text-info fas fa-circle"></i> About Us
            </h2>
            <h1>Patient satisfied with our Doctor</h1>
            <div className="d-flex my-4">
              <div className="year display-1">75</div>
              <div className="ms-3">
                <h5 className="fs-4 fw-bold">
                  years <br /> Working <br /> Experience
                </h5>
              </div>
            </div>
            <div className="mb-3">
              <p>
                Our group of hospitals provide a huge range of clinical services
                to people in east London and beyond. Over 2.5 million people
                look to our services to provide them with the healthcare . In
                east London and beyond. Over 2.5 . Nulla quis lorem ut libero
                malesuada feugiat.
              </p>
            </div>
            <Row className='g-3'>
              <Col xm={12} lg={6}>
                <button className="aboutIcon mb-3 p-2">
                  <i className="fs-1 text-danger fas fa-stethoscope"></i>
                </button>
                <Card className="p-2">
                  <h5>Proper Checkup</h5>
                  <p>
                    Our group of hospitals provide a huge range of clinical
                    services to people.
                  </p>
                </Card>
              </Col>
              <Col xm={12} lg={6}>
                <button className="aboutIcon mb-3 p-2">
                  <i className="fs-1 text-danger fas fa-user-md"></i>
                </button>
                <Card className="p-2">
                  <h5>Experienced Doctors</h5>
                  <p>
                    Our group of hospitals provide a huge range of clinical
                    services to people.
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xm={12} md={12} lg={6}>
            <img
              className="img-fluid rounded-pill"
              src="/images/about/1.jpg"
              alt=""
            />
          </Col>
        </Row>

        <div className="aboutMargin">
          <Row className='g-3'>
            <Col xm={12} md={12} lg={6}>
              <img
                className="img-fluid rounded"
                src="/images/about/2.jpg"
                alt=""
              />
            </Col>
            <Col xm={12} md={12} lg={6}>
              <h2 className="text-info mb-4">
                <i className="fs-6 text-info fas fa-circle"></i>
                <i className="fs-4 text-info fas fa-circle"></i>
                <i className="fs-2 text-info fas fa-circle"></i> Why Us
              </h2>
              <h1>Mission And Vision</h1>
              <h6 className="fw-bold my-3">
                Medical-GD is a leading, internationally renowned teaching
                hospital based in east London.
              </h6>
              <p>
                Our group of hospitals provide a huge range of clinical services
                to people in east London and beyond. Over 2.5 million people
                look to our services to provide them with the healthcare . In
                east London and beyond. Over 2.5 . Nulla quis lorem ut libero
                malesuada feugiat.
              </p>
              <button className="btn btn-info fw-bold mt-3">READ MORE</button>
            </Col>
          </Row>
        </div>
        <div className="aboutMargin">
          <Row className='g-3'>
            <Col xm={12} md={12} lg={6}>
              <h2 className="text-info mb-4">
                <i className="fs-6 text-info fas fa-circle"></i>
                <i className="fs-4 text-info fas fa-circle"></i>
                <i className="fs-2 text-info fas fa-circle"></i> SERVICE FEEDBACK
              </h2>
                <h1 className='mb-3'>Happy Clients Say</h1>
              <p className='aboutMargin'>Customer feedback is information provided by customers about their experience with a product or service. Its purpose is to reveal their level of satisfaction and help product, customer success, and marketing teams understand where there is room for improvement.</p>
          
            </Col>
            <Col xm={12} md={12} lg={6}>
            <img
                className="img-fluid rounded mb-2"
                src="/images/about/5.png"
                alt=""
              />
            </Col>
          </Row>
        </div>

        <div className='mt-5'>
          <Row className='g-3'>
          <h2 className="text-info mb-4">
                <i className="fs-6 text-info fas fa-circle"></i>
                <i className="fs-4 text-info fas fa-circle"></i>
                <i className="fs-2 text-info fas fa-circle"></i> NEWS FEEDS
              </h2>
              <h1>Read Our Blog</h1>
            <Col xm={12} md={12} lg={6}>
                <div>
                <img
                className="img-fluid rounded mb-2"
                src="/images/about/3.jpg"
                alt=""
              />
                </div>
                <small className='text-success'>ISABELLA</small>
                <h3>Bone Specialist Doctor</h3>
                <p>You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.</p>
                <button className="btn btn-info fw-bold mt-2">READ MORE</button>
            </Col>
            <Col xm={12} md={12} lg={6}>
            <div>
            <img
                className="img-fluid rounded mb-2"
                src="/images/about/4.jpg"
                alt=""
              />
            </div>
                <small className='text-success'>EMILY</small>
                <h3>Checkup A Child Bone Joint in Hospital</h3>
                <p>You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.</p>
                <button className="btn btn-info fw-bold mt-2">READ MORE</button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
