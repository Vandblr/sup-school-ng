import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';
import { CalculadoraRetangulo } from './components/calculadora-retangulo/calculadora-retangulo';
import { CalculadoraMedia } from './components/calculadora-media/calculadora-media';
import { CalculadoraTemperatura } from './components/calculadora-temperatura/calculadora-temperatura';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';
import { ListaAlunos } from './components/lista-alunos/lista-alunos';
import { CadastroAluno } from './components/cadastro-aluno/cadastro-aluno';
import { ListaTurma } from './components/lista-turma/lista-turma.component';
import { CadastroTurma } from './components/cadastro-turma/cadastro-turma.component';
import { CadastroMateria } from './components/cadastro-materia/cadastro-materia';
import { ListaMateria } from './components/lista-materias/lista-materias';
import { CadastroProfessor } from './components/cadastro-professor/cadastro-professor';

export const routes: Routes = [
    { path: "calculadora", component: Calculadora },
    { path: "lista-pessoas", component: ListaPessoas },
    { path: "calculadora-retangulo", component: CalculadoraRetangulo },
    { path: "calculadora-media", component: CalculadoraMedia },
    { path: "calculadora-temperatura", component: CalculadoraTemperatura },
    { path: "lista-tarefas", component: ListaTarefas },
    { path: "alunos", component: ListaAlunos },
    { path: "alunos/cadastro/:id", component: CadastroAluno },
    { path: "turmas", component: ListaTurma },
    { path: "turmas/cadastro", component: CadastroTurma },
    { path: "materia/cadastro/", component: CadastroMateria },
    { path: "materias/editar/:id", component: CadastroMateria},
    { path: "lista/materia", component: ListaMateria },
    { path: "professor/cadastro", component: CadastroProfessor },
    { path: "alunos/editar/:id", component: CadastroAluno },
    


];

