import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';




const Dialogue7 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Tout au long de votre enquête, il y aura des marquages et des codes près des tableaux."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <img 
            src="/assets/imageMusee.svg" 
            alt="Image du musée" 
            className="imgMusee" 
          />
        <p>Voici un exemple de ce que vous pouvez trouver dans cette pièce.</p>
        <div className={styles.buttonContainer}>
            <MainButton btn="Je commence le jeu" onClick={() => navigate('/arme1')} />
        </div>
      
    </div>
  )
}

export default Dialogue7
