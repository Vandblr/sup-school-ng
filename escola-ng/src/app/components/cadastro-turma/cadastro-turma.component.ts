import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Turma {
  id: string;
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-cadastro-turma',
  imports: [FormsModule],
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.scss',
})
export class CadastroTurma {
  //propriedades
  turmas: Turma[];

  nome: string = '';
  sigla: string = '';

  idEditar?: string;

  constructor(private router: Router, private activedRoute: ActivatedRoute) {
    this.turmas = this.carregarTurmasLocalStorage();
    let idParaEditar = this.activedRoute.snapshot.paramMap.get('id');
    if (idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();

      this.preencherCaposParaEditar();
    }
  }

  preencherCaposParaEditar(): void {
    let turma = this.turmas.filter((turma) => turma.id === this.idEditar)[0];
    this.nome = turma.nome;
    this.sigla = turma.sigla;
  }

  //metodos
  salvar(): void {
    this.salvarLocalStorage();
    this.router.navigate(['/turmas']);
  }

  editarTurma(nome: string, silga: string): void {
    let indiceLista = this.turmas.findIndex((aluno) => aluno.id === this.idEditar);
    this.turmas[indiceLista].nome = this.nome;
    this.turmas[indiceLista].sigla = this.sigla;
  }

  cadastrarTurma(nome: string, sigla: string): void {
    let turma: Turma = {
      id: crypto.randomUUID(),
      nome: this.nome,
      sigla: this.sigla,
    };

    this.turmas.push(turma);
  }

  salvarLocalStorage(): void {
    let turmasStrig = JSON.stringify(this.turmas);
    localStorage.setItem('turmas', turmasStrig);
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmasDoLocalStorage = localStorage.getItem('turmas');
    if (turmasDoLocalStorage === null) {
      return [];
    }

    let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
    return turmas;
  }
}
