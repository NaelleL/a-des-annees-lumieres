import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Fin2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
          src="/assets/progressBar4.svg" 
          alt="Barre de progression" 
          className={styles.progressBar} 
        />
      <h3>La révélation</h3>
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Elle a payé le sultan pour voler le glaive et vous tuer dans votre sommeil."/>
          <Bubble text="Cette garce !"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="Suite" onClick={() => navigate('/fin3')} />
      
    </div>
  )
}

export default Fin2