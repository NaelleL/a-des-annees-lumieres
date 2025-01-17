import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Map = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/popUpMap'); // Navigue vers la route "/popUpMap"
    };
    
    return (
        <div>
            <button onClick={handleNavigate} className={styles.backButton}> 
                <img 
                    src="/assets/map.svg" 
                    alt="Carte" 
                    className="map" 
                />
            </button>
        </div>
    ); 
};

export default Map;
