import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEstudiante, IEstudiantes } from '../interfaces/IEstudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private baseURL = `http://localhost:2500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAllData(): Observable<IEstudiantes> {
    return this.http.get<IEstudiantes>(`${this.baseURL}/estudiantes`)
  }
  postData(data: any): Observable<IEstudiante> {
    return this.http.post<IEstudiante>(`${this.baseURL}/estudiantes`, data)
  }
  updateData(data: any, id: string): Observable<IEstudiante> {
    return this.http.put<IEstudiante>(`${this.baseURL}/estudiantes/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/estudiantes/${id}`)
}


}