import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private usuarioActual:any = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }

  setUsuario(usuario:any,rol:any,sexo:any,datos:string[]){
    this.usuarioActual = {
      usuario: usuario,
      rol: rol,
      sexo: sexo,
      datos:datos
    }
  }

  getUsuario(){
    return this.usuarioActual
  }
}
