import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const SimpleFooter = () => {
  return (
    <footer className="simple-footer bg-dark text-white text-center py-3">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2023 Your Website. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
