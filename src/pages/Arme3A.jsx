import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Arme3A = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
        <p>Hop hop hop n'oubliez pas de rentrer le code qui se trouve sous le tableau</p>
        <img 
            src="/src/assets/image1Arme.webp" 
            alt="Carte" 
            className="carte" 
          />
        <div><input type="text" id="codeTableau"></input></div>
        <MainButton btn="Je valide" onClick={() => navigate('/dialogue6')} />
        <SecondaryButton btn="Je choisis une autre arme" onClick={() => navigate('/arme2')} />
      
    </div>
  )
}

export default Arme3A
