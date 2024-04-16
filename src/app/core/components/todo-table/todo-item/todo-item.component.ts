import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../../interface/todo.interface';
import {MatIconModule} from '@angular/material/icon';
import { TodoService } from '../../../service/todo.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-todo-item',
  standalone: true,

  imports: [CommonModule, FormsModule, NgClass,  MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() TodoArray: Todo[] | any;
  editMode = false;
  titleInput: string = "";
  @Output()
  toggleEvent = new EventEmitter<string>();

  constructor(private todoService: TodoService){

  }





  updateTask() {
    // this.todo.done = !this.todo.done;
    // this.todoData.updateTodo(this.todo);
    // if (this.todo.done) this.newItemEvent.emit(this.todo.label + ' is done !');
  }



  updateTitle() {
    // var temp = this.todo.label;
    // this.todo.label = this.titleInput;
    // this.todoData.updateTodo(this.todo);
    // this.editMode = false;
    // this.newItemEvent.emit(temp + ' has been updated to ' + this.todo.label);
  }

  toggle(idTodo: string) {
    console.log(idTodo, 'idtodo');
    this.toggleEvent.emit(idTodo);

  }
  enterEditMode() {
    this.editMode = true;
  }

  ngOnInit() {

  }

}
