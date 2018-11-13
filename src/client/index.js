import getDomElements from './dom.js';
import bindListeners from './interactions.js';
import Button from './components/Button';

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
