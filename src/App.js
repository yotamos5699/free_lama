import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Select from "react-select";
import { devState, colorStyles, Freelancers } from "./stylesNmock";
export default function App() {
  const [renderControler, setRenderController] = useState({
    renderDevState: true,
    renderCastumersScreen: false,
    renderFreeLancers: false,
    isReady: false,
  });
  const selectedScreen = useRef();
  const handleDropDownInput = (value, actionmMeta) => {
    console.log("****** event in handleDropDownInput ******", value);
    console.log("****** event in handleDropDownInput ******", actionmMeta);
    selectedScreen.current = value.label;
  };

  const handleOnClick = (e) => {
    console.log("****** clicked *******");
    console.log("selected screen ", selectedScreen);
    if (selectedScreen.current == "פרילנס") {
      setRenderController((prev) => {
        return { ...prev, renderDevState: false, renderFreeLancers: true };
      });
    }
    if (selectedScreen.current == "לקוח") {
      setRenderController((prev) => {
        return { ...prev, renderDevState: false, renderCastumersScreen: true };
      });
    }
    if (e.target.name == "fr" || e.target.name == "ca") {
      setRenderController((prev) => {
        return {
          ...prev,
          renderCastumersScreen: false,
          renderFreeLancers: false,
          renderDevState: true,
        };
      });
    }
  };
  return (
    <div className="App">
      {renderControler.renderDevState && (
        <div>
          <h1>בחר מסך</h1>
          <Select
            name="select-state"
            styles={colorStyles}
            className="drop-select"
            onChange={handleDropDownInput}
            options={devState}
          />
          <button onClick={handleOnClick}>המשך</button>
        </div>
      )}
      {renderControler.renderCastumersScreen && (
        <div>
          <div className="cas-nav">
            <h1>מסך לקוחות</h1>
            <button name="ca" onClick={handleOnClick}>
              חזור
            </button>
          </div>
        </div>
      )}
      {renderControler.renderFreeLancers && (
        <div>
          <div className="cas-nav">
            <h1>מסך פרילנסים</h1>
            <button name="fr" onClick={handleOnClick}>
              חזור
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
