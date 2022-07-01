import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResumenComponent } from './modal-resumen.component';

describe('ModalResumenComponent', () => {
  let component: ModalResumenComponent;
  let fixture: ComponentFixture<ModalResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
