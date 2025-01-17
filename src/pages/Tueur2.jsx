import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import PictureNumber from '../components/Button/PictureNumber';




const Tueur2 = () => {
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
          <Bubble text="Tous on un alibis, mais l’un d’entre eux est faux."/>
          <Bubble text="Qui ment ?"/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.firstCardContainer}>            
                <PictureNumber 
            onClick={() => navigate('/tueur3A')} 
            imageSrc="/assets/alibiA.png" 
            altText="Image du suspect A"/>
                <PictureNumber 
            onClick={() => navigate('/tueur3B')} 
            imageSrc="/assets/alibiB.png" 
            altText="Image du suspect B"/>
            </div>
            <div className={styles.secondCardContainer}>
              <PictureNumber 
            onClick={() => navigate('/tueur3C')} 
            imageSrc="/assets/alibiC.png" 
            altText="Image du suspect C"/>
            </div>
            
        </div>
      
    </div>
  )
}

export default Tueur2