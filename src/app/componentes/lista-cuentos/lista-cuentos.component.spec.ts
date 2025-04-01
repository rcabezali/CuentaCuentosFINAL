import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentosComponent } from './lista-cuentos.component';

describe('ListaCuentosComponent', () => {
  let component: ListaCuentosComponent;
  let fixture: ComponentFixture<ListaCuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCuentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
