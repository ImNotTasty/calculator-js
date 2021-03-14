import styles from "./DisplayScreen.module.css";

const DisplayScreen = ({ currentEquation, result }) => (
  <div className={styles.DisplayScreen}>
    <h1 className={styles.currentEquation}>{currentEquation}</h1>
    <h1 className={styles.currentResult}>{result}</h1>
  </div>
);

export default DisplayScreen;
