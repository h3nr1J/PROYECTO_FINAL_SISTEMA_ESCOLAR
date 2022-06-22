import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/cursos/curso.service';


@Component({
  selector: 'app-registrar-curso',
  templateUrl: './registrar-curso.component.html',
  styleUrls: ['./registrar-curso.component.css']
})
export class RegistrarCursoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiCurso: CursoService) { }
  ngOnInit(): void {
    this.formCurso = this.formBuilder.group({
      codigoC: ["", [Validators.required]],
      nombre: ["",[Validators.required]],
      descripcion: ["", [Validators.required]],
      imagen: ["",[Validators.required]]
    })
  }

  public formCurso: FormGroup = new FormGroup({
    codigoC: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
  })

  window:number = 1

  onChangeWindowCrearCurso(){
    this.window = 1
  }

  onChangeWindowCurso(){
    this.window = 2
  }
  
  onChangeWindowCursoDetalle() {
    this.window = 3
  }

  registrarCurso(){
    this.apiCurso.postCurso(this.formCurso.value).subscribe(() => {
        this.formCurso.reset()
      });   
  }
}
