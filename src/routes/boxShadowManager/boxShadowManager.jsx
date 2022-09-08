import React, { useRef, useState } from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './boxShadowManager.module.css';

const BoxShadowManager = () => {
  const shiftRightRef = useRef();
  const shiftDownRef = useRef();
  const spreadRef = useRef();
  const blurRef = useRef();
  const opacityRef = useRef();

  const [shiftRightValue, setShiftRightValue] = useState(0);
  const [shiftDownValue, setShiftDownValue] = useState(0);
  const [spreadValue, setSpreadValue] = useState(0);
  const [blurValue, setBlurValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(100);

  const changedValue = (e) => {
    if (e.target.name === 'shiftRight') {
      setShiftRightValue(shiftRightRef.current.value);
    } else if (e.target.name === 'shiftDown') {
      setShiftDownValue(shiftDownRef.current.value);
    } else if (e.target.name === 'spread') {
      setSpreadValue(spreadRef.current.value);
    } else if (e.target.name === 'blur') {
      setBlurValue(blurRef.current.value);
    } else if (e.target.name === 'opacity') {
      setOpacityValue(opacityRef.current.value);
    }
  };
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <div>
          <p>Shift Right: {shiftRightValue}</p>
          <input
            ref={shiftRightRef}
            type='range'
            name='shiftRight'
            min='-50'
            max='50'
            value={shiftRightValue}
            onChange={changedValue}
          />
        </div>
        <div>
          <p>Shift Down: {shiftDownValue}</p>
          <input
            ref={shiftDownRef}
            type='range'
            name='shiftDown'
            min='-50'
            max='50'
            value={shiftDownValue}
            onChange={changedValue}
          />
        </div>
        <div>
          <p>Spread: {spreadValue}</p>
          <input
            ref={spreadRef}
            type='range'
            name='spread'
            min='-30'
            max='50'
            value={spreadValue}
            onChange={changedValue}
          />
        </div>
        <div>
          <p>Blur: {blurValue}</p>
          <input
            ref={blurRef}
            type='range'
            name='blur'
            min='0'
            max='50'
            value={blurValue}
            onChange={changedValue}
          />
        </div>
        <div>
          <p>Opacity: {opacityValue / 100}</p>
          <input
            ref={opacityRef}
            type='range'
            name='opacity'
            min='0'
            max='100'
            value={opacityValue}
            onChange={changedValue}
          />
          <div className={styles.boxShadowInfo}>
            <p>
              {shiftRightValue}px {shiftDownValue}px {spreadValue}px {blurValue}
              px {opacityValue}px
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxShadowManager;
