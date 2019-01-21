import React, { Component } from 'react';
import { Table } from 'reactstrap';
import playSound from './playSound/playSound';
import buttonMap from './buttonMap/buttonMap';
import { wrappingDivStyle, pStyle } from './MainStyles';
import Row from '../Row/Row';

class Main extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler(e) {
    const keyPressed = e.key.toUpperCase();
    playSound(keyPressed);
  }

  clickHandler(e) {
    playSound(e.target.value);
  }

  render() {
    return (
      <div
        tabIndex="0"
        onKeyDown={e => this.keyDownHandler(e)}
        style={wrappingDivStyle}
      >
        <Table>
          <tbody>
            {buttonMap.map((row, index) => (
              <Row key={index} row={row} clickHandler={this.clickHandler} />
            ))}
          </tbody>
        </Table>
        <br />
        <p style={pStyle}>
          These can be either clicked or activated by keypress.
        </p>
      </div>
    );
  }
}

export default Main;
