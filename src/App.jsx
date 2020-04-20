import React, { useState, useEffect } from "react";
import "./static/css/index.css";
import images from "./static/img";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [firstcheck, setfirstcheck] = useState(false);
  const [twcheck, settwcheck] = useState(false);
  const [thcheck, setthcheck] = useState(false);
  const [touch1, settouch1] = useState(false);
  const [touch2, settouch2] = useState(false);
  useEffect(() => {
    if (touch1) {
      setfirstcheck(isChecked);
      settwcheck(isChecked);
      setthcheck(isChecked);
      settouch2(false);
    }
    return () => {};
  }, [isChecked, touch1]);
  useEffect(() => {
    if (touch2) {
      setIsChecked(Boolean(firstcheck * twcheck * thcheck));
      settouch1(false);
    } else {
    }

    return () => {};
  }, [firstcheck, twcheck, thcheck, touch2]);

  return (
    <div className="App">
      <div className="policy">
        <div
          className="pol_el"
          onClick={() => {
            setIsChecked(!isChecked);
            settouch1(true);
            console.log(`when before useEffect ${isChecked}`);
          }}
        >
          <div className="assets">
            {isChecked ? (
              <img src={images.fillCheck} alt="" />
            ) : (
              <img src={images.unfillCheck} alt="" />
            )}
          </div>
          <div className="title">전체동의하기</div>
        </div>
        <hr />
        <div
          className="pol_el"
          onClick={() => {
            setfirstcheck(!firstcheck);
            settouch2(true);
          }}
        >
          <div className="assets">
            {firstcheck ? (
              <img src={images.fillCheck} alt="" />
            ) : (
              <img src={images.unfillCheck} alt="" />
            )}
          </div>
          <div className="title">약관1</div>
        </div>
        <div
          className="pol_el"
          onClick={() => {
            settwcheck(!twcheck);
            settouch2(true);
          }}
        >
          <div className="assets">
            {twcheck ? (
              <img src={images.fillCheck} alt="" />
            ) : (
              <img src={images.unfillCheck} alt="" />
            )}
          </div>
          <div className="title">약관2</div>
        </div>
        <div
          className="pol_el"
          onClick={() => {
            setthcheck(!thcheck);
            settouch2(true);
          }}
        >
          <div className="assets">
            {thcheck ? (
              <img src={images.fillCheck} alt="" />
            ) : (
              <img src={images.unfillCheck} alt="" />
            )}
          </div>
          <div className="title">약관3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
