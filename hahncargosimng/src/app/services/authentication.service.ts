import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(user: string, pass: string) {
    const apiUrl = 'https://localhost:7115/user/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const data = { username: user, password: pass };

    this.httpClient.post(apiUrl, data, { headers }).subscribe((response) => {
      console.log(response);
    });
  }
}

export class ResponseAA {
  Token: string = '';
}
