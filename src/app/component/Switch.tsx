// components/Switch.tsx
import React from "react";
import styles from "./Switch.module.css";

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div className={styles.switch} onClick={handleToggle}>
      <div
        className={`${styles.slider} ${
          isOn ? styles.sliderOn : styles.sliderOff
        }`}
      />
    </div>
  );
};

export default Switch;
