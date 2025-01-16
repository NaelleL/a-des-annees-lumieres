import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';



const Dialogue5 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Adieu l’ami !</h1>
      <h2>Fin du jeu</h2>
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Votre fantôme disparaitra demain à 11h."/>
          <Bubble text="C’est dommage... Votre meurtre ne sera donc jamais résolu."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="Non ! Je change d’avis !" onClick={() => navigate('/dialogue3')} />
      
    </div>
  )
}

export default Dialogue5
