import React from 'react'
import styles from './Components.module.css';
import Back from './Button/Back';
import Map from './Button/Map';


const Header = () => {
  return (
    <div className={styles.header}>
     <Back />
     <Map />
    </div>
  )
}

export default Header
