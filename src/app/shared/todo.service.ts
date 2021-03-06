import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  listId = 100;

  constructor(private http: Http) {
  }

  getTodos() {
    return this.http.get(`http://gofore-todo.herokuapp.com/todo-lists/${this.listId}`)
      .map(response => response.json())
      .map(data => data.todos);
  }

  addTodo(todo) {
    return this.http.post(`http://gofore-todo.herokuapp.com/todo-lists/${this.listId}`, todo);
  }

  removeTodo(todo) {
    return this.http.delete(`http://gofore-todo.herokuapp.com/todos/${todo.id}`);
  }
}
