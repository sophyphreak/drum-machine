import React from 'react';
import { h1Style, h4Style } from './TitleBarStyle';

const TitleBar = () => (
  <div>
    <h1 style={h1Style}>Drum Machine</h1>
    <h4 style={h4Style}>by Andrew Horn</h4>
  </div>
);

export default TitleBar;
