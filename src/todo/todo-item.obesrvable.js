import { action, observable } from 'mobx';

class TodoItem {
    id = Date.now()

    @observable text = ''

    @observable isDone = false

    constructor(text) {
      this.id = Math.random();
      this.text = text;
    }

    @action
    toggleIsDone = () => {
      console.log('toggling is done', this.isDone);
      this.isDone = !this.isDone;
    }

    @action
    updateText = (text) => {
      this.text = text;
    }
}

export default TodoItem;
