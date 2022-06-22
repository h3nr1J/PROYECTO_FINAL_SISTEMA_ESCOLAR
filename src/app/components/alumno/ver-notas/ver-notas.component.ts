import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/notas/nota.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Alumno } from 'src/app/models/alumno';
@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css']
})
export class VerNotasComponent implements OnInit {
  private notas:Nota[] = [];
  public notasMostrar:Nota[] = [];
  public Usuario = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }
  public alumno: Alumno = this.alumnoVacio()
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
  constructor(private usuario:UsuarioService,private apiNotas:NotaService) { }
  ngOnInit(): void {
    this.Usuario =  this.usuario.getUsuario();
    this.apiNotas.getNotas().subscribe(data => {
      this.notas = data
      for (let index = 0; index <this.notas.length; index++) {
        if(this.notas[index].idAlumno == this.Usuario.usuario.toString()){
          this.notasMostrar.push(this.notas[index])
        }     
      }
    })
  }
}
