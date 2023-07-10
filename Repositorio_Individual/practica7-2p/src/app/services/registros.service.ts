import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegistro, IRegistros } from '../interfaces/IRegistro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseURL = `http://localhost:2500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAllData(): Observable<IRegistros> {
    return this.http.get<IRegistros>(`${this.baseURL}/registros`)
  }
  postData(data: any): Observable<IRegistro> {
    return this.http.post<IRegistro>(`${this.baseURL}/registros`, data)
  }
  updateData(data: any, id: string): Observable<IRegistro> {
    return this.http.put<IRegistro>(`${this.baseURL}/registros/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/registros/${id}`)
}


}