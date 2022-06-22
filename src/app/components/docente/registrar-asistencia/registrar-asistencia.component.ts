import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencias/asistencia.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Asistencia } from 'src/app/models/asistencia';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {

  public asistencias: Asistencia[] = []
  constructor(private formBuilder: FormBuilder, private apiAsistencia: AsistenciaService) { }
 
  ngOnInit(): void {
    this.apiAsistencia.getAsistencias().subscribe(data=>{
      this.asistencias = data
    })
  }
  
  estadoAsistencia: string = ""
 
  confirmar(indice:number){
    let estado = {
      estadoAsistencia: this.estadoAsistencia
    }
    let asistencia = this.asistencias[indice];
    console.log(asistencia)
    this.apiAsistencia.patchAsistencia(asistencia.codAs,estado).subscribe(data=>{
    })
  }  
}
