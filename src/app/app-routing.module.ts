import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlumnoComponent } from './components/administrador/registrar-alumno/registrar-alumno.component';
import { RegistrarAulaComponent } from './components/administrador/registrar-aula/registrar-aula.component';
import { RegistrarCursoDetalleComponent } from './components/administrador/registrar-curso-detalle/registrar-curso-detalle.component';
import { RegistrarCursoComponent } from './components/administrador/registrar-curso/registrar-curso.component';
import { RegistrarDocenteComponent } from './components/administrador/registrar-docente/registrar-docente.component';
import { RegistrarHorarioComponent } from './components/administrador/registrar-horario/registrar-horario.component';
import { VerNotaAdminComponent } from './components/administrador/ver-nota-admin/ver-nota-admin.component';
import { LoginComponent } from './components/compartidos/login/login.component';
import { PerfilComponent } from './components/compartidos/perfil/perfil.component';
import { RegistrarAsistenciaComponent } from './components/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistrarNotasComponent } from './components/docente/registrar-notas/registrar-notas.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/login', pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'registrar-alumno', component: RegistrarAlumnoComponent
  },
  {
    path: 'registrar-aula', component: RegistrarAulaComponent
  },
  {
    path: 'registrar-docente',component: RegistrarDocenteComponent
  },
  {
    path: 'registrar-curso',component: RegistrarCursoComponent
  },
  {
    path: 'registrar-horario',component: RegistrarHorarioComponent
  },
  {
    path: 'registrar-curso-detalle', component: RegistrarCursoDetalleComponent
  },
  {
    path: 'ver-notas-admin',component: VerNotaAdminComponent
  },
  {
    path: 'registrar-notas', component:  RegistrarNotasComponent
  },
  {
    path: 'registrar-asistencias', component: RegistrarAsistenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
