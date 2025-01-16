import React from 'react';
import styles from './Button.module.css';

const SecondaryButton = ({onClick, btn}) => {
  return (
    <button
    className={`${styles.secondaryButton} ${styles.btn}`}
      onClick={onClick}>
      <p>{btn}</p>
    </button>
  );
}

export default SecondaryButton