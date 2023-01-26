import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Calltoaction.css';

const cardsdev = () => {
    return (
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
          <Col>
              <Card className="call-to-action text-center">
                <i className="fas fa-laptop"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Be recognized worldwide
                  </Card.Title>
                  <Card.Text>
                   Show case your skills to the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col>
              <Card className="call-to-action text-center">
                <i className="fas fa-search"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Search
                  </Card.Title>
                  <Card.Text>
                         Search for a topic and get started                   .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col>
              <Card className="call-to-action text-center">
                <i className="fas fa-comment-dots"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Contact Us
                  </Card.Title>
                  <Card.Text>
                    Stuck on where to start? Need help?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

           
          </Row>
        </Container>
      </div>
    );
};

export default cardsdev;