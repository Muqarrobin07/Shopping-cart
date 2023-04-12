import React, { useState } from "react";
import "./Bookmark.css";

const Bookmark = ({ exTime }) => {
  const breakTimes = [10, 20, 30, 40, 50];
  const [timeBreak, setTimeBreak] = useState(0);
  const [bgColor, setBgcolor] = useState();

  const breakTimeHandler = (time, i) => {
    setTimeBreak(time);
    setBgcolor(i);
  };
  const totalTime = exTime.reduce((prev, cur) => prev + cur, 0);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="user-image-container">
          <img
            src={
              "https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45837377.jpg"
            }
            alt=""
          />
        </div>
        <div>
          <h1>Zahid Hosain</h1>
          <p>icon Sydney,Australia</p>
        </div>
      </div>
      <div className="break-time-container d-flex justify-content-around">
        {breakTimes.map((breakTime, i) => (
          <p
            onClick={() => breakTimeHandler(breakTime, i)}
            className={`${
              bgColor === i ? "bg-danger" : "bg-warning"
            } p-2 break-time`}
          >
            {breakTime}
          </p>
        ))}
      </div>
      <div className="bg-success text-light ps-3 pt-1 pb-1 m-3">
        <h2>Exercise time:{totalTime} </h2>
      </div>
      <div className="bg-info ps-3 pt-1 pb-1 m-3">
        <h2>Break time: {timeBreak} </h2>
      </div>
    </div>
  );
};

export default Bookmark;
