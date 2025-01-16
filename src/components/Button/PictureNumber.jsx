import React from 'react'
import styles from './Button.module.css'

const PictureNumber = ({ onClick, imageSrc, altText }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.pictureNumber}>
        <img 
          src={imageSrc} 
          alt={altText} 
          className={styles.map} 
        />
      </button>
    </div>
  );
}

export default PictureNumber
