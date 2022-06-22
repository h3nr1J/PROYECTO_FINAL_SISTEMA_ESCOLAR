import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoDetalleService } from 'src/app/services/cursos-detalles/curso-detalle.service';

@Component({
  selector: 'app-registrar-curso-detalle',
  templateUrl: './registrar-curso-detalle.component.html',
  styleUrls: ['./registrar-curso-detalle.component.css']
})
export class RegistrarCursoDetalleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiCursoDetalle: CursoDetalleService) { }

  ngOnInit(): void {
    this.formCursoDetalle = this.formBuilder.group({
      idCursoDetalle: ["", [Validators.required]],
      codigoC: ["", [Validators.required]],
      codD: ["", [Validators.required]]
    })
  }

  public formCursoDetalle: FormGroup = new FormGroup({
    idCursoDetalle: new FormControl(''),
    codigoC: new FormControl(''),
    codD: new FormControl('')
  })
  asignarCurso(){
    this.apiCursoDetalle.postCursoDetalle(this.formCursoDetalle.value).subscribe(()=>{
      this.formCursoDetalle.reset()
    })
  }
}
