import './button.css';

export default class Button {
  constructor(text) {
    this.text = text;
  }

  mount(parentNode) {
    this.parentNode = parentNode;

    parentNode.innerHTML = `<button>${this.text}</button>`;

    this.button = parentNode.querySelector('button');
  }

  listen(eventName, callback) {
    this.button.addEventListener(eventName, callback);
  }
}
