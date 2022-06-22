import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from 'src/app/models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/docente/";
  getDocentes(){
    return this.http.get<Docente[]>(this.url);
  }
  getDocenteById(id:any){
    let url = this.url + id;
    return this.http.get<Docente>(url);
  }
  postDocente(docente:any){
    return this.http.post(this.url,docente);
  }
  putDocente(id:any,docente:any){
    let url = this.url + id;
    return this.http.put<Docente>(url,docente);
  }
  patchDocente(id:any,docente:any){
    let url = this.url + id;
    return this.http.patch<Docente>(url,docente);
  }
  deleteDocente(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
