import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Materia{
  nome: string;
}

@Component({
  selector: 'app-lista-materias',
  imports: [FormsModule],
  templateUrl: './lista-materias.html',
  styleUrl: './lista-materias.scss'
})
export class ListaMateria {


  materias: Materia[];

  constructor() {
    this.materias = this.carregarMateriasLocalStorage();
  }

  carregarMateriasLocalStorage(): Materia[] {
    let materiasDoLocalStorage = localStorage.getItem("materias");
    if (materiasDoLocalStorage === null){
      return [];
    }

    let materias: Materia[] = JSON.parse(materiasDoLocalStorage);
    return materias;
  }

  apagar(materia: Materia): void {
    let indiceParaApagar = this.materias.indexOf(materia);
    this.materias.splice(indiceParaApagar, 1);
  }

  salvarLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);
    localStorage.setItem("materias", materiasString);
  }


}
