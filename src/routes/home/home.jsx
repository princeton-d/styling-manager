import styles from './home.module.css';
import Navigation from '../../components/navigation/navigation';
import { dbService } from '../../fbase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Home = () => {
  const [styling, setStyling] = useState('');
  const [stylings, setStylings] = useState([]);

  const getStylings = async () => {
    const querySnapshot = await getDocs(collection(dbService, 'styling'));
    querySnapshot.forEach((doc) => {
      const stylingObj = {
        ...doc.data(),
        id: doc.id,
      };
      setStylings((prev) => [stylingObj, ...prev]);
    });
  };

  useEffect(() => {
    getStylings();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, 'styling'), {
        text: styling,
        createdAt: Date.now(),
      });
      setStyling('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setStyling(e.target.value);
  };
  return (
    <>
      <div className={styles.wrapper}>
        Styling Manager
        <form onSubmit={onSubmit}>
          <input
            type='text'
            value={styling}
            onChange={onChange}
            placeholder='test'
          />
          <input type='submit' onSubmit={onSubmit} />
        </form>
        {stylings.map((prop) => (
          <div key={prop.id}>{prop.text}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
