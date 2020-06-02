import { items } from "../data/customData";

export default (state = items, action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return items;
    case "FILTER_ITEMS":
      const toFilter = action.payload;
      const call = toFilter.map(fil => {
        return items.filter(it => {
          return Object.values(it).includes(fil);
        });
      });
      const newstate = call.flat();
      const uniquenewstate = Array.from(new Set(newstate.map(a => a.id))).map(
        id => {
          return newstate.find(a => a.id === id);
        }
      );
      return uniquenewstate;
    case "SORT_ITEMS":
      const cmp = function(x, y) {
        return x > y ? 1 : x < y ? -1 : 0;
      };
      const sorting = () => {
        if (action.payload.type === "ASC") {
          const newState = [...state].sort(function(a, b) {
            return cmp(a[action.payload.name], b[action.payload.name]);
          });

          return newState;
        } else {
          const newState = [...state].sort(function(a, b) {
            return -cmp(a[action.payload.name], b[action.payload.name]);
          });

          return newState;
        }
      };
      const newItem = sorting();
      return newItem;
    default:
      return state;
  }
};
