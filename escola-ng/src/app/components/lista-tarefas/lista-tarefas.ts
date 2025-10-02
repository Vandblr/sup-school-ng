import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  imports: [FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.scss'
})
export class ListaTarefas {

  tarefa: string = "";
  tarefas: Array<string> = [];

  adicionar(): void {
    let novaTarefa = `${this.tarefa}`;
    this.tarefas.push(novaTarefa);
    this.tarefa = "";
  }

  apagar(tarefaParaApagar: string): void {
    let indiceParaApagar = this.tarefas.indexOf(tarefaParaApagar);
    this.tarefas.splice(indiceParaApagar, 1);
  }

}
