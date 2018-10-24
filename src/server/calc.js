/**
 * @param {Number} a
 * @param {Number} b
 * @param {String} operator
 */
function calculate(a, b, operator) {
  let answer;
  let finalOperator = operator;

  if (b === 'sqrt') {
    finalOperator = 'sqrt';
  }

  switch (finalOperator) {
    case '+': {
      answer = a + b;
      break;
    }

    case '-': {
      answer = a - b;
      break;
    }

    case '/': {
      answer = a / b;
      break;
    }

    case '*': {
      answer = a * b;
      break;
    }

    case '**': {
      answer = a ** b;
      break;
    }

    case 'sqrt': {
      answer = Math.sqrt(a);
      break;
    }

    default:
      throw new Error('Invalid input');
  }

  return answer;
}

function handler(req, res) {
  const { query } = req;
  const { operator } = query;

  const a = parseInt(query.a, 10);
  const b = parseInt(query.b, 10);

  if (a.toString() !== query.a || b.toString() !== query.b) {
    return res.send('Invalid input');
  }

  let answer;

  try {
    answer = calculate(a, b, operator);
  } catch (err) {
    return res.send('Invalid input');
  }

  return res.send(answer.toString());
}

module.exports.calculate = calculate;
module.exports.handler = handler;
