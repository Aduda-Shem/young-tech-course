import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Post from '../Post/Post';
import Subheader from '../Subheader/Subheader';
const Blog = () => {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);



    return (
      <div>
        <Subheader subtitle="Blog" key={4}></Subheader>

        <Container>
          <Row className="g-4 mtb-80">
            <Col xs={12} md={12}>
              <h2>Young Nation Tech Blogs</h2>
              <p>Welcome to our blog on tech development for young students! Technology is constantly evolving, and it's never too early to start learning about it. In this blog, we will explore various topics and resources that can help students below the age of 15 learn about technology in a fun and engaging way. From coding and programming to robotics and AI, we'll cover a wide range of topics that will help young students develop valuable skills for the future. Join us on this journey and let's discover the exciting world of technology together!</p>
            </Col>
            {
              posts.map( data => <Post posts={data} key={data.id}></Post>)
            }
          </Row>
        </Container>
      </div>
    );
};


export default Blog;
