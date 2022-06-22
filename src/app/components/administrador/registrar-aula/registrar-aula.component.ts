import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Aula } from 'src/app/models/aula';
import { AulaService } from 'src/app/services/aulas/aula.service';

@Component({
  selector: 'app-registrar-aula',
  templateUrl: './registrar-aula.component.html',
  styleUrls: ['./registrar-aula.component.css']
})
export class RegistrarAulaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiAula: AulaService) { }
  ngOnInit(): void {
    this.formAula = this.formBuilder.group({
      codAu: ["", [Validators.required]],
      capacidadA: ["",[Validators.required]],
      numeroAula: ["", [Validators.required]],
      piso: ["",[Validators.required]]
    })
  }

  public formAula: FormGroup = new FormGroup({
    codAu: new FormControl(''),
    capacidadA: new FormControl(''),
    numeroAula: new FormControl(''),
    piso: new FormControl(''),
  })

  window:boolean = true

  onChangeWindowCrearAula(){
    this.window = true
  }
  onChangeWindowAula(){
    this.window = false
  }
  
  registrarAula(){
    this.apiAula.postAula(this.formAula.value).subscribe(() => {
        this.formAula.reset()
      });   
  }

}
