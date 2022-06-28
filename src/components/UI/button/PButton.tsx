import React from 'react';
import styles from './PButton.module.css';

const PButton = ({children, ...props}:any) => {
  return (
    <button {...props} className={styles.pBtn}>
        {children}
    </button>
  )
}

export default PButton;