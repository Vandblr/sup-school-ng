import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';


export interface NavBarMenu{
  link: string;
  titulo:string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar { 

  //Input => entrada
  //Output => saida
  
  @Input() menus: NavBarMenu[] = [];

  
}
