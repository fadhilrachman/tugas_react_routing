import React from "react";
import PagesLink from "../component/PagesLink";
import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <PagesLink />
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center">
            <Card className="m-5 col-5">
              <Card.Body>
                <Card.Body>
                  <Card.Title>Contact</Card.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur tenetur voluptate temporibus et cumque laboriosam
                  eligendi corporis unde repudiandae quae.
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
