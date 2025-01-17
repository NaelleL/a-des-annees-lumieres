import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';
import Back from '../components/Button/Back';
import Close from '../components/Button/Close';


const PopUpMap = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.contentPopUpContainer}>
      <div className={styles.contentContainerClose}>
        <Close />
      </div>
      <img 
        src="/assets/planImage.svg" 
        alt="Plan du musée" 
        className="planImage" 
      />
      
    </div>
  )
}

export default PopUpMap
