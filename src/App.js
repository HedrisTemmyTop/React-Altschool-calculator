import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Buttons";
function App() {
  const [currentClick, setcurrentClick] = useState("");
  const [clicked, setclicked] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [previousClick, setpreviousClick] = useState("");
  const btns = [
    "AC",
    "%",
    "+-",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
  ];
  const btnClickHandler = (e) => {
    if (currentClick.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setpreviousClick("");
    }

    currentClick
      ? setcurrentClick((pre) => pre + e.target.innerText)
      : setcurrentClick(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setclicked(currentClick);
  }, [currentClick]);

  useEffect(() => {
    setclicked("0");
  }, []);

  const operatorClickHandler = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currentClick === "") return;
    if (previousClick !== "") {
      equals();
    } else {
      setpreviousClick(currentClick);
      setcurrentClick("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(previousClick) / parseFloat(currentClick));
        break;

      case "+":
        cal = String(parseFloat(previousClick) + parseFloat(currentClick));
        break;
      case "X":
        cal = String(parseFloat(previousClick) * parseFloat(currentClick));
        break;
      case "-":
        cal = String(parseFloat(previousClick) - parseFloat(currentClick));
        break;
      default:
        return;
    }
    setclicked("");
    setpreviousClick(cal);
    setcurrentClick("");
  };

  const minusPlus = () => {
    if (currentClick.charAt(0) === "-") {
      setcurrentClick(currentClick.substring(1));
    } else {
      setcurrentClick("-" + currentClick);
    }
  };

  const percent = () => {
    previousClick
      ? setcurrentClick(
          String((parseFloat(currentClick) / 100) * previousClick)
        )
      : setcurrentClick(String(parseFloat(currentClick) / 100));
  };

  const reset = () => {
    setpreviousClick("");
    setcurrentClick("");
    setclicked("0");
  };

  const calculate = (btn) => {
    if (btn === "+" || btn === "-" || btn === "/" || btn === "X")
      return operatorClickHandler;
    if (btn === "=") return equals;
    if (btn === "AC") return reset;
    if (btn === "+-") return minusPlus;
    if (btn === "%") return percent;
    else return btnClickHandler;
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {clicked !== "" || clicked === "0" ? (
            <div>{clicked}</div>
          ) : (
            <div>{previousClick}</div>
          )}
        </div>
        {btns.map((btn, i) => {
          return (
            <Button
              key={i + btn}
              clickEv={calculate(btn)}
              btn={btn}
              className={btn === "/" || btn === "X" ? "btn light-gray" : "btn"}
            />
          );
        })}
        {/* <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn orange" onClick={operatorType}>
          /
        </div>
        <div className="btn" onClick={clickedNum}>
          7
        </div>
        <div className="btn" onClick={clickedNum}>
          8
        </div>
        <div className="btn" onClick={clickedNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          X
        </div>
        <div className="btn" onClick={clickedNum}>
          4
        </div>
        <div className="btn" onClick={clickedNum}>
          5
        </div>
        <div className="btn" onClick={clickedNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn" onClick={clickedNum}>
          1
        </div>
        <div className="btn" onClick={clickedNum}>
          2
        </div>
        <div className="btn" onClick={clickedNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn zero" onClick={clickedNum}>
          0
        </div>
        <div className="btn" onClick={clickedNum}>
          .
        </div>
        <div className="btn" onClick={equals}>
          =
        </div> */}
      </div>
    </div>
  );
}

export default App;
