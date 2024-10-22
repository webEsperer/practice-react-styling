import React from 'react';

import { Button } from "./../src/components/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";

const Task02 = () => {
  // const isActive = true;
  // const isDisabled = false;
  return (
    <Row>
      <Col>
        <RBButton variant="secondary" size="lg" active>
          Button!
        </RBButton>
      </Col>
      <Col>
        <Button variant="secondary" size="lg">
          Button!
        </Button>
      </Col>
    </Row>
  );
};

export default Task02;

