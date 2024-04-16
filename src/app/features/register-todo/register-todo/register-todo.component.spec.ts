import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTodoComponent } from './register-todo.component';

describe('RegisterTodoComponent', () => {
  let component: RegisterTodoComponent;
  let fixture: ComponentFixture<RegisterTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
