import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080'; // URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  registerUser(registerUserData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerUserData);
  }
  loginUser(loginUserData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginUserData);
  }
}
