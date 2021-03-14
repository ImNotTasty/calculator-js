import styles from "./Display.module.css";

const Display = ({ currentEquation, result }) => (
  <div className={styles.displayScreen}>
    <h1 className={styles.currentEquation}>{currentEquation}</h1>
    <h1 className={styles.currentResult}>{result}</h1>
  </div>
);

export default Display;
