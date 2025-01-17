import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';
import SecondaryButton from '../components/Button/SecondaryButton';

const Dialogue6 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.bubbleMan}>
            <div>
            <Bubble text={`Lorsque vous cliquez sur l'icône "carte", une fenêtre s’ouvre et affiche le plan de notre salle.`} />
            </div>
            <img 
                src="/assets/man.svg" 
                alt="Homme" 
                className="man" 
            />
            </div>
            <img 
                src="/assets/planImage.svg" 
                alt="Plan du musée" 
                className="planImage" 
            />
                <SecondaryButton btn="J'ai compris" onClick={() => navigate('/dialogue7')} />
        </div>
    </div>
  )
}

export default Dialogue6
