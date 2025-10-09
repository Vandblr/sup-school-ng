import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoCadastroRequest, AlunoResponse } from '../models/alunos.dto';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/autores"

  constructor (private httpClient: HttpClient) { }


getAll(): Observable<AlunoResponse[]> {
  return this.httpClient.get<AlunoResponse[]>(this.url);
} 

create(form: AlunoCadastroRequest): Observable<void> {
  return this.httpClient.post<void>(this.url, form);
}

}