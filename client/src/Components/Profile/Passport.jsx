import React from 'react';

const Passport = ({stamps}) => {
  return (
    <>
      <div>
        {stamps.map((stamp, i) => <Stamp stamp={stamp} key={i}/>)}
      </div>
    </>
  );
};



export default Passport;