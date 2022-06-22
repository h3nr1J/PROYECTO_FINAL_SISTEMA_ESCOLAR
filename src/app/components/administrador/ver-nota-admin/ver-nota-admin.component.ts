import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/notas/nota.service';

@Component({
  selector: 'app-ver-nota-admin',
  templateUrl: './ver-nota-admin.component.html',
  styleUrls: ['./ver-nota-admin.component.css']
})
export class VerNotaAdminComponent implements OnInit {

  public notas: Nota[] = [];
  constructor(private apiNotas: NotaService) { }

  ngOnInit(): void {
    this.apiNotas.getNotas().subscribe(data => {
      this.notas = data;
    })
  }
  notaVacio(): Nota {
    return {
      idNota: "",
      nota1: 0,
      nota2: 0,
      nota3: 0,
      promedio: 0,
      idAlumno: "",
      idCursoDetalle: ""
    }
  }

  notaAux = this.notaVacio();

  notaNueva: Nota = this.notaVacio();
  // notaEditar: Nota = this.notaVacio();

  // indice: number = 0;
  // capturarIndice(i: number) {
  //   this.indice = i
  //   this.notaEditar = this.notas[this.indice]
  // }
  // editarNota(): void {
  //   this.apiNotas.patchNota(this.notaEditar.idNota, this.notaEditar).subscribe(() => {
  //     this.notas[this.indice] = this.notaEditar
  //     this.notaEditar = this.notaVacio()
  //   })
  // }

  // eliminarNota(indice: number): void {
  //   let matricula: Nota = this.notas[indice];
  //   this.apiNotas.deleteNota(matricula.idNota).subscribe(
  //     () => {
  //       this.apiNotas.getNotas().subscribe((data: Nota[]) => {
  //         this.notas = data;
  //       })
  //     });
  // }

}
