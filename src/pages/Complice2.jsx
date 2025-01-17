import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import PictureNumber from '../components/Button/PictureNumber';




const Complice2 = () => {
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
          <Bubble text="Il manque une personne sur l’un des deux tableaux."/>
          <Bubble text="Comparez ces deux images à leur tableau respectif."/>
        </div>
          <img 
            src="/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <div className={styles.cardContainerTwo}>
            <PictureNumber 
            onClick={() => navigate('/complice3A')} 
            imageSrc="/assets/image1Complice.png" 
            altText="Image du compice A"/>
            <PictureNumber 
            onClick={() => navigate('/complice3B')} 
            imageSrc="/assets/image2Complice.png" 
            altText="Image du complice B"/>
        </div>
      
    </div>
  )
}

export default Complice2