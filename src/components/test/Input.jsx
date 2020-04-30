import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "./action";
function Input() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeName(name));
    return () => {};
  }, [name]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          const val = e.target.value;
          setName(val);
        }}
      />
    </div>
  );
}

export default Input;
