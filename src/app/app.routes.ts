import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/page/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { TodoTableComponent } from './core/components/todo-table/todo-table.component';
import { RegisterUserComponent } from './features/register-user/register-user/register-user.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: TodoTableComponent },
  ]
  },
];
