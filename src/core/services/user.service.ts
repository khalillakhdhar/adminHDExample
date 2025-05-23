import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/login`, { userName: username, password }, { responseType: 'text' });
  }

  register(user: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.apiUrl}/add`, user);
  }

  getByEmail(email: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.apiUrl}/email/${email}`);
  }

  update(id: number, user: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>(`${this.apiUrl}/users/${id}`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
getAll(): Observable<UserInfo[]> {
  return this.http.get<UserInfo[]>(`${this.apiUrl}/users`);
}

delete(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
}

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
