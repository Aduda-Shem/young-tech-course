import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Post.css';
const Post = (props) => {

    const { title, body } = props.posts;

    return (
      <Col xs={10} md={3}>
        <Card className="single-blog">
          <Card.Body>
            <Card.Title className="blog-title">{title}</Card.Title>
            <Card.Text>{body.substr(0, 100)}</Card.Text>
            <p className="details">Read more</p>
          </Card.Body>
        </Card>

      </Col>
    );
};

export default Post;