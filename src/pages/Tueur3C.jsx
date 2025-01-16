import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Tueur3C = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;

        // Permet uniquement les chiffres et limite à 2 caractères
        if (/^\d{0,2}$/.test(value)) {
            setInputValue(value);
        }
    };

    const validerCode = () => {
      const code = parseInt(inputValue, 10);

      switch (code) {
          case 45:
              navigate('/dialogueTueur3C'); 
              break;
          default:
              navigate('/dialogueTueurInexistant'); 
              break;
      }
  };
  return (
    <div>
      <Header />
      <img 
                src="/assets/progressBar3.svg" 
                alt="Barre de progression" 
                className={styles.progressBar} 
              />
        <p>Hop hop hop n'oubliez pas de rentrer le code qui se trouve sous le tableau</p>
        <img 
            src="/assets/alibiC.png" 
            alt="Image du tueur C" 
            className="carte" 
          />
        <div><input 
                    type="text" 
                    id="codeTableau" 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder="Code" 
                    maxLength={2} 
                /></div>
        <MainButton btn="Je valide" onClick={validerCode} />
        <SecondaryButton btn="Je choisis un autre tueur" onClick={() => navigate('/tueur2')} />
      
    </div>
  )
}

export default Tueur3C
