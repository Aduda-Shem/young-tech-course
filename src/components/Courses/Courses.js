import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Course from '../Course/Course';
import Subheader from '../Subheader/Subheader';
import './Courses.css';
const Courses = () => {


  const [courses, setCourses] = useState([]);
  useEffect(() => {
    /**Populating the Courses/Tutorials section with albums data from the JSON api - https://jsonplaceholder.typicode.com/albums */
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);


    return (
      <div>
        <Subheader subtitle="Course List" key={1}></Subheader>
        
        <Container>
          <Row className="g-4 mtb-80">
          <Col xs={12} md={12}>
                <h2>Development && Security training</h2>
                <p>
                Want to be the new game-changer in the tech industry? Select a tutorial and practically/theoritacally execute it. Be hand smart and brain smart as a young individual
                </p>
          </Col>
            {courses.map((item) => (
              <Course key={item.id} course={item}></Course>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Courses;