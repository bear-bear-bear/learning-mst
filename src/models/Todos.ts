import { types } from 'mobx-state-tree';
import { Todo } from 'models/Todo';

export const Todos = types
  .model('Todos', {
    todos: types.array(Todo),
  })
  .views(self => ({
    get remainingTasks() {
      return self.todos.filter(todo => !todo.finished);
    },
  }))
  .volatile(_self => ({
    newTodoTitle: '',
  }))
  .actions(self => ({
    addTodo(title: string) {
      if (self.todos.find(todo => todo.title === title)) {
        alert('이미 있는 TODO');
        return false;
      }
      self.todos.push({ title });
      return true;
    },
  }))
  .actions(self => ({
    handleChange(e) {
      self.newTodoTitle = e.target.value;
    },
    handleNewTodoClick(_event) {
      const isAdded = self.addTodo(self.newTodoTitle);
      if (isAdded) {
        self.newTodoTitle = '';
      }
    },
    removeTodo(title?: string) {
      const todo = self.todos.find(todo => todo.title === title);
      if (todo) {
        self.todos.remove(todo);
      }
    },
  }));
