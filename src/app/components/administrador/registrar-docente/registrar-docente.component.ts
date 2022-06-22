import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docentes/docente.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiDocentes: DocenteService) { }
  docentes: Docente[] = []
  ngOnInit(): void {
    this.formDocente = this.formBuilder.group({
      codD: ["", [Validators.required]],
      contraseniaD: ["",[Validators.required]],
      dniD: ["", [Validators.required]],
      apellidoP: ["",[Validators.required]],
      apellidoM: ["",[Validators.required]],
      nombreD: ["", [Validators.required]],
      correo: ["", [Validators.required,Validators.email]],
      fechaNaciD: ["", [Validators.required]],
      sexoD: ["", [Validators.required]],
      nroCelularD: ["", [Validators.required]],
      direccionD: ["", [Validators.required]],
      rol: ["", [Validators.required]]
    })
  }

  public formDocente: FormGroup = new FormGroup({
    codD: new FormControl(''),
    contraseniaD: new FormControl(''),
    dniD: new FormControl(''),
    apellidoP: new FormControl(''),
    apellidoM: new FormControl(''),
    nombreD: new FormControl(''),
    correo: new FormControl(''),
    fechaNaciD: new FormControl(''),
    sexoD: new FormControl(''),
    nroCelularD: new FormControl(''),
    direccionD: new FormControl(''),
    rol: new FormControl("docente") 
  })

  window:boolean = true

  onChangeWindowCrearDocente(){
    this.window = true
  }

  onChangeWindowDocente(){
    this.window = false
  }
  registrarDocente(){
    this.apiDocentes.postDocente(this.formDocente.value).subscribe(
      () => {
        this.apiDocentes.getDocentes().subscribe((data: Docente[]) => {
          this.docentes = data;
        })
        alert("se registro docent")
        this.formDocente.reset()
      });
      
  }
}
