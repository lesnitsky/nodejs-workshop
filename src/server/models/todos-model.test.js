const assert = require('assert');
const proxyquire = require('proxyquire');

let readTodosWasCalled = false;

async function readTodos() {
  readTodosWasCalled = true;

  return JSON.stringify([
    {
      id: 'somId',
      content: 'Some content',
      isDone: false,
    },
  ]);
}

async function writeTodos() {
  return null;
}

const todosModel = proxyquire('./todos-model', {
  './db': {
    readTodos,
    writeTodos,
  },
});

describe('TodosModel', () => {
  describe('#create', () => {
    it('creates new model', async () => {
      await todosModel.create({ content: 'Some content', isDone: false });

      assert(readTodosWasCalled);
    });

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
