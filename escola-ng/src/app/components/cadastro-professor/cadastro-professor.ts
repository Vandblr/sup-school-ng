import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Professor {
  id: string;
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  cnpj: string;
  chavePix: string;
  nomeFantasia: string;
  valorHora: number;
  celular: string;
}

@Component({
  selector: 'app-cadastro-professor',
  imports: [FormsModule],
  templateUrl: './cadastro-professor.html',
  styleUrl: './cadastro-professor.scss',
})
export class CadastroProfessor {
  professores: Professor[];

  constructor(private router: Router) {
    this.professores = this.carregarProfessoresLocalStorage();
  }


  salvarLocalStorage(): void {
    let professoresString = JSON.stringify(this.professores);
    localStorage.setItem('professores', professoresString);
  }

  carregarProfessoresLocalStorage(): Professor[] {
    let professoresDoLocalStorage = localStorage.getItem("professores");
    if (professoresDoLocalStorage === null){
      return [];
    }
    
    let professores: Professor[] = JSON.parse(professoresDoLocalStorage);
    return professores;
  }

    apagar(professor: Professor): void {
    let indiceParaApagar = this.professores.indexOf(professor);
    this.professores.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }


    editar(professor: Professor): void {
    this.router.navigate([`/professores/editar/${professor.id}`])
  }
  
}
