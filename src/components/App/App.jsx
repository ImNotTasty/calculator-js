import { useEffect, useState } from "react";

import Calculator from "../Calculator/Calculator";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import EquationHistory from "../EquationHistory/EquationHistory";
import styles from "./App.module.css";

const timeForWelcome = 5000;

const App = () => {
  const [history, setHistory] = useState([]);
  const [isWelcomeOver, setIsWelcomeOver] = useState();

  const addToHistory = (equtionToAdd) => {
    if (equtionToAdd.isValidEquation()) {
      setHistory((oldHistory) => {
      const updatedHistory = [...oldHistory, equtionToAdd];
     return updatedHistory
    })}
  };

useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWelcomeOver(true);
    }, timeForWelcome);         
    return () => {
      clearTimeout(timeout)
    }
  });

  let app;
  if (isWelcomeOver) {
    app = (
      <div>
        <Calculator addToHistoryHandler={addToHistory} />{" "}
        <EquationHistory
          history={history.map((equation) => equation.symbols.join(" "))}
        />
      </div>
    );
  } else {
    app = <WelcomeMessage />;
  }

  return <div className={styles.App}>{app}</div>;
};

export default App;
