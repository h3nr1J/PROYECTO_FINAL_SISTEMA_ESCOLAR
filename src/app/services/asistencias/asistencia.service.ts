import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asistencia } from 'src/app/models/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:3600/colegio/asistencia/";
  getAsistencias(){
    return this.http.get<Asistencia[]>(this.url);
  }
  getAsistenciaById(id:any){
    let url = this.url + id;
    return this.http.get<Asistencia>(url);
  }
  postAsistencia(asistencia:any){
    return this.http.post(this.url,asistencia);
  }
  patchAsistencia(id:any,asistencia:any){
    let url = this.url + id;
    return this.http.patch<Asistencia>(url,asistencia);
  }
  deleteAsistencia(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
