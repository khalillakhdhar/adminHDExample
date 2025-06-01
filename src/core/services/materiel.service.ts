import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from '../interfaces/materiel.interface';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private apiUrl = 'http://localhost:8080/materiels';

  constructor(private http: HttpClient) {}
countMateriels(): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/count`);
}
getStockCritiquePercentage(): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/stock-critique-percentage`);
}

  getAll(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.apiUrl);
  }

  add(materiel: Materiel): Observable<Materiel> {
    return this.http.post<Materiel>(`${this.apiUrl}/add`, materiel);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  addStock(id: number, quantity: number): Observable<Materiel> {
    return this.http.put<Materiel>(`${this.apiUrl}/stock/add/${id}/${quantity}`, {});
  }

  removeStock(id: number, quantity: number): Observable<Materiel> {
    return this.http.put<Materiel>(`${this.apiUrl}/stock/remove/${id}/${quantity}`, {});
  }
}
