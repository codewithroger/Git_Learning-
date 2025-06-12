import React from 'react';

const BoxLayout = () => {
  

  const boxStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100px',
    height: '50px',
    backgroundColor: 'steelblue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div >
      <div style={boxStyle}>Bottom Left</div>
    </div>
  );
};

export default BoxLayout;
