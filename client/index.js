const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const select = document.querySelector('select');
const button = document.querySelector('button');

const answer = document.querySelector('#answer');

button.addEventListener('click', () => {
  const operator = encodeURIComponent(select.value);

  fetch(`http://localhost:3000/calc?a=${inputA.value}&b=${inputB.value}&operator=${operator}`)
    .then(res => res.text())
    .then(result => {
      answer.innerHTML = result;
    });
});
