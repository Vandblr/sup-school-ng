import { Component } from '@angular/core';
import { Navbar, NavBarMenu } from "./components/navbar/navbar";

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menus: NavBarMenu[];

  constructor() {
    this.menus = [
      { link: "calucaldora", titulo: "Calculadora" },
      { link: "lista-pessoas", titulo: "Lista pessoas" },
      { link: "calculadora-retangulo", titulo: "Calcula retangulo" },
      { link: "calculadora-media", titulo: "Calculadora media" },
      { link: "calculadora-temperatura", titulo: " Calculadora temperatura" },
      { link: "lista-tarefa", titulo: "Lista tarefas" },
      { link: "alunos", titulo: "Alunos" },
      { link: "turmas/cadastro", titulo: "Turmas " },
      { link: "materia/cadastro", titulo: "Materias" },
    ]
  }

}
