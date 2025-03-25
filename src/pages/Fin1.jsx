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
          <Bubble text="J’avoue tout ! C’est moi qui vous ai assassiné !"/>
          <Bubble text="En même temps, votre mauvaise critique allait ruiner ma carrière de comédienne."/>
        </div>
          <img 
            src="/assets/contesse.svg" 
            alt="Contesse" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="Suite" onClick={() => navigate('/fin2')} />
      
    </div>
  )
}

export default Fin1