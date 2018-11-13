const assert = require('assert');
const proxyquire = require('proxyquire').noCallThru();

let readTodosWasCalled = false;

function readTodos() {
  readTodosWasCalled = true;
}

function writeTodos() {}

proxyquire('./todos-model', {
  './db': {
    readTodos,
    writeTodos,
  },
});

const todosModel = require('./todos-model');

describe('TodosModel', () => {
  describe('#create', () => {
    // it('creates new model', async () => {
    //   await todosModel.create({ content: 'Some content', isDone: false });

    //   assert(readTodosWasCalled);
    // });

    it('throws if invalid data was passed', async () => {
      assert.rejects(async () => {
        await todosModel.create({ isDone: false });
      });

      assert.doesNotReject(async () => {
        await todosModel.create({ content: 'Some content', isDone: false });
      });
    });
  });
});
