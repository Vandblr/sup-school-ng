import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioResponse } from '../../../models/usuario.dto';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule,ButtonModule,RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class usuarioList {
usuarios: UsuarioResponse[] = [];

constructor(private UsuarioService: UsuarioService) {
  
}

ngOnInit() {
  this.carregarUsuarios();
}

private carregarUsuarios() {
  this.UsuarioService.getAll().subscribe({
    next: usuarios => this.usuarios = usuarios,
    error: erro => {
      alert("Não foi possivel carregar os usuarios");
      console.error("Ocorreu um erro ao carregar os usuarios: " + erro)
    }
  })
}
}
