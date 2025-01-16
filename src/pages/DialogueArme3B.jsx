import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DialogueArme3B = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Mais non, voyons ! Une femme d'une telle intelligence ne perdrait jamais ses outils !"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="Je recommence" onClick={() => navigate('/arme2')} />
      
    </div>
  )
}

export default DialogueArme3B