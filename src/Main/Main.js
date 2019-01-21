import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import playSound from './playSound/playSound';

const wrappingDivStyle = {
  margin: '2% auto',
  width: '20%'
};
const buttonStyle = {
  height: '100px',
  width: '100px'
};
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
            <tr>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="Q"
                  style={buttonStyle}
                >
                  Q
                </Button>
              </th>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="W"
                  style={buttonStyle}
                >
                  W
                </Button>
              </th>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="E"
                  style={buttonStyle}
                >
                  E
                </Button>
              </th>
            </tr>
            <tr>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="A"
                  style={buttonStyle}
                >
                  A
                </Button>
              </th>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="S"
                  style={buttonStyle}
                >
                  S
                </Button>
              </th>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="D"
                  style={buttonStyle}
                >
                  D
                </Button>
              </th>
            </tr>
            <tr>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="Z"
                  style={buttonStyle}
                >
                  Z
                </Button>
              </th>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="X"
                  style={buttonStyle}
                >
                  X
                </Button>
              </th>
              <th>
                <Button
                  onClick={this.clickHandler}
                  value="C"
                  style={buttonStyle}
                >
                  C
                </Button>
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Main;
