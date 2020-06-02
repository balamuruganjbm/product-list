import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";
import { fetchItems } from "../actions/index";
import { filterItems } from "../actions/index";
import { v4 as uuid } from "uuid";
import { items as Items } from "../data/customData";
export default function FilterList() {
  const header = useSelector(state => state.header);
  const [Filtereditem, setFiltertedItem] = useState([]);
  const dispatch = useDispatch();
  const uniqueItems = header.map(m => {
    if (m.filterable === true) {
      const uniqueItems = [...new Set(Items.map(item => item[m.name]))];
      return uniqueItems;
    }
  });
  const filterUniqueItems = uniqueItems.filter(item => item);
  const handleFilterCheck = name => {
    setFiltertedItem([...Filtereditem, name]);
  };
  const handleUncheckedFilter = name => {
    const newFiltereditem = Filtereditem.filter(item => {
      return item !== name;
    });
    setFiltertedItem([...newFiltereditem]);
  };
  useEffect(() => {
    if (Array.isArray(Filtereditem) && Filtereditem.length) {
      dispatch(filterItems(Filtereditem));
    } else {
      dispatch(fetchItems("FETCH_ITEMS"));
    }
    return;
  }, [Filtereditem, dispatch]);
  const filterList = filterUniqueItems.map(it => {
    return (
      <Fragment key={uuid()}>
        <Filter
          item={it}
          filteredArray={Filtereditem}
          handleFilterCheck={handleFilterCheck}
          handleUncheckedFilter={handleUncheckedFilter}
        />
        <br />
      </Fragment>
    );
  });

  return <div>{filterList}</div>;
}
