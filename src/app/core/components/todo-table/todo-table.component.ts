
import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Todo } from '../../interface/todo.interface';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { JsonPipe, NgClass } from '@angular/common';
import { TodoService } from '../../service/todo.service';
import { SecurityUltil } from '../../ultil/security.ultil';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-table',
  standalone: true,
  providers: [TodoService, HttpClient],
  imports: [ MatPaginatorModule, TodoItemComponent, JsonPipe,NgClass],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss'


})

export class TodoTableComponent {
  page = 1;
  public todoList: any ;

  constructor(private todoService: TodoService) {
  }

  getData(){
    console.log(this.todoList);
    const idUser = SecurityUltil.getUser()?.id;
    this.todoService.listTodo(idUser, this.page).subscribe(
      (data)=>{
        this.todoList = data;
    });
  }

  ngOnInit() {
    this.getData()
  }
  updateList() {
    // this.todos = this.todoData.getTodos();
  }

  addTask() {
    let todo = {

    } as Todo;
    this.todoService.createTodo(todo).subscribe(
      (data) =>{},
      (error)=>{}
    );
  }

  togleStatus(id:string) {
    this.todoService.toggleStatus(id).subscribe(
      (data) =>{
        this.getData();
      },
      (error) =>{},
    );
  }

}

