import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Arme3A = () => {
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
              navigate('/dialogueArme3A'); 
              break;
          case 27:
          case 12:
              navigate('/dialogueArme3B'); 
              break;
          default:
              navigate('/dialogueArmeInexistante'); 
              break;
      }
  };
  return (
    <div>
      <Header />
        <p>Hop hop hop n'oubliez pas de rentrer le code qui se trouve sous le tableau</p>
        <img 
            src="/assets/image1Arme.webp" 
            alt="Image de l'arme A" 
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
        <SecondaryButton btn="Je choisis une autre arme" onClick={() => navigate('/arme2')} />
      
    </div>
  )
}

export default Arme3A
