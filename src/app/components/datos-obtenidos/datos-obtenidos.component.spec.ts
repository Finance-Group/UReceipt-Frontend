import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosObtenidosComponent } from './datos-obtenidos.component';

describe('DatosObtenidosComponent', () => {
  let component: DatosObtenidosComponent;
  let fixture: ComponentFixture<DatosObtenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosObtenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosObtenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
