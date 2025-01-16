import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Arme1 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
          src="/assets/progressBar1.svg" 
          alt="Barre de progression" 
          className={styles.progressBar} 
        />
      <h3>Trouvez l’arme</h3>
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Le dossier d’enquête contient une lettre, il est dans le musée."/>
          <Bubble text="L’avez-vous lu ?"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="J’ai lu la lettre" onClick={() => navigate('/arme2')} />
      
    </div>
  )
}

export default Arme1