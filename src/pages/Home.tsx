import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>search zone</Col>
        <Col xs={8}>map</Col>
      </Row>
    </Container>
  );
}

export default Home;