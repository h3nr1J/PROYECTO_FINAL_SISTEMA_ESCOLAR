import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Nota } from 'src/app/models/nota';
import { CursoService } from 'src/app/services/cursos/curso.service';
import { NotaService } from 'src/app/services/notas/nota.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ver-horario',
  templateUrl: './ver-horario.component.html',
  styleUrls: ['./ver-horario.component.css']
})
export class VerHorarioComponent implements OnInit {
  public cursos:Curso[] = []; 
  public notas: Nota[] = [];
  constructor(private usuario:UsuarioService,private apiCurso: CursoService,private notaApi: NotaService) { }

  ngOnInit(): void {
    
  }
  

}
