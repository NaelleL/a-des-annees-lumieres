import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const DialogueTueur3A = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img 
                src="/assets/progressBar3.svg" 
                alt="Barre de progression" 
                className={styles.progressBar} 
              />
      <h3>Trouvez le tueur</h3>
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="En êtes-vous sûr ? "/>
          <Bubble text="Le duc de Duras était bien trop occupé. Il avait d’autres chevaux à fouetter..."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <MainButton btn="Je recommence" onClick={() => navigate('/Tueur2')} />
      
    </div>
  )
}

export default DialogueTueur3A