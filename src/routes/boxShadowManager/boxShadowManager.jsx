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
  const boxShadowRef = useRef();
  const [inputValue, setInputValue] = useState({
    shiftRight: 0,
    shiftDown: 0,
    spread: 0,
    blur: 0,
    opacity: 100,
    inset: false,
    colorPalette: '#000000',
    rgba: 'rgba(0, 0, 0, 1)',
  });
  const [boxShadowStyles, setBoxShadowStyles] = useState([]);

  const changedValue = (e) => {
    const key = e.target.name;
    setInputValue((prev) => ({ ...prev, [key]: e.target.value }));
    if (e.target.name === 'inset') {
      setInputValue((prev) => ({
        ...prev,
        inset: !inputValue.inset,
      }));
    }
  };

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      rgba: hexToRgb(inputValue.colorPalette, inputValue.opacity / 100),
    }));
    boxShadowRef.current.style.boxShadow = `${
      inputValue.inset ? 'inset' : ''
    } ${inputValue.shiftRight}px ${inputValue.shiftDown}px ${
      inputValue.blur
    }px ${inputValue.spread}px ${inputValue.rgba}`;
  }, [
    inputValue.shiftRight,
    inputValue.shiftDown,
    inputValue.spread,
    inputValue.blur,
    inputValue.opacity,
    inputValue.inset,
    inputValue.colorPalette,
    inputValue.rgba,
  ]);

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
    await addDoc(collection(dbService, 'boxShadowData'), {
      style: `box-shadow: ${inputValue.shiftRight}px ${
        inputValue.shiftDown
      }px ${inputValue.blur}px ${inputValue.spread}px ${inputValue.rgba}${
        inputValue.inset ? ' inset' : ''
      };`,
      styleCode: `${inputValue.shiftRight}px ${inputValue.shiftDown}px ${
        inputValue.blur
      }px ${inputValue.spread}px ${inputValue.rgba}${
        inputValue.inset ? 'inset' : ''
      }`,
      createdAt: Date.now(),
      creatorId: userInfo.uid,
    });
  };
  return (
    <>
      <section className={styles.container}>
        <p className={common.title}>Box Shadow Manager</p>
        <div className={styles.stateInfoArea}>
          <div className={styles.shiftRightArea}>
            <span>Shift Right: {inputValue.shiftRight}</span>
            <input
              type='range'
              name='shiftRight'
              min='-50'
              max='50'
              value={inputValue.shiftRight}
              onChange={changedValue}
            />
          </div>
          <div className={styles.shiftDownArea}>
            <span>Shift Down: {inputValue.shiftDown}</span>
            <input
              type='range'
              name='shiftDown'
              min='-50'
              max='50'
              value={inputValue.shiftDown}
              onChange={changedValue}
            />
          </div>
          <div className={styles.spreadArea}>
            <span>Spread: {inputValue.spread}</span>
            <input
              type='range'
              name='spread'
              min='-30'
              max='50'
              value={inputValue.spread}
              onChange={changedValue}
            />
          </div>
          <div className={styles.blurArea}>
            <span>Blur: {inputValue.blur}</span>
            <input
              type='range'
              name='blur'
              min='0'
              max='50'
              value={inputValue.blur}
              onChange={changedValue}
            />
          </div>
          <div className={styles.opacityArea}>
            <span>Opacity: {inputValue.opacity / 100}</span>
            <input
              type='range'
              name='opacity'
              min='0'
              max='100'
              value={inputValue.opacity}
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
                className={styles.colorBox}
                id='colorInput'
                type='color'
                name='colorPalette'
                value={inputValue.colorPalette}
                onChange={changedValue}
              />
            </div>
          </div>
          <div
            className={styles.boxShadowInfo}
            onMouseDown={(e) => {
              e.target.style.scale = '0.9';
            }}
            onMouseUp={(e) => {
              e.target.style.scale = '1';
            }}
          >
            <CopyToClipboard
              text={`box-shadow: ${inputValue.shiftRight}px ${
                inputValue.shiftDown
              }px ${inputValue.blur}px ${inputValue.spread}px ${
                inputValue.rgba
              } ${inputValue.inset ? 'inset' : ''}`}
            >
              <p className={styles.boxShadowCssInfo}>
                {inputValue.shiftRight}px {inputValue.shiftDown}px
                {inputValue.blur}px {inputValue.spread}px {inputValue.rgba}
                {inputValue.inset ? ' inset' : ''};
                <br />
                Click To Copy
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
