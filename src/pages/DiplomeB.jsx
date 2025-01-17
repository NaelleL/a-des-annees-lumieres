import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DiplomeB = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Affaire classée !</h1>
      <h3>La vengeance est un plat qui se mange froid !</h3>
      <img 
          src="/assets/diplome.png" 
          alt="diplome" 
          className={styles.diplome} 
        />
      <p>Récupérez votre attestation auprès de l’écrivaine.</p>
        <MainButton btn="Je recommence le jeu" onClick={() => navigate('/')} />
        <SecondaryButton btn="Crédits" onClick={() => navigate('/credits')} />
      
    </div>
  )
}

export default DiplomeB