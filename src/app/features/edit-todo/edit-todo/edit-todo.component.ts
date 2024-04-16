import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SpinnerComponent } from '../../../core/components/spinner/spinner.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { Todo } from '../../../core/interface/todo.interface';
import { TodoService } from '../../../core/service/todo.service';
import { CreateTodo } from '../../../core/dto/create.todo';
import { SecurityUltil } from '../../../core/ultil/security.ultil';

@Component({
  selector: 'app-edit-todo',
  standalone: true,

  imports: [
    MatDialogModule, MatSlideToggleModule,
    MatRadioModule,
    SpinnerComponent,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    TodoService
  ],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: {todo: Todo}, private todoService:TodoService){}

isCompleted = this.data.todo.isCompleted;
title = new FormControl(this.data.todo.title);
description = new FormControl(this.data.todo.description);


submit(){
  const form = {
    id: this.data.todo.id,
    title: this.title.value,
    description: this.description.value,
    idUser:  SecurityUltil.getUser()?.id,
    isCompleted: this.isCompleted,
  } as Todo;
  this.todoService.editTodo(form).subscribe(
    ()=>{},
    ()=>{},
  );}
}

