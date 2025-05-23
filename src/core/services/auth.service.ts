import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

login(username: string, password: string): Observable<string> {
  return this.http.post(`${this.apiUrl}/login`, { userName: username, password }, { responseType: 'text' });
}

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

saveToken(token: string): void {
  console.log('Token sauvegardé:', token);
  localStorage.setItem('token', token);
}


  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
