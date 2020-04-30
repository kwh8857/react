import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const nameRedux = useSelector((state) => state.nameRedux);
  return <div>{nameRedux.name}</div>;
}

export default Display;
