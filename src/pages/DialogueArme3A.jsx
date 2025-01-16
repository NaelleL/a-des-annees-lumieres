import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DialogueArme3A = () => {
    const navigate = useNavigate();
  return (
    <div>
      <img 
        src="/assets/progressBar1.svg" 
        alt="Barre de progression" 
        className={styles.progressBar} 
      />
      <h3>Trouvez l’arme</h3>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Oui bravo, l’arme du crime a été volée à Phèdre. Elle avait la tête ailleurs avec toutes ces tragédies."/>
          <Bubble text="Il faut maintenant trouver le complice !"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="D'accord !" onClick={() => navigate('/arme3A')} />
    </div>
  )
}

export default DialogueArme3A