import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ exTime }) => {
  return (
    <>
      <div>Exercise Details</div>
      <Bookmark exTime={exTime}></Bookmark>
    </>
  );
};

export default Bookmarks;
