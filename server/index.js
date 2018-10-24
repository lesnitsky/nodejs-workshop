var express = require('express');
var app = express();

console.log('Server started');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/calc', (req, res) => {
  const query = req.query;
  const { operator } = query;

  const a = parseInt(query.a, 10);
  const b = parseInt(query.b, 10);

  if (a.toString() !== query.a || b.toString() !== query.b) {
    return res.send('Invalid input');
  }

  let answer;

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

    default:
      return res.send('Invalid input');
  }

  res.send(answer.toString());
});

app.listen(3000);
