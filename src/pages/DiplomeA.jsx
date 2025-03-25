import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DiplomeA = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Affaire classée !</h1>
      <h3>Vous êtes un super justicier !</h3>
      <img 
          src="/assets/diplome.png" 
          alt="diplome" 
          className={styles.diplome} 
        />
      <p>Venez récupérer votre attestation!</p>
        <MainButton btn="Je recommence le jeu" onClick={() => navigate('/')} />
        <SecondaryButton btn="Crédits" onClick={() => navigate('/credits')} />
      
    </div>
  )
}

export default DiplomeA