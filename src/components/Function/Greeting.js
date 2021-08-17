import React from 'react';

const Greeting = ({ name, surname }) => {
  return (
    <h1>
      Welcome {name} {surname} to my app
    </h1>
  );
};

export default Greeting;
