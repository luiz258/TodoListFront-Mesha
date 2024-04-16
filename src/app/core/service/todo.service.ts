import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeleteTodo } from '../dto/delete.todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public url = "https://localhost:7037/";

createTodo(data: Todo): Observable<any> {
  return this.http.post(`${this.url}api/Todo/v1/post`, data);
}

listTodo(idUser:string | undefined, page: number): Observable<any> {
  return this.http.get(`${this.url}api/Todo/v1/getTodo/${idUser}/${page}`);
}

editTodo(data: Todo): Observable<any> {
  return this.http.put(`${this.url}api/Todo/v1/edit`, data);
}

deleteTodo(data: DeleteTodo): Observable<any> {
  return this.http.delete(`${this.url}api/Todo/v1/delete`, {body: data});
}

toggleStatus(idTodo: string): Observable<any> {
  return this.http.post(`${this.url}api/Todo/v1/toggle-status/${idTodo}`,{});
}
}
