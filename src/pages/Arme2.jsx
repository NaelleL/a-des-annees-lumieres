import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import PictureNumber from '../components/Button/PictureNumber';




const Arme2 = () => {
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
          <Bubble text="Vous pensez l'avoir trouvée ?"/>
          <Bubble text="Cliquez sur l’arme du crime"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <div className={styles.cardContainerTwo}>
            <PictureNumber 
            onClick={() => navigate('/arme3A')} 
            imageSrc="/assets/image1Arme.webp" 
            altText="Image de l'arme A"/>
            <PictureNumber 
            onClick={() => navigate('/arme3B')} 
            imageSrc="/assets/image2Arme.png" 
            altText="Image de l'arme B"/>
        </div>
      
    </div>
  )
}

export default Arme2