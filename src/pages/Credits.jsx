import React from 'react'
import Back from '../components/Button/Back'
import styles from './BubbleMan.module.css';


const Credits = () => {
  return (
    <div>
      <div className={styles.backContainer}>
        <Back/>
      </div>
      <h1>Crédits</h1>
      <div className={styles.textContainer}>
        <p>Projet créé dans le cadre de la Bacchanight 2025 du Musée des Beaux-Arts de Bordeaux.</p>
        <p>Créateurs: <br />
        Camille Surget - Maziere Tya - Gwenaëlle Yau Chun Wan - Naëlle Lemennicier - Phuc 
        Nguyen</p>
        <p>Intégration et développement: <br/>
        Naëlle Lemennicier</p>
        <p>Scénario: <br />
        Camille Surget - Maziere Tya</p>
        <p>Trailer: <br />
        Gwenaëlle Yau Chun Wan - Phuc
        Nguyen</p>

        <p>Œuvres utilisées: </p>
        <ul>
          <li>Oudry Jean-Baptiste, comédien italien dans un parc, 1710</li>
          <li>Pierre Narcisse Guerin, Phèdre et Hippolyte, 1815 </li>
          <li>Jean-Baptiste Vanmour, Réception de l'ambassadeur de France, le vicomte d'Andrezel, par le sultan Ahmed III, le 17 octobre 1724 à Constantinople : l'audience du Sultan, 1724 </li>
          <li>Portrait d’Emmanuel-Celeste-Augustin de Durfort, Duc de Duras (1741 - 1800)</li>
          <li>Marianne Loir, Portrait de Gabrielle-Emilie Le Tonnelier de Breteuil, marquise du Châtelet, vers 1745</li>
        </ul>
        </div>
        <img 
        src="/assets/credits.webp" 
        alt="Crédits" 
        className="planImage" 
        />
    </div>

    
  )
}

export default Credits