import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HorarioService } from 'src/app/services/horarios/horario.service';

@Component({
  selector: 'app-registrar-horario',
  templateUrl: './registrar-horario.component.html',
  styleUrls: ['./registrar-horario.component.css']
})
export class RegistrarHorarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiHorario: HorarioService) { }

  ngOnInit(): void {
    this.formHorario = this.formBuilder.group({
      idHorario: ["", [Validators.required]],
      hora: ["", [Validators.required]],
      idCursoDetalle: ["", [Validators.required]],
      codAu: ["", [Validators.required]],
      idGrado: ["", [Validators.required]]
    })
  }

  window:boolean = true
  onChangeWindowCrearHorario(){
    this.window = true
  }
  onChangeWindowHorario(){
    this.window = false
  }
  
  public formHorario: FormGroup = new FormGroup({
    idHorario: new FormControl(''),
    hora: new FormControl(''),
    idCursoDetalle: new FormControl(''),
    codAu: new FormControl(''),
    idGrado: new FormControl('')
  })
  asignarHorario(){
    this.apiHorario.postHorario(this.formHorario.value).subscribe(()=>{
      this.formHorario.reset()
    })
  }
}
