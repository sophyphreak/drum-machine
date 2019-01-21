import React from 'react';

const h1Style = {
  textAlign: 'center'
};

const h3Style = {
  textAlign: 'center'
};

const TitleBar = () => (
  <div>
    <h1 style={h1Style}>Drum Machine</h1>
    <h3 style={h3Style}>by Andrew Horn</h3>
  </div>
);

export default TitleBar;
