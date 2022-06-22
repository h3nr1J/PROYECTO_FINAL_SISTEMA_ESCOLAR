import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/cursos/curso.service';

@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.css']
})
export class VerCursosComponent implements OnInit {

  public cursos: Curso[] = [];
  constructor(private apiCursos: CursoService) { }

  ngOnInit(): void {
    this.apiCursos.getCursos().subscribe(data => {
      this.cursos = data;
    })
  }
  cursoVacio(): Curso {
    return {
      codigoC: "",
      nombre: "",
      descripcion: "",
      imagen: ""
    }
  }
  cursoAux = this.cursoVacio();

  cursoNuevo: Curso = this.cursoVacio();
  cursoEditar: Curso = this.cursoVacio();
  // REGISTRAR CURSOS

  indice: number = 0;
  capturarIndice(i: number) {
    this.indice = i
    this.cursoEditar = this.cursos[this.indice]
  }
  editarCurso(): void {
    this.apiCursos.putCurso(this.cursoEditar.codigoC, this.cursoEditar).subscribe(() => {
      this.cursos[this.indice] = this.cursoEditar
      this.cursoEditar = this.cursoVacio()
    })
  }

  eliminarCurso(indice: number): void {
    let curso: Curso = this.cursos[indice];
    this.apiCursos.deleteCurso(curso.codigoC).subscribe(
      () => {
        
        this.apiCursos.getCursos().subscribe((data: Curso[]) => {
          this.cursos = data;
        })
      });
  }
}