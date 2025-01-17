import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Fin1 = () => {
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
          <Bubble text="Une simple mauvaise critique de votre part..."/>
          <Bubble text="Et voilà que la comédienne principale de la troupe vous assassine !"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="Suite" onClick={() => navigate('/fin2')} />
      
    </div>
  )
}

export default Fin1