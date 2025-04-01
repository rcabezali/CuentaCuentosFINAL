import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoComponent } from './cuento.component';

describe('CuentoComponent', () => {
  let component: CuentoComponent;
  let fixture: ComponentFixture<CuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
