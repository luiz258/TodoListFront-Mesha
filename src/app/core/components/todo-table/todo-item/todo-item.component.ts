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
  @Output()
  toggleEvent = new EventEmitter<string>();

  @Output()
  editEvent = new EventEmitter<any>();

  constructor(private todoService: TodoService){ }

  edit(todo:any) {
    this.editEvent.emit(todo);
  }

  toggle(idTodo: string) {
    this.toggleEvent.emit(idTodo);
  }

}
