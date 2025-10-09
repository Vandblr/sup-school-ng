import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AlunoService } from '../../../services/aluno.service';
import { AlunoResponse } from '../../../models/alunos.dto';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule, ButtonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class AlunoList {
 alunos: AlunoResponse[] = [];

 constructor(private alunoService: AlunoService) {}
 ngOnInit() {
  this.carregarAlunos();
 }

 private carregarAlunos() {
  this.alunoService.getAll().subscribe({
    next: alunos => this.alunos = alunos,
    error: erro => {
      alert("Não foi possivel carregar os alunos");
      console.error("Ocorreu um erro ao carregar os alunos" + erro)
    }
  });
 }

}


