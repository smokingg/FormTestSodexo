import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environment/environment.dev';
import { Observable } from 'rxjs'; 
import { catchError, map } from 'rxjs/operators'; 
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable()

export class ServiceService {
  url: any;
  constructor(private http: HttpClient) { }

  getComunas() {
    let url= environment.GetComunas;
    return this.http.get<any>(url).toPromise();
  }

   postRegisterUser(User: any) {
    let url= environment.PostRegistros;
    return this.http.post<any>(url, JSON.stringify(User), cabecera)
  }
  getlistarNombres() {
    let url= environment.GetRegistros;
    return this.http.get<any>(url).toPromise();
  }
  deleteUser(userId: number) {
    const url = `${environment.DeleteRegistros}${userId}`;
    return this.http.delete<any>(url, cabecera).toPromise();
  }
  
  
  updateUser(userId: number, userData: any): Observable<any> {
    const url = `${environment.PutRegistros}/${userId}`;
    return this.http.put<any>(url, JSON.stringify(userData), cabecera)
      .pipe(
        catchError(this.handleError) 
      );
  }

  
  private handleError(error: any): Promise<any> {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error.message || error);
  }
  
}
