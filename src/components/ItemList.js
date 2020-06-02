import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../actions/index";
import { fetchHeader } from "../actions/index";
import Items from "./Items";
import ItemsHeader from "./ItemsHeader";
import { v4 as uuid } from "uuid";

export default function ItemList() {
  const items = useSelector(state => state.items);
  const header = useSelector(state => state.header);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const itemHeader = header.map(head => {
    return <ItemsHeader header={head} key={uuid()} />;
  });
  const itemList = items.map(item => {
    return (
      <tr key={uuid()}>
        <Items key={uuid()} item={item} />
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>{itemHeader}</tr>
      </thead>
      <tbody>{itemList}</tbody>
    </table>
  );
}
