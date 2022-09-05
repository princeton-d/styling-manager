import styles from './home.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import HomeModal from '../../components/modal/homeModal';
import ModalPortal from '../../components/modal/modalPortal';
import Navigation from '../../components/navigation/navigation';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    // <div>
    //   <button onClick={onClick}>open</button>
    //   {openModal ? (
    //     <ModalPortal>
    //       <HomeModal openModal={openModal} setOpenModal={setOpenModal} />
    //     </ModalPortal>
    //   ) : null}
    // </div>
    <div>
      <Navigation />
    </div>
  );
};

export default Home;
