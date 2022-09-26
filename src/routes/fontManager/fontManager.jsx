import React from 'react';
import styles from './fontManager.module.css';
import common from '../../common/common.module.css';
import { useState } from 'react';
import { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { dbService } from '../../fbase';
import SaveTheCustomButton from '../../components/SaveTheCustomButton/SaveTheCustomButton';
import FontCustomStyleCode from '../../components/FontCustomStyleCode/FontCustomStyleCode';

const FontManager = ({ userInfo }) => {
  const fontRef = useRef();
  const [inputValue, setInputValue] = useState({
    fontSize: 25,
    letterSpacing: 0,
    wordSpacing: 0,
    fontWeight: 4,
    textDecoration: '1',
    colorPalette: '#000000',
  });
  const [fontStyles, setFontStyles] = useState([]);

  const changedValue = (e) => {
    const key = e.target.name;
    setInputValue((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const printText = () => {
    if (inputValue.textDecoration === '1') {
      return 'none';
    } else if (inputValue.textDecoration === '2') {
      return 'underline';
    } else if (inputValue.textDecoration === '3') {
      return 'overline';
    } else if (inputValue.textDecoration === '4') {
      return 'line-through';
    }
  };

  useEffect(() => {
    setInputValue((prev) => ({ ...prev }));
    fontRef.current.style.fontSize = `${inputValue.fontSize}px`;
    fontRef.current.style.letterSpacing = `${inputValue.letterSpacing / 10}px`;
    fontRef.current.style.wordSpacing = `${inputValue.wordSpacing / 10}px`;
    fontRef.current.style.fontWeight = inputValue.fontWeight * 100;
    fontRef.current.style.textDecoration = printText();
    fontRef.current.style.color = inputValue.colorPalette;
  }, [
    inputValue.fontSize,
    inputValue.letterSpacing,
    inputValue.wordSpacing,
    inputValue.fontWeight,
    inputValue.textDecoration,
    inputValue.colorPalette,
  ]);

  useEffect(() => {
    onSnapshot(collection(dbService, 'fontData'), (snapshot) => {
      const styleArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFontStyles(styleArr);
    });
  }, []);
  const onClick = async () => {
    await addDoc(collection(dbService, 'fontData'), {
      style: `font-size: ${inputValue.fontSize}px;
      letter-spacing: ${inputValue.letterSpacing / 10}px;
      word-spacing: ${inputValue.wordSpacing / 10}px;
      font-weight: ${inputValue.fontWeight * 100};
      text-decoration: ${printText()};
      color: ${inputValue.colorPalette};`,
      fontSize: `${inputValue.fontSize}px`,
      letterSpacing: `${inputValue.letterSpacing / 10}px`,
      wordSpacing: `${inputValue.wordSpacing / 10}px`,
      fontWeight: `${inputValue.fontWeight * 100}`,
      textDecoration: `${printText()}`,
      color: `${inputValue.colorPalette}`,
      createdAt: Date.now(),
      creatorId: userInfo.uid,
    });
  };
  return (
    <>
      <section className={styles.container}>
        <p className={common.title}>Font Manager</p>
        <div className={styles.stateInfoArea}>
          <div className={styles.fontSizeArea}>
            <span>Font Size: {inputValue.fontSize}</span>
            <input
              type='range'
              name='fontSize'
              min='1'
              max='50'
              value={inputValue.fontSize}
              onChange={changedValue}
            />
          </div>
          <div className={styles.letterSpacingArea}>
            <span>Letter Spacing: {inputValue.letterSpacing / 10}</span>
            <input
              type='range'
              name='letterSpacing'
              min='-100'
              max='200'
              value={inputValue.letterSpacing}
              onChange={changedValue}
            />
          </div>
          <div className={styles.wordSpacingArea}>
            <span>Word Spacing: {inputValue.wordSpacing / 10}</span>
            <input
              type='range'
              name='wordSpacing'
              min='-400'
              max='200'
              value={inputValue.wordSpacing}
              onChange={changedValue}
            />
          </div>
          <div className={styles.fontWeightArea}>
            <span>Font Weight: {Number(inputValue.fontWeight) * 100}</span>
            <input
              type='range'
              name='fontWeight'
              min='1'
              max='9'
              value={inputValue.fontWeight}
              onChange={changedValue}
            />
          </div>
          <div className={styles.textDecorationArea}>
            <span>Text Decoration: {printText()}</span>
            <input
              type='range'
              name='textDecoration'
              min='1'
              max='4'
              value={inputValue.textDecoration}
              onChange={changedValue}
            />
          </div>
          <div className={styles.colorBoxArea}>
            <div className={styles.colorBoxWrap}>
              <label className={styles.colorLabel} htmlFor='colorInput'>
                color
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
          <div className={styles.resultText}>
            <p ref={fontRef}>
              The greatest glory in living lies not in never falling, but in
              rising every time we fall.
              <br />
              – Nelson Mandela
              <br />
              <br />
              인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번
              일어선다는 데 있다.
              <br />- 넬슨 만델라
            </p>
          </div>
          <div
            className={styles.fontInfo}
            onMouseDown={(e) => {
              e.target.style.scale = '0.9';
            }}
            onMouseUp={(e) => {
              e.target.style.scale = '1';
            }}
          >
            <CopyToClipboard
              text={`font-size: ${inputValue.fontSize}px;
letter-spacing: ${inputValue.letterSpacing}px;
word-spacing: ${inputValue.wordSpacing}px;
font-weight: ${inputValue.fontWeight * 100};
text-decoration: ${printText()};
color: ${inputValue.colorPalette};`}
            >
              <p className={styles.fontCssInfo}>
                font-size: {inputValue.fontSize}px;
                <br />
                letter-spacing: {inputValue.letterSpacing / 10}px;
                <br />
                word-spacing: {inputValue.wordSpacing / 10}px;
                <br />
                font-weight: {inputValue.fontWeight}00;
                <br />
                text-decoration: {printText()};
                <br />
                color: {inputValue.colorPalette};
                <br />
                Click To Copy
              </p>
            </CopyToClipboard>
          </div>
        </div>
        <SaveTheCustomButton onClick={onClick} />
        <FontCustomStyleCode fontStyles={fontStyles} userInfo={userInfo} />
      </section>
    </>
  );
};

export default FontManager;
