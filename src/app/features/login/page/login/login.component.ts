import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AccountService } from '../../../../core/service/account.service';
import { User } from '../../../../core/interface/user.interface';
import { SpinnerComponent } from '../../../../core/components/spinner/spinner.component';
import { SecurityUltil } from '../../../../core/ultil/security.ultil';
import { HttpClient } from '@angular/common/http';
import { erroResult } from '../../../../core/interface/error.interface';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AccountService, HttpClient, Router],
  imports: [
    SpinnerComponent,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loading = false;
  errorSection: any[] = [];

  constructor(private accountService: AccountService, private router:Router) { }

  userName = new FormControl('');
  password = new FormControl('');

  submit() {
    this.loading = true;
    let form = {
      userName: this.userName.value,
      password: this.password.value
    } as User;

    this.accountService.Auth(form).subscribe(
      (data) => {
        SecurityUltil.set(data.user, data.token);
        this.loading = false;
        this.router.navigate(['/home']);
      },
      (error: erroResult) => {
        if(error.error){
          this.errorSection.push({errorMessage : error.error});
        }
        this.loading = false;
      }
    );

  }
}
