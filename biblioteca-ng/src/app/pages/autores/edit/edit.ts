import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { AutorEditarRequest } from '../../../models/autor.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from '../../../services/autor.service';

interface Nacionalidade {
  nome: string;
}

@Component({
  selector: 'app-edit',
  imports: [FormsModule,ButtonModule,InputTextModule, DatePickerModule, SelectModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})

export class AutorEdit {
  id: number;
  form: AutorEditarRequest;

  nacionalidades: Nacionalidade[] = [
    { nome: "Argentino" },
    { nome: "Boliviano" },
    { nome: "Brasileiro" },
    { nome: "Chileno" },
    { nome: "Colombiano" },
    { nome: "Equatoriano" },
    { nome: "Guyanês" },
    { nome: "Paraguaio" },
    { nome: "Peruano" },
    { nome: "Surinamês" },
    { nome: "Uruguaio" },
    { nome: "Venezuelano" }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService,
    private router: Router,
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {
      nome: "",
      nacionalidade: "",
      dataNascimento: ""
    }
    this.carregarAutor();
  }

  private carregarAutor(){
    this.autorService.getById(this.id).subscribe({
      next: autor => {
        this.form.nome = autor.nome
        this.form.nacionalidade = autor.nacionalidade
        this.form.dataNascimento = new Date(autor.dataNascimento).toLocaleDateString('pt-BR');
        
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possivel carregar o autor")
      }
    })
  }
  salvar() {
    this.autorService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/autores"]),
      error: erro => {
        alert("Não foi possível cadastrar a autor");
        console.error(erro);
      }
    })
  }
  

}
