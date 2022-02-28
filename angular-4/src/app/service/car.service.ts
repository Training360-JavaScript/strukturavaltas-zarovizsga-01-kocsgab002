import { Cars } from './../model/cars';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  entityName: string = 'cars'
  apiUrl: string = `${environment.apiUrl}${this.entityName}`

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiUrl);
  }

  get(id: number): Observable<Cars> {
    return this.http.get<Cars>(`${this.apiUrl}/${id}`);
  }

  update(car: Cars): Observable<Cars> {
    return this.http.patch<Cars>(
      `${this.apiUrl}/${car.id}`, car
    )
  }
}
