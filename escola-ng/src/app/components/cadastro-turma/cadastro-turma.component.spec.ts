import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTurma } from './cadastro-turma.component';

describe('CadastroTurmaComponent', () => {
  let component: CadastroTurma;
  let fixture: ComponentFixture<CadastroTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTurma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTurma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
