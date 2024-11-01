import React from "react";
import styles from "../styles/Result.module.css";
function Result() {
  return (
    <div className={styles.resultInnerContainer}>
      <h2>Your Result</h2>
      <div className={styles.resultNumberContainer}>
        <p className={styles.number}>76</p>
        <span>of 100</span>
      </div>
      <h3 className={styles.resultRating}>Great</h3>
      <p className={styles.resultText}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Result;
