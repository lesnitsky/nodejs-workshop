console.log('dom.js');

export default function getDomElements() {
  const inputA = document.querySelector('#a');
  const inputB = document.querySelector('#b');
  const select = document.querySelector('select');

  const answer = document.querySelector('#answer');
  const buttonContainer = document.querySelector('#buttonContainer');

  return {
    inputA,
    inputB,
    select,
    answer,
    buttonContainer,
  };
}
