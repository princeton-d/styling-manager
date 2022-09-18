import React, { useState } from 'react';
import Navigation from '../../components/navigation/navigation';
import styles from './textShadowManager.module.css';
import common from '../../common/common.module.css';
import hexToRgb from '../../components/hexToRgb/hexToRgb';
import TextShadowSampleList from '../../components/textShadowSampleList/textShadowSampleList';
import { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect } from 'react';

const TextShadowManager = () => {
  const shiftRightRef = useRef();
  const shiftDownRef = useRef();
  const blurRef = useRef();
  const opacityRef = useRef();
  const textShadowRef = useRef();
  const colorPaletteRef = useRef();
  const textColorPaletteRef = useRef();
  const backgroundColorPaletteRef = useRef();
  const copyTextRef = useRef();

  const [shiftRightValue, setShiftRightValue] = useState(2);
  const [shiftDownValue, setShiftDownValue] = useState(2);
  const [blurValue, setBlurValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(100);
  const [colorPaletteValue, setColorPaletteValue] = useState('#0000FF');
  const [resultBoxColor, setResultBoxColor] = useState('#000000');
  const [resultBoxBackgroundColor, setResultBoxBackgroundColor] =
    useState('#999999');
  const [rgbaValue, setRgbaValue] = useState('rgba(0, 0, 0, 1)');

  const changedValue = (e) => {
    if (e.target.name === 'shiftRight') {
      setShiftRightValue(shiftRightRef.current.value);
    } else if (e.target.name === 'shiftDown') {
      setShiftDownValue(shiftDownRef.current.value);
    } else if (e.target.name === 'blur') {
      setBlurValue(blurRef.current.value);
    } else if (e.target.name === 'opacity') {
      setOpacityValue(opacityRef.current.value);
      setRgbaValue(hexToRgb(`${colorPaletteValue}`, `${opacityValue / 100}`));
    } else if (e.target.name === 'colorBox') {
      setColorPaletteValue(colorPaletteRef.current.value);
      setRgbaValue(hexToRgb(`${colorPaletteValue}`, `${opacityValue / 100}`));
    }
  };
  useEffect(() => {
    setRgbaValue(hexToRgb(`${colorPaletteValue}`, `${opacityValue / 100}`));
    textShadowRef.current.style.textShadow = `${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${rgbaValue}`;
  }, [changedValue]);
  const changedResultBoxColor = (e) => {
    if (e.target.name === 'textColorBox') {
      setResultBoxColor(textColorPaletteRef.current.value);
    } else if (e.target.name === 'backgroundColorBox') {
      setResultBoxBackgroundColor(backgroundColorPaletteRef.current.value);
    }
  };
  useEffect(() => {
    textShadowRef.current.style.color = resultBoxColor;
    textShadowRef.current.style.backgroundColor = resultBoxBackgroundColor;
  }, [changedResultBoxColor]);
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <p className={common.title}>Text Shadow Manager</p>
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
          <div className={styles.colorBoxArea}>
            <div className={styles.colorBoxWrap}>
              <label className={styles.colorLabel} htmlFor='colorInput'>
                text-shadow color
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
            <div className={styles.colorBoxWrap}>
              <label className={styles.colorLabel} htmlFor='textColorInput'>
                text color
              </label>
              <input
                ref={textColorPaletteRef}
                className={styles.colorBox}
                id='textColorInput'
                type='color'
                name='textColorBox'
                value={resultBoxColor}
                onChange={changedResultBoxColor}
              />
            </div>
            <div className={styles.colorBoxWrap}>
              <label
                className={styles.colorLabel}
                htmlFor='backgroundColorInput'
              >
                background color
              </label>
              <input
                ref={backgroundColorPaletteRef}
                className={styles.colorBox}
                id='backgroundColorInput'
                type='color'
                name='backgroundColorBox'
                value={resultBoxBackgroundColor}
                onChange={changedResultBoxColor}
              />
            </div>
          </div>
          <div className={styles.textShadowInfo}>
            <CopyToClipboard
              text={`text-shadow: ${shiftRightValue}px ${shiftDownValue}px ${blurValue}px ${rgbaValue};`}
            >
              <p
                className={styles.textShadowCssInfo}
                onClick={() => {
                  copyTextRef.current.innerText = 'Copy';
                  setTimeout(() => {
                    copyTextRef.current.innerText = 'Click To Copy';
                  }, 1000);
                }}
              >
                {shiftRightValue}px {shiftDownValue}
                px {blurValue}px {rgbaValue}
                <br />
                <span ref={copyTextRef}>Click To Copy</span>
              </p>
            </CopyToClipboard>
          </div>
          <div className={styles.resultText}>
            <p ref={textShadowRef}>Result Text</p>
          </div>
        </div>
        <TextShadowSampleList />
      </section>
    </>
  );
};

export default TextShadowManager;
