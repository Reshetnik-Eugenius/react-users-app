import React from 'react'
import styles from './PInput.module.css'

const PInput = (props: any) => {
  return (
    <input className={styles.pInput} {...props}/>
  )
}

export default PInput