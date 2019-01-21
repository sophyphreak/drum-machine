import clapOne from './sounds/clap-808.wav';
import clapTwo from './sounds/clap-analog.wav';
import clapThree from './sounds/clap-crushed.wav';
import clapFour from './sounds/clap-fat.wav';
import clapFive from './sounds/clap-slapper.wav';
import clapSix from './sounds/clap-tape.wav';
import cowbell from './sounds/cowbell-808.wav';
import crashOne from './sounds/crash-808.wav';
import crashTwo from './sounds/crash-acoustic.wav';

const qSound = new Audio(clapOne);
const wSound = new Audio(clapTwo);
const eSound = new Audio(clapThree);
const aSound = new Audio(clapFour);
const sSound = new Audio(clapFive);
const dSound = new Audio(clapSix);
const zSound = new Audio(cowbell);
const xSound = new Audio(crashOne);
const cSound = new Audio(crashTwo);

export default letter => {
  switch (letter) {
    case 'Q':
      qSound.play();
      break;
    case 'W':
      wSound.play();
      break;
    case 'E':
      eSound.play();
      break;
    case 'A':
      aSound.play();
      break;
    case 'S':
      sSound.play();
      break;
    case 'D':
      dSound.play();
      break;
    case 'Z':
      zSound.play();
      break;
    case 'X':
      xSound.play();
      break;
    case 'C':
      cSound.play();
      break;
    default:
      break;
  }
};
