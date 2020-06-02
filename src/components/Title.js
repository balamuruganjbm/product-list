import React from "react";
import "./Title.css";
export default function Title({ handleDisplay }) {
  return (
    <div className="Title">
      <h3>List Items</h3>
      <button onClick={() => handleDisplay()}>Filter</button>
    </div>
  );
}
