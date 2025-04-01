import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuentoComponent } from './info-cuento.component';

describe('InfoCuentoComponent', () => {
  let component: InfoCuentoComponent;
  let fixture: ComponentFixture<InfoCuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCuentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
