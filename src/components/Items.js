import React from "react";
import { v4 as uuid } from "uuid";
export default function Items(props) {
  const itemDetails = Object.entries(props.item).map(([key, value]) => {
    return <td key={uuid()}>{value}</td>;
  });

  return <>{itemDetails}</>;
}
