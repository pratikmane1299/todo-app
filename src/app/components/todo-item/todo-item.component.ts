import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() markTodoAsComplete: EventEmitter<Todo> = new EventEmitter();
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onTodoComplete(todo: Todo) {
    this.markTodoAsComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.removeTodo.emit(todo);
  }

}
