import styles from './home.module.css';
import { dbService } from '../../fbase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Home = ({ userInfo }) => {
  const [styling, setStyling] = useState('');
  const [stylings, setStylings] = useState([]);

  useEffect(() => {
    onSnapshot(collection(dbService, 'styling'), (snapshot) => {
      const stylingArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStylings(stylingArr);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, 'styling'), {
        text: styling,
        createdAt: Date.now(),
        creatorId: userInfo.uid,
      });
      setStyling('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const onChange = (e) => {
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
        <div>
          {stylings.map((prop) => (
            <div key={prop.id}>
              <h4>{prop.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
