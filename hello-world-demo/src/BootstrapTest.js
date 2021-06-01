import { Button, Alert, Card, CardGroup, Row } from "react-bootstrap";
import React, { Component } from "react";

export default class BootstrapTest extends Component {
  render() {
    return (
      <>
        <div>
          {/* <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container> */}
          <Button variant="secondary">Click ME</Button>
          <Alert variant="primary">This is test</Alert>
          <CardGroup>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img src="https://picsum.photos/100/100"></Card.Img>
              <Card.ImgOverlay>
                <Card.Title>Example</Card.Title>
                <Card.Text>This is just an example</Card.Text>
              </Card.ImgOverlay>
              <Button variant="primary">Read More...</Button>
            </Card>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img src="https://picsum.photos/200/300"></Card.Img>
              <Card.Body>
                <Card.Title>Example</Card.Title>
                <Card.Text>This is just an example</Card.Text>
              </Card.Body>
              <Button variant="primary">Read More...</Button>
            </Card>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img src="https://picsum.photos/200/300"></Card.Img>
              <Card.Body>
                <Card.Title>Example</Card.Title>
                <Card.Text>This is just an example</Card.Text>
              </Card.Body>
              <Button variant="primary">Read More...</Button>
            </Card>
          </CardGroup>
        </div>
      </>
    );
  }
}
