import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mouvement } from '../interfaces/mouvement.interface';

@Injectable({
  providedIn: 'root'
})
export class MouvementStockService {
  private apiUrl = 'http://localhost:8080/api/mouvements';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Mouvement[]> {
    return this.http.get<Mouvement[]>(this.apiUrl);
  }

  add(mouvement: Mouvement): Observable<Mouvement> {
    return this.http.post<Mouvement>(this.apiUrl, mouvement);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
