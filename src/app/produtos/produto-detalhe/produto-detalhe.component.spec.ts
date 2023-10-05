import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalheComponent } from './produto-detalhe.component';

describe('ProdutoDetalheComponent', () => {
  let component: ProdutoDetalheComponent;
  let fixture: ComponentFixture<ProdutoDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoDetalheComponent]
    });
    fixture = TestBed.createComponent(ProdutoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
