import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aula } from 'src/app/models/aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/aulas/";
  getAulas(){
    return this.http.get<Aula[]>(this.url);
  }
  getAulaById(id:any){
    let url = this.url + id;
    return this.http.get<Aula>(url);
  }
  postAula(aula:any){
    return this.http.post(this.url,aula);
  }
  putAula(id:any,aula:any){
    let url = this.url + id;
    return this.http.put<Aula>(url,aula);
  }
  deleteAula(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
