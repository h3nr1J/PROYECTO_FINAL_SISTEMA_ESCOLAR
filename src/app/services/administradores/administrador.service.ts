import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3600/colegio/admin/"; 
  getAdminById(id:any){
    let url = this.url + id;
    return this.http.get<Administrador>(url);  
  }
  putAdmin(id:any,administrador:any){
    let url = this.url + id;
    return this.http.put<Administrador>(url,administrador);
  }
}
