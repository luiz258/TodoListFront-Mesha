
import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Todo } from '../../interface/todo.interface';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { JsonPipe, NgClass } from '@angular/common';
import { TodoService } from '../../service/todo.service';
import { SecurityUltil } from '../../ultil/security.ultil';

import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterTodoComponent } from '../../../features/register-todo/register-todo/register-todo.component';
import { EditTodoComponent } from '../../../features/edit-todo/edit-todo/edit-todo.component';
@Component({
  selector: 'app-todo-table',
  standalone: true,
  providers: [TodoService, HttpClient],
  imports: [ MatPaginatorModule, TodoItemComponent, JsonPipe, NgClass, MatDialogModule],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss'


})

export class TodoTableComponent {
  page = 1;
  public todoList: any ;

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ) {
  }

  getData(){
    const idUser = SecurityUltil.getUser()?.id;
    this.todoService.listTodo(idUser, this.page).subscribe(
      (data)=>{
        this.todoList = data;
    });
  }

  ngOnInit() {
    this.getData()
  }

  addTask() {
    let dialogRef = this.dialog.open(RegisterTodoComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }

  togleStatus(id:string) {
    this.todoService.toggleStatus(id).subscribe(
      (data) =>{
        this.getData();
      },
      (error) =>{},
    );
  }

  editAtributes(todo:Todo){
    let dialogRef = this.dialog.open(EditTodoComponent, {
      data: todo,
    });
  }

}

