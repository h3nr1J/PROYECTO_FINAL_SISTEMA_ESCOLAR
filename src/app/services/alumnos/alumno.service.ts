import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/alumno/";
  getAlumnos(){
    return this.http.get<Alumno[]>(this.url);
  }
  getAlumnoById(id:any){
    let url = this.url + id;
    return this.http.get<Alumno>(url);
  }
  postAlumno(alumno:any){
    return this.http.post(this.url,alumno);
  }
  putAlumno(id:any,alumno:any){
    let url = this.url + id;
    return this.http.put<Alumno>(url,alumno);
  }
  patchAlumno(id:any,alumno:any){
    let url = this.url + id;
    return this.http.patch<Alumno>(url,alumno);
  }
  deleteAlumno(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
