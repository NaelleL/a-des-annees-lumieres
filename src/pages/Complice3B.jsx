import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../components/Bubble';
import SecondaryButton from '../components/Button/SecondaryButton';
import Header from '../components/Header';
import styles from './BubbleMan.module.css';
import MainButton from '../components/Button/MainButton';



const Complice3B = () => {
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
          case 29:
              navigate('/dialogueComplice3B'); 
              break;
          default:
              navigate('/dialogueCompliceInexistante'); 
              break;
      }
  };
  return (
    <div>
      <Header />
        <p>Hop hop hop n'oubliez pas de rentrer le code qui se trouve sous le tableau</p>
        <img 
            src="/assets/image2Complice.png" 
            alt="Image du complice B" 
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
        <SecondaryButton btn="Je choisis un autre complice" onClick={() => navigate('/complice2')} />
      
    </div>
  )
}

export default Complice3B
