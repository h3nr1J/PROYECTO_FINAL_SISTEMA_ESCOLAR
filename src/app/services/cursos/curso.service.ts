import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/cursos/";
  getCursos(){
    return this.http.get<Curso[]>(this.url);
  }
  getCursoById(id:any){
    let url = this.url + id;
    return this.http.get<Curso>(url);
  }
  postCurso(curso:any){
    return this.http.post(this.url,curso);
  }
  putCurso(id:any,curso:any){
    let url = this.url + id;
    return this.http.put<Curso>(url,curso);
  }
  patchCurso(id:any,curso:any){
    let url = this.url + id;
    return this.http.patch<Curso>(url,curso);
  }
  deleteCurso(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
