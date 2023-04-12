import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

const Exercise = ({ exercise, exerciseTimeHandler }) => {
  const { id, title, description, images, age, time } = exercise;

  return (
    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.substring(0, 40)}</Card.Text>
          <p>for age {age}</p>
          <p>time required {time}</p>
          <Button onClick={() => exerciseTimeHandler(time)} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Exercise;
