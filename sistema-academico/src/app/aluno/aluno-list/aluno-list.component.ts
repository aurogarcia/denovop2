import { Component } from '@angular/core';
 import { AlunoService } from './aluno.service';
 import { Aluno } from '../aluno.model';
 import { CommonModule } from 
'@angular/common';
 @Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
 })
 export class AlunoListComponent {
  alunos: Aluno[];
  constructor(private alunoService: 
AlunoService) {
 this.alunos = this.alunoService.listar();
  }
 }
