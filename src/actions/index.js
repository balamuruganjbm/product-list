export const fetchItems = () => {
  return {
    type: "FETCH_ITEMS"
  };
};

export const fetchHeader = () => {
  return {
    type: "FETCH_HEADER"
  };
};

export const sortItems = itemtosort => {
  return {
    type: "SORT_ITEMS",
    payload: itemtosort
  };
};
export const filterItems = itemtofilter => {
  return {
    type: "FILTER_ITEMS",
    payload: itemtofilter
  };
};
