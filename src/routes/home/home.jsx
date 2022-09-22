import styles from './home.module.css';
import Navigation from '../../components/navigation/navigation';

const Home = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <Navigation isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className={styles.wrapper}>Styling Manager</div>
    </>
  );
};

export default Home;
