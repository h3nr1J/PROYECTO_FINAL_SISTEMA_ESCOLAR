import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario } from 'src/app/models/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:3600/colegio/horarios/";
  getHorarios(){
    return this.http.get<Horario[]>(this.url);
  }
  getHorariosById(id:any){
    let url = this.url + id;
    return this.http.get<Horario>(url);
  }
  postHorario(horario:any){
    return this.http.post(this.url,horario);
  }
  putHorario(id:any,horario:any){
    let url = this.url + id;
    return this.http.put<Horario>(url,horario);
  }
  deleteHorario(id:any){
    let url = this.url + id;
    return this.http.delete(url)
  }
}
