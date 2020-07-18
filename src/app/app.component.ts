import { Component } from '@angular/core';

import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo(todo: string) {
    if (todo === '') {
      return;
    }
    const newTodo: Todo = {
      id: this.todos.length + 1,
      text: todo,
      completed: false
    };
    this.todos.push(newTodo);
  }

  markTodoAsComplete(todo: Todo, index: number) {
    const newTodos = [...this.todos];
    newTodos.splice(index, 1, {
      ...todo,
      completed: !todo.completed
    });

    this.todos = newTodos;
  }

  removeTodo(todo: Todo) {
    const updatedTodos = this.todos.filter(t => t.id !== todo.id);
    this.todos = updatedTodos;
  }
}
