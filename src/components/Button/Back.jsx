import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Back = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Cela revient à la page précédente dans l'historique
  };
    
  return (
    <div>
      <button onClick={handleBackClick} className={styles.backButton}>
        <img 
          src="/assets/retour.svg" 
          alt="Retour" 
          className="back-arrow" 
        />
      </button>
    </div>
  ) 
}

export default Back