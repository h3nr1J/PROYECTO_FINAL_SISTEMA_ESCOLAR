import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grado } from 'src/app/models/grado';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/grados/";
  getGrados(){
    return this.http.get<Grado[]>(this.url);
  }
  getGradosById(id:any){
    let url = this.url + id;
    return this.http.get<Grado>(url);
  }
  postGrados(grado:any){
    return this.http.post(this.url,grado);
  }
  putGrado(id:any,grado:any){
    let url = this.url + id;
    return this.http.put<Grado>(url,grado);
  }
  deleteGrado(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
