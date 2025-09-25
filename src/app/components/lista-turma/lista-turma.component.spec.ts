import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurma } from './lista-turma.component';

describe('ListaTurmaComponent', () => {
  let component: ListaTurma;
  let fixture: ComponentFixture<ListaTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTurma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTurma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
