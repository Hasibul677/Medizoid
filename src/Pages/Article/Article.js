import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Article.css";

const Article = () => {
  return (
    <div className="margin-top">
      <Container>
        <div className="pt-5">
          <h1>
            <span className="text-danger">Tips &</span> Article
          </h1>
          <p>A Good Health Is The Best Wealth</p>
        </div>
        <Row>
          <Col xm={12} md={12} lg={4}>
            <Card>
              <div className="mb-3">
                <img className="img-fluid" src="/images/article/2.jpg" alt="" />
              </div>
              <a
                className="text-decoration-none"
                href="https://www.medicalnewstoday.com/articles/covid-19-what-do-we-know-about-the-c-1-2-variant"
                target="blank"
              >
                COVID-19: What do we know about the C.1.2? <br />
                Written by Annie Lennon
              </a>
            </Card>
          </Col>
          <Col xm={12} md={12} lg={4}>
            <Card>
              <div className="mb-3">
                <img className="img-fluid" src="/images/article/1.jpg" alt="" />
              </div>
              <a
                className="text-decoration-none"
                href="https://www.who.int/philippines/news/feature-stories/detail/20-health-tips-for-2020"
                target="blank"
              >
                20 health tips for 2021 <br />
                Written by WHO
              </a>
            </Card>
          </Col>
          <Col xm={12} md={12} lg={4}>
            <Row>
              <Col lg={12}>
                <button className="btn-outline-info w-100 mb-2 rounded">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.who.int/philippines/news/feature-stories/detail/20-health-tips-for-2020"
                    target="blank"
                  >
                    20 health tips for 2021 <br />
                    Written by WHO
                  </a>
                </button>
              </Col>
              <Col lg={12}>
                <button className="btn-outline-info w-100 mb-2 rounded">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.medicinenet.com/healthy_living/article.htm"
                    target="blank"
                  >
                    Health Tips for Healthy Living
                    <br />
                    Written by Charles Patrick Davis, MD, PhD
                  </a>
                </button>
              </Col>
              <Col lg={12}>
                <button className="btn-outline-info w-100 mb-2 rounded">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.rhodes.edu/admission-aid/admitted-students/health-forms/health-awareness/tips-maintaining-good-health"
                    target="blank"
                  >
                    Tips for Maintaining Good Health
                    <br />
                    Aricle
                  </a>
                </button>
              </Col>
              <Col lg={12}>
                <button className="btn-outline-info w-100 rounded">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.who.int/philippines/news/feature-stories/detail/20-health-tips-for-2020"
                    target="blank"
                  >
                    20 health tips for 2021 <br />
                    Written by WHO
                  </a>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Article;
