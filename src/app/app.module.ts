import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilComponent } from './components/compartidos/perfil/perfil.component';
import { LoginComponent } from './components/compartidos/login/login.component';
import { SidebarComponent } from './components/compartidos/sidebar/sidebar.component';
import { HorarioComponent } from './components/parcialComp/horario/horario.component';
import { ListaAlumnosComponent } from './components/parcialComp/lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnoComponent } from './components/administrador/registrar-alumno/registrar-alumno.component';
import { RegistrarDocenteComponent } from './components/administrador/registrar-docente/registrar-docente.component';
import { RegistrarCursoComponent } from './components/administrador/registrar-curso/registrar-curso.component';
import { RegistrarAulaComponent } from './components/administrador/registrar-aula/registrar-aula.component';
import { RegistrarCursoDetalleComponent } from './components/administrador/registrar-curso-detalle/registrar-curso-detalle.component';
import { RegistrarHorarioComponent } from './components/administrador/registrar-horario/registrar-horario.component';
import { VerAlumnosComponent } from './components/administrador/ver-alumnos/ver-alumnos.component';
import { VerDocentesComponent } from './components/administrador/ver-docentes/ver-docentes.component';
import { VerAsistenciaComponent } from './components/administrador/ver-asistencia/ver-asistencia.component';
import { VerAulasComponent } from './components/administrador/ver-aulas/ver-aulas.component';
import { VerCursosComponent } from './components/administrador/ver-cursos/ver-cursos.component';
import { VerCursoDetalleComponent } from './components/administrador/ver-curso-detalle/ver-curso-detalle.component';
import { VerHorariosComponent } from './components/administrador/ver-horarios/ver-horarios.component';
import { VerMatriculasComponent } from './components/administrador/ver-matriculas/ver-matriculas.component';
import { VerNotasComponent } from './components/alumno/ver-notas/ver-notas.component';
import { VerNotaAdminComponent } from './components/administrador/ver-nota-admin/ver-nota-admin.component';

import { VerHorarioComponent } from './components/alumno/ver-horario/ver-horario.component';
import { RegistrarNotasComponent } from './components/docente/registrar-notas/registrar-notas.component';
import { RegistrarAsistenciaComponent } from './components/docente/registrar-asistencia/registrar-asistencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';//Usar Api

//Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    LoginComponent,
    SidebarComponent,
    HorarioComponent,
    ListaAlumnosComponent,
    RegistrarAlumnoComponent,
    RegistrarDocenteComponent,
    RegistrarCursoComponent,
    RegistrarAulaComponent,
    RegistrarCursoDetalleComponent,
    RegistrarHorarioComponent,
    VerAlumnosComponent,
    VerDocentesComponent,
    VerAsistenciaComponent,
    VerAulasComponent,
    VerCursosComponent,
    VerCursoDetalleComponent,
    VerHorariosComponent,
    VerMatriculasComponent,
    VerNotasComponent,
    VerHorarioComponent,
    RegistrarNotasComponent,
    RegistrarAsistenciaComponent,
    VerNotaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
