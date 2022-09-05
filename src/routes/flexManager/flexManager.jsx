import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './flexManager.module.css';

const FlexManager = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <div className='flexDirection'>
          <p>Flex</p>
          <p className={styles.propertyName}>flex-wrap</p>
          <input type='button' name='flex-wrap' value={'nowrap'} />
          <input type='button' name='flex-wrap' value={'wrap'} />
          <input type='button' name='flex-wrap' value={'wrap-reverse'} />
          <div className={styles.contentsBox}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
          </div>
        </div>
        <div className={styles.flexWrap}>
          <p className={styles.propertyName}>flex-direction</p>
          <input type='button' name='flex-direction' value={'row'} />
          <input type='button' name='flex-direction' value={'row-reverse'} />
          <input type='button' name='flex-direction' value={'column'} />
          <input type='button' name='flex-direction' value={'column-reverse'} />
          <div className={styles.contentsBox}></div>
        </div>
        <div className={styles.justifyContent}>
          <p className={styles.propertyName}>justify-content</p>
          <input type='button' name='justify-content' value={'flex-start'} />
          <input type='button' name='justify-content' value={'flex-end'} />
          <input type='button' name='justify-content' value={'center'} />
          <input type='button' name='justify-content' value={'space-between'} />
          <input type='button' name='justify-content' value={'space-around'} />
          <div className={styles.contentsBox}></div>
        </div>
        <div className={styles.alignItems}>
          <p className={styles.propertyName}>align-items</p>
          <input type='button' name='align-items' value={'stretch'} />
          <input type='button' name='align-items' value={'center'} />
          <input type='button' name='align-items' value={'flex-start'} />
          <input type='button' name='align-items' value={'flex-end'} />
          <input type='button' name='align-items' value={'baseline'} />
          <div className={styles.contentsBox}></div>
        </div>
        <div className={styles.alignContent}>
          <p className={styles.propertyName}>align-content</p>
          <input type='button' name='align-items' value={'stretch'} />
          <input type='button' name='align-items' value={'center'} />
          <input type='button' name='align-items' value={'space-between'} />
          <input type='button' name='align-items' value={'space-around'} />
          <input type='button' name='align-items' value={'flex-start'} />
          <input type='button' name='align-items' value={'flex-end'} />
          <div className={styles.contentsBox}></div>
        </div>
      </section>
    </>
  );
};

export default FlexManager;
