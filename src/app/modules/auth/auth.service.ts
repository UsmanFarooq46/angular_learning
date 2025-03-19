import { environment } from './../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from './auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(payload: { email: string; password: string }):Observable<LoginData> {
    return this.http.post<LoginData>(`${environment.api_base_url}/auth/login`, payload);
  }
}
