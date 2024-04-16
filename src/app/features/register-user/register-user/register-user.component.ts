import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SpinnerComponent } from '../../../core/components/spinner/spinner.component';
import { AccountService } from '../../../core/service/account.service';
import { CreateAccount } from '../../../core/dto/create-account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  providers:[AccountService, Router],
  imports: [
    SpinnerComponent,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  fullName = new FormControl('');
  userName = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');

  public loading = false;
  errorSection: any[] = [];

  constructor(private accountService:AccountService, private router: Router ){ }

  get validatePassword(){
    return this.password.value === this.confirmPassword.value && this.confirmPassword.value!.length > 3 && this.password.value!.length > 3;
  }

  submit(){
    this.loading = true;
    const form = {
      fullName: this.fullName.value,
      userName: this.userName.value,
      password: this.password.value,
    } as CreateAccount;
    this.accountService.CreateAccount(form).subscribe(
      (data) => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      (error) => {
        this.loading = false;
        if(error.error){
          this.errorSection.push({errorMessage : error.error});
        }
      },
    )}
}
