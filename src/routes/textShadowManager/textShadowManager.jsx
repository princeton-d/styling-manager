import React, { useState } from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './textShadowManager.module.css';
import common from '../../common/common.module.css';
import { useRef } from 'react';

const TextShadowManager = () => {
  const shiftRightRef = useRef();
  const shiftDownRef = useRef();
  const blurRef = useRef();
  const opacityRef = useRef();

  const [shiftRightValue, setShiftRightValue] = useState(0);
  const [shiftDownValue, setShiftDownValue] = useState(0);
  const [blurValue, setBlurValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(100);

  const changedValue = () => {};
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <p className={common.title}>text Shadow Manager</p>
        <div className={styles.stateInfoArea}>
          <div className={styles.shiftRightArea}>
            <span>Shift Right: {shiftRightValue}</span>
            <input
              ref={shiftRightRef}
              type='range'
              name='shiftRight'
              min='-40'
              max='40'
              value={shiftRightValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.shiftDownArea}>
            <span>Shift Down: {shiftDownValue}</span>
            <input
              ref={shiftDownRef}
              type='range'
              name='shiftDown'
              min='-40'
              max='40'
              value={shiftDownValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.blurArea}>
            <span>Blur: {blurValue}</span>
            <input
              ref={blurRef}
              type='range'
              name='blur'
              min='0'
              max='20'
              value={blurValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.opacityArea}>
            <span>Opacity: {opacityValue / 100}</span>
            <input
              ref={opacityRef}
              type='range'
              name='opacity'
              min='0'
              max='100'
              value={opacityValue}
              onChange={changedValue}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TextShadowManager;
