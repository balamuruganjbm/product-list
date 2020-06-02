import { header } from "../data/customData";

export default (state = header, action) => {
  switch (action.type) {
    case "FETCH_HEADER":
      return state;

    default:
      return state;
  }
};
