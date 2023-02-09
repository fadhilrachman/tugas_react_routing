import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PagesLink from "../component/PagesLink";
const Home = () => {
  return (
    <div>
      <PagesLink />
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center">
            <Card className="m-5 col-5">
              <Card.Body>
                <Card.Body>
                  <Card.Title>Profile</Card.Title>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis dolores deleniti autem voluptatibus, error earum.
                  Accusantium aliquid esse quod culpa, consequuntur quidem quasi
                  molestias rerum accusamus corrupti, sit blanditiis unde iure
                  delectus assumenda dolores quo debitis ipsam minima ab! Amet.
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
