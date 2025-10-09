import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { AlunoCadastroRequest } from '../../../../models/alunos.dto';
import { Router } from '@angular/router';
import { AlunoService } from '../../../../services/aluno.service';

@Component({
  selector: 'app-create',
  imports: [FormsModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class AlunoCreate {
  form: AlunoCadastroRequest;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
  ){
    this.form = {

    };
  }

  salvar() {
    this.alunoService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/autores"]),
      error: erro => {
        alert("Não foi possível cadastrar a autor");
        console.error(erro);
      }
    })
  }

}
