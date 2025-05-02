import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { AlunoService } from '../services/aluno.service';
 import { Aluno } from '../model/aluno';
 @Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
 })
 export class AlunoFormComponent {
  nome: string = '';
  nota: number = 0;
  constructor(private alunoService: AlunoService) {}
  adicionar() {
 const novoAluno = new Aluno(this.nome, this.nota);
 this.alunoService.adicionar(novoAluno);
 this.nome = '';
 this.nota = 0;
  }
 }

