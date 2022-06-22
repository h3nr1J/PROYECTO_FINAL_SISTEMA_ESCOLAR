import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private usuarioActual: UsuarioService) { }

  public Usuario = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }
  public foto:string = "";
  ngOnInit(): void {
    this.Usuario = this.usuarioActual.getUsuario()
    if(this.Usuario.sexo == 'M'){
      if(this.Usuario.rol == 'dc'){
        this.foto = "/assets/teacher2.png"
      }
      else if(this.Usuario.rol == 'ad'){
        this.foto = "/assets/profile.png"
      }
      else{
        this.foto = "/assets/student2.png"
      }
    }
    else if(this.Usuario.sexo == 'F'){
      if(this.Usuario.rol == 'dc'){
        this.foto = "/assets/teacher.png"
      }
      else if(this.Usuario.rol == 'ad'){
        this.foto = "/assets/profile.png"
      }
      else{
        this.foto = "/assets/student.png"
      }
    }
  }
}
