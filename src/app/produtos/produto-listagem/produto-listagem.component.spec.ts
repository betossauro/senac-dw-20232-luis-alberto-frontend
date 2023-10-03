import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListagemComponent } from './produto-listagem.component';

describe('ProdutoListagemComponent', () => {
  let component: ProdutoListagemComponent;
  let fixture: ComponentFixture<ProdutoListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoListagemComponent]
    });
    fixture = TestBed.createComponent(ProdutoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
