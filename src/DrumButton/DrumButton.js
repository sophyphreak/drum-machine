import React from 'react';
import { Button } from 'reactstrap';
import { buttonStyle } from './DrumButtonStyle';

const DrumButton = ({ clickHandler, value }) => (
  <th>
    <Button onClick={clickHandler} value={value} style={buttonStyle}>
      {value}
    </Button>
  </th>
);

export default DrumButton;
