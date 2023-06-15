import React from 'react';
import styles from './ScrollToTop.module.css';
import arrowUp from './arrowUp.png';


export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


  return (
      <button className={styles.scrollToTop} onClick={scrollToTop}>
        <img src={arrowUp} alt="Arrow up" />
      </button>
  )
}
