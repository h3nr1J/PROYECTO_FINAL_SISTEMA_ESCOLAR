import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';

@Component({
  selector: 'app-ver-alumnos',
  templateUrl: './ver-alumnos.component.html',
  styleUrls: ['./ver-alumnos.component.css']
})
export class VerAlumnosComponent implements OnInit {
  public alumnos:Alumno[] = [];
  constructor(private apiAlumnos: AlumnoService) { 
    this.apiAlumnos.getAlumnos().subscribe(data =>{
      this.alumnos = data;
    })
  }
  alumnoNuevo: Alumno = this.AlumnoVacio()
  alumnoEditar: Alumno = this.AlumnoVacio()
  AlumnoVacio(): Alumno {
    return {
      idAlumno: "",
      contrasenia: "",
      dni: "",
      apellidoP: "",
      apellidoM: "",
      nombre: "",
      fechaNacimiento: "",
      sexoA: "",
      direccion: "",
      nroNumeroCelular: ""
    }
  };
  indice: number = 0;
  ngOnInit(): void {
  }
  registrar():void{
    this.apiAlumnos.postAlumno(this.alumnoNuevo).subscribe(
      (mensaje) => {
        this.alumnos.push(this.alumnoNuevo)
    });
  }
  eliminar(indice:number):void{
    let alumno:Alumno = this.alumnos[indice];
    this.apiAlumnos.deleteAlumno(alumno.idAlumno).subscribe(
      () => {
        this.apiAlumnos.getAlumnos().subscribe((data: Alumno[]) => {
          this.alumnos = data;
        })
    });
  }
  capturarIndice(i:number){
    this.indice = i
    this.alumnoEditar = this.alumnos[this.indice]
  }

  editarAlumno():void{
    this.apiAlumnos.putAlumno(this.alumnoEditar.idAlumno,this.alumnoEditar).subscribe(()=>{
      this.alumnos[this.indice] = this.alumnoEditar
      this.alumnoEditar = this.AlumnoVacio()
    })
  }
}
