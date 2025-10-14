import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UsuarioCadastroRequest } from '../../../models/usuario.dto';
import { UsuarioService } from '../../../services/usuario.service';
import { InputText } from "primeng/inputtext";

@Component({
  selector: 'app-create',
  imports: [FormsModule, ButtonModule, CommonModule, RouterLink, InputText],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class UsuarioCreate {

  form: UsuarioCadastroRequest;
value: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ){
    this.form = {
    id: 0,
    nome: "", 
    email: "",
    telefone: 0,
    endereco:""
    };
  }

  salvar(){
    this.usuarioService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/usuarios"]),
      error: erro => {
        alert("Não foi possível cadastrar o usuario");
        console.error(erro)
      }
    })

  }

}
