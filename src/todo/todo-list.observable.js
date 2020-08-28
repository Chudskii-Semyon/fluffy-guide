import { action, computed, observable } from 'mobx';
import TodoItem from './todo-item.obesrvable';

class TodoListStore {
    @observable list = []

    constructor(texts) {
      texts.forEach((text) => this.addTodo(text));
    }

    @action addTodo(text) {
      this.list.push(new TodoItem(text));
    }

    @action removeTodoById(id) {
      this.list = this.list.filter((item) => item.id !== id);
    }

    @computed get finishedTodos() {
      return this.list.filter((item) => item.isDone);
    }

    @computed get openTodos() {
      return this.list.filter((item) => !item.isDone);
    }
}

export default TodoListStore;
