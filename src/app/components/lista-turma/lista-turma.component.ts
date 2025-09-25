import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Turma {
 nome: string;
 sigla: string;
}

@Component({
  selector: 'app-lista-turma',
  imports: [FormsModule],
  templateUrl: './lista-turma.component.html',
  styleUrl: './lista-turma.component.scss'
})
export class ListaTurma {

  turmas: Turma[];

  constructor() {
    this.turmas = this.carregarTurmasLocalStorage();
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmasDoLocalStorage =  localStorage.getItem("turmas")
    if (turmasDoLocalStorage === null){
      return[];
    }
    let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
    return turmas;
  }

  apagar(turma: Turma): void {
    let indiceParaApagar = this.turmas.indexOf(turma);
    this.turmas.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }

  salvarLocalStorage(): void {
    let turmasString = JSON.stringify(this.turmas);
    localStorage.setItem("turmas",turmasString)
  }
  
}
