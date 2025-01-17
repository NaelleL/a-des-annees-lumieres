import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Fin3 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
          src="/assets/progressBar4.svg" 
          alt="Barre de progression" 
          className={styles.progressBar} 
        />
      <h3>Bravo ! Aucune fausses accusations !</h3>
        <div className={styles.cardContainer}>
          <div className={styles.firstCardContainer}>
            <img 
                src="/assets/reponseA.webp" 
                alt="Arme" 
                className={styles.suspect1} 
            />
            <img 
                src="/assets/reponse-B.webp" 
                alt="Meurtrier" 
                className={styles.suspect1} 
            />
          </div>
          <div className={styles.secondCardContainer}>
            <img 
                src="/assets/reponse-C.webp" 
                alt="Complice" 
                className={styles.suspect1} 
            />
          </div>

        </div>
        <MainButton btn="Je finis l'enquête" onClick={() => navigate('/choixFinal')} />
      
    </div>
  )
}

export default Fin3