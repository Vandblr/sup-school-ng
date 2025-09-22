import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-media',
  imports: [FormsModule],
  templateUrl: './calculadora-media.html',
  styleUrl: './calculadora-media.scss'
})
export class CalculadoraMedia {
  nota1?: number;
  nota2?: number;
  nota3?: number;

notas(): void {
   let media: number = (this.nota1! + this.nota2! + this.nota3!) / 3;

   let resultado: string = media >= 7 ? "Aprovado" : "Reprovado";

   alert(`Média: ${media.toFixed(2)}\nSituação: ${resultado}`);
}


}
