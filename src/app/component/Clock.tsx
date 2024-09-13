import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css"; // Import CSS module for styling

const formatNumber = (num: number) => num.toString().padStart(2, "0");

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = formatNumber(time.getHours());
  const minutes = formatNumber(time.getMinutes());

  return (
    <div className={styles.clock}>
      <div className={styles.flip}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>{hours}</div>
            <div className={styles.flipCardBack}>{hours}</div>
          </div>
        </div>
      </div>
      <div className={styles.flip}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>{minutes}</div>
            <div className={styles.flipCardBack}>{minutes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
