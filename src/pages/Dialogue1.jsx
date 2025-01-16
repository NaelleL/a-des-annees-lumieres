import React from 'react';
import Bubble from '../components/Bubble';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';


const Dialogue1 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="AAAAH un fantôme ! Mais vous êtes la victime !?"/>
          <Bubble text="Votre dossier d’enquête vient d’être réouvert !"/>
        </div>
          <img 
            src="/src/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="Oui c’est moi. Dites m’en plus !" onClick={() => navigate('/dialogue2')} />
      
    </div>
  )
}

export default Dialogue1
