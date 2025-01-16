import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Complice1 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
          src="/assets/progressBar2.svg" 
          alt="Barre de progression" 
          className={styles.progressBar} 
        />
      <h3>Trouvez les avis de recherche</h3>
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Avez-vous repéré les avis de recherche du complice dissimulés dans la pièce ?"/>
          <Bubble text="Ils nous serviront pour l’étape suivante."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="J’ai vu les avis de recherche" onClick={() => navigate('/complice2')} />
      
    </div>
  )
}

export default Complice1