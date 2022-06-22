import { Component,OnInit, SimpleChanges } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { Alumno } from 'src/app/models/alumno';
import { Docente } from 'src/app/models/docente';
import { AdministradorService } from 'src/app/services/administradores/administrador.service';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { DocenteService } from 'src/app/services/docentes/docente.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  constructor(
    private rol: UsuarioService,
    private apiAlumno :AlumnoService,
    private apiDocente:DocenteService,
    private apiAdministrador:AdministradorService
  ) { }


  public alumno: Alumno = this.alumnoVacio()
  public docente: Docente = this.docenteVacio()
  public admin: Administrador = this.adminVacio()
  alumnoVacio():Alumno{
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
  }
  docenteVacio():Docente{
    return {
      codD:"",
      contraseniaD:"",
      dniD:"",
      apellidoP:"",
      apellidoM:"",
      nombreD:"",
      correo:"",
      fechaNaciD:"",
      sexoD:"",
      nroCelularD:"",
      direccionD:"",
      rol:""
    }
  }

  adminVacio(): Administrador{
    return {
      idAdmi: "",
      contrasenia: "",
      apellidoP: "",
      apellidoM: "",
      nombreAd: "",
      dni: "",
      sexoAd: "",
      celular: "",
      direccion: "",
      correo: "",
      rol: "",
    }
  }
  public foto:string = "";
  public Usuario = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }
  public usuarioEdit ={
    contrasenia: "",
    direccion: ""
  }
  ngOnInit(): void {
    this.Usuario = this.rol.getUsuario();
    if(this.Usuario.rol == 'ad'){
      this.foto = "/assets/profile.png"
      this.apiAdministrador.getAdminById(this.Usuario.usuario).subscribe(data => {
        this.admin = data;
        this.usuarioEdit.contrasenia = data.contrasenia
        this.usuarioEdit.direccion = data.direccion
      })
    }
    else if(this.Usuario.rol == 'dc'){
      if(this.Usuario.sexo == 'M'){
        this.foto = "/assets/teacher2.png"
      }
      else{
        this.foto = "/assets/teacher.png"
      }
      this.apiDocente.getDocenteById(this.Usuario.usuario).subscribe(data => {
        this.docente = data;
        this.usuarioEdit.contrasenia = data.contraseniaD
        this.usuarioEdit.direccion = data.direccionD
      })
    }
    else if(this.Usuario.rol == 'al'){
      if(this.Usuario.sexo == 'M'){
        this.foto = "/assets/student2.png"
      }
      else{
        this.foto = "/assets/student.png"
      }
      this.apiAlumno.getAlumnoById(this.Usuario.usuario).subscribe(data => {
        this.alumno = data;
        this.usuarioEdit.contrasenia = data.contrasenia
        this.usuarioEdit.direccion = data.direccion
      })
    }
  }
  GuardarCambios(){
    if(this.Usuario.rol == 'ad'){
      this.apiAdministrador.putAdmin(this.Usuario.usuario,this.usuarioEdit).subscribe(data =>{
        this.admin.direccion = this.usuarioEdit.direccion
        alert("se guardo cambios")

      })
    }
    else if(this.Usuario.rol == 'dc'){
      this.apiDocente.patchDocente(this.Usuario.usuario,{
          contraseniaD: this.usuarioEdit.contrasenia,
          direccionD: this.usuarioEdit.direccion
      }).subscribe(data => {
        this.docente.direccionD = this.usuarioEdit.direccion
        alert("se guardo cambios")
      })
    }
    else if(this.Usuario.rol == 'al'){
      this.apiAlumno.patchAlumno(this.Usuario.usuario,this.usuarioEdit).subscribe(data =>{
        this.alumno.direccion = this.usuarioEdit.direccion
        alert("se guardo cambios")
      })
    }
  }
}