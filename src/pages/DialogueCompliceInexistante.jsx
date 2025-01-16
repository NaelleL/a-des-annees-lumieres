import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DialogueCompliceInexistante = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
                src="/assets/progressBar2.svg" 
                alt="Barre de progression" 
                className={styles.progressBar} 
              />
      <h3>Trouvez le complice</h3>
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Euh...
          Je crois que ce code n’existe pas."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="Je recommence" onClick={() => navigate('/complice2')} />
      
    </div>
  )
}

export default DialogueCompliceInexistante