import styles from "./CalculatorKey.module.css";

const CalculatorKey = ({ symbol, click }) => (
  <button className={styles.CalculatorKey} onClick={click}>
    {symbol}
  </button>
);

export default CalculatorKey;
