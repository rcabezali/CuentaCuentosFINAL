import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNavegacionComponent } from './btn-navegacion.component';

describe('BtnNavegacionComponent', () => {
  let component: BtnNavegacionComponent;
  let fixture: ComponentFixture<BtnNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnNavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
