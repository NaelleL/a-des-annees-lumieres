import React from 'react'
import Back from '../components/Button/Back'
import styles from './BubbleMan.module.css';


const NotFound = () => {
  return (
    <div>
      <div className={styles.backContainer}>
        <Back/>
      </div>
        <h1>Erreur 404</h1>
        <p>Oups ! Fausse manip’ vous avez dû vous perdre dans le musée.</p>
    </div>

    
  )
}

export default NotFound