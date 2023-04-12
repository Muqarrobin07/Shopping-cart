import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Bookmarks from "../Bookmarks/Bookmarks";
import Exercise from "../Exercise/Exercise";

const MainContainer = () => {
  const [exercises, setExercises] = useState([]);
  const [exTime, setExTime] = useState([]);
  const exerciseTimeHandler = (time) => {
    setExTime([...exTime, time]);
  };
  useEffect(() => {
    fetch(`fakeData.json`)
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <Row>
      <Col md={8}>
        <Row>
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              exerciseTimeHandler={exerciseTimeHandler}
            ></Exercise>
          ))}
        </Row>
      </Col>
      <Col md={4}>
        <Bookmarks exTime={exTime}></Bookmarks>
      </Col>
    </Row>
  );
};

export default MainContainer;
