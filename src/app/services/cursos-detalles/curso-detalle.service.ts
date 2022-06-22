import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CursoDetalle } from 'src/app/models/cursoDetalle';

@Injectable({
  providedIn: 'root'
})
export class CursoDetalleService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/cursoDetalles/";
  getCursoDetalles(){
    return this.http.get<CursoDetalle[]>(this.url);
  }
  getCursoDetalleById(id:any){
    let url = this.url + id;
    return this.http.get<CursoDetalle>(url);
  }
  postCursoDetalle(cursoDetalle:any){
    return this.http.post(this.url,cursoDetalle);
  }
  putCursoDetalle(id:any,cursoDetalle:any){
    let url = this.url + id;
    return this.http.put<CursoDetalle>(url,cursoDetalle);
  }
  deleteCursoDetalle(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
