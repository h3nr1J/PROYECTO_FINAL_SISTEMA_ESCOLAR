import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/logins/login.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private apiLogin: LoginService,private router:Router, private usuarioActual: UsuarioService) { }
  login = new FormGroup({
    codigo: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  datosIncorrectos(){
    this.DatosCorrectos = true;
        setTimeout(()=>{
          this.DatosCorrectos = false;
      },2000);
  }
  public DatosCorrectos:boolean = false;
  validar():void{
    let rol = this.login.value.codigo.substring(0,2);
    if(rol == 'ad'){
      this.apiLogin.validarAdministrador(this.login.value.codigo).subscribe(data =>{
        if(data.contrasenia == this.login.value.contrasenia){
          const datos = [data.nombreAd,data.apellidoP,data.apellidoM]
          this.usuarioActual.setUsuario(this.login.value.codigo,"ad",data.sexoAd,datos)
          this.router.navigate(['perfil']);
        }else{
          this.datosIncorrectos()
        }
      })
    }
    else if(rol == 'dc'){
      this.apiLogin.validarDocente(this.login.value.codigo).subscribe(data =>{
        if(data.contraseniaD == this.login.value.contrasenia){
          const datos = [data.nombreD,data.apellidoP,data.apellidoM]
          this.usuarioActual.setUsuario(this.login.value.codigo,"dc",data.sexoD,datos)
          this.router.navigate(['perfil']);
        }else{
          this.datosIncorrectos()
        }
      })
    }
    else if(rol == 'al'){
      this.apiLogin.validarAlumno(this.login.value.codigo).subscribe(data =>{
        if(data.contrasenia == this.login.value.contrasenia){
          const datos = [data.nombre,data.apellidoP,data.apellidoM]
          this.usuarioActual.setUsuario(this.login.value.codigo,"al",data.sexoA,datos)
          this.router.navigate(['perfil']);
        }else{
          this.datosIncorrectos()
        }
      })
    }
    else{
      this.datosIncorrectos()
    }
  }
}
