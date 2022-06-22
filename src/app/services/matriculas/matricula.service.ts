import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matricula } from 'src/app/models/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/matriculas/";
  getMatriculas(){
    return this.http.get<Matricula[]>(this.url);
  }
  getMatriculasById(id:any){
    let url = this.url + id;
    return this.http.get<Matricula>(url);
  }
  postMatriculas(matriculas:any){
    return this.http.post(this.url,matriculas);
  }
  putMatriculas(id:any,matriculas:any){
    let url = this.url + id;
    return this.http.put<Matricula>(url,matriculas);
  }
  deleteMatriculas(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
