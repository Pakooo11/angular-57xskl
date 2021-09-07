import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentproyectoComponent } from './componentproyecto.component';

describe('ComponentproyectoComponent', () => {
  let component: ComponentproyectoComponent;
  let fixture: ComponentFixture<ComponentproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
