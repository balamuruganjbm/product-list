import React from "react";
import { useDispatch } from "react-redux";
import { sortItems, fetchItems } from "../actions/index";
import "./ItemsHeader.css";
export default function ItemsHeader(props) {
  const { name, sortable } = props.header;
  const dispatch = useDispatch();
  return (
    <th>
      <label
        onClick={() => {
          dispatch(fetchItems("FETCH_ITEMS"));
        }}
      >
        {name}
      </label>
      {sortable ? (
        <>
          <button
            className="Sort-btn"
            onClick={() => dispatch(sortItems({ name: name, type: "ASC" }))}
          >
            <i className="fas fa-sort-amount-up-alt" />
          </button>
          <button
            className="Sort-btn"
            onClick={() => dispatch(sortItems({ name: name, type: "DESC" }))}
          >
            <i className="fas fa-sort-amount-down-alt" />
          </button>
        </>
      ) : null}
    </th>
  );
}
