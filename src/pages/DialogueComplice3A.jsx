import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DialogueComplice3A = () => {
    const navigate = useNavigate();
  return (
    <div>
      <img 
        src="/assets/progressBar2.svg" 
        alt="Barre de progression" 
        className={styles.progressBar} 
      />
      <h3>Trouvez le complice</h3>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Oui c’est bien le vicomte ! Il était allé se cacher à Constantinople !"/>
          <Bubble text="Il faut maintenant trouver le tueur."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="D'accord !" onClick={() => navigate('/tueur1')} />
    </div>
  )
}

export default DialogueComplice3A