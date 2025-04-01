import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscucharComponent } from './escuchar.component';

describe('EscucharComponent', () => {
  let component: EscucharComponent;
  let fixture: ComponentFixture<EscucharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscucharComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscucharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
