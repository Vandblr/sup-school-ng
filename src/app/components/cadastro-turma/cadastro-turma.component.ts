import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';


interface Turma {
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-cadastro-turma',
  imports: [FormsModule],
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.scss'
})
export class CadastroTurma {
  //propriedades
  turmas: Turma[];

  nome: string = "";
  sigla: string = "";

  constructor(private router: Router) {
    this.turmas = this.carregarTurmasLocalStorage();
  }

  //metodos
  salvar(): void {

    let turma: Turma = {
      nome: this.nome,
      sigla: this.sigla,
    };

    this.turmas.push(turma);
    this.salvarLocalStorage()
    this.router.navigate(["/turmas"])
  }

  salvarLocalStorage(): void {
    let turmasStrig = JSON.stringify(this.turmas);
    localStorage.setItem("turmas", turmasStrig);
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmasDoLocalStorage = localStorage.getItem("turmas");
    if (turmasDoLocalStorage === null) {
      return [];
    }

    let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
    return turmas;
  }





}
