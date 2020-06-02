import React, { useState } from "react";
import ItemList from "./ItemList";
import Title from "./Title";
import FilterList from "./FilterList";
import "./Home.css";
export default function Home() {
  const [isFilterDisplay, displayFilterDisplay] = useState(false);
  const handleDisplay = () => {
    displayFilterDisplay(!isFilterDisplay);
  };
  return (
    <div className="Home">
      <header className="Header">
        <i className="fab fa-amazon" />
      </header>
      <div className="Body-Content">
        <aside className="Sidebar" />
        <div className="Container">
          <Title handleDisplay={handleDisplay} />
          <div className="Contents">
            <div className={isFilterDisplay ? "Half-Table" : "Full-Table"}>
              <ItemList />
            </div>
            <div className={isFilterDisplay ? "Filter-Content" : "No-Filter"}>
              <FilterList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
