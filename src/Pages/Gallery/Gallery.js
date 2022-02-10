import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const allImage = [
    { id: "img1", image: "/images/gallery/1.jpg" },
    { id: "img2", image: "/images/gallery/2.jpg" },
    { id: "img3", image: "/images/gallery/3.jpg" },
    { id: "img4", image: "/images/gallery/4.jpg" },
    { id: "img5", image: "/images/gallery/5.jpg" },
    { id: "img6", image: "/images/gallery/6.jpg" },
    { id: "img7", image: "/images/gallery/7.jpg" },
    { id: "img8", image: "/images/gallery/8.jpg" },
  ];
  useEffect(() => {
    setImages(allImage);
  }, []);
  return (
    <div className="margin-top">
      <Container>
        <div className="pt-5">
          <h1>
            <span className="text-danger">Gallery</span>
          </h1>
          <p>
            Be Happy In The Front Of People Who Don't Like You, "It Kills Them"
          </p>
        </div>
        <Row className="g-4">
          {images.map((image) => (
            <DisplayData key={image.id} images={image}></DisplayData>
          ))}
        </Row>
      </Container>
    </div>
  );
};

function DisplayData({ images }) {
  const { image } = images;
  return (
    <Col xm={12} md={6} lg={3}>
      <Card className="overflow-hidden">
        <img className="image" src={image} alt="" />
      </Card>
    </Col>
  );
}

export default Gallery;
