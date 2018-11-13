export default function bindListeners({
  button, select, inputA, inputB, answer,
}) {
  button.listen('click', () => {
    const operator = encodeURIComponent(select.value);

    fetch(`http://localhost:3000/calc?a=${inputA.value}&b=${inputB.value}&operator=${operator}`)
      .then(res => res.text())
      .then((result) => {
        answer.innerHTML = result; // eslint-disable-line
      });
  });
}
