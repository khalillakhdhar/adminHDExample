import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../interfaces/fournisseur.interface';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl = 'http://localhost:8080/api/fournisseurs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }

  add(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, fournisseur);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
