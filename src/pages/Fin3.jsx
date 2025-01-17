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
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Voici nos trois suspects. Allez devant leurs tableaux."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <div>
            <img 
                src="/assets/tueur1.png" 
                alt="Suspect 1" 
                className={styles.suspect1} 
            />
            <img 
                src="/assets/tueur2.png" 
                alt="Suspect 2" 
                className={styles.suspect2} 
            />
            <img 
                src="/assets/tueur3.png" 
                alt="Suspect 3" 
                className={styles.suspect3} 
            />

        </div>
        <MainButton btn="Je finis l'enquête" onClick={() => navigate('/choixFinal')} />
      
    </div>
  )
}

export default Fin3