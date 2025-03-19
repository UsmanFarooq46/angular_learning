import { environment } from './../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(payload: { email: string; password: string }) {
    return this.http.post(`${environment.api_base_url}/auth/login`, payload);
  }
}
