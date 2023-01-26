import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Subheader from '../Subheader/Subheader';
import aboutImage from './images/about-us.jpg';
import './About.css';

const About = () => {
    return (
      <div>
        <Subheader subtitle="About Us" key={3}></Subheader>

        <Container>
          <Row className="g-4 mtb-80">
            <Col xs={12} md={12}>
              <h2>About</h2>
              <p>Welcome to our organization, where we empower the next generation of tech leaders! We believe that it's never too early to start learning about technology and its potential to change the world. Our mission is to provide students under 15 with the skills and knowledge they need to excel in the tech industry. With hands-on learning opportunities and a team of experienced educators, we're dedicated to helping young students discover their passion for technology and preparing them for a future in the field.</p>
            </Col>

            <Col xs={12} md={7}>
              <Card className="about-content">
                <Card.Body>
                  <Card.Title className="">
                  <h2>Making coding and security as fun as possible</h2>
                  </Card.Title>
                  <Card.Text>
                  <p>Welcome to our organization, where we empower the next generation of tech leaders! We believe that it's never too early to start learning about technology and its potential to change the world. Our mission is to provide students under 15 with the skills and knowledge they need to excel in the tech industry. With hands-on learning opportunities and a team of experienced educators, we're dedicated to helping young students discover their passion for technology and preparing them for a future in the field.</p>
                  <p> Free site to learn and explore the tech industry</p>
                  <p>let's Explore</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} md={5}>
              <Card className="text-center">
                <Card.Body>
                <img src={aboutImage} className="w-100" alt="about-us" />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card className="text-center">
                <Card.Body>
                <img src={aboutImage} className="w-100" alt="about-us" />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={7}>
              <Card className="about-content">
                <Card.Body>
                  <Card.Title className="">
                  <h2>Making coding and security as fun as possible</h2>
                  </Card.Title>
                  <Card.Text>
                  <p>Welcome to our organization, where we empower the next generation of tech leaders! We believe that it's never too early to start learning about technology and its potential to change the world. Our mission is to provide students under 15 with the skills and knowledge they need to excel in the tech industry. With hands-on learning opportunities and a team of experienced educators, we're dedicated to helping young students discover their passion for technology and preparing them for a future in the field.</p>
                  <p> Free site to learn and explore the tech industry</p>
                  <p>let's Explore</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={7}>
              <Card className="about-content">
                <Card.Body>
                  <Card.Title className="">
                  <h2>Making coding and security as fun as possible</h2>
                  </Card.Title>
                  <Card.Text>
                  <p>Welcome to our organization, where we empower the next generation of tech leaders! We believe that it's never too early to start learning about technology and its potential to change the world. Our mission is to provide students under 15 with the skills and knowledge they need to excel in the tech industry. With hands-on learning opportunities and a team of experienced educators, we're dedicated to helping young students discover their passion for technology and preparing them for a future in the field.</p>
                  <p> Free site to learn and explore the tech industry</p>
                  <p>let's Explore</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} md={5}>
              <Card className="text-center">
                <Card.Body>
                <img src={aboutImage} className="w-100" alt="about-us" />
                </Card.Body>
              </Card>
            </Col>


          </Row>
        </Container>



      </div>
    );
};

export default About;