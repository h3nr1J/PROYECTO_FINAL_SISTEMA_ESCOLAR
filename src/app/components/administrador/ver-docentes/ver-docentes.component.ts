import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docentes/docente.service';

@Component({
  selector: 'app-ver-docentes',
  templateUrl: './ver-docentes.component.html',
  styleUrls: ['./ver-docentes.component.css']
})
export class VerDocentesComponent implements OnInit {
  public docentes: Docente[] = [];
  constructor(private apiDocentes: DocenteService) { }

  ngOnInit(): void {
    this.apiDocentes.getDocentes().subscribe(data => {
      this.docentes = data;
    })
  }
  docenteVacio():Docente{
    return{
      codD:"",
      contraseniaD: "",
      dniD: "",
      apellidoP: "",
      apellidoM: "",
      nombreD: "",
      correo: "",
      fechaNaciD: "",
      sexoD: "",
      nroCelularD: "",
      direccionD: "",
      rol:"docente"
    }
  }

  docenteAux=this.docenteVacio();

  docenteNuevo: Docente = this.docenteVacio();
  docenteEditar :Docente = this.docenteVacio();
  // REGISTRAR DOCENTES

  indice: number = 0;
  capturarIndice(i:number){
    this.indice = i
    this.docenteEditar = this.docentes[this.indice]
  }
  editarDocente():void{
    this.apiDocentes.putDocente(this.docenteEditar.codD,this.docenteEditar).subscribe(()=>{
      this.docentes[this.indice] = this.docenteEditar
      this.docenteEditar = this.docenteVacio()
    })
  }
  
  eliminarDocente(indice:number):void{
    let docente:Docente = this.docentes[indice];
    this.apiDocentes.deleteDocente(docente.codD).subscribe(
      () => {
    
        this.apiDocentes.getDocentes().subscribe((data: Docente[]) => {
          this.docentes= data;
        })
    });
  }
}
