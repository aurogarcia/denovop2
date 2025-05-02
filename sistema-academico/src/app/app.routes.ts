import { Routes } from '@angular/router';
 import { AlunoListComponent } from './aluno/aluno-listComponent';
 import { AlunoFormComponent } from './aluno/aluno-form.component';
 export const routes: Routes = [
  { path: '', component: AlunoListComponent },
  { path: 'novo', component: AlunoFormComponent }
 ];
