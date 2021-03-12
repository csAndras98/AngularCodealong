import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoservice.ToggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo)
  }

}
