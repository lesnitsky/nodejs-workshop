/**
 * @param {Number} a
 * @param {Number} b
 * @param {String} operator
 */

module.exports.calculate = function calculate(a, b, operator) {
    let answer;

    if (b === 'sqrt') {
        operator = 'sqrt';
    }

    switch (operator) {
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
};

module.exports.handler = function handler() {
    const query = req.query;
    const { operator } = query;

    const a = parseInt(query.a, 10);
    const b = parseInt(query.b, 10);

    if (a.toString() !== query.a || b.toString() !== query.b) {
        return res.send('Invalid input');
    }

    try {
        calculate(a, b, operator);
    } catch (err) {
        return res.send('Invalid input');
    }

    res.send(answer.toString());
};
