import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/models/aula';
import { AulaService } from 'src/app/services/aulas/aula.service';
@Component({
  selector: 'app-ver-aulas',
  templateUrl: './ver-aulas.component.html',
  styleUrls: ['./ver-aulas.component.css']
})
export class VerAulasComponent implements OnInit {
  public aulas: Aula[] = [];
  constructor(private apiAulas: AulaService) { }

  ngOnInit(): void {
    this.apiAulas.getAulas().subscribe(data => {
      this.aulas = data;
    })
  }
  aulaVacio(): Aula {
    return {
      codAu: "",
      capacidadA: 0,
      numeroAula: 0,
      piso: 0
    }
  }
  aulaAux = this.aulaVacio();

  aulaNuevo: Aula = this.aulaVacio();
  aulaEditar: Aula = this.aulaVacio();
  // REGISTRAR CURSOS

  indice: number = 0;
  capturarIndice(i: number) {
    this.indice = i
    this.aulaEditar = this.aulas[this.indice]
  }
  editarAula(): void {
    this.apiAulas.putAula(this.aulaEditar.codAu, this.aulaEditar).subscribe(() => {
      this.aulas[this.indice] = this.aulaEditar
      this.aulaEditar = this.aulaVacio()
    })
  }

  eliminarAula(indice: number): void {
    let aula: Aula = this.aulas[indice];
    this.apiAulas.deleteAula(aula.codAu).subscribe(
      () => {
        
        this.apiAulas.getAulas().subscribe((data: Aula[]) => {
          this.aulas = data;
        })
      });
  }

}
