import "./App.css";
import Calculator from "./components/Calculator";
import Buttons from "./components/ButtonsContainer/Buttons/Buttons";
import ButtonContainer from "./components/ButtonsContainer/ButtonsContainer";
import Display from "./components/Diplay";
import React, { useState } from "react";
const App = () => {
  const state = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "X", "+", "-", "."];
  const updateCalc = (value) => {
    const operator = ops.filter((op) => op === value);
    if (!operator.length > 0) setCalc(calc + value);
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push();
    }
  };
  return (
    <div className="App">
      <Calculator>
        <Display value={calc ? calc : "0"} />
        <ButtonContainer>
          {state.flat().map((btn, i) => {
            return (
              <Buttons
                value={btn}
                key={i}
                className={btn === "=" ? "Equals" : "Button"}
                click={(e) => updateCalc(e.target.innerText)}
              />
            );
          })}
        </ButtonContainer>
      </Calculator>
    </div>
  );
};

export default App;
