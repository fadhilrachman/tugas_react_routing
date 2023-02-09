import React from "react";
import PagesLink from "../component/PagesLink";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <PagesLink />
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center">
            <Card className="m-5 col-5">
              <Card.Body>
                <Card.Body>
                  <Card.Title>About</Card.Title>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  maxime optio unde autem enim culpa, rem earum suscipit
                  cupiditate neque fugiat consequuntur commodi consequatur nemo
                  natus asperiores officia ullam doloremque.
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
