import React from 'react';
import DrumButton from '../DrumButton/DrumButton';

const Row = ({ row, clickHandler }) => (
  <tr>
    {row.map((drumButton, index) => (
      <DrumButton key={index} value={drumButton} clickHandler={clickHandler} />
    ))}
  </tr>
);

export default Row;
