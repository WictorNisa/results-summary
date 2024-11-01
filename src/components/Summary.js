import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Summary.module.css";
import SummaryCard from "./SummaryCard";
function Summary() {
  const [data, setData] = useState(null);
  const colors = [
    "hsl(0, 100%, 67%)", // Light red
    "hsl(39, 100%, 56%)", // Orangey yellow
    "hsl(166, 100%, 37%)", // Green teal
    "hsl(234, 85%, 45%)", // Cobalt blue
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2, // Stagger each card's animation
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className={styles.summaryInnerContainer}
      initial="hidden" // Initial state
      animate="show" // Animate to the 'show' state
      variants={cardVariants} // Apply the variants
    >
      <h3>Summary</h3>
      {data &&
        data.map((dataValue, index) => (
          <SummaryCard
            key={dataValue.id}
            data={dataValue}
            color={colors[index]}
          />
        ))}

      <button>Continue</button>
    </motion.div>
  );
}

export default Summary;
