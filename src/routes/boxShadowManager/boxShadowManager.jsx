import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './boxShadowManager.module.css';

const BoxShadowManager = () => {
  const shiftRightRef = useRef();
  const shiftDownRef = useRef();
  const spreadRef = useRef();
  const blurRef = useRef();
  const opacityRef = useRef();
  const boxShadowRef = useRef();
  const colorPaletteRef = useRef();

  const [shiftRightValue, setShiftRightValue] = useState(0);
  const [shiftDownValue, setShiftDownValue] = useState(0);
  const [spreadValue, setSpreadValue] = useState(0);
  const [blurValue, setBlurValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(100);
  const [colorPaletteValue, setColorPaletteValue] = useState('#000000');

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

  useEffect(() => {
    // 비동기 방식인 changedValue 의 결과를 동기 방식으로 만들어 줌
    boxShadowRef.current.style.boxShadow = `${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${spreadValue}px ${colorPaletteValue}`;
  }, [changedValue]);
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <div className={styles.stateInfoArea}>
          <div className={styles.shiftRightArea}>
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
          <div className={styles.shiftDownArea}>
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
          <div className={styles.spreadArea}>
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
          <div className={styles.blurArea}>
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
          <div className={styles.opacityArea}>
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
          </div>
          <div>
            <input
              ref={colorPaletteRef}
              type='color'
              value={colorPaletteValue}
              onChange={() => {
                setColorPaletteValue(colorPaletteRef.current.value);
                // console.log(colorPaletteValue);
              }}
            />
          </div>
          <div className={styles.boxShadowInfo}>
            <p>
              {shiftRightValue}px {shiftDownValue}px {blurValue}px
              {spreadValue}px {opacityValue}px
            </p>
          </div>
          <div className={styles.resultBox}>
            <div ref={boxShadowRef} className={styles.boxShadowDiv}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxShadowManager;
