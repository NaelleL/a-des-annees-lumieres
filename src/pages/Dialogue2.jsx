import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';



const Dialogue2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.bubbleMan}>
        <div>
          <Bubble text="Il y a deux siècles, vous avez été retrouvé(e) mort(e) dans des circonstances étranges !"/>
        </div>
          <img 
            src="/src/assets/man.svg" 
            alt="Homme" 
            className="man" 
          />
        </div>
        <SecondaryButton btn="Comment ça !?" onClick={() => navigate('/dialogue3')} />
      
    </div>
  )
}

export default Dialogue2
