import React, { useEffect, useRef, useState } from 'react';
import BoxShadowSampleList from '../../components/BoxShadowSampleList/BoxShadowSampleList';
import styles from './boxShadowManager.module.css';
import common from '../../common/common.module.css';
import hexToRgb from '../../components/hexToRgb/hexToRgb';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SaveTheCustomButton from '../../components/SaveTheCustomButton/SaveTheCustomButton';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { dbService } from '../../fbase';
import BoxShadowCustomStyleCode from '../../components/BoxShadowCustomStyleCode/BoxShadowCustomStyleCode';

const BoxShadowManager = ({ userInfo }) => {
  const shiftRightRef = useRef();
  const shiftDownRef = useRef();
  const spreadRef = useRef();
  const blurRef = useRef();
  const opacityRef = useRef();
  const boxShadowRef = useRef();
  const colorPaletteRef = useRef();
  const copyTextRef = useRef();

  const [shiftRightValue, setShiftRightValue] = useState(0);
  const [shiftDownValue, setShiftDownValue] = useState(0);
  const [spreadValue, setSpreadValue] = useState(0);
  const [blurValue, setBlurValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(100);
  const [insetChecked, setInsetChecked] = useState(false);
  const [colorPaletteValue, setColorPaletteValue] = useState('#000000');
  const [rgbaValue, setRgbaValue] = useState('rgba(0, 0, 0, 1)');
  // const [boxShadowStyle, setBoxShadowStyle] = useState('');
  const [boxShadowStyles, setBoxShadowStyles] = useState([]);

  useEffect(() => {
    onSnapshot(collection(dbService, 'boxShadowData'), (snapshot) => {
      const styleArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBoxShadowStyles(styleArr);
    });
  }, []);
  const onClick = async () => {
    try {
      await addDoc(collection(dbService, 'boxShadowData'), {
        style: `box-shadow: ${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${spreadValue}px ${rgbaValue}${
          insetChecked ? 'inset' : ''
        };`,
        styleCode: `${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${spreadValue}px ${rgbaValue}${
          insetChecked ? 'inset' : ''
        }`,
        createdAt: Date.now(),
        creatorId: userInfo.uid,
      });
    } catch (error) {
      console.log(error.code);
    }
  };

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
      setRgbaValue(hexToRgb(`${colorPaletteValue}`, `${opacityValue / 100}`));
    } else if (e.target.name === 'colorBox') {
      setColorPaletteValue(colorPaletteRef.current.value);
      setRgbaValue(hexToRgb(`${colorPaletteValue}`, `${opacityValue / 100}`));
    } else if (e.target.name === 'inset') {
      setInsetChecked(!insetChecked);
    }
  };

  useEffect(() => {
    setRgbaValue(hexToRgb(`${colorPaletteValue}`, `${opacityValue / 100}`));
    boxShadowRef.current.style.boxShadow = `${
      insetChecked ? 'inset' : ''
    } ${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${spreadValue}px ${rgbaValue}`;
  }, [changedValue]);
  return (
    <>
      <section className={styles.container}>
        <p className={common.title}>Box Shadow Manager</p>
        <div className={styles.stateInfoArea}>
          <div className={styles.shiftRightArea}>
            <span>Shift Right: {shiftRightValue}</span>
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
            <span>Shift Down: {shiftDownValue}</span>
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
            <span>Spread: {spreadValue}</span>
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
            <span>Blur: {blurValue}</span>
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
          <div>
            <div className={styles.insetArea}>
              <label htmlFor='insetCheckbox'>inset:</label>
              <input
                id='insetCheckbox'
                type='checkbox'
                name='inset'
                onChange={changedValue}
              />
            </div>
            <div className={styles.colorBoxArea}>
              <label className={styles.colorLabel} htmlFor='colorInput'>
                box-shadow color
              </label>
              <input
                ref={colorPaletteRef}
                className={styles.colorBox}
                id='colorInput'
                type='color'
                name='colorBox'
                value={colorPaletteValue}
                onChange={changedValue}
              />
            </div>
          </div>
          <div className={styles.boxShadowInfo}>
            <CopyToClipboard
              text={`box-shadow: ${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${spreadValue}px ${rgbaValue} ${
                insetChecked ? 'inset' : ''
              };`}
            >
              <p
                className={styles.boxShadowCssInfo}
                onClick={() => {
                  copyTextRef.current.innerText = 'Copy';
                  setTimeout(() => {
                    copyTextRef.current.innerText = 'Click To Copy';
                  }, 1000);
                }}
              >
                {shiftRightValue}px {shiftDownValue}
                px {blurValue}px
                {spreadValue}px {rgbaValue} {insetChecked ? 'inset' : ''} <br />
                <span ref={copyTextRef}>Click To Copy</span>
              </p>
            </CopyToClipboard>
          </div>
          <div ref={boxShadowRef} className={styles.resultBox}>
            <p>contents</p>
          </div>
        </div>
        <SaveTheCustomButton onClick={onClick} />
        <BoxShadowCustomStyleCode
          boxShadowStyles={boxShadowStyles}
          userInfo={userInfo}
        />
        <BoxShadowSampleList />
      </section>
    </>
  );
};

export default BoxShadowManager;
