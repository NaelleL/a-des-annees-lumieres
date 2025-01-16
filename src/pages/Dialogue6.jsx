import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';

const Dialogue6 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.bubbleMan}>
            <div>
            <Bubble text={`Quand vous cliquez sur <img src="/src/assets/man.svg" alt="Logo" class="logo" /> pour faire ça`} />
            </div>
            <img 
                src="/src/assets/man.svg" 
                alt="Homme" 
                className="man" 
            />
            </div>
            <img 
                src="/src/assets/planImage.svg" 
                alt="Plan du musée" 
                className="planImage" 
            />
            <div className={styles.buttonContainer}>
                <MainButton btn="J'ai compris" onClick={() => navigate('/dialogue7')} />
            </div>
        </div>
      
    </div>
  )
}

export default Dialogue6
