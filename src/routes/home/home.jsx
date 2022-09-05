import { Link, Route } from 'react-router-dom';
import React, { useState } from 'react';
import HomeModal from '../../components/modal/homeModal';
import ModalPortal from '../../components/modal/modalPortal';

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
      <nav>
        <Link to='/'>home</Link>
        <Link to='boxShadowManager'>box Shadow</Link>
        <Link to='textShadowManager'>text Shadow</Link>
        <Link to='colorManager'>color</Link>
        <Link to='fontManager'>font</Link>
        <Link to='flexManager'>flex</Link>
        <Link to='girdManager'>gird</Link>
      </nav>
    </div>
  );
};

export default Home;
