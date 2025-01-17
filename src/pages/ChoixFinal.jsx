import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const choixFinal = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
          src="/assets/progressBar4.svg" 
          alt="Barre de progression" 
          className={styles.progressBar} 
        />
      <h1>Choix final</h1>
      <h3>C’est l’heure.</h3>
      <p>Qu’allez-vous faire du meurtrier ?</p>
        <MainButton btn="Je me venge" onClick={() => navigate('/diplomeB')} />
        <MainButton btn="Je l'amène en justice" onClick={() => navigate('/diplomeA')} />
      
    </div>
  )
}

export default choixFinal