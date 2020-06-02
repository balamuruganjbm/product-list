import React from "react";
import "./Filter.css";
import FilterCheckBox from "./FilterCheckBox";
import { v4 as uuid } from "uuid";
export default function Filter({
  item,
  handleFilterCheck,
  filteredArray,
  handleUncheckedFilter
}) {
  const filter = item.map(it => {
    return (
      <FilterCheckBox
        key={uuid()}
        filterItem={it}
        handleFilterCheck={handleFilterCheck}
        filteredArray={filteredArray}
        handleUncheckedFilter={handleUncheckedFilter}
      />
    );
  });
  return <div className="Filter-List">{filter}</div>;
}
