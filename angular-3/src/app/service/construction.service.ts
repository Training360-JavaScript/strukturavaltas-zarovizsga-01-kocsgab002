
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Construction} from '../model/construction'


@Injectable({
  providedIn: 'root'
})
export class ConstructionService {


  entityName: string = 'constructions'
  apiUrl: string = `${environment.apiUrl}${this.entityName}`

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.apiUrl);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}/${id}`);
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `${this.apiUrl}/${construction.id}`, construction)
  }

  delete(construction: Construction): Observable<Construction> {
    return this.http.delete<Construction>(
      `${this.apiUrl}/${construction.id}`
    );
  }

  create(construction: Construction): Observable<Construction> {
    return this.http.post<Construction>(`${this.apiUrl}`, construction);
  }
}
