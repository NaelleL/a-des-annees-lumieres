import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/Button/MainButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import styles from './Page.module.css';

const Accueil = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className={styles.clockContainer}>
        <img 
              src="/src/assets/clock.svg" 
              alt="Chronomètre"  
              className="clock" 
            />
        <p>5 min</p>
      </div>
      <h1>À des années Lumières</h1>
      <h2>Escape game au temps du siècle des Lumières. Résout ton propre meurtre.</h2>
      <MainButton btn="Commencer le jeu" onClick={() => navigate('/dialogue1')} />
      <SecondaryButton btn="Crédits" onClick={() => navigate('/credits')} />
    </div>
  )
}

export default Accueil
