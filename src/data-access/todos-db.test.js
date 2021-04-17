const { makeDb, disconnect } = require('../../__test__/fixtures/db');
const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makeTodosDb } = require('./todos-db');
const { Todo } = require('./schema');

describe('data-access, todos-db', () => {
  let todosDb;

  beforeEach(async () => {
    todosDb = makeTodosDb({ makeDb, Todo });
  });

  afterAll(() => disconnect());

  it('find all todos', async () => {
    // Arrange
    const inserts = await Promise.all(
      [makeFakeTodo(), makeFakeTodo(), makeFakeTodo()].map((todo) => {
        return todosDb.insert({ todo });
      })
    );

    // Act
    const found = await todosDb.findAll();

    // Assert
    expect.assertions(inserts.length);
    return inserts.forEach((insert) =>
      expect(found.todos).toContainEqual(
        expect.objectContaining({
          _id: insert._id,
          description: insert.description,
          complete: insert.complete,
        })
      )
    );
  });

  it('find todo by id', async () => {
    // Arrange
    const todo = makeFakeTodo();
    const insert = await todosDb.insert({ todo });

    // Act
    const found = await todosDb.findById({ id: insert._id });

    // Assert
    expect(JSON.stringify(found)).toEqual(JSON.stringify(insert));
  });

  it('insert todo', async () => {
    // Arrange
    const todo = makeFakeTodo();

    // Act
    const insert = await todosDb.insert({ todo });

    // Assert
    expect(JSON.stringify(insert)).toEqual(
      JSON.stringify({
        _id: insert._id,
        ...todo,
      })
    );
  });
});
