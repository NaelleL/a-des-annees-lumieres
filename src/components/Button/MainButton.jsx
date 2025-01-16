import React from 'react';
import styles from './Button.module.css';

const MainButton = ({onClick, btn}) => {
  return (
    <button
    className={`${styles.mainButton} ${styles.btn}`}
      onClick={onClick}>
      <p>{btn}</p>
    </button>
  );
}

export default MainButton