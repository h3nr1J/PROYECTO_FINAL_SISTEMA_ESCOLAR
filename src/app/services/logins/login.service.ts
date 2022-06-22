import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { Alumno } from 'src/app/models/alumno';
import { Docente } from 'src/app/models/docente';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private url1:string = "http://localhost:3600/colegio/alumno/";
  private url2:string = "http://localhost:3600/colegio/docente/";
  private url3:string = "http://localhost:3600/colegio/admin/";
  
  validarAlumno(id:any){ 
    let url = this.url1 + id;
    return this.http.get<Alumno>(url);

  }
  validarDocente(id:any){
    let url = this.url2 + id;
    return this.http.get<Docente>(url);
  }
  validarAdministrador(id: any) {
    let url = this.url3 + id;
    return this.http.get<Administrador>(url);
  }
}
