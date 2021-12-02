import { Container, Row, Col, Image } from "react-bootstrap";

import React from "react";

export default function ImageContainer(props) {
  const { path, alt_txt, imgShape } = props;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} md={4}>
          <Image className={`img-fluid ${imgShape}`} src={path} alt={alt_txt} />
        </Col>
      </Row>
    </Container>
  );
}

// rounded
// roundedCircle
// thumbnail
