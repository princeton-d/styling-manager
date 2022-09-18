import React from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './fontManager.module.css';
import common from '../../common/common.module.css';
import { useState } from 'react';
import { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect } from 'react';

const FontManager = () => {
  const fontSizeRef = useRef();
  const letterSpacingRef = useRef();
  const wordSpacingRef = useRef();
  const fontWeightRef = useRef();
  const textDecorationRef = useRef();
  const colorPaletteRef = useRef();
  const copyTextRef = useRef();
  const fontRef = useRef();

  const [fontSizeValue, setFontSizeValue] = useState(25);
  const [letterSpacingValue, setLetterSpacingValue] = useState(0);
  const [wordSpacingValue, setWordSpacingValue] = useState(0);
  const [fontWeightValue, setFontWeightValue] = useState(4);
  const [textDecorationValue, setTextDecorationValue] = useState('1');
  const [colorPaletteValue, setColorPaletteValue] = useState('#000000');

  const changedValue = (e) => {
    if (e.target.name === 'fontSize') {
      setFontSizeValue(fontSizeRef.current.value);
    } else if (e.target.name === 'letterSpacing') {
      setLetterSpacingValue(letterSpacingRef.current.value);
    } else if (e.target.name === 'wordSpacing') {
      setWordSpacingValue(wordSpacingRef.current.value);
    } else if (e.target.name === 'fontWeight') {
      setFontWeightValue(fontWeightRef.current.value);
    } else if (e.target.name === 'textDecoration') {
      setTextDecorationValue(textDecorationRef.current.value);
    } else if (e.target.name === 'colorBox') {
      setColorPaletteValue(colorPaletteRef.current.value);
    }
  };

  const printText = () => {
    if (textDecorationValue === '1') {
      return 'none';
    } else if (textDecorationValue === '2') {
      return 'underline';
    } else if (textDecorationValue === '3') {
      return 'overline';
    } else if (textDecorationValue === '4') {
      return 'line-through';
    }
  };

  useEffect(() => {
    fontRef.current.style.fontSize = `${fontSizeValue}px`;
    fontRef.current.style.letterSpacing = `${letterSpacingValue / 10}px`;
    fontRef.current.style.wordSpacing = `${wordSpacingValue / 10}px`;
    fontRef.current.style.fontWeight = fontWeightValue * 100;
    fontRef.current.style.textDecoration = printText();
    fontRef.current.style.color = colorPaletteValue;
  }, [changedValue]);
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <p className={common.title}>Font Manager</p>
        <div className={styles.stateInfoArea}>
          <div className={styles.fontSizeArea}>
            <span>Font Size: {fontSizeValue}</span>
            <input
              ref={fontSizeRef}
              type='range'
              name='fontSize'
              min='1'
              max='50'
              value={fontSizeValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.letterSpacingArea}>
            <span>Letter Spacing: {letterSpacingValue / 10}</span>
            <input
              ref={letterSpacingRef}
              type='range'
              name='letterSpacing'
              min='-100'
              max='200'
              value={letterSpacingValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.wordSpacingArea}>
            <span>Word Spacing: {wordSpacingValue / 10}</span>
            <input
              ref={wordSpacingRef}
              type='range'
              name='wordSpacing'
              min='-400'
              max='200'
              value={wordSpacingValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.fontWeightArea}>
            <span>Font Weight: {Number(fontWeightValue) * 100}</span>
            <input
              ref={fontWeightRef}
              type='range'
              name='fontWeight'
              min='1'
              max='9'
              value={fontWeightValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.textDecorationArea}>
            <span>Text Decoration: {printText()}</span>
            <input
              ref={textDecorationRef}
              type='range'
              name='textDecoration'
              min='1'
              max='4'
              value={textDecorationValue}
              onChange={changedValue}
            />
          </div>
          <div className={styles.colorBoxArea}>
            <div className={styles.colorBoxWrap}>
              <label className={styles.colorLabel} htmlFor='colorInput'>
                color
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
          <div className={styles.resultText}>
            <p ref={fontRef}>
              The greatest glory in living lies not in never falling, but in
              rising every time we fall.
              <br />
              – Nelson Mandela
              <br />
              – 인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번
              일어선다는 데 있다.
              <br />
              (넬슨 만델라)
            </p>
          </div>
          <div className={styles.fontInfo}>
            <CopyToClipboard
              text={`font-size: ${fontSizeValue}px;
letter-spacing: ${letterSpacingValue}px;
word-spacing: ${wordSpacingValue}px;
font-weight: ${fontWeightValue * 100};
text-decoration: ${printText()};
color: ${colorPaletteValue};`}
            >
              <p
                className={styles.fontCssInfo}
                onClick={() => {
                  copyTextRef.current.innerText = 'Copy';
                  setTimeout(() => {
                    copyTextRef.current.innerText = 'Click To Copy';
                  }, 1000);
                }}
              >
                font-size: {fontSizeValue}px;
                <br />
                letter-spacing: {letterSpacingValue / 10}px;
                <br />
                word-spacing: {wordSpacingValue / 10}px;
                <br />
                font-weight: {fontWeightValue}00;
                <br />
                text-decoration: {printText()};
                <br />
                color: {colorPaletteValue}
                <br />
                <span ref={copyTextRef}>Click To Copy</span>
              </p>
            </CopyToClipboard>
          </div>
        </div>
      </section>
    </>
  );
};

export default FontManager;
