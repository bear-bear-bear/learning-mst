import { types } from 'mobx-state-tree';

export const Todo = types
  .model('Todo', {
    finished: types.maybe(types.boolean),
    title: types.maybe(types.string),
  })
  .actions(self => ({
    toggle() {
      self.finished = !self.finished;
    },
  }));
