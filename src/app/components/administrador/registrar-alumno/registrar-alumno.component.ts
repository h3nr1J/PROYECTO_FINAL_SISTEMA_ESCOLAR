import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { MatriculaService } from 'src/app/services/matriculas/matricula.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {

  window:number=1;
  onChangeWindowRegistrarAlumno(){
    this.window = 1
  }
  onChangeWindowAlumnos() {
    this.window = 2
  }
  onChangeWindowMatricula() {
    this.window = 3
  }
  constructor(
    private formBuilder: FormBuilder, 
    private apiAlumno: AlumnoService, 
    private usuario: UsuarioService,
    private matricula: MatriculaService
    ) { }

  ngOnInit(): void {
    this.formAlumno = this.formBuilder.group({
      idAlumno: ["", [Validators.required]],
      contrasenia: ["",[Validators.required]],
      dni: ["", [Validators.required]],
      apellidoP: ["",[Validators.required]],
      apellidoM: ["",[Validators.required]],
      nombre: ["", [Validators.required]],
      fechaNacimiento: ["", [Validators.required]],
      sexoA: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      nroNumeroCelular: ["", [Validators.required]] 
    })
    this.formMatricula = this.formBuilder.group({
      idMatricula: ["",[Validators.required]],
      fecha: ["",[Validators.required]],
      pagoMatricula: ["", [Validators.required]],
      idGrado: ["", [Validators.required]],
      idAlumno: ["", [Validators.required]],
      idAdmi: ["", [Validators.required]]
    })
  }

  public formAlumno: FormGroup = new FormGroup({
    idAlumno: new FormControl(''),
    contrasenia: new FormControl(''),
    dni: new FormControl(''),
    apellidoP: new FormControl(''),
    apellidoM: new FormControl(''),
    nombre: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    sexoA: new FormControl(''),
    direccion: new FormControl(''),
    nroNumeroCelular: new FormControl('')
  })
  
  public formMatricula: FormGroup = new FormGroup({
    idMatricula: new FormControl(''),
    fecha: new FormControl(Date.now().toString()),
    pagoMatricula: new FormControl(''),
    idGrado: new FormControl(''),
    idAlumno: new FormControl(''),
    idAdmi: new FormControl('')
  })
  public usuarioActual = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }
  onAgregar(){
    let verificar = 0
    this.apiAlumno.postAlumno(this.formAlumno.value).subscribe(data => {
      verificar += 1
    })
    this.usuarioActual = this.usuario.getUsuario()
    const matricular = {
      idMatricula: this.formMatricula.value.idMatricula,
      fecha: Date.now().toString(),
      pagoMatricula: this.formMatricula.value.pagoMatricula,
      idGrado: this.formMatricula.value.idGrado,
      idAlumno: this.formAlumno.value.idAlumno,
      idAdmi: this.usuarioActual.usuario
    }
    console.log(matricular)
    this.matricula.postMatriculas(matricular).subscribe(data => {
      verificar += 1
    })
    if(verificar==2){
      alert("alumno matriculado")
    }
  }
}
