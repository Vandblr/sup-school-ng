import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-temperatura',
  imports: [FormsModule],
  templateUrl: './calculadora-temperatura.html',
  styleUrl: './calculadora-temperatura.scss'
})
export class CalculadoraTemperatura {

  temperatura?: number;
  resultado?: number;

  kelvinParaFahrenheit(): void {
    this.resultado = (this.temperatura! - 273.15) * 9/5 + 32;
    alert(`Resultado: ${this.resultado.toFixed(2)} °F`);
  }

  fahrenheitParaKelvin(): void {
    this.resultado = (this.temperatura! - 32) * 5/9 + 273.15;
    alert(`Resultado: ${this.resultado.toFixed(2)} K`);
  }

  kelvinParaCelsius(): void {
    this.resultado = this.temperatura! - 273.15;
    alert(`Resultado: ${this.resultado.toFixed(2)} °C`);
  }

  celsiusParaKelvin(): void {
    this.resultado = this.temperatura! + 273.15;
    alert(`Resultado: ${this.resultado.toFixed(2)} K`);
  }

  fahrenheitParaCelsius(): void {
    this.resultado = (this.temperatura! - 32) * 5/9;
    alert(`Resultado: ${this.resultado.toFixed(2)} °C`);
  }

  celsiusParaFahrenheit(): void {
    this.resultado = (this.temperatura! * 9/5) + 32;
    alert(`Resultado: ${this.resultado.toFixed(2)} °F`);
  }

}
