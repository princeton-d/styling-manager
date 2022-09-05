import React from 'react';

const Logout = () => {
  const onClick = () => {
    console.log('a');
  };
  return (
    <>
      <button onClick={onClick}>logout</button>
    </>
  );
};

export default Logout;
