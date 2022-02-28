import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Drug} from '../model/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  entityName: string = 'drug'
  apiUrl: string = `${environment.apiUrl}${this.entityName}`

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Drug[]>{
    return this.http.get<Drug[]>(this.apiUrl);
  }
}
