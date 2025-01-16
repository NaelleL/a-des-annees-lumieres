import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';



const Arme3B = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Remontez dans votre passé pour trouver l’arme, le tueur et son complice !"/>
          <Bubble text="Et soyez un fantôme libre !"/>
        </div>
          <img 
            src="/src/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="D’accord !" onClick={() => navigate('/dialogue6')} />
      
    </div>
  )
}

export default Arme3B
