import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaCuentosComponent } from './portada-cuentos.component';

describe('PortadaCuentosComponent', () => {
  let component: PortadaCuentosComponent;
  let fixture: ComponentFixture<PortadaCuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortadaCuentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaCuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
