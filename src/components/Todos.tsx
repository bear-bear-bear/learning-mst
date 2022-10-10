import * as React from 'react';

import Todo from 'components/Todo';
import { observer } from 'mobx-react';
import { Todos as TodosStore } from 'models/Todos';

const store = TodosStore.create({
  todos: [
    {
      title: 'Get Coffee',
    },
    {
      title: 'Write simpler code',
    },
  ],
});

const Todos: React.FC = observer(() => {
  return (
    <div>
      <input value={store.newTodoTitle} onChange={store.handleChange} />
      <button onClick={store.handleNewTodoClick}>Add</button>
      <ul>
        {store.todos.map(todo => (
          <Todo
            key={todo.title}
            title={todo.title}
            finished={todo.finished}
            toggle={todo.toggle}
            remove={() => store.removeTodo(todo.title)}
          />
        ))}
      </ul>
      Tasks left: {store.remainingTasks.length}
      <ul>
        {store.remainingTasks.map(todo => (
          <li key={todo.title + 'remain'}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
});

export default Todos;
