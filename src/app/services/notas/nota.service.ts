import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from 'src/app/models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/notas/";
  getNotas(){
    return this.http.get<Nota[]>(this.url);
  }
  getNotaById(id:any){
    let url = this.url + id;
    return this.http.get<Nota>(url);
  }
  postNota(nota:any){
    return this.http.post(this.url,nota);
  }
  patchNota(id:any,nota:any){
    let url = this.url + id;
    return this.http.patch<Nota>(url,nota);
  }
  deleteNota(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
