import { Component } from '@angular/core';
import { EmprestimoResponse } from '../../../models/emprestimo.dto';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [FormsModule, ButtonModule, CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class EmprestimoList {

  emprestimos: EmprestimoResponse[] = [];


  ngOnInit() {
    this.carregarEmprestimos();
  }

  private carregarEmprestimos() {
    this.emprestimoService.getAll().subscribe({
      next: emprestimos => this.emprestimos = emprestimos,
      error: erro => {
        alert("Não foi possivel carregar os emprestimos");
        console.error("Ocorreu um erro ao carregar os emprestimos: " + erro)
      }
    });
  }
}
