import React from 'react'
import styles from './Bubble.module.css'

const Bubble = ({text}) => {
  return (
    <div className='container'>
      <p className={styles.mainBubble}>{text}</p>

    </div>
  )
}

export default Bubble
