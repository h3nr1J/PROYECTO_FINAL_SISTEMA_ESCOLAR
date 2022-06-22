import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { NotaService } from 'src/app/services/notas/nota.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-registrar-notas',
  templateUrl: './registrar-notas.component.html',
  styleUrls: ['./registrar-notas.component.css']
})
export class RegistrarNotasComponent implements OnInit {
  public notas:Nota[] = [];
  public notasMostrar:Nota[] = [];
  constructor(private usuario:UsuarioService, private apiNotas: NotaService) { }
  public Usuario = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }
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
