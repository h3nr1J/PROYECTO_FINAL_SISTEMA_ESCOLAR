import { Component, OnInit } from '@angular/core';
import { CursoDetalle } from 'src/app/models/cursoDetalle';
import { CursoDetalleService } from 'src/app/services/cursos-detalles/curso-detalle.service';
import { CursoService } from 'src/app/services/cursos/curso.service';
import { DocenteService } from 'src/app/services/docentes/docente.service';

@Component({
  selector: 'app-ver-curso-detalle',
  templateUrl: './ver-curso-detalle.component.html',
  styleUrls: ['./ver-curso-detalle.component.css']
})
export class VerCursoDetalleComponent implements OnInit{

  public cursoDetalles: CursoDetalle[] = []
  constructor(private apiCursoDetalle:CursoDetalleService) { }
  indice: number = 0;
  cursoDetalleNuevo: CursoDetalle = this.CursoDetalleVacio()
  cursoDetalleEditar: CursoDetalle = this.CursoDetalleVacio()
  
  CursoDetalleVacio(): CursoDetalle{
    return {
      idCursoDetalle: "",
      codD: "",
      codigoC: ""
    }
  };

  ngOnInit(): void {
    this.apiCursoDetalle.getCursoDetalles().subscribe(data => {
      this.cursoDetalles = data
    })
  }

  eliminarCursoDetalle(indice:number):void{
    let cursoDetalle:CursoDetalle = this.cursoDetalles[indice];
    this.apiCursoDetalle.deleteCursoDetalle(cursoDetalle.idCursoDetalle).subscribe(
      () => {
        this.apiCursoDetalle.getCursoDetalles().subscribe((data: CursoDetalle[]) => {
          this.cursoDetalles = data;
        })
    });
  }

  editarCursoDetalle(){
    this.apiCursoDetalle.putCursoDetalle(this.cursoDetalleEditar.idCursoDetalle, this.cursoDetalleEditar).subscribe(() => {
      this.cursoDetalles[this.indice] = this.cursoDetalleEditar
      this.cursoDetalleEditar = this.CursoDetalleVacio()
    })
  }
  
  capturarIndice(i:number){
    this.indice = i
    this.cursoDetalleEditar = this.cursoDetalles[this.indice]
  }
}
