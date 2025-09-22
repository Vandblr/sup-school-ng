import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';
import { CalculadoraRetangulo } from './components/calculadora-retangulo/calculadora-retangulo';
import { CalculadoraMedia } from './components/calculadora-media/calculadora-media';
import { CalculadoraTemperatura } from './components/calculadora-temperatura/calculadora-temperatura';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';

export const routes: Routes = [
    {path: "calculadora", component: Calculadora},
    {path: "lista-pessoas", component: ListaPessoas},
    {path: "calculadora-retangulo", component: CalculadoraRetangulo},
    {path: "calculadora-media", component: CalculadoraMedia},
    {path: "calculadora-temperatura", component: CalculadoraTemperatura},
    {path: "lista-tarefas", component: ListaTarefas},
    
];
