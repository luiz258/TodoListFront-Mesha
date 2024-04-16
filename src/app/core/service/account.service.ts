import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interface/user.interface';
import { CreateAccount } from '../dto/create-account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http: HttpClient) { }

public url = "https://localhost:7037/";

  Auth(data: User): Observable<any> {
    return this.http.post(`${this.url}api/Auth/v1/authenticate`, data);
  }

  CreateAccount(data: CreateAccount): Observable<any> {
    return this.http.post(`${this.url}api/Auth/v1/create-account`, data);
  }
}
