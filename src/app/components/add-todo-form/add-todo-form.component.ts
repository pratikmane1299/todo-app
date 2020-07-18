import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent {

  todo = '';
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  constructor() { }

  addTodo() {
    this.formSubmitted.emit(this.todo);
    this.todo = '';
  }

}
