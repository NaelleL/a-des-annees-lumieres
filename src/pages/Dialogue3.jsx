import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';




const Dialogue3 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Mais jusqu’à aujourd’hui personne n’a jamais pu résoudre votre meurtre."/>
          <Bubble text="Vous avez le choix ..."/>
        </div>
          <img 
            src="/src/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <div className={styles.buttonContainer}>
            <MainButton btn="Je veux découvrir la vérité" onClick={() => navigate('/dialogue4')} />
            <MainButton btn="Je disparais à tout jamais" onClick={() => navigate('/dialogue5')} />
        </div>
      
    </div>
  )
}

export default Dialogue3
