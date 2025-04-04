import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Close = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Cela revient à la page précédente dans l'historique
  };
    
  return (
    <div>
      <button onClick={handleBackClick} className={styles.backButton}>
        <img 
          src="/assets/close.svg" 
          alt="Fermer" 
          className="back-arrow" 
        />
      </button>
    </div>
  ) 
}

export default Close