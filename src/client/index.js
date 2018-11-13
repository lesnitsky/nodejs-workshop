import getDomElements from './dom';
import bindListeners from './interactions';
import Button from './components/Button';

console.log('index.js');

const {
  inputA, inputB, select, answer, buttonContainer,
} = getDomElements();

const button = new Button('Calculate');
button.mount(buttonContainer);

bindListeners({
  inputA,
  inputB,
  select,
  button,
  answer,
});
