import React from 'react';
import styles from './BoxShadowSampleList.module.css';
import BoxShadowSampleItem from '../boxShadowSampleItem/boxShadowSampleItem';
import boxShadowSampleData from '../../data/boxShadow.json';

const BoxShadowSampleList = () => {
  const boxShadowSample = [
    {
      num: 0,
      style: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    {
      num: 1,
      style: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
    {
      num: 2,
      style: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    },
    {
      num: 3,
      style: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    {
      num: 4,
      style: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    {
      num: 5,
      style: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
    {
      num: 6,
      style: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    {
      num: 7,
      style: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
    },
    {
      num: 8,
      style:
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    },
    {
      num: 9,
      style: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    },
    {
      num: 10,
      style:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    {
      num: 11,
      style:
        'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    },
    {
      num: 12,
      style:
        'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    },
    {
      num: 13,
      style: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
    },
    {
      num: 14,
      style:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    },
    {
      num: 15,
      style:
        'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    },
    {
      num: 16,
      style:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    },
    {
      num: 17,
      style:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    },
    {
      num: 18,
      style:
        'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    },
    {
      num: 19,
      style:
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    },
    {
      num: 20,
      style: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 2,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 3,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 4,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 5,
    //   style: '',
    // },
    // {
    //   num: 6,
    //   style: '',
    // },
  ];
  console.log(boxShadowSampleData.boxShadowSample);
  return (
    <ul>
      {boxShadowSample.map((item) => {
        return (
          <>
            <BoxShadowSampleItem style={item} key={item.num} />
          </>
        );
      })}
    </ul>
  );
};

export default BoxShadowSampleList;
