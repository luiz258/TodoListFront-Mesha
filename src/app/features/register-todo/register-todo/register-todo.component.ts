import { Component } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { TodoService } from '../../../core/service/todo.service';
import { CreateTodo } from '../../../core/dto/create.todo';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SpinnerComponent } from '../../../core/components/spinner/spinner.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SecurityUltil } from '../../../core/ultil/security.ultil';

import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-register-todo',
  standalone: true,
  imports: [
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
  providers:[TodoService],
  templateUrl: './register-todo.component.html',
  styleUrl: './register-todo.component.scss'
})
export class RegisterTodoComponent {
constructor(private todoService:TodoService){}

  isCompleted = false;
  title = new FormControl('');
  description = new FormControl('');


submit(){
  const form = {
    title: this.title.value,
    description: this.description.value,
    idUser:  SecurityUltil.getUser()?.id,
    isCompleted: this.isCompleted,
  } as CreateTodo;

  this.todoService.createTodo(form).subscribe(
    ()=>{},
    ()=>{},
  );
}

}
