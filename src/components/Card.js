import React from "react";
import styles from "../styles/Card.module.css";
import Result from "./Result";
import Summary from "./Summary";

function Card() {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.resultContainer}>
        <Result/>
      </div>
      <div className={styles.summaryContainer}>
        <Summary/>
      </div>
    </section>
  );
}

export default Card;
