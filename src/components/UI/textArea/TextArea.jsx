import React from 'react';
import styles from "./TextArea.module.css";

export default function TextArea(props) {

  return (
    <textarea {...props} className={styles.textArea}>
    </textarea>
  )
}