import { motion } from "framer-motion";
import styles from "../styles/SummaryCard.module.css";

function SummaryCard({ data, color }) {
  const adjustAlpha = (hsl, alpha) => {
    // Get the hue, saturation, and lightness values
    const [hue, saturation, lightness] = hsl.match(/\d+/g).map(Number);

    // Return the HSLA string with the desired alpha
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  };

  const backgroundColor = adjustAlpha(color, 0.1); // 50% opacity for the background
  const borderColor = adjustAlpha(color, 0.7); // 70% opacity for the border, for example
  console.log(color);
  return (
    <motion.div
      className={styles.summaryCardContainer}
      style={{ backgroundColor: backgroundColor }}
      initial={{ opacity: 0, x: 50 }} // Start off-screen and transparent
      animate={{ opacity: 1, x: 0 }}    // Fade in and slide to position
      transition={{ duration: 0.5 }}  
    >
      <img src={process.env.PUBLIC_URL + data.icon} />
      <p style={{ color: color }}>{data.category}</p>
      <h4>
        <span className={styles.userScore}>{data.score} </span>
        <span className={styles.totalScore}>/ 100</span>
      </h4>
    </motion.div>
  );
}

export default SummaryCard;
