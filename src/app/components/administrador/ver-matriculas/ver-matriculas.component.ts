import {Component,OnInit} from '@angular/core';
import {MatriculaService} from 'src/app/services/matriculas/matricula.service';
import {DocenteService} from 'src/app/services/docentes/docente.service';
import {Matricula} from 'src/app/models/matricula';
@Component({
  selector: 'app-ver-matriculas',
  templateUrl: './ver-matriculas.component.html',
  styleUrls: ['./ver-matriculas.component.css']
})
export class VerMatriculasComponent implements OnInit {

  public matriculas: Matricula[] = [];
  constructor(private apiMatriculas: MatriculaService) {}

  ngOnInit(): void {
    this.apiMatriculas.getMatriculas().subscribe(data => {
      this.matriculas = data;
    })
  }
  matriculaVacio(): Matricula {
    return {
      idMatricula: "",
      fecha: "",
      pagoMatricula: 0,
      idGrado: "",
      idAlumno: "",
      idAdmi: ""
    }
  }

  matriculaAux = this.matriculaVacio();

  matriculaNueva: Matricula = this.matriculaVacio();
  matriculaEditar: Matricula = this.matriculaVacio();
  // REGISTRAR DOCENTES

  indice: number = 0;
  capturarIndice(i: number) {
    this.indice = i
    this.matriculaEditar = this.matriculas[this.indice]
  }
  editarMatricula(): void {
    this.apiMatriculas.putMatriculas(this.matriculaEditar.idMatricula, this.matriculaEditar).subscribe(() => {
      this.matriculas[this.indice] = this.matriculaEditar
      this.matriculaEditar = this.matriculaVacio()
    })
  }

  eliminarMatricula(indice: number): void {
    let matricula: Matricula = this.matriculas[indice];
    this.apiMatriculas.deleteMatriculas(matricula.idMatricula).subscribe(
      () => {
        this.apiMatriculas.getMatriculas().subscribe((data: Matricula[]) => {
          this.matriculas = data;
        })
      });
  }
}
