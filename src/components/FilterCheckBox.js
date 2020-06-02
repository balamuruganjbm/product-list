import React, { useState, useEffect } from "react";
export default function FilterCheckBox({
  filterItem,
  handleFilterCheck,
  filteredArray,
  handleUncheckedFilter
}) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = e => {
    if (!isChecked) handleFilterCheck(filterItem);
    else handleUncheckedFilter(filterItem);
  };

  useEffect(() => {
    filteredArray.map(fil => {
      if (fil === filterItem) {
        setIsChecked(true);
      }
    });
  }, [isChecked]);
  return (
    <label>
      <input
        onChange={() => {
          handleChange();
        }}
        name={filterItem}
        checked={isChecked}
        value={filterItem}
        type="checkbox"
      />
      <span>{filterItem}</span>
    </label>
  );
}
