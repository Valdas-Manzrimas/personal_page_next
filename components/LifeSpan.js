import { useRef, useEffect, useState } from 'react';
import { useRanger } from 'react-ranger';
import lang from '../language';
import styles from '../styles/lifespan.module.scss';

const LifeSpan = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  const [values, setValues] = useState([1991]);
  const [key, setKey] = useState();
  let ref = useRef(lang.en.lifespan.y1991);

  const { getTrackProps, ticks, handles } = useRanger({
    values,
    min: 1991,
    onDrag: setValues,
    max: year,
    stepSize: 1,
    steps: [
      1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
      2008, 2009, 2010, 2012, 2014, 2016, 2018, 2020, 2022,
    ],
    ticks: [1991, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2022],
  });

  useEffect(() => {
    Object.keys(lang.en.lifespan).map((key, index) => {
      if (key.includes(values)) {
        ref.current = lang.en.lifespan[key];
        setKey(lang.en.lifespan[key]);
      }
    });
  });

  return (
    <>
      <div
        className={styles.lifespan}
        {...getTrackProps({
          style: {
            height: '0.5px',
            background: '#ddd',
            boxShadow: '0 1px 2px rgba(0,0,0,1.6)',
            borderRadius: '15px',
          },
        })}
      >
        {ticks.map(({ value, getTickProps }) => (
          <div className={styles.tickStyles} {...getTickProps()}>
            <div className={styles.tick_mark}></div>
            {value}
          </div>
        ))}
        {handles.map(({ getHandleProps }) => (
          <div
            {...getHandleProps({
              style: {
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'linear-gradient(to bottom, #eee 45%, #ddd 55%)',
                border: 'solid 1px #888',
              },
            })}
          />
        ))}

        <div className={styles.valueBar}>{values}</div>
        <div>{ref.current}</div>
      </div>
    </>
  );
};

export default LifeSpan;
