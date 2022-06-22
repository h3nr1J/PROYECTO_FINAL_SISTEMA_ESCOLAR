import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario';
import { HorarioService } from 'src/app/services/horarios/horario.service';


@Component({
  selector: 'app-ver-horarios',
  templateUrl: './ver-horarios.component.html',
  styleUrls: ['./ver-horarios.component.css']
})
export class VerHorariosComponent implements OnInit {
  public horarios: Horario[] = [];
  constructor(private apiHorarios: HorarioService) { }

  ngOnInit(): void {
    this.apiHorarios.getHorarios().subscribe(data => {
      this.horarios = data;
    })
  }
  horarioVacio(): Horario {
    return {
      idHorario: "",
      hora: "",
      idCursoDetalle: "",
      codAu: "",
      idGrado: ""
    }
  }
  horarioAux = this.horarioVacio();

  horarioNuevo: Horario = this.horarioVacio();
  horarioEditar: Horario = this.horarioVacio();
  // REGISTRAR CURSOS

  indice: number = 0;
  capturarIndice(i: number) {
    this.indice = i
    this.horarioEditar = this.horarios[this.indice]
  }
  editarHorario(): void {
    this.apiHorarios.putHorario(this.horarioEditar.idHorario, this.horarioEditar).subscribe(() => {
      this.horarios[this.indice] = this.horarioEditar
      this.horarioEditar = this.horarioVacio()
    })
  }

  eliminarHorario(indice: number): void {
    let curso: Horario = this.horarios[indice];
    this.apiHorarios.deleteHorario(curso.idHorario).subscribe(
      () => {    
        this.apiHorarios.getHorarios().subscribe((data: Horario[]) => {
          this.horarios = data;
        })
      });
  }

}
