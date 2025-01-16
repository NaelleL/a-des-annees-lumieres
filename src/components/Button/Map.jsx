import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Map = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1); // Cela revient à la page précédente dans l'historique
  };
    
  return (
    <div>
      <button onClick={handleBackClick} className={styles.backButton}>
        <img 
          src="/assets/map.svg" 
          alt="Carte" 
          className="map" 
        />
      </button>
    </div>
  ) 
}

export default Map