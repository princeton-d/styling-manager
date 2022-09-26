import React from 'react';
import styles from './SaveTheCustomButton.module.css';

const SaveTheCustomButton = ({ onClick }) => {
  return (
    <>
      <div className={styles.container}>
        <button onClick={onClick}>Save the custom CSS style</button>
      </div>
    </>
  );
};

export default SaveTheCustomButton;
