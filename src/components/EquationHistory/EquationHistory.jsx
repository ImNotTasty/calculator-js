import styles from "./EquationHistory.module.css";

const EquationHistory = ({ history }) => {
  const historyListItems = history.map((equation) => (
    <li key={equation + Math.random() * 100} className={styles.listItem}>
      {equation}
    </li>
  ));

  return (
    <div>
      <h1>History:</h1>
      <ul>{historyListItems}</ul>
    </div>
  );
};

export default EquationHistory;
