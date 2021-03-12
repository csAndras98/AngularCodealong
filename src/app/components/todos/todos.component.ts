import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todos => { this.todos = todos; });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos?.filter(t => t.id !== todo.id);
    this.todoservice.DeleteTodo(todo).subscribe();
  }
}
